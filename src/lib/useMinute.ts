import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 30_000);
  return () => clearInterval(id);
}

const getSnapshot = (): number | null => Math.floor(Date.now() / 60_000);
const getServerSnapshot = (): number | null => null;

// Mengembalikan null saat render di server, lalu menit saat ini di browser
export function useMinute() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}