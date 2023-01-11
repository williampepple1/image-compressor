import React from 'react'
import pineapple from '../assets/pineapple.jpg'

const navigation = [
    { name: 'Compress your images', href: '#' },
    { name: 'Jpeg and PNG', href: '#' },
   
  ]
  
  export default function Header() {
    return (
      <header className="bg-gray-600">
        <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between border-b border-gray-500 py-6 lg:border-none">
            <div className="flex items-center">
              <a href="#">
                <span className="sr-only">Open Source</span>
                <img className="h-10 w-auto" src={pineapple} alt="" />
              </a>
              <div className="ml-10 hidden space-x-8 lg:block">
                {navigation.map((link) => (
                  <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-gray-50">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-gray-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
              >
                Image Compressor
              </a>
              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-gray-600 hover:bg-gray-50"
              >
                Jpeg and PNG files
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
            {navigation.map((link) => (
              <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-gray-50">
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    )
  }
  

 