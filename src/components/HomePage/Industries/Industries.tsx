'use client';

import { motion, useScroll } from 'framer-motion';
import { introTexts } from '@/data/intro';
import Card from '@/components/HomePage/Industries/Card';
import { useRef } from 'react';

export default function Industries() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});
	return (
		<motion.section ref={container} className="mx-auto lg:max-w-[80%]">
			{introTexts.map((card, i) => {
				const targetScale = 1 - (introTexts.length - i) * 0.04;

				return (
					<Card
						key={i}
						i={i}
						{...card}
						range={[i * 0.25, 1]}
						progress={scrollYProgress}
						targetScale={targetScale}
					/>
				);
			})}
		</motion.section>
	);
}
