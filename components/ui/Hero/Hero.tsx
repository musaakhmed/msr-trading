'use client';
import { motion } from 'framer-motion';

export default function Hero() {
	return (
		<>
			<motion.section className="flex h-[calc(100vh-4rem)] flex-col justify-end space-y-6 py-16">
				<motion.div
					className="h-1/2 bg-cerulean-800 bg-hero-pattern bg-cover bg-center bg-blend-overlay"
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
					className="bg-gradient-to-b from-cerulean-600 to-cerulean-300 bg-clip-text px-6
                    text-2xl font-semibold text-transparent "
				>
					Elevate Healthcare Standards with Our Premium Equipment
				</motion.h1>

				<motion.p
					className="p-6 text-sm"
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
					whileHover={{ scale: 1.02 }}
					className="mx-auto w-1/2 rounded-lg bg-cerulean-400 p-2 font-semibold text-white hover:rounded"
				>
					Explore Our Products
				</motion.button>
			</motion.section>
			{/* <div className='h-screen'></div> */}
		</>
	);
}
