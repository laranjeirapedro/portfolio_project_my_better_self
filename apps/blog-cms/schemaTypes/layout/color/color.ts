import {defineField, defineType} from 'sanity'

export const color = defineType({
  name: 'colorSettings',
  title: 'Color Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'primaryColor',
      title: 'Primary Color',
      type: 'simplerColor',
      options: {
        colorList: [
          { label: 'Light', value: '#CCE6D1' },
          { label: 'Dark', value: '#193829' },
          { label: 'Brand', value: '#3A6F41' },
          { label: 'Accent', value: '#007B12' },
        ],
        enableSearch: true,
      }
    }),
    defineField({
      name: 'secondaryColor',
      title: 'Secondary Color',
      type: 'simplerColor',
      options: {
        colorList: [
          { label: 'Light', value: '#FFF3CC' },
          { label: 'Dark', value: '#998400' },
          { label: 'Brand', value: '#FFD700' },
          { label: 'Accent', value: '#FFBF00' },
        ],
        enableSearch: true,
      }
    }),
  ],
})
