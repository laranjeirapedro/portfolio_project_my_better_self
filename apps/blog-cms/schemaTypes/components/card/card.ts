import {defineField, defineType} from 'sanity'
import {PanelLeftIcon, PanelRightIcon, InlineIcon} from '@sanity/icons'
import {LeftTextAlign, RightTextAlign, CenterTextAlign} from '../../../schema'

export const card = defineType({
  name: 'card',
  title: 'Card',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Paragraph', value: 'normal'},
            {title: 'Heading', value: 'h1'},
            {title: 'Subheading', value: 'h2'},
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
        {type: 'images'},
        {type: 'button'},
        {type: 'caption'},
      ],
    }),
  ],
})
