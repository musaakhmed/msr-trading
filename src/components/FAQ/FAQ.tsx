import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

import { faq } from '@/data/faq';

const Faq = () => {
	return (
		<div className="mx-auto p-8">
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
		</div>
	);
};

export default Faq;
