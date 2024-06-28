import {defineField, defineType} from 'sanity'

export const link = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
    }),
    defineField({
      name: 'path',
      title: 'Path',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    }),
  ],
})
