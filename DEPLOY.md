# 部署指南 - maxlong.me

## 部署到 Vercel（推荐）

### 前置准备

1. **确保代码已提交到 Git**
   ```bash
   git add .
   git commit -m "准备部署"
   ```

2. **推送到远程仓库**（GitHub/GitLab/Bitbucket）
   ```bash
   git push origin main
   ```

### Vercel 部署步骤

#### 方法一：通过 Vercel Dashboard（推荐）

1. **访问 Vercel**
   - 打开 https://vercel.com
   - 使用 GitHub/GitLab/Bitbucket 账号登录

2. **导入项目**
   - 点击 "Add New Project"
   - 选择你的 Git 仓库（maxlong）
   - Framework Preset 选择 "Next.js"（会自动检测）
   - Root Directory 保持默认
   - Build Command: `npm run build`
   - Output Directory: `.next`（Next.js 默认）
   - Install Command: `npm install`

3. **配置环境变量**（如果有）
   - 在 Environment Variables 中添加需要的环境变量

4. **部署**
   - 点击 "Deploy"
   - 等待构建完成（通常 1-2 分钟）

5. **配置域名 maxlong.me**
   - 部署完成后，进入项目设置
   - 点击 "Domains"
   - 添加域名：`maxlong.me`
   - 按照提示配置 DNS：
     - 添加 CNAME 记录：`@` → `cname.vercel-dns.com`
     - 或添加 A 记录：`@` → Vercel 提供的 IP 地址
   - 等待 DNS 生效（通常几分钟到几小时）

#### 方法二：通过 Vercel CLI

1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署**
   ```bash
   vercel
   ```
   - 首次部署会询问项目配置，按提示选择
   - 生产环境部署：`vercel --prod`

4. **配置域名**
   ```bash
   vercel domains add maxlong.me
   ```
   然后按照提示配置 DNS 记录

### DNS 配置说明

在域名注册商（如 Cloudflare、Namecheap、GoDaddy 等）配置：

**选项 1：CNAME 记录（推荐）**
```
类型: CNAME
名称: @
值: cname.vercel-dns.com
```

**选项 2：A 记录**
```
类型: A
名称: @
值: 76.76.21.21（Vercel 提供的 IP）
```

**WWW 子域名（可选）**
```
类型: CNAME
名称: www
值: cname.vercel-dns.com
```

### 验证部署

1. 部署完成后，Vercel 会提供一个预览 URL（如 `maxlong-xxx.vercel.app`）
2. DNS 配置生效后，访问 `https://maxlong.me` 应该能看到网站
3. Vercel 会自动配置 SSL 证书（HTTPS）

### 自动部署

配置完成后，每次推送到 Git 主分支，Vercel 会自动重新部署。

## 其他部署选项

### Netlify

1. 访问 https://netlify.com
2. 导入 Git 仓库
3. Build command: `npm run build`
4. Publish directory: `.next`
5. 添加域名 `maxlong.me` 并配置 DNS

### 自托管（需要服务器）

1. 在服务器上安装 Node.js 18+
2. 克隆代码并安装依赖
3. 构建项目：`npm run build`
4. 启动服务：`npm start`
5. 配置 Nginx 反向代理
6. 配置 SSL 证书（Let's Encrypt）

## 故障排查

- **DNS 未生效**：等待 24-48 小时，或检查 DNS 配置是否正确
- **构建失败**：检查 `package.json` 中的依赖和构建脚本
- **图片不显示**：确保 `public/` 目录下的图片文件已提交到 Git
- **样式问题**：确保 Tailwind CSS 配置正确

## 注意事项

- 确保 `public/` 目录下的图片（avatar.png, wechat.png, wechat-video.png）已提交到 Git
- 生产环境会自动优化图片和资源
- Vercel 免费版有使用限制，但通常足够个人项目使用
