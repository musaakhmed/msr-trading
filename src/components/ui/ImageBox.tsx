import Image from 'next/image';
import { brands } from '@/data/brands';

export const Brand = () => {
	return (
		<div>
			{brands.map(({ name, img, industry }, index) => (
				<Image
					key={index}
					height={500}
					width={500}
					src={img}
					alt={name}
				/>
			))}
		</div>
	);
};
