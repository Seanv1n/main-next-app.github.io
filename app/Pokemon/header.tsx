'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    const [hidden, setHidden] = useState('hidden')
    const handleMenuBar = () => {
        if (hidden === 'hidden') {
            setHidden('')
        } else {
            setHidden('hidden')
        }
    }
    return (
        <header className='bg-white border-gray-200 dark:bg-gray-900'>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PokeBuddy</span>
                </a>
                <button onClick={() => handleMenuBar()} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg tablet:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={hidden + " w-full tablet:block tablet:w-auto"} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 tablet:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 tablet:flex-row tablet:space-x-8 tablet:mt-0 tablet:border-0 tablet:bg-white dark:bg-gray-800 tablet:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="/Pokemon/Home" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded tablet:bg-transparent tablet:text-blue-700 tablet:p-0 dark:text-white tablet:dark:text-blue-500" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href="/Pokedex" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 tablet:hover:bg-transparent tablet:border-0 tablet:hover:text-blue-700 tablet:p-0 dark:text-white tablet:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white tablet:dark:hover:bg-transparent">Pokedex</Link>
                        </li>
                        <li>
                            <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 tablet:hover:bg-transparent tablet:border-0 tablet:hover:text-blue-700 tablet:p-0 dark:text-white tablet:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white tablet:dark:hover:bg-transparent">Teambuilder</Link>
                        </li>
                        <li>
                            <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 tablet:hover:bg-transparent tablet:border-0 tablet:hover:text-blue-700 tablet:p-0 dark:text-white tablet:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white tablet:dark:hover:bg-transparent">Calculator</Link>
                        </li>
                        <li>
                            <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 tablet:hover:bg-transparent tablet:border-0 tablet:hover:text-blue-700 tablet:p-0 dark:text-white tablet:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white tablet:dark:hover:bg-transparent">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header