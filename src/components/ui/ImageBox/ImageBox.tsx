import { motion } from 'framer-motion';
import Image from 'next/image';

type ImageBox = {
	src: string;
	alt: string;
	height: number;
	width: number;
	className?: string;
};

export const ImageBox = ({ src, alt, height, width, className }: ImageBox) => {
	return (
		<motion.div
			initial={{ y: 30, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.3, delay: 0.15, ease: 'easeInOut' }}
			viewport={{ once: true }}
		>
			<Image
				src={src}
				alt={alt}
				height={height}
				width={width}
				className={className || "h-auto w-auto cursor-pointer transition-all duration-300 ease-in-out hover:scale-125 hover:grayscale-0 xl:grayscale"}
			/>
		</motion.div>
	);
};
