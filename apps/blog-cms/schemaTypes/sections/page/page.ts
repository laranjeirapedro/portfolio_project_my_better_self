import {InlineIcon, PanelLeftIcon, PanelRightIcon} from '@sanity/icons'
import {MdWeb as icon} from 'react-icons/md'
import {defineField, defineType} from 'sanity'
import {CenterTextAlign, LeftTextAlign, RightTextAlign} from '../../../schema'

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
              {
                title: 'Left Text Align',
                value: 'leftTextAlign',
                icon: PanelLeftIcon,
                component: LeftTextAlign,
              },
              {
                title: 'Center Text Align',
                value: 'centerTextAlign',
                icon: InlineIcon,
                component: CenterTextAlign,
              },
              {
                title: 'Right Text Align',
                value: 'rightTextAlign',
                icon: PanelRightIcon,
                component: RightTextAlign,
              },
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
        {type: 'blogList'},
        {type: 'card'},
        {type: 'latestBlogBanner'},
        {type: 'reference', to: {type: 'amazonProduct'}},
        {name: 'newsletterRef', type: 'reference', to: {type: 'newsletter'}},
      ],
    }),
  ],
})
