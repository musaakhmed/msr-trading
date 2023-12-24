'use client';
import { motion } from 'framer-motion';

export default function Hero() {
	return (
		<>
			<motion.section className=" flex h-[calc(100vh-4rem)] flex-col justify-start space-y-6 py-36">
				<motion.h1
					initial={{ opacity: 0, y: 25 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							ease: [0.1, 0.03, 0.5, 0.9],
							duration: 0.5,
						},
					}}
					className="text-text px-6 text-center text-4xl font-extrabold  "
				>
					Elevate Healthcare Standards with Our Premium Equipment
				</motion.h1>
				<motion.div
					className="mx-4 h-1/3 rounded-lg bg-cerulean-800 bg-hero-pattern bg-cover bg-center bg-blend-overlay"
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							ease: [0.1, 0.03, 0.5, 0.9],
							duration: 1,
							delay: 0.5,
						},
					}}
				/>

				<motion.p
					className="p-6 text-center text-lg"
					initial={{ opacity: 0, y: 25 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							ease: [0.1, 0.03, 0.5, 0.9],
							duration: 0.5,
							delay: 0.25,
						},
					}}
				>
					With a focus on innovation and quality, we bring you
					cutting-edge solutions trusted by healthcare professionals
					worldwide.
				</motion.p>

				<motion.button
					initial={{ opacity: 0, y: 25 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							ease: [0.1, 0.03, 0.5, 0.9],
							duration: 0.5,
							delay: 0.5,
						},
					}}
					whileHover={{ scale: 1.01 }}
					className="mx-auto w-1/2 rounded-lg bg-primary p-2 text-secondary "
				>
					Explore Our Products
				</motion.button>
			</motion.section>
			{/* <div className='h-screen'></div> */}
		</>
	);
}
