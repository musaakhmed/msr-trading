import { motion } from 'framer-motion';
import Image from 'next/image';

export const ImageBox = ({
	src,
	alt,
	height,
	width,
}: {
	src: string;
	alt: string;
	height: number;
	width: number;
}) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: 10,
			}}
			transition={{
				duration: 0.5,
				delay: 0.15,
			}}
			animate={{ opacity: 1, y: 0 }}
		>
			<Image
				src={src}
				alt={alt}
				height={height}
				width={width}
				className="h-auto w-auto cursor-pointer grayscale transition-all duration-300 ease-in-out hover:scale-125 hover:grayscale-0"
			/>
		</motion.div>
	);
};
