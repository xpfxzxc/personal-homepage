import type { SiteData, NavItem } from '../types'

export const siteData: SiteData = {
  name: 'xpfxzxc',
  intro: '听障，无职，正在用 AI 探索可能性',
  belief: '笨没关系，坚持就能进步；放弃了，就真的没机会了',
  github: 'https://github.com/xpfxzxc',
  blog: 'https://xpfxzxc.github.io',
}

export const navItems: NavItem[] = [
  { name: '关于我', href: '#about' },
  { name: '项目', href: '#projects' },
  { name: '喜欢的', href: '#favorites' },
  { name: '工具箱', href: '#toolbox' },
]

export const statusColors: Record<string, string> = {
  '刚开始做': 'bg-amber-100 text-amber-700',
  '进行中': 'bg-blue-100 text-blue-700',
  '已完成': 'bg-green-100 text-green-700',
}
