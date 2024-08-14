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
} from './components'
import {header, color, font, footer} from './layout'
import {fontObject} from './objects/fonts/font'

export const schemaTypes = [
  // Layout
  font,
  color,
  header,
  footer,
  postFeedLayout,
  blogFeedLayout,
  // Objects
  latestBlogBanner,
  fontObject,
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
