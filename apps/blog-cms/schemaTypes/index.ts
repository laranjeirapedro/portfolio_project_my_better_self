import {
  amazonKeyword,
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
  // Config
  font,
  color,
  // Core components
  header,
  footer,
  // Blog
  latestBlogBanner,
  postFeedLayout,
  blogFeedLayout,
  blogList,
  author,
  // Affiliation
  amazonProductsCarousel,
  amazonKeyword,
  amazonProduct,
  expediaWidget,
  // Marketing
  newsletter,
  // Objects
  productCategory,
  socialIcons,
  fontObject,
  // Sections
  page,
  blog,
  // Components
  subHeading,
  paragraph,
  caption,
  divider,
  heading,
  button,
  images,
  card,
  link,
]
