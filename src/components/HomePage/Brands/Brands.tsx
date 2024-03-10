import { ImageBox } from '@/components/ui/ImageBox';
import { brands } from '@/data/brands';

export const Brands = () => {
	return (
		<section className="flex h-screen w-full items-center justify-center bg-accent">
			<h2>Medical and Lab brands</h2>
			{brands.map(({ name, img, industry }, index) => (
				<ImageBox key={index}></ImageBox>
			))}
		</section>
	);
};
