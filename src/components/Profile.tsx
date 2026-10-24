import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wide text-primary">
        {title}
      </h3>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-relaxed">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Profile() {
  const { doctor } = site;

  return (
    <section id="profil">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            Profil Dokter
          </h2>
          <p className="mt-3 leading-relaxed">
            Latar belakang pendidikan dan pengalaman praktik.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Reveal
            className="rounded-card bg-primary p-8 text-white shadow-card md:col-span-1"
            direction="left"
          >
            <p className="text-sm font-semibold text-white/80">
              {doctor.specialty}
            </p>
            <h3 className="mt-2 text-2xl font-bold leading-snug">
              {doctor.name}
            </h3>
            <p className="mt-6 text-sm text-white/80">Nomor STR</p>
            <p className="font-mono text-base tracking-wide">{doctor.str}</p>
            <p className="mt-6 text-sm leading-relaxed text-white/90">
              {doctor.bio}
            </p>
          </Reveal>

          <Reveal
            className="grid gap-8 rounded-card bg-white p-8 shadow-card md:col-span-2 md:grid-cols-2"
            direction="right"
            delay={120}
          >
            <Block title="Pendidikan" items={doctor.education} />
            <Block title="Pengalaman" items={doctor.experience} />
            <div className="md:col-span-2">
              <Block title="Keanggotaan Profesi" items={doctor.memberships} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}