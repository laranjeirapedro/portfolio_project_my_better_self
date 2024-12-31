import {defineField, defineType} from 'sanity'

export const amazonProductASIN = defineType({
  name: 'amazonProductASIN',
  title: 'Amazon Product ASIN',
  type: 'document',
  fields: [
    defineField({
      name: 'productReferenceName',
      title: 'Product Reference Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ASIN',
      title: 'ASIN',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating (optional)',
      type: 'number',
    }),
    defineField({
      name: 'expirationDate',
      title: 'Expiration Date',
      type: 'date',
      initialValue: () => {
        const today = new Date()
        const nextMonth = new Date(today.setMonth(today.getMonth() + 1))
        return nextMonth.toISOString().split('T')[0]
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isAutomated',
      title: 'isAutomated',
      type: 'boolean',
      initialValue: false,
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'productReferenceName',
      expirationDate: 'expirationDate',
    },
    prepare({expirationDate, title}) {
      const EMOJIS = {
        goodStanding: '✅',
        expired: '🚫',
      }

      const today = new Date().toISOString().split('T')[0]
      const expDate = expirationDate ? new Date(expirationDate).toISOString().split('T')[0] : null

      const emoji = expDate && expDate >= today ? EMOJIS['goodStanding'] : EMOJIS['expired']

      return {
        title: title,
        expirationDate: expirationDate,
        media: <span style={{fontSize: '1rem'}}>{emoji}</span>,
      }
    },
  },
})
