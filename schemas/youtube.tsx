import { DocumentVideoIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'youtube',
    icon: DocumentVideoIcon,
    type: 'object',
    title: 'YouTube Embed',
    fields: [
        defineField({
            name: 'url',
            title: 'YouTube video URL',
            type: 'url',
            validation: (rule) => rule.required(),
          }),
    ]
  })