import {Dialog,Transition } from '@headlessui/react'
import VideoComponent from 'components/videoComponent'
import Image from 'next/image'
import React from 'react'
import {Fragment, useState} from 'react'

import Menu from './menu'

const menuArr = [
    { name: 'About', href: '/#about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const PlayBtn = () =>(  
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
  </svg>
  
)

export default function Hero(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  function openDialog() {
    setIsOpen(true);
  }

  function closeDialog() {
    setIsOpen(false);
  }
  return (
      <div className="bg-gray-900 px-6 lg:px-8 rounded-b-lg">
        <Menu nav={menuArr} />
        <div className="mx-auto max-w-2xl pb-6">
          <div className="text-center">
            <h1 className="bville uppercase text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Make Jesus Known
            </h1>
            <div className="text-lg leading-8 text-gray-300">
              A campaign by Calvary Chapel Cambridge 
            </div>
          </div>
        </div>
        <div className='pt-2 pb-6'>
          <div className='relative w-full h-full'>
              <Image
                src="/poster.jpg"
                alt="video posterimage"
                width={1280}
                height={720}
                className="object-cover"
              />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-20 h-20 rounded-full bg-gray-400 opacity-60 flex justify-center items-center hover:shadow-xl hover:border-3 hover:border-white hover:opacity-80">
                <div className="relative w-20 h-20 text-white flex flex-col justify-center items-center">
                
                  <a onClick={openDialog} href="#">
                    <PlayBtn />
                  </a>
                </div>
            </div>
            
          </div>
          <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <div className="min-h-screen min-w-full bg-black bg-opacity-80 flex items-center justify-center px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="w-full max-w-6xl max-h-screen flex flex-col">
                <div className="relative pb-[56.25%]">
                <VideoComponent vidSrc="https://www.youtube.com/watch?v=BRNMHRtyo84" autoPlay={true} controls={true} />
                </div>
              </div>
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
          <div className='flex flex-col first-letter:items-center'>
          <button className='bg-black text-white font-semibold' onClick={() => setIsOpen(false)}>Close</button>
          </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
        </div>
      </div>
      </div>
  )
}