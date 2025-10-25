'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import NavBar from './NavBar';
import { HamBox } from './HamBox';
import Image from 'next/image';

const variants = {
	initial: {
		scaleY: 0,
	},
	animate: {
		scaleY: 1,
	},
	exit: {
		scaleY: 0,
	},
};

export default function NavMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const menuOpenHandler = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<header className="fixed top-0 z-50 flex h-20 w-full items-center justify-between bg-background/80 backdrop-blur-xl border-b border-border/50 px-6 shadow-lg">
			<div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between">
				<Link
					href="/"
					className="group flex items-center space-x-3 text-xl font-bold text-primary transition-all duration-300 hover:scale-105"
					onClick={() => setIsOpen(false)}
				>
					<div className="relative">
						<Image
							src="/assets/images/logo/logo.png"
							className="h-12 w-auto transition-all duration-300 group-hover:drop-shadow-glow"
							width={120}
							height={120}
							alt="MSR Trading Logo"
						/>
						<div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 blur-xl transition-all duration-300 group-hover:opacity-100"></div>
					</div>
					<span 
						className="hidden sm:block gradient-text-strong text-2xl font-extrabold"
						aria-label="MSR Trading"
						role="text"
					>
						MSR Trading
					</span>
				</Link>
				<div className="transition-all duration-200 ease-in">
					<motion.div
						onClick={menuOpenHandler}
						className="cursor-pointer p-2 rounded-lg hover:bg-accent/10 transition-colors duration-200"
					>
						<HamBox isOpen={isOpen} />
					</motion.div>
					<AnimatePresence>
						{isOpen && (
							<motion.div
								onClick={menuOpenHandler}
								initial="initial"
								animate="animate"
								exit="exit"
								variants={variants}
								transition={{
									duration: 0.5,
									ease: "easeOut",
								}}
								className={
									isOpen
										? 'fixed left-0 top-20 z-40 mx-auto flex h-screen w-full origin-top flex-col justify-center gap-8 bg-background/95 backdrop-blur-xl shadow-2xl border-t border-border/50'
										: 'hidden'
								}
							>
								<NavBar isOpen={isOpen} />
							</motion.div>
						)}
					</AnimatePresence>
					<div className="hidden lg:block">
						<NavBar isOpen={true} />
					</div>
				</div>
			</div>
		</header>
	);
}
