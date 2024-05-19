import { defineType, defineField } from 'sanity'

export const footer = defineType({
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
        defineField({
            name: 'links',
            title: 'Links',
            type: 'link',
        }),
        defineField({
            name: 'siteCopyright',
            title: 'Site Copyright',
            type: 'string',
        }),

    ],
})