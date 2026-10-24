type Hours = { day: string; time: string | null }[];

type Range = {
  start: number;
  end: number;
  startLabel: string;
  endLabel: string;
};

export type Status = {
  open: boolean;
  headline: string;
  detail: string;
  todayName: string;
};

// Ganti jika praktik di zona waktu lain (WITA: "Asia/Makassar", WIT: "Asia/Jayapura")
const TIMEZONE = "Asia/Jakarta";
const ZONE_LABEL = "WIB";

const DAYS = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

const EN_DAYS: Record<string, number> = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

function clockNow(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE,
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);

  const get = (type: string) =>
    parts.find((p) => p.type === type)?.value ?? "0";

  return {
    dayIndex: EN_DAYS[get("weekday")] ?? 0,
    minutes: (Number(get("hour")) % 24) * 60 + Number(get("minute")),
  };
}

function toMinutes(label: string) {
  const [h, m = "0"] = label.trim().replace(":", ".").split(".");
  return Number(h) * 60 + Number(m);
}

function parseRanges(time: string): Range[] {
  return time.split(",").map((range) => {
    const [a, b] = range.split("-").map((x) => x.trim());
    return {
      start: toMinutes(a),
      end: toMinutes(b),
      startLabel: a,
      endLabel: b,
    };
  });
}

export function getStatus(hours: Hours, date: Date): Status {
  const { dayIndex, minutes } = clockNow(date);
  const todayName = DAYS[dayIndex];
  const byDay = (i: number) => hours.find((h) => h.day === DAYS[i]);

  const today = byDay(dayIndex);
  const ranges = today?.time ? parseRanges(today.time) : [];

  const current = ranges.find((r) => minutes >= r.start && minutes < r.end);
  if (current) {
    return {
      open: true,
      headline: "Buka sekarang",
      detail: `Sampai ${current.endLabel} ${ZONE_LABEL}`,
      todayName,
    };
  }

  const later = ranges.find((r) => minutes < r.start);
  if (later) {
    return {
      open: false,
      headline: "Tutup",
      detail: `Buka hari ini pukul ${later.startLabel} ${ZONE_LABEL}`,
      todayName,
    };
  }

  for (let i = 1; i <= 7; i++) {
    const idx = (dayIndex + i) % 7;
    const h = byDay(idx);
    if (h?.time) {
      const first = parseRanges(h.time)[0];
      const when =
        i === 1 ? "besok" : i === 7 ? `${DAYS[idx]} depan` : DAYS[idx];
      return {
        open: false,
        headline: today?.time ? "Tutup" : "Libur hari ini",
        detail: `Buka lagi ${when} pukul ${first.startLabel} ${ZONE_LABEL}`,
        todayName,
      };
    }
  }

  return {
    open: false,
    headline: "Tutup",
    detail: "Jadwal belum tersedia",
    todayName,
  };
}