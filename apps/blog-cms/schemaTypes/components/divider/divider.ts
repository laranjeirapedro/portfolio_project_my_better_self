import {defineField, defineType} from 'sanity'

export const divider = defineType({
  name: 'divider',
  title: 'Divider',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: true,
      initialValue: 'Divider',
    }),
    defineField({
      name: 'spacing',
      title: 'spacing',
      type: 'string',
      options: {
        list: [
          {value: 'sm', title: 'sm - 8px'},
          {value: 'md', title: 'md - 12px'},
          {value: 'lg', title: 'lg - 16px'},
          {value: 'xl', title: 'xl - 24px'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'md',
    }),
  ],
})
