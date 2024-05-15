import {defineField, defineType} from 'sanity'

export const color = defineType({
  name: 'colorSettings',
  title: 'Color',
  type: 'document',
  fields: [
    defineField({
      name: 'primaryColor',
      title: 'Primary Color',
      type: 'color',
    }),
    defineField({
        name: 'secondaryColor',
        title: 'Secondary Color',
        type: 'color',
      }),
  ],
})
