import {defineType, defineField} from 'sanity'

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'link'}],
    }),
    defineField({
      name: 'siteCopyright',
      title: 'Site Copyright',
      type: 'string',
    }),
    defineField({
      name: 'socialIcons',
      title: 'Social Icons',
      type: 'array',
      of: [
        {
          type: 'socialIcons',
        },
      ],
    }),
  ],
})
