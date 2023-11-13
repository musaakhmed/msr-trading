import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className=' rounded-lg  shadow bg-cerulean-800 mx-4'>
                <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between -mt-10'>
                    <span className='text-sm  sm:text-center text-cerulean-100'>
                        © 2023{' '}
                        <a href='/' className='hover:underline'>
                            Weld Med
                        </a>
                        . All Rights Reserved.
                    </span>
                    <ul className='flex flex-wrap items-center mt-3 text-sm font-medium  text-cerulean-100 sm:mt-0'>
                        <li>
                            <a
                                href='#'
                                className='hover:underline me-4 md:me-6'
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='hover:underline me-4 md:me-6'
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='hover:underline me-4 md:me-6'
                            >
                                Licensing
                            </a>
                        </li>
                        <li>
                            <a href='#' className='hover:underline'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
