"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ThemedMark, ThemedWordmark } from "@/components/theme-toggle";

export function AboutClient() {
  const shellRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(false);

  useEffect(() => {
    const shell = shellRef.current;

    if (!shell) {
      return;
    }

    const syncNav = () => {
      const heroWordmark = shell.querySelector("[data-about-hero-wordmark]");
      const wordmarkBox = heroWordmark?.getBoundingClientRect();

      setIsScrolled(shell.scrollTop > 32);
      setIsLogoVisible(Boolean(wordmarkBox && wordmarkBox.bottom <= 0));
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
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-8 border-b px-5 py-4 transition duration-300 sm:px-10 lg:px-14 ${
          isScrolled
            ? "border-[var(--qurai-border)] bg-[color-mix(in_srgb,var(--qurai-bg)_84%,transparent)] backdrop-blur-[18px]"
            : "border-transparent"
        }`}
      >
        <Link
          href="#"
          aria-label="Qurai"
          className={`relative block h-[36px] w-[clamp(104px,12vw,150px)] transition duration-300 ${
            isLogoVisible
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <ThemedWordmark sizes="150px" className="object-contain object-left" />
        </Link>
        <div className="hidden items-center gap-[clamp(1.2rem,3vw,2.5rem)] font-mono text-[0.7rem] uppercase text-[var(--qurai-quiet)] sm:flex">
          <a href="#tentang" className="transition hover:text-[var(--qurai-green)]">
            Tentang
          </a>
          <Link href="/" className="transition hover:text-[var(--qurai-green)]">
            Bedah Quran
          </Link>
          <Link href="/artikel" className="transition hover:text-[var(--qurai-green)]">
            Artikel
          </Link>
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
          <div className="mt-12 flex w-full flex-wrap gap-3 font-mono text-xs uppercase sm:w-auto">
            <Link
              href="/"
              className="inline-flex min-h-12 w-full items-center justify-center border border-[var(--qurai-border-strong)] bg-[color-mix(in_srgb,var(--qurai-green)_11%,transparent)] px-5 text-[var(--qurai-text)] transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--qurai-green)_18%,transparent)] sm:w-auto"
            >
              Bedah Quran
            </Link>
            <Link
              href="/artikel"
              className="inline-flex min-h-12 w-full items-center justify-center border border-[color-mix(in_srgb,var(--qurai-gold)_24%,transparent)] bg-[color-mix(in_srgb,var(--qurai-gold)_8%,transparent)] px-5 text-[var(--qurai-muted)] transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--qurai-gold)_14%,transparent)] hover:text-[var(--qurai-text)] sm:w-auto"
            >
              Ruang Analisis
            </Link>
          </div>
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
              Di sini tersedia dua jalan masuk:{" "}
              <strong className="font-medium text-[var(--qurai-text)]">
                arsip cepat
              </strong>{" "}
              untuk membaca ayat demi ayat secara kritis, dan{" "}
              <strong className="font-medium text-[var(--qurai-text)]">
                ruang analisis
              </strong>{" "}
              untuk menguji klaim, riwayat, dan logika internal sebuah topik.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto flex min-h-screen w-[min(1120px,calc(100%_-_1.4rem))] snap-start snap-always items-center border-t border-[var(--qurai-border)] py-24 sm:w-[min(1120px,calc(100%_-_2rem))] sm:py-28">
        <div className="grid w-full items-center gap-8 md:grid-cols-[170px_minmax(0,1fr)] md:gap-12 lg:gap-20">
          <div className="self-start font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)] md:sticky md:top-24">
            Jalur
          </div>
          <div className="grid border border-[var(--qurai-border)] bg-[var(--qurai-border)] md:grid-cols-2">
            <Link
              href="/"
              className="min-h-[280px] bg-[var(--qurai-surface)] p-6 transition hover:bg-[color-mix(in_srgb,var(--qurai-green)_12%,var(--qurai-surface))] sm:p-9"
            >
              <span className="font-mono text-[0.6rem] uppercase text-[var(--qurai-green)]">
                01 / Bedah Quran
              </span>
              <h2 className="font-serif-reading mt-10 text-[2.35rem] italic leading-none text-[var(--qurai-text)] sm:text-5xl">
                Ayat per Ayat
              </h2>
              <p className="mt-5 max-w-[32ch] text-sm font-light leading-8 text-[var(--qurai-muted)]">
                Telusuri surat dan ayat secara kritis: tafsir, konteks, dan
                pertanyaan yang jarang diajukan.
              </p>
            </Link>
            <Link
              href="/artikel"
              className="min-h-[280px] bg-[var(--qurai-surface)] p-6 transition hover:bg-[color-mix(in_srgb,var(--qurai-gold)_12%,var(--qurai-surface))] sm:p-9"
            >
              <span className="font-mono text-[0.6rem] uppercase text-[var(--qurai-gold)]">
                02 / Artikel
              </span>
              <h2 className="font-serif-reading mt-10 text-[2.35rem] italic leading-none text-[var(--qurai-text)] sm:text-5xl">
                Ruang Analisis
              </h2>
              <p className="mt-5 max-w-[32ch] text-sm font-light leading-8 text-[var(--qurai-muted)]">
                Esai yang menguji klaim, riwayat, dan logika internal sebuah
                topik sampai titik paling terang yang bisa dicapai.
              </p>
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
