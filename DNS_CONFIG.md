# DNS 配置说明 - maxlong.me

## 📋 Vercel 要求的 DNS 记录

根据 Vercel Dashboard 的提示，需要配置以下 DNS 记录：

### 1. 根域名 maxlong.me（A 记录）

```
类型: A
名称: @ (或留空，表示根域名)
值: 216.198.79.1
TTL: 3600 (或自动)
```

### 2. 子域名 www.maxlong.me（CNAME 记录）

```
类型: CNAME
名称: www
值: a163200077fcc0af.vercel-dns-017.com.
TTL: 3600 (或自动)
```

## 🔧 常见域名注册商配置步骤

### Cloudflare

1. 登录 Cloudflare Dashboard
2. 选择域名 `maxlong.me`
3. 进入 "DNS" → "Records"
4. 添加记录：
   - **A 记录**：
     - Type: `A`
     - Name: `@`
     - IPv4 address: `216.198.79.1`
     - Proxy status: 可以开启（橙色云朵）或关闭（灰色云朵）
   - **CNAME 记录**：
     - Type: `CNAME`
     - Name: `www`
     - Target: `a163200077fcc0af.vercel-dns-017.com.`
     - Proxy status: 可以开启或关闭
5. 保存

### Namecheap

1. 登录 Namecheap
2. 进入 "Domain List" → 选择 `maxlong.me` → "Manage"
3. 进入 "Advanced DNS"
4. 添加记录：
   - **A Record**：
     - Type: `A Record`
     - Host: `@`
     - Value: `216.198.79.1`
     - TTL: `Automatic`
   - **CNAME Record**：
     - Type: `CNAME Record`
     - Host: `www`
     - Value: `a163200077fcc0af.vercel-dns-017.com.`
     - TTL: `Automatic`
5. 保存（绿色对勾）

### GoDaddy

1. 登录 GoDaddy
2. 进入 "My Products" → 选择 `maxlong.me` → "DNS"
3. 添加记录：
   - **A Record**：
     - Type: `A`
     - Name: `@`
     - Value: `216.198.79.1`
     - TTL: `600`
   - **CNAME Record**：
     - Type: `CNAME`
     - Name: `www`
     - Value: `a163200077fcc0af.vercel-dns-017.com.`
     - TTL: `600`
4. 保存

### 阿里云（万网）

1. 登录阿里云控制台
2. 进入 "域名" → "解析设置" → 选择 `maxlong.me`
3. 添加记录：
   - **A 记录**：
     - 记录类型: `A`
     - 主机记录: `@`
     - 记录值: `216.198.79.1`
     - TTL: `600`
   - **CNAME 记录**：
     - 记录类型: `CNAME`
     - 主机记录: `www`
     - 记录值: `a163200077fcc0af.vercel-dns-017.com.`
     - TTL: `600`
4. 保存

### 腾讯云（DNSPod）

1. 登录腾讯云控制台
2. 进入 "域名注册" → "我的域名" → 选择 `maxlong.me` → "解析"
3. 添加记录：
   - **A 记录**：
     - 主机记录: `@`
     - 记录类型: `A`
     - 线路类型: `默认`
     - 记录值: `216.198.79.1`
     - TTL: `600`
   - **CNAME 记录**：
     - 主机记录: `www`
     - 记录类型: `CNAME`
     - 线路类型: `默认`
     - 记录值: `a163200077fcc0af.vercel-dns-017.com.`
     - TTL: `600`
4. 保存

## ✅ 验证配置

### 方法一：在 Vercel Dashboard 验证

1. 配置 DNS 后，等待几分钟
2. 回到 Vercel Dashboard → 项目 → Domains
3. 点击域名旁边的 "Refresh" 按钮
4. 如果配置正确，状态会从 "Invalid Configuration" 变为 "Valid"

### 方法二：使用命令行工具验证

```bash
# 检查 A 记录
dig maxlong.me A +short
# 应该返回: 216.198.79.1

# 检查 CNAME 记录
dig www.maxlong.me CNAME +short
# 应该返回: a163200077fcc0af.vercel-dns-017.com.
```

### 方法三：在线工具验证

- https://dnschecker.org - 输入域名和记录类型检查
- https://mxtoolbox.com - DNS 查询工具

## ⏱️ DNS 生效时间

- **通常**: 几分钟到 1 小时
- **最长**: 24-48 小时（取决于 TTL 和 DNS 缓存）
- **建议**: 配置后等待 10-30 分钟再刷新 Vercel

## ⚠️ 常见问题

### 1. 配置后仍然显示 "Invalid Configuration"

- **原因**: DNS 记录还未生效
- **解决**: 等待更长时间（最多 48 小时），或检查记录值是否正确

### 2. 找不到 "@" 或根域名选项

- **解决**: 使用 `@`、留空、或直接输入域名 `maxlong.me`（取决于注册商）

### 3. CNAME 值末尾的点

- **注意**: CNAME 值 `a163200077fcc0af.vercel-dns-017.com.` 末尾有一个点（`.`），这是正确的，不要删除

### 4. 已有其他 A 记录或 CNAME 记录

- **解决**: 删除旧的冲突记录，只保留 Vercel 要求的记录

## 📞 需要帮助？

如果配置后 24 小时仍然无效，可以：
1. 检查 DNS 记录值是否完全匹配（包括末尾的点）
2. 确认域名注册商的 DNS 服务器设置正确
3. 联系域名注册商客服确认配置

## 🎉 配置成功后的效果

- Vercel Dashboard 显示 "Valid" 状态
- 可以通过 https://maxlong.me 访问网站
- 可以通过 https://www.maxlong.me 访问网站（会自动重定向）
- Vercel 会自动配置 SSL 证书（HTTPS）
