if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    if ('serviceWorker' in navigator) {
        // Debug lokal: pastikan tidak ada SW lama yang menahan versi JS lama.
        navigator.serviceWorker.getRegistrations().then((regs) => {
            regs.forEach((reg) => reg.unregister());
        });
    }

    if ('caches' in window) {
        caches.keys().then((keys) => {
            keys.filter((k) => k.startsWith('kaleindo')).forEach((k) => caches.delete(k));
        });
    }
}

if (
    'serviceWorker' in navigator &&
    location.protocol === 'https:' &&
    location.hostname !== 'localhost' &&
    location.hostname !== '127.0.0.1'
) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' })
            .then((reg) => {
                reg.update().catch(() => { });
                setInterval(() => reg.update().catch(() => { }), 60 * 60 * 1000);
            })
            .catch((err) => console.error('SW register gagal:', err));
    });
}
// Initialize State variables
let currentThemeIndex = 0;
let currentUser = null;

let currentDate = new Date();
let isAnimating = false;
let highlightTriggered = false;
let isNotesView = false;
let isMobileLandscapeMode = false;

let currentNoteMode = 'weekly';
let currentNoteDate = new Date();
// Variabel untuk menyimpan argument terakhir showDetail agar bisa refresh modal
let lastDetailArgs = null;

// Mengambil data dari localStorage, jika kosong pakai default
let settings = JSON.parse(localStorage.getItem('rhadzCalSettings')) || {
    showHijri: false,
    showPasaran: false,
    showObservances: false,
    showFamily: true,
    transitionType: 'none',
    darkMode: false,
    sidebarCollapsed: false,
    rightPanelCollapsed: false
};
// Fungsi pembantu untuk menyimpan setiap ada perubahan
function saveSettingsToStorage() {
    localStorage.setItem('rhadzCalSettings', JSON.stringify(settings));
};
function updateTransition(val) {
    settings.transitionType = val;
    saveSettingsToStorage(); // Simpan pilihan transisi ke memori
    saveToCloud();
}

// HISTORY API HANDLER: Mengatur Tombol Back HP
window.onpopstate = function (event) {
    const hash = location.hash;
    const modal = document.getElementById('selectorModal');

    // KASUS 1: Jika MODAL terbuka, tutup modalnya saja.
    if (modal && modal.classList.contains('active')) {
        // Panggil closeModal dengan parameter true (artinya trigger dari history)
        closeModal(true);
        return;
    }

    // KASUS 2: Jika berada di halaman NOTES
    if (typeof isNotesView !== 'undefined' && isNotesView) {
        // Jika URL berubah jadi #calendar atau kosong, BARU pindah ke Kalender
        if (hash === '#calendar' || hash === '') {
            toggleNotesView(true); // Ini akan mematikan notes view
        }
        // Jika hash masih #notes, JANGAN LAKUKAN APA-APA (Biarkan tetap di notes)
        return;
    }

    // KASUS 3: Default Safety
    if (!hash || hash === '#home') {
        history.replaceState({ view: 'calendar' }, '', '#calendar');
    }
};

function restoreAuthUIFromCache() {
    try {
        const cached = localStorage.getItem('rhadzAuthUserSnapshot');
        if (!cached) return;
        const { name } = JSON.parse(cached);

        const btnLoginDesktop = document.getElementById('btnLoginGoogleDesktop');
        const panelUserDesktop = document.getElementById('loggedInUserDesktop');
        const txtUserDesktop = document.getElementById('desktopUserName');
        const desktopSyncText = document.getElementById('desktopSyncStatusText');

        if (btnLoginDesktop) btnLoginDesktop.classList.add('hidden');
        if (panelUserDesktop) {
            panelUserDesktop.classList.remove('hidden');
            panelUserDesktop.classList.add('flex');
        }
        if (txtUserDesktop) txtUserDesktop.innerHTML = `Login sebagai <b>${name}</b>`;
        if (desktopSyncText) {
            desktopSyncText.innerHTML = '<i class="fas fa-circle-notch fa-spin mr-2"></i>MEMUAT SESSI...';
        }
    } catch (e) {
        console.error('Gagal restore auth UI dari cache:', e);
    }
}

function init() {
    restoreAuthUIFromCache();

    if (window.innerWidth >= 1024) {
        // Default tampilan web/desktop: kedua panel tertutup agar agenda in-cell tampil.
        settings.sidebarCollapsed = true;
        settings.rightPanelCollapsed = true;
        saveSettingsToStorage();
    }

    // 1. Terapkan Tema Warna
    const savedTheme = localStorage.getItem('rhadzThemeIndex');
    if (savedTheme !== null) applyTheme(parseInt(savedTheme));

    // 2. Terapkan Dark Mode
    updateDarkModeVisuals();

     restorePanelStates();

    // 3. Sinkronkan tampilan menu
    syncSettingsUI();

    // 4. Terapkan mode adaptif (mobile portrait / mobile landscape / desktop)
    updateAdaptiveLayoutMode(true);
    ensureLandscapeTodayButton();
    updateLandscapeTodayButtonVisibility();

    // 5. Render komponen utama
    renderCalendar();
    updateQuote();

    // 6. Setup History & Back Button (Insight User)
    // Kita paksa aplikasi mulai dari hash #calendar sebagai base entry.
    if (location.hash !== '#calendar' && location.hash !== '#notes') {
        history.replaceState({ view: 'calendar' }, '', '#calendar');
    } else if (location.hash === '#notes') {
        isNotesView = false;
        toggleNotesView(true);
    }

    // 7. Listener resize/orientasi & swipe
    setupSwipe();
    window.addEventListener('resize', handleViewportChange);
    window.addEventListener('orientationchange', handleViewportChange);

    setupKeyboardShortcuts();
    startAlarmSystem(); // <--- Panggil fungsi monitoring alarm

    // TAMBAHKAN INI: Update tampilan sidebar saat load awal
    updateDesktopSidebarUI();

    // 8. Timeout transisi
    setTimeout(() => {
        const transSelect = document.getElementById('transitionSelect');
        if (transSelect) transSelect.value = settings.transitionType;
    }, 100);

    setupFabScroll();
}

// FUNGSI BARU: Restore semua panel states
function restorePanelStates() {
    // Restore Panel Kiri (Sidebar)
    if (settings.sidebarCollapsed) {
        const sidebar = document.querySelector('.desktop-sidebar');
        const arrowBtn = document.getElementById('sidebarArrowBtn');
        if (sidebar && arrowBtn) {
            const icon = arrowBtn.querySelector('i');
            sidebar.classList.add('collapsed');
            arrowBtn.classList.add('collapsed');
            icon.classList.remove('fa-chevron-left');
            icon.classList.add('fa-chevron-right');
            arrowBtn.setAttribute('title', 'Buka Menu');
        }
    }
    
    // Restore Panel Kanan (Agenda)
    if (settings.rightPanelCollapsed) {
        const panel = document.getElementById('rightPanelDesktop');
        const arrowBtn = document.getElementById('rightArrowBtn');
        if (panel && arrowBtn) {
            const icon = arrowBtn.querySelector('i');
            panel.classList.add('collapsed');
            arrowBtn.classList.add('collapsed');
            document.body.classList.add('right-panel-closed');
            icon.classList.remove('fa-chevron-right');
            icon.classList.add('fa-chevron-left');
            arrowBtn.setAttribute('title', 'Buka Agenda');
        }
    }
}

function setupFabScroll() {
    const container = document.getElementById('notesListContainer');
    const fab = document.getElementById('floatingNotesBtn');
    let lastScrollTop = 0;

    if (!container || !fab) return;

    container.addEventListener('scroll', () => {
        const scrollTop = container.scrollTop;
        
        // Logika: Jika scroll lebih dari 50px DAN arah ke bawah -> Kecilkan
        if (scrollTop > lastScrollTop && scrollTop > 50) {
            fab.classList.add('shrink');
        } else {
            // Jika scroll ke atas -> Lebarkan kembali
            fab.classList.remove('shrink');
        }
        
        lastScrollTop = scrollTop;
    }, { passive: true });
}

function syncSettingsUI() {
    document.getElementById('dsk-pasaran').checked = settings.showPasaran;
    document.getElementById('dsk-hijri').checked = settings.showHijri;
    document.getElementById('dsk-obs').checked = settings.showObservances;
}

function cycleTheme() {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    applyTheme(currentThemeIndex);
}

function applyTheme(index, shouldSyncCloud = true) {
    currentThemeIndex = index;
    localStorage.setItem('rhadzThemeIndex', index); // Simpan pilihan tema

    const theme = themes[currentThemeIndex];

    // Simpan class state struktural sebelum reset
    const hadRightPanelClosed = document.body.classList.contains('right-panel-closed');
    const hadMobileLandscape = document.body.classList.contains('mobile-landscape-mode');

    // 1. Reset semua class dulu (ini yang bikin Dark Mode hilang)
    document.body.className = '';

    // 2. Pasang class tema warna baru (jika ada)
    if (theme.class) {
        document.body.classList.add(theme.class);
    }

    // Handle theme and dark mode interaction
    // 3. Cek apakah Mode Gelap sedang aktif? Jika ya, pasang lagi class-nya!
    if (settings.darkMode) {
        document.body.classList.add('dark-mode');
    }

    // 4. Pulihkan class state struktural agar agenda in-cell tetap tampil
    if (hadRightPanelClosed) document.body.classList.add('right-panel-closed');
    if (hadMobileLandscape) document.body.classList.add('mobile-landscape-mode');

    // 4. Update Label Nama Tema
    const desktopLabel = document.getElementById('themeNameDesktop');
    if (desktopLabel) desktopLabel.textContent = theme.name;

    const modalLabel = document.getElementById('themeNameModal');
    if (modalLabel) modalLabel.textContent = theme.name;

    // 5. Update Border Tombol di Modal
    themes.forEach((t, i) => {
        const btn = document.getElementById(`themeBtn-${i}`);
        if (btn) {
            btn.className = `w-10 h-10 rounded-full border-2 transition ${t.colorBg} hover:scale-110 shadow-sm`;

            if (i === index) {
                btn.classList.add(t.borderColor, 'ring-2', t.ringColor);
                btn.classList.remove('border-transparent');
            } else {
                btn.classList.add('border-transparent');
            }
        }
    });

    if (shouldSyncCloud) {
        saveToCloud();
    }
}

function detectMobileLandscapeMode() {
    return window.innerWidth < 1024 && window.matchMedia('(orientation: landscape)').matches;
}

function updateAdaptiveLayoutMode(force = false) {
    const nextMode = detectMobileLandscapeMode();
    if (!force && nextMode === isMobileLandscapeMode) return;

    isMobileLandscapeMode = nextMode;
    document.body.classList.toggle('mobile-landscape-mode', isMobileLandscapeMode);
    updateLandscapeTodayButtonVisibility();

    // Dalam mode mobile landscape, paksa tetap di kalender (bukan daftar notes terpisah).
    if (isMobileLandscapeMode && isNotesView) {
        toggleNotesView(true);
    }
}

function handleViewportChange() {
    updateAdaptiveLayoutMode();
    renderCalendar();
}

function ensureLandscapeTodayButton() {
    if (document.getElementById('landscapeTodayBtn')) return;
    const mainContent = document.querySelector('.main-content');
    if (!mainContent) return;

    const btn = document.createElement('button');
    btn.id = 'landscapeTodayBtn';
    btn.type = 'button';
    btn.className = 'landscape-today-btn';
    btn.setAttribute('title', 'Ke Hari Ini');
    btn.innerHTML = '<i class="fas fa-calendar-day"></i>';
    btn.onclick = goToToday;
    mainContent.appendChild(btn);
}

function updateLandscapeTodayButtonVisibility() {
    const btn = document.getElementById('landscapeTodayBtn');
    if (!btn) return;
    btn.classList.toggle('show', isMobileLandscapeMode);
}

function getStoredNotes() {
    const stored = localStorage.getItem('rhadzCalNotes');
    let data = stored ? JSON.parse(stored) : {};

    // --- AUTO MIGRATION LOGIC ---
    // Cek apakah data masih format lama (String)? Jika ya, ubah ke Array Object
    let migrated = false;
    Object.keys(data).forEach(key => {
        if (typeof data[key] === 'string') {
            // Konversi string lama menjadi object note pertama
            data[key] = [{
                id: Date.now() + Math.random(), // Random ID
                text: data[key],
                category: 'pribadi', // Default category
                time: '',
                isCompleted: false
            }];
            migrated = true;
        }
    });

    if (migrated) {
        localStorage.setItem('rhadzCalNotes', JSON.stringify(data));
    }

    return data;
}

function getStoredBirthdays() {
    const stored = localStorage.getItem('rhadzCalBirthdays');
    let data = stored ? JSON.parse(stored) : [];

    if (!Array.isArray(data)) data = [];

    const normalized = data
        .map((b) => ({
            id: b.id || (Date.now() + Math.random()),
            name: typeof b.name === 'string' ? b.name.trim() : '',
            day: Number(b.day),
            month: Number(b.month),
            year: Number(b.year)
        }))
        .filter((b) =>
            b.name &&
            Number.isInteger(b.day) && b.day >= 1 && b.day <= 31 &&
            Number.isInteger(b.month) && b.month >= 0 && b.month <= 11 &&
            Number.isInteger(b.year) && b.year >= 1000 && b.year <= 9999
        );

    if (normalized.length !== data.length) {
        localStorage.setItem('rhadzCalBirthdays', JSON.stringify(normalized));
    }

    return normalized;
}

function getAllBirthdays() {
    const customBirthdays = getStoredBirthdays();
    const customMapped = customBirthdays.map((b) => ({ ...b, source: 'custom' }));
    if (!settings.showFamily) return customMapped;
    const familyMapped = familyBirthdays.map((b, idx) => ({
        ...b,
        id: b.id || `family-${idx}-${b.day}-${b.month}-${b.year}`,
        source: 'family'
    }));
    return [...familyMapped, ...customMapped];
}

function resolveBirthdayDateForYear(birthday, targetYear) {
    const isFeb29Birthday = birthday.month === 1 && birthday.day === 29;
    const day = (isFeb29Birthday && !isGregorianLeapYear(targetYear)) ? 28 : birthday.day;
    return { day, month: birthday.month };
}

function getBirthdaysForDate(d, m, y) {
    if (!Number.isInteger(y)) return [];
    const allBirthdays = getAllBirthdays();
    return allBirthdays.filter((b) => {
        const resolved = resolveBirthdayDateForYear(b, y);
        return resolved.day === d && resolved.month === m;
    });
}

function addBirthday(day, month, birthYear, name) {
    const birthdays = getStoredBirthdays();
    birthdays.push({
        id: Date.now(),
        name: name.trim(),
        day,
        month,
        year: birthYear
    });

    localStorage.setItem('rhadzCalBirthdays', JSON.stringify(birthdays));
    renderCalendar();
    renderEventsList(currentDate.getMonth(), currentDate.getFullYear());
    saveToCloud();
    return birthdays;
}

function updateBirthday(birthdayId, name, birthYear) {
    const birthdays = getStoredBirthdays();
    const target = birthdays.find((b) => String(b.id) === String(birthdayId));
    if (!target) return false;

    target.name = name.trim();
    target.year = birthYear;

    localStorage.setItem('rhadzCalBirthdays', JSON.stringify(birthdays));
    renderCalendar();
    renderEventsList(currentDate.getMonth(), currentDate.getFullYear());
    saveToCloud();
    return true;
}

function deleteBirthday(birthdayId) {
    const birthdays = getStoredBirthdays();
    const filtered = birthdays.filter((b) => String(b.id) !== String(birthdayId));
    localStorage.setItem('rhadzCalBirthdays', JSON.stringify(filtered));
    renderCalendar();
    renderEventsList(currentDate.getMonth(), currentDate.getFullYear());
    saveToCloud();
}

// --- NEW CRUD OPERATIONS ---

function addNote(dateKey, text, category = 'pribadi', time = '') {
    const notes = getStoredNotes();
    if (!notes[dateKey]) notes[dateKey] = [];

    notes[dateKey].push({
        id: Date.now(),
        text: text,
        category: category,
        time: time,
        isCompleted: false
    });

    localStorage.setItem('rhadzCalNotes', JSON.stringify(notes));
    renderCalendar(); // Update dot indikator
    renderNotesList(); // Update global list jika sedang dibuka
    saveToCloud();
    return notes[dateKey]; // Return updated list
    
}

function deleteNote(dateKey, noteId) {
    const notes = getStoredNotes();
    if (notes[dateKey]) {
        notes[dateKey] = notes[dateKey].filter(n => n.id != noteId); // Pakai filter != karena ID bisa number/string dari JSON
        if (notes[dateKey].length === 0) delete notes[dateKey]; // Hapus key jika kosong

        localStorage.setItem('rhadzCalNotes', JSON.stringify(notes));
        renderCalendar();
        renderNotesList();
        saveToCloud();
    }
    return notes[dateKey] || [];
}

function editNote(dateKey, noteId, newText, newCategory, newTime) {
    const notes = getStoredNotes();
    if (notes[dateKey]) {
        const note = notes[dateKey].find(n => n.id == noteId);
        if (note) {
            note.text = newText;
            note.category = newCategory;
            note.time = newTime;
            localStorage.setItem('rhadzCalNotes', JSON.stringify(notes));
            renderCalendar();
            renderNotesList();
            saveToCloud();
        }
    }
    return notes[dateKey] || [];
}

function toggleNoteStatus(dateKey, noteId) {
    const notes = getStoredNotes();
    if (notes[dateKey]) {
        const note = notes[dateKey].find(n => n.id == noteId);
        if (note) {
            note.isCompleted = !note.isCompleted;
            localStorage.setItem('rhadzCalNotes', JSON.stringify(notes));
            renderCalendar();
            renderNotesList();
            saveToCloud();
        }
    }
    return notes[dateKey] || [];
}

// --- BACKUP & RESTORE ---
function exportData() {
    try {
        const data = {
            settings: JSON.parse(localStorage.getItem('rhadzCalSettings')),
            notes: JSON.parse(localStorage.getItem('rhadzCalNotes')),
            birthdays: JSON.parse(localStorage.getItem('rhadzCalBirthdays')),
            themeIndex: localStorage.getItem('rhadzThemeIndex'),
            ver: 'v11'
        };
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", url);
        downloadAnchorNode.setAttribute("download", "rhadz-backup-" + new Date().toISOString().slice(0, 10) + ".json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();

        // Cleanup
        setTimeout(() => {
            if (document.body.contains(downloadAnchorNode)) {
                document.body.removeChild(downloadAnchorNode);
            }
            URL.revokeObjectURL(url);
        }, 1000); // Bertahan lebih lama agar download sempat dipicu di Android
    } catch (e) {
        alert("Gagal melakukan backup: " + e.message);
    }
}

function importData(input) {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const data = JSON.parse(e.target.result);
            console.log("Restoring data...", data);

            if (data.settings) {
                localStorage.setItem('rhadzCalSettings', JSON.stringify(data.settings));
                Object.assign(settings, data.settings);
            }
            if (data.notes) localStorage.setItem('rhadzCalNotes', JSON.stringify(data.notes));
            if (data.birthdays) localStorage.setItem('rhadzCalBirthdays', JSON.stringify(data.birthdays));
            if (data.themeIndex !== undefined) localStorage.setItem('rhadzThemeIndex', data.themeIndex);

            alert('Data berhasil dipulihkan! Halaman akan dimuat ulang.');
            window.location.reload();
        } catch (err) {
            alert('File backup tidak valid: ' + err.message);
            console.error(err);
        } finally {
            input.value = ''; // Reset agar bisa pilih file yang sama lagi
        }
    };
    reader.onerror = function () {
        alert('Gagal membaca file!');
    };
    reader.readAsText(file);
}

function getNoteForDate(d, m, y) {
    const key = `${y}-${m}-${d}`;
    const notes = getStoredNotes();
    // Return array of notes, or empty array
    return notes[key] || [];
}

function getHijriDate(date) {
    // Normalisasi tanggal target ke 00:00:00
    const targetDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    targetDate.setHours(0, 0, 0, 0);

    // --- 1. COBA CARI DI HARDCODE (ANCHOR) ---
    let bestAnchor = null;
    for (let i = 0; i < hijriAnchors.length; i++) {
        const a = hijriAnchors[i];
        const anchorDate = new Date(a.y, a.m, a.d);
        anchorDate.setHours(0, 0, 0, 0);

        if (targetDate.getTime() >= anchorDate.getTime()) {
            bestAnchor = { ...a, objDate: anchorDate };
        } else {
            break; // Karena data urut, stop jika sudah lewat
        }
    }

    // Jika ketemu anchor dan selisih harinya masih wajar (kurang dari 30 hari)
    if (bestAnchor) {
        const diffTime = targetDate.getTime() - bestAnchor.objDate.getTime();
        const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 30) {
            // RETURN HASIL HARDCODE (isHardcoded = true)
            return {
                day: 1 + diffDays,
                month: bestAnchor.hM,
                year: bestAnchor.hY,
                isHardcoded: true
            };
        }
    }

    // --- 2. JIKA GAGAL/TIDAK ADA DI HARDCODE, PAKAI RUMUS MATEMATIKA ---
    let julian = Math.floor((date.getTime() / 86400000) + 2440587.5);
    let l = julian - 1948440 + 10632;
    let n = Math.floor((l - 1) / 10631);
    l = l - 10631 * n + 354;
    let j = (Math.floor((10985 - l) / 5316)) * (Math.floor((50 * l) / 17719)) + (Math.floor(l / 5670)) * (Math.floor((43 * l) / 15238));
    l = l - (Math.floor((30 - j) / 15)) * (Math.floor((17719 * j) / 50)) - (Math.floor(j / 16)) * (Math.floor((15238 * j) / 43)) + 29;
    let m = Math.floor((24 * l) / 709);
    let d = l - Math.floor((709 * m) / 24);
    let y = 30 * n + j - 30;

    // Koreksi manual rumus (+1 hari biasanya biar pas)
    d += 1;

    // PENGAMAN: Jangan sampai ada tanggal 31/32 Hijriah
    if (d > 30) {
        d = 1;
        m += 1; // Pindah bulan
    }
    if (m > 12) { // Reset tahun jika lewat Dzulhijjah
        m = 1;
        y += 1;
    }

    // RETURN HASIL RUMUS (isHardcoded = false)
    return {
        day: d,
        month: m - 1,
        year: y,
        isHardcoded: false
    };
}

function toggleNotesView(fromHistory = false) {
    isNotesView = !isNotesView;

    const calendarContainer = document.getElementById('calendarViewContainer');
    const notesContainer = document.getElementById('notesViewContainer');
    const calHeader = document.getElementById('calendarHeaderCenter');
    const notesHeader = document.getElementById('notesHeaderCenter');

    // Footer Icon Elements (Mobile)
    const footerLeft = document.getElementById('footerLeftBtn');
    
    // Desktop Button (Header Kiri)
    const btnDesktop = document.getElementById('desktopNotesBtnTop');

    if (isNotesView) {
        // --- MASUK MODE NOTES ---
        calendarContainer.classList.add('hidden');
        notesContainer.classList.remove('hidden');
        notesContainer.classList.add('active');
        
        // Sembunyikan Header Kalender Mobile
        if (calHeader) calHeader.classList.add('hidden');
        if (notesHeader) notesHeader.classList.remove('hidden');

        // Update Icon Footer (Mobile)
        if(footerLeft) footerLeft.innerHTML = '<i class="fas fa-home text-white text-sm"></i>';
        
        // Update Tombol Desktop Header: 
        // Ubah jadi Icon HOME + Teks KALENDER (Struktur harus lengkap biar animasi jalan)
        if (btnDesktop) {
            btnDesktop.innerHTML = `
                <div class="icon-box"><i class="fas fa-home"></i></div>
                <span class="text-label">KALENDER</span>
            `;
            // Tambahkan highlight agar terlihat sedang aktif
            btnDesktop.classList.add('bg-blue-50', 'text-blue-600', 'border-blue-300');
            btnDesktop.setAttribute('title', 'Kembali ke Kalender');
        }

        // Render ulang list catatan
        currentNoteDate = new Date();
        renderNotesList();

        if (!fromHistory && location.hash !== '#notes') {
            history.pushState({ view: 'notes' }, '', '#notes');
        }

    } else {
        // --- KEMBALI KE KALENDER ---
        calendarContainer.classList.remove('hidden');
        notesContainer.classList.remove('active');
        notesContainer.classList.add('hidden');
        
        if (calHeader) calHeader.classList.remove('hidden');
        if (notesHeader) notesHeader.classList.add('hidden');

        // Reset Icon Footer (Mobile)
        if(footerLeft) footerLeft.innerHTML = '<i class="fas fa-book text-white text-sm"></i>';
        
        // Reset Tombol Desktop Header: 
        // Balik jadi Icon BUKU + Teks CATATANKU
        if (btnDesktop) {
            btnDesktop.innerHTML = `
                <div class="icon-box"><i class="fas fa-book"></i></div>
                <span class="text-label">CATATANKU</span>
            `;
            // Hapus highlight active
            btnDesktop.classList.remove('bg-blue-50', 'text-blue-600', 'border-blue-300');
            btnDesktop.setAttribute('title', 'Buka Catatanku');
        }

        if (!fromHistory && location.hash === '#notes') {
            history.back();
        }

        renderCalendar();
    }
}

function handleFooterRightAction() {
    openDateSearch();
}

function switchNoteTab(mode, tabElement) {
    currentNoteMode = mode;
    document.querySelectorAll('.notes-tab').forEach(t => t.classList.remove('active'));
    tabElement.classList.add('active');
    currentNoteDate = new Date();
    renderNotesList();
}

function navNotes(dir) {
    if (currentNoteMode === 'weekly') {
        currentNoteDate.setDate(currentNoteDate.getDate() + (dir * 7));
    } else if (currentNoteMode === 'monthly') {
        currentNoteDate.setMonth(currentNoteDate.getMonth() + dir);
    } else if (currentNoteMode === 'yearly') {
        currentNoteDate.setFullYear(currentNoteDate.getFullYear() + dir);
    }
    renderNotesList();
}

function renderNotesList() {
    const container = document.getElementById('notesListContainer');
    const label = document.getElementById('notesNavLabel');
    container.innerHTML = '';

    let startD, endD, labelText;
    const now = new Date();
    const storedNotes = getStoredNotes();
    let notesFound = [];

    // --- LOGIKA PENENTUAN WAKTU (MINGGUAN/BULANAN/TAHUNAN) ---
    // (Bagian ini tidak berubah, tetap sama seperti sebelumnya)
    if (currentNoteMode === 'weekly') {
        const day = currentNoteDate.getDay();
        const startOfWeek = new Date(currentNoteDate);
        startOfWeek.setDate(currentNoteDate.getDate() - currentNoteDate.getDay());
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        const currentWeekStart = new Date(now);
        currentWeekStart.setDate(now.getDate() - now.getDay());
        const timeDiff = startOfWeek.getTime() - currentWeekStart.getTime();
        const dayDiff = timeDiff / (1000 * 3600 * 24);
        if (Math.abs(dayDiff) < 1) labelText = "MINGGU INI";
        else if (dayDiff > 0 && dayDiff <= 7) labelText = "MINGGU DEPAN";
        else if (dayDiff < 0 && dayDiff >= -7) labelText = "MINGGU LALU";
        else labelText = `${startOfWeek.getDate()}/${startOfWeek.getMonth() + 1} - ${endOfWeek.getDate()}/${endOfWeek.getMonth() + 1}`;
        startD = startOfWeek; endD = endOfWeek;
    } else if (currentNoteMode === 'monthly') {
        labelText = `${monthNames[currentNoteDate.getMonth()]} ${currentNoteDate.getFullYear()}`;
        startD = new Date(currentNoteDate.getFullYear(), currentNoteDate.getMonth(), 1);
        endD = new Date(currentNoteDate.getFullYear(), currentNoteDate.getMonth() + 1, 0);
    } else {
        labelText = `TAHUN ${currentNoteDate.getFullYear()}`;
        startD = new Date(currentNoteDate.getFullYear(), 0, 1);
        endD = new Date(currentNoteDate.getFullYear(), 11, 31);
    }

    label.textContent = labelText;

    // --- PENGUMPULAN DATA CATATAN ---
    Object.keys(storedNotes).forEach(dateKey => {
        const [y, m, d] = dateKey.split('-').map(Number);
        const noteDate = new Date(y, m, d);
        const checkTime = noteDate.getTime();
        const startTime = new Date(startD.getFullYear(), startD.getMonth(), startD.getDate()).getTime();
        const endTime = new Date(endD.getFullYear(), endD.getMonth(), endD.getDate()).getTime();
        if (checkTime >= startTime && checkTime <= endTime) {
            notesFound.push({ date: noteDate, items: storedNotes[dateKey], key: dateKey });
        }
    });

    notesFound.sort((a, b) => a.date - b.date);

    // --- TAMPILAN KOSONG ---
    if (notesFound.length === 0) {
        container.innerHTML = `
                <div class="flex flex-col items-center justify-center h-48 opacity-50">
                    <i class="fas fa-clipboard-list text-4xl mb-3 text-slate-400"></i>
                    <p class="text-sm font-medium text-slate-500">Tidak ada catatan</p>
                </div>
            `;
        return;
    }

    // --- PENGELOMPOKAN DATA ---
    const allNotes = [];
    notesFound.forEach(item => {
        item.items.forEach(note => {
            allNotes.push({
                ...note,
                dateKey: item.key,
                date: item.date,
                dateStr: `${item.date.getDate()} ${monthNames[item.date.getMonth()]} ${item.date.getFullYear()}`,
                dayName: dayNames[item.date.getDay()]
            });
        });
    });

    const grouped = { penting: [], kerja: [], pribadi: [], ide: [] };
    allNotes.forEach(note => {
        const cat = note.category || 'pribadi';
        if (grouped[cat]) grouped[cat].push(note);
    });

    // Sort waktu
    Object.keys(grouped).forEach(cat => {
        grouped[cat].sort((a, b) => {
            if (a.date.getTime() !== b.date.getTime()) return a.date - b.date;
            if (a.time && !b.time) return -1;
            if (!a.time && b.time) return 1;
            if (a.time && b.time) return a.time.localeCompare(b.time);
            return 0;
        });
    });

    // --- CONFIG WARNA PER KATEGORI (UPDATE UTAMA DI SINI) ---
    // Kita definisikan warna spesifik untuk badge & border
    const categoryConfig = {
        penting: { 
            label: 'Penting', 
            icon: 'fa-exclamation-circle', 
            // Warna Header
            headerColor: 'text-red-600',
            // Warna Item Catatan (Badge & Border)
            badgeBg: 'bg-red-100', 
            badgeText: 'text-red-600', 
            borderColor: 'border-red-500', 
            checkColor: 'text-red-500'
        },
        kerja: { 
            label: 'Kerja', 
            icon: 'fa-briefcase', 
            headerColor: 'text-blue-600',
            badgeBg: 'bg-blue-100', 
            badgeText: 'text-blue-600', 
            borderColor: 'border-blue-500', 
            checkColor: 'text-blue-500'
        },
        pribadi: { 
            label: 'Pribadi', 
            icon: 'fa-sticky-note', 
            headerColor: 'text-emerald-600',
            badgeBg: 'bg-emerald-100', 
            badgeText: 'text-emerald-600', 
            borderColor: 'border-emerald-500', 
            checkColor: 'text-emerald-500'
        },
        ide: { 
            label: 'Ide', 
            icon: 'fa-lightbulb', 
            headerColor: 'text-amber-600',
            badgeBg: 'bg-amber-100', 
            badgeText: 'text-amber-600', 
            borderColor: 'border-amber-500', 
            checkColor: 'text-amber-500'
        }
    };

    // --- RENDERING LOOP ---
    ['penting', 'kerja', 'pribadi', 'ide'].forEach(cat => {
        if (grouped[cat].length === 0) return;

        const config = categoryConfig[cat];

        // 1. HEADER KATEGORI (Tanpa Kotak Background, Font Lebih Besar)
        const categoryHeader = document.createElement('div');
        categoryHeader.className = `mb-2 mt-6 first:mt-0 px-2`; // px-2 agar sejajar visual
        categoryHeader.innerHTML = `
            <div class="flex items-center justify-between border-b border-slate-200 pb-2">
                <div class="flex items-center gap-2">
                    <i class="fas ${config.icon} ${config.headerColor} text-lg"></i>
                    <span class="text-base font-black ${config.headerColor} uppercase tracking-wider">${config.label}</span>
                </div>
                <span class="text-[0.65rem] font-black bg-white ${config.headerColor} px-2 py-0.5 rounded-full shadow-sm border border-slate-100">${grouped[cat].length}</span>
            </div>
        `;
        container.appendChild(categoryHeader);

        // 2. CONTAINER LIST CATATAN (Dengan Indentasi)
        const listWrapper = document.createElement('div');
        listWrapper.className = "pl-4 space-y-3"; // pl-4 memberikan indentasi ke kanan

        grouped[cat].forEach(note => {
            const el = document.createElement('div');
            
            // Perhatikan penggunaan variable config (borderColor) agar warna garis kiri sesuai kategori
            el.className = `bg-white p-3 rounded-xl shadow-sm border-l-4 ${config.borderColor} hover:bg-slate-50 transition relative overflow-hidden group`;

            const isDone = note.isCompleted;
            
            // Badge Waktu juga mengikuti nuansa warna kategori (opsional, atau tetap slate)
            // Di sini saya buat netral (slate) agar tidak terlalu ramai, tapi ikon check mengikuti kategori.
            const timeBadge = note.time ? `<span class="text-[0.6rem] font-bold bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded"><i class="far fa-clock mr-1"></i>${note.time}</span>` : '';

            el.innerHTML = `
                <div class="flex items-start gap-3">
                    <div class="mt-0.5 cursor-pointer" onclick="event.stopPropagation(); toggleNoteStatusInList('${note.dateKey}', '${note.id}')">
                        <i class="fas ${isDone ? `fa-check-circle ${config.checkColor}` : 'fa-circle text-slate-300'} text-lg transition-colors"></i>
                    </div>
                    
                    <div class="flex-1 ${isDone ? 'opacity-50 line-through decoration-slate-400' : ''}">
                        <p class="text-sm font-bold text-slate-700 leading-snug mb-1 whitespace-pre-line">${formatNoteTextForDisplay(note.text)}</p>
                        <div class="flex items-center gap-2 text-[0.65rem] text-slate-400 font-medium">
                            <span>${note.dayName}, ${note.dateStr}</span>
                            ${timeBadge}
                        </div>
                    </div>
                    
                    <button onclick="event.stopPropagation(); deleteNoteFromList('${note.dateKey}', '${note.id}')" class="text-slate-300 hover:text-red-500 transition px-2 opacity-0 group-hover:opacity-100">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            `;

            el.setAttribute('onclick', `openEditNoteModal('${note.dateKey}', '${note.id}')`);
            listWrapper.appendChild(el);
        });

        container.appendChild(listWrapper);
    });
}

// Helper functions for Catatanku
function toggleNoteStatusInList(dateKey, noteId) {
    toggleNoteStatus(dateKey, noteId);
    renderNotesList(); // Fix: use renderNotesList instead of updateNotesView
}

function deleteNoteFromList(dateKey, noteId) {
    if (confirm('Apakah Anda yakin ingin menghapus catatan ini?')) {
        deleteNote(dateKey, noteId);
        renderNotesList(); // Fix: use renderNotesList instead of updateNotesView
    }
}

function openCreateNoteModal() {
    const overlay = document.getElementById('selectorModal');
    const body = document.getElementById('modalBody');
    const title = document.getElementById('modalTitle');

    title.classList.remove('hidden'); title.textContent = "BUAT CATATAN BARU";
    body.className = "w-full";
    const today = new Date();
    const curD = today.getDate();
    const curM = today.getMonth();
    const curY = today.getFullYear();

    openModal('pos-center');

    body.innerHTML = `
            <div class="mb-4">
                <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 text-center">Pilih Tanggal</p>
                <div class="flex gap-2 h-32 overflow-hidden relative mask-linear">
                    <div class="flex-1 w-full flex flex-col items-center overflow-x-hidden overflow-y-auto snap-y snap-mandatory scrollbar-none text-center bg-slate-50 rounded-lg" id="scrollDay"></div>
                    <div class="flex-1 w-full flex flex-col items-center overflow-x-hidden overflow-y-auto snap-y snap-mandatory scrollbar-none text-center bg-slate-50 rounded-lg" id="scrollMonth"></div>
                    <div class="flex-1 w-full flex flex-col items-center overflow-x-hidden overflow-y-auto snap-y snap-mandatory scrollbar-none text-center bg-slate-50 rounded-lg" id="scrollYear"></div>
                    <div class="absolute top-1/2 left-0 right-0 h-8 -mt-4 border-t border-b border-slate-300 pointer-events-none bg-slate-900/5"></div>
                </div>
            </div>

            <div class="flex gap-3 mb-4">
                <div class="flex-1">
                    <p class="text-[0.6rem] font-black text-slate-400 uppercase tracking-widest mb-1 ml-1">Kategori</p>
                    <select id="newNoteCategoryList" class="premium-select text-center font-bold" style="background:#f8fafc; border-color:#e2e8f0; height: 48px;" onchange="this.style.color = {pribadi:'#10b981', kerja:'#3b82f6', penting:'#ef4444', ide:'#f59e0b'}[this.value]">
                        <option value="pribadi" selected class="text-emerald-500 font-bold">Pribadi</option>
                        <option value="kerja" class="text-blue-500 font-bold">Kerja</option>
                        <option value="penting" class="text-red-500 font-bold">Penting</option>
                        <option value="ide" class="text-amber-500 font-bold">Ide</option>
                    </select>
                </div>
                <div class="flex-1">
                    <p class="text-[0.6rem] font-black text-slate-400 uppercase tracking-widest mb-1 ml-1">Waktu</p>
                    <input type="time" id="newNoteTimeList" class="premium-select text-center font-bold" style="background:#f8fafc; border-color:#e2e8f0; height: 48px;">
                </div>
            </div>

            <textarea id="newNoteInput" class="w-full p-4 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500 transition h-32 resize-none bg-white mb-4 shadow-inner" placeholder="Tulis catatanmu di sini..."></textarea>
            <button onclick="confirmCreateNote()" class="w-full bg-slate-900 text-white p-3 rounded-xl font-bold text-xs tracking-wider shadow-lg hover:bg-slate-800 transition mb-6">SIMPAN CATATAN</button>
        `;
    enhanceTimeInputDefault8('newNoteTimeList');
    enhanceNoteEditor('newNoteInput');

    const dContainer = document.getElementById('scrollDay');
    const mContainer = document.getElementById('scrollMonth');
    const yContainer = document.getElementById('scrollYear');
    const createSpacer = () => { const s = document.createElement('div'); s.style.minHeight = "48px"; s.style.width = "100%"; return s; };

    const initInfiniteScroll = (container, items, initialIndex) => {
        const itemHeight = 36;
        const renderSet = (offsetVal = 0) => {
            items.forEach((item, idx) => {
                const realVal = idx;
                const el = document.createElement('div');
                el.className = `w-full py-2 text-sm font-bold snap-center cursor-pointer flex-shrink-0 transition-all duration-150`;
                el.textContent = item;
                el.dataset.val = realVal;
                if (realVal === initialIndex && offsetVal === 1) {
                    el.classList.add('text-blue-600', 'scale-110');
                    el.classList.remove('text-slate-400');
                } else {
                    el.classList.add('text-slate-400');
                }
                el.onclick = function () { this.scrollIntoView({ behavior: 'smooth', block: 'center' }); };
                container.appendChild(el);
            });
        };
        container.innerHTML = '';
        container.appendChild(createSpacer());
        renderSet(0); renderSet(1); renderSet(2);
        container.appendChild(createSpacer());
        setTimeout(() => {
            const allItems = container.querySelectorAll(`div[data-val="${initialIndex}"]`);
            if (allItems.length >= 2) allItems[1].scrollIntoView({ block: 'center' });
        }, 50);
        container.onscroll = () => {
            const totalHeight = container.scrollHeight;
            const viewHeight = container.clientHeight;
            const scrollTop = container.scrollTop;
            if (scrollTop < 50) {
                const middleElement = container.querySelectorAll(`div[data-val="0"]`)[1];
                if (middleElement) middleElement.scrollIntoView({ block: 'start' });
            } else if (scrollTop > totalHeight - viewHeight - 50) {
                const middleElement = container.querySelectorAll(`div[data-val="${items.length - 1}"]`)[1];
                if (middleElement) middleElement.scrollIntoView({ block: 'end' });
            }
            const center = scrollTop + viewHeight / 2;
            Array.from(container.children).forEach(child => {
                if (!child.dataset.val) return;
                const childCenter = child.offsetTop + child.offsetHeight / 2;
                if (Math.abs(center - childCenter) < 20) {
                    child.classList.add('text-blue-600', 'scale-110');
                    child.classList.remove('text-slate-400');
                } else {
                    child.classList.remove('text-blue-600', 'scale-110');
                    child.classList.add('text-slate-400');
                }
            });
        };
    };

    const daysArr = Array.from({ length: 31 }, (_, i) => i + 1);
    initInfiniteScroll(dContainer, daysArr, curD - 1);
    const monthsShort = monthNames.map(m => m.substring(0, 3));
    initInfiniteScroll(mContainer, monthsShort, curM);
    yContainer.appendChild(createSpacer());
    for (let i = curY - 50; i <= curY + 50; i++) {
        const el = document.createElement('div');
        el.className = `w-full py-2 text-sm font-bold snap-center cursor-pointer flex-shrink-0 ${i === curY ? 'text-blue-600 scale-110' : 'text-slate-400'}`;
        el.textContent = i;
        el.dataset.val = i;
        el.onclick = function () { this.scrollIntoView({ behavior: 'smooth', block: 'center' }); };
        yContainer.appendChild(el);
    }
    yContainer.appendChild(createSpacer());
    setTimeout(() => {
        const activeY = yContainer.querySelector('.text-blue-600');
        if (activeY) activeY.scrollIntoView({ block: 'center' });
        yContainer.addEventListener('scroll', () => {
            const center = yContainer.scrollTop + yContainer.offsetHeight / 2;
            Array.from(yContainer.children).forEach(child => {
                if (!child.dataset.val) return;
                const childCenter = child.offsetTop + child.offsetHeight / 2;
                if (Math.abs(center - childCenter) < 20) {
                    child.classList.add('text-blue-600', 'scale-110');
                    child.classList.remove('text-slate-400');
                } else {
                    child.classList.remove('text-blue-600', 'scale-110');
                    child.classList.add('text-slate-400');
                }
            });
        });
    }, 100);

    openModal();
}

function confirmCreateNote() {
    // 1. Ambil Data dari Scroller (Tanggal)
    const getVal = (id) => {
        const c = document.getElementById(id);
        if (!c) return 1;
        const center = c.scrollTop + c.offsetHeight / 2;
        let val = null; let minDiff = Infinity;
        Array.from(c.children).forEach(child => {
            if (child.dataset.val === undefined) return;
            const diff = Math.abs(center - (child.offsetTop + child.offsetHeight / 2));
            if (diff < minDiff) { minDiff = diff; val = child.dataset.val; }
        });
        return parseInt(val);
    };

    const dIndex = getVal('scrollDay');
    const m = getVal('scrollMonth') || new Date().getMonth();
    const y = getVal('scrollYear') || new Date().getFullYear();

    // 2. Ambil Data Input
    const text = document.getElementById('newNoteInput').value.trim();
    const category = document.getElementById('newNoteCategoryList').value;
    const time = document.getElementById('newNoteTimeList').value;

    if (!text) { alert('Tulis catatan dulu!'); return; }

    // 3. Simpan Data
    const d = (dIndex || 0) + 1;
    const dateKey = `${y}-${m}-${d}`;
    addNote(dateKey, text, category, time);

    // 4. LOGIKA TUTUP & UPDATE UI
    const overlay = document.getElementById('selectorModal');
    if (overlay) overlay.classList.remove('active');

    // Update Background Kalender (supaya titik indikator muncul)
    renderCalendar();

    // 5. CEK STATUS VIEW
    if (isNotesView) {
        // --- JIKA SEDANG DI MODE CATATAN ---
        
        // Hapus hash #modal tanpa menambah history stack baru
        if (location.hash === '#modal') {
            history.replaceState({ view: 'notes' }, '', '#notes');
        }

        // Render ulang list catatan agar data baru muncul
        renderNotesList();

        // SAFETY LOCK: Pastikan container notes tetap aktif
        setTimeout(() => {
            const calView = document.getElementById('calendarViewContainer');
            const noteView = document.getElementById('notesViewContainer');
            
            // Tombol Header Desktop (ID BARU)
            const btnDesktop = document.getElementById('desktopNotesBtnTop'); 

            if (calView) calView.classList.add('hidden');
            if (noteView) {
                noteView.classList.remove('hidden');
                noteView.classList.add('active');
                noteView.style.display = 'flex';
            }

            // Pastikan Tombol Header berubah jadi HOME (Aktif)
            if (btnDesktop) {
                btnDesktop.innerHTML = '<i class="fas fa-home"></i>';
                btnDesktop.classList.add('bg-blue-50', 'text-blue-600', 'border-blue-200');
                btnDesktop.setAttribute('title', 'Kembali ke Kalender');
            }
        }, 10);

    } else {
        // --- JIKA SEDANG DI MODE KALENDER BIASA ---
        
        // Mundur history normal
        if (location.hash === '#modal') history.back();

        // Refresh detail popup jika user tadi membukanya dari detail tanggal
        if (lastDetailArgs) showDetail(...lastDetailArgs);
    }
}

function openEditNoteModal(dateKey, noteId) {
    const notes = getStoredNotes();
    const noteList = notes[dateKey];
    if (!noteList) return;
    const note = noteList.find(n => n.id == noteId);
    if (!note) return;

    const body = document.getElementById('modalBody');
    const title = document.getElementById('modalTitle');

    title.classList.remove('hidden'); title.textContent = "EDIT CATATAN";
    body.className = "w-full";

    openModal('pos-center');

    body.innerHTML = `
            <div class="mb-4">
                <p class="text-[0.6rem] font-black text-slate-400 uppercase tracking-widest mb-1 ml-1 text-center">Tanggal: ${dateKey}</p>
            </div>

            <div class="flex gap-3 mb-4">
                <div class="flex-1">
                    <p class="text-[0.6rem] font-black text-slate-400 uppercase tracking-widest mb-1 ml-1">Kategori</p>
                    <select id="editNoteCategory" class="premium-select text-center font-bold" style="background:#f8fafc; border-color:#e2e8f0; height: 48px;">
                        <option value="pribadi" ${note.category === 'pribadi' ? 'selected' : ''}>Pribadi</option>
                        <option value="kerja" ${note.category === 'kerja' ? 'selected' : ''}>Kerja</option>
                        <option value="penting" ${note.category === 'penting' ? 'selected' : ''}>Penting</option>
                        <option value="ide" ${note.category === 'ide' ? 'selected' : ''}>Ide</option>
                    </select>
                </div>
                <div class="flex-1">
                    <p class="text-[0.6rem] font-black text-slate-400 uppercase tracking-widest mb-1 ml-1">Waktu</p>
                    <input type="time" id="editNoteTime" value="${note.time || ''}" class="premium-select text-center font-bold" style="background:#f8fafc; border-color:#e2e8f0; height: 48px;">
                </div>
            </div>
            <div class="mb-4">
                <p class="text-[0.6rem] font-black text-slate-400 uppercase tracking-widest mb-1 ml-1">Tanggal</p>
                <input type="date" id="editNoteDate" value="${dateKeyToInputDate(dateKey)}" class="premium-select text-center font-bold" style="background:#f8fafc; border-color:#e2e8f0; height: 48px;">
            </div>

            <textarea id="editNoteInput" class="w-full p-4 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500 transition h-32 resize-none bg-white mb-4 shadow-inner" placeholder="Tulis catatanmu di sini...">${escapeHtml(note.text)}</textarea>
            <button onclick="confirmEditNote('${dateKey}', '${noteId}')" class="w-full bg-slate-900 text-white p-3 rounded-xl font-bold text-xs tracking-wider shadow-lg hover:bg-slate-800 transition mb-6">SIMPAN PERUBAHAN</button>
            `;
    enhanceTimeInputDefault8('editNoteTime');
    enhanceNoteEditor('editNoteInput');
}

function confirmEditNote(dateKey, noteId) {
    // 1. Ambil Data
    const text = document.getElementById('editNoteInput').value.trim();
    const category = document.getElementById('editNoteCategory').value;
    const time = document.getElementById('editNoteTime').value;
    const inputDate = document.getElementById('editNoteDate').value;
    const targetDateKey = inputDateToDateKey(inputDate);

    if (!text) { alert('Tulis catatan dulu!'); return; }
    if (!targetDateKey) { alert('Tanggal catatan tidak valid.'); return; }

    // 2. Simpan Perubahan (termasuk pindah tanggal jika diubah)
    if (targetDateKey === dateKey) {
        editNote(dateKey, noteId, text, category, time);
    } else {
        const notes = getStoredNotes();
        if (!notes[dateKey]) return;
        const idx = notes[dateKey].findIndex(n => n.id == noteId);
        if (idx === -1) return;

        const oldNote = notes[dateKey][idx];
        notes[dateKey].splice(idx, 1);
        if (notes[dateKey].length === 0) delete notes[dateKey];

        if (!notes[targetDateKey]) notes[targetDateKey] = [];
        notes[targetDateKey].push({
            ...oldNote,
            text,
            category,
            time
        });

        localStorage.setItem('rhadzCalNotes', JSON.stringify(notes));
        renderCalendar();
        renderNotesList();
        saveToCloud();
    }

    // 3. Tutup Modal Secara Manual (Bypass closeModal standar agar lebih terkontrol)
    const overlay = document.getElementById('selectorModal');
    overlay.classList.remove('active');

    // Mundurkan history #modal
    if (location.hash === '#modal') history.back();

    // 4. Update Background
    renderCalendar();

    // 5. PENGAMAN POSISI (Keep in Notes View)
    if (isNotesView) {
        renderNotesList(); // Refresh list agar perubahan terlihat

        setTimeout(() => {
            const calView = document.getElementById('calendarViewContainer');
            const noteView = document.getElementById('notesViewContainer');

            if (calView) calView.classList.add('hidden');
            if (noteView) {
                noteView.classList.remove('hidden');
                noteView.classList.add('active');
                noteView.style.display = 'flex';
            }
        }, 20);
    } else {
        // Jika edit dari Popup Kalender, buka lagi popupnya (Refresh Data)
        if (lastDetailArgs) showDetail(...lastDetailArgs);
    }
}

function getHolidayName(d, m, y) {
    if (holidaysData[y] && holidaysData[y][m] && holidaysData[y][m][d]) return holidaysData[y][m][d];
    return null;
}
function getCutiBersamaName(d, m, y) {
    if (cutiBersamaData[y] && cutiBersamaData[y][m] && cutiBersamaData[y][m][d]) return cutiBersamaData[y][m][d];
    return null;
}
function getObservanceName(d, m) {
    if (settings.showObservances && nationalObservances[m] && nationalObservances[m][d]) return nationalObservances[m][d];
    return null;
}
function getBirthday(d, m, y = currentDate.getFullYear()) {
    const list = getBirthdaysForDate(d, m, y);
    return list.length > 0 ? list[0] : null;
}

function escapeHtml(text) {
    return String(text ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function formatNoteTextForDisplay(text) {
    const lines = String(text ?? '').replace(/\r/g, '').split('\n');
    return lines.map((rawLine) => {
        const indentMatch = rawLine.match(/^\s*/);
        const indent = indentMatch ? indentMatch[0] : '';
        const content = rawLine.slice(indent.length);
        const indentHtml = indent.replace(/ /g, '&nbsp;').replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');

        const bullet = content.match(/^(?:•\s+|-\s+)(.*)$/);
        if (bullet) {
            return `${indentHtml}<span class="text-slate-400 font-black">&bull;</span> ${escapeHtml(bullet[1])}`;
        }

        return `${indentHtml}${escapeHtml(content)}`;
    }).join('<br>');
}

function pad2(value) {
    return String(value).padStart(2, '0');
}

function dateKeyToInputDate(dateKey) {
    const [y, m, d] = String(dateKey).split('-').map(Number);
    if (!Number.isInteger(y) || !Number.isInteger(m) || !Number.isInteger(d)) return '';
    return `${y}-${pad2(m + 1)}-${pad2(d)}`;
}

function inputDateToDateKey(inputDate) {
    const [y, month1Based, d] = String(inputDate).split('-').map(Number);
    if (!Number.isInteger(y) || !Number.isInteger(month1Based) || !Number.isInteger(d)) return null;
    return `${y}-${month1Based - 1}-${d}`;
}

function enhanceNoteEditor(textareaId) {
    const el = document.getElementById(textareaId);
    if (!el || el.dataset.checklistEnhanced === '1') return;

    el.addEventListener('input', () => {
        const pos = el.selectionStart;
        const text = el.value;
        const lineStart = text.lastIndexOf('\n', Math.max(pos - 1, 0)) + 1;
        const lineEndRaw = text.indexOf('\n', pos);
        const lineEnd = lineEndRaw === -1 ? text.length : lineEndRaw;
        const line = text.slice(lineStart, lineEnd);
        const match = line.match(/^(\s*)-\s$/);
        if (!match) return;

        const replaced = `${match[1]}• `;
        el.value = `${text.slice(0, lineStart)}${replaced}${text.slice(lineEnd)}`;
        const newPos = lineStart + replaced.length;
        el.setSelectionRange(newPos, newPos);
    });

    el.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter' || e.shiftKey) return;

        const text = el.value;
        const start = el.selectionStart;
        const lineStart = text.lastIndexOf('\n', Math.max(start - 1, 0)) + 1;
        const lineEndRaw = text.indexOf('\n', start);
        const lineEnd = lineEndRaw === -1 ? text.length : lineEndRaw;
        const line = text.slice(lineStart, lineEnd);
        const bulletLine = line.match(/^(\s*)•\s(.*)$/);
        if (!bulletLine) return;

        e.preventDefault();
        const indent = bulletLine[1];
        const body = bulletLine[2];
        const isEmptyBullet = body.trim() === '';

        if (isEmptyBullet) {
            // Keluar dari mode bullet: hapus marker bullet pada baris kosong.
            el.value = `${text.slice(0, lineStart)}${indent}${text.slice(lineEnd)}`;
            const nextPos = lineStart + indent.length;
            el.setSelectionRange(nextPos, nextPos);
            return;
        }

        const insertText = `\n${indent}• `;
        const selectionEnd = el.selectionEnd;
        el.value = `${text.slice(0, start)}${insertText}${text.slice(selectionEnd)}`;
        const nextPos = start + insertText.length;
        el.setSelectionRange(nextPos, nextPos);
    });

    el.dataset.checklistEnhanced = '1';
}

function enhanceTimeInputDefault8(inputId) {
    const input = document.getElementById(inputId);
    if (!input || input.dataset.default8Enhanced === '1') return;

    input.addEventListener('focus', () => {
        if (!input.value) input.value = '08:00';
    });

    input.dataset.default8Enhanced = '1';
}
function isAnniversary(d, m) {
    if (!settings.showFamily) return null;
    return weddingAnniversary.day === d && weddingAnniversary.month === m;
}

function getGregorianWeekday(year, month, day) {
    // Tomohiko Sakamoto, stabil untuk kalender Gregorian (0=Min..6=Sab).
    const t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    let y = year;
    if (month < 2) y -= 1;
    return (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + t[month] + day) % 7;
}

function isGregorianLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getDaysInGregorianMonth(year, month) {
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 1) return isGregorianLeapYear(year) ? 29 : 28;
    return monthDays[month];
}

function normalizeYearMonth(year, month) {
    let y = year;
    let m = month;
    while (m < 0) { m += 12; y -= 1; }
    while (m > 11) { m -= 12; y += 1; }
    return { year: y, month: m };
}

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const now = new Date();
    const isCurrentMonthYear = (now.getFullYear() === year && now.getMonth() === month);
    const todayDayNum = now.getDate();
    document.getElementById('monthLabelMobile').textContent = monthNames[month];
    document.getElementById('yearLabelMobile').textContent = year;
    document.getElementById('desktopMonthDisplay').textContent = monthNames[month];
    document.getElementById('desktopYearDisplay').textContent = year;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    // Pakai kalkulasi Gregorian murni agar tidak terpengaruh perilaku Date runtime.
    const firstDay = getGregorianWeekday(year, month, 1);
    const prevMonthLastDate = new Date(year, month, 0).getDate();
    const startH = getHijriDate(new Date(year, month, 1));
    const endH = getHijriDate(new Date(year, month, daysInMonth));

    // Cek jika perpindahan tahun hijriah terjadi di bulan ini
    let hijriYearStr = startH.year;
    if (startH.year !== endH.year) {
        hijriYearStr = `${startH.year} / ${endH.year}`;
    }

    const hijriStr = `${hijriMonths[startH.month]} - ${hijriMonths[endH.month]}`;

    document.getElementById('hijriRangeMobile').textContent = hijriStr;
    // Sekarang Tahunnya Dinamis mengambil dari startH.year
    document.getElementById('desktopHijri').textContent = `${hijriStr} ${hijriYearStr}H`;
    const showHijriHeader = settings.showHijri && !isMobileLandscapeMode;
    const d_hijri = showHijriHeader ? 'block' : 'none';
    document.getElementById('hijriRangeMobile').style.display = d_hijri;
    document.getElementById('desktopHijri').style.display = d_hijri;
    const grid = document.getElementById('calendarGrid');
    grid.innerHTML = '';
    const isDesktopWidth = window.innerWidth >= 1024;
    const useFullDayNames = isMobileLandscapeMode || (isDesktopWidth && (settings.sidebarCollapsed || settings.rightPanelCollapsed));
    const activeDayLabels = useFullDayNames ? dayNames : dayShortNames;

    activeDayLabels.forEach(d => {
        const el = document.createElement('div');
        el.className = 'day-label'; el.textContent = d; grid.appendChild(el);
    });

    // Hitung jumlah sel yang dibutuhkan: 4/5/6 baris (selalu kelipatan 7).
    const requiredCells = firstDay + daysInMonth;
    const totalCells = Math.ceil(requiredCells / 7) * 7;

    // Dynamic Grid Rows
    const gridElement = document.getElementById('calendarGrid');

    // Hapus class lama dulu
    gridElement.classList.remove('rows-4', 'rows-5', 'rows-6');

    if (totalCells === 28) gridElement.classList.add('rows-4');
    else if (totalCells === 35) gridElement.classList.add('rows-5');
    else gridElement.classList.add('rows-6');
    // -------------------------------

    for (let i = 0; i < totalCells; i++) {
        // --- AWAL GANTI ISI LOOP ---
        const cell = document.createElement('div');
        let displayDate, targetMonth, targetYear, isOtherMonth = false;

        // 1. Tentukan Tanggal (Prev/Current/Next Month)
        if (i < firstDay) {
            displayDate = prevMonthLastDate - (firstDay - i - 1);
            targetMonth = month - 1; targetYear = year; isOtherMonth = true;
        } else if (i < firstDay + daysInMonth) {
            displayDate = i - firstDay + 1; targetMonth = month; targetYear = year;
        } else {
            displayDate = i - (firstDay + daysInMonth) + 1; targetMonth = month + 1; targetYear = year; isOtherMonth = true;
        }

        // 2. Normalisasi bulan/tahun target lalu turunkan tanggal aktual
        const normalized = normalizeYearMonth(targetYear, targetMonth);
        const actualDay = displayDate;
        const actualMonth = normalized.month;
        const actualYear = normalized.year;

        if (isOtherMonth) {
            cell.className = 'day-cell other-month';
            // Guard: pastikan sel bulan lain tetap memakan slot grid (anti bergeser).
            cell.style.display = 'flex';
            cell.innerHTML = `<span class="date-wrapper">${actualDay}</span>`;
        } else {
            const isToday = isCurrentMonthYear && actualDay === todayDayNum;
            const dateObj = new Date(actualYear, actualMonth, actualDay);
            const h = getHijriDate(dateObj); // Hijriah
            const dayOfWeek = getGregorianWeekday(actualYear, actualMonth, actualDay);
            const isSunday = dayOfWeek === 0;
            const isFriday = dayOfWeek === 5;

            // Cek Event
            const holidayName = getHolidayName(actualDay, actualMonth, actualYear);
            const isHoliday = !!holidayName;
            const cutiName = getCutiBersamaName(actualDay, actualMonth, actualYear);
            const observanceName = getObservanceName(actualDay, actualMonth);
            const birthdayList = getBirthdaysForDate(actualDay, actualMonth, actualYear);
            const anniversaryData = isAnniversary(actualDay, actualMonth);

            // --- LOGIKA BARU: KUMPULKAN SEMUA EVENT & CATATAN ---
            let inCellEvents = [];
            const noteCategoryVisual = {
                pribadi: { textColor: 'text-emerald-600', stripColor: '#10b981' },
                kerja: { textColor: 'text-blue-600', stripColor: '#3b82f6' },
                penting: { textColor: 'text-rose-600', stripColor: '#e11d48' },
                ide: { textColor: 'text-amber-600', stripColor: '#f59e0b' }
            };
            const getNoteCategoryVisual = (category) => noteCategoryVisual[category] || noteCategoryVisual.pribadi;

            birthdayList.forEach((birthdayData) => {
                inCellEvents.push({ text: `Ultah ${birthdayData.name}`, color: 'text-pink-600' });
            });
            if (anniversaryData) inCellEvents.push({ text: `Anniversary`, color: 'text-pink-600' });
            if (holidayName) inCellEvents.push({ text: holidayName, color: 'text-red-600' });
            if (cutiName) inCellEvents.push({ text: cutiName, color: 'text-red-500' });
            if (observanceName) inCellEvents.push({ text: observanceName, color: 'text-slate-600' });

            // --- LOGIKA INDIKATOR CATATAN & DATA TOOLTIP ---
            const allNotesForDate = getNoteForDate(actualDay, actualMonth, actualYear);
            const sortByTime = (a, b) => {
                if (a.time && !b.time) return -1;
                if (!a.time && b.time) return 1;
                if (a.time && b.time) return a.time.localeCompare(b.time);
                return 0;
            };
            const noteList = allNotesForDate.filter(note => !note.isCompleted);
            const completedNoteList = allNotesForDate.filter(note => note.isCompleted).sort(sortByTime);
            const noteCount = noteList.length;

            let noteDotHTML = '';
            if (noteCount > 0) {
                // Buka Wadah Dot (Untuk Tampilan Kalender Biasa)
                noteDotHTML = '<div class="note-indicator-row">';
                if (noteCount > 3) {
                    noteDotHTML += '<div class="note-line-long"></div>';
                } else {
                    for (let k = 0; k < noteCount; k++) {
                        const visual = getNoteCategoryVisual(noteList[k].category);
                        noteDotHTML += `<div class="note-dash-small" style="background-color:${visual.stripColor};"></div>`;
                    }
                }
                noteDotHTML += '</div>';

                // Masukkan Catatan ke inCellEvents (Untuk Popup Hover & Agenda dalam Kotak)
                const sortedNoteList = [...noteList].sort(sortByTime);

                sortedNoteList.forEach(note => {
                    const visual = getNoteCategoryVisual(note.category);
                    inCellEvents.push({ text: note.text, color: visual.textColor, time: note.time });
                });
            }

            // --- GENERATE HTML FINAL (AGENDA DALAM KOTAK & TOOLTIP HOVER) ---
            let inCellHTML = '';
            let tooltipDataString = '';

            if (inCellEvents.length > 0) {
                // 1. HTML untuk Agenda di Bawah Kotak (Saat Panel Kanan Ditutup)
                const showBullet = inCellEvents.length > 1;
                const agendaModeClass = showBullet ? 'multi-note' : 'single-note';
                inCellHTML = `<div class="in-cell-agenda ${agendaModeClass}">`;

                inCellEvents.forEach(evt => {
                    const bulletHTML = showBullet ? '<span class="agenda-bullet">&bull;</span>' : '';
                    const timeHTML = evt.time ? `<span class="agenda-time">${evt.time}</span>` : '';
                    inCellHTML += `
                                <div class="agenda-text-row ${agendaModeClass} ${evt.color}">
                                    ${bulletHTML}${timeHTML}${escapeHtml(evt.text)}
                                </div>`;
                });
                inCellHTML += '</div>';

            }

            // 2. HTML untuk Popup Hover (Tooltip)
            const tooltipActiveHTML = inCellEvents.map(e => {
                const timeHTML = e.time ? `<span class='font-bold opacity-90 mr-1'>${e.time}</span>` : '';
                return `<div class='flex items-center gap-2 mb-2'>
                            <span class='w-2 h-2 rounded-full bg-current opacity-70 flex-shrink-0'></span>
                            <span class='font-medium tooltip-item-text'>${timeHTML}${escapeHtml(e.text)}</span>
                        </div>`;
            }).join('');

            // Note selesai tetap ditampilkan di tooltip, dipindah paling bawah dengan coretan tebal.
            const tooltipCompletedHTML = completedNoteList.map(note => {
                const timeHTML = note.time ? `<span class='font-bold opacity-90 mr-1'>${note.time}</span>` : '';
                return `<div class='flex items-center gap-2 mb-2 text-slate-400'>
                            <span class='w-2 h-2 rounded-full bg-current opacity-70 flex-shrink-0'></span>
                            <span class='tooltip-item-text' style='text-decoration-line: line-through; text-decoration-thickness: 2px; text-decoration-color: currentColor;'>${timeHTML}${escapeHtml(note.text)}</span>
                        </div>`;
            }).join('');

            tooltipDataString = `${tooltipActiveHTML}${tooltipCompletedHTML}`;

            // --- LOGIKA DOT LAINNYA ---
            const cutiDotHTML = !!cutiName ? `<div class="cuti-dot"></div>` : '';
            const obsDotHTML = !!observanceName ? `<div class="obs-dot"></div>` : '';

            // Pasaran
            const refDate = new Date(2026, 1, 1);
            const diff = Math.floor((dateObj - refDate) / 86400000);
            let pasaranIdx = (3 + (diff % 5)) % 5;
            if (pasaranIdx < 0) pasaranIdx += 5;
            const showPasaranInCell = settings.showPasaran && !isMobileLandscapeMode;
            const pasaranContent = showPasaranInCell ? `<span class="pasaran-text">${pasaranArr[pasaranIdx]}</span>` : '';

            // Hijriah
            let hijriContent = '';
            let hDayModal = h.day; let hMonthModal = hijriMonths[h.month]; let hYearModal = h.year;
            let isHardcodedStatus = h.isHardcoded;

            const showHijriInCell = settings.showHijri && !isMobileLandscapeMode;
            if (showHijriInCell) {
                if (h.day === 1) {
                    let badgeBg = 'bg-slate-600';
                    if (isSunday || isHoliday) badgeBg = 'bg-red-500';
                    else if (isFriday) badgeBg = 'bg-emerald-500';
                    hijriContent = `<div class="hijri-badge ${badgeBg}">${h.day}</div>`;
                } else {
                    hijriContent = `<span class="hijri-text">${h.day}</span>`;
                }
            }

            // Tentukan Class CSS Cell
            let cellClass = `day-cell ${isToday ? 'today' : ''}`;
            if (isToday && highlightTriggered) cellClass += ' today-jump-animation';
            if (anniversaryData) cellClass += ' anniversary';
            else if (isSunday || isHoliday) cellClass += ' sunday';
            else if (isFriday) cellClass += ' friday';

            cell.className = cellClass;

            const birthdayIconHTML = birthdayList.length > 0
                ? `<span class="birthday-corner-dot" title="Ada ulang tahun"></span>`
                : '';

            // --- RENDER HTML CELL ---
            cell.innerHTML = `
                    <span class="date-wrapper">
                        ${actualDay}
                        ${birthdayIconHTML}
                        ${cutiDotHTML}
                        ${obsDotHTML}
                        ${noteDotHTML}
                    </span>
                    
                    <div class="cell-bottom-row">
                        ${pasaranContent}
                        ${hijriContent}
                    </div>
                    ${inCellHTML}
                    `;

            // --- PASANG EVENT HOVER TOOLTIP JIKA ADA DATA ---
            if (tooltipDataString !== '') {
                cell.dataset.tooltip = tooltipDataString;
                cell.onmouseenter = (e) => showHoverTooltip(e, cell);
                cell.onmouseleave = hideHoverTooltip;
            }

            // OnClick Event
            // OnClick Event
            cell.onclick = () => {
                // --- TAMBAHAN LOGIKA ANIMASI KENYAL ---
                if (window.innerWidth < 1024) { 
                    cell.classList.remove('cell-tap-animate');
                    void cell.offsetWidth; // Trigger reflow
                    cell.classList.add('cell-tap-animate');
                    
                    if (navigator.vibrate) navigator.vibrate(10); 

                    // Berikan delay 100ms agar user bisa melihat selnya "membal" 
                    // sebelum tertutup oleh popup detail
                    setTimeout(() => {
                        showDetail(actualDay, actualMonth, actualYear, dayNames[dayOfWeek], pasaranArr[pasaranIdx], hDayModal, hMonthModal, hYearModal, holidayName, cutiName, observanceName, isSunday, birthdayList, anniversaryData, isHardcodedStatus);
                    }, 100);
                } else {
                    // Desktop: Langsung buka tanpa animasi/delay
                    showDetail(actualDay, actualMonth, actualYear, dayNames[dayOfWeek], pasaranArr[pasaranIdx], hDayModal, hMonthModal, hYearModal, holidayName, cutiName, observanceName, isSunday, birthdayList, anniversaryData, isHardcodedStatus);
                }
            }; // Tutup cell.onclick

        }

        // Selalu append cell untuk semua kasus (bulan aktif maupun other-month)
        grid.appendChild(cell);
        // --- AKHIR GANTI ISI LOOP ---
    }
    renderEventsList(month, year);
    if (highlightTriggered) setTimeout(() => { highlightTriggered = false; }, 2000);
}

// --- FUNGSI UNTUK MENAMPILKAN POPUP SAAT MOUSE HOVER ---
function showHoverTooltip(e, cell) {
    if (window.innerWidth < 1024) return; // Hanya aktif di Desktop/Web View

    const tooltip = document.getElementById('calendarHoverTooltip');
    if (!tooltip || !cell.dataset.tooltip) return;

    // Isi konten HTML dari data yang sudah disiapkan
    tooltip.innerHTML = cell.dataset.tooltip;

    // Hitung posisi kotak tanggal yang di-hover
    const rect = cell.getBoundingClientRect();
    const calendarBody = document.querySelector('.main-content');
    const bodyRect = calendarBody ? calendarBody.getBoundingClientRect() : null;

    // Set posisi X tepat di tengah kotak
    const x = rect.left + (rect.width / 2);
    // Set posisi Y di atas kotak (dikurangi 8px untuk jarak)
    let y = rect.top - 8;

    // Batas lebar tooltip mengikuti lebar body kalender (dinamis saat panel collapse/expand).
    const viewportMax = window.innerWidth - 24;
    const calendarMax = bodyRect ? Math.floor(bodyRect.width - 24) : viewportMax;
    const maxTooltipWidth = Math.max(240, Math.min(viewportMax, calendarMax));
    tooltip.style.maxWidth = `${maxTooltipWidth}px`;

    // Persiapkan tooltip agar bisa diukur tingginya
    tooltip.style.left = `${x}px`;
    tooltip.classList.remove('tooltip-bottom');
    tooltip.style.transform = `translate(-50%, -100%)`; // Geser ke atas sebesar tingginya sendiri

    // Clamp posisi agar tooltip tidak keluar dari area body kalender.
    const tooltipWidth = tooltip.offsetWidth || maxTooltipWidth;
    const halfTooltip = tooltipWidth / 2;
    const minX = bodyRect ? (bodyRect.left + 8 + halfTooltip) : (8 + halfTooltip);
    const maxX = bodyRect ? (bodyRect.right - 8 - halfTooltip) : (window.innerWidth - 8 - halfTooltip);
    const clampedX = Math.min(maxX, Math.max(minX, x));
    tooltip.style.left = `${clampedX}px`;

    // PENGAMAN: Jika tanggal ada di baris paling atas dan popup terpotong layar atas
    // Maka kita pindah popupnya ke bawah kotak
    if (y - tooltip.offsetHeight < 0) {
        y = rect.bottom + 8;
        tooltip.style.transform = `translate(-50%, 0)`;
        tooltip.classList.add('tooltip-bottom'); // Putar panahnya ke atas
    }

    tooltip.style.top = `${y}px`;
    tooltip.classList.add('show');
}

function hideHoverTooltip() {
    const tooltip = document.getElementById('calendarHoverTooltip');
    if (tooltip) tooltip.classList.remove('show');
}

function renderEventsList(month, year) {
    let htmlContent = '';
    const realToday = new Date();
    const tDay = realToday.getDate(); const tMonth = realToday.getMonth(); const tYear = realToday.getFullYear();
    if (settings.showFamily && weddingAnniversary.month === month) {
        const annAge = year - weddingAnniversary.year;
        if (annAge > 0) {
            const isToday = (weddingAnniversary.day === tDay && month === tMonth);
            htmlContent += `<div class="anniversary-item ${isToday ? 'highlight-today' : ''} flex justify-between items-center cursor-pointer hover:scale-[1.02] transition">
                    <div class="flex flex-col"><span class="text-[0.7rem] font-bold text-pink-800">${weddingAnniversary.day} ${monthNames[month]}</span><span class="text-[0.6rem] text-pink-600 font-semibold">Anniversary Pernikahan ??</span></div><span class="text-[0.65rem] font-bold text-pink-700 bg-pink-100 px-2 py-1 rounded-full">Ke-${annAge}</span></div>`;
        }
    }
    const monthBirthdays = getAllBirthdays()
        .map((b) => {
            const resolved = resolveBirthdayDateForYear(b, year);
            return { ...b, displayDay: resolved.day, displayMonth: resolved.month };
        })
        .filter((b) => b.displayMonth === month)
        .sort((a, b) => a.displayDay - b.displayDay || a.name.localeCompare(b.name));

    monthBirthdays.forEach((b) => {
        const age = year - b.year;
        if (age <= 0) return;
        const isToday = (b.displayDay === tDay && month === tMonth && year === tYear);
        htmlContent += `<div class="birthday-item ${isToday ? 'highlight-today' : ''} flex justify-between items-center cursor-pointer hover:scale-[1.02] transition">
                <div class="flex flex-col"><span class="text-[0.7rem] font-bold text-amber-800">${b.displayDay} ${monthNames[month]}</span><span class="text-[0.6rem] text-amber-600 font-semibold truncate w-32"><i class="fas fa-gift mr-1 text-amber-500"></i>Ulang Tahun ${b.name}</span></div><span class="text-[0.65rem] font-bold text-amber-700 bg-amber-100 px-2 py-1 rounded-full">Ke-${age}</span></div>`;
    });
    let mergedEvents = [];
    const storedNotes = getStoredNotes();
    Object.keys(storedNotes).forEach(dateKey => {
        const [nY, nM, nD] = dateKey.split('-').map(Number);
        if (nY === year && nM === month) {
            const noteArr = storedNotes[dateKey];
            if (Array.isArray(noteArr) && noteArr.length > 0) {
                // Push GROUP object instead of single text
                mergedEvents.push({ day: nD, type: 'note-group', items: noteArr });
            }
        }
    });
    if (holidaysData[year] && holidaysData[year][month]) {
        Object.keys(holidaysData[year][month]).forEach(d => mergedEvents.push({ day: parseInt(d), name: holidaysData[year][month][d], type: 'holiday' }));
    }
    if (cutiBersamaData[year] && cutiBersamaData[year][month]) {
        Object.keys(cutiBersamaData[year][month]).forEach(d => mergedEvents.push({ day: parseInt(d), name: cutiBersamaData[year][month][d], type: 'cuti' }));
    }
    if (settings.showObservances && nationalObservances[month]) {
        Object.keys(nationalObservances[month]).forEach(d => mergedEvents.push({ day: parseInt(d), name: nationalObservances[month][d], type: 'observance' }));
    }
    mergedEvents.sort((a, b) => a.day - b.day);
    mergedEvents.forEach(evt => {
        const isToday = (evt.day === tDay && month === tMonth && year === tYear);

        if (evt.type === 'note-group') {
            // --- RENDER GROUP NOTE ---
            const items = evt.items;
            if (items.length === 1) {
                // SINGLE NOTE
                const n = items[0];
                let iconClass = 'fa-sticky-note text-emerald-500';
                if (n.category === 'kerja') iconClass = 'fa-briefcase text-blue-500';
                else if (n.category === 'penting') iconClass = 'fa-exclamation-circle text-red-500';
                else if (n.category === 'ide') iconClass = 'fa-lightbulb text-amber-500';

                const timeBadge = n.time ? `<span class="ml-1 text-[0.55rem] font-bold bg-slate-100 text-slate-500 px-1 rounded">${n.time}</span>` : '';

                htmlContent += `<div class="note-item ${isToday ? 'highlight-today' : ''} flex justify-between items-center cursor-pointer hover:scale-[1.02] transition" onclick="showDetail(${evt.day}, ${month}, ${year}, '${dayNames[new Date(year, month, evt.day).getDay()]}', '', '', '', '', null, null, null, false, null, null, false)">
                        <span class="text-[0.7rem] font-bold text-slate-800 w-8">${evt.day} ${monthNames[month].substring(0, 3)}</span>
                        <div class="flex-1 flex items-center justify-end gap-1 overflow-hidden">
                             <i class="fas ${iconClass} text-[0.6rem]"></i>
                             <span class="text-[0.65rem] text-emerald-700 font-medium truncate">${escapeHtml(n.text)}</span>
                             ${timeBadge}
                        </div>
                        </div>`;
            } else {
                // MULTIPLE NOTES (Expandable)
                // SORT by time first
                items.sort((a, b) => {
                    if (a.time && !b.time) return -1;
                    if (!a.time && b.time) return 1;
                    if (a.time && b.time) return a.time.localeCompare(b.time);
                    return 0;
                });

                let subListHTML = '';
                items.forEach(n => {
                    let iconClass = 'fa-sticky-note text-emerald-500';
                    if (n.category === 'kerja') iconClass = 'fa-briefcase text-blue-500';
                    else if (n.category === 'penting') iconClass = 'fa-exclamation-circle text-red-500';
                    else if (n.category === 'ide') iconClass = 'fa-lightbulb text-amber-500';
                    const timeStr = n.time ? n.time : '--:--';

                    subListHTML += `
                             <div class="flex items-center gap-2 py-1 border-b border-slate-100 last:border-0 pl-2">
                                <span class="text-[0.6rem] font-bold text-slate-400 w-8">${timeStr}</span>
                                <i class="fas ${iconClass} text-[0.6rem] w-3 text-center"></i>
                                <span class="text-[0.65rem] text-slate-600 truncate flex-1">${escapeHtml(n.text)}</span>
                             </div>`;
                });

                htmlContent += `
                        <details class="note-item ${isToday ? 'highlight-today' : ''} group open:bg-emerald-50 transition-all duration-300 overflow-hidden">
                            <summary class="flex justify-between items-center cursor-pointer list-none p-0">
                                <span class="text-[0.7rem] font-bold text-slate-800 w-8">${evt.day} ${monthNames[month].substring(0, 3)}</span>
                                <div class="flex-1 flex items-center justify-end gap-1">
                                    <span class="text-[0.65rem] font-bold bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full">${items.length} Catatan</span>
                                    <i class="fas fa-chevron-down text-[0.6rem] text-slate-400 group-open:rotate-180 transition-transform"></i>
                                </div>
                            </summary>
                            <div class="mt-2 pt-2 border-t border-emerald-100 bg-white/50 rounded-lg">
                                ${subListHTML}
                                <div class="text-center mt-1">
                                    <button onclick="showDetail(${evt.day}, ${month}, ${year}, '${dayNames[new Date(year, month, evt.day).getDay()]}', '', '', '', '', null, null, null, false, null, null, false)" class="text-[0.6rem] font-bold text-emerald-600 hover:text-emerald-800 uppercase tracking-wider py-1">Lihat Detail</button>
                                </div>
                            </div>
                        </details>`;
            }
        } else {
            // --- RENDER STANDARD EVENT (Holiday, Cuti, Observance) ---
            let colorClass, itemClass;
            if (evt.type === 'observance') { colorClass = 'text-blue-600'; itemClass = 'observance-item'; }
            else { colorClass = 'text-red-600'; itemClass = 'holiday-item'; }

            htmlContent += `<div class="${itemClass} ${isToday ? 'highlight-today' : ''} flex justify-between items-center cursor-pointer hover:scale-[1.02] transition">
                    <span class="text-[0.7rem] font-bold text-slate-800 w-10">${evt.day} ${monthNames[month].substring(0, 3)}</span><span class="text-[0.65rem] ${colorClass} font-medium text-right w-2/3 leading-tight line-clamp-2">${evt.name}</span></div>`;
        }
    });
    document.getElementById('holidayContainerMobile').innerHTML = htmlContent;
    document.getElementById('holidayContainerDesktop').innerHTML = htmlContent;
    if (!isNotesView) {
        const mobileContainer = document.getElementById('mobileInfoSection');
        if (mobileContainer) {
            mobileContainer.scrollTop = 0;
            setTimeout(() => {
                const todayEvent = document.querySelector('.highlight-today');
                if (todayEvent) todayEvent.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
            }, 600);
        }
    }
}

function goToToday() {
    const now = new Date();
    const isSameMonthYear = (currentDate.getFullYear() === now.getFullYear() && currentDate.getMonth() === now.getMonth());
    highlightTriggered = true;

    // Jika di halaman Catatanku, balik dulu ke Kalender
    if (isNotesView) {
        toggleNotesView();
    }

    if (isSameMonthYear) renderCalendar();
    else {
        const dir = (now.getFullYear() > currentDate.getFullYear() || (now.getFullYear() === now.getFullYear() && now.getMonth() > currentDate.getMonth())) ? 1 : -1;
        const originalTransition = settings.transitionType;
        settings.transitionType = 'zoom';
        changeMonth(dir, now);
        setTimeout(() => { settings.transitionType = originalTransition; }, 1000);
    }
}

function updateQuote() {
    const idx = Math.floor(Math.random() * quotes.length);
    const q = `"${quotes[idx]}"`;
    document.getElementById('quoteDisplayMobile').textContent = q;
    document.getElementById('quoteDisplayDesktop').textContent = q;
}

function changeMonth(dir, targetDate = null) {
    // --- BAGIAN BARU: Cek Transisi 'None' di Awal ---
    // Jika user memilih "None", kita langsung ubah tanggal dan render ulang.
    // Kita gunakan 'return' agar kode animasi di bawahnya TIDAK dijalankan sama sekali.
    if (settings.transitionType === 'none') {
        if (targetDate) {
            currentDate = new Date(targetDate);
        } else {
            // Ubah tanggal ke tanggal 1 bulan berikutnya/sebelumnya
            currentDate.setDate(1);
            currentDate.setMonth(currentDate.getMonth() + dir);
        }
        renderCalendar();
        updateQuote();
        return; // <--- INI KUNCINYA: Berhenti di sini, jangan lanjut ke animasi/setTimeout
    }

    // --- BAGIAN LAMA (ANIMASI) ---
    // Kode di bawah ini hanya akan jalan jika transitionType BUKAN 'none'

    if (isAnimating) return;
    isAnimating = true;

    const container = document.getElementById('gridContainer');
    const type = settings.transitionType;

    const applyTransitionOut = () => {
        container.style.opacity = '0';
        switch (type) {
            case 'slide': container.style.transform = dir > 0 ? 'translateX(-15%)' : 'translateX(15%)'; break;
            case 'cube': container.style.transformOrigin = dir > 0 ? 'left center' : 'right center'; container.style.transform = dir > 0 ? 'rotateY(-90deg) scale(0.85) translateZ(50px)' : 'rotateY(90deg) scale(0.85) translateZ(50px)'; break;
            case 'zoom': container.style.transform = 'scale(0.8)'; break;
            case 'flip': container.style.transform = 'rotateY(180deg)'; break;
        }
    };

    const applyTransitionIn = () => {
        container.style.transition = 'none';
        switch (type) {
            case 'slide': container.style.transform = dir > 0 ? 'translateX(15%)' : 'translateX(-15%)'; break;
            case 'cube': container.style.transformOrigin = dir > 0 ? 'right center' : 'left center'; container.style.transform = dir > 0 ? 'rotateY(90deg) scale(0.85) translateZ(50px)' : 'rotateY(-90deg) scale(0.85) translateZ(50px)'; break;
            case 'zoom': container.style.transform = 'scale(1.2)'; break;
            case 'flip': container.style.transform = 'rotateY(-180deg)'; break;
        }
    };

    const resetTransition = () => {
        const duration = type === 'cube' || type === 'flip' ? '0.3s' : '0.2s';
        const easing = type === 'cube' ? 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' : 'cubic-bezier(0.4, 0, 0.2, 1)';
        container.style.transition = `transform ${duration} ${easing}, opacity 0.3s`;
        container.style.transform = 'translateX(0) rotateY(0deg) scale(1) translateZ(0)';
        container.style.opacity = '1';
    };

    // Eksekusi Animasi
    applyTransitionOut();

    // setTimeout ini yang bikin lag di versi lama, sekarang hanya jalan kalau ada animasi
    setTimeout(() => {
        if (targetDate) currentDate = new Date(targetDate);
        else { currentDate.setDate(1); currentDate.setMonth(currentDate.getMonth() + dir); }

        renderCalendar();
        updateQuote();
        applyTransitionIn();

        setTimeout(() => {
            resetTransition();
            setTimeout(() => isAnimating = false, 500);
        }, 50);
    }, 250);
}

function openSettings() {
    const overlay = document.getElementById('selectorModal');
    const body = document.getElementById('modalBody');
    const title = document.getElementById('modalTitle');

    overlay.classList.remove('pos-top');
    overlay.classList.add('pos-center');
    title.classList.remove('hidden');
    title.textContent = "PENGATURAN";
    body.className = "p-4 space-y-4 w-full"; 

    // --- 1. LOGIKA TOMBOL LOGIN (HANYA MUNCUL JIKA BELUM LOGIN) ---
    let loginSectionHTML = "";
    
    // KITA BALIK LOGIKANYA:
    // Jika user BELUM login (!currentUser), baru munculkan tombol besar di atas.
    // Jika SUDAH login, variable ini tetap kosong (tombol hilang).
    if (!currentUser) {
        loginSectionHTML = `
            <div class="mb-2">
                <button onclick="toggleGoogleAuth(); closeModal();" class="w-full bg-blue-600 text-white hover:bg-blue-700 p-3 rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition active:scale-95">
                    <i class="fab fa-google"></i>
                    <span>LOGIN GOOGLE</span>
                </button>
            </div>
        `;
    }

    // --- 2. LOGIKA STATUS CLOUD & TOMBOL LOGOUT (POSISI BAWAH) ---
    let cloudStatusHTML = "";
    
    if (currentUser) {
        // === TAMPILAN JIKA SUDAH LOGIN ===
        // Ada Status Hijau + Tombol Logout Kecil di bawahnya
        const namaUser = currentUser.displayName.split(' ')[0]; // Ambil nama depan
        
        cloudStatusHTML = `
            <div id="mobileSyncContainer" class="w-full border border-emerald-100 bg-emerald-50 rounded-xl p-3 flex items-center justify-center transition-all duration-300">
                <span id="mobileSyncStatusText" class="text-[0.65rem] font-bold text-emerald-600 uppercase tracking-widest flex items-center">
                    <i class="fas fa-check-circle mr-2"></i>TERSIMPAN DI GOOGLE
                </span>
            </div>
            
            <div class="text-center mt-2 mb-4">
                <p class="text-[0.6rem] text-slate-400 italic mb-1">Login sebagai <b>${namaUser}</b></p>
                <button onclick="toggleGoogleAuth(); closeModal();" class="text-[0.7rem] font-bold text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-full transition border border-red-100">
                    <i class="fas fa-sign-out-alt mr-1"></i>Keluar / Logout
                </button>
            </div>
        `;
    } else {
        // === TAMPILAN JIKA BELUM LOGIN ===
        // Status Abu-abu saja
        cloudStatusHTML = `
            <div class="w-full border border-slate-200 bg-slate-50 rounded-xl p-3 flex items-center justify-center opacity-70">
                <span class="text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest flex items-center">
                    <i class="fas fa-cloud-slash mr-2"></i>BELUM ADA AKUN
                </span>
            </div>
             <p class="text-[0.6rem] text-slate-400 text-center mt-1 mb-4 italic">Silakan login untuk menyimpan data</p>
        `;
    }

    // --- 3. LOGIKA NOTIFIKASI (TETAP SAMA) ---
    let isNotifOn = false;
    let notifLabel = "Belum Aktif";
    let notifSub = "Ketuk untuk mengaktifkan";
    let toggleClass = ""; 
    let iconClass = "fa-bell-slash"; 

    if (!('Notification' in window)) {
        notifLabel = "Tidak Support";
        notifSub = "Browser tidak mendukung";
    } else if (Notification.permission === 'granted') {
        isNotifOn = true;
        notifLabel = "Sudah Aktif";
        notifSub = "Ketuk untuk tes bunyi";
        toggleClass = "notif-active"; 
        iconClass = "fa-bell"; 
    } else if (Notification.permission === 'denied') {
        notifLabel = "Diblokir";
        notifSub = "Izinkan lewat pengaturan browser";
    }

    const notifSectionHTML = `
        <div class="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100 cursor-pointer ${toggleClass}" onclick="handleNotificationClick()">
            <div class="flex flex-col">
                <span class="font-bold text-sm text-slate-700">Notifikasi</span>
                <span class="text-[0.65rem] text-slate-400 font-bold uppercase tracking-wider">${notifLabel}</span>
                <span class="text-[0.6rem] text-slate-400 italic mt-0.5 leading-none">${notifSub}</span>
            </div>
            <div class="notif-toggle-pill">
                <div class="notif-toggle-circle">
                    <i class="fas ${iconClass} notif-toggle-icon"></i>
                </div>
            </div>
        </div>
    `;

    // --- 4. TOGGLES (TETAP SAMA) ---
    const makeToggle = (label, key) => `
        <div class="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
            <span class="font-bold text-sm text-slate-700">${label}</span>
            <input type="checkbox" class="toggle-switch" ${settings[key] ? 'checked' : ''} onchange="toggleSetting('${key}')">
        </div>`;

    const darkModeHTML = `
        <div class="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100 cursor-pointer" onclick="toggleSetting('darkMode')">
            <div class="flex flex-col">
                <span class="font-bold text-sm text-slate-700">Mode Tampilan</span>
                <span class="text-[0.65rem] text-slate-400 font-bold uppercase tracking-wider">${settings.darkMode ? 'Mode Gelap (Malam)' : 'Mode Terang (Siang)'}</span>
            </div>
            <div class="theme-toggle-pill">
                <i class="fas fa-cloud toggle-bg-icon icon-cloud"></i>
                <i class="fas fa-star toggle-bg-icon icon-stars text-[0.5rem]"></i>
                <div class="theme-toggle-circle">
                    <i class="fas ${settings.darkMode ? 'fa-moon' : 'fa-sun'} theme-toggle-icon"></i>
                </div>
            </div>
        </div>
    `;

    // --- 5. TEMA & TRANSISI (TETAP SAMA) ---
    let themeButtonsHTML = '';
    themes.forEach((t, i) => {
        const isActive = i === currentThemeIndex;
        const activeClass = isActive ? `${t.borderColor} ring-2 ${t.ringColor}` : 'border-transparent';
        themeButtonsHTML += `<button id="themeBtn-${i}" onclick="applyTheme(${i})" class="w-10 h-10 rounded-full border-2 ${activeClass} ${t.colorBg} transition hover:scale-110 shadow-sm"></button>`;
    });

    const themeSectionHTML = `
        <div class="bg-slate-50 rounded-xl p-4 mt-2 border border-slate-100">
            <span class="block font-bold text-sm text-slate-700 mb-4 text-center">Pilih Tema Warna</span>
            <div class="grid grid-cols-4 gap-y-4 gap-x-2 justify-items-center mb-2">
                ${themeButtonsHTML}
            </div>
            <div class="text-center mt-4 pt-2 border-t border-slate-200">
                <span class="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest">Tema Aktif</span>
                <div class="text-xs font-bold text-slate-700 uppercase tracking-wider mt-1" id="themeNameModal">${themes[currentThemeIndex].name}</div>
            </div>
        </div>`;

    const transitionHTML = `
        <div class="pt-2 mt-2 px-1">
            <span class="block font-bold text-[0.65rem] text-slate-400 uppercase tracking-widest mb-2">Efek Transisi</span>
            <select class="premium-select w-full" onchange="updateTransition(this.value)">
                <option value="none" ${settings.transitionType === 'none' ? 'selected' : ''}>None (Instant)</option>
                <option value="slide" ${settings.transitionType === 'slide' ? 'selected' : ''}>Slide</option>
                <option value="cube" ${settings.transitionType === 'cube' ? 'selected' : ''}>Cube Flip</option>
                <option value="fade" ${settings.transitionType === 'fade' ? 'selected' : ''}>Fade</option>
                <option value="zoom" ${settings.transitionType === 'zoom' ? 'selected' : ''}>Zoom</option>
                <option value="flip" ${settings.transitionType === 'flip' ? 'selected' : ''}>Flip Card</option>
            </select>
        </div>`;

    // --- 6. SHARE APP ---
    const shareHTML = `
        <div class="bg-blue-50 border border-blue-100 rounded-xl p-4 mt-3">
            <div class="flex justify-between items-center mb-2">
                <span class="font-bold text-sm text-blue-700"><i class="fas fa-share-alt mr-2"></i>Bagikan KALEINDO</span>
            </div>
            <button onclick="shareApp()" class="w-full bg-blue-600 text-white py-2 rounded-lg text-xs font-bold hover:bg-blue-700 transition shadow-sm">
                SHARE APLIKASI
            </button>
        </div>`;

    // --- 7. INSTALL APP (TETAP SAMA) ---
    let installHTML = '';
    const appInstalled = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

    if (!appInstalled) {
        installHTML = `
            <div class="bg-slate-900 text-white rounded-xl p-4 mt-4 shadow-lg">
                <div class="flex justify-between items-center mb-2">
                    <span class="font-bold text-sm"><i class="fas fa-download mr-2"></i>Install Aplikasi</span>
                </div>
                <button onclick="triggerInstallFromSettings()" class="w-full bg-white text-slate-900 py-2 rounded-lg text-xs font-bold hover:bg-slate-100 transition shadow-sm">
                    INSTALL SEKARANG
                </button>
            </div>`;
    }

    // --- PENYUSUNAN FINAL ---
    let finalHTML =
        loginSectionHTML + // <--- INI AKAN KOSONG KALAU SUDAH LOGIN
        notifSectionHTML +
        darkModeHTML +
        makeToggle('Kalender Hijriah', 'showHijri') +
        makeToggle('Hari Pasaran', 'showPasaran') +
        makeToggle('Hari Peringatan', 'showObservances') +
        themeSectionHTML +
        transitionHTML +
        shareHTML +
        installHTML +
        '<div class="h-4"></div>' +
        cloudStatusHTML + // <--- STATUS & TOMBOL LOGOUT ADA DI SINI
        '<div class="h-2"></div>';

    body.innerHTML = finalHTML;
    openModal('pos-center');
}

async function shareApp() {
    const shareUrl = new URL('index.html', window.location.href).href;
    const shareData = {
        title: 'KALEINDO - Kalender Indonesia',
        text: 'Kalender Indonesia dengan libur nasional, cuti bersama, catatan, dan sinkronisasi cloud.',
        url: shareUrl
    };

    if (navigator.share) {
        try {
            await navigator.share(shareData);
            return;
        } catch (err) {
            if (err && err.name === 'AbortError') return;
        }
    }

    try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(shareUrl);
            alert('Link KALEINDO disalin. Tinggal paste ke chat.');
            return;
        }
    } catch (_) {
        // Lanjut ke fallback lama jika clipboard API gagal.
    }

    const tempInput = document.createElement('input');
    tempInput.value = shareUrl;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Link KALEINDO disalin. Tinggal paste ke chat.');
}

// GANTI FUNGSI handleNotificationClick YANG LAMA DENGAN INI

function handleNotificationClick() {
    // 1. Cek Dukungan
    if (!('Notification' in window)) {
        alert("Browser tidak mendukung notifikasi.");
        return;
    }

    // 2. Fungsi Helper untuk memicu Notifikasi via Service Worker (PENTING UNTUK MOBILE)
    const showPersistentNotification = async () => {
        if ('serviceWorker' in navigator) {
            const reg = await navigator.serviceWorker.ready;
            
            // Panggil notifikasi lewat Service Worker
            reg.showNotification("Tes Notifikasi Berhasil! ??", {
                body: "Sistem alarm Kaleindo sudah siap.",
                icon: "icons/icon_192.webp",
                badge: "icons/icon_192.webp",
                vibrate: [200, 100, 200], // Getar: zrrrt.. zrrrt..
                tag: 'test-notif' // Mencegah notifikasi numpuk
            });
        } else {
            // Fallback untuk browser PC lama
            new Notification("Tes Notifikasi Berhasil! ??", {
                body: "Sistem alarm Kaleindo sudah siap.",
                icon: "icons/icon_192.webp"
            });
        }
    };

    // 3. Logika Izin
    if (Notification.permission === 'granted') {
        showPersistentNotification();
    } else if (Notification.permission === 'denied') {
        alert("...");
    } else {
        Notification.requestPermission().then(permission => {
            openSettings(); // Refresh modal mobile
            
            // TAMBAHKAN INI: Refresh sidebar desktop
            updateDesktopSidebarUI(); 

            if (permission === 'granted') {
                showPersistentNotification();
            }
        });
    }
}

// --- UPDATE FUNGSI TOGGLE SETTING ---
function toggleSetting(key) {
    settings[key] = !settings[key];
    saveSettingsToStorage();

    // LOGIKA DARK MODE
    if (key === 'darkMode') {
        updateDarkModeVisuals(); // Panggil fungsi update visual
    }

    syncSettingsUI();
    renderCalendar();
    saveToCloud();
}
// --- FUNGSI BARU: UPDATE VISUAL DARK MODE (ICON & CLASS) ---
function updateDarkModeVisuals() {
    const isDark = settings.darkMode;
    const body = document.body;

    // 1. Tambah/Hapus class body
    if (isDark) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }

    // 2. Update Ikon di Desktop Sidebar & Mobile Modal (Jika ikon FontAwesome tidak otomatis ganti via CSS)
    const icons = document.querySelectorAll('.theme-toggle-icon');
    icons.forEach(icon => {
        if (isDark) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    });
}
function createScrollerItem(text, value, isActive) { const item = document.createElement('div'); item.className = `scroller-item ${isActive ? 'active' : ''}`; item.textContent = text; item.dataset.value = value; return item; }

function setupScrollSnapObserver(containerId) {
    const container = document.getElementById(containerId);
    let scrollTimeout;
    container.onscroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const center = container.scrollTop + (container.clientHeight / 2);
            const items = container.querySelectorAll('.scroller-item');
            let closest = null; let minDiff = Infinity;
            items.forEach(item => {
                const itemCenter = item.offsetTop + (item.offsetHeight / 2);
                const diff = Math.abs(center - itemCenter);
                if (diff < minDiff) { minDiff = diff; closest = item; }
                item.classList.remove('active');
            });
            if (closest) closest.classList.add('active');
        }, 50);
    };
}

function openMonthSelector() {
    const overlay = document.getElementById('selectorModal');
    const body = document.getElementById('modalBody');
    const title = document.getElementById('modalTitle');

    // 1. Tambahkan class khusus agar modal muncul di atas
    overlay.classList.add('pos-top');

    title.classList.remove('hidden');
    title.textContent = "PILIH BULAN";

    // Menggunakan grid yang sudah kita perbaiki sebelumnya
    body.className = "grid grid-cols-3 gap-3 p-2 pb-4"; // pb dikurangi dikit karena di atas lebih aman

    body.innerHTML = '';
    monthNames.forEach((m, i) => {
        const div = document.createElement('div');
        div.className = `p-3 text-center rounded-xl font-bold text-[0.75rem] cursor-pointer transition active:scale-95 ${currentDate.getMonth() === i ? 'bg-slate-900 text-white shadow-lg' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`;
        div.textContent = m;
        div.onclick = () => {
            currentDate.setDate(1);
            currentDate.setMonth(i);
            renderCalendar();
            closeModal();
        };
        body.appendChild(div);
    });

    openModal('pos-top');
}

function openYearSelector() {
    const overlay = document.getElementById('selectorModal');
    const body = document.getElementById('modalBody');
    const title = document.getElementById('modalTitle');

    overlay.classList.add('pos-top');
    title.classList.remove('hidden');
    title.textContent = "PILIH TAHUN";
    body.className = "w-full";

    const currentYear = currentDate.getFullYear();
    // Tombol juga sudah dinaikkan (mb-8) sesuai request sebelumnya
    body.innerHTML = `<div class="scroller-wrapper"><div class="selection-indicator"></div><div class="scroller-col" id="yearListScroll"></div></div><button onclick="selectHighlightedYear()" class="w-full mt-4 bg-slate-900 text-white p-3 rounded-xl font-bold text-xs tracking-wider mb-4">PILIH TAHUN</button>`;

    const list = document.getElementById('yearListScroll');
    for (let y = currentYear - 100; y <= currentYear + 100; y++) list.appendChild(createScrollerItem(y, y, y === currentYear));

    openModal('pos-top');
    setupScrollSnapObserver('yearListScroll');
    setTimeout(() => { const active = list.querySelector('.active'); if (active) active.scrollIntoView({ block: 'center' }); }, 100);
}

function selectHighlightedYear() {
    const activeEl = document.querySelector('#yearListScroll .active');
    if (activeEl) { currentDate.setDate(1); currentDate.setFullYear(parseInt(activeEl.dataset.value)); renderCalendar(); closeModal(); }
}

// --- FITUR PENCARIAN BARU (TEKS & TANGGAL) ---

// --- FITUR PENCARIAN BARU (FIXED LAYOUT & SCROLL) ---

function openDateSearch() {
    const overlay = document.getElementById('selectorModal');
    const body = document.getElementById('modalBody');
    const title = document.getElementById('modalTitle');

    // DETEKSI LAYAR: Jika Desktop (>1024px), pakai 'pos-center'. Jika HP, pakai 'pos-top'
    const isDesktop = window.innerWidth >= 1024;

    if (isDesktop) {
        overlay.classList.remove('pos-top');
        overlay.classList.add('pos-center'); // Desktop: Tengah
    } else {
        overlay.classList.remove('pos-center');
        overlay.classList.add('pos-top'); // Mobile: Atas
    }

    title.classList.remove('hidden');
    title.textContent = "PENCARIAN";
    
    // Reset padding agar kita bisa atur full area
    body.className = "w-full p-0"; 

    // STRUKTUR HTML
    // Perbaikan Desktop: 'lg:h-auto' agar tinggi menyesuaikan isi, 'lg:max-h-[500px]' batas maksimal
    // Kita hapus height fix di desktop agar background membungkus sempurna
    body.innerHTML = `
        <div class="flex flex-col h-[65vh] lg:h-[450px] lg:max-h-[60vh] bg-white rounded-b-xl overflow-hidden">
            
            <div class="flex-none p-4 pb-2">
                <div class="relative">
                    <input type="text" id="searchInput" placeholder="Cari catatan..." 
                        class="w-full p-3 pl-10 rounded-xl border border-slate-200 bg-slate-50 font-bold text-sm focus:outline-none focus:border-blue-500 transition shadow-inner text-slate-700"
                        autocomplete="off">
                    <i class="fas fa-search absolute left-3 top-3.5 text-slate-400"></i>
                </div>
            </div>

            <div id="searchResults" class="flex-1 overflow-y-auto min-h-0 px-4 custom-scrollbar">
                <div class="flex flex-col items-center justify-center h-full opacity-50">
                    <i class="fas fa-search text-4xl mb-3 text-slate-300"></i>
                    <p class="text-xs text-slate-400 font-medium">Ketik kata kunci di atas</p>
                </div>
            </div>

            <div class="flex-none p-4 pt-2 border-t border-slate-100 bg-white mt-auto z-10 relative">
                <button onclick="switchToDateScroller()" class="w-full bg-slate-100 text-slate-600 p-3 rounded-xl font-bold text-xs tracking-wider hover:bg-slate-200 transition flex items-center justify-center gap-2 shadow-sm">
                    <i class="fas fa-calendar-alt"></i> ATAU PILIH TANGGAL MANUAL
                </button>
            </div>

        </div>
    `;

    // Buka Modal sesuai posisi yang ditentukan di atas
    openModal(isDesktop ? 'pos-center' : 'pos-top');

    // Logic Pencarian (SAMA SEPERTI SEBELUMNYA)
    const input = document.getElementById('searchInput');
    setTimeout(() => input.focus(), 100);
    
    input.oninput = function() {
        const keyword = this.value.toLowerCase().trim();
        const container = document.getElementById('searchResults');
        
        if (!keyword) {
            container.innerHTML = `
                <div class="flex flex-col items-center justify-center h-full opacity-50">
                    <i class="fas fa-search text-4xl mb-3 text-slate-300"></i>
                    <p class="text-xs text-slate-400 font-medium">Ketik kata kunci di atas</p>
                </div>`;
            return;
        }

        const notes = getStoredNotes();
        let results = [];

        Object.keys(notes).forEach(dateKey => {
            const dayNotes = notes[dateKey];
            dayNotes.forEach(note => {
                if (note.text.toLowerCase().includes(keyword)) {
                    results.push({ dateKey: dateKey, ...note });
                }
            });
        });

        results.sort((a, b) => new Date(b.dateKey) - new Date(a.dateKey));

        if (results.length === 0) {
            container.innerHTML = `
                <div class="flex flex-col items-center justify-center h-full text-slate-400">
                    <i class="far fa-sad-tear text-2xl mb-2"></i>
                    <p class="text-xs font-bold">Tidak ada hasil "${keyword}"</p>
                </div>`;
        } else {
            container.innerHTML = '';
            results.forEach(res => {
                const [y, m, d] = res.dateKey.split('-').map(Number);
                const dateObj = new Date(y, m, d);
                const dateStr = `${d} ${monthNames[m]} ${y}`;
                
                let iconClass = 'fa-sticky-note text-emerald-500';
                if (res.category === 'kerja') iconClass = 'fa-briefcase text-blue-500';
                else if (res.category === 'penting') iconClass = 'fa-exclamation-circle text-red-500';
                else if (res.category === 'ide') iconClass = 'fa-lightbulb text-amber-500';

                const el = document.createElement('div');
                el.className = 'bg-white p-3 rounded-xl border border-slate-200 shadow-sm cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition active:scale-95 group mb-2 last:mb-0';
                el.innerHTML = `
                    <div class="flex justify-between items-start mb-1">
                        <span class="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider group-hover:text-blue-400 transition">${dateStr}</span>
                        ${res.time ? `<span class="text-[0.6rem] bg-slate-100 text-slate-500 px-1.5 rounded font-bold group-hover:bg-white group-hover:text-blue-500 transition">${res.time}</span>` : ''}
                    </div>
                    <div class="flex items-start gap-2">
                        <i class="fas ${iconClass} mt-1 text-xs"></i>
                        <p class="text-sm font-medium text-slate-700 line-clamp-2 leading-snug">${highlightKeyword(res.text, keyword)}</p>
                    </div>
                `;
                
                el.onclick = () => {
                    const h = getHijriDate(dateObj);
                    const dayName = dayNames[dateObj.getDay()];
                    
                    const refDate = new Date(2026, 1, 1);
                    const diff = Math.floor((dateObj - refDate) / 86400000);
                    let pasaranIdx = (3 + (diff % 5)) % 5;
                    if (pasaranIdx < 0) pasaranIdx += 5;
                    const pasaranName = pasaranArr[pasaranIdx];

                    const holiday = getHolidayName(d, m, y);
                    const cuti = getCutiBersamaName(d, m, y);
                    const obs = getObservanceName(d, m);
                    const bday = getBirthdaysForDate(d, m, y);
                    const anniv = isAnniversary(d, m);

                    closeModal();
                    currentDate = new Date(y, m, 1);
                    renderCalendar();

                    setTimeout(() => {
                        showDetail(d, m, y, dayName, pasaranName, h.day, hijriMonths[h.month], h.year, holiday, cuti, obs, (dateObj.getDay()===0), bday, anniv, h.isHardcoded);
                    }, 300);
                };
                container.appendChild(el);
            });
        }
    }
}

// Helper untuk menebalkan teks yang dicari
function highlightKeyword(text, keyword) {
    const regex = new RegExp(`(${keyword})`, 'gi');
    return text.replace(regex, '<span class="bg-yellow-200 text-slate-900 px-0.5 rounded">$1</span>');
}

// Fungsi untuk beralih ke Mode Scroller Tanggal (Fitur Lama)
function switchToDateScroller() {
    const body = document.getElementById('modalBody');
    const curM = currentDate.getMonth(); 
    const curY = currentDate.getFullYear();
    
    // Render ulang modal body dengan scroller lama
    body.innerHTML = `
        <div class="scroller-wrapper">
            <div class="selection-indicator"></div>
            <div class="scroller-col" id="monthScroller"></div>
            <div class="scroller-col" id="yearScroller"></div>
        </div>
        <button onclick="jumpToSelectedMonthYear()" class="w-full mt-4 bg-slate-900 text-white p-3 rounded-xl font-bold text-xs tracking-wider mb-2">LIHAT KALENDER</button>
        <button onclick="openDateSearch()" class="w-full text-slate-400 p-2 text-xs font-bold hover:text-slate-600 transition">KEMBALI KE PENCARIAN TEKS</button>
    `;

    // Re-init Scroller logic
    const mList = document.getElementById('monthScroller'); 
    const yList = document.getElementById('yearScroller');
    
    monthNames.forEach((m, i) => { mList.appendChild(createScrollerItem(m, i, i === curM)); });
    for (let y = curY - 50; y <= curY + 50; y++) { yList.appendChild(createScrollerItem(y, y, y === curY)); }
    
    setupScrollSnapObserver('monthScroller'); 
    setupScrollSnapObserver('yearScroller');
    
    setTimeout(() => {
        const activeM = mList.querySelector('.active'); 
        const activeY = yList.querySelector('.active');
        if (activeM) activeM.scrollIntoView({ block: 'center' }); 
        if (activeY) activeY.scrollIntoView({ block: 'center' });
    }, 100);
}

function jumpToSelectedMonthYear() {
    const activeM = document.querySelector('#monthScroller .active');
    const activeY = document.querySelector('#yearScroller .active');
    if (activeM && activeY) {
        currentDate.setDate(1); currentDate.setMonth(parseInt(activeM.dataset.value)); currentDate.setFullYear(parseInt(activeY.dataset.value));
        renderCalendar(); updateQuote(); closeModal();
    }
}

// Perhatikan penambahan parameter 'isHardcoded' di posisi terakhir
function showDetail(d, m, y, dayName, pasaranName, hDate, hMonth, hYear, holiday, cutiName, observanceName, isSunday, birthdayData, anniversaryData, isHardcoded) {
    try {
        const overlay = document.getElementById('selectorModal');
        const body = document.getElementById('modalBody');
        const title = document.getElementById('modalTitle');

        lastDetailArgs = [d, m, y, dayName, pasaranName, hDate, hMonth, hYear, holiday, cutiName, observanceName, isSunday, birthdayData, anniversaryData, isHardcoded];

        // 1. SETUP ELEMENT DOM
        title.classList.add('hidden');
        body.className = "p-4 text-center relative"; // Tambah relative untuk positioning

        const birthdaysOnDate = getBirthdaysForDate(d, m, y);

        // 2. LOGIKA WARNA & BADGE (Sama seperti sebelumnya)
        const detailQuote = quotes[Math.floor(Math.random() * quotes.length)];
        const isRedDay = isSunday || !!holiday;
        let dateColor = isRedDay ? "text-red-600" : "text-slate-900";
        let subColor = isRedDay ? "text-red-400" : "text-slate-400";
        if (birthdaysOnDate.length > 0) { dateColor = "text-amber-600"; subColor = "text-amber-400"; }
        else if (anniversaryData) { dateColor = "text-pink-600"; subColor = "text-pink-400"; }

        let specialBadge = '';
        if (anniversaryData) { const annAge = y - weddingAnniversary.year; specialBadge += `<div class="mt-2 px-3 py-1 bg-pink-100 text-pink-700 rounded-full font-bold text-[0.65rem] uppercase tracking-wide border border-pink-200 inline-block mx-1 mb-1">?? ANNIVERSARY KE-${annAge}</div>`; }
        if (holiday) specialBadge += `<div class="mt-2 px-3 py-1 bg-red-100 text-red-600 rounded-full font-bold text-[0.65rem] uppercase tracking-wide border border-red-200 inline-block mx-1 mb-1">${holiday}</div>`;
        if (cutiName) specialBadge += `<div class="mt-2 px-3 py-1 bg-red-50 text-red-500 rounded-full font-bold text-[0.65rem] uppercase tracking-wide border border-red-200 inline-block mx-1 mb-1">${cutiName}</div>`;
        if (observanceName) specialBadge += `<div class="mt-2 px-3 py-1 bg-blue-50 text-blue-500 rounded-full font-bold text-[0.65rem] uppercase tracking-wide border border-blue-200 inline-block mx-1 mb-1">${observanceName}</div>`;

        const pasaranText = settings.showPasaran ? pasaranName : '';
        let hijriTextDisplay = '';
        if (settings.showHijri && hDate) {
            hijriTextDisplay = isHardcoded ? `${hDate} ${hMonth} ${hYear}H` : `${hDate} ${hMonth}`;
        }

        // 3. AMBIL CATATAN
        const dateKey = `${y}-${m}-${d}`;
        const noteList = getNoteForDate(d, m, y);
        const customBirthdayIds = new Set(getStoredBirthdays().map((b) => String(b.id)));

        // Sort catatan
        noteList.sort((a, b) => {
            if (a.time && !b.time) return -1;
            if (!a.time && b.time) return 1;
            if (a.time && b.time) return a.time.localeCompare(b.time);
            return 0;
        });

        let birthdaysListHTML = '';
        if (birthdaysOnDate.length > 0) {
            birthdaysListHTML = `<div class="space-y-2 mb-3">`;
            birthdaysOnDate.forEach((b) => {
                const age = y - b.year;
                const canEdit = customBirthdayIds.has(String(b.id));
                birthdaysListHTML += `
                    <div class="flex items-center justify-between gap-2 p-2 bg-amber-50 border border-amber-200 rounded-xl">
                        <div class="min-w-0">
                            <p class="text-[0.72rem] font-bold text-amber-700 truncate"><i class="fas fa-cake-candles mr-1 text-amber-500"></i>${b.name}</p>
                            <p class="text-[0.62rem] text-amber-600">Ulang tahun ke-${age > 0 ? age : '?'}</p>
                        </div>
                        ${canEdit ? `
                            <div class="flex items-center gap-1 flex-shrink-0">
                                <button onclick="startEditBirthday('${b.id}')" class="w-7 h-7 rounded-lg border border-amber-300 text-amber-700 hover:bg-amber-100 transition">
                                    <i class="fas fa-pen text-[0.62rem]"></i>
                                </button>
                                <button onclick="deleteBirthdayAndRender('${b.id}')" class="w-7 h-7 rounded-lg border border-red-200 text-red-500 hover:bg-red-50 transition">
                                    <i class="fas fa-trash text-[0.62rem]"></i>
                                </button>
                            </div>` : ''}
                    </div>`;
            });
            birthdaysListHTML += `</div>`;
        }

        // --- RENDER LIST CATATAN (DENGAN SCROLL) ---
        let notesListHTML = '';
        if (noteList.length > 0) {
            // Kita beri max-height dan overflow-y-auto agar bisa discroll
            notesListHTML = `<div class="space-y-2 mb-4 max-h-[200px] overflow-y-auto pr-1 custom-scrollbar">`;
            noteList.forEach((n) => {
                const isDone = n.isCompleted;
                let catColor = 'border-slate-200';
                if (n.category === 'kerja') catColor = 'border-blue-400';
                else if (n.category === 'penting') catColor = 'border-red-400';
                else if (n.category === 'ide') catColor = 'border-amber-400';
                else catColor = 'border-emerald-400';

                notesListHTML += `
                        <div class="flex items-start gap-3 p-3 bg-white rounded-xl border-l-4 ${catColor} shadow-sm group text-left">
                            <div class="mt-0.5 cursor-pointer flex-shrink-0" onclick="toggleStatusAndRender('${dateKey}', '${n.id}', ${d}, ${m}, ${y})">
                                <i class="fas ${isDone ? 'fa-check-circle text-emerald-500' : 'fa-circle text-slate-300'} text-lg"></i>
                            </div>
                            <div class="flex-1 cursor-pointer overflow-hidden ${isDone ? 'opacity-50 line-through decoration-slate-400' : ''}" onclick="event.stopPropagation(); openEditNoteModal('${dateKey}', '${n.id}')">
                                <p class="text-sm font-medium text-slate-700 leading-snug break-words">${formatNoteTextForDisplay(n.text)}</p>
                                ${n.time ? `<span class="text-[0.65rem] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded mt-1 inline-block"><i class="far fa-clock mr-1"></i>${n.time}</span>` : ''}
                            </div>
                            <button onclick="deleteNoteAndRender('${dateKey}', '${n.id}', ${d}, ${m}, ${y})" class="text-slate-300 hover:text-red-500 transition px-1 flex-shrink-0">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </div>`;
            });
            notesListHTML += `</div>`;
        }

        // 4. RENDER HTML UTAMA
        body.innerHTML = `
                    <div class="flex flex-col items-center justify-center mb-4">
                        <div class="text-5xl font-black ${dateColor} leading-none tracking-tighter">${d}</div>
                        <div class="text-xs font-bold ${subColor} uppercase mt-1 tracking-widest mb-1">${monthNames[m]} ${y}</div>
                        ${specialBadge}
                    </div>
                    
                    <div class="bg-white border border-slate-100 rounded-2xl p-3 shadow-sm mb-4">
                        <div class="text-lg font-black text-slate-800 uppercase tracking-tight">${dayName} ${pasaranText}</div>
                        <div class="text-xs font-medium text-slate-500 mt-1">${hijriTextDisplay}</div>
                    </div>
                    
                    <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 shadow-sm mb-4 text-left">
                        ${birthdaysOnDate.length > 0 ? `
                        <div class="flex justify-between items-center mb-2">
                            <label class="text-[0.65rem] font-bold text-amber-500 uppercase tracking-widest">Ulang Tahun</label>
                            <span class="text-[0.6rem] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">${birthdaysOnDate.length}</span>
                        </div>
                        ${birthdaysListHTML}
                        ` : ''}

                        ${noteList.length > 0 ? `
                        <div class="flex justify-between items-center mb-3">
                            <label class="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest">Daftar Catatan</label>
                            <span class="text-[0.6rem] font-bold bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">${noteList.length}</span>
                        </div>
                        ${notesListHTML}
                        ` : ''}

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                            <button id="btnShowAddNote" onclick="toggleAddNoteForm(true)" class="w-full bg-white border border-slate-200 text-slate-600 p-3 rounded-xl font-bold text-xs hover:bg-slate-100 transition shadow-sm">
                                <i class="fas fa-plus-circle mr-1 text-emerald-500"></i> Tambah Catatan
                            </button>
                            <button id="btnShowAddBirthday" onclick="toggleAddBirthdayForm(true)" class="w-full bg-white border border-amber-200 text-amber-700 p-3 rounded-xl font-bold text-xs hover:bg-amber-50 transition shadow-sm">
                                <i class="fas fa-cake-candles mr-1 text-amber-500"></i> Set Ulang Tahun
                            </button>
                        </div>

                        <div id="addNoteForm" class="hidden mt-3 border border-slate-200 bg-white rounded-2xl p-4 shadow-sm">
                            <div class="flex justify-between items-center mb-3">
                                <span class="text-xs font-bold text-slate-700 uppercase tracking-wider">Catatan Baru</span>
                                <button onclick="toggleAddNoteForm(false)" class="text-slate-400 hover:text-red-500"><i class="fas fa-times"></i></button>
                            </div>
                            
                            <div class="grid grid-cols-[minmax(0,1fr)_7rem] gap-2 mb-3">
                                <select id="newNoteCategory" onchange="this.style.color = this.options[this.selectedIndex].style.color" class="bg-white border text-[0.7rem] font-bold uppercase tracking-wider border-slate-200 rounded-lg px-3 py-2 focus:outline-none min-w-0" style="color: #94a3b8;">
                                    <option value="pribadi" selected style="color: #10b981;">Pribadi</option>
                                    <option value="kerja" style="color: #3b82f6;">Kerja</option>
                                    <option value="penting" style="color: #ef4444;">Penting</option>
                                    <option value="ide" style="color: #f59e0b;">Ide</option>
                                </select>
                                <input type="time" id="newNoteTime" class="bg-white border text-[0.7rem] font-bold text-slate-600 border-slate-200 rounded-lg px-3 py-2 focus:outline-none w-full min-w-0">
                            </div>
                            
                            <textarea id="noteInput" class="h-40 w-full p-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500 transition resize-none bg-slate-50 mb-3 shadow-inner" placeholder="Ketik di sini..."></textarea>
                            
                            <button onclick="addNoteAndRender('${dateKey}', ${d}, ${m}, ${y})" class="w-full bg-slate-900 text-white p-3 rounded-xl font-bold text-xs tracking-wider hover:bg-slate-800 transition shadow-md">
                                SIMPAN
                            </button>
                        </div>
                        
                        <div id="addBirthdayForm" class="hidden mt-3 border border-amber-200 bg-amber-50/60 rounded-2xl p-4 shadow-sm">
                            <div class="flex justify-between items-center mb-3">
                                <span class="text-xs font-bold text-amber-700 uppercase tracking-wider">Set Ulang Tahun</span>
                                <button onclick="toggleAddBirthdayForm(false)" class="text-slate-400 hover:text-red-500"><i class="fas fa-times"></i></button>
                            </div>
                            
                            <div class="mb-3 text-[0.7rem] font-bold uppercase tracking-wider text-amber-700 bg-white border border-amber-200 rounded-lg px-3 py-2">
                                Tanggal: ${d} ${monthNames[m]}
                            </div>

                            <div class="grid grid-cols-[minmax(0,1.5fr)_minmax(7.5rem,1fr)] gap-2 mb-3">
                                <input type="text" id="birthdayNameInput" class="w-full p-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-amber-500 transition bg-white min-w-0" placeholder="Nama orang">
                                <input type="number" id="birthdayYearInput" class="w-full p-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-amber-500 transition bg-white min-w-0" placeholder="Tahun lahir" min="1900" max="${new Date().getFullYear()}">
                            </div>
                            <input type="hidden" id="birthdayEditId" value="">

                            <button id="birthdaySubmitBtn" onclick="saveBirthdayFromForm(${d}, ${m}, ${y})" class="w-full p-3 rounded-xl font-bold text-xs tracking-wider transition shadow-md" style="background:#f59e0b;color:#ffffff;border:1px solid #d97706;">
                                SIMPAN ULANG TAHUN
                            </button>
                        </div>
                    </div>
                    
                    <div class="p-4 bg-slate-50 rounded-2xl border border-slate-100 mt-auto"> 
                        <i class="fas fa-quote-left text-slate-300 text-lg mb-1 block text-center"></i>
                        <p class="text-xs italic text-slate-600 leading-relaxed font-medium text-center">"${detailQuote}"</p>
                    </div>
                    
                    <div class="h-2"></div>
                `;
        enhanceTimeInputDefault8('newNoteTime');
        enhanceNoteEditor('noteInput');

        openModal('pos-center');
    } catch (err) {
        console.error(err);
        alert("ERR: " + err.message);
    }
}

// FUNGSI PEMBANTU BARU (Wajib ditambahkan)
function toggleAddNoteForm(show) {
    const form = document.getElementById('addNoteForm');
    const birthdayForm = document.getElementById('addBirthdayForm');
    const wrapper = document.getElementById('modalBodyWrapper');
    if (!form) return;

    if (show) {
        form.classList.remove('hidden'); // Munculkan Form
        if (birthdayForm) birthdayForm.classList.add('hidden');
        // Fokus otomatis ke textarea
        setTimeout(() => {
            const input = document.getElementById('noteInput');
            if (input) input.focus();
            if (wrapper) form.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    } else {
        form.classList.add('hidden');    // Sembunyikan Form
    }
}

function toggleAddBirthdayForm(show) {
    const form = document.getElementById('addBirthdayForm');
    const noteForm = document.getElementById('addNoteForm');
    const wrapper = document.getElementById('modalBodyWrapper');
    if (!form) return;

    if (show) {
        form.classList.remove('hidden');
        if (noteForm) noteForm.classList.add('hidden');
        resetBirthdayFormMode();
        setTimeout(() => {
            const el = document.getElementById('birthdayNameInput');
            if (el) el.focus();
            if (wrapper) form.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    } else {
        form.classList.add('hidden');
    }
}

// --- HELPER UNTUK RE-RENDER MODAL SAAT ADA PERUBAHAN ---
// (Agar user tidak perlu tutup-buka modal setiap kali nambah/hapus)
function addNoteAndRender(dateKey, d, m, y) {
    const text = document.getElementById('noteInput').value;
    const category = document.getElementById('newNoteCategory').value;
    const time = document.getElementById('newNoteTime').value;

    if (text.trim()) {
        addNote(dateKey, text, category, time);
        // Refresh modal content (tanpa close)
        // Kita panggil showDetail lagi dengan semua parameter (agak hacky, tapi valid untuk single file simple)
        // Tapi kita butuh data-data lain (holiday, pasaran, dll). 
        // SOLUSI: Kita trigger click ulang pada tanggal di kalender? 
        // ATAU: Kita simpan last clicked data?
        // LEBIH BAIK: Kita update hanya bagian list HTML nya? Terlalu ribet manual DOM manipulation.
        // CARA MUDAH: Tutup lalu buka lagi? (Jelek UX)
        // CARA TERBAIK: Panggil ulang handler click elemen tanggal

        // Kita cari elemen tanggal yang sesuai di grid kalender dan klik secara programatik
        // Tapi day-cell tidak punya ID unik.

        // ALTERNATIF: Kita simpan argumen terakhir showDetail di variabel global?
        if (lastDetailArgs) {
            showDetail(...lastDetailArgs);
        }
    }
}

function resetBirthdayFormMode() {
    const editIdEl = document.getElementById('birthdayEditId');
    const submitBtn = document.getElementById('birthdaySubmitBtn');
    if (editIdEl) editIdEl.value = '';
    if (submitBtn) submitBtn.textContent = 'SIMPAN ULANG TAHUN';
}

function startEditBirthday(birthdayId) {
    const form = document.getElementById('addBirthdayForm');
    const noteForm = document.getElementById('addNoteForm');
    const wrapper = document.getElementById('modalBodyWrapper');
    const editIdEl = document.getElementById('birthdayEditId');
    const nameEl = document.getElementById('birthdayNameInput');
    const yearEl = document.getElementById('birthdayYearInput');
    const submitBtn = document.getElementById('birthdaySubmitBtn');
    const birthday = getStoredBirthdays().find((b) => String(b.id) === String(birthdayId));
    if (!form || !editIdEl || !nameEl || !yearEl || !birthday) return;

    form.classList.remove('hidden');
    if (noteForm) noteForm.classList.add('hidden');
    nameEl.value = birthday.name || '';
    yearEl.value = birthday.year || '';
    editIdEl.value = String(birthday.id);
    if (submitBtn) submitBtn.textContent = 'SIMPAN PERUBAHAN';
    setTimeout(() => {
        nameEl.focus();
        if (wrapper) form.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

function saveBirthdayFromForm(d, m, y) {
    const nameEl = document.getElementById('birthdayNameInput');
    const yearEl = document.getElementById('birthdayYearInput');
    const editIdEl = document.getElementById('birthdayEditId');
    if (!nameEl || !yearEl || !editIdEl) return;

    const name = nameEl.value.trim();
    const birthYear = parseInt(yearEl.value, 10);
    const currentYear = new Date().getFullYear();
    const editId = editIdEl.value.trim();

    if (!name) {
        alert('Isi nama dulu.');
        return;
    }

    if (!Number.isInteger(birthYear) || birthYear < 1900 || birthYear > currentYear) {
        alert(`Tahun lahir harus valid (1900-${currentYear}).`);
        return;
    }

    if (editId) {
        const ok = updateBirthday(editId, name, birthYear);
        if (!ok) {
            alert('Data ulang tahun tidak ditemukan.');
            return;
        }
    } else {
        addBirthday(d, m, birthYear, name);
    }

    resetBirthdayFormMode();
    if (lastDetailArgs) {
        showDetail(...lastDetailArgs);
    }
}

function deleteBirthdayAndRender(birthdayId) {
    if (!confirm('Hapus data ulang tahun ini?')) return;
    deleteBirthday(birthdayId);
    if (lastDetailArgs) showDetail(...lastDetailArgs);
}

function deleteNoteAndRender(dateKey, id, d, m, y) {
    if (confirm('Hapus catatan ini?')) {
        deleteNote(dateKey, id);
        if (lastDetailArgs) showDetail(...lastDetailArgs);
    }
}

function toggleStatusAndRender(dateKey, id, d, m, y) {
    toggleNoteStatus(dateKey, id);
    if (lastDetailArgs) showDetail(...lastDetailArgs);
}



let modalClassTimeout = null;

function openModal(posClassName = '') {
    const overlay = document.getElementById('selectorModal');
    if (modalClassTimeout) { clearTimeout(modalClassTimeout); modalClassTimeout = null; }

    // Reset helper classes first
    overlay.classList.remove('pos-top', 'pos-center');
    // Then apply the requested one
    if (posClassName) overlay.classList.add(posClassName);

    overlay.classList.add('active');
    if (location.hash !== '#modal') {
        history.pushState({ view: 'modal' }, '', '#modal');
    }
}

function closeModal(fromHistory = false) {
    const overlay = document.getElementById('selectorModal');
    overlay.classList.remove('active');

    // 1. Bersihkan History jika perlu (Hapus #modal)
    if (!fromHistory && location.hash === '#modal') {
        history.back();
    }

    // 2. Hapus class helper posisi
    if (modalClassTimeout) clearTimeout(modalClassTimeout);
    modalClassTimeout = setTimeout(() => {
        overlay.classList.remove('pos-top');
        overlay.classList.remove('pos-center');
        modalClassTimeout = null;
    }, 300);

    // 3. SAFETY LOCK (PENGAMAN LOGIKA VIEW)
    // Mencegah aplikasi "lompat" ke kalender atau tombol header salah icon
    setTimeout(() => {
        if (typeof isNotesView !== 'undefined' && isNotesView) {
            // JIKA SEDANG DI MODE CATATAN:
            const calView = document.getElementById('calendarViewContainer');
            const noteView = document.getElementById('notesViewContainer');
            
            // Tombol Header Desktop (ID BARU)
            const btnDesktop = document.getElementById('desktopNotesBtnTop');

            if (calView) calView.classList.add('hidden');
            if (noteView) {
                noteView.classList.remove('hidden');
                noteView.classList.add('active');
                noteView.style.display = 'flex'; 
            }

            // Paksa tombol header tetap icon HOME
            if (btnDesktop) {
                btnDesktop.innerHTML = '<i class="fas fa-home"></i>';
                btnDesktop.classList.add('bg-blue-50', 'text-blue-600', 'border-blue-200');
                btnDesktop.setAttribute('title', 'Kembali ke Kalender');
            }
        }
        // Jika di Kalender biasa, biarkan default
    }, 50); 
}

function setupSwipe() {
    // 1. Swipe untuk Kalender (Ganti Bulan)
    let startX = 0; const area = document.getElementById('calendarViewContainer');
    if (area) {
        area.addEventListener('touchstart', e => { startX = e.changedTouches[0].screenX; }, { passive: true });
        area.addEventListener('touchend', e => {
            const endX = e.changedTouches[0].screenX; if (endX < startX - 70) changeMonth(1); if (endX > startX + 70) changeMonth(-1);
        }, { passive: true });
    }

    // 2. Swipe untuk Catatanku (Ganti Minggu/Bulan/Tahun)
    const notesArea = document.getElementById('notesViewContainer');
    if (notesArea) {
        let sX = 0;
        notesArea.addEventListener('touchstart', e => { sX = e.changedTouches[0].screenX; }, { passive: true });
        notesArea.addEventListener('touchend', e => {
            const eX = e.changedTouches[0].screenX;
            if (eX < sX - 70) navNotes(1);  // Swipe Kiri -> Next
            if (eX > sX + 70) navNotes(-1); // Swipe Kanan -> Prev
        }, { passive: true });
    }
}

// Fungsi untuk buka-tutup sidebar
function toggleSidebar() {
    const sidebar = document.querySelector('.desktop-sidebar');
    const arrowBtn = document.getElementById('sidebarArrowBtn');
    const icon = arrowBtn.querySelector('i');

    if (sidebar) {
        sidebar.classList.toggle('collapsed');
        arrowBtn.classList.toggle('collapsed');

        // SIMPAN STATUS KE SETTINGS
        settings.sidebarCollapsed = sidebar.classList.contains('collapsed');
        saveSettingsToStorage(); // Panggil fungsi simpan yang sudah ada

        if (sidebar.classList.contains('collapsed')) {
            icon.classList.remove('fa-chevron-left');
            icon.classList.add('fa-chevron-right');
            arrowBtn.setAttribute('title', 'Buka Menu');
        } else {
            icon.classList.remove('fa-chevron-right');
            icon.classList.add('fa-chevron-left');
            arrowBtn.setAttribute('title', 'Tutup Menu');
        }

        renderCalendar();
    }
}

function toggleRightPanel() {
    const panel = document.getElementById('rightPanelDesktop');
    const arrowBtn = document.getElementById('rightArrowBtn');

    if (!panel || !arrowBtn) return;

    const icon = arrowBtn.querySelector('i');

    panel.classList.toggle('collapsed');
    arrowBtn.classList.toggle('collapsed');

    // SIMPAN STATUS KE SETTINGS
    settings.rightPanelCollapsed = panel.classList.contains('collapsed');
    saveSettingsToStorage(); // Panggil fungsi simpan yang sudah ada

    if (panel.classList.contains('collapsed')) {
        document.body.classList.add('right-panel-closed');
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-left');
        arrowBtn.setAttribute('title', 'Buka Agenda');
    } else {
        document.body.classList.remove('right-panel-closed');
        icon.classList.remove('fa-chevron-left');
        icon.classList.add('fa-chevron-right');
        arrowBtn.setAttribute('title', 'Tutup Agenda');
    }

    renderCalendar();
}

function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // 1. PENGAMAN: Jangan jalan jika sedang mengetik di Input/Textarea
        // (Agar user tetap bisa select text pakai Shift+Panah di dalam input)
        if (e.target.matches('input, textarea, select')) return;

        // 2. PENGAMAN: Jangan jalan jika Modal sedang terbuka
        const modal = document.getElementById('selectorModal');
        if (modal && modal.classList.contains('active')) return;

        // --- LOGIKA UTAMA ---

        // TOMBOL KIRI
        if (e.key === 'ArrowLeft') {
            e.preventDefault(); // Cegah scroll browser

            if (e.shiftKey) {
                // KASUS: Shift + Kiri -> Toggle Sidebar Kiri
                toggleSidebar();
            } else {
                // KASUS: Kiri Biasa -> Navigasi
                if (typeof isNotesView !== 'undefined' && isNotesView) navNotes(-1);
                else changeMonth(-1);
            }
        }

        // TOMBOL KANAN
        if (e.key === 'ArrowRight') {
            e.preventDefault();

            if (e.shiftKey) {
                // KASUS: Shift + Kanan -> Toggle Panel Kanan
                toggleRightPanel();
            } else {
                // KASUS: Kanan Biasa -> Navigasi
                if (typeof isNotesView !== 'undefined' && isNotesView) navNotes(1);
                else changeMonth(1);
            }
        }

        // TOMBOL ATAS (Tahun Mundur)
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            // Hanya aktif di kalender, bukan di notes (biar notes bisa discroll)
            if (typeof isNotesView !== 'undefined' && !isNotesView) {
                changeYearByKeyboard(-1);
            }
        }

        // TOMBOL BAWAH (Tahun Maju)
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (typeof isNotesView !== 'undefined' && !isNotesView) {
                changeYearByKeyboard(1);
            }
        }
    });
}

// Fungsi Helper Khusus Ganti Tahun via Keyboard
function changeYearByKeyboard(dir) {
    // Gunakan efek transisi 'zoom' sebentar agar terasa perpindahannya
    const originalTransition = settings.transitionType;
    if (settings.transitionType !== 'none') {
        // Trik visual: ganti transisi jadi zoom/fade sebentar
        settings.transitionType = 'fade';
    }

    // Ubah tahun
    currentDate.setFullYear(currentDate.getFullYear() + dir);
    renderCalendar();
    updateQuote();

    // Kembalikan setting transisi
    if (settings.transitionType !== 'none') {
        setTimeout(() => { settings.transitionType = originalTransition; }, 300);
    }
}

// --- SISTEM MONITORING ALARM (BARU) ---

let processedAlarms = new Set(); // Menyimpan ID alarm yang sudah bunyi agar tidak spam

function startAlarmSystem() {
    // Cek setiap 30 detik
    setInterval(() => {
        checkAlarms();
    }, 30000); 
}

function checkAlarms() {
    // 1. Cek Izin Notifikasi dulu
    if (Notification.permission !== 'granted') return;

    // 2. Ambil Waktu Sekarang
    const now = new Date();
    const currentH = String(now.getHours()).padStart(2, '0');
    const currentM = String(now.getMinutes()).padStart(2, '0');
    const currentTimeStr = `${currentH}:${currentM}`; // Format "14:30"
    
    // 3. Ambil Tanggal Hari Ini (Format YYYY-M-D sesuai key penyimpanan kita)
    // Note: getMonth() mulai dari 0, sedangkan key kita pakai 0-11 juga, tapi format tanggalnya d
    const todayKey = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
    
    // 4. Ambil Data Catatan
    const notes = getStoredNotes();
    const todaysNotes = notes[todayKey];

    if (!todaysNotes) return; // Tidak ada catatan hari ini

    // 5. Loop Catatan Hari Ini
    todaysNotes.forEach(note => {
        // Jika catatan punya waktu DAN waktunya sama dengan sekarang
        if (note.time && note.time === currentTimeStr) {
            
            // Generate ID unik untuk alarm ini (ID Note + Jam)
            const alarmId = `${note.id}-${currentTimeStr}`;

            // Cek apakah sudah pernah bunyi di sesi ini?
            if (!processedAlarms.has(alarmId)) {
                triggerAlarm(note);
                processedAlarms.add(alarmId); // Tandai sudah bunyi

                // Bersihkan memori processedAlarms agar tidak penuh (opsional, reset tiap jam)
                setTimeout(() => processedAlarms.delete(alarmId), 60000 * 2); 
            }
        }
    });
}

function triggerAlarm(note) {
    // Mainkan Notifikasi Visual
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(reg => {
            reg.showNotification(`?? Pengingat: ${note.text}`, {
                body: `Waktunya untuk agenda kategori: ${note.category.toUpperCase()}`,
                icon: "icons/icon_192.webp",
                vibrate: [500, 200, 500, 200, 500], // Getar panjang
                requireInteraction: true, // Notifikasi tidak hilang sampai diklik (Penting buat alarm)
                data: { url: '#calendar' } // Data payload
            });
        });
    } else {
        new Notification(`?? Pengingat: ${note.text}`, {
            body: `Waktunya untuk agenda kategori: ${note.category.toUpperCase()}`,
            icon: "icons/icon_192.webp"
        });
    }

    // OPSIONAL: Mainkan Suara (Hanya jalan jika user pernah interaksi dengan halaman)
    // const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
    // audio.play().catch(e => console.log("Audio autoplay diblokir browser, hanya notifikasi yang muncul."));
}

// --- 1. INISIALISASI APLIKASI ---
window.onload = init;

// --- 2. LOGIKA TOMBOL BACK (UNIVERSAL HANDLER) ---
// Fungsi ini akan dipanggil oleh Browser Back maupun Tombol Fisik Android
function handleGlobalBack() {
    const modal = document.getElementById('selectorModal');

    // CEK 1: Apakah Modal Terbuka?
    if (modal && modal.classList.contains('active')) {
        // Tutup modal (tanpa mengubah history lagi, karena trigger datang dari back)
        // Kita panggil fungsi close manual tapi set parameter true agar tidak double back
        closeModal(true);
        return true; // Berhasil handle back
    }

    // CEK 2: Apakah sedang di tampilan Catatanku (Notes)?
    if (typeof isNotesView !== 'undefined' && isNotesView) {
        // Kembali ke Kalender
        toggleNotesView(true);
        return true; // Berhasil handle back
    }

    // CEK 3: Sudah di Home/Calendar?
    return false; // Tidak ada yang di-handle, biarkan sistem yang memproses (Exit)
}

// --- 3. HANDLER UNTUK BROWSER / WEBVIEW BIASA ---
// Menangani navigasi history (misal user swipe back di browser)
window.onpopstate = function (event) {
    // Kita coba handle logic UI
    const handled = handleGlobalBack();

    // Jika logic UI tidak menangkap apa-apa (artinya kita di home),
    // dan user menekan back, browser otomatis akan mundur history.
    // Kita pastikan state konsisten.
    if (!handled) {
        // Jika history habis, biasanya browser diam atau keluar.
        // Kita pastikan kembali ke hash #calendar jika tersesat
        if (location.hash !== '#calendar' && location.hash !== '') {
            history.replaceState({ view: 'calendar' }, '', '#calendar');
        }
    }
};

// --- 4. HANDLER KHUSUS ANDROID (CAPACITOR / HYBRID) ---
// Kode ini hanya jalan jika aplikasi dibungkus menggunakan Capacitor
document.addEventListener('DOMContentLoaded', function () {
    if (window.Capacitor) {
        const App = Capacitor.Plugins.App;

        App.addListener('backButton', ({ canGoBack }) => {
            // Panggil logika manual kita
            // "Manual Check" karena tombol fisik Android tidak selalu memicu onpopstate
            const modal = document.getElementById('selectorModal');
            const isOnNotes = (typeof isNotesView !== 'undefined' && isNotesView);

            if ((modal && modal.classList.contains('active')) || isOnNotes) {
                // Jika ada modal atau di notes, kita manipulasi history secara manual
                // agar sinkron dengan browser history stack
                history.back();
            } else {
                // Jika sudah di Halaman Utama (Calendar) & Tidak ada modal
                App.exitApp();
            }
        });
    }
    // OPSIONAL: Jika kamu pakai WebView Android Studio Murni (tanpa Capacitor)
    // Kamu perlu inject JavaScript Interface, tapi biasanya onpopstate di atas sudah cukup
    // jika Android Overridenya benar.
});

// --- SISTEM INSTALL PWA (SILENT MODE) ---

let deferredPrompt; // Variabel penyimpan event install
const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
const iosModal = document.getElementById('iosInstallModal');

// 1. Event Listener Chrome/Android (Simpan event, jangan munculkan banner)
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e; // Simpan event ke variabel global
    // Kita tidak memanggil UI apa-apa di sini (Silent)
    // TAMBAHKAN INI: Update sidebar segera setelah browser siap install
    updateDesktopSidebarUI();
});

// 2. Fungsi Eksekusi Install (Dipanggil dari Tombol Settings)
function triggerInstallFromSettings() {
    if (isStandalone) {
        alert('Aplikasi sudah terinstall.');
        return;
    }

    if (isIOS) {
        // Khusus iOS: Buka Modal Panduan
        if(iosModal) {
            iosModal.classList.remove('hidden');
            iosModal.classList.add('flex');
            // Tutup modal settings biar fokus ke panduan
            closeModal();
        }
    } else if (deferredPrompt) {
        // Android/PC: Panggil Prompt Asli
        deferredPrompt.prompt();
        
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User menerima instalasi');
                deferredPrompt = null;
                openSettings(); // Refresh halaman settings
            }
        });
    } else {
        // Fallback jika browser tidak support PWA otomatis
        alert('Untuk menginstall: Buka menu browser (titik tiga) > Pilih "Install App" atau "Add to Home Screen".');
    }
}

// 3. Fungsi Tutup Modal iOS
function closeIosModal() {
    if(iosModal) {
        iosModal.classList.remove('flex');
        iosModal.classList.add('hidden');
    }
}

// --- FUNGSI UPDATE UI SIDEBAR DESKTOP ---
function updateDesktopSidebarUI() {
    const installContainer = document.getElementById('desktopInstallContainer');
    if (!installContainer) return;

    // 1. Logika Deteksi Status Instalasi
    // isStandalone sudah kita definisikan di bagian atas main.js
    if (isStandalone) {
        // TAMPILAN JIKA SUDAH TERPASANG (Persis mobile)
        installContainer.classList.remove('hidden');
        installContainer.innerHTML = `
            <p class="text-xs font-bold opacity-50 uppercase tracking-widest mb-1">Aplikasi</p>
            <div class="bg-emerald-500/20 border border-emerald-500/30 rounded-xl p-3 flex items-center gap-3">
                <div class="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-sm flex-shrink-0">
                    <i class="fas fa-check text-xs"></i>
                </div>
                <div class="flex flex-col overflow-hidden">
                    <span class="font-bold text-[0.7rem] text-emerald-200">Aplikasi Terpasang</span>
                    <span class="text-[0.55rem] text-emerald-300/80 uppercase tracking-tighter">Versi PWA Aktif</span>
                </div>
            </div>`;
    } else if (deferredPrompt) {
        // TAMPILAN TOMBOL INSTALL (Hanya jika belum install & browser siap)
        installContainer.classList.remove('hidden');
        installContainer.innerHTML = `
            <p class="text-xs font-bold opacity-50 uppercase tracking-widest mb-1">Aplikasi</p>
            <button onclick="triggerInstallFromSettings()" class="w-full bg-white text-slate-900 hover:bg-slate-100 transition p-3 rounded-xl flex items-center justify-center gap-2 font-bold text-[0.7rem] shadow-lg group">
                <i class="fas fa-download group-hover:scale-110 transition-transform"></i> INSTALL APP
            </button>`;
    } else {
        // SEMBUNYIKAN jika tidak support atau sedang di browser biasa tanpa prompt
        installContainer.classList.add('hidden');
    }

    // 2. Update Status Notifikasi (Tetap seperti sebelumnya)
    const statusEl = document.getElementById('desktopNotifStatus');
    const btnEl = document.getElementById('desktopNotifBtn');
    
    if (statusEl && btnEl) {
        if (Notification.permission === 'granted') {
            statusEl.textContent = "AKTIF ?";
            statusEl.className = "text-[0.6rem] font-bold uppercase tracking-wider text-emerald-300";
            btnEl.textContent = "TES BUNYI ALARM";
            btnEl.className = "w-full py-2 rounded-lg text-[0.7rem] font-bold bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 hover:bg-emerald-500/30 transition";
        } else if (Notification.permission === 'denied') {
            statusEl.textContent = "DIBLOKIR ?";
            statusEl.className = "text-[0.6rem] font-bold uppercase tracking-wider text-red-300";
            btnEl.textContent = "CARA BUKA BLOKIR";
            btnEl.className = "w-full py-2 rounded-lg text-[0.7rem] font-bold bg-red-500/20 text-red-200 border border-red-500/30 hover:bg-red-500/30 transition";
        } else {
            statusEl.textContent = "BELUM AKTIF";
            btnEl.textContent = "AKTIFKAN SEKARANG";
        }
    }
}

// --- FUNGSI RENDER TAMPILAN SIDEBAR DESKTOP ---
function renderDesktopSidebar() {
    const container = document.getElementById('desktopAuthContainer');
    if (!container) return;

    if (!currentUser) {
        // === TAMPILAN GUEST (TOMBOL BESAR BIRU) ===
        container.innerHTML = `
            <button onclick="toggleGoogleAuth()" class="w-full bg-blue-600 hover:bg-blue-700 text-white transition p-3 rounded-xl flex items-center justify-center gap-2 font-bold text-sm shadow-md group">
                <i class="fab fa-google text-white group-hover:scale-110 transition-transform"></i>
                <span>LOGIN GOOGLE</span>
            </button>
        `;
    } else {
        // === TAMPILAN LOGGED IN (STATUS + LOGOUT KECIL) ===
        const namaUser = currentUser.displayName.split(' ')[0];
        
        container.innerHTML = `
            <div class="flex flex-col gap-2">
                <div id="desktopSyncBadge" class="w-full bg-emerald-50 border border-emerald-100 p-2.5 rounded-xl flex items-center justify-center gap-2 shadow-sm">
                     <span id="syncStatusText" class="text-[0.65rem] font-bold text-emerald-600 uppercase tracking-widest flex items-center">
                        <i class="fas fa-check-circle mr-1.5"></i>TERSIMPAN
                    </span>
                </div>

                <div class="flex justify-between items-center px-1">
                    <span class="text-[0.6rem] text-slate-400 italic">Halo, <b>${namaUser}</b></span>
                    <button onclick="toggleGoogleAuth()" class="text-[0.65rem] font-bold text-red-500 hover:text-red-700 hover:bg-red-50 px-2 py-1 rounded transition border border-transparent hover:border-red-100">
                        <i class="fas fa-sign-out-alt mr-1"></i>Logout
                    </button>
                </div>
            </div>
        `;
    }
}

// --- LOGIKA LOGIN GOOGLE (Vibe Coding) ---

// Variable untuk mencegah klik ganda
let isAuthProcessing = false;

async function toggleGoogleAuth() {
    // Cek apakah Firebase Auth sudah siap
    if (!window.fbAuth) {
        alert("Sistem sedang memuat... Coba sesaat lagi.");
        return;
    }

    const { auth, signInGoogle, signOutGoogle } = window.fbAuth;
    
    // Cek apakah tombol sedang dikunci (loading)
    if (isAuthProcessing) return;
    isAuthProcessing = true; // Kunci tombol

    if (!auth.currentUser) {
        // === KONDISI: BELUM LOGIN -> LAKUKAN LOGIN ===
        try {
            // Opsional: Ubah teks tombol jadi "Loading..."
            const btnDesktop = document.getElementById('btnLoginGoogleDesktop');
            if(btnDesktop) btnDesktop.style.opacity = "0.5";
            
            await signInGoogle();
            // Sukses! Listener onAuthStateChanged akan menangani perubahan UI
        } catch (error) {
            console.error("Login gagal:", error);
            if (error.code !== 'auth/popup-closed-by-user') {
                alert("Gagal Login: " + error.message);
            }
        } finally {
             // Buka kunci tombol (baik sukses maupun gagal)
            isAuthProcessing = false;
            const btnDesktop = document.getElementById('btnLoginGoogleDesktop');
            if(btnDesktop) btnDesktop.style.opacity = "1";
        }
    } else {
        // === KONDISI: SUDAH LOGIN -> LAKUKAN LOGOUT ===
        if (confirm("Yakin ingin logout dari Google? Sinkronisasi akan berhenti.")) {
            try {
                await signOutGoogle();
                console.log("Berhasil Logout");
                // Sukses! Listener onAuthStateChanged akan otomatis mereset UI
            } catch (error) {
                console.error("Logout error:", error);
                alert("Gagal Logout. Coba refresh halaman.");
            } finally {
                isAuthProcessing = false;
            }
        } else {
            // Jika user klik Cancel pada confirm dialog
            isAuthProcessing = false;
        }
    }
}

// --- MATA-MATA STATUS LOGIN (OBSERVER) ---
const initAuthListener = setInterval(() => {
    if (window.fbAuth) {
        clearInterval(initAuthListener);

        // Fungsi ini akan jalan OTOMATIS setiap kali Login atau Logout terjadi
        window.fbAuth.onAuthStateChanged((user) => {
            
            // Elemen Desktop
            const btnLoginDesktop = document.getElementById('btnLoginGoogleDesktop');
            const panelUserDesktop = document.getElementById('loggedInUserDesktop');
            const txtUserDesktop = document.getElementById('desktopUserName');
            
            // Elemen Mobile (Modal Settings)
            const btnMobile = document.getElementById('mobileLoginBtn'); 
            const statusContainerMobile = document.getElementById('syncStatusContainer');

            if (user) {
                // ===========================
                // JIKA BERHASIL LOGIN (USER ADA)
                // ===========================
                currentUser = user;
                const nama = user.displayName ? user.displayName.split(' ')[0] : 'User';

                // 1. Desktop: Sembunyikan Tombol Login, Munculkan Panel User
                if (btnLoginDesktop) btnLoginDesktop.classList.add('hidden');
                if (panelUserDesktop) {
                    panelUserDesktop.classList.remove('hidden');
                    panelUserDesktop.classList.add('flex');
                }
                if (txtUserDesktop) txtUserDesktop.innerHTML = `Login sebagai <b>${nama}</b>`;

                // 2. Mobile: Ubah Tombol jadi Merah (Logout)
                if(btnMobile) {
                    btnMobile.innerHTML = `<i class="fas fa-sign-out-alt"></i> <span>LOGOUT (${nama})</span>`;
                    btnMobile.className = "w-full bg-red-600 text-white hover:bg-red-700 p-3 rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition active:scale-95";
                    // Update fungsi onclick mobile agar memanggil toggleGoogleAuth juga
                    btnMobile.onclick = toggleGoogleAuth; 
                }
                if(statusContainerMobile) statusContainerMobile.classList.remove('hidden');

                // 3. Simpan snapshot user agar UI bisa direstore cepat saat reload
                try {
                    localStorage.setItem('rhadzAuthUserSnapshot', JSON.stringify({
                        uid: user.uid,
                        name: nama,
                        email: user.email || ''
                    }));
                } catch (e) { /* ignore */ }

                // 4. Tarik Data Cloud
                loadFromCloud();
                
            } else {
                // ===========================
                // JIKA BERHASIL LOGOUT (USER NULL)
                // ===========================
                currentUser = null;
                localStorage.removeItem('rhadzAuthUserSnapshot');
                console.log("Status: Guest (Belum Login)");

                // 1. Desktop: Sembunyikan Panel User, Munculkan Tombol Login Putih
                if (panelUserDesktop) {
                    panelUserDesktop.classList.add('hidden');
                    panelUserDesktop.classList.remove('flex');
                }
                if (btnLoginDesktop) btnLoginDesktop.classList.remove('hidden');

                // 2. Mobile: Ubah Tombol jadi Putih (Login)
                if(btnMobile) {
                    btnMobile.innerHTML = `<i class="fab fa-google"></i> <span>LOGIN GOOGLE</span>`;
                    btnMobile.className = "w-full bg-white text-slate-900 border border-slate-200 p-3 rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition active:scale-95";
                    btnMobile.onclick = toggleGoogleAuth;
                }
                if(statusContainerMobile) statusContainerMobile.classList.add('hidden');
            }
        });
        
        console.log("Sistem Auth Siap!");
    }
}, 500);

// ==========================================
// ?? SISTEM SINKRONISASI CLOUD (UPDATE UI) ??
// ==========================================

let latestCloudSaveRequest = 0;

// Helper: Mengubah Tampilan di Desktop & Mobile Bersamaan
function updateSyncUI(status) {
    // Definisi elemen Desktop
    const desktopStatusText = document.getElementById('desktopSyncStatusText');
    const desktopBadge = document.getElementById('desktopSyncBadge');
    
    // Definisi elemen Mobile
    const mobileStatus = document.getElementById('mobileSyncStatusText');
    const mobileContainer = document.getElementById('mobileSyncContainer');

    let htmlContent = "";
    
    // Class CSS untuk Desktop (Status Badge)
    let dClassAdd = ""; 
    let dClassRemove = "";

    // Tentukan Tampilan Berdasarkan Status
    if (status === 'loading') {
        htmlContent = '<i class="fas fa-spinner fa-spin mr-2"></i>MENYIMPAN...';
        // Style: Biru Transparan
        dClassAdd = "bg-blue-500/20 border-blue-400/30 text-blue-200";
        dClassRemove = "bg-emerald-500/20 border-emerald-400/30 text-emerald-100 bg-red-500/20 border-red-400/30 text-red-200 bg-slate-800 text-slate-400";
    
    } else if (status === 'success') {
        htmlContent = '<i class="fas fa-check-circle mr-2"></i>TERSIMPAN DI GOOGLE';
        // Style: Hijau Transparan (Seperti request awal)
        dClassAdd = "bg-emerald-500/20 border-emerald-400/30 text-emerald-100";
        dClassRemove = "bg-blue-500/20 border-blue-400/30 text-blue-200 bg-red-500/20 border-red-400/30 text-red-200 bg-slate-800 text-slate-400";
    
    } else if (status === 'error') {
        htmlContent = '<i class="fas fa-exclamation-triangle mr-2"></i>GAGAL SIMPAN';
        // Style: Merah Transparan
        dClassAdd = "bg-red-500/20 border-red-400/30 text-red-200";
        dClassRemove = "bg-emerald-500/20 border-emerald-400/30 text-emerald-100 bg-blue-500/20 border-blue-400/30 text-blue-200 bg-slate-800 text-slate-400";
    }

    // Terapkan ke Desktop
    if (desktopStatusText && desktopBadge) {
        desktopStatusText.innerHTML = htmlContent;
        
        // Bersihkan class lama
        const removeList = dClassRemove.split(' ');
        desktopBadge.classList.remove(...removeList);
        
        // Tambah class baru
        const addList = dClassAdd.split(' ');
        desktopBadge.classList.add(...addList);
    }

    // Terapkan ke Mobile (Agar tetap konsisten jika user membuka settings di HP)
    if (mobileStatus) {
        mobileStatus.innerHTML = htmlContent;
        if(mobileContainer) {
             // Logic mobile tetap pakai background terang (slate-50/emerald-50)
             if (status === 'success') {
                 mobileContainer.className = "w-full border rounded-xl p-3 flex items-center justify-center transition-all duration-300 bg-emerald-50 border-emerald-100 text-emerald-600";
             } else {
                 mobileContainer.className = "w-full border rounded-xl p-3 flex items-center justify-center transition-all duration-300 bg-slate-50 border-slate-200 text-slate-500";
             }
        }
    }
}

// 2. Fungsi Simpan (Updated)
async function saveToCloud() {
    if (!currentUser) return;

    const requestId = ++latestCloudSaveRequest;

    // A. Ubah Status jadi "Menyimpan..."
    updateSyncUI('loading');

    const { db, doc, setDoc } = window.fbDB;

    try {
        // Proses Upload (Jeda sedikit agar animasi terlihat user)
        await new Promise(r => setTimeout(r, 350));

        // Jika ada request save yang lebih baru, batalkan request ini.
        if (requestId !== latestCloudSaveRequest) return;

        // Ambil snapshot TERBARU agar tidak menulis nilai setting lama.
        const notesData = getStoredNotes();
        const birthdaysData = getStoredBirthdays();
        const settingsData = JSON.parse(localStorage.getItem('rhadzCalSettings')) || {};

        await setDoc(doc(db, "users", currentUser.uid), {
            notes: notesData,
            birthdays: birthdaysData,
            settings: settingsData,
            themeIndex: localStorage.getItem('rhadzThemeIndex'),
            lastUpdated: new Date().toISOString()
        });

        if (requestId !== latestCloudSaveRequest) return;

        // B. Ubah Status jadi "Sukses"
        updateSyncUI('success');
        console.log("Auto-save sukses!");

    } catch (error) {
        console.error("Gagal simpan:", error);
        updateSyncUI('error');
    }
}

// 3. Fungsi Load (Updated)
async function loadFromCloud() {
    if (!currentUser) return;
    
    // Tampilkan status loading awal
    updateSyncUI('loading');

    const { db, doc, getDoc } = window.fbDB;
    try {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            if (data.notes) {
                localStorage.setItem('rhadzCalNotes', JSON.stringify(data.notes));
            }
            if (data.birthdays) {
                localStorage.setItem('rhadzCalBirthdays', JSON.stringify(data.birthdays));
            }
            if (data.settings) {
                localStorage.setItem('rhadzCalSettings', JSON.stringify(data.settings));
                Object.assign(settings, data.settings);
                syncSettingsUI();
                updateDarkModeVisuals();
            }
            if (data.themeIndex !== undefined && data.themeIndex !== null) {
                const parsedThemeIndex = parseInt(data.themeIndex, 10);
                if (!Number.isNaN(parsedThemeIndex)) {
                    applyTheme(parsedThemeIndex, false);
                }
            }
            restorePanelStates(); // Pastikan state panel tetap sinkron setelah load cloud
            renderCalendar();
            renderNotesList();
            
            // Berhasil load
            updateSyncUI('success');
        } else {
            // User baru, simpan data lokal ke cloud
            saveToCloud();
        }
    } catch (error) {
        console.error("Gagal load:", error);
        updateSyncUI('error');
    }
}






