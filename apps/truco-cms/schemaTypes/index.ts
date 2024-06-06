// Examples
// import blockContent from './blockContent'
// import crewMember from './crewMember'
// import castMember from './castMember'
// import movie from './movie'
// import person from './person'
// import screening from './screening'
// import plotSummary from './plotSummary'
// import plotSummaries from './plotSummaries'

// App
import {page} from './sections'
import {link, heading, subHeading, caption, paragraph} from './components'
import {header, color, font, footer} from './layout'
import {fontObject} from './objects/font'

export const schemaTypes = [
  // Layout
  header,
  color,
  font,
  footer,
  // Objects
  fontObject,
  // Sections
  page,
  // Components
  link,
  heading,
  subHeading,
  caption,
  paragraph,
  // Examples
  // movie,
  // person,
  // screening,

  // Other types
  // Examples
  // blockContent,
  // plotSummary,
  // plotSummaries,
  // castMember,
  // crewMember,
]
