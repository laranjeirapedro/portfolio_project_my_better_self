import {defineField, defineType} from 'sanity'

export const socialIcons = defineType({
  name: 'socialIcons',
  title: 'Social Icons',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'iconPicker',
    }),
  ],
})
