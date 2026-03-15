import {defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'Über uns',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    }),
    defineField({
      name: 'identityNotUs',
      title: 'Was wir nicht sind',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'identityWeAre',
      title: 'Was wir sind',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'valuesHeading',
      title: 'Haltung – Überschrift',
      type: 'string',
    }),
    defineField({
      name: 'values',
      title: 'Werte',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Titel', type: 'string', validation: (r) => r.required()}),
            defineField({name: 'description', title: 'Beschreibung', type: 'text', rows: 3}),
          ],
          preview: {
            select: {title: 'title'},
          },
        },
      ],
    }),
    defineField({
      name: 'comparisonHeading',
      title: 'Vergleich – Überschrift',
      type: 'string',
    }),
    defineField({
      name: 'comparisonSubheading',
      title: 'Vergleich – Unterzeile',
      type: 'string',
    }),
    defineField({
      name: 'comparisonRows',
      title: 'Vergleichstabelle',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Kriterium', type: 'string', validation: (r) => r.required()}),
            defineField({name: 'agency', title: 'Agentur', type: 'string'}),
            defineField({name: 'freelancer', title: 'Freelancer', type: 'string'}),
            defineField({name: 'meimberg', title: 'meimberg digital', type: 'string'}),
          ],
          preview: {
            select: {title: 'label'},
          },
        },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Call-to-Action',
      type: 'ctaSection',
    }),
  ],
  preview: {
    prepare: () => ({title: 'Über uns'}),
  },
})
