"use client";

import Image from "next/image";
import { useState } from "react";

const QR_ITEMS = [
  { src: "/wechat.png", alt: "个人微信", label: "个人微信" },
  { src: "/wechat-video.png", alt: "视频号", label: "视频号" },
];

export function ContactBlock() {
  const [errors, setErrors] = useState<Record<number, boolean>>({});

  const setError = (i: number) => setErrors((prev) => ({ ...prev, [i]: true }));

  return (
    <section
      id="contact"
      className="pt-8 md:pt-10 border-t border-white/10 safe-bottom"
    >
      <p className="section-label">建联交流</p>
      <div className="flex flex-wrap justify-center gap-12 md:gap-24 rounded-xl gradient-border p-8 sm:p-10">
        {QR_ITEMS.map((item, i) => (
          <div key={item.src} className="flex flex-col items-center flex-shrink-0">
            <div className="relative w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] rounded-xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
              {!errors[i] ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="110px"
                  className="object-contain"
                  unoptimized
                  onError={() => setError(i)}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-[var(--text-muted)] text-xs text-center px-2">
                  {"请将二维码放入 public" + item.src}
                </div>
              )}
            </div>
            <p className="mt-2 text-xs text-[var(--text-muted)] text-center">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
