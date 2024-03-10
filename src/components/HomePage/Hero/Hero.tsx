'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Hero() {
	return (
		<motion.section className=" flex h-[calc(100vh-5em)] flex-col items-center justify-between space-y-6 pb-12 pt-24">
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
				className="text-text px-6 text-center text-4xl font-extrabold md:py-12 "
			>
				Welcome to <span className="text-accent">MSR Trading</span>,
				your guide to the{' '}
				<span className="text-accent">Modern Silk Road</span>!
			</motion.h1>
			<motion.div
				className="mx-4 flex h-full flex-col justify-center rounded-lg bg-opacity-75 bg-hero-pattern bg-cover bg-center"
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
					className="rounded-lg p-6 text-center text-lg font-bold text-primary-foreground "
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
					<span className="bg-accent text-xl md:text-4xl md:leading-relaxed">
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
				<Button className="text-lg font-bold md:p-6 md:text-xl">
					Explore The Industries
				</Button>
			</motion.div>
		</motion.section>
	);
}
