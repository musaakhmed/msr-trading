import { motion } from 'framer-motion';
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

const NavBar = () => {
	return (
		<div className="flex flex-col items-center justify-between gap-12">
			<nav className="">
				<ul className="flex w-full flex-col items-center justify-evenly gap-12 text-2xl">
					{navItems.map((navItem) => (
						<li className="text-secondary" key={navItem.link}>
							<Link href={navItem.link}>{navItem.label}</Link>
						</li>
					))}
				</ul>
			</nav>

			<motion.button
				initial={{ opacity: 0, y: 50 }}
				animate={{
					opacity: 1,
					y: 0,
					transition: {
						ease: [0.1, 0.03, 0.5, 0.9],
						duration: 1,
						delay: 2,
					},
				}}
				whileHover={{ scale: 1.05 }}
				className=" bg-secondary text-primary w-1/3 rounded p-2 font-semibold"
			>
				Request a Quote
			</motion.button>
		</div>
	);
};

export default NavBar;
