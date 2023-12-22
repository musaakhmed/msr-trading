'use client';
import { motion } from 'framer-motion';

export default function Hero() {
	return (
		<>
			<motion.section className=" flex h-[calc(100vh-4rem)] flex-col justify-end space-y-6 py-16">
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
					className="text-primary px-6 text-center text-4xl font-semibold  "
				>
					Elevate Healthcare Standards with Our Premium Equipment
				</motion.h1>
				<motion.div
					className="mx-4 h-1/2 rounded-lg bg-cerulean-800 bg-hero-pattern bg-cover bg-center bg-blend-overlay"
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
					className="text-md text-primary p-6"
					initial={{ opacity: 0, y: 50 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							ease: [0.1, 0.03, 0.5, 0.9],
							duration: 0.5,
							delay: 0.4,
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
							duration: 0.5,
							delay: 1,
						},
					}}
					whileHover={{ scale: 1.01 }}
					className="bg-primary text-secondary mx-auto w-1/2 rounded-lg p-2 "
				>
					Explore Our Products
				</motion.button>
			</motion.section>
			{/* <div className='h-screen'></div> */}
		</>
	);
}
