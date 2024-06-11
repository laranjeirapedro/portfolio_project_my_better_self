import {page} from './sections'
import {link, heading, subHeading, caption, paragraph, card, button, images} from './components'
import {header, color, font, footer} from './layout'
import {fontObject} from './objects/font'

export const schemaTypes = [
  // Layout
  font,
  color,
  header,
  footer,
  // Objects
  fontObject,
  // Sections
  page,
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
