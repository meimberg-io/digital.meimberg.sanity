import {defineField, defineType} from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero-Sektion',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Kleiner Text über der Überschrift (z.B. "meimberg digital")',
    }),
    defineField({
      name: 'title',
      title: 'Überschrift',
      type: 'text',
      rows: 2,
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Unterzeile',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Hintergrundbild',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})
