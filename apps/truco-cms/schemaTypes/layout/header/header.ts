import {defineField, defineType} from 'sanity'

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
