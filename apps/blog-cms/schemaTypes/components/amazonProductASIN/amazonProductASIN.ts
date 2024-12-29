import {defineField, defineType} from 'sanity'

export const amazonProductASIN = defineType({
  name: 'amazonProductASIN',
  title: 'Amazon Product ASIN',
  type: 'document',
  fields: [
    defineField({
      name: 'productReferenceName',
      title: 'Product Reference Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ASIN',
      title: 'ASIN',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
