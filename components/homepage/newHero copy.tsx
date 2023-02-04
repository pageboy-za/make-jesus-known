/* This example requires Tailwind CSS v3.0+ */
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, PlayIcon,XMarkIcon} from '@heroicons/react/24/outline'
import VideoComponent from 'components/videoComponent'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

import Video from './Video'

const navigation = [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#' },
  ]

export default function newHero() {
  const [mobileMenuOpen, setMobileMenuOpen ] = useState(false)

  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
     {/*  <Image
        src="/poster.jpg"
        alt=""
        width={2000}
        height={1000}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      /> */}
      <div className="px-6 lg:px-8">
        <nav className="flex items-center justify-between pt-6" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Make Jesus Known</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white hover:bold hover:text-md">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-gray-900 px-6 py-6 lg:hidden">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Make Jesus Known</span>

              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>

        <div className="mx-auto max-w-2xl py-16 sm:py-16 lg:py-24">
          <div className="text-center">
            <h1 className="bville text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Make Jesus Name
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              A project by Calvary Chapel Cambridge 
            </p>
            </div>
            <div  id="video" className="isolate z-40 w-full aspect-video mt-1 flex items-center justify-center">
            <VideoComponent vidSrc="https://www.youtube.com/watch?v=BRNMHRtyo84" />
             {/*  <button onClick={() => this.setOpen(true)} className="w-50 rounded-md bg-gray-900 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Play<PlayIcon />
            </button> */}    
            </div>
        </div>
      </div>
      <VideoComponent vidSrc="https://www.youtube.com/watch?v=BRNMHRtyo84" />
    </div>
  )
}
