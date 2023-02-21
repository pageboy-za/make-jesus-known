import VideoComponent from 'components/videoComponent'
import React from 'react'

import Menu from './menu'

const menuArr = [
    { name: 'About', href: '/#about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    {name:'Video Sermons', href:'/youtube'},
  ]

  const PlayBtn = () =>(  
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
  </svg>
  
)

export default function Hero(): JSX.Element {
  return (
      <div className="bg-gray-900 px-6 lg:px-8 rounded-b-lg">
        <Menu nav={menuArr} />
        <div className="mx-auto max-w-2xl pb-6">
          <div className="text-center">
            <h1 className="bville uppercase tracking-wide text-4xl font-bold text-white sm:text-6xl">
              Make Jesus Known
            </h1>
            <div className="text-lg leading-8 text-gray-300">
              A campaign by Calvary Chapel Cambridge 
            </div>
          </div>
        </div>
        <div className='pt-2 pb-6'>
          <div className='relative w-full h-full'>
          <VideoComponent vidSrc="https://www.youtube.com/watch?v=BRNMHRtyo84" light={true} autoPlay={true} />
        </div>
      </div>
      </div>
  )
}