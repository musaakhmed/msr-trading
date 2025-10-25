'use client';

import React, { useState } from 'react';
import Tabs from '@/components/ui/Tabs/Tabs';
import data from '@/data/brands.json';
import { motion } from 'framer-motion';
import { ImageBox } from '@/components/ui/ImageBox/ImageBox';

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
	// {
	// 	id: 4,
	// 	title: 'Beauty',
	// 	filter: (brand) => brand.industry.includes('beauty'),
	// },
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
		<section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background py-24">
			{/* Background Elements */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl"></div>
				<div className="absolute bottom-1/3 left-1/4 h-80 w-80 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 blur-3xl"></div>
			</div>

			<div className="container mx-auto px-6">
				<div className="mb-16 text-center">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
					>
						Our{' '}
						<span
							className="gradient-text-strong"
							aria-label="Trusted Partners"
							role="text"
						>
							Trusted Partners
						</span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="mx-auto max-w-3xl text-xl text-muted-foreground"
					>
						We partner with leading brands across medical,
						laboratory, and industrial sectors to bring you the
						highest quality products and solutions.
					</motion.p>
				</div>

				{/* Tabs */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<Tabs
						industry={industry}
						sendTabIdToParent={handleBrandTapId}
					/>
				</motion.div>

				{/* Brands Grid */}
				{brandTabID > 0 && (
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
					>
						{filteredBrands.map(({ name, img, id }, index) => (
							<motion.div
								key={id}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{
									duration: 0.4,
									delay: index * 0.1,
								}}
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.2 },
								}}
								className="group"
							>
								<div className="relative rounded-2xl border border-border/50 bg-white p-6 shadow-lg transition-all duration-300 hover:border-primary/20 hover:shadow-xl">
									<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
									<div className="relative z-10 flex h-24 items-center justify-center">
										<ImageBox
											src={img}
											alt={name}
											height={120}
											width={120}
											className="object-contain grayscale filter transition-all duration-300 group-hover:grayscale-0"
										/>
									</div>
									<div className="mt-4 text-center">
										<h3 className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
											{name}
										</h3>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				)}
			</div>
		</section>
	);
};

export default Brands;
