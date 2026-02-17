import Image from "next/image";
import { ContactBlock } from "@/components/ContactBlock";

const EXPERIENCE = [
  "2016-2017：打工丨腾讯/去哪儿/百度产品经理",
  "2018-2019：创业丨创办短视频平台（险峰投资）",
  "2019-2023：创业丨经营直播电商和私域电商业务",
  "2023-2025：创业丨经营针对职场人的 AI 培训业务",
  "2026-至今：创业丨正在陆续推出多款 AI Agent 产品",
];

const NOW_ITEMS = [
  { title: "易拍AI", desc: "泛营销视频创作工具，面向个人创作者和中小商家" },
  { title: "Boli bot", desc: "更懂用户的AI搭子，软硬一体，长期记忆和陪伴" },
  { title: "AI 培训业务", desc: "AIGC 内容创作，自媒体副业变现，智能体搭建" },
];

const BELIEFS = [
  "相信",
  "利他",
  "感恩",
  "敬畏",
  "长期主义",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-mesh">
      {/* 顶部留白 */}
      <div className="h-4 md:h-6 shrink-0" aria-hidden />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-4 md:pt-6 pb-8 md:pb-12 safe-top">
        {/* Hero：紧凑，不占满屏 */}
        <header className="pb-4 md:pb-5 border-b border-white/10 mt-2 md:mt-4 flex flex-col sm:flex-row sm:items-end gap-5 sm:gap-6">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 sm:flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 animate-fade-in bg-white/5">
            <Image
              src="/avatar.png"
              alt="Max"
              fill
              sizes="(min-width: 640px) 96px, 80px"
              className="object-cover"
              priority
              unoptimized
            />
          </div>
          <div className="min-w-0 flex-1 flex flex-col sm:h-24 sm:justify-end">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-y-2 sm:gap-x-4">
              <div>
                <h1 className="flex items-baseline gap-2 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] animate-fade-in animation-delay-100">
                  <span className="text-gradient">Max</span>
                  <span className="text-xl sm:text-2xl md:text-3xl text-[var(--text)]/90 font-normal -translate-y-[0.08em] inline-block">龙晓康</span>
                </h1>
                <p className="mt-0.5 sm:mt-0 text-lg sm:text-xl text-[var(--text)]/90 font-medium animate-fade-in animation-delay-200">
                  万易智能 / 顺众传媒 创始人
                </p>
              </div>
              <div className="flex flex-wrap gap-2 justify-start sm:justify-end sm:items-end">
                {["创业 8 年", "INFJ", "AGI 降临派", "Base 武汉"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-white/10 border border-white/10 px-3 py-1.5 text-sm font-medium text-[var(--text)] backdrop-blur-sm hover:bg-white/15 transition-all duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* 个人经历 + 经营项目：桌面端双栏 */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 py-5 md:py-6">
          <section id="experience" className="relative">
            <p className="section-label">个人经历</p>
            <ul className="relative">
              <span className="timeline-track" aria-hidden />
              {EXPERIENCE.map((item, i) => (
                <li key={i} className="flex items-center gap-4 pb-4 last:pb-0">
                  <span className="relative w-4 h-3 shrink-0">
                    <span className="timeline-node" aria-hidden />
                  </span>
                  <span className="text-[var(--text)]/90 text-sm sm:text-base leading-relaxed min-w-0 pt-2">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section id="now">
            <p className="section-label">经营项目</p>
            <div className="flex flex-col gap-3 md:gap-2.5">
              {NOW_ITEMS.map(({ title, desc }) => (
                <div
                  key={title}
                  className="group rounded-xl glass glass-hover px-4 py-3 md:py-2.5 transition-all duration-200"
                >
                  <h3 className="text-base font-semibold text-[var(--text)] group-hover:text-violet-300 transition-colors">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--text-muted)] leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* 个人理念：一行/多行紧凑 */}
        <section id="beliefs" className="py-8 md:py-10 border-t border-white/10">
          <p className="section-label">个人理念</p>
          <div className="flex flex-wrap gap-2">
            {BELIEFS.map((line) => (
              <span
                key={line}
                className="rounded-lg glass border border-white/5 px-4 py-2.5 text-sm text-[var(--text)]/90 hover:border-white/10 transition-colors duration-200"
              >
                {line}
              </span>
            ))}
          </div>
        </section>

        {/* 联系：与上方同宽，紧凑 */}
        <ContactBlock />
      </div>
    </div>
  );
}
