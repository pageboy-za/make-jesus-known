import { DocumentVideoIcon } from '@sanity/icons'
import Container from 'app/components/structural/container'
import VideoComponent from 'app/components/videoComponent'
import { title } from 'lib/demo.data'
import { defineField, defineType } from 'sanity'

/**
 * This file is the schema definition for an Youtube Videos.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

const Preview = (props) => {
  const { url, renderDefault } = props
  if (!url) {
    return <div>Add the YouTube URL</div>
  }
  return (
    <Container>
      {renderDefault({ ...props, title: 'YouTube Embed' })}
      <VideoComponent vidSrc={url.toString()} title={title} controls={true} />
    </Container>
  )
}

export default defineType({
  name: 'youtube',
  title: 'YouTube Embed',
  icon: DocumentVideoIcon,
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'YouTube URL',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      url: 'url',
      title: 'title',
    },
  },
  components: {
    preview: Preview,
  },
})
