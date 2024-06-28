import {defineField, defineType} from 'sanity'

export const subHeading = defineType({
  name: 'subHeading',
  title: 'Sub Heading',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
  ],
})
