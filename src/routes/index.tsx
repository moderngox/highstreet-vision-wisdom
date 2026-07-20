import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import logo from "@/assets/hs-logo.png";
import portraitVisionAsset from "@/assets/portrait-vision.png";
const portraitVision = portraitVisionAsset;
import portraitStatusAsset from "@/assets/portrait-status.png";
const portraitStatus = portraitStatusAsset;
import pillarLookAsset from "@/assets/pillar-look.jpg";
const pillarLook = pillarLookAsset;
import productCeo from "@/assets/product-ceo.png";
import productOgaon from "@/assets/product-ogaon.png";
import productPackage from "@/assets/product-package.png";
import productAviator from "@/assets/product-aviator.png";
import pillarLivingAsset from "@/assets/pillar-living.jpg";
const pillarLiving = pillarLivingAsset;
import pillarBusinessAsset from "@/assets/pillar-business.jpg";
const pillarBusiness = pillarBusinessAsset;
import pillarHustlingAsset from "@/assets/pillar-hustling.jpg";
const pillarHustling = pillarHustlingAsset;
import hsbsCardAsset from "@/assets/hsbs-card.png";
const hsbsCard = hsbsCardAsset;

const SITE_URL = "https://highstreet.co.kr";
const OG_IMAGE = `${SITE_URL}${portraitVisionAsset.url}`;

const HOME_TITLE = "HighStreet | Private Members Club Seoul";
const HOME_DESC =
  "HighStreet is an invitation-only private members club connecting founders, entrepreneurs, investors, creators and global tastemakers through curated experiences in Seoul.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "HighStreet",
      alternateName: ["하스", "Highstreet"],
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.png`,
      email: "access@highstreet.co.kr",
      sameAs: ["https://www.instagram.com/highstreet_kr"],
      areaServed: "KR",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "HighStreet",
      description: HOME_DESC,
      inLanguage: ["en", "ko"],
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#club`,
      name: "HighStreet Private Members Club",
      url: SITE_URL,
      image: OG_IMAGE,
      priceRange: "$$$$",
      address: { "@type": "PostalAddress", addressLocality: "Seoul", addressCountry: "KR" },
      areaServed: { "@type": "City", name: "Seoul" },
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is HighStreet?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HighStreet (하스) is an invitation-only private members club based in Seoul that connects founders, entrepreneurs, investors, creators and global tastemakers through curated meetings, courses, expert services and limited artifacts.",
          },
        },
        {
          "@type": "Question",
          name: "Who is HighStreet for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HighStreet is for founders, operators, investors, family-office principals, creators and cultural tastemakers who want a trusted peer network of ambitious, high-signal operators.",
          },
        },
        {
          "@type": "Question",
          name: "Where does HighStreet operate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HighStreet is headquartered in Seoul, South Korea, with gatherings extending across Asia and select global cities.",
          },
        },
        {
          "@type": "Question",
          name: "Why does HighStreet exist?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HighStreet exists to compound human growth for a small circle of operators — pairing High Vision (long-term thinking, taste, capital) with Street Wisdom (execution and real-world instinct) in a private, off-record room.",
          },
        },
        {
          "@type": "Question",
          name: "What value do members receive?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Members receive private meetings and dinners, curated courses, access to vetted expert services (legal, financial, creative, growth), limited luxury artifacts reserved for members, and a trusted global peer network.",
          },
        },
        {
          "@type": "Question",
          name: "How do I join HighStreet?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Membership is by invitation only. You can request access by emailing access@highstreet.co.kr.",
          },
        },
      ],
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESC },
      { name: "keywords", content: "HighStreet, 하스, private members club Seoul, invitation only club Korea, founders club Seoul, entrepreneurs club Korea" },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "HighStreet — Private Members Club Seoul" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: HOME_TITLE },
      { name: "twitter:description", content: HOME_DESC },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: SITE_URL + "/" },
      { rel: "alternate", hrefLang: "en", href: SITE_URL + "/" },
      { rel: "alternate", hrefLang: "ko", href: SITE_URL + "/" },
      { rel: "alternate", hrefLang: "x-default", href: SITE_URL + "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: Index,
});

function LanguageToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center gap-1 border border-white/15 rounded-full p-0.5 text-[10px] font-bold tracking-[0.2em]">
      <button
        onClick={() => setLang("en")}
        className={`px-2.5 py-1 rounded-full transition-colors ${lang === "en" ? "bg-white text-black" : "text-white/60"}`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("kr")}
        className={`px-2.5 py-1 rounded-full transition-colors ${lang === "kr" ? "bg-white text-black" : "text-white/60"}`}
      >
        KR
      </button>
    </div>
  );
}

function Nav() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#manifesto", label: t("navMembers") },
    { href: "#pillars", label: t("navPillars") },
    { href: "#agency", label: t("navAgency") },
    { href: "#artifacts", label: t("navArtifacts") },
  ];
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-background/70 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center justify-between px-5 sm:px-8 py-4">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={logo} alt="Highstreet 하스 logo" width={28} height={28} style={{ filter: "brightness(0) invert(1)" }} />
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-base tracking-tighter">하스</span>
            <span className="text-[8px] tracking-[0.3em] uppercase text-gold mt-0.5">Highstreet</span>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.2em] uppercase text-white/70">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <a href="#apply" className="hidden sm:inline-flex text-[10px] font-bold tracking-[0.2em] uppercase bg-white text-black px-4 py-2 hover:bg-gold transition-colors">
            {t("navApply")}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 border border-white/15 text-white"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 px-5 py-4 flex flex-col gap-4 text-[12px] tracking-[0.2em] uppercase text-white/80 bg-background/95">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#apply" onClick={() => setOpen(false)} className="sm:hidden inline-flex justify-center text-[10px] font-bold tracking-[0.2em] uppercase bg-white text-black px-4 py-2.5 hover:bg-gold transition-colors">
            {t("navApply")}
          </a>
        </div>
      )}
    </nav>
  );
}


function Hero() {
  const { t, lang } = useLang();
  return (
    <section id="top" className="relative pt-32 pb-20 px-6 sm:px-10 overflow-hidden min-h-[92vh] flex flex-col justify-end">
      <div aria-hidden className="absolute -right-24 top-20 w-80 h-80 gold-glow" />
      <div aria-hidden className="absolute -left-24 bottom-20 w-96 h-96 gold-glow opacity-60" />
      <div aria-hidden className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.04]">
        <span className="font-kr font-black text-[55vw] sm:text-[35vw] leading-none">하스</span>
      </div>

      <div className="relative z-10 reveal">
        <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-6">{t("heroEyebrow")}</p>
        <h1 className={`font-display font-extrabold leading-[0.85] tracking-tighter mb-8 ${lang === "kr" ? "text-5xl sm:text-7xl" : "text-6xl sm:text-8xl"}`}>
          {t("heroLine1")}<br />
          {t("heroLine2")}<br />
          <span className="text-gold italic">{t("heroLine3")}</span><br />
          {t("heroLine4")}
        </h1>
        <p className="text-silver/70 text-sm sm:text-base max-w-md leading-relaxed mb-10">
          {t("heroSub")}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md">
          <a href="#apply" className="flex-1 text-center bg-white text-black font-bold py-4 text-xs tracking-[0.25em] uppercase hover:bg-gold transition-colors">
            {t("heroCta")}
          </a>
          <a href="#manifesto" className="flex-1 text-center border border-white/20 font-bold py-4 text-xs tracking-[0.25em] uppercase hover:bg-white/5 transition-colors">
            {t("manifestoLabel").split("—")[1]?.trim() ?? "Manifesto"}
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 text-[10px] tracking-[0.3em] uppercase text-white/30 font-mono">
        {t("heroMeta")}
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["High Vision", "Street Wisdom", "하스", "Members Only", "Est. Seoul", "HIGH VISION", "STREET WISDOM", "하스"];
  const row = [...items, ...items];
  return (
    <div className="border-y border-white/10 py-4 overflow-hidden bg-card">
      <div className="marquee flex gap-12 whitespace-nowrap w-max">
        {row.map((s, i) => (
          <span key={i} className="text-xs tracking-[0.4em] uppercase text-white/40 font-display font-bold">
            {s} <span className="text-gold ml-12">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Manifesto() {
  const { t } = useLang();
  return (
    <section id="manifesto" className="px-6 sm:px-10 py-24 sm:py-32 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-8">{t("manifestoLabel")}</p>
        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tighter leading-[1.05] mb-6 text-balance">
          {t("manifestoTitle")}
        </h2>
        <p className="text-silver/70 leading-relaxed max-w-prose">{t("manifestoBody")}</p>
      </div>
      <div className="relative aspect-[4/5] overflow-hidden">
        <img src={portraitVision} alt="Highstreet member portrait" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
      </div>
    </section>
  );
}

const pillars = [
  { num: "01", key: "p1", img: pillarLiving, ratio: "aspect-video", objectPosition: undefined as string | undefined },
  { num: "02", key: "p2", img: pillarBusiness, ratio: "aspect-video", objectPosition: undefined as string | undefined },
  { num: "03", key: "p3", img: pillarHustling, ratio: "aspect-video", objectPosition: undefined as string | undefined },
  { num: "04", key: "p4", img: portraitStatus, ratio: "aspect-[4/5]", objectPosition: undefined as string | undefined },
  { num: "05", key: "p5", img: pillarLook, ratio: "aspect-video", objectPosition: "object-[30%_40%]" },
] as const;

function Pillars() {
  const { t } = useLang();
  return (
    <section id="pillars" className="px-6 sm:px-10 py-24 sm:py-32 bg-card">
      <div className="flex items-baseline justify-between mb-16">
        <p className="text-[10px] tracking-[0.35em] uppercase text-gold font-semibold">{t("pillarsLabel")}</p>
        <p className="font-kr text-sm text-white/40">{t("pillarsKr")}</p>
      </div>
      <div className="space-y-20">
        {pillars.map((p) => (
          <article key={p.num} className="group">
            <div className="flex justify-between items-end mb-5">
              <span className="text-5xl sm:text-6xl font-display font-bold text-white/10 leading-none">{p.num}</span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-right">
                {t(`${p.key}Title` as never)}
              </h3>
            </div>
            <p className="text-sm text-silver/50 mb-5 leading-relaxed max-w-md ml-auto text-right italic">
              {t(`${p.key}Body` as never)}
            </p>
            <div className={`w-full ${p.ratio} overflow-hidden ring-1 ring-inset ring-white/10`}>
              <img src={p.img} alt={`${t(`${p.key}Title` as never)} pillar`} loading="lazy" className={`w-full h-full object-cover ${p.objectPosition ?? "object-center"} transition-transform duration-700 group-hover:scale-105`} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Agency() {
  const { t } = useLang();
  const services: Array<{ k: "s1" | "s2" | "s3" | "s4" }> = [{ k: "s1" }, { k: "s2" }, { k: "s3" }, { k: "s4" }];
  return (
    <section id="agency" className="px-6 sm:px-10 py-24 sm:py-32">
      <div className="mb-14">
        <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-4">{t("agencyLabel")}</p>
        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tighter max-w-2xl text-balance">
          {t("agencyTitle")}
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-px bg-white/10">
        {services.map((s, i) => (
          <div key={s.k} className="bg-background p-6 sm:p-10 aspect-square sm:aspect-auto flex flex-col justify-between hover:bg-card transition-colors">
            <span className="text-[10px] text-gold tracking-[0.3em] uppercase">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <p className="font-display text-2xl sm:text-3xl font-bold mb-2">{t(`${s.k}` as never)}</p>
              <p className="text-xs text-silver/50">{t(`${s.k}Body` as never)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Benefits */}
      <div className="mt-20">
        <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-8">{t("benefitsLabel")}</p>
        <ul className="divide-y divide-white/10 border-y border-white/10">
          {(["b1", "b2", "b3", "b4"] as const).map((b, i) => (
            <li key={b} className="flex items-center gap-6 py-5 group hover:px-2 transition-all">
              <span className="text-xs font-mono text-gold w-8">0{i + 1}</span>
              <span className="text-sm sm:text-base text-silver/80 flex-1">{t(b)}</span>
              <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Artifacts() {
  const { t } = useLang();
  return (
    <section id="artifacts" className="px-6 sm:px-10 py-24 sm:py-32 bg-card">
      <div className="flex items-baseline justify-between mb-12">
        <div>
          <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-3">{t("artifactsLabel")}</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tighter">{t("artifactsKr")}</h2>
        </div>
      </div>
      <p className="text-silver/60 max-w-md mb-10 leading-relaxed">{t("artifactsBody")}</p>

      {/* Featured: HSBS Banking System member card */}
      <div className="relative mb-6 ring-1 ring-inset ring-gold/20 bg-black overflow-hidden">
        <img src={hsbsCard} alt="HSBS — Highstreet Banking System member card" loading="lazy" className="w-full aspect-[16/10] object-cover" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-2">HSBS · Members Only</p>
            <p className="font-display text-xl sm:text-3xl font-bold tracking-tighter">Highstreet Banking System</p>
          </div>
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/60 border border-white/20 px-3 py-1 hidden sm:inline-block">Black Card</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <img src={productOgaon} alt="Highstreet eyewear — Ogaon" loading="lazy" className="w-full aspect-square object-cover ring-1 ring-inset ring-white/10" />
        <img src={productCeo} alt="Highstreet eyewear — CEO" loading="lazy" className="w-full aspect-square object-cover ring-1 ring-inset ring-white/10" />
        <img src={productAviator} alt="Highstreet eyewear — Aviator" loading="lazy" className="w-full aspect-square object-cover ring-1 ring-inset ring-white/10" />
        <img src={productPackage} alt="Highstreet packaging" loading="lazy" className="w-full aspect-square object-cover ring-1 ring-inset ring-white/10" />
      </div>
      <a href="https://www.instagram.com/highstreet_kr" target="_blank" rel="noreferrer" className="inline-flex mt-10 text-[10px] tracking-[0.3em] uppercase border-b border-gold pb-1 text-gold hover:text-white hover:border-white transition-colors">
        View the collection →
      </a>
    </section>
  );
}

function CTA() {
  const { t } = useLang();
  return (
    <section id="apply" className="relative px-6 sm:px-10 py-32 text-center overflow-hidden">
      <div aria-hidden className="absolute inset-0 gold-glow opacity-40" />
      <div className="relative z-10">
        <p className="font-display text-6xl sm:text-8xl font-extrabold italic text-white/[0.06] leading-none tracking-tighter select-none">
          {t("ctaOverlay")}
        </p>
        <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tighter -mt-6 sm:-mt-10 mb-6">{t("ctaTitle")}</h2>
        <p className="text-silver/60 max-w-md mx-auto mb-10 leading-relaxed">{t("ctaBody")}</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <a href="mailto:access@highstreet.co.kr" className="flex-1 py-4 bg-gold text-black text-[11px] tracking-[0.3em] font-bold uppercase hover:bg-white transition-colors">
            {t("ctaApply")}
          </a>
          <a href="https://instagram.com/highstreet_kr" target="_blank" rel="noreferrer" className="flex-1 py-4 border border-white/20 text-[11px] tracking-[0.3em] font-bold uppercase hover:bg-white/5 transition-colors">
            {t("ctaIg")}
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="px-6 sm:px-10 py-12 border-t border-white/10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-display font-bold text-2xl tracking-tighter">하스</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold">Highstreet</span>
          </div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/40">{t("footerTag")}</p>
        </div>
        <div className="flex flex-col sm:items-end gap-2 text-[10px] tracking-[0.3em] uppercase text-white/40">
          <a href="https://instagram.com/highstreet_kr" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">@highstreet_kr</a>
          <span>{t("footerCity")}</span>
          <span>© {new Date().getFullYear()} Highstreet</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />
      <Hero />
      <Marquee />
      <Manifesto />
      <Pillars />
      <Agency />
      <Artifacts />
      <CTA />
      <Footer />
    </main>
  );
}
