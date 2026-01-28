# 个人主页

基于 Astro + Tailwind CSS 构建的个人主页，用于展示自我、记录兴趣爱好、汇总常用工具。

## 功能特性

### 内容展示

- **关于我**：头像、网名、一句话介绍、个人信念、社交链接（GitHub、博客）
- **GitHub 数据**：贡献热力图、Stats 统计卡片、Streak 连续贡献卡片
- **项目展示**：项目封面图（16:9）、名称、描述、状态标签（刚开始做/进行中/已完成）
- **喜欢的东西**：番剧、游戏、音乐三个分类，支持封面图、名称、评价展示
- **工具箱**：常用网站、常用工具、AI 工具（按文本/代码/图像/视频/搜索/播客/PPT/工作流分类）

### 视觉与交互

- **主题切换**：支持浅色/深色主题，跟随系统偏好，记住用户选择
- **响应式设计**：桌面端优先，移动端适配
- **导航栏**：锚点导航，滚动时自动高亮当前区域
- **返回顶部**：滚动超过阈值后显示，点击平滑滚动到顶部
- **动效增强**：背景浮动图形、图片骨架屏加载效果
- **PWA 支持**：Favicon、Apple Touch Icon、Android Chrome 图标

## 技术栈

- [Astro](https://astro.build) - 静态网站生成框架
- [Tailwind CSS](https://tailwindcss.com) - CSS 框架
- [GitHub Pages](https://pages.github.com) - 静态网站托管

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 项目结构

```
src/
├── components/     # 组件
├── data/           # 数据配置
├── layouts/        # 布局
├── pages/          # 页面
├── styles/         # 样式
└── types/          # 类型定义

public/
├── images/         # 图片资源（头像、封面、图标）
└── favicon.*       # 网站图标
```

## 自定义

编辑 `src/data/` 目录下的文件来更新内容：

- `site.ts` - 网站基本信息
- `projects.ts` - 项目列表
- `favorites.ts` - 喜欢的内容
- `toolbox.ts` - 工具箱内容
