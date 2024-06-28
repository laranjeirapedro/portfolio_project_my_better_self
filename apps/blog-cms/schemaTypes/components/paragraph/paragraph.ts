import {defineField, defineType} from 'sanity'

export const paragraph = defineType({
  name: 'paragraph',
  title: 'Paragraph',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
  ],
})
