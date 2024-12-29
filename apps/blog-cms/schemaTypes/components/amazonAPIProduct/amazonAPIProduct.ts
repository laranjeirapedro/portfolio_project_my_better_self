import {defineArrayMember, defineField, defineType} from 'sanity'

export const amazonAPIProduct = defineType({
  name: 'amazonAPIProduct',
  title: 'Amazon API Product',
  type: 'object',
  fields: [
    defineField({
      name: 'productName',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'apiType',
      title: 'API Type',
      type: 'string',
      options: {
        list: [
          {value: 'keyword', title: 'Keyword'},
          {value: 'ASIN', title: 'ASIN'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'keyword',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ASIN',
      title: 'ASIN',
      type: 'reference',
      to: {type: 'amazonProductASIN'},
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'amazonKeyword'}]}],
    }),
  ],
})
