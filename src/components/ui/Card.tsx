'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';

const Card = ({
	title,
	desc,
	img,
	i,
	progress,
	range,
	targetScale,
}: {
	title: string;
	desc: string;
	img: string;
	i: number;
	range: number[];
	targetScale: number;
	progress: number | any;
}) => {
	const container = useRef(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'start start'],
	});

	const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
	const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<div
			ref={container}
			className="sticky top-0 mx-4 flex h-screen items-center justify-center pt-24"
		>
			<motion.section
				className="relative flex h-4/5 w-full flex-col gap-2 rounded-xl bg-primary text-primary-foreground sm:w-4/5 lg:mx-auto lg:flex-row-reverse lg:items-center lg:justify-center "
				style={{ scale, top: `calc(-10% + ${i * 25}px)` }}
			>
				<div className="lg: h-1/3 w-full overflow-hidden rounded-t-xl lg:h-1/2 lg:rounded-none ">
					<motion.div
						className="h-full w-full"
						style={{ scale: imageScale }}
					>
						<Image
							className="object-center"
							width={800}
							height={780}
							src={img}
							alt={title}
						/>
					</motion.div>
				</div>
				<div className="mx-4 flex flex-col justify-around gap-8 py-4 lg:w-3/4 lg:p-8">
					<div className="text-2xl font-black lg:text-5xl">
						{title}
					</div>
					<p className="text-lg lg:text-xl xl:text-2xl">{desc}</p>
					<Button
						className="mx-auto self-center text-lg lg:text-xl"
						variant="secondary"
					>
						Learn more
					</Button>
				</div>
			</motion.section>
		</div>
	);
};

export default Card;
