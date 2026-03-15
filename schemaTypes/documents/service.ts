import {defineField, defineType} from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Leistung',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'description',
      title: 'Kurzbeschreibung',
      type: 'text',
      rows: 2,
      description: 'Für Übersichtsseiten (z.B. Startseite)',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          {title: 'Code', value: 'code2'},
          {title: 'Refresh / Re-Engineering', value: 'refreshCw'},
          {title: 'Kompass / Strategie', value: 'compass'},
          {title: 'Schild / Sicherheit', value: 'shield'},
        ],
      },
    }),
    defineField({
      name: 'subtitle',
      title: 'Untertitel',
      type: 'string',
      description: 'Für die Detail-Ansicht auf /leistungen',
    }),
    defineField({
      name: 'points',
      title: 'Leistungspunkte',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Aufzählung der konkreten Leistungen',
    }),
    defineField({
      name: 'order',
      title: 'Sortierung',
      type: 'number',
    }),
  ],
  orderings: [
    {title: 'Sortierung', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'title', subtitle: 'description'},
  },
})
