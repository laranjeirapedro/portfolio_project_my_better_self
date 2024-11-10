import {defineField, defineType} from 'sanity'
import {getExtension, getImageDimensions} from '@sanity/asset-utils'

export const header = defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'favicon',
      title: 'favicon',
      type: 'image',
      options: {
        hotspot: true, // Enable hotspot if needed
      },
      validation: (Rule) =>
        Rule.custom((fields) => {
          if (!fields || !fields.asset) {
            return true
          }
          const imageType = getExtension(fields.asset._ref)
          const imageSize = getImageDimensions(fields.asset._ref)

          // Limit file type to PNG and JPEG
          const allowedTypes = ['png']
          if (!allowedTypes.includes(imageType)) {
            return 'Only PNG images are allowed!'
          }

          // Limit file size to 64 px
          const maxSize = 64
          if (imageSize.width > maxSize || imageSize.height > maxSize) {
            return 'Image size should not exceed 64kb!'
          }

          if (imageSize.width !== imageSize.height) {
            return 'Image must have ration 1:1'
          }

          return true
        }),
    }),
    defineField({
      name: 'headerType',
      title: 'Header Type',
      description: 'Choose the header variation',
      type: 'string',
      options: {
        list: [
          {title: 'Type A', value: 'typeA'},
          {title: 'Type B', value: 'typeB'},
        ],
        layout: 'dropdown', // Can be omitted since dropdown is default for `list`
      },
    }),
    defineField({
      name: 'authSwitch',
      title: 'Auth Switch',
      description: 'Turns auth on and off',
      type: 'boolean',
    }),
    defineField({
      name: 'marketplaceSwitch',
      title: 'Marketplace Switch',
      description: 'Turns marketplace on and off',
      type: 'boolean',
    }),
    defineField({
      name: 'commonLinks',
      title: 'Common Links',
      description: 'Links shown to everybody.',
      type: 'array',
      of: [{type: 'link'}],
    }),
    defineField({
      name: 'authenticatedLinks',
      title: 'Authenticated Links',
      description: 'Links shown to logged users.',

      type: 'array',
      of: [{type: 'link'}],
    }),
    defineField({
      name: 'unauthenticatedLinks',
      title: 'Unnauthenticated Links',
      description: 'Links shown to unlogged users.',
      type: 'array',
      of: [{type: 'link'}],
    }),
  ],
})
