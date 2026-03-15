import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Startseite',
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
      name: 'identityLink',
      title: 'Identity-Link',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string'}),
        defineField({name: 'href', title: 'Link', type: 'string'}),
      ],
    }),
    defineField({
      name: 'servicesHeading',
      title: 'Leistungen – Überschrift',
      type: 'string',
    }),
    defineField({
      name: 'servicesSubheading',
      title: 'Leistungen – Unterzeile',
      type: 'string',
    }),
    defineField({
      name: 'services',
      title: 'Leistungen',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'service'}]}],
    }),
    defineField({
      name: 'cta',
      title: 'Call-to-Action',
      type: 'ctaSection',
    }),
  ],
  preview: {
    prepare: () => ({title: 'Startseite'}),
  },
})
