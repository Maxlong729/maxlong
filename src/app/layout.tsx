import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Max · maxlong.me",
  description:
    "万易智能创始人，AI 创业者 / 产品经理 / 投资人。创业 8 年，All in AI。易拍AI、AI 教育与培训。",
  keywords: ["Max", "万易智能", "AI创业", "易拍AI", "武汉"],
  authors: [{ name: "Max", url: "https://maxlong.me" }],
  openGraph: {
    title: "Max · maxlong.me",
    description: "万易智能创始人，AI 创业者。创业 8 年，All in AI。",
    url: "https://maxlong.me",
    siteName: "maxlong.me",
    locale: "zh_CN",
    type: "website",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-[var(--bg)] text-[var(--text)] selection:bg-violet-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
