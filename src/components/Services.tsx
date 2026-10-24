import Link from "next/link";
import { site } from "@/data/site";
import ServiceIcon from "@/components/ServiceIcon";
import Reveal from "@/components/Reveal";

const directions = ["left", "up", "down", "right"] as const;

export default function Services() {
  return (
    <section id="layanan" className="relative">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            Layanan
          </h2>
          <p className="mt-3 leading-relaxed">
            Layanan yang tersedia pada praktik {site.doctor.name}.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.services.map((s, index) => (
            <Reveal
              key={s.slug}
              className="h-full"
              direction={directions[index % directions.length]}
              delay={Math.min(index * 110, 440)}
            >
              <Link
                href={`/layanan/${s.slug}`}
                className="group relative flex h-full min-h-56 flex-col justify-between rounded-card bg-white p-7 shadow-card transition-all duration-300 ease-out hover:z-10 hover:-translate-y-3 hover:scale-105 hover:bg-primary hover:shadow-[0_28px_45px_-14px_rgb(22_119_229/0.5)] focus-visible:z-10 focus-visible:-translate-y-3 focus-visible:scale-105 focus-visible:bg-primary motion-reduce:transition-none motion-reduce:hover:transform-none"
              >
                <ServiceIcon
                  slug={s.slug}
                  className="h-20 w-20 text-primary transition-colors duration-300 group-hover:text-white group-focus-visible:text-white"
                />

                <div>
                  <h3 className="text-xl font-bold leading-snug text-navy transition-colors duration-300 group-hover:text-white group-focus-visible:text-white">
                    {s.title}
                  </h3>

                  <span className="mt-2 flex max-h-8 items-center gap-1.5 overflow-hidden text-sm font-semibold text-primary transition-all duration-300 md:max-h-0 md:opacity-0 md:group-hover:max-h-8 md:group-hover:text-white md:group-hover:opacity-100 md:group-focus-visible:max-h-8 md:group-focus-visible:text-white md:group-focus-visible:opacity-100">
                    Baca selengkapnya
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}