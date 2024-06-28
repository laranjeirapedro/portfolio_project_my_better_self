import {defineField, defineType} from 'sanity'

export const heading = defineType({
  name: 'heading',
  title: 'Heading',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
  ],
})
