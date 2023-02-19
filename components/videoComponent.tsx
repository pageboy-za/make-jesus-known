import dynamic from "next/dynamic";

import PostDate from "./PostDate";
const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });



export default function VideoComponent(
  props: {
    vidSrc : string
    muted?: boolean
    autoPlay?: boolean
    controls?: boolean
    captions?: boolean
    title?: string
    date?: string
  }
) {
  const { vidSrc, muted, autoPlay , controls, title, date} = props
  return (
    <div>
    <div className="text-xl font-bold pb-2">{title}</div>
    <div className="text-base text-right"><PostDate dateString={date} /></div>
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
      </div>
  )
}

