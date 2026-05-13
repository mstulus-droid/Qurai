"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ThemedMark, ThemedWordmark, ThemeToggle } from "@/components/theme-toggle";

function AboutMenu() {
  return (
    <details className="home-menu relative">
      <summary
        className="home-menu-trigger inline-grid h-10 w-10 cursor-pointer list-none place-items-center rounded-full border border-[var(--qurai-border)] bg-[color-mix(in_srgb,var(--qurai-surface-strong)_82%,transparent)] text-[var(--qurai-text)] shadow-[0_16px_38px_-28px_rgba(0,0,0,0.55)] transition hover:border-[var(--qurai-border-strong)] hover:text-[var(--qurai-green)]"
        aria-label="Buka menu"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M5 7h14M5 12h14M5 17h14"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
        </svg>
      </summary>
      <div className="absolute right-0 top-12 z-30 min-w-40 overflow-hidden rounded-xl border border-[var(--qurai-border)] bg-[color-mix(in_srgb,var(--qurai-surface)_94%,transparent)] p-1 shadow-[0_24px_70px_-34px_rgba(0,0,0,0.72)] backdrop-blur">
        <Link
          href="/"
          className="block rounded-lg px-3 py-2 text-sm font-medium text-[var(--qurai-text)] transition hover:bg-[color-mix(in_srgb,var(--qurai-green)_12%,transparent)] hover:text-[var(--qurai-green)]"
        >
          Bedah Quran
        </Link>
        <Link
          href="/bedah-surat"
          className="block rounded-lg px-3 py-2 text-sm font-medium text-[var(--qurai-text)] transition hover:bg-[color-mix(in_srgb,var(--qurai-green)_12%,transparent)] hover:text-[var(--qurai-green)]"
        >
          Bedah Surat
        </Link>
        <Link
          href="/artikel"
          className="block rounded-lg px-3 py-2 text-sm font-medium text-[var(--qurai-text)] transition hover:bg-[color-mix(in_srgb,var(--qurai-green)_12%,transparent)] hover:text-[var(--qurai-green)]"
        >
          Artikel
        </Link>
      </div>
    </details>
  );
}

export function AboutClient() {
  const shellRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const shell = shellRef.current;

    if (!shell) {
      return;
    }

    const syncNav = () => {
      setIsScrolled(shell.scrollTop > 32);
    };

    syncNav();
    shell.addEventListener("scroll", syncNav, { passive: true });
    window.addEventListener("resize", syncNav);

    return () => {
      shell.removeEventListener("scroll", syncNav);
      window.removeEventListener("resize", syncNav);
    };
  }, []);

  return (
    <main ref={shellRef} className="qurai-page h-screen snap-y snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth">
      <nav
        aria-label="Navigasi utama"
        className={`fixed inset-x-0 top-0 z-50 border-b px-4 py-5 transition duration-300 sm:px-6 sm:py-8 lg:px-10 ${
          isScrolled
            ? "border-[var(--qurai-border)] bg-[color-mix(in_srgb,var(--qurai-bg)_84%,transparent)] backdrop-blur-[18px]"
            : "border-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
          <div
            className="h-[36px] w-[clamp(104px,12vw,150px)]"
            aria-hidden
          />
          <div className="flex items-center gap-4 sm:gap-[clamp(1.2rem,3vw,2.5rem)]">
            <div className="hidden items-center gap-[clamp(1.2rem,3vw,2.5rem)] font-mono text-[0.7rem] uppercase text-[var(--qurai-quiet)] sm:flex">
              <Link href="/" className="transition hover:text-[var(--qurai-gold)]">
                Bedah Quran
              </Link>
              <Link href="/bedah-surat" className="transition hover:text-[var(--qurai-gold)]">
                Bedah Surat
              </Link>
              <Link href="/artikel" className="transition hover:text-[var(--qurai-gold)]">
                Artikel
              </Link>
            </div>
            <div className="sm:hidden">
              <AboutMenu />
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <section className="mx-auto flex min-h-screen w-[min(1120px,calc(100%_-_1.4rem))] snap-start snap-always items-center px-0 pb-12 pt-28 sm:w-[min(1120px,calc(100%_-_2rem))] sm:pb-20">
        <div className="flex w-[min(760px,100%)] flex-col items-start">
          <h1 className="sr-only">Qurai</h1>
          <div
            data-about-hero-wordmark
            className="relative h-[92px] w-[min(690px,100%)] drop-shadow-[0_24px_58px_rgba(46,176,62,0.16)] sm:h-[140px]"
          >
            <ThemedWordmark
              priority
              sizes="(max-width: 640px) 100vw, 690px"
              className="object-contain object-left"
            />
          </div>
          <p className="font-serif-reading mt-10 max-w-[62ch] text-[1.18rem] italic leading-[1.48] text-[var(--qurai-muted)] sm:whitespace-nowrap sm:text-[1.34rem]">
            Tidak terlihat bukan karena gelap,
            <br className="sm:hidden" /> tapi karena{" "}
            <strong className="font-medium not-italic text-[var(--qurai-text)]">
              tidak mau melihat.
            </strong>
          </p>
        </div>
      </section>

      <section
        id="tentang"
        className="mx-auto flex min-h-screen w-[min(1120px,calc(100%_-_1.4rem))] snap-start snap-always items-center border-t border-[var(--qurai-border)] py-24 sm:w-[min(1120px,calc(100%_-_2rem))] sm:py-28"
      >
        <div className="grid w-full items-center gap-8 md:grid-cols-[170px_minmax(0,1fr)] md:gap-12 lg:gap-20">
          <div className="self-start font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)] md:sticky md:top-24">
            Tentang
          </div>
          <div className="font-serif-reading max-w-[760px] space-y-6 text-[1.12rem] leading-[1.9] text-[var(--qurai-muted)] sm:text-[1.28rem]">
            <p>
              Qurai adalah ruang baca untuk mereka yang{" "}
              <strong className="font-medium text-[var(--qurai-text)]">
                tidak puas berhenti di permukaan teks
              </strong>
              . Bukan tempat untuk menyerang, bukan pula tempat untuk membela,
              melainkan tempat untuk melihat dengan lebih teliti apa yang selama
              ini berada di zona antara.
            </p>
            <p>
              Antara tafsir resmi dan pertanyaan yang tidak pernah dijawab.
              Antara keyakinan dan kenyataan. Antara yang diucapkan dan yang
              tidak.
            </p>
            <p>
              Di sini tersedia tiga jalan masuk:{" "}
              <strong className="font-medium text-[var(--qurai-text)]">
                bedah ayat
              </strong>{" "}
              untuk membaca Quran secara langsung,{" "}
              <strong className="font-medium text-[var(--qurai-text)]">
                bedah surat
              </strong>{" "}
              untuk mengikuti satu surat sebagai satu bangunan gagasan, dan{" "}
              <strong className="font-medium text-[var(--qurai-text)]">
                ruang analisis
              </strong>{" "}
              untuk menguji klaim, riwayat, dan logika internal sebuah topik.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto flex min-h-screen w-[min(1120px,calc(100%_-_1.4rem))] snap-start snap-always items-center border-t border-[var(--qurai-border)] py-16 sm:w-[min(1120px,calc(100%_-_2rem))] sm:py-24">
        <div className="grid w-full items-center gap-6 md:grid-cols-[150px_minmax(0,1fr)] md:gap-10 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-14">
          <div className="self-start font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)] md:sticky md:top-24">
            Jalur
          </div>
          <div className="grid gap-[1px] border border-[var(--qurai-border)] bg-[var(--qurai-border)] lg:grid-cols-3">
            <Link
              href="/"
              className="group grid min-h-[132px] grid-cols-[3rem_minmax(0,1fr)] gap-4 bg-[var(--qurai-surface)] p-5 transition hover:bg-[color-mix(in_srgb,var(--qurai-green)_12%,var(--qurai-surface))] sm:min-h-[172px] sm:grid-cols-1 sm:p-7 lg:min-h-[340px] lg:p-8"
            >
              <span className="font-serif-reading text-[2.15rem] italic leading-none text-[var(--qurai-green)] sm:text-[2.6rem] lg:text-[3.6rem]">
                01
              </span>
              <div className="min-w-0 sm:flex sm:min-h-[112px] sm:flex-col lg:min-h-[250px]">
                <p className="font-mono text-[0.56rem] uppercase text-[var(--qurai-green)]">
                  Bedah Quran
                </p>
                <h2 className="font-serif-reading mt-2 text-[1.72rem] italic leading-none text-[var(--qurai-text)] sm:mt-5 sm:text-[2.35rem] lg:mt-10 lg:text-[2.75rem]">
                  Ayat per Ayat
                </h2>
                <p className="mt-3 text-[0.82rem] font-light leading-6 text-[var(--qurai-muted)] sm:mt-auto sm:max-w-[30ch] sm:text-sm sm:leading-7">
                  Telusuri surat dan ayat secara kritis: tafsir, konteks, dan
                  pertanyaan yang jarang diajukan.
                </p>
              </div>
            </Link>
            <Link
              href="/bedah-surat"
              className="group grid min-h-[132px] grid-cols-[3rem_minmax(0,1fr)] gap-4 bg-[var(--qurai-surface)] p-5 transition hover:bg-[color-mix(in_srgb,var(--qurai-gold)_12%,var(--qurai-surface))] sm:min-h-[172px] sm:grid-cols-1 sm:p-7 lg:min-h-[340px] lg:p-8"
            >
              <span className="font-serif-reading text-[2.15rem] italic leading-none text-[var(--qurai-gold)] sm:text-[2.6rem] lg:text-[3.6rem]">
                02
              </span>
              <div className="min-w-0 sm:flex sm:min-h-[112px] sm:flex-col lg:min-h-[250px]">
                <p className="font-mono text-[0.56rem] uppercase text-[var(--qurai-gold)]">
                  Bedah Surat
                </p>
                <h2 className="font-serif-reading mt-2 text-[1.72rem] italic leading-none text-[var(--qurai-text)] sm:mt-5 sm:text-[2.35rem] lg:mt-10 lg:text-[2.75rem]">
                  Satu Surat Utuh
                </h2>
                <p className="mt-3 text-[0.82rem] font-light leading-6 text-[var(--qurai-muted)] sm:mt-auto sm:max-w-[30ch] sm:text-sm sm:leading-7">
                  Ikuti isi, pola, dan kemungkinan konteks turunnya satu surat
                  sebagai bangunan gagasan.
                </p>
              </div>
            </Link>
            <Link
              href="/artikel"
              className="group grid min-h-[132px] grid-cols-[3rem_minmax(0,1fr)] gap-4 bg-[var(--qurai-surface)] p-5 transition hover:bg-[color-mix(in_srgb,var(--qurai-copper)_16%,var(--qurai-surface))] sm:min-h-[172px] sm:grid-cols-1 sm:p-7 lg:min-h-[340px] lg:p-8"
            >
              <span className="font-serif-reading text-[2.15rem] italic leading-none text-[var(--qurai-copper)] sm:text-[2.6rem] lg:text-[3.6rem]">
                03
              </span>
              <div className="min-w-0 sm:flex sm:min-h-[112px] sm:flex-col lg:min-h-[250px]">
                <p className="font-mono text-[0.56rem] uppercase text-[var(--qurai-copper)]">
                  Ruang Analisis
                </p>
                <h2 className="font-serif-reading mt-2 text-[1.72rem] italic leading-none text-[var(--qurai-text)] sm:mt-5 sm:text-[2.35rem] lg:mt-10 lg:text-[2.75rem]">
                  Esai Tematik
                </h2>
                <p className="mt-3 text-[0.82rem] font-light leading-6 text-[var(--qurai-muted)] sm:mt-auto sm:max-w-[30ch] sm:text-sm sm:leading-7">
                  Esai yang menguji klaim, riwayat, dan logika internal sebuah
                  topik sampai titik paling terang.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto flex min-h-screen w-[min(1120px,calc(100%_-_1.4rem))] snap-start snap-always items-center border-t border-[var(--qurai-border)] py-24 sm:w-[min(1120px,calc(100%_-_2rem))] sm:py-28">
        <div className="grid w-full items-center gap-8 md:grid-cols-[170px_minmax(0,1fr)] md:gap-12 lg:gap-20">
          <div className="self-start font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)] md:sticky md:top-24">
            Nama
          </div>
          <div className="grid grid-cols-[176px_minmax(0,1fr)] items-start gap-2 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-8">
            <div className="relative h-[176px] w-[176px] sm:h-[180px] sm:w-[180px]">
              <ThemedMark
                sizes="(max-width: 640px) 176px, 180px"
                className="-translate-y-7 scale-[1.16] object-contain object-top drop-shadow-[0_18px_40px_rgba(82,207,70,0.18)] sm:translate-y-0 sm:scale-100"
              />
            </div>
            <div className="-mt-1 sm:mt-0 sm:pt-0">
              <h2 className="font-serif-reading whitespace-nowrap text-[2.45rem] font-normal leading-none text-[var(--qurai-text)] sm:text-[4rem]">
                <span className="mr-2 text-[var(--qurai-quiet)]">+</span>
                <span className="italic text-[var(--qurai-green)]">urai</span>
              </h2>
              <p className="mt-5 max-w-[38ch] text-sm leading-8 text-[var(--qurai-muted)] sm:max-w-[62ch] sm:text-[0.95rem]">
                Quran sebagai objek kajian, urai sebagai cara kerja:
                membongkar benang yang kusut, mengikuti lapisan historis,
                linguistik, dan logisnya sampai pertanyaan menjadi lebih
                terang.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto flex min-h-screen w-[min(1120px,calc(100%_-_1.4rem))] snap-start snap-always items-center border-t border-[var(--qurai-border)] py-24 sm:w-[min(1120px,calc(100%_-_2rem))] sm:py-28">
        <div className="grid w-full items-center gap-8 md:grid-cols-[170px_minmax(0,1fr)] md:gap-12 lg:gap-20">
          <div className="self-start font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)] md:sticky md:top-24">
            Filosofi
          </div>
          <div>
            <blockquote className="font-serif-reading max-w-[820px] border-l-2 border-[var(--qurai-green)] pl-5 text-[1.68rem] italic leading-[1.48] text-[var(--qurai-text)] sm:pl-8 sm:text-[2.2rem]">
              Tidak terlihat bukan karena gelap,
              <br />
              tapi karena tidak mau melihat.
            </blockquote>
            <p className="mt-7 max-w-[720px] border-l border-[var(--qurai-border)] pl-5 text-sm leading-8 text-[var(--qurai-muted)] sm:pl-8">
              Ada zona dalam teks yang selama ini luput dari sorotan. Tidak
              masuk dalam khotbah Jumat, tidak muncul dalam tafsir populer,
              tidak diajukan dalam pengajian. Qurai adalah undangan untuk
              berdiri di zona itu cukup lama agar mata dan nalar sama-sama
              bekerja.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-5 font-mono text-[0.62rem] uppercase text-[var(--qurai-quiet)] sm:bottom-8">
          Bagian dari{" "}
          <Link
            href="https://rhadzor.id"
            className="text-[var(--qurai-muted)] transition hover:text-[var(--qurai-green)]"
          >
            rhadzor.id
          </Link>
        </div>
      </section>
    </main>
  );
}
