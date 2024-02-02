'use client';

import { motion } from 'framer-motion';

interface IndustriesData {
	name: string;
	description: string;
	image?: string;
}

interface IndustriesDataArray extends Array<IndustriesData> {}

const areasIndustries: IndustriesDataArray = [
	{
		name: 'Technology',
		description:
			'At the forefront of innovation, we are the nexus for sourcing tech components, microchips, and advancing electronic advancements globally.',
	},
	{
		name: 'Healthcare and Pharmaceuticals',
		description:
			'Caring for a healthier world, we source life-saving devices, pharmaceuticals, and cutting-edge medical technology, delivering hope on a global scale.',
	},
];

const titleVars = {
	initial: { opacity: 0, y: 25 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.1, 0.03, 0.5, 0.9],
			duration: 0.5,
			delay: 0.25,
		},
	},
};
const paragraphVars = {
	initial: { opacity: 0, y: 25 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.1, 0.03, 0.5, 0.9],
			duration: 0.5,
			delay: 0.5,
		},
	},
};

const industries = () => {
	return (
		<div className="max-w-screen container mx-auto pb-12 pt-16 lg:px-4 lg:pt-24 ">
			<section className=" flex h-96 w-full flex-col items-center justify-center gap-12 bg-secondary px-4 text-center">
				<motion.h1
					variants={titleVars}
					initial="initial"
					animate="animate"
					className="text-3xl font-extrabold"
				>
					Unlocking Precision in Diverse Dental Fields
				</motion.h1>
				<motion.p
					variants={paragraphVars}
					initial="initial"
					animate="animate"
					className="text-lg"
				>
					From diagnostics to treatment, sterilization to
					orthodontics, we specialize in delivering precision and
					innovation that elevate practices across different facets of
					oral healthcare.
				</motion.p>
			</section>
			<section className="my-12 mb-24 flex flex-col gap-4 px-4">
				{areasIndustries.map(({ name, description }, index) => (
					<motion.div
						initial={{ x: -100, opacity: 0 }}
						whileInView={{
							x: 0,
							opacity: 1,
							transition: {
								ease: [0.1, 0.03, 0.5, 0.9],
								duration: 0.5,
								delay: 0.25,
							},
						}}
						viewport={{ once: true }}
						key={index}
						className="rounded-lg border border-primary p-4 text-center first:pt-0 last:pb-0 "
					>
						<h2 className="mb-2 text-lg font-semibold">{name}</h2>
						<p>{description}</p>
					</motion.div>
				))}
			</section>
		</div>
	);
};

export default industries;
