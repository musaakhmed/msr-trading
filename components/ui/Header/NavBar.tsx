import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

interface nav_items {
	label: string;
	link: string;
}

const navItems: nav_items[] = [
	{
		label: 'Company',
		link: 'about',
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
			duration: 0.5,
			ease: [0.22, 1, 0.39, 1],
		},
	},
	open: {
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.22, 1, 0.39, 1],
		},
	},
};

const NavBar = () => {
	return (
		<div className=" flex flex-col items-center justify-between gap-16">
			<AnimatePresence>
				<motion.nav className="">
					<ul className="-mt-16 flex w-full flex-col items-center justify-evenly gap-10 overflow-hidden text-3xl">
						{navItems.map((navItem) => (
							<motion.li
								variants={mobileLinkVars}
								initial="initial"
								animate="open"
								exit="initial"
								className="text-primary"
								key={navItem.link}
							>
								<Link href={navItem.link}>{navItem.label}</Link>
							</motion.li>
						))}
					</ul>
				</motion.nav>

				<motion.button
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
					exit="initial"
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
