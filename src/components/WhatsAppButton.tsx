import { waLink } from "@/lib/utils";

export default function WhatsAppButton() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi via WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex animate-fade-up items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 motion-reduce:animate-none"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.01 3.2A12.74 12.74 0 0 0 5.08 22.5L3.2 28.8l6.47-1.83a12.75 12.75 0 1 0 6.34-23.77Zm0 23.2c-1.93 0-3.82-.52-5.47-1.51l-.39-.23-3.84 1.08 1.11-3.74-.25-.4a10.44 10.44 0 1 1 8.84 4.8Zm5.73-7.83c-.31-.15-1.84-.91-2.13-1.01-.29-.11-.5-.15-.71.15-.21.31-.81 1.01-.99 1.22-.18.21-.37.23-.68.08-.31-.15-1.31-.48-2.5-1.53-.92-.82-1.55-1.84-1.73-2.15-.18-.31-.02-.48.14-.63.14-.14.31-.37.46-.55.15-.18.2-.31.31-.52.1-.21.05-.39-.03-.55-.08-.15-.71-1.71-.97-2.34-.26-.61-.52-.52-.71-.53h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.62s1.13 3.04 1.29 3.25c.15.21 2.22 3.39 5.37 4.75.75.32 1.33.51 1.79.65.75.24 1.43.2 1.97.12.6-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37Z" />
      </svg>
      <span className="hidden sm:inline">Hubungi via WhatsApp</span>
    </a>
  );
}