
import ReactPlayer from 'react-player/lazy'

export default function VideoComponent(
  props: {
    vidSrc : string
  }
) {
  const { vidSrc } = props
  return (
    <>
    <style jsx global>{`
        .player-wrapper {
          position: relative;
          padding-top: 25;
          padding-bottom: 56.25%; /* Player ratio: 100 / (1280 / 720) */
        }
        
        .react-player {
          position: absolute;
          top: 0;
          left: 0;
        }
      `}</style>
      <div className='relative pb-[56.25%]'>
        <ReactPlayer
          url={vidSrc}
          width='100%'
          height='100%'
          playing={true}
          controls={true}
          muted={true}
          className='absolute top-0 left-0'
        />
      </div>
    </>
  )
}

