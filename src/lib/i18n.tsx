import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "kr";

type Dict = Record<string, { en: string; kr: string }>;

export const dict = {
  navApply: { en: "Apply", kr: "지원하기" },
  navMembers: { en: "Members", kr: "멤버" },
  navPillars: { en: "Pillars", kr: "오대지주" },
  navAgency: { en: "Agency", kr: "에이전시" },
  navArtifacts: { en: "Artifacts", kr: "아티팩트" },

  heroEyebrow: { en: "Private Members Society / Est. Seoul", kr: "비공개 멤버스 소사이어티 / 서울" },
  heroLine1: { en: "HIGH", kr: "비전" },
  heroLine2: { en: "VISION", kr: "그리고" },
  heroLine3: { en: "STREET", kr: "거리의" },
  heroLine4: { en: "WISDOM", kr: "지혜" },
  heroSub: {
    en: "The private collective for human growth. Balancing intuition with the raw wisdom of the physical world.",
    kr: "인간 성장을 위한 비공개 컬렉티브. 직관과 거리의 지혜 사이에서 균형을 찾는 곳.",
  },
  heroCta: { en: "Request Access", kr: "가입 신청" },
  heroMeta: { en: "(By Invitation)", kr: "(초대제)" },

  manifestoLabel: { en: "00 — Manifesto", kr: "00 — 선언문" },
  manifestoTitle: { en: "Balance isn't found. It's engineered.", kr: "균형은 발견되는 것이 아니라, 설계되는 것이다." },
  manifestoBody: {
    en: "Highstreet — 하스 — exists for those who navigate the ethereal vision and the raw street. We curate human growth through five distinct pillars of existence: living, business, hustling, status, look.",
    kr: "하스는 비전과 거리, 두 세계를 동시에 움직이는 자들을 위한 공간입니다. 우리는 다섯 가지 기둥, 즉 삶, 비즈니스, 허슬, 위상, 외형을 통해 인간의 성장을 큐레이션합니다.",
  },

  pillarsLabel: { en: "The Five Pillars", kr: "오대지주" },
  pillarsKr: { en: "오대지주", kr: "The Five Pillars" },

  p1Title: { en: "Art of Living", kr: "삶의 예술" },
  p1Body: {
    en: "Curating an existence beyond comfort. Daily aesthetics, ritual, and the discipline of taste.",
    kr: "안락함을 넘어선 삶의 큐레이션. 일상의 미학, 의식, 그리고 취향의 규율.",
  },

  p2Title: { en: "Business", kr: "비즈니스" },
  p2Body: {
    en: "Scaling intuition into material wealth through elite networks and AI-driven frameworks.",
    kr: "엘리트 네트워크와 AI 기반 프레임워크를 통해 직관을 실질적 부로 확장합니다.",
  },

  p3Title: { en: "Hustling", kr: "허슬" },
  p3Body: {
    en: "The raw motion required to materialize the unseen. Speed, leverage, and street-level execution.",
    kr: "보이지 않는 것을 현실로 만드는 원초적 움직임. 속도, 레버리지, 거리 단위의 실행.",
  },

  p4Title: { en: "Status", kr: "위상" },
  p4Body: {
    en: "Positioning within the global hierarchy. Influence built quietly, signalled precisely.",
    kr: "글로벌 위계 안에서의 포지셔닝. 조용히 쌓아 정확하게 드러내는 영향력.",
  },

  p5Title: { en: "Look", kr: "외형" },
  p5Body: {
    en: "Visual identity and limited accessories that signal belonging without words.",
    kr: "말없이 소속을 드러내는 비주얼 아이덴티티와 한정 액세서리.",
  },

  agencyLabel: { en: "The Agency", kr: "에이전시" },
  agencyTitle: { en: "Domain-savvy expertise, reserved for members.", kr: "멤버 전용, 분야별 전문가 서비스." },
  s1: { en: "Web", kr: "웹" },
  s1Body: { en: "High-end development & storefronts", kr: "고급 개발 및 스토어프론트" },
  s2: { en: "AI", kr: "인공지능" },
  s2Body: { en: "Growth automation & agents", kr: "성장 자동화 및 에이전트" },
  s3: { en: "Marketing", kr: "마케팅" },
  s3Body: { en: "Reach, paid media, narrative", kr: "도달, 유료 미디어, 내러티브" },
  s4: { en: "Design", kr: "디자인" },
  s4Body: { en: "Identity, art direction, motion", kr: "아이덴티티, 아트 디렉션, 모션" },

  benefitsLabel: { en: "Membership Benefits", kr: "멤버십 혜택" },
  b1: { en: "Curated meetings with influential operators", kr: "영향력 있는 인사들과의 큐레이션 미팅" },
  b2: { en: "Private courses on finance, status, presence", kr: "재무, 위상, 존재감에 관한 비공개 강의" },
  b3: { en: "Expert services: web, design, marketing, AI", kr: "전문가 서비스: 웹, 디자인, 마케팅, AI" },
  b4: { en: "Limited luxury accessories & member drops", kr: "한정 럭셔리 액세서리 및 멤버 전용 드롭" },

  artifactsLabel: { en: "Artifacts", kr: "아티팩트" },
  artifactsKr: { en: "오브제", kr: "Objects" },
  artifactsBody: {
    en: "Limited objects worn by members. Each piece carries the mark — 하스 — quietly.",
    kr: "멤버가 착용하는 한정 오브제. 각 피스에는 하스의 마크가 조용히 새겨져 있습니다.",
  },

  ctaOverlay: { en: "EXCELLENCE", kr: "탁월함" },
  ctaTitle: { en: "Enter Highstreet", kr: "하스로 들어오다" },
  ctaBody: {
    en: "The journey from vision to street wisdom begins with a single step. Access is reviewed personally.",
    kr: "비전에서 거리의 지혜로 향하는 여정은 한 걸음에서 시작됩니다. 모든 신청은 직접 검토됩니다.",
  },
  ctaApply: { en: "Apply for Membership", kr: "멤버십 신청" },
  ctaIg: { en: "Follow on Instagram", kr: "인스타그램 팔로우" },

  footerTag: { en: "High Vision · Street Wisdom", kr: "비전과 거리의 지혜" },
  footerCity: { en: "Seoul · Worldwide", kr: "서울 · 전 세계" },
} satisfies Dict;

export type DictKey = keyof typeof dict;

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: DictKey) => string }>({
  lang: "en",
  setLang: () => {},
  t: (k) => dict[k].en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = (k: DictKey) => dict[k][lang];
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
