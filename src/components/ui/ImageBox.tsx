import Image from 'next/image';
import { brands } from '@/data/brands';

export const ImageBox = () => {
	return (
		<div>
			{brands.map(({ name, img }, index) => (
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
