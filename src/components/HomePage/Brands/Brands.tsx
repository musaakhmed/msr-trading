import { ImageBox } from '@/components/ui/ImageBox';
import { medicalBrands, labBrands } from '@/data/brands';

export const Brands = () => {
	return (
		<section className=" py-36">
			<div className="container flex h-full w-full flex-col items-center justify-center space-y-10">
				<h2 className="w-3/4 bg-accent py-2 text-center text-xl font-bold text-foreground text-white md:text-2xl lg:text-4xl">
					Our Top Brands
				</h2>
				<div className="space-y-4">
					<h4 className="text-center text-lg font-bold md:text-xl lg:text-3xl">
						Medical Equipment and Supplies
					</h4>
					<div className="flex w-full flex-wrap items-center justify-center gap-8">
						{medicalBrands.map(({ name, img, industry }, index) => (
							<ImageBox
								key={index}
								src={img}
								alt={name}
								height={150}
								width={150}
							/>
						))}
					</div>
				</div>
				<div className="space-y-4">
					<h4 className="text-center text-lg font-bold md:text-xl lg:text-3xl">
						Lab Equipment and Supplies
					</h4>
					<div className="flex w-full flex-wrap items-center justify-center gap-10">
						{labBrands.map(({ name, img, industry }, index) => (
							<ImageBox
								key={index}
								src={img}
								alt={name}
								height={150}
								width={150}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
