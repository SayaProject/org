import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import avatarSrc from "@/assets/avatar.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const TELEGRAM_URL = "https://t.me/sexyafraid";
const GITHUB_URL = "https://github.com/shnwazdeveloper";
const LINKEDIN_URL = "https://www.linkedin.com/in/shnwazdev/";


type Lang = "en" | "ru";

type Project = {
  title: string;
  meta: string;
  image: string;
  fallback: string;
  tint: string;
  primaryHref: string;
  website?: { label: string; href: string };
  source?: { label: string; href: string };
  description: { en: string; ru: string };
};

const projects: Project[] = [
  {
    title: "SayaRestrictedBot",
    meta: "telegram · bot",
    image:
      "https://cdn5.telesco.pe/file/sGTpoc3pE0RXP9Ld9pNdlOZCl5yGlRHEyl0XsoTDmT5Gz6tQkQ-xxiLeyVOuC_qxoZBkXK5tcTazA0cKY5SUM2u9mf0lR3XNDR1vnEkKxRed9Z3exT-Grst3ku8IRFrZ7kT9qM2R_5Bp9VyP5SCdOGthLyJH7oGPTR_flL16KxPWiTbQi3liWUMkMCZDldtlHO9CpqUels8--PmIZi_h9iT8BvCGix8XZ8UcY9t-W_K_GBeMRf5ku92TTjOKWrZoIGvBPE-3owvQyhXioMZOXW5-GgG8s-VDuHxUYyM6vAlbjR6Ti1L4okb8EX63McLvu9XNJWnDD-9vhTe9YPoINg.jpg",
    fallback: "SR",
    tint: "205 70% 55%",
    primaryHref: "https://t.me/SayaRestrictedBot",
    description: {
      en: "A Telegram bot that saves and forwards content from restricted channels and groups — quick, private, and rate-limit aware.",
      ru: "Телеграм-бот для сохранения контента из закрытых каналов и групп — быстро, приватно и без лишних лимитов.",
    },
  },
  {
    title: "Lyra Music",
    meta: "android · material you",
    image: "https://shnwazx.github.io/lyramusic/favicon.ico",
    fallback: "Ly",
    tint: "280 55% 60%",
    primaryHref: "https://shnwazx.github.io/lyramusic/",
    website: { label: "shnwazx.github.io/lyramusic", href: "https://shnwazx.github.io/lyramusic/" },
    source: { label: "github.com/shnwazdeveloper/lyra-music", href: "https://github.com/shnwazdeveloper/lyra-music" },
    description: {
      en: "A Material You Android music player based on OpenTune — offline downloads, synced lyrics, Android Auto, zero ads.",
      ru: "Android-плеер в стиле Material You на базе OpenTune — офлайн-загрузки, синхронизированные тексты, Android Auto, без рекламы.",
    },
  },
  {
    title: "Saya Project",
    meta: "org · telegram tools & APIs",
    image: "https://avatars.githubusercontent.com/u/286493968?v=4",
    fallback: "Sa",
    tint: "18 55% 55%",
    primaryHref: "https://sayaproject.org",
    website: { label: "sayaproject.org", href: "https://sayaproject.org" },
    source: { label: "github.com/SayaProject", href: "https://github.com/SayaProject" },
    description: {
      en: "My org building modern Telegram-first tools, bots and APIs. 24+ open repos, everything I ship for the Telegram ecosystem lives under this roof.",
      ru: "Моя организация — современные инструменты, боты и API для Telegram. 24+ открытых репозитория, всё, что я делаю для Telegram, живёт здесь.",
    },
  },
];

const copy = {
  en: {
    headlinePre: "Hi, I'm",
    headlineName: "SHNWAZDEV",
    headlinePost: ". I design and build modern, honest interfaces for people who care about the details.",
    intro: (
      <>
        Self-taught UI designer and front-end developer based in{" "}
        <span className="font-medium text-foreground">Bihar, India</span>. Working with
        React, TypeScript, Tailwind and Figma to turn quiet ideas into products people
        actually enjoy using.
      </>
    ),
    doingTitle: "What I'm doing",
    doing: (
      <>
        <p>
          Most of my time goes into <span className="font-medium text-foreground">Telegram-first</span>{" "}
          tools, small Android apps and side experiments. I ship under my org{" "}
          <a href="https://sayaproject.org" target="_blank" rel="noopener noreferrer" className="link-underline text-foreground">Saya Project</a>{" "}
          and mirror everything on{" "}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="link-underline text-foreground">GitHub</a>.
        </p>
        <p className="mt-4">
          Stack stays boring on purpose: <span className="font-medium text-foreground">TypeScript</span>,{" "}
          <span className="font-medium text-foreground">React</span>,{" "}
          <span className="font-medium text-foreground">Node</span>,{" "}
          <span className="font-medium text-foreground">Kotlin</span>. Boring tools, careful details.
        </p>
      </>
    ),
    workTitle: "Selected work",
    aboutTitle: "About",
    contactTitle: "Get in touch",
    contactLead:
      "Best over Telegram for anything casual, email for briefs and longer conversations. I usually reply within a day.",
    footer: "© 2025 SHNWAZDEV.",
  },
  ru: {
    headlinePre: "Привет, я",
    headlineName: "SHNWAZDEV",
    headlinePost: ". Проектирую и разрабатываю современные, честные интерфейсы для тех, кто ценит детали.",
    intro: (
      <>
        Самоучка — UI-дизайнер и фронтенд-разработчик из{" "}
        <span className="font-medium text-foreground">Бихара, Индия</span>. Работаю с
        React, TypeScript, Tailwind и Figma — превращаю тихие идеи в продукты, которыми
        приятно пользоваться.
      </>
    ),
    doingTitle: "Чем занимаюсь",
    doing: (
      <>
        <p>
          Основное время уходит на <span className="font-medium text-foreground">инструменты вокруг Telegram</span>,
          небольшие Android-приложения и сайд-эксперименты. Всё это выходит под моей
          организацией{" "}
          <a href="https://sayaproject.org" target="_blank" rel="noopener noreferrer" className="link-underline text-foreground">Saya Project</a>{" "}
          и дублируется на{" "}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="link-underline text-foreground">GitHub</a>.
        </p>
        <p className="mt-4">
          Стек намеренно скучный: <span className="font-medium text-foreground">TypeScript</span>,{" "}
          <span className="font-medium text-foreground">React</span>,{" "}
          <span className="font-medium text-foreground">Node</span>,{" "}
          <span className="font-medium text-foreground">Kotlin</span>. Скучные инструменты, аккуратные детали.
        </p>
      </>
    ),
    workTitle: "Избранные проекты",
    aboutTitle: "Обо мне",
    contactTitle: "Связаться",
    contactLead:
      "Telegram — для всего неформального, почта — для брифов и долгих разговоров. Обычно отвечаю в течение дня.",
    footer: "© 2025 SHNWAZDEV.",
  },
};

const about = {
  en: {
    dropCap: "S",
    first:
      "tarted young, editing sites and copying tutorials with too much free time. Then came PHP, then Telegram bots, then the whole Telegram ecosystem I still live inside today.",
    second: (
      <>
        Thousands of people use something I wrote — mostly through bots and small tools
        that quietly do one job well. Not chasing trends, just trying to get better at
        the same handful of things every year.
      </>
    ),
    third: (
      <>
        The main focus now is my org{" "}
        <a href="https://sayaproject.org" target="_blank" rel="noopener noreferrer" className="link-underline text-foreground">Saya Project</a> —
        modern Telegram-first tools, APIs and bots — plus Android work like{" "}
        <a href="https://shnwazx.github.io/lyramusic/" target="_blank" rel="noopener noreferrer" className="link-underline text-foreground">Lyra Music</a>,
        a Material You player I ship for fun.
      </>
    ),
  },
  ru: {
    dropCap: "Н",
    first:
      "ачал рано — редактировал сайты и копировал туториалы, когда времени было слишком много. Потом PHP, потом Telegram-боты, потом вся экосистема Telegram, в которой живу до сих пор.",
    second: (
      <>
        Тем, что я пишу, пользуются тысячи людей — в основном через ботов и маленькие
        тулзы, которые тихо делают одно дело хорошо. Не гоняюсь за трендами, просто
        каждый год пытаюсь стать лучше в одном и том же наборе вещей.
      </>
    ),
    third: (
      <>
        Сейчас основной фокус — моя организация{" "}
        <a href="https://sayaproject.org" target="_blank" rel="noopener noreferrer" className="link-underline text-foreground">Saya Project</a>:
        современные Telegram-first инструменты, API и боты, плюс Android-проекты вроде{" "}
        <a href="https://shnwazx.github.io/lyramusic/" target="_blank" rel="noopener noreferrer" className="link-underline text-foreground">Lyra Music</a> —
        Material You плеера, который делаю для души.
      </>
    ),
  },
};

function Home() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "ru") setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = copy[lang];
  const a = about[lang];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-2xl px-6 pt-16 pb-24 sm:pt-24">
        <div className="flex items-start justify-between">
          <img
            src={avatarSrc}
            alt="Portrait of SHNWAZDEV"
            width={80}
            height={80}
            className="h-20 w-20 rounded-full object-cover ring-1 ring-border"
          />
          <LangToggle lang={lang} onChange={setLang} />
        </div>

        <h1 className="mt-10 font-serif text-[2.35rem] leading-[1.1] tracking-tight sm:text-5xl">
          {t.headlinePre}{" "}
          <span className="italic text-accent">{t.headlineName}</span>
          {t.headlinePost}
        </h1>

        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">{t.intro}</p>

        <Divider />


        <Section title={t.doingTitle}>{t.doing}</Section>

        <Divider />

        {/* Selected work */}
        <Section title={t.workTitle}>
          <ul className="space-y-8 not-prose">
            {projects.map((p) => (
              <li key={p.title}>
                <div className="work-card">
                  <a
                    href={p.primaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-16 w-16 overflow-hidden rounded-2xl ring-1 ring-border"
                    style={{ backgroundColor: `hsl(${p.tint})` }}
                    aria-label={p.title}
                  >
                    <ProjectImage src={p.image} fallback={p.fallback} title={p.title} />
                  </a>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <a
                        href={p.primaryHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-serif text-lg font-semibold text-foreground link-underline"
                      >
                        {p.title}
                      </a>
                      <span className="text-sm text-muted-foreground">{p.meta}</span>
                    </div>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
                      {p.description[lang]}
                    </p>
                    {(p.website || p.source) && (
                      <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-muted-foreground">
                        {p.website && (
                          <a
                            href={p.website.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 link-underline"
                          >
                            <IconGlobe /> {p.website.label}
                          </a>
                        )}
                        {p.source && (
                          <a
                            href={p.source.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 link-underline"
                          >
                            <IconGitHub /> {p.source.label}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Divider />

        {/* About with drop cap */}
        <Section title={t.aboutTitle}>
          <p className="dropcap">
            <span className="dropcap-letter" aria-hidden="true">{a.dropCap}</span>
            {a.first}
          </p>
          <p className="mt-4">{a.second}</p>
          <p className="mt-4">{a.third}</p>
        </Section>

        <Divider />

        {/* Get in touch — icon only */}
        <Section title={t.contactTitle}>
          <p>{t.contactLead}</p>
          <ul className="mt-6 flex flex-wrap items-center gap-3 not-prose">
            <li>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="icon-btn"
              >
                <IconTelegram />
              </a>
            </li>
            <li>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="icon-btn"
              >
                <IconGitHub />
              </a>
            </li>
            <li>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="icon-btn"
              >
                <IconLinkedIn />
              </a>
            </li>
          </ul>
        </Section>

        <footer className="mt-20 text-xs text-muted-foreground">{t.footer}</footer>
      </main>
    </div>
  );
}

function LangToggle({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
  const langs: Lang[] = ["en", "ru"];
  const activeIndex = langs.indexOf(lang);
  return (
    <div
      role="group"
      aria-label="Language"
      className="relative inline-flex items-center rounded-full border border-border/70 bg-transparent p-0.5 text-xs font-medium backdrop-blur-sm"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0.5 bottom-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-foreground/10 ring-1 ring-foreground/15 transition-transform duration-300 ease-out"
        style={{ transform: `translateX(${activeIndex * 100}%)` }}
      />
      {langs.map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => onChange(l)}
            aria-pressed={active}
            className={
              "relative z-10 px-3 py-1 rounded-full uppercase tracking-wide transition-colors duration-200 " +
              (active ? "text-foreground" : "text-muted-foreground hover:text-foreground")
            }
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}


function ProjectImage({ src, fallback, title }: { src: string; fallback: string; title: string }) {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div className="flex h-full w-full items-center justify-center font-serif text-xl text-primary-foreground">
        {fallback}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={title}
      loading="lazy"
      onError={() => setErrored(true)}
      className="h-full w-full object-cover"
    />
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="font-serif text-2xl italic font-semibold text-foreground">{title}</h2>
      <div className="mt-5 text-[17px] leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function Divider() {
  return <hr className="mt-14 border-border" />;
}

/* ---------- Icons ---------- */
function IconTelegram() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M9.78 15.27 9.6 19a.6.6 0 0 0 1 .43l2.15-2.07 4.45 3.26c.82.45 1.4.22 1.6-.76l2.9-13.6c.28-1.24-.45-1.72-1.24-1.43L3.4 10.16c-1.22.48-1.2 1.17-.21 1.48l4.35 1.36 10.09-6.36c.47-.28.9-.13.55.18Z" />
    </svg>
  );
}
function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.26 5.69.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}
function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.7 3 2.7 15 0 18M12 3c-2.7 3-2.7 15 0 18" />
    </svg>
  );
}
