'use client';

import { motion } from 'framer-motion';
import { whyChooseUs } from '@/data/whyChooseUs';
import Image from 'next/image';

const WhyChooseUs = () => {
	return (
		<section className="relative py-24 bg-gradient-to-br from-primary via-primary/95 to-accent text-white overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
			</div>

			<div className="relative z-10 container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-20"
				>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
						Why Choose{' '}
						<span 
							className="gradient-text-strong"
							aria-label="MSR Trading"
							role="text"
						>
							MSR Trading
						</span>?
					</h2>
					<p className="text-xl text-white/80 max-w-3xl mx-auto">
						Discover the unique advantages that make us your ideal partner 
						on the Modern Silk Road
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{whyChooseUs.map(({ title, description, img }, index) => (
						<motion.div
							key={index}
							viewport={{ once: true }}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ 
								opacity: 1, 
								y: 0,
								transition: {
									duration: 0.6,
									delay: index * 0.1,
									ease: [0.1, 0.03, 0.5, 0.9],
								},
							}}
							className="group"
						>
							<div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-white/30">
								<div className="flex items-start space-x-6">
									<div className="flex-shrink-0">
										<div className="relative">
											<div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
												<Image
													src={img}
													alt={title}
													height={40}
													width={40}
													className="w-10 h-10"
												/>
											</div>
											<div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
										</div>
									</div>
									<div className="flex-1">
										<h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
											{title}
										</h3>
										<p className="text-white/80 text-lg leading-relaxed group-hover:text-white/90 transition-colors duration-300">
											{description}
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* CTA Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					viewport={{ once: true }}
					className="text-center mt-20"
				>
					<div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
						<h3 className="text-3xl font-bold mb-6">
							Ready to Experience the Difference?
						</h3>
						<p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
							Join hundreds of satisfied clients who trust MSR Trading 
							for their international trade needs.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-white/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
								Get Started Today
							</button>
							<button className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-colors duration-300">
								Learn More
							</button>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
