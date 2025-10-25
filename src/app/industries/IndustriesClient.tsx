'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface IndustriesData {
	name: string;
	description: string;
	image?: string;
}

interface IndustriesDataArray extends Array<IndustriesData> {}

const areasIndustries: IndustriesDataArray = [
	{
		name: 'Laboratory Supplies',
		description:
			'Empowering accurate diagnoses, MSR Trading offers a comprehensive selection of high-quality laboratory supplies. From blood collection tubes and swabs to centrifuge tubes and test kits, we equip your lab for efficient and reliable results. ',
	},
	{
		name: 'Reagents',
		description:
			'Accurate diagnoses rely on high-quality tools. MSR Trading empowers your laboratory with a complete selection of essential laboratory reagents.  From specific antibodies and enzymes to critical buffers and staining solutions, we offer the building blocks for reliable and trustworthy results.',
	},
	{
		name: 'Medical Consumables',
		description:
			'From wound care essentials and personal protective equipment to anesthesia & respiratory supplies and urology products, MSR Trading offers a comprehensive range of high-quality medical consumables to streamline your daily operations.',
	},
	{
		name: 'Medical Devices',
		description:
			'MSR Trading provides cutting-edge medical devices that enhance patient care and improve clinical outcomes. From diagnostic equipment and monitoring systems to surgical instruments and therapeutic devices, we deliver innovative solutions that meet the highest standards of quality and reliability.',
	},
	{
		name: 'Laboratory Equipment',
		description:
			'Precision and accuracy are paramount in laboratory work. MSR Trading supplies state-of-the-art laboratory equipment including analyzers, centrifuges, microscopes, and incubators. Our equipment ensures reliable results and enhances your laboratory\'s capabilities.',
	},
	{
		name: 'Industrial Equipment',
		description:
			'Supporting various industrial sectors, MSR Trading offers robust and efficient industrial equipment solutions. From manufacturing machinery to quality control systems, we provide equipment that meets industrial standards and enhances operational efficiency.',
	},
];

const titleVars = {
	initial: { opacity: 0, y: 25 },
	animate: { opacity: 1, y: 0 },
};
const paragraphVars = {
	initial: { opacity: 0, y: 25 },
	animate: { opacity: 1, y: 0 },
};

const IndustriesClient = () => {
	return (
		<article className="min-h-screen pt-20">
			{/* Hero Section */}
			<section className="relative py-32 bg-gradient-to-br from-primary via-primary/95 to-accent text-white overflow-hidden">
				{/* Background Elements */}
				<div className="absolute inset-0 -z-10">
					<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
					<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
				</div>

				<div className="container mx-auto px-6 text-center">
					<motion.h1
						variants={titleVars}
						initial="initial"
						animate="animate"
						transition={{ ease: "easeOut", duration: 0.5, delay: 0.25 }}
						className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8"
					>
						Industries{' '}
						<span 
							className="gradient-text-strong"
							aria-label="Across Industries"
							role="text"
						>
							Across Industries
						</span>
					</motion.h1>
					<motion.p
						className="text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed"
						variants={paragraphVars}
						initial="initial"
						animate="animate"
						transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
					>
						From healthcare to industrial sectors, we provide comprehensive solutions
						that meet the diverse needs of our global clientele.
					</motion.p>
				</div>
			</section>

			{/* Industries Grid */}
			<section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background">
				<div className="container mx-auto px-6">
					<div className="max-w-6xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
							className="text-center mb-16"
						>
							<h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
								Our Expertise Across Sectors
							</h2>
							<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
								We serve a wide range of industries with specialized knowledge and
								tailored solutions for each sector&apos;s unique requirements.
							</p>
						</motion.div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{areasIndustries.map((industry, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.1 * index }}
									viewport={{ once: true }}
									className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 group"
								>
									<div className="mb-6">
										<div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
											<span className="text-2xl">
												{index === 0 && '🧪'}
												{index === 1 && '⚗️'}
												{index === 2 && '🏥'}
												{index === 3 && '🩺'}
												{index === 4 && '🔬'}
												{index === 5 && '🏭'}
											</span>
										</div>
										<h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-accent transition-colors duration-300">
											{industry.name}
										</h3>
									</div>
									<p className="text-muted-foreground leading-relaxed mb-6">
										{industry.description}
									</p>
									<Button 
										variant="outline" 
										className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
									>
										Learn More
									</Button>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
				<div className="container mx-auto px-6">
					<div className="max-w-4xl mx-auto text-center">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
						>
							<h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
								Need Solutions for Your{' '}
								<span 
									className="gradient-text-strong"
									aria-label="specific needs"
									role="text"
								>
									specific needs
								</span>?
							</h2>
							<p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
								Our team of experts is ready to help you find the perfect solutions
								for your industry requirements. Contact us today to discuss your needs.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Button 
									size="lg"
									className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
								>
									Get Custom Quote
								</Button>
								<Button 
									size="lg"
									variant="outline"
									className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
								>
									Schedule Consultation
								</Button>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		</article>
	);
};

export default IndustriesClient;
