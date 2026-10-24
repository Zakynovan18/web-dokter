"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { articles, type Article } from "@/data/articles";
import Reveal from "@/components/Reveal";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/artikel/${article.slug}`}
      className="group flex h-full flex-col rounded-card bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1"
    >
      <time className="text-xs font-semibold text-primary">
        {formatDate(article.date)}
      </time>
      <h3 className="mt-3 text-lg font-bold leading-snug text-navy">
        {article.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed">{article.excerpt}</p>
      <span className="mt-6 text-sm font-semibold text-primary">
        Baca selengkapnya →
      </span>
    </Link>
  );
}

export default function Articles() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(articles.length > 3);
  const hasMoreArticles = articles.length > 3;

  const updateScrollButtons = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    setCanScrollBack(carousel.scrollLeft > 1);
    setCanScrollForward(
      carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth - 1,
    );
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || !hasMoreArticles) return;

    const frame = requestAnimationFrame(updateScrollButtons);
    carousel.addEventListener("scroll", updateScrollButtons, { passive: true });
    const resizeObserver = new ResizeObserver(updateScrollButtons);
    resizeObserver.observe(carousel);

    return () => {
      cancelAnimationFrame(frame);
      carousel.removeEventListener("scroll", updateScrollButtons);
      resizeObserver.disconnect();
    };
  }, [hasMoreArticles, updateScrollButtons]);

  function scrollArticles(direction: -1 | 1) {
    const carousel = carouselRef.current;
    const firstCard = carousel?.firstElementChild;
    if (!carousel || !(firstCard instanceof HTMLElement)) return;

    const styles = window.getComputedStyle(carousel);
    const gap = Number.parseFloat(styles.columnGap) || 0;
    carousel.scrollBy({
      left: direction * (firstCard.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  }

  return (
    <section id="artikel">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            Artikel Edukasi
          </h2>
          <p className="mt-3 leading-relaxed">
            Informasi kesehatan untuk menambah wawasan keluarga.
          </p>
        </Reveal>

        {hasMoreArticles ? (
          <>
            <div className="mt-10 flex items-center justify-between gap-4">
              <p className="text-sm text-ink/75">
                Geser untuk membaca artikel lainnya
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Artikel sebelumnya"
                  onClick={() => scrollArticles(-1)}
                  disabled={!canScrollBack}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 bg-white text-primary transition hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-primary"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Artikel berikutnya"
                  onClick={() => scrollArticles(1)}
                  disabled={!canScrollForward}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 bg-white text-primary transition hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-primary"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
            <div
              ref={carouselRef}
              className="mt-5 flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain scroll-smooth pb-5 [scrollbar-color:var(--color-primary)_transparent] [scrollbar-width:thin]"
              aria-label="Daftar artikel edukasi"
              aria-roledescription="karusel"
              tabIndex={0}
            >
              {articles.map((a, index) => (
                <Reveal
                  key={a.slug}
                  className="h-full w-[88%] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
                  delay={Math.min(index * 100, 300)}
                >
                  <ArticleCard article={a} />
                </Reveal>
              ))}
            </div>
          </>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {articles.map((a, index) => (
              <Reveal key={a.slug} className="h-full" delay={index * 120}>
                <ArticleCard article={a} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}