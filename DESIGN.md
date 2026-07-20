---

# DESIGN.md — Ali Askari Portfolio
> Complete spec for Claude Code to build a production Next.js 14 website.

## 1. Owner & Contact

| Field | Value |
|---|---|
| Name | Ali Askari |
| Role | Agentic AI Developer · Full-Stack Engineer · Creative Brand Designer |
| Location | Karachi, Pakistan |
| Email | syedaliaskrizaidi1@gmail.com |
| GitHub | https://github.com/AliAskariGithub |
| LinkedIn | https://www.linkedin.com/in/ali-askari-355257308 |
| Twitter/X | https://x.com/Syed_Ali_Askari |
| Agency | http://www.nexugemagency.com |

## 2. Tech Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · react-feather · @fontsource/satoshi

## 3. Routes

`/` · `/projects` · `/experience` · `/tools` · `/blog` · `/blog/[slug]`

## 4. Design Tokens

### Colors (use as Tailwind config + CSS vars)

```
bg:            #151312      /* page background */
white:         #ffffff
gray:          #998f8f      /* body text */
dark-gray:     #6a6b6e      /* muted/meta text */
soft-gray:     rgba(182,180,189,0.20)  /* input fill */
purple:        #9D4CCC      /* PRIMARY accent */
green:         #C5FF41      /* SECONDARY accent */
shadow-card:   0px 18px 50px -24px rgba(157,76,204,0.75)
shadow-profile:0px 30px 80px -46px rgba(157,76,204,0.55)
```

### Typography

| Role | Font | Weight |
|---|---|---|
| H1, H2 | Poppins | 700 |
| H3–H6 | Poppins | 600 |
| Body | Poppins | 400 |
| Buttons | Satoshi | 700 |
| Stats/meta | Inter | 400 |

Scale: H1 clamp(48px,7vw,96px) ls:-0.04em · H2 clamp(36px,5vw,72px) ls:-0.03em · p 16px lh:1.6 · sm 13px. All headings uppercase white.

### Spacing

Section padding-top: 120px desktop, 80px tablet, 60px phone. Page top: 160px. Max-width: 1140px centered. Card gap: 20–24px.

### Radius

inputs/buttons: 8px · cards/chips: 10px · profile card/large: 16px

## 5. Global Layout Shell

```
<body bg="#151312">
  <NavBar />           fixed top-[30px] centered pill z-10
  <main pt-[160px]>
    <div max-w-[1140px] mx-auto flex gap-[100px]>
      <aside w-[344px] sticky top-10>   ← desktop only; stacks on tablet/phone
        <StickyProfile />
      </aside>
      <div flex-1 flex-col>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <ToolsSection />
        <BlogSection />
        <ContactSection />
      </div>
    </div>
  </main>
  <Footer />
  <FloatingCTAs />     fixed bottom-right z-10, hidden on phone
</body>
```

Breakpoints: ≥1440 flex-row, 810–1439 flex-col (profile full-width top), ≤809 flex-col px-5 (FloatingCTAs hidden).

## 6. NavBar

Fixed centered pill. Fill `rgba(255,255,255,0.03)` + backdrop-blur. Radius 16px, h:48px, px:20px, gap:18px. Each nav item: 36×36px react-feather icon button. Hover: scale 1.1, color #9D4CCC. Active (usePathname): purple glow.

| Icon | Label | href |
|---|---|---|
| Home | Home | / |
| Folder | Projects | /projects |
| Briefcase | Experience | /experience |
| Tool | Tools | /tools |
| Edit | Thoughts | /blog |

## 7. FloatingCTAs (hidden on phone)

```
bottom:110px right:20px → "Email Me"  bg:#9D4CCC  text:white  → mailto:syedaliaskrizaidi1@gmail.com
bottom: 66px right:20px → "GitHub"   bg:#C5FF41  text:black  → https://github.com/AliAskariGithub
```
h:36px radius:8px Satoshi 700 14px. Hover: translateY(-3px) scale(1.03).

## 8. Sticky Profile Card

White card. Desktop: w:344px h:640px, sticky top:40px. Tablet: full-width horizontal. Phone: full-width centered stack.

```
fill #ffffff · radius 16px · padding 30px 20px · gap 24px · box-shadow var(--shadow-profile)
```

Contents (top→bottom):
1. Purple (#9D4CCC) decorative SVG arc ornament — absolute top-left, clipped
2. Photo `/public/profile.jpg` — 240×284px radius:16px (next/image)
3. "Ali Askari" — Poppins 700 36px #000000 text-center
4. "Agentic AI Developer building intelligent software with clean code and creative design." — Poppins 500 18px #6a6b6e max-w:300px text-center
5. Social icons (react-feather, gap:16px): Github→https://github.com/AliAskariGithub · Twitter→https://x.com/Syed_Ali_Askari · Linkedin→https://www.linkedin.com/in/ali-askari-355257308 · Mail→mailto:syedaliaskrizaidi1@gmail.com
6. Purple arc ornament bottom-left, clipped

## 9. Hero Section

H1: "AGENTIC AI DEVELOPER" — Poppins 700 white clamp(48px,7vw,96px) uppercase ls:-0.04em

Subtext: "I'm Ali Askari, a Karachi-based full-stack engineer and creative brand designer building intelligent software, automation systems, and polished digital experiences." — Poppins 400 16px #998f8f max-w:460px

Stats row (flex-row gap-[40px]):

```
18 / KARACHI PAKISTAN    20+ / APPS & DEMOS    5+ / CLIENTS SERVED
```
Number: Poppins 700 white. Labels: Poppins 400 10px uppercase muted.

Skill cards (flex-row gap-[20px], radius:10px, padding:24px):

**Card 1 — Purple #9D4CCC, white text:** icon `Zap` 24px → "AGENTIC AI, AUTOMATION, FULL-STACK SYSTEMS" → ArrowButton white → /projects. box-shadow: shadow-card. Hover: translateY(-6px) scale(1.02).

**Card 2 — Green #C5FF41, black text:** icon `Code` 24px → "NEXT.JS, FASTAPI, POSTGRESQL, FIGMA" → ArrowButton black → /tools. Hover: translateY(-6px) scale(1.02).

ArrowButton: 32px circle, Feather ArrowRight. Hover: rotate 45deg.

## 10. Projects Section

H2: "FEATURED PROJECTS"

Vertical list, 1px dividers `rgba(255,255,255,0.07)`.

ProjectCard: `[img 80×80 r:8] | Title H3 Poppins 600 white 18px | ArrowButton purple → href` `| Description Poppins 400 #998f8f 14px |`

| Title | Description | Image | href |
|---|---|---|---|
| AI Employee | Autonomous task agent | https://framerusercontent.com/images/4mYEXU91rLBNKIW9k6hZh16l7Q.jpeg | https://github.com/AliAskariGithub |
| AI Todo Application | Full-stack AI task app | https://framerusercontent.com/images/5Ra4AFZmEJOkMGLAEjkRXt2oqF4.png | https://github.com/AliAskariGithub |
| AI-Spec Driven Book | RAG learning platform | https://framerusercontent.com/images/PhIxX38mhdPQ9JAYHuioKv54qpc.png | https://github.com/AliAskariGithub |
| Fullstack Foodily | Hackathon food ordering app | https://framerusercontent.com/images/GyxvLZ0U5MeFKnTaiObmffY.png | https://github.com/AliAskariGithub |
| Quizzey App | React quiz experience | https://framerusercontent.com/images/O5AkTWJ7unexJviT0W7lqQF43bQ.png | https://github.com/AliAskariGithub |
| NexuGem Agency | Web, branding, SEO | https://framerusercontent.com/images/tRZviFpeGXyuMVmVqGj8O1XPpo.webp | http://www.nexugemagency.com |
| OpenClaw Learning | Agent framework exploration | https://framerusercontent.com/images/QYuBadXuZMyXPEyAxGrVh7iNaU.jpg | https://github.com/AliAskariGithub |
| Baby Steps Tutorials | Beginner dev lessons | https://framerusercontent.com/images/7kBqJ0RIpManswToNr6JFv8Jv8.png | https://github.com/AliAskariGithub |

## 11. Experience Section

H2: "MY EXPERIENCE"

JobCard: `Company H3 Poppins 600 white 18px | Date muted 12px right | Description p #998f8f 14px | ArrowButton purple →`

| Company | Date | Description | href |
|---|---|---|---|
| NexuGem Agency | 2025–Present | Founded and lead a 5-person digital agency delivering web development, branding, SEO, digital marketing, and video editing for small businesses. | http://www.nexugemagency.com |
| Freelance Developer & Designer | 2024–Present | Built websites, AI tools, logos, and brand assets for clients across LinkedIn, X, Facebook, and Instagram. | https://www.linkedin.com/in/ali-askari-355257308 |
| Lead Student, GIAIC | 2024–2025 | Mentored new learners in Python, web development, and AI fundamentals through the Governor Initiative for AI, Web 3.0 & Metaverse. | https://github.com/AliAskariGithub |
| Graphic & Brand Designer | 2024–Present | Placed 3rd in a national graphic design contest and continue creating logos, brand identities, and social media graphics. | https://github.com/AliAskariGithub |

## 12. Tools Section

H2: "CORE TOOLS"

Grid: 3-col desktop, 2-col tablet, 1-col phone, gap:10px.

ToolCard: radius:10px padding:16px fill:rgba(182,180,189,0.08) border:1px solid rgba(255,255,255,0.06). `[logo 40×40] Title Poppins 600 white 16px | Description Poppins 400 #998f8f 13px`

| Title | Description | Logo | href |
|---|---|---|---|
| Next.js | React framework | https://framerusercontent.com/images/ay9QMj9AVG8gxBjilndTmDdmeQ.png | https://nextjs.org/ |
| FastAPI | Python APIs | https://framerusercontent.com/images/SvTAZZonMqViqF7fP6GK7CWmL84.png | https://fastapi.tiangolo.com/ |
| PostgreSQL | Database layer | https://framerusercontent.com/images/U1s9zT0tOtXbjdWvMrIgPFH0TyM.png | https://www.postgresql.org/ |
| OpenAI | AI integrations | https://framerusercontent.com/images/MViiiLyIvL8tvy7d1XtOsM32o.png | https://openai.com/ |
| Figma | UI and branding | https://framerusercontent.com/images/iP5FTKjb84EsPLiEwbrAY7NEy44.png | https://www.figma.com/ |
| Docker | DevOps basics | https://framerusercontent.com/images/MnQFYNLxlgT4EvY2ctcJfHAXZA.png | https://www.docker.com/ |

## 13. Blog Section

H2: "AI & DESIGN THOUGHTS". Show 3 on home, all 5 on /blog. "View all →" link.

BlogCard: `Title H3 white 18px | Date muted 12px right | Summary p #998f8f 14px line-clamp-2 | ReadTime · ArrowButton purple`

| Title | Slug | Date | ReadTime | Image | Summary |
|---|---|---|---|---|---|
| Building Agentic AI Systems | building-agentic-ai-systems | Apr 8, 2022 | 6 min | https://framerusercontent.com/images/a70g11CzlnQYCTEi1c802r8x1CE.jpg | Notes from building autonomous systems that reason, plan, and execute approved actions across real-world workflows. |
| Spec-Driven Full-Stack Development | spec-driven-full-stack-development | Mar 15, 2022 | 6 min | https://framerusercontent.com/images/SmKpJArNfpH0J4YgHNcqsyxuyEA.jpg | How I plan, build, and ship Next.js and FastAPI products with clear requirements and scalable architecture. |
| Designing With AI as a Material | designing-with-ai-as-a-material | Feb 28, 2022 | 8 min | https://framerusercontent.com/images/iwNXp5FbnVuonnC3boDtFbw8Mk.jpg | Thoughts on combining brand design, UX, and AI automation to create more useful digital experiences. |
| Teaching AI and Web Development | teaching-ai-and-web-development | Feb 6, 2022 | 6 min | https://framerusercontent.com/images/zOWx0eEsJcZm7ntGp0RzPSjE00.jpg | Lessons from mentoring new learners in Python, web development, and AI fundamentals at GIAIC. |
| Growing a Portfolio as a Young Builder | growing-a-portfolio-as-a-young-builder | Jan 12, 2022 | 6 min | https://framerusercontent.com/images/X45kreSZsm5DFF2be6T8o6YaJAQ.jpg | A personal reflection on projects, client work, design competitions, and staying consistent as a fast learner. |

## 14. Contact Section

H2: "LET'S BUILD TOGETHER"

Form fields (Framer-style spec):
```
[Name text]  [Email email]   ← flex-row gap-5
[Budget select: "Select…" | "<$3k" | "$3k–$5k" | "$5k–$10k" | ">$10k"]
[Message textarea resizable min-h:100px]
[Submit — full-width h:40px r:8px bg:#9D4CCC white Satoshi 700 14px]
```

Input style: bg `rgba(182,180,189,0.20)` · border none · h:40px · p:12px · Poppins 400 14px · color white · placeholder rgba(153,153,153,1) · focus border:1px solid #9D4CCC.
Label: Poppins 500 12px #888888, above each input via `<label>`.
Submit states: Default → Loading (spinner) → Success (green) → Error (red).
POST `{ name, email, budget, message }` to `/api/contact` — stub with console.log + return `{ ok:true }`.

## 15. Footer

`<footer>` full-width, padding:160px 0 80px. Centered text: **"Made by Ali Askari | Founder of NexuGem Agency"** — Poppins 400 13px #998f8f.

## 16. Inner Pages

- `/projects` — all 8 projects, same ProjectCard. H2: FEATURED PROJECTS.
- `/experience` — all 4 items, same JobCard. H2: MY EXPERIENCE.
- `/tools` — all 6 tools, same ToolCard. H2: CORE TOOLS.
- `/blog` — all 5 posts with thumbnail left (80×80 r:8) + content right. H2: AI & DESIGN THOUGHTS.
- `/blog/[slug]` — max-w:680px mx-auto. Hero image full-width max-h:360px. H1 title. Date+readtime muted. Body paragraphs from summary expanded.

## 17. Animations (Framer Motion)

Section entrance (whileInView, once:true, amount:0.35):
```ts
initial: { opacity:0, y:36, scale:0.98 }
animate: { opacity:1, y:0,  scale:1    }
transition: { duration:0.65, ease:[0.16,1,0.3,1] }
```

List stagger (projects/experience/tools): staggerChildren:0.04s
Each child: `initial:{opacity:0,y:20}` → `animate:{opacity:1,y:0}`

Hero/profile entrance: `initial:{opacity:0,y:-20}` → `animate:{opacity:1,y:0}` delay:0.2s

Skill card hover: `whileHover:{y:-6,scale:1.02}` `whileTap:{scale:0.98}` spring duration:0.45s bounce:0.25
Button hover: `whileHover:{y:-3,scale:1.03}` `whileTap:{scale:0.96}` spring duration:0.35s
ArrowButton hover: `whileHover:{rotate:45,scale:1.1}` spring stiffness:300

## 18. File Structure

```
/
├── app/
│   ├── layout.tsx          (fonts, metadata, NavBar, FloatingCTAs, body bg)
│   ├── page.tsx            (2-col shell + all 6 home sections)
│   ├── projects/page.tsx
│   ├── experience/page.tsx
│   ├── tools/page.tsx
│   ├── blog/page.tsx
│   ├── blog/[slug]/page.tsx
│   └── api/contact/route.ts
├── components/
│   ├── NavBar.tsx · StickyProfile.tsx · FloatingCTAs.tsx · Footer.tsx
│   ├── ArrowButton.tsx · SectionHeading.tsx
│   └── ProjectCard.tsx · JobCard.tsx · ToolCard.tsx · BlogCard.tsx · ContactForm.tsx
├── data/
│   └── projects.ts · experience.ts · tools.ts · blog.ts
├── public/profile.jpg
├── styles/globals.css
├── tailwind.config.ts
└── next.config.ts
```

## 19. Config Snippets

### tailwind.config.ts
```ts
extend: {
  colors: { bg:'#151312', purple:'#9D4CCC', green:'#C5FF41', gray:'#998f8f', 'dark-gray':'#6a6b6e' },
  fontFamily: { poppins:['Poppins','sans-serif'], satoshi:['Satoshi','sans-serif'], inter:['Inter','sans-serif'] },
  maxWidth: { content:'1140px' },
  boxShadow: { card:'0px 18px 50px -24px rgba(157,76,204,0.75)', profile:'0px 30px 80px -46px rgba(157,76,204,0.55)' },
}
```

### next.config.ts
```ts
images: { remotePatterns:[{ protocol:'https', hostname:'framerusercontent.com' }] }
```

### Key deps
```
next@^14.2  react@^18.3  framer-motion@^11  react-feather@^2  @fontsource/satoshi tailwindcss@^3.4 typescript@^5.4
```

## 20. SEO Metadata (app/layout.tsx)
```ts
title: 'Ali Askari — Agentic AI Developer'
description: 'Karachi-based Agentic AI Developer and Full-Stack Engineer building intelligent software, AI automation, and creative digital brands.'
twitter.creator: '@Syed_Ali_Askari'
og.url: 'https://aliaskari.dev'
```

## 21. Implementation Notes

1. Build order: config → globals.css → data files → leaf components → layout → pages
2. Use `next/image` for ALL image URLs (configure remotePatterns for framerusercontent.com)
3. `/public/profile.jpg` — place any placeholder headshot
4. `ContactForm` is `'use client'` with local useState for fields + submit state
5. Blog `[slug]` page: find post by slug from blogPosts array, render expanded body
6. NavBar uses `usePathname()` for active icon highlight
7. `FloatingCTAs` hidden on phone via `hidden md:flex`
8. Sticky profile: `lg:sticky lg:top-10` class, collapses to top-of-page on mobile
9. All external links: `target="_blank" rel="noopener noreferrer"`
10. ARIA: nav icons need `aria-label`, form inputs need `htmlFor`/`id` pairs