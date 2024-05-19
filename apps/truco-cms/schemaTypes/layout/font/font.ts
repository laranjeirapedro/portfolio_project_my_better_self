import {defineField, defineType} from 'sanity'
import { fontObject } from "../../objects/fontObject"


export const font = defineType({
    name: 'font',
    title: 'Font',
    type: 'document',
    fields:[
        defineField({
            name: 'fontSettings',
            type: 'fontObject',
            title: 'Font Settings',
        }),
    ]
})