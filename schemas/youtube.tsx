import { DocumentVideoIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'youtube',
    title: 'YouTube Embed',
    icon: DocumentVideoIcon,
    type: 'document',
    fields: [
        defineField({
            name: 'URL',
            title: 'YouTube URL',
            type: 'url',
            validation: (rule) => rule.required(),
          }),
          defineField({
            name: 'title',
            title: 'Title',
            type: 'string', 
          }),
    ]
  })