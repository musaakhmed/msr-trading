'use client'

import { useState } from 'react'

export default function NavMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className='z-10 fixed w-full top-0 bg-cerulean-900 flex justify-between items-center px-6 h-16'>
            <span className='font-bold text-lg'>Weld Med</span>

            <nav>{isOpen ? '-' : 'null'}</nav>
        </header>
    )
}
