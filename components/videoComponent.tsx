import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });


export default function VideoComponent(
  props: {
    vidSrc : string
    muted?: boolean
    autoPlay?: boolean
    controls?: boolean
    captions?: boolean
  }
) {
  const { vidSrc, muted, autoPlay , controls } = props
  return (
      <div className='relative pb-[56.25%]'>
        <ReactPlayer
          url={vidSrc}
          width='100%'
          height='100%'
          playing={autoPlay}
          controls={controls}
          muted={muted}
          className='absolute top-0 left-0'
        />
      </div>
  )
}

