"use client";

import { useEffect, useRef, useState } from "react";

type TopicItem = {
  id: string;
  label: string;
  startAyah: number;
  endAyah: number;
};

type SurahTopicPanelProps = {
  topics: TopicItem[];
};

export function SurahTopicPanel({ topics }: SurahTopicPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (topics.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    topics.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [topics]);

  useEffect(() => {
    if (!isOpen || !activeId) return;
    const container = scrollContainerRef.current;
    if (!container) return;
    const activeBtn = container.querySelector<HTMLButtonElement>(`[data-topic-id="${activeId}"]`);
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isOpen, activeId]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  function scrollToTopic(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  }

  if (topics.length === 0) return null;

  return (
    <>
      {/* Floating trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="qurai-icon-button fixed right-3 top-1/2 z-40 -translate-y-1/2 rounded-full p-2 shadow-[0_8px_30px_rgba(16,185,129,0.15)] backdrop-blur"
        aria-label="Daftar topik"
        title="Daftar topik"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-none stroke-current stroke-2"
        >
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/35 backdrop-blur-[1px] transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isOpen}
      />

      {/* Panel */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[min(85vw,22rem)] border-l border-[var(--qurai-border)] bg-[color-mix(in_srgb,var(--qurai-bg-soft)_94%,transparent)] shadow-[0_0_60px_-20px_rgba(0,0,0,0.55)] backdrop-blur transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex h-full flex-col">
          <div className="border-b border-[var(--qurai-border)] px-5 py-4">
            <p className="qurai-label">
              Topik dalam Surat
            </p>
          </div>

          <div className="relative flex flex-1 overflow-hidden">
            {/* Close arrow on left edge of panel body */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-r-full border border-l-0 border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] p-2 text-[var(--qurai-green)] shadow-[0_4px_20px_rgba(16,185,129,0.15)] transition hover:bg-[color-mix(in_srgb,var(--qurai-green)_10%,transparent)]"
              aria-label="Tutup panel"
              title="Tutup panel"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-none stroke-current stroke-2"
              >
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div ref={scrollContainerRef} className="flex-1 overflow-y-auto px-3 py-3 pl-10">
              <div className="flex flex-col gap-2">
                {topics.map((topic) => {
                  const isActive = activeId === topic.id;
                  return (
                    <button
                      key={topic.id}
                      data-topic-id={topic.id}
                      type="button"
                      onClick={() => scrollToTopic(topic.id)}
                      className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                        isActive
                          ? "bg-[color-mix(in_srgb,var(--qurai-green)_14%,transparent)] text-[var(--qurai-green)] ring-1 ring-[var(--qurai-border-strong)]"
                          : "text-[var(--qurai-muted)] hover:bg-[color-mix(in_srgb,var(--qurai-green)_8%,transparent)]"
                      }`}
                    >
                      {topic.startAyah === topic.endAyah
                        ? `${topic.startAyah} : ${topic.label}`
                        : `${topic.startAyah}-${topic.endAyah} : ${topic.label}`}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
