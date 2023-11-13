'use client'

import { log } from 'console'
import Link from 'next/link'
import { useState } from 'react'

interface nav_items {
    label: string
    link: string
}

const navItems: nav_items[] = [
    {
        label: 'Company',
        link: 'about',
    },
    {
        label: 'Industries',
        link: 'industries',
    },
    {
        label: 'Partners',
        link: 'partners',
    },
]

export default function NavMenu() {
    const [isOpen, setIsOpen] = useState(false)

    const menuOpenHandler = () => {
        setIsOpen((prev) => !prev)
        console.log('Open:', isOpen)
    }

    return (
        <header className=' z-10 fixed w-full top-0 bg-cerulean-800 flex justify-between items-center px-6 h-16 text-cerulean-50'>
            <Link href='/' className='font-bold text-lg'>
                Weld Med
            </Link>
            <div className='transition-all duration-200 ease-in'>
                <div onClick={menuOpenHandler}>X</div>
                <div
                    className={
                        isOpen
                            ? 'flex flex-col justify-evenly gap-6 mx-auto bg-cerulean-800 h-screen w-full fixed top-16 left-0'
                            : 'hidden'
                    }
                >
                    <nav className='text-center '>
                        <ul className=''>
                            {navItems.map((navItem) => (
                                <li
                                    className='flex flex-col justify-evenly'
                                    key={navItem.link}
                                >
                                    <Link href={navItem.link}>
                                        {navItem.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <button className='border border-0.5 w-1/3 mx-auto border-cerulean-200 bg-cerulean-900 hover:bg-cerulean-700 transition-all duration-150 ease-in-out rounded-md text-cerulean-50 p-2'>
                        Contact Us
                    </button>
                </div>
            </div>
        </header>
    )
}
