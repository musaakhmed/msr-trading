'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import NavBar from './NavBar';

export default function NavMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const menuOpenHandler = () => {
		setIsOpen((prev) => !prev);
		console.log('Open:', isOpen);
	};

	return (
		<header className="fixed top-0 z-10 flex h-16 w-full items-center justify-between bg-cerulean-800 px-6">
			<Link href="/" className="text-lg font-bold">
				Weld Med
			</Link>
			<div className="transition-all duration-200 ease-in">
				<div onClick={menuOpenHandler}>X</div>
				<motion.div
					className={
						isOpen
							? 'fixed left-0 top-16 mx-auto flex h-screen w-full flex-col justify-center gap-6 bg-cerulean-800'
							: 'hidden'
					}
				>
					<NavBar />
				</motion.div>
			</div>
		</header>
	);
}
