import {defineField, defineType} from 'sanity'
import {colors} from '@app/styles'

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
        colorList: Object.keys(colors.primary).map((key) => ({
          label: key,
          value: colors.primary[key],
        })),
        enableSearch: true,
      },
    }),
    defineField({
      name: 'secondaryColor',
      title: 'Secondary Color',
      type: 'simplerColor',
      options: {
        colorList: Object.keys(colors.secondary).map((key) => ({
          label: key,
          value: colors.secondary[key],
        })),
        enableSearch: true,
      },
    }),
    defineField({
      name: 'darkGreenColor',
      title: 'Dark Green Color',
      type: 'simplerColor',
      options: {
        colorList: Object.keys(colors.darkGreen).map((key) => ({
          label: key,
          value: colors.darkGreen[key],
        })),
        enableSearch: true,
      },
    }),
    defineField({
      name: 'mutedYellowColor',
      title: 'Muted Yellow Color',
      type: 'simplerColor',
      options: {
        colorList: Object.keys(colors.mutedYellow).map((key) => ({
          label: key,
          value: colors.mutedYellow[key],
        })),
        enableSearch: true,
      },
    }),
    defineField({
      name: 'darkGreyColor',
      title: 'Dark Grey Color',
      type: 'simplerColor',
      options: {
        colorList: Object.keys(colors.darkGrey).map((key) => ({
          label: key,
          value: colors.darkGrey[key],
        })),
        enableSearch: true,
      },
    }),
    defineField({
      name: 'warmBrownColor',
      title: 'Warm Brown Color',
      type: 'simplerColor',
      options: {
        colorList: Object.keys(colors.warmBrown).map((key) => ({
          label: key,
          value: colors.warmBrown[key],
        })),
        enableSearch: true,
      },
    }),
    defineField({
      name: 'offWhiteColor',
      title: 'Off White Color',
      type: 'simplerColor',
      options: {
        colorList: Object.keys(colors.offWhite).map((key) => ({
          label: key,
          value: colors.offWhite[key],
        })),
        enableSearch: true,
      },
    }),
    defineField({
      name: 'redColor',
      title: 'Red Color',
      type: 'simplerColor',
      options: {
        colorList: Object.keys(colors.red).map((key) => ({label: key, value: colors.red[key]})),
        enableSearch: true,
      },
    }),
  ],
})
