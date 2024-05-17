import {defineField, defineType} from 'sanity'
import {MdWeb as icon} from 'react-icons/md'

export const page = defineType({
  name: 'page',
  title: 'Page',
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
          // Link won't be able to be rendered direclty into contents, just using as an example for now.
          type: 'link',
        },
      ],
    }),
  ],
})
