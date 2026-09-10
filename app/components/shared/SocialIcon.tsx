import { FaInstagram, FaLine, FaWhatsapp } from "react-icons/fa6";

const ICONS = {
  Instagram: FaInstagram,
  LINE: FaLine,
  WhatsApp: FaWhatsapp,
};

export function SocialIcon({ channel }: { channel: keyof typeof ICONS }) {
  const Icon = ICONS[channel];
  return (
    <Icon className="size-5 shrink-0" aria-hidden="true" focusable="false" />
  );
}
