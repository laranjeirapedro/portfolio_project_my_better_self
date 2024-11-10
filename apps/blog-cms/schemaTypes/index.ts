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
  newsletter,
  productCategory,
} from './components'
import {header, color, font, footer} from './layout'
import {socialIcons, fontObject, amazonProductsCarousel} from './objects'

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
  newsletter,
  // Objects
  latestBlogBanner,
  blogList,
  fontObject,
  socialIcons,
  amazonProductsCarousel,
  productCategory,
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
