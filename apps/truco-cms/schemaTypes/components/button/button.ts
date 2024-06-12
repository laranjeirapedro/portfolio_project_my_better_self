import {defineField, defineType} from 'sanity'

export const button = defineType({
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'slug',
    }),
    defineField({
      name: 'buttonType',
      title: 'Button Type',
      type: 'string',
      options: {
        list: [
          {title: 'Primary', value: 'PRIMARY'},
          {title: 'Secondary', value: 'SECONDARY'},
          {title: 'Tertiary', value: 'TERTIARY'},
        ],
      },
    }),
  ],
  initialValue: {
    buttonType: 'PRIMARY',
  },
})
