import { AnimatePresence, motion, stagger } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

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
	{
		label: 'Partners',
		link: 'partners',
	},
	{
		label: 'Contact',
		link: 'contact',
	},
];
const mobileLinkVars = {
	initial: {
		y: '30vh',
		transition: {
			duration: 1,
			ease: [0.22, 0, 0.39, 0],
		},
	},
	open: {
		y: 0,
		transition: {
			duration: 1,
			ease: [0.22, 1, 0.39, 1],
		},
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
		<div className=" flex flex-col items-center justify-between gap-16">
			<motion.nav className="">
				<AnimatePresence>
					<ul className="-mt-16 flex w-full flex-col items-center justify-evenly gap-10 text-3xl">
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
									exit={{
										y: '30vh',
										transition: {
											delay: 0.5,
											duration: 1,
											ease: [0.22, 0, 0.39, 0],
										},
									}}
									className="text-primary"
								>
									<Link href={navItem.link}>
										{navItem.label}
									</Link>
								</motion.li>
							</motion.div>
						))}
					</ul>
				</AnimatePresence>
			</motion.nav>
			<AnimatePresence>
				<motion.button
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
					whileHover={{ scale: 1.05 }}
					className=" rounded-lg bg-primary px-8 py-3 text-2xl font-semibold text-secondary"
				>
					Request a Quote
				</motion.button>
			</AnimatePresence>
		</div>
	);
};

export default NavBar;
