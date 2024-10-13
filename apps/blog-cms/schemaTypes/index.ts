import {blog, page} from './sections'
import {
  link,
  heading,
  subHeading,
  caption,
  paragraph,
  card,
  button,
  images,
  latestBlogBanner,
  postFeedLayout,
  blogFeedLayout,
  author,
  blogList,
  amazonProduct,
} from './components'
import {header, color, font, footer} from './layout'
import {socialIcons, fontObject} from './objects'

export const schemaTypes = [
  // Layout
  font,
  color,
  header,
  footer,
  postFeedLayout,
  blogFeedLayout,
  author,
  amazonProduct,
  // Objects
  latestBlogBanner,
  blogList,
  fontObject,
  socialIcons,
  // Sections
  page,
  blog,
  // Components
  link,
  card,
  button,
  images,
  caption,
  heading,
  paragraph,
  subHeading,
]
