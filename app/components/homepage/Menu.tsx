"use client"
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon,XMarkIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'



export default function Menu({nav}) {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigation = nav

  return (
<div className="px-6 pb-4 bg-gray-900 lg:px-8">
  
        <nav className="flex items-center justify-between pt-6" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Make Jesus Known</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white hover:bold hover:text-md">
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        <div>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel focus="true" className="fixed inset-0 z-10 px-6 py-6 overflow-y-auto bg-gray-900/75 opacity-90 lg:hidden">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Make Jesus Known</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="py-6 space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg hover:bg-gray-400/10"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        </div>
        </div>
         )
        }