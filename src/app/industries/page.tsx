'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface IndustriesData {
	name: string;
	description: string;
	image?: string;
}

interface IndustriesDataArray extends Array<IndustriesData> {}

const areasIndustries: IndustriesDataArray = [
	{
		name: 'Laboratory Supplies',
		description:
			'Empowering accurate diagnoses, MSR Trading offers a comprehensive selection of high-quality laboratory supplies. From blood collection tubes and swabs to centrifuge tubes and test kits, we equip your lab for efficient and reliable results. ',
	},
	{
		name: 'Reagents',
		description:
			'Accurate diagnoses rely on high-quality tools. MSR Trading empowers your laboratory with a complete selection of essential laboratory reagents.  From specific antibodies and enzymes to critical buffers and staining solutions, we offer the building blocks for reliable and trustworthy results.',
	},
	{
		name: 'Medical Consumables',
		description:
			'From wound care essentials and personal protective equipment to anesthesia & respiratory supplies and urology products, MSR Trading offers a comprehensive range of high-quality medical consumables to streamline your daily operations.',
	},
	{
		name: 'Welding',
		description:
			'We provide a comprehensive selection of welding equipment and supplies, from industrial-grade machines to safety gear and consumables. Ensuring efficient, reliable, and safe welding operations for your projects.',
	},
	{
		name: 'Machinery',
		description:
			' From heavy-duty machinery for large-scale construction to precision tools for delicate manufacturing processes, we offer the equipment you need to optimize your production line and achieve peak efficiency.',
	},
	{
		name: 'Medical Consumables',
		description:
			'Beyond machinery, we offer a vast range of industrial equipment, including control systems, automation solutions, and facility maintenance tools. Equipping your industrial operations for smooth functionality and long-lasting performance.',
	},
	{
		name: 'Modern Technology',
		description:
			'Stay ahead of the curve in the ever-evolving tech landscape with our cutting-edge equipment and resources. We source the latest advancements in microchips, fabrication tools, and testing equipment to empower your technological innovation.',
	},
	{
		name: 'Energy and Natural Resources',
		description:
			'We offer a comprehensive selection of equipment to empower your energy generation needs, regardless of source. Harness clean energy solutions with our selection of solar panels and wind turbines technology. Maintain reliable and efficient operations extraction, refining, and seamless distribution equipment.',
	},
	{
		name: 'Sustainable Agriculture',
		description:
			'Cultivate a sustainable and productive future. We provide advanced farming equipment, including precision planting tools, irrigation systems, and renewable energy solutions. Helping you optimize your agricultural practices while minimizing environmental impact.',
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
		<main className="max-w-screen mx-auto pb-12 pt-16 lg:pt-24 ">
			<section className=" container mx-auto mb-12 flex h-96 w-full flex-col items-center justify-center gap-12 bg-accent px-8 text-center text-white">
				<motion.h1
					variants={titleVars}
					initial="initial"
					animate="animate"
					className="text-3xl font-extrabold"
				>
					Equipping Your Success Across Industries
				</motion.h1>
				<motion.p
					variants={paragraphVars}
					initial="initial"
					animate="animate"
					className="text-lg lg:text-xl xl:text-2xl"
				>
					From diagnostics to treatment, sterilization to
					orthodontics, we specialize in delivering precision and
					innovation that elevate practices across different facets of
					oral healthcare.
				</motion.p>
			</section>
			{/*
			 TODO make into a separate component
			  */}
			<section className="mx-4 my-12 mb-24 flex flex-col justify-center gap-4 px-4 xl:container lg:flex-row lg:flex-wrap lg:gap-x-12 xl:gap-x-24">
				{areasIndustries.map(({ name, description }, index) => (
					<div
						key={index}
						className="flex flex-col items-center justify-around rounded-lg border-[0.5px] p-4 text-center shadow-md transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-primary lg:w-[28%] lg:shadow"
					>
						<h2 className="mb-2 text-lg font-semibold text-primary lg:text-xl lg:font-bold">
							{name}
						</h2>
						<p>{description}</p>
					</div>
				))}
			</section>
			<section className="h-full w-screen bg-accent text-white">
				<div className="container mx-auto flex flex-col items-center justify-between gap-8 py-16">
					<p className="text-lg font-semibold lg:text-3xl ">
						Ready to discuss your specific needs?
					</p>
					<Button className="p-4 lg:text-lg">Contact Us Today</Button>
				</div>
			</section>
		</main>
	);
};

export default industries;
