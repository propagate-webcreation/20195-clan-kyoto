import type { Metadata } from "next";
import { Anton, Inter, Noto_Sans_JP } from "next/font/google";
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
  metadataBase: new URL("https://tattoo-studio-osaka.com"),
  title: "大阪のタトゥースタジオ| Tattoo Studio in Osaka",
  description:
    "大阪のタトゥースタジオ。ワンポイントから和彫りまで幅広いデザインに対応し、徹底した衛生管理で施術します。Premium tattoo studio in Osaka. We offer custom designs with strict hygiene standards. English OK!",
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
              <script src="https://www.propagate-annotator.com/tracker.js" async />
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
