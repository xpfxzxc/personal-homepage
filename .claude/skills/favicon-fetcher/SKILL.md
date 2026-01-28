---
name: favicon-fetcher
description: 批量抓取网站 favicon 图标。根据用户给定的名称（如 GitHub、Google、Notion），自动查找官网并下载 favicon。使用场景：(1) 用户说"帮我下载 xxx 的图标/favicon"；(2) 用户提供一组名称要求批量获取图标；(3) 用户需要网站 logo/icon 用于项目。
---

# Favicon Fetcher

批量抓取网站 favicon，最小化 token 消耗。

## 工作流程

```
用户提供名称列表 → Claude 确定官网 URL → 脚本批量下载 → 报告结果
```

## 执行步骤

### 1. 收集名称

从用户输入提取所有需要获取 favicon 的名称。

### 2. 确定官网 URL

对每个名称：

| 情况 | 处理 |
|------|------|
| 已知官网（如 GitHub→github.com） | 直接使用 |
| 不确定 | 用 WebSearch 搜索 `{name} official website` |
| 搜索后仍不确定 | 询问用户 |
| 用户也不知道 | 记录并跳过 |

**常见映射（无需搜索）：**
- GitHub → github.com
- Google → google.com
- Twitter/X → x.com
- Facebook → facebook.com
- YouTube → youtube.com
- LinkedIn → linkedin.com
- Instagram → instagram.com
- Reddit → reddit.com
- Discord → discord.com
- Slack → slack.com
- Notion → notion.so
- Figma → figma.com
- VS Code → code.visualstudio.com
- npm → npmjs.com
- Python → python.org
- Node.js → nodejs.org
- React → react.dev
- Vue → vuejs.org
- Angular → angular.io
- Tailwind → tailwindcss.com

### 3. 执行下载

确定所有 URL 后，运行脚本：

```bash
python scripts/fetch_favicon.py <output_dir> --url <url1> <url2> ...
```

示例：
```bash
python .claude/skills/favicon-fetcher/scripts/fetch_favicon.py ./favicons --url https://github.com https://google.com https://notion.so
```

### 4. 报告结果

向用户报告：
- 成功下载的图标及保存路径
- 下载失败的项目
- 跳过的项目（无法确定官网）

## 注意事项

- 默认输出目录：`./favicons`（可由用户指定）
- 脚本自动检测格式（.ico/.png/.svg）
- 优先使用 HTML 中声明的高清图标
