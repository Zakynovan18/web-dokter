import { site } from "@/data/site";
import { waLink } from "@/lib/utils";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const { contact, schedule } = site;

  return (
    <section id="kontak">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Reveal
          className="rounded-3xl bg-primary px-6 py-14 text-center text-white shadow-card md:px-12"
          direction="scale"
        >
          <h2 className="text-3xl font-bold md:text-4xl">Hubungi Kami</h2>
          <p className="mx-auto mt-3 max-w-lg leading-relaxed text-white/90">
            Ada pertanyaan seputar jadwal atau layanan? Hubungi kami lewat
            WhatsApp atau telepon.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-primary transition hover:bg-surface"
            >
              WhatsApp
            </a>
            <a
              href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
              className="rounded-lg border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Telepon {contact.phone}
            </a>
            <a
              href={schedule[0].mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Lihat Rute
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}