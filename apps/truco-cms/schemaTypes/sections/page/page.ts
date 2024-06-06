import {defineField, defineType} from 'sanity'
import {MdWeb as icon} from 'react-icons/md'

export const page = defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'heading',
        },
        {
          type: 'subHeading',
        },
        {
          type: 'caption',
        },
        {
          type: 'paragraph',
        },
        {
          type: 'link',
        },
      ],
    }),
  ],
})
