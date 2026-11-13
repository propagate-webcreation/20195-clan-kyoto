"use client";

import { useState, useRef, type FormEvent } from "react";
import { MOTIFS, SIZES } from "../../config/studios";
import { STORE_GUIDE, type StoreProfile } from "../../config/store-guide";
import { SectionHeading, SectionRail } from "../shared/Editorial";
import { SocialIcon } from "../shared/SocialIcon";

function primaryContact(store: StoreProfile) {
  return (
    store.contacts.find((contact) => contact.channel === "WhatsApp") ??
    store.contacts[0]
  );
}

export function ConsultationForm({
  initialStudio = "",
  initialMotif = "",
  purpose = "",
}: {
  initialStudio?: string;
  initialMotif?: string;
  purpose?: string;
}) {
  const [studioId, setStudioId] = useState(initialStudio);
  const [motif, setMotif] = useState<string>(
    initialMotif || MOTIFS[MOTIFS.length - 1],
  );
  const [size, setSize] = useState<string>(SIZES[SIZES.length - 1]);
  const [name, setName] = useState("");
  const [placement, setPlacement] = useState("");
  const [date, setDate] = useState("");
  const [language, setLanguage] = useState("English");
  const [message, setMessage] = useState(
    purpose === "artist"
      ? "Please tell me who is working and share recent work."
      : purpose === "aftercare"
        ? "I have a question about aftercare."
        : "",
  );
  const [prepared, setPrepared] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const studio = STORE_GUIDE.find((item) => item.id === studioId);
  const chat = studio ? primaryContact(studio) : undefined;
  const consultation = studio
    ? [
        `Tattoo consultation — ${studio.name || studio.city}`,
        `Studio: ${studio.city}${studio.jp !== studio.nav ? ` (${studio.jp})` : ""}`,
        `Name: ${name.trim() || "—"}`,
        `Language: ${language}`,
        `Design: ${motif}`,
        `Size: ${size}`,
        `Placement: ${placement.trim() || "Not sure yet"}`,
        `Preferred date: ${date || "Not sure yet"}`,
        `Message:\n${message.trim() || "Please tell me the price, availability and how to find the studio."}`,
      ].join("\n")
    : "";

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!studio) return;
    setPrepared(true);
    setCopyStatus("");
    requestAnimationFrame(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      resultRef.current?.focus({ preventScroll: true });
    });
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(consultation);
      setCopyStatus(
        "Copied. Paste it into the studio chat.",
      );
    } catch {
      textRef.current?.focus();
      textRef.current?.select();
      setCopyStatus(
        "Copy failed. Select the message and copy it yourself.",
      );
    }
  }

  return (
    <section id="consultation">
      <SectionRail number="01" title="Start a Conversation" label="Contact" />
      <div className="site-width py-20 sm:py-28 grid lg:grid-cols-[0.8fr_1.25fr] gap-12 lg:gap-20">
        <div>
          <SectionHeading subtitle="Start with the picture you have in mind.">
            YOUR IDEA.
            <br />
            <span className="text-white/35">OUR INK.</span>
          </SectionHeading>
          <p className="text-white/65 text-base leading-[2] mt-8">
            Choose a studio, a design and a size, then review the message
            before you send it in that studio’s chat. A booking is confirmed
            only after the studio replies. You can attach a reference image in
            the chat.
          </p>
        </div>
        <div>
          <form
            onSubmit={prepare}
            onChange={() => {
              setPrepared(false);
              setCopyStatus("");
            }}
            className="space-y-9"
          >
            <fieldset>
              <legend className="form-label">
                01 / Studio <span className="text-[#c8102e]">Required</span>
              </legend>
              <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
                {STORE_GUIDE.map((s) => (
                  <label
                    key={s.id}
                    className={`relative cursor-pointer border p-3 sm:p-5 transition-colors ${studioId === s.id ? "border-[#c8102e] bg-[#c8102e]/10" : "border-white/20 hover:border-white/50"}`}
                  >
                    <input
                      type="radio"
                      name="studio"
                      value={s.id}
                      checked={studioId === s.id}
                      required
                      onChange={() => setStudioId(s.id)}
                      className="accent-[#c8102e] mb-3"
                    />
                    <span className="display block text-[22px] leading-none md:text-[28px]">
                      {s.city}
                    </span>
                    {s.jp !== s.nav ? (
                      <span className="mt-2 block text-[14px] leading-relaxed text-white/60 md:text-[16px]">
                        {s.jp}
                      </span>
                    ) : null}
                    {s.opening ? (
                      <span className="mt-2 block text-[13px] leading-relaxed text-white/70 md:text-[14px]">
                        {s.opening}
                      </span>
                    ) : null}
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="grid sm:grid-cols-2 gap-6">
              <label className="form-label">
                02 / Design
                <select
                  className="form-field"
                  value={motif}
                  onChange={(e) => setMotif(e.target.value)}
                >
                  {MOTIFS.map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </label>
              <label className="form-label">
                03 / Size
                <select
                  className="form-field"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                >
                  {SIZES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <label className="form-label">
                04 / Placement <span className="form-en">Optional</span>
                <input
                  type="text"
                  className="form-field"
                  value={placement}
                  maxLength={100}
                  placeholder="e.g. right forearm"
                  onChange={(e) => setPlacement(e.target.value)}
                />
              </label>
              <label className="form-label">
                05 / Preferred date <span className="form-en">Optional</span>
                <input
                  type="date"
                  className="form-field"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </label>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <label className="form-label">
                06 / Name <span className="form-en">Optional</span>
                <input
                  type="text"
                  autoComplete="name"
                  className="form-field"
                  value={name}
                  maxLength={100}
                  placeholder="e.g. Alex Smith"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="form-label">
                07 / Language
                <select
                  className="form-field"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option>English</option>
                  <option>Japanese</option>
                </select>
              </label>
            </div>
            <label className="form-label block">
              08 / Message
              <span className="form-en">
                Idea, travel dates, or an artist you want to ask about · Optional
              </span>
              <textarea
                className="form-field min-h-40 resize-y"
                rows={5}
                value={message}
                maxLength={2000}
                placeholder="A small dragon on my left forearm. In Kyoto on 20 November."
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <button
              type="submit"
              className="btn-square btn-blood w-full justify-between"
            >
              Review message <span aria-hidden>↗</span>
            </button>
          </form>
          <div
            ref={resultRef}
            tabIndex={-1}
            className="scroll-mt-28 focus:outline-none"
          >
            {prepared && studio && (
              <div className="mt-10 border border-white/25 p-5 sm:p-8">
                <p className="eyebrow text-[#c8102e] mb-5">
                  Next / {studio.city}
                  {chat ? ` · ${chat.channel}` : ""}
                </p>
                <h3 className="text-xl">Check it, then send it</h3>
                <p className="text-white/60 text-sm leading-[1.9] mt-4">
                  {chat?.channel === "WhatsApp"
                    ? "Your message is added to WhatsApp. Read it before you send."
                    : chat
                      ? `Copy the message, open ${chat.channel}, and paste it into the chat.`
                      : "A contact link will be added here when it is confirmed. You can copy the message for now."}
                </p>
                <textarea
                  ref={textRef}
                  value={consultation}
                  readOnly
                  aria-label="Prepared message"
                  className="form-field text-sm leading-[1.8] min-h-80 resize-y mt-5"
                />
                <div className="flex flex-wrap gap-3 mt-6">
                  <button type="button" className="btn-square" onClick={copy}>
                    Copy message
                  </button>
                  {chat ? (
                    <a
                      href={
                        chat.channel === "WhatsApp"
                          ? `${chat.href}?text=${encodeURIComponent(consultation)}`
                          : chat.href
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-square btn-blood"
                    >
                      <SocialIcon channel={chat.channel} />
                      Open {chat.channel} ↗
                    </a>
                  ) : null}
                </div>
                <p
                  className="text-sm text-white/70 leading-[1.9] mt-4"
                  role="status"
                >
                  {copyStatus}
                </p>
                <p className="text-xs text-white/50 leading-[1.9] mt-4">
                  Not sent yet. Send it in the chat app.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DirectContacts() {
  return (
    <section id="direct" className="border-t border-white/15">
      <div className="site-width py-16 sm:py-24">
        <p className="eyebrow text-[#c8102e] mb-10">
          Or talk directly
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {STORE_GUIDE.map((s) => (
            <article key={s.id} className="border-t border-white/20 pt-6">
              <h2 className="display text-[32px] leading-none md:text-[40px]">
                {s.city}
                <span className="text-[#c8102e]">.</span>
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-white/70 md:text-[16px]">
                {s.name || s.nav}
              </p>
              {s.opening ? (
                <p className="mt-3 text-[14px] font-bold leading-relaxed text-white md:text-[16px]">
                  {s.opening}
                </p>
              ) : null}
              <p className="mt-4 text-[14px] leading-relaxed text-white/55 md:text-[16px]">
                {s.hours}
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-white/55 md:text-[16px]">
                {s.hoursNote}
              </p>
              {s.contacts.length > 0 ? (
                <div className="mt-6 flex flex-col items-start gap-3">
                  {s.contacts.map((contact) => (
                    <a
                      key={contact.href}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-square"
                    >
                      <SocialIcon channel={contact.channel} />
                      {contact.label}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="mt-6 text-[14px] leading-relaxed text-white/75 md:text-[16px]">
                  {s.opening
                    ? "Contact details will be added with the opening information."
                    : "Contact details will be added when they are confirmed."}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
