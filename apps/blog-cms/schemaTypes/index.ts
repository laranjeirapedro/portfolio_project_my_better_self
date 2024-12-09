import {
  amazonProduct,
  author,
  blogFeedLayout,
  blogList,
  button,
  caption,
  card,
  divider,
  heading,
  images,
  latestBlogBanner,
  link,
  newsletter,
  paragraph,
  postFeedLayout,
  productCategory,
  subHeading,
} from './components'
import {color, font, footer, header} from './layout'
import {amazonProductsCarousel, expediaWidget, fontObject, socialIcons} from './objects'
import {blog, page} from './sections'

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
  expediaWidget,
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
  divider,
]
