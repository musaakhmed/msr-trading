'use client';

import React, { useState } from 'react';
import Tabs from '@/components/ui/Tabs/Tabs';
import data from '@/data/brands.json';
import { motion } from 'framer-motion';
import { ImageBox } from '@/components/ui/ImageBox/ImageBox';
import { id } from 'postcss-selector-parser';

interface Industry {
	id: number;
	title: string;
	filter: (brand: Brand) => boolean;
}

interface Brand {
	name: string;
	img: string;
	industry: string[];
}

const industry: Industry[] = [
	{ id: 1, title: 'All', filter: (brand) => true },
	{
		id: 2,
		title: 'Medical',
		filter: (brand) => brand.industry.includes('medical'),
	},
	{
		id: 3,
		title: 'Lab',
		filter: (brand) => brand.industry.includes('lab'),
	},
	{
		id: 4,
		title: 'Beauty',
		filter: (brand) => brand.industry.includes('beauty'),
	},
];

const Brands = () => {
	const [brandTabID, setBrandTabId] = useState(1);

	const handleBrandTapId = (selectedTab: number) => {
		setBrandTabId(selectedTab);
	};

	const selectedIndustry = industry.find((ind) => ind.id === brandTabID)!;
	const selectedTitle = selectedIndustry?.title || '';

	const filteredBrands = data.filter(selectedIndustry.filter);

	return (
		<section className=" bg-gradient-to-b from-white via-accent/25 to-white py-36">
			<div className="container flex h-full w-full flex-col items-center justify-center space-y-20">
				<h2 className="w-3/4 py-2 text-center text-xl font-bold text-accent md:text-2xl lg:text-4xl">
					Our Top Brands
				</h2>
				<Tabs
					industry={industry}
					sendTabIdToParent={handleBrandTapId}
				/>
				{brandTabID > 0 && (
					<>
						<div className="space-y-4">
							<motion.div
								initial={{
									opacity: 0,
									y: 10,
								}}
								transition={{
									duration: 0.5,
									delay: 0.15,
									ease: 'easeInOut',
								}}
								animate={{ opacity: 1, y: 0 }}
								className="flex w-full flex-wrap items-center justify-center gap-10 xl:max-h-screen "
							>
								{filteredBrands.map(
									({ name, img, id }, index) => (
										<div
											key={id}
											className=" w-1/4 xl:w-[8%]"
										>
											<ImageBox
												src={img}
												alt={name}
												height={150}
												width={150}
											/>
										</div>
									),
								)}
							</motion.div>
						</div>
					</>
				)}
			</div>
		</section>
	);
};

export default Brands;
