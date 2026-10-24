import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

const YEAR = 2026;

export default function Footer() {
  const { doctor, schedule } = site;

  return (
    <footer className="border-t border-white bg-white/60">
      <Reveal className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div>
            <p className="font-bold text-navy">{doctor.name}</p>
            <p className="text-sm">{doctor.specialty}</p>
            <p className="mt-1 text-sm">No. STR {doctor.str}</p>
          </div>
          <div className="text-sm md:text-right">
            <p className="font-semibold text-navy">{schedule[0].place}</p>
            <p>{schedule[0].address}</p>
          </div>
        </div>

        <p className="mt-8 text-xs leading-relaxed text-slate-500">
          Informasi di situs ini bersifat edukasi dan tidak menggantikan
          pemeriksaan atau saran medis langsung dari dokter.
        </p>
        <p className="mt-2 text-xs text-slate-500">
          © {YEAR} {doctor.name}
        </p>
      </Reveal>
    </footer>
  );
}