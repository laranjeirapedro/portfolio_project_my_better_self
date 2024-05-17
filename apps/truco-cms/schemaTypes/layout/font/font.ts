import {defineField, defineType} from 'sanity'

export const font = defineType({
  name: 'fontSettings',
  title: 'Font',
  type: 'document',
  fields: [
    defineField({
      name: 'headginFont',
      title: 'Heading Font',
      type: 'string',
    }),
    defineField({
        name: 'bodyFont',
        title: 'Body Font',
        type: 'string',
      }),
  ],
})
