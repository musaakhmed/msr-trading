'use client'

import { useState } from 'react'

export default function NavMenu() {
    const [open, isOpen] = useState(false)

    return <nav className='h-12 z-10 bg-cerulean-100'>NavMenu</nav>
}
