"use client";

import { site } from "@/data/site";
import { getStatus } from "@/lib/openStatus";
import { useMinute } from "@/lib/useMinute";

export default function OpenStatus() {
  const minute = useMinute();

  // tempat kosong supaya layout tidak melompat saat status muncul
  if (minute === null) return <div className="h-11" aria-hidden="true" />;

  const status = getStatus(site.schedule[0].hours, new Date(minute * 60_000));

  return (
    <div
      className="inline-flex items-center gap-3 rounded-2xl bg-white px-4 py-2.5 shadow-card"
      role="status"
    >
      <span className="relative flex h-3 w-3 shrink-0">
        {status.open && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
        )}
        <span
          className={`relative inline-flex h-3 w-3 rounded-full ${status.open ? "bg-emerald-500" : "bg-rose-400"
            }`}
        />
      </span>
      <p className="text-sm">
        <strong
          className={status.open ? "text-emerald-600" : "text-rose-500"}
        >
          {status.headline}
        </strong>
        <span className="text-slate-500"> · {status.detail}</span>
      </p>
    </div>
  );
}