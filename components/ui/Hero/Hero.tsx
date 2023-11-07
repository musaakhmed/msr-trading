'use client'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <>
            <section className='p-6 space-y-6 h-screen flex flex-col justify-end pb-12'>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            ease: [0.1, 0.03, 0.5, 0.9],
                            duration: 1,
                        },
                    }}
                    className='text-4xl font-semibold'
                >
                    Elevate Healthcare Standards with Our Premium Equipment
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            ease: [0.7, 0.003, 0.9, 0.9],
                            duration: 2,
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            ease: [1, 0.03, 0.5, 0.9],
                            duration: 3,
                        },
                    }}
                    className='p-2 dark:bg-blue-900 bg-blue-600 rounded font-semibold text-white'
                >
                    Explore Our Products
                </motion.button>
            </section>
        </>
    )
}
