import {defineField, defineType} from 'sanity'

export const blogList = defineType({
  name: 'blogList',
  title: 'blogList',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'blogList',
    }),
  ],
})
