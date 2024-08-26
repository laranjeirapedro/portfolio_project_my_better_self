import {defineField, defineType} from 'sanity'

export const postFeedLayout = defineType({
  name: 'postFeedLayout',
  title: 'Post Feed Layout',
  type: 'object',
  fields: [
    defineField({
      name: 'mainContent',
      title: 'Main Content',
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
        {type: 'latestBlogBanner'},
      ],
    }),
  ],
})
