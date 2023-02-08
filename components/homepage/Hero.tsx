/* This example requires Tailwind CSS v3.0+ */
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon,XMarkIcon} from '@heroicons/react/24/outline'
import VideoComponent from 'components/videoComponent'
import Link from 'next/link'
import React from 'react'
import {useState } from 'react'

import Menu from './menu'


const menuArr = [
    { name: 'About', href: '/#about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]


export default function newHero(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen ] = useState(false)
 
  return (
      <div className="bg-gray-900 px-6 lg:px-8 rounded-b-lg">
        <Menu nav={menuArr} />
        <div className="mx-auto max-w-2xl py-16 sm:py-16 lg:py-10">
          <div className="text-center">
            <h1 className="bville uppercase text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Make Jesus Known
            </h1>
            <div className="mt-6 text-lg leading-8 text-gray-300">
              A campaign by Calvary Chapel Cambridge 
            </div>
          </div>
        </div>
        <div className='py-8'>
        <VideoComponent vidSrc="https://www.youtube.com/watch?v=BRNMHRtyo84" muted={true} autoPlay={true} controls={true} />
        </div>
      </div>
  )
}
