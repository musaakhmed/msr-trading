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
		<div>
			<Image
				src={src}
				alt={alt}
				height={height}
				width={width}
				className="cursor-pointer grayscale transition-all duration-300 ease-in-out hover:scale-125 hover:grayscale-0"
			/>
		</div>
	);
};
