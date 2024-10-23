import {defineField, defineType} from 'sanity'

export const amazonProductsCarousel = defineType({
  name: 'amazonProductsCarousel',
  title: 'Amazon Products Carousel',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'amazonProduct'}]}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
