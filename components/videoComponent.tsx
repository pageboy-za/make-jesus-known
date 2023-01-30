
import ReactPlayer from 'react-player/lazy'

export default function VideoComponent(
  props: {vidSrc : string}
) {
  const { vidSrc } = props
  return (
    <>
    <div className='grid content-center place-content-center'>
    <h2 className='text-black text-lg bold decoration-slate-700 py-4 px-2 '>Sermon Video</h2>
    <ReactPlayer  className='rounded-lg' url={vidSrc} />
    </div>
    </>
  )
}