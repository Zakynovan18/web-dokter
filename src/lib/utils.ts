import { site } from "@/data/site";

export function waLink(message?: string) {
  const text = encodeURIComponent(message ?? site.contact.waMessage);
  return `https://wa.me/${site.contact.whatsapp}?text=${text}`;
}