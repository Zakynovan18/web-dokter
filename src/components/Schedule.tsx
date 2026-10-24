"use client";

import { site } from "@/data/site";
import { waLink } from "@/lib/utils";
import { getStatus } from "@/lib/openStatus";
import { useMinute } from "@/lib/useMinute";
import Reveal from "@/components/Reveal";

export default function Schedule() {
  const minute = useMinute();
  const now = minute === null ? null : new Date(minute * 60_000);

  return (
    <section id="jadwal">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            Jadwal Praktik
          </h2>
          <p className="mt-3 leading-relaxed">
            Jadwal dapat berubah. Konfirmasi lewat WhatsApp sebelum datang.
          </p>
        </Reveal>

        <div className="mt-12 space-y-6">
          {site.schedule.map((s, index) => {
            const status = now ? getStatus(s.hours, now) : null;

            return (
              <article key={s.place} className="grid gap-6 md:grid-cols-5">
                {/* kartu lokasi */}
                <Reveal
                  className="md:col-span-2"
                  direction="left"
                  delay={index * 100}
                >
                <div
                  className="relative flex flex-col justify-between overflow-hidden rounded-card bg-primary p-8 text-white shadow-card"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
                  <div className="pointer-events-none absolute -bottom-8 right-10 h-16 w-16 rounded-full bg-accent/80" />

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>

                    <p className="mt-6 text-sm font-semibold text-white/80">
                      Lokasi Praktik
                    </p>
                    <h3 className="mt-1 text-2xl font-bold leading-snug">
                      {s.place}
                    </h3>
                    <p className="mt-2 leading-relaxed text-white/90">
                      {s.address}
                    </p>
                  </div>

                  <div className="relative mt-8 flex flex-wrap gap-3">
                    <a
                      href={s.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-surface"
                    >
                      Lihat Rute
                    </a>
                    <a
                      href={waLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-white/50 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                    >
                      Tanya via WhatsApp
                    </a>
                  </div>
                </div>
                </Reveal>

                {/* daftar hari */}
                <Reveal
                  className="md:col-span-3"
                  direction="right"
                  delay={index * 100 + 100}
                >
                <div
                  className="rounded-card bg-white p-6 shadow-card md:p-8"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-primary">
                      Jam Praktik
                    </h3>

                    {status && (
                      <span
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${status.open
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-rose-50 text-rose-500"
                          }`}
                      >
                        <span
                          className={`h-2 w-2 rounded-full ${status.open ? "bg-emerald-500" : "bg-rose-400"
                            }`}
                        />
                        {status.headline}
                      </span>
                    )}
                  </div>

                  <dl className="mt-3 divide-y divide-slate-100">
                    {s.hours.map((h) => {
                      const isToday = status?.todayName === h.day;

                      return (
                        <div
                          key={h.day}
                          className={`flex items-center justify-between py-3.5 ${isToday ? "-mx-3 rounded-xl bg-surface px-3" : ""
                            }`}
                        >
                          <dt className="flex items-center gap-3 font-semibold text-navy">
                            <span
                              className={`h-2.5 w-2.5 rounded-full ${h.time ? "bg-primary" : "bg-slate-300"
                                }`}
                            />
                            {h.day}
                            {isToday && (
                              <span className="rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-white">
                                Hari ini
                              </span>
                            )}
                          </dt>
                          <dd>
                            {h.time ? (
                              <span
                                className={`rounded-full px-4 py-1.5 text-sm font-semibold text-primary ${isToday ? "bg-white" : "bg-surface"
                                  }`}
                              >
                                {h.time}
                              </span>
                            ) : (
                              <span className="px-4 py-1.5 text-sm font-medium text-slate-400">
                                Libur
                              </span>
                            )}
                          </dd>
                        </div>
                      );
                    })}
                  </dl>
                </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}