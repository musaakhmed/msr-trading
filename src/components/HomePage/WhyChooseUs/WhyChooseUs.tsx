'use client';

import { motion } from 'framer-motion';
import { whyChooseUs } from '@/data/whyChooseUs';
import Image from 'next/image';

const WhyChooseUs = () => {
	return (
		<section className="h-full w-full space-y-8 bg-primary p-8 text-primary-foreground">
			<h2 className="py-8 text-center text-2xl font-bold">
				Why Choose MSR Trading?
			</h2>
			<div className="flex flex-col gap-12 last:pb-8">
				{whyChooseUs.map(({ title, description, img }, index) => (
					<motion.div
						viewport={{ once: true }}
						initial={{
							y: 30,
							opacity: 0,
						}}
						whileInView={{
							y: 0,
							opacity: 1,
							transition: {
								duration: 0.75,
								ease: [0.1, 0.03, 0.5, 0.9],
								delay: 0.25,
							},
						}}
						key={index}
						className="flex items-center gap-4 odd:flex-row-reverse"
					>
						<Image
							src={img}
							alt={title}
							height={64}
							width={64}
							className="h-24 w-24 rounded-lg bg-accent p-4"
						/>
						<div>
							<h3 className="text-lg font-bold">{title}</h3>
							<p>{description}</p>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default WhyChooseUs;
