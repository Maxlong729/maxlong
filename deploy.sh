#!/bin/bash

# 自动部署脚本 - maxlong.me
# 使用方法: ./deploy.sh

set -e

echo "🚀 开始部署 maxlong.me 到 Vercel..."

# 检查是否已登录 Vercel
if ! npx vercel whoami &>/dev/null; then
    echo "⚠️  需要先登录 Vercel"
    echo "正在打开浏览器进行登录..."
    npx vercel login
fi

# 部署到生产环境
echo "📦 正在部署到生产环境..."
npx vercel --prod --yes

# 配置域名
echo "🌐 配置域名 maxlong.me..."
npx vercel domains add maxlong.me || echo "域名可能已存在或需要手动配置"

echo "✅ 部署完成！"
echo ""
echo "📝 下一步："
echo "1. 在 Vercel Dashboard 中确认部署状态"
echo "2. 在项目设置中添加域名 maxlong.me"
echo "3. 在域名注册商配置 DNS 记录："
echo "   - CNAME: @ → cname.vercel-dns.com"
echo "   - 或 A 记录: @ → Vercel 提供的 IP"
echo ""
echo "🔗 Vercel Dashboard: https://vercel.com/dashboard"
