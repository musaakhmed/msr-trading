import { AnimatePresence, motion, stagger } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { Button } from '../button';

interface nav_items {
	label: string;
	link: string;
}

const navItems: nav_items[] = [
	{
		label: 'Company',
		link: 'company',
	},
	{
		label: 'Industries',
		link: 'industries',
	},
	// {
	// 	label: 'Partners',
	// 	link: 'partners',
	// },
	{
		label: 'Contact',
		link: 'contact',
	},
];
const mobileLinkVars = {
	initial: {
		y: '30vh',
	},
	open: {
		y: 0,
	},
};

const containerVars = {
	initial: {
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
	open: {
		transition: {
			delayChildren: 0.5,
			staggerChildren: 0.05,
			staggerDirection: 1,
		},
	},
};

const NavBar = ({ isOpen }: { isOpen: boolean }) => {
	return (
		<div className="flex flex-col items-center justify-between gap-16 lg:flex-row lg:gap-8">
			<motion.nav className="w-full">
				<AnimatePresence>
					<ul className="flex w-full flex-col items-center justify-evenly gap-8 text-3xl lg:flex-row lg:gap-6">
						{navItems.map((navItem) => (
							<motion.div
								variants={containerVars}
								initial="initial"
								animate="open"
								exit="initial"
								className="overflow-hidden"
								key={navItem.link}
							>
								<motion.li
									onClick={(isOpen) => !isOpen}
									variants={mobileLinkVars}
									initial="initial"
									animate="open"
									transition={{
										duration: 1,
										ease: "easeOut",
									}}
									exit={{
										y: '30vh',
										transition: {
											delay: 0.5,
											duration: 1,
											ease: "easeIn",
										},
									}}
									className="group"
								>
									<Link href={navItem.link}>
										<Button
											variant="ghost"
											className="text-2xl font-medium transition-all duration-300 hover:scale-105 hover:bg-accent/10 lg:text-base lg:px-4 lg:py-2"
										>
											<span className="relative">
												{navItem.label}
												<span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
											</span>
										</Button>
									</Link>
								</motion.li>
							</motion.div>
						))}
					</ul>
				</AnimatePresence>
			</motion.nav>
			<AnimatePresence>
				<motion.div
					onClick={(isOpen) => !isOpen}
					initial={{ opacity: 0, y: 50 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							ease: [0.1, 0.03, 0.5, 0.9],
							duration: 0.5,
							delay: 0.25,
						},
					}}
					exit={{ opacity: 0, y: 50 }}
					className="group"
				>
					<Button 
						className="text-lg font-semibold bg-primary hover:bg-primary/90 text-white shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 lg:text-base lg:px-6 lg:py-2"
					>
						<span className="flex items-center gap-2">
							Request a Quote
							<svg 
								className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
								fill="none" 
								stroke="currentColor" 
								viewBox="0 0 24 24"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</span>
					</Button>
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default NavBar;
