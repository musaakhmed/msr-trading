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
				className="relative flex h-4/5 w-full flex-col gap-2 rounded-xl bg-primary text-primary-foreground xl:w-4/5"
				style={{ scale, top: `calc(-10% + ${i * 25}px)` }}
			>
				<div className="relative h-1/3 w-full overflow-hidden rounded-t-xl">
					<motion.div
						className={`h-full w-full`}
						style={{ scale: imageScale }}
					>
						<Image
							className="object-cover"
							width={500}
							height={500}
							src={img}
							alt={title}
						/>
					</motion.div>
				</div>
				<div className="mx-4 space-y-3">
					<div className=" text-2xl font-black">{title}</div>
					<p className="text-lg">{desc}</p>
					<Button
						className="mx-auto self-center text-lg"
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
