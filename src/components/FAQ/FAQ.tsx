'use client';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { faq } from '@/data/faq';

const Faq = () => {
	return (
		<motion.div
			className="mx-auto flex min-h-screen flex-col items-center justify-center p-8"
			initial={{ y: 25, opacity: 0 }}
			whileInView={{
				y: 0,
				opacity: 1,
				transition: {
					duration: 1,
					ease: [0.1, 0.03, 0.5, 0.9],
					delay: 1,
				},
			}}
		>
			{faq.map(({ question, answer }, i) => (
				<Accordion key={i} type="single" collapsible className="w-full">
					<AccordionItem value={i.toString()}>
						<AccordionTrigger className="font-bold hover:no-underline">
							{question}
						</AccordionTrigger>
						<AccordionContent>{answer}</AccordionContent>
					</AccordionItem>
				</Accordion>
			))}
		</motion.div>
	);
};

export default Faq;
