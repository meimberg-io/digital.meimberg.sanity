import {defineField, defineType} from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Kontakt-Seite',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    }),
    defineField({
      name: 'processSteps',
      title: 'Wie wir arbeiten',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Titel', type: 'string', validation: (r) => r.required()}),
            defineField({name: 'description', title: 'Beschreibung', type: 'text', rows: 2}),
          ],
          preview: {
            select: {title: 'title'},
          },
        },
      ],
    }),
    defineField({
      name: 'formSuccessTitle',
      title: 'Formular – Erfolgsmeldung Titel',
      type: 'string',
    }),
    defineField({
      name: 'formSuccessText',
      title: 'Formular – Erfolgsmeldung Text',
      type: 'string',
    }),
  ],
  preview: {
    prepare: () => ({title: 'Kontakt'}),
  },
})
