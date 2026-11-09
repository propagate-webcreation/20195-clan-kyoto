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
  const [motif, setMotif] = useState(initialMotif || MOTIFS[MOTIFS.length - 1]);
  const [size, setSize] = useState(SIZES[SIZES.length - 1]);
  const [name, setName] = useState("");
  const [placement, setPlacement] = useState("");
  const [date, setDate] = useState("");
  const [language, setLanguage] = useState("日本語 / Japanese");
  const [message, setMessage] = useState(
    purpose === "artist"
      ? "担当アーティストと最近の作品について教えてください。"
      : purpose === "aftercare"
        ? "施術後のアフターケアについて相談したいです。"
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
        `Tattoo consultation / タトゥーのご相談 — ${studio.name}`,
        `Studio / 店舗: ${studio.city} (${studio.jp})`,
        `Name / お名前: ${name.trim() || "—"}`,
        `Language / 対応言語: ${language}`,
        `Design / デザイン: ${motif}`,
        `Size / サイズ: ${size}`,
        `Placement / 部位: ${placement.trim() || "Undecided / 相談して決めたい"}`,
        `Preferred date / 来店希望日: ${date || "Undecided / 未定"}`,
        `Message / ご相談内容:\n${message.trim() || "Please let me know the price, availability and exact address.\n料金・空き状況・詳細住所を教えてください。"}`,
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
        "相談文をコピーしました。店舗のチャットに貼り付けてお送りください。 / Copied. Paste it into the studio chat.",
      );
    } catch {
      textRef.current?.focus();
      textRef.current?.select();
      setCopyStatus(
        "自動コピーできませんでした。選択した相談文を手動でコピーしてください。 / Please copy the selected text manually.",
      );
    }
  }

  return (
    <section id="consultation">
      <SectionRail number="01" title="Start a Conversation" label="Contact" />
      <div className="site-width py-20 sm:py-28 grid lg:grid-cols-[0.8fr_1.25fr] gap-12 lg:gap-20">
        <div>
          <SectionHeading jp="まずは、あなたのイメージを。">
            YOUR IDEA.
            <br />
            <span className="text-white/35">OUR INK.</span>
          </SectionHeading>
          <p className="font-jp text-white/65 text-base leading-[2] mt-8">
            店舗・デザイン・サイズを選んで相談文を作成できます。内容を確認したら、各店舗のチャットへお送りください。
          </p>
          <p className="text-white/50 text-sm leading-[1.9] mt-5">
            Choose a studio and describe your idea. Review your message, then
            send it through the studio’s chat. A booking is confirmed only after
            the studio replies.
          </p>
          <div className="border-t border-white/15 mt-9 pt-6 space-y-5">
            <p className="text-sm text-white/60 leading-[1.9]">
              この画面で予約は確定しません。日時と料金は店舗からの返信でご確認ください。参考画像はチャットで添付いただけます。
            </p>
            <p className="text-sm text-white/45 leading-[1.9]">
              相談文は画面内で作成されます。ご利用のメッセージサービスで内容を確認してからお送りください。
            </p>
          </div>
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
                01 / ご希望の店舗 <span className="text-[#c8102e]">必須</span>
                <span className="block text-white/45 mt-2">
                  Choose a studio · Required
                </span>
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
                    <span className="mt-2 block text-[14px] leading-relaxed text-white/60 md:text-[16px]">
                      {s.jp}
                    </span>
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
                02 / デザイン・モチーフ
                <span className="form-en">Design / Motif</span>
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
                03 / ご希望のサイズ<span className="form-en">Size</span>
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
                04 / 施術部位
                <span className="form-en">Placement · Optional</span>
                <input
                  type="text"
                  className="form-field"
                  value={placement}
                  maxLength={100}
                  placeholder="例：右腕 / Right arm"
                  onChange={(e) => setPlacement(e.target.value)}
                />
              </label>
              <label className="form-label">
                05 / 来店希望日
                <span className="form-en">Preferred date · Optional</span>
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
                06 / お名前<span className="form-en">Name · Optional</span>
                <input
                  type="text"
                  autoComplete="name"
                  className="form-field"
                  value={name}
                  maxLength={100}
                  placeholder="お名前 / Your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="form-label">
                07 / ご希望の言語
                <span className="form-en">Preferred language</span>
                <select
                  className="form-field"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option>日本語 / Japanese</option>
                  <option>English / 英語</option>
                </select>
              </label>
            </div>
            <label className="form-label block">
              08 / ご相談内容
              <span className="form-en">
                Your idea, budget, travel plans or preferred artist · Optional
              </span>
              <textarea
                className="form-field min-h-40 resize-y"
                rows={5}
                value={message}
                maxLength={2000}
                placeholder="デザイン、予算、滞在予定などをご記入ください。 / Tell us about your idea."
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <button
              type="submit"
              className="btn-square btn-blood w-full justify-between"
            >
              相談文を確認する / Review message <span aria-hidden>↗</span>
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
                <h3 className="text-xl">内容を確認して、店舗へ送る</h3>
                <p className="text-white/60 text-sm leading-[1.9] mt-4">
                  {chat?.channel === "WhatsApp"
                    ? "WhatsAppに相談文を引き継ぎます。送信前に内容をご確認ください。 / Your message will be added to WhatsApp for review."
                    : chat
                      ? `相談文をコピーし、${chat.channel}を開いてチャットに貼り付けてください。 / Copy your message, open ${chat.channel}, and paste it into the chat.`
                      : "問い合わせ先は、分かり次第この場所に掲載します。相談文はコピーして保管できます。 / The contact link will be added here when it is confirmed. You can copy the message for now."}
                </p>
                <textarea
                  ref={textRef}
                  value={consultation}
                  readOnly
                  aria-label="作成した相談文 / Prepared message"
                  className="form-field text-sm leading-[1.8] min-h-80 resize-y mt-5"
                />
                <div className="flex flex-wrap gap-3 mt-6">
                  <button type="button" className="btn-square" onClick={copy}>
                    相談文をコピー / Copy
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
                      {chat.channel}を開く ↗
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
                  まだ店舗には送信されていません。チャットで送信を完了してください。
                  / Not sent yet. Send your message in the chat app.
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
          Or talk directly / 直接相談する
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {STORE_GUIDE.map((s) => (
            <article key={s.id} className="border-t border-white/20 pt-6">
              <h2 className="display text-[32px] leading-none md:text-[40px]">
                {s.city}
                <span className="text-[#c8102e]">.</span>
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-white/70 md:text-[16px]">
                {s.jp}
                {s.name ? ` / ${s.name}` : ""}
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
                    ? "問い合わせ先は、オープン情報と一緒に追加します。"
                    : "問い合わせ先は、分かり次第この場所に掲載します。"}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
