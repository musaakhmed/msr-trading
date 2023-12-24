'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import NavBar from './NavBar';
import { HamBox } from './HamBox';

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
	};

	return (
		<header className=" fixed top-0 z-10 flex h-16 w-full items-center justify-between bg-background px-6 shadow-md ">
			<Link
				href="/"
				className="text-xl font-bold text-primary"
				onClick={() => setIsOpen(false)}
			>
				Weld Med
			</Link>
			<div className="transition-all duration-200 ease-in">
				<motion.div
					onClick={menuOpenHandler}
					className=" cursor-pointer"
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
							className={
								isOpen
									? 'fixed left-0 top-16 z-20 mx-auto flex h-screen w-full origin-top flex-col justify-center gap-6 bg-background bg-opacity-70 shadow backdrop-blur-md '
									: 'hidden'
							}
						>
							<NavBar isOpen={isOpen} />
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</header>
	);
}
