'use client';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { faqs } from '@/data/faqs';

const Faq = () => {
	return (
		<section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
						Frequently Asked{' '}
						<span 
							className="gradient-text-strong"
							aria-label="Questions"
							role="text"
						>
							Questions
						</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						Find answers to common questions about our services, 
						processes, and how we can help your business grow.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
					className="max-w-4xl mx-auto"
				>
					<Accordion type="single" collapsible className="space-y-4">
						{faqs.map(({ question, answer }, i) => (
							<AccordionItem 
								key={i} 
								value={i.toString()}
								className="bg-white rounded-2xl shadow-lg border border-border/50 overflow-hidden"
							>
								<AccordionTrigger className="text-left font-semibold text-lg px-6 py-4 hover:bg-muted/50 transition-colors duration-200">
									{question}
								</AccordionTrigger>
								<AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
									{answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</motion.div>

				{/* Contact CTA */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
					className="text-center mt-16"
				>
					<div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 border border-primary/20">
						<h3 className="text-3xl font-bold mb-4">
							Still Have Questions?
						</h3>
						<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
							Our team of experts is here to help you with any questions 
							about our services or how we can assist your business.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
								Contact Us
							</button>
							<button className="px-8 py-4 border-2 border-primary/50 text-primary font-bold rounded-xl hover:bg-primary/5 transition-colors duration-300">
								Schedule a Call
							</button>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Faq;
