import { defineField, defineType } from "sanity";

export const fontObject = defineType({
    name: 'fontObject',
    title: 'Font Object',
    type: 'object',
    fields:[
      defineField({
        name: 'name',
        type: 'string',
        title: 'Name',
        options: {
          list: [
            {title: 'Arial', value: 'arial'},
            {title: 'Helvetica', value: 'helvetica'},
            {title: 'Gotham', value: 'gotham'}
          ]
        }
      }),
    ]
});

console.log('Loading fontObject schema');