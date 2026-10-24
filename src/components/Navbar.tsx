"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { waLink } from "@/lib/utils";

const links = [
  { label: "Beranda", href: "#beranda" },
  { label: "Profil", href: "#profil" },
  { label: "Layanan", href: "#layanan" },
  { label: "Jadwal", href: "#jadwal" },
  { label: "Artikel", href: "#artikel" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 py-3">
        <a
          href="#beranda"
          className="inline-flex h-full min-w-0 max-w-[65%] items-center truncate text-lg font-bold leading-tight text-navy"
        >
          {site.doctor.name}
        </a>

        <ul className="hidden h-full items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="inline-flex h-full items-center text-sm font-medium text-ink transition hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-card transition hover:bg-primary-dark md:inline-flex md:items-center"
        >
          Hubungi
        </a>

        <button
          type="button"
          aria-label="Buka menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-navy md:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-navy/10 bg-white px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 block rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white"
          >
            Hubungi via WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}