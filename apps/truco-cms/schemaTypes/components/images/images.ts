import {defineField, defineType} from 'sanity'

export const images = defineType({
  name: 'images',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
    defineField({
      name: 'height',
      type: 'number',
      title: 'Image Height',
      initialValue: 0,
    }),
    defineField({
      name: 'width',
      type: 'number',
      title: 'Width',
      initialValue: 0,
      description: 'If 0, will fill the parent component.',
    }),
  ],
})
