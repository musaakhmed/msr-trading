'use client'
import { motion } from 'framer-motion'
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
    {
        label: 'Contact',
        link: 'contact',
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
                <motion.div
                    className={
                        isOpen
                            ? 'flex flex-col justify-center gap-6 mx-auto bg-cerulean-800 h-screen w-full fixed top-16 left-0'
                            : 'hidden'
                    }
                >
                    <nav className='text-center '>
                        <ul className='space-y-8 text-2xl '>
                            {navItems.map((navItem) => (
                                <li
                                    className='flex flex-col justify-evenly hover:bg-cerulean-400 transition-all hover:bg-opacity-50 duration-200 rounded-lg ease-in-out p-4 w-1/2 mx-auto'
                                    key={navItem.link}
                                >
                                    <Link href={navItem.link}>
                                        {navItem.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <motion.button
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                ease: [0.1, 0.03, 0.5, 0.9],
                                duration: 1,
                                delay: 2,
                            },
                        }}
                        whileHover={{ scale: 1.05 }}
                        className='p-2 bg-cerulean-400 rounded font-semibold text-white w-1/3 mx-auto'
                    >
                        Request a Quote
                    </motion.button>
                </motion.div>
            </div>
        </header>
    )
}
