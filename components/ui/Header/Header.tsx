'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import NavBar from './NavBar';

const variants = {
	initial: {
		scaleY: 0,
	},
	animate: {
		scaleY: 1,
		transition: {
			duration: 0.5,
			ease: [0.12, 1, 0.39, 1],
		},
	},
	exit: {
		scaleY: 0,
		transition: {
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1],
			delay: 0.15,
		},
	},
};

export default function NavMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const menuOpenHandler = () => {
		setIsOpen((prev) => !prev);
		console.log('Open:', isOpen);
	};

	return (
		<header className="bg-background fixed top-0 z-10 flex h-16 w-full items-center justify-between px-6 shadow-md ">
			<Link href="/" className="text-primary text-xl font-bold">
				Weld Med
			</Link>
			<div className="transition-all duration-200 ease-in">
				<motion.div
					onClick={menuOpenHandler}
					className=" cursor-pointer"
				>
					{/* //TODO Create NavBar Hamburger button animation */}
					{isOpen ? 'X' : '='}
				</motion.div>
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial="initial"
							animate="animate"
							exit="exit"
							variants={variants}
							className={
								isOpen
									? 'bg-primary fixed left-0 top-16 z-20 mx-auto flex h-screen w-full origin-top flex-col justify-center gap-6'
									: 'hidden'
							}
						>
							<NavBar />
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</header>
	);
}
