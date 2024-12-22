import {defineField, defineType} from 'sanity'

export const amazonKeyword = defineType({
  name: 'amazonKeyword',
  title: 'Amazon Keyword',
  type: 'document',
  fields: [
    defineField({
      name: 'keyword',
      title: 'Keyword',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'numberOfProducts',
      title: 'Number of Products',
      type: 'number',
    }),
  ],
})
