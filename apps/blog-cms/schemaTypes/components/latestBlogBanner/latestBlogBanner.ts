import {defineField, defineType} from 'sanity'

export const latestBlogBanner = defineType({
  name: 'latestBlogBanner',
  title: 'latestBlogBanner',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Latest Blog Banner',
    }),
  ],
})
