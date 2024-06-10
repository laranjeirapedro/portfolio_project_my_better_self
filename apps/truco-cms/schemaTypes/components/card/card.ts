import { defineField, defineType } from "sanity";
import { paragraph } from '../paragraph';
import { heading } from '../heading';
import { button } from '../button';

export const card = defineType({
    name: "card",
    title: "Card",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "content",
            title: "Content",
            type: "array",
            of: [
              { type: 'reference', to: [{ type: 'paragraph' }], name: 'paragraphReference' },
              { type: 'reference', to: [{ type: 'heading' }], name: 'headingReference' },
              { type: 'reference', to: [{ type: 'button' }], name: 'buttonReference' },
            ],
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
        }),
    ],
})