'use client';

import { ImageBox } from '@/components/ui/ImageBox/ImageBox';
import data from '@/data/brands.json';
import React, { useState } from 'react';
import { log } from 'node:util';

export const Brands = () => {
	const [brandIndustry, setBrandIndustry] = useState('all');

	const handleBrandSelection = (e: any) => {
		setBrandIndustry((prev) => (prev = e.target.value));
	};

	const filteredBrands =
		brandIndustry === 'all'
			? data
			: data.filter((brand) => brand.industry.includes(brandIndustry));

	return (
		<section className=" bg-gradient-to-b from-white via-accent/10 to-white py-36 ">
			<div className="container flex h-full w-full flex-col items-center justify-center space-y-10">
				<h2 className="w-3/4 py-2 text-center text-xl font-bold text-accent md:text-2xl lg:text-4xl">
					Our Top Brands
				</h2>
				<select onChange={handleBrandSelection}>
					<option value="all">All</option>
					<option value="medical">Medical</option>
					<option value="lab">Lab</option>
				</select>
				<div className="space-y-4">
					<div className="flex max-h-[75vh] w-full flex-wrap items-center justify-center gap-8">
						{filteredBrands.map(
							({ name, img, industry }, index) => (
								<div key={index} className="w-[8%]">
									<ImageBox
										src={img}
										alt={name}
										height={150}
										width={150}
									/>
								</div>
							),
						)}
					</div>
				</div>
			</div>
		</section>
	);
};
