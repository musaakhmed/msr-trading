'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Hero() {
	return (
			<motion.section className=" flex h-[calc(100vh-5em)] flex-col justify-start space-y-6 py-36">
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
					Welcome
					to <span className='text-accent'>MSR Trading</span>, your gateway to global trade prosperity!
				</motion.h1>
				<motion.div
					className="bg-opacity-75 bg-hero-pattern mx-4 h-full rounded-lg bg-cover bg-center flex flex-col justify-center"
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							ease: [0.1, 0.03, 0.5, 0.9],
							duration: 1,
							delay: 0.5,
						},
					}}
				>
				<motion.p
					className="p-6 text-center text-lg rounded-lg text-primary-foreground font-bold "
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
					<span className='bg-accent'>
						We are your trusted partner for navigating the intricate
					world of international trade.
					</span>
				</motion.p>
				</motion.div>


				<motion.div
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
					className="mx-auto"
				>
					<Button className="text-md">Explore The Industries</Button>
				</motion.div>
			</motion.section>
	);
}
