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
		<header className="bg-background fixed top-0 z-10 flex h-16 w-full items-center justify-between px-6 shadow-md ">
			<Link href="/" className="text-primary text-lg font-semibold">
				Weld Med
			</Link>
			<div className="transition-all duration-200 ease-in">
				<div onClick={menuOpenHandler}>X</div>
				<motion.div
					className={
						isOpen
							? 'bg-primary fixed left-0 top-16 mx-auto flex h-screen w-full flex-col justify-center gap-6'
							: 'hidden'
					}
				>
					<NavBar />
				</motion.div>
			</div>
		</header>
	);
}
