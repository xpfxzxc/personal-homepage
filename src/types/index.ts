export interface SiteData {
  name: string
  intro: string
  belief: string
  github: string
  blog: string
}

export interface NavItem {
  name: string
  href: string
}

export interface Project {
  name: string
  description: string
  status: string
  link: string | null
  cover?: string
}

export interface FavoriteItem {
  name: string
  comment: string
  cover?: string
  link?: string
}

export interface Favorites {
  anime: FavoriteItem[]
  games: FavoriteItem[]
  music: FavoriteItem[]
}

export interface LinkItem {
  name: string
  link: string
  icon?: string
}

export interface AIToolCategory {
  category: string
  items: LinkItem[]
}
