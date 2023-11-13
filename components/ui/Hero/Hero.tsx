'use client'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <>
            <motion.section className=' space-y-6 h-[calc(100vh-4rem)] flex flex-col justify-end py-16'>
                <motion.div
                    className='bg-hero-pattern bg-cover bg-center h-1/2 bg-blend-overlay bg-cerulean-800'
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            ease: [0.1, 0.03, 0.5, 0.9],
                            duration: 1.5,
                            delay: 2,
                        },
                    }}
                />

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            ease: [0.1, 0.03, 0.5, 0.9],
                            duration: 1,
                        },
                    }}
                    className='text-4xl px-6 font-semibold text-cerulean-400'
                >
                    Elevate Healthcare Standards with Our Premium Equipment
                </motion.h1>

                <motion.p
                    className='p-6'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            ease: [0.1, 0.03, 0.5, 0.9],
                            duration: 1,
                            delay: 0.6,
                        },
                    }}
                >
                    At WeldMed, we are committed to setting the bar high in
                    healthcare. Our premium medical equipment is engineered to
                    provide the best patient care, improve diagnosis, and
                    enhance treatment outcomes. With a focus on innovation and
                    quality, we bring you cutting-edge solutions trusted by
                    healthcare professionals worldwide.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            ease: [0.1, 0.03, 0.5, 0.9],
                            duration: 1,
                            delay: 1.2,
                        },
                    }}
                    whileHover={{ scale: 1.05 }}
                    className='p-2 bg-cerulean-400 rounded font-semibold text-white w-1/2 mx-auto'
                >
                    Explore Our Products
                </motion.button>
            </motion.section>
            <div className='h-screen'></div>
        </>
    )
}
