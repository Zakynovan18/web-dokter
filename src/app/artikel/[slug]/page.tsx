import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles } from "@/data/articles";
import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} | ${site.doctor.name}`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <main className="mx-auto max-w-2xl px-5 py-12 md:py-20">
      <Reveal>
        <Link href="/" className="text-sm font-semibold text-primary">
          ← Kembali ke beranda
        </Link>
      </Reveal>

      <Reveal className="mt-8">
        <time className="block text-sm font-semibold text-primary">
          {new Date(article.date).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </Reveal>
      <Reveal className="mt-2">
        <h1 className="text-3xl font-extrabold leading-tight text-navy md:text-4xl">
          {article.title}
        </h1>
      </Reveal>

      <Reveal className="mt-8 space-y-5 text-lg leading-relaxed">
        {article.content.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Reveal>

      <Reveal
        className="mt-12 rounded-card bg-white p-5 text-sm leading-relaxed shadow-card"
        direction="scale"
      >
        <p>
          Artikel ini bersifat edukasi dan tidak menggantikan pemeriksaan serta
          saran langsung dari dokter. Ditulis oleh {site.doctor.name}.
        </p>
      </Reveal>
    </main>
  );
}