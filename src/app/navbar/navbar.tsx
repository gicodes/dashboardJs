"use client";
import React from 'react';
import { useState } from 'react';

// This component is built with Tailwind Navbar template
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [ smMenuDrop, setSmMenuDrop ] = useState(false);
  const [ profileDrop, setProfileDrop ] = useState(false);
  
  const handleProfileDropDown = () =>  setProfileDrop(!profileDrop);
  const handleSmMenuDropDown = () => setSmMenuDrop(!smMenuDrop);

  const smMenuDropDown = 
    <div id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"  */}
        {navigation.map((item) => (
          <a 
            href={item.href} 
            key={item.name}
            aria-current={item.current ? 'page' : undefined}
            className={classNames(
              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
        )}
        >
        {item.name}
        </a>
      ))}
      </div>
    </div>

  const profileDropDown = 
    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
      {/* Active: "bg-gray-100 outline-none", Not Active: ""  */}
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" tabIndex={-1} role="menuitem" id="user-menu-item-0">Dashboard</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" tabIndex={-1} role="menuitem" id="user-menu-item-1">Settings</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" tabIndex={-1} role="menuitem" id="user-menu-item-2">Sign out</a>
    </div>

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div 
            onClick={handleSmMenuDropDown}
            className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button type="button" aria-controls="mobile-menu" aria-expanded="false"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              {!smMenuDrop ? 
                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                :
                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              }
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              {/* Project svg logo image element !!  */}
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
            </button>
    
            {/* Profile dropdown  */}
            <div className="relative ml-3">
              <div onClick={handleProfileDropDown}>
                <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img 
                    className="size-8 rounded-full" alt="Gicodes as a Profile photo placeholder"
                    src="https://media.licdn.com/dms/image/v2/D4D03AQH2gPWxPmvVIg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715115476831?e=1736985600&v=beta&t=W3c7IMyw2TfRI6Lzx701U2-BRR7KykTLOj8b81dFR54"/>
                </button>
              </div>

              {profileDrop && profileDropDown}
            </div>
          </div>
        </div>
      </div>
    
      {/* Mobile menu, show/hide based on menu state.  */}
      {smMenuDrop && smMenuDropDown}
    </nav>
  )
}