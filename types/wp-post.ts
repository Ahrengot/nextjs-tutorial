export type WordPressPost = {
  id: number,
  date: string,
  link: string,
  title: {
    rendered: string
  },
  content: {
    rendered: string,
  },
  excerpt: {
    rendered: string,
  },
  featured_media: number|null
}