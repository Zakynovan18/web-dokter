import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { site } from "@/data/site";
import { waLink } from "@/lib/utils";
import Reveal from "@/components/Reveal";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return site.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = site.services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | ${site.doctor.name}`,
    description: service.desc,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = site.services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = site.services.filter((s) => s.slug !== slug);

  return (
    <main className="mx-auto max-w-3xl px-5 py-12 md:py-20">
      <Reveal>
        <Link href="/#layanan" className="text-sm font-semibold text-primary">
          ← Kembali ke layanan
        </Link>
      </Reveal>

      <Reveal className="mt-8 text-sm font-semibold text-primary">
        <p>
          {site.doctor.specialty} · {site.city}
        </p>
      </Reveal>
      <Reveal className="mt-2">
        <h1 className="text-3xl font-extrabold leading-tight text-navy md:text-4xl">
          {service.title}
        </h1>
      </Reveal>
      <Reveal className="mt-3 text-lg leading-relaxed" direction="right">
        <p>{service.desc}</p>
      </Reveal>

      <Reveal className="mt-8 space-y-5 text-lg leading-relaxed">
        {service.detail.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Reveal>

      <Reveal
        className="mt-10 rounded-card bg-primary p-7 text-white shadow-card"
        direction="scale"
      >
        <p className="text-lg font-bold">
          Ingin bertanya tentang layanan ini?
        </p>
        <p className="mt-1 text-sm text-white/90">
          Hubungi kami lewat WhatsApp, pesannya sudah terisi otomatis.
        </p>
        <a
          href={waLink(
            `Halo dokter, saya ingin bertanya tentang layanan ${service.title}.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-surface"
        >
          Tanya via WhatsApp
        </a>
      </Reveal>

      <Reveal className="mt-12">
        <h2 className="text-sm font-bold uppercase tracking-wide text-primary">
          Layanan lainnya
        </h2>
        <ul className="mt-3 flex flex-wrap gap-3">
          {others.map((o) => (
            <li key={o.slug}>
              <Link
                href={`/layanan/${o.slug}`}
                className="inline-block rounded-full bg-white px-5 py-2 text-sm font-semibold text-navy shadow-card transition hover:-translate-y-0.5 hover:text-primary"
              >
                {o.title}
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-12 rounded-card bg-white p-5 text-sm leading-relaxed shadow-card">
        <p>
          Informasi ini bersifat edukasi dan tidak menggantikan pemeriksaan serta
          saran langsung dari dokter.
        </p>
      </Reveal>
    </main>
  );
}