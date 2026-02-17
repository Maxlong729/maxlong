# maxlong.me · 个人主页

极简个人主页，Next.js + Tailwind + App Router。移动端优先，适配微信内置浏览器。

## 开发时：改完代码、刷新浏览器就能看到变化

**请用开发模式**，不要用生产模式：

```bash
npm run dev
```

然后用浏览器打开 **http://localhost:3000** 或 **http://192.168.31.50:3000**。在 Cursor 里改完代码保存后，到浏览器里**刷新一次**，就会看到最新效果。

> 若用的是 `npm run start`（生产模式），改代码后刷新不会变，必须先 `npm run build` 再重新 `npm run start`。开发阶段请一直用 `npm run dev`。

## 微信二维码

将你的微信二维码图片放到 **`public/wechat.png`**，页面「联系」区块会自动展示。若未放置，会显示占位提示。

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
