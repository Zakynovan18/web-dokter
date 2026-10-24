import Image from "next/image";
import { site } from "@/data/site";
import { waLink } from "@/lib/utils";
import OpenStatus from "@/components/OpenStatus";

export default function Hero() {
  const { doctor, city } = site;

  return (
    <section id="beranda" className="relative overflow-hidden">
      {/* garis gelombang halus di latar */}
      <svg
        className="pointer-events-none absolute inset-x-0 top-1/3 h-72 w-full opacity-60"
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 180 C 240 80, 480 280, 720 170 S 1200 60, 1440 160"
          stroke="#1677e5"
          strokeOpacity="0.12"
          strokeWidth="1.5"
        />
        <path
          d="M0 200 C 240 100, 480 300, 720 190 S 1200 80, 1440 180"
          stroke="#1677e5"
          strokeOpacity="0.09"
          strokeWidth="1.5"
        />
        <path
          d="M0 220 C 240 120, 480 320, 720 210 S 1200 100, 1440 200"
          stroke="#1677e5"
          strokeOpacity="0.06"
          strokeWidth="1.5"
        />
      </svg>

      {/* lingkaran dekoratif */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white" />
      <div className="pointer-events-none absolute right-1/4 top-24 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-16 left-[38%] h-4 w-4 animate-float-slow rounded-full bg-accent/80 motion-reduce:animate-none" />
      <div className="pointer-events-none absolute left-[8%] top-[55%] h-3 w-3 animate-float rounded-full bg-primary/40 motion-reduce:animate-none" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-14 md:grid-cols-2 md:py-24">
        {/* teks */}
        <div>
          <p
            className="animate-fade-up border-l-4 border-accent pl-3 text-sm font-semibold text-navy motion-reduce:animate-none"
            style={{ animationDelay: "0ms" }}
          >
            Praktik di {city}
          </p>

          <h1
            className="mt-5 animate-fade-up text-4xl font-extrabold leading-tight text-navy motion-reduce:animate-none md:text-5xl"
            style={{ animationDelay: "120ms" }}
          >
            {doctor.specialty} di {city}
          </h1>

          <p
            className="mt-2 animate-fade-up text-lg font-semibold text-primary motion-reduce:animate-none"
            style={{ animationDelay: "220ms" }}
          >
            {doctor.name}
          </p>

          <p
            className="mt-5 max-w-md animate-fade-up leading-relaxed motion-reduce:animate-none"
            style={{ animationDelay: "320ms" }}
          >
            {doctor.bio}
          </p>

          <div
            className="mt-6 animate-fade-up motion-reduce:animate-none"
            style={{ animationDelay: "380ms" }}
          >
            <OpenStatus />
          </div>

          <div
            className="mt-6 flex animate-fade-up flex-wrap gap-3 motion-reduce:animate-none"
            style={{ animationDelay: "440ms" }}
          >
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Hubungi via WhatsApp
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#jadwal"
              className="rounded-lg border border-primary/30 bg-white px-7 py-3.5 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:border-primary"
            >
              Lihat Jadwal Praktik
            </a>
          </div>
        </div>

        {/* foto */}
        <div
          className="relative mx-auto w-full max-w-sm animate-hero-photo motion-reduce:animate-none md:max-w-md"
          style={{ animationDelay: "250ms" }}
        >
          {/* pola titik */}
          <div
            className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(#1677e5 1.5px, transparent 1.5px)",
              backgroundSize: "14px 14px",
            }}
          />
          {/* bentuk lapis di belakang foto */}
          <div className="absolute -right-4 top-5 h-full w-full rounded-3xl bg-primary/15" />
          <div className="absolute -bottom-6 -left-6 h-20 w-20 animate-float-slow rounded-full bg-accent motion-reduce:animate-none" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-linear-to-b from-[#eaf0ff] to-[#d3e3ff] shadow-card">
            <Image
              src={doctor.photo}
              alt={`${doctor.name}, ${doctor.specialty}`}
              fill
              priority
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover object-top"
            />
          </div>

          {/* lencana ikon: detak jantung */}
          <div
            className="absolute -left-3 top-10 flex h-14 w-14 animate-float items-center justify-center rounded-full bg-white text-primary shadow-card motion-reduce:animate-none sm:-left-7 sm:h-16 sm:w-16"
            aria-hidden="true"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
            </svg>
          </div>

          {/* lencana ikon: stetoskop */}
          <div
            className="absolute -right-2 bottom-12 flex h-14 w-14 animate-float-slow items-center justify-center rounded-full bg-primary text-white shadow-card motion-reduce:animate-none sm:-right-6 sm:h-16 sm:w-16"
            aria-hidden="true"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 2v2" />
              <path d="M5 2v2" />
              <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
              <path d="M8 15a6 6 0 0 0 12 0v-3" />
              <circle cx="20" cy="10" r="2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}