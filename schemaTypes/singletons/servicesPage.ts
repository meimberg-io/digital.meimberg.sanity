import {defineField, defineType} from 'sanity'

export const servicesPage = defineType({
  name: 'servicesPage',
  title: 'Leistungen-Seite',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'hero',
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
    prepare: () => ({title: 'Leistungen'}),
  },
})
