# Personal Homepage 项目代码规范

## 项目概述

这是一个基于 Astro 5 + Tailwind CSS 4 的个人主页项目，采用静态站点生成 (SSG) 模式，追求轻量、高性能和现代化设计。

## 技术栈

| 类别 | 技术 | 版本 |
|------|------|------|
| 框架 | Astro | ^5.16.15 |
| 样式 | Tailwind CSS | ^4.1.18 |
| 语言 | TypeScript | strict 模式 |
| 构建 | Vite | 内置于 Astro |
| 包管理 | npm | - |

## 目录结构规范

```
src/
├── pages/          # 页面路由 (.astro 文件)
├── components/     # 可复用组件 (.astro 文件)
├── layouts/        # 布局组件
├── styles/         # 全局样式
│   └── global.css  # Tailwind 配置和自定义样式
├── data/           # 静态数据 (.ts/.json)
├── utils/          # 工具函数
└── types/          # TypeScript 类型定义

public/             # 静态资源 (图片、字体等)
docs/               # 项目文档
```

## Astro 组件规范

### 文件结构

```astro
---
// 1. 导入语句 (按类型分组)
import Layout from '../layouts/Layout.astro'
import Card from '../components/Card.astro'
import { formatDate } from '../utils/date'
import type { Project } from '../types'

// 2. Props 接口定义
interface Props {
  title: string
  description?: string
}

// 3. Props 解构
const { title, description = '默认描述' } = Astro.props

// 4. 数据处理逻辑
const projects = await getProjects()
---

<!-- 5. 模板部分 -->
<Layout title={title}>
  <main class="container mx-auto px-4">
    <!-- 内容 -->
  </main>
</Layout>

<style>
  /* 6. 组件作用域样式 (仅在必要时使用) */
</style>

<script>
  // 7. 客户端脚本 (仅在必要时使用)
</script>
```

### 组件命名

- 文件名：PascalCase，如 `ProjectCard.astro`
- 布局组件：以 `Layout` 结尾，如 `BaseLayout.astro`
- 页面文件：kebab-case，如 `about-me.astro`

## TypeScript 规范

### 类型定义

```typescript
// 优先使用 interface 定义对象类型
interface Project {
  name: string
  description: string
  status: 'active' | 'archived' | 'planned'
  link?: string
}

// 使用 type 定义联合类型或工具类型
type Status = 'active' | 'archived' | 'planned'
type ProjectList = Project[]
```

### 类型导入

```typescript
// 使用 type 关键字导入类型
import type { Project, Status } from '../types'
```

### 严格模式要求

- 禁止使用 `any` 类型，使用 `unknown` 替代
- 所有函数参数和返回值必须有类型注解
- 启用 `strictNullChecks`，正确处理 `null` 和 `undefined`

## Tailwind CSS 规范

### 类名顺序

按以下顺序组织 Tailwind 类名：

1. 布局 (display, position, flex, grid)
2. 尺寸 (width, height, padding, margin)
3. 排版 (font, text, leading)
4. 背景和边框 (bg, border, rounded)
5. 效果 (shadow, opacity, blur)
6. 过渡和动画 (transition, animate)
7. 响应式修饰符 (sm:, md:, lg:)
8. 状态修饰符 (hover:, focus:, active:)

```html
<!-- 示例 -->
<div class="flex items-center justify-between p-4 text-sm font-medium bg-white/80 border border-slate-200 rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
```

### 自定义颜色使用

使用项目定义的语义化颜色变量：

```html
<!-- 主色调 -->
<div class="bg-primary-500 text-primary-50">
<!-- 强调色 -->
<div class="bg-accent-500 text-accent-50">
<!-- 表面色 -->
<div class="bg-surface-50 text-surface-900">
```

### 响应式设计

- 桌面优先：默认样式针对桌面端，使用 `max-*` 断点适配小屏幕
- 断点使用：`max-lg:` (<1024px), `max-md:` (<768px), `max-sm:` (<640px)
- 必须确保移动端可用性

```html
<!-- 桌面优先示例：默认 3 列，小屏幕递减 -->
<div class="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
```

### 禁止事项

- 不要在 Tailwind 项目中编写自定义 CSS，除非绝对必要
- 不要使用 `@apply` 创建组件类（使用 Astro 组件替代）
- 不要硬编码颜色值，使用主题变量

## JavaScript/交互规范

### 客户端脚本

```astro
<script>
  // 使用 TypeScript
  const button = document.getElementById('menu-btn') as HTMLButtonElement | null
  const menu = document.getElementById('menu') as HTMLElement | null

  // 空值检查
  if (button && menu) {
    button.addEventListener('click', () => {
      menu.classList.toggle('hidden')
    })
  }
</script>
```

### 事件处理

- 优先使用事件委托
- 使用 `data-*` 属性传递数据
- 避免内联事件处理器

```html
<!-- 推荐 -->
<button id="toggle-btn" data-target="menu">Toggle</button>

<!-- 避免 -->
<button onclick="toggleMenu()">Toggle</button>
```

## 命名约定

| 类型 | 约定 | 示例 |
|------|------|------|
| 组件文件 | PascalCase | `ProjectCard.astro` |
| 页面文件 | kebab-case | `about-me.astro` |
| TypeScript 文件 | camelCase | `formatDate.ts` |
| CSS 类名 | kebab-case | `.card-hover` |
| CSS 变量 | kebab-case | `--color-primary-500` |
| JS 变量/函数 | camelCase | `getUserData()` |
| JS 常量 | UPPER_SNAKE_CASE | `MAX_ITEMS` |
| 类型/接口 | PascalCase | `interface UserProfile` |
| HTML id | kebab-case | `id="mobile-menu"` |
| data 属性 | kebab-case | `data-is-active` |

## 性能最佳实践

### 图片优化

```astro
<!-- 使用 Astro 图片组件 -->
import { Image } from 'astro:assets'
import myImage from '../assets/image.png'

<Image src={myImage} alt="描述" loading="lazy" />
```

### 资源加载

```html
<!-- 预连接外部资源 -->
<link rel="preconnect" href="https://fonts.googleapis.com" />

<!-- 懒加载非关键图片 -->
<img src="image.jpg" alt="描述" loading="lazy" />
```

### JavaScript 最小化

- 默认不发送 JavaScript 到客户端
- 仅在需要交互时使用 `<script>` 标签
- 考虑使用 `client:*` 指令控制组件水合

## 可访问性规范

### 必须遵守

- 所有图片必须有 `alt` 属性
- 外部链接使用 `rel="noopener noreferrer"`
- 表单元素必须有关联的 `<label>`
- 使用语义化 HTML 标签 (`<nav>`, `<main>`, `<article>`, `<section>`)
- 确保足够的颜色对比度

### 交互元素

```html
<!-- 按钮必须有可访问名称 -->
<button aria-label="关闭菜单">
  <svg>...</svg>
</button>

<!-- 链接文本要有意义 -->
<a href="/projects">查看所有项目</a>  <!-- 推荐 -->
<a href="/projects">点击这里</a>       <!-- 避免 -->
```

## Git 提交规范

### 提交信息格式

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type 类型

- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式（不影响功能）
- `refactor`: 重构
- `perf`: 性能优化
- `chore`: 构建/工具变更

### 示例

```
feat(home): 添加项目展示卡片组件

- 创建 ProjectCard.astro 组件
- 支持项目状态标签显示
- 添加悬停动画效果
```

## 代码审查清单

在提交代码前，确保：

- [ ] TypeScript 无类型错误
- [ ] 无 `any` 类型使用
- [ ] 组件有适当的 Props 类型定义
- [ ] 图片有 `alt` 属性
- [ ] 外部链接有 `rel="noopener noreferrer"`
- [ ] 响应式设计在各断点正常显示
- [ ] 无硬编码的颜色值
- [ ] 无未使用的导入或变量
- [ ] 客户端脚本有空值检查

## 常用命令

```bash
npm run dev      # 启动开发服务器 (localhost:4321)
npm run build    # 构建生产版本
npm run preview  # 预览构建结果
```
