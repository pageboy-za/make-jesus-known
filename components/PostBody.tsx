/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import {PortableText} from '@portabletext/react';
import {getImageDimensions} from '@sanity/asset-utils';
import { urlFor } from "../lib/sanity.client"

import Image from 'next/image';


import styles from './PostBody.module.css';
import VideoComponent from './videoComponent';




// Barebones lazy-loaded image component
const ImageComponent = ({value}) => {
  const {width, height} = getImageDimensions(value)
  const src = urlFor(value.asset).url()
  return (
    <Image
      src={src}
      alt={value.alt || ' '}
      loading="lazy"
      width={width}
      height={height}
      style={{
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />

  )
} 



const PTVideo =({value}) => { 
      return(
      <VideoComponent vidSrc={value.url} title={value.title} />)
    }

export default function PostBody({ content }) {
  return (
    <div className={`mx-auto max-w-2xl ${styles.portableText}`}>
      <PortableText value={content} 
      components={{
        types: {
          image: ImageComponent,
          youtube: PTVideo,
        },
      }}
      />
    </div>
  )
}
function sanityClient(arg0: { projectId: string; dataset: string; useCdn: boolean }) {
  throw new Error('Function not implemented.')
}

