import {defineField, defineType} from 'sanity'

export const fontObject = defineType({
  name: 'font',
  title: 'Font',
  type: 'object',
  fields: [
    defineField({
      name: 'fontFamily',
      type: 'string',
      title: 'Font Family',
      options: {
        list: [
          {title: 'Arial', value: 'arial'},
          {title: 'Helvetica', value: 'helvetica'},
          {title: 'Gotham', value: 'gotham'},
        ],
      },
      initialValue: 'arial',
    }),
    defineField({
      name: 'fontSize',
      type: 'number',
      title: 'Font Size',
      initialValue: 16,
    }),
    defineField({
      name: 'color',
      type: 'color',
      title: 'Color',
    }),
  ],
})
