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
				className="relative flex h-4/5 w-full flex-col gap-2 rounded-xl bg-primary text-primary-foreground sm:w-4/5 xl:mx-auto xl:flex-row-reverse xl:items-center xl:justify-center "
				style={{ scale, top: `calc(-10% + ${i * 25}px)` }}
			>
				<div className="w-full overflow-hidden rounded-t-xl lg:h-1/3 xl:h-1/2 xl:rounded-none ">
					<motion.div
						className="h-full w-full xl:p-8"
						style={{ scale: imageScale }}
					>
						<Image
							className="object-center "
							width={800}
							height={780}
							src={img}
							alt={title}
						/>
					</motion.div>
				</div>
				<div className="mx-4 flex flex-col justify-around gap-8 py-4 lg:p-8 xl:w-3/4">
					<div className=" text-2xl font-black lg:text-3xl 2xl:text-5xl ">
						{title}
					</div>
					<p className="text-lg ">{desc}</p>
					{/*<Button*/}
					{/*	className="mx-auto self-center text-lg lg:text-xl"*/}
					{/*	variant="secondary"*/}
					{/*>*/}
					{/*	Learn more*/}
					{/*</Button>*/}
				</div>
			</motion.section>
		</div>
	);
};

export default Card;
