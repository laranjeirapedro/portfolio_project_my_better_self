import {defineField, defineType} from 'sanity'

export const amazonProduct = defineType({
  name: 'amazonProduct',
  title: 'Amazon Products',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteStripeUrl',
      title: 'SiteStripe Url',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'promoPrice',
      title: 'Promo Price',
      type: 'number',
    }),
    defineField({
      name: 'promoDueDate',
      title: 'Promo Due Date',
      type: 'date',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
