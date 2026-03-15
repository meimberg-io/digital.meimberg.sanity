import {defineField, defineType} from 'sanity'

export const teamPage = defineType({
  name: 'teamPage',
  title: 'Team-Seite',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    }),
    defineField({
      name: 'teamMembers',
      title: 'Teammitglieder',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'teamMember'}]}],
    }),
    defineField({
      name: 'ecosystemHeading',
      title: 'Ökosystem – Überschrift',
      type: 'string',
    }),
    defineField({
      name: 'ecosystemText',
      title: 'Ökosystem – Text',
      type: 'blockContent',
    }),
    defineField({
      name: 'cta',
      title: 'Call-to-Action',
      type: 'ctaSection',
    }),
  ],
  preview: {
    prepare: () => ({title: 'Team'}),
  },
})
