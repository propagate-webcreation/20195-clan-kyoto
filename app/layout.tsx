import type { Metadata } from "next";
import { Anton, Inter, Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SmoothScroll } from "./components/providers/SmoothScroll";

// Display sans for huge English headlines (NHA-style condensed grotesque)
const anton = Anton({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400"],
  display: "swap",
});

// Body sans for English UI / labels
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Modern Japanese gothic, even-stroke
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-jp",
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kyoto-walkin-tattoo-studio.com"),
  title: "京都のタトゥースタジオ | KYOTO WALK-IN TATTOO STUDIO JAPAN",
  description:
    "京都のウォークイン対応タトゥースタジオ。日本モチーフ・和テイストのデザインを中心に、海外からのお客様にも対応。予約不要・年中無休 11:00〜21:00。Walk-in tattoo studio in Kyoto. Japanese motifs, English OK, polaroid gift.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${anton.variable} ${inter.variable} ${notoSansJP.variable}`}
    >
      <body className="font-sans antialiased min-h-screen bg-[#0a0a0a] text-white selection:bg-[#c8102e] selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
        <Script
          src="https://site-annotator.vercel.app/tracker.js"
          strategy="afterInteractive"
        />
{/* Google Tag Manager */}
<script id="pulse-gtm-w98rvbkz" dangerouslySetInnerHTML={{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W98RVBKZ');`}} />
{/* End Google Tag Manager */}
{/* Microsoft Clarity (PULSE auto-install) */}
<script type="text/javascript" id="pulse-gtm" dangerouslySetInnerHTML={{__html:`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "x568kmlrgp");
`}} />
{/* End Microsoft Clarity */}
</body>
    </html>
  );
}
