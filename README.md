# 个人主页

基于 Astro + Tailwind CSS 构建的个人主页。

## 功能

- 关于我：个人简介与信念展示
- 项目：展示个人项目及其状态
- 喜欢的：分享喜欢的书籍、音乐等
- 工具箱：常用网站、工具和 AI 工具推荐

## 技术栈

- [Astro](https://astro.build) - 静态网站生成框架
- [Tailwind CSS](https://tailwindcss.com) - CSS 框架

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
```

## 自定义

编辑 `src/data/` 目录下的文件来更新内容：

- `site.ts` - 网站基本信息
- `projects.ts` - 项目列表
- `favorites.ts` - 喜欢的内容
- `toolbox.ts` - 工具箱内容
