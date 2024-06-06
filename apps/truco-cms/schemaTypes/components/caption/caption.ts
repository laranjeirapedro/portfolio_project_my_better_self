import {defineField, defineType} from 'sanity'

export const caption = defineType({
  name: 'caption',
  title: 'Caption',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
  ],
})
