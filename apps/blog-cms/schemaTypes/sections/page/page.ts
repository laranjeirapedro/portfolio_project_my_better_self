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
      name: 'contentTop',
      title: 'Content Top',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Heading', value: 'h1'},
            {title: 'Subheading', value: 'h2'},
            {title: 'Paragraph', value: 'normal'},
          ],
          marks: {
            // Only allow these decorators
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Underline', value: 'underline'},
            ],
            // Support annotating text with a reference to an author
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'link',
                fields: [
                  {
                    name: 'url',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {type: 'latestBlogBanner'},
      ],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Heading', value: 'h1'},
            {title: 'Subheading', value: 'h2'},
            {title: 'Paragraph', value: 'normal'},
          ],
          marks: {
            // Only allow these decorators
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Underline', value: 'underline'},
            ],
            // Support annotating text with a reference to an author
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'link',
                fields: [
                  {
                    name: 'url',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {type: 'card'},
      ],
    }),
  ],
})
