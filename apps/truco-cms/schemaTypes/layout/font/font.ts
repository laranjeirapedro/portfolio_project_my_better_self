import {defineField, defineType} from 'sanity'

export const font = defineType({
  name: 'fontSettings',
  title: 'Font',
  type: 'document',
  fields: [
    defineField({
      name: 'fontHeading',
      type: 'font',
      title: 'Font Heading',
    }),
    defineField({
      name: 'fontSubHeading',
      type: 'font',
      title: 'Font Sub Heading',
    }),
    defineField({
      name: 'paragraph',
      type: 'font',
      title: 'Paragraph',
    }),
    defineField({
      name: 'caption',
      type: 'font',
      title: 'Caption',
    }),
    defineField({
      name: 'link',
      type: 'font',
      title: 'Link',
    }),
  ],
})
