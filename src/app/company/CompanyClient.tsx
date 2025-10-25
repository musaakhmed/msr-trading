'use client';

import { motion } from 'framer-motion';

const titleVars = {
	initial: { opacity: 0, y: 25 },
	animate: { opacity: 1, y: 0 },
};
const paragraphVars = {
	initial: { opacity: 0, y: 25 },
	animate: { opacity: 1, y: 0 },
};

const CompanyClient = () => {
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
						aria-label="Our Vision, Your Success"
					>
						Our Vision,{' '}
						<span 
							className="gradient-text-strong"
							aria-label="Your Success"
							role="text"
						>
							Your Success
						</span>
					</motion.h1>
					<motion.p
						className="text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed"
						variants={paragraphVars}
						initial="initial"
						animate="animate"
						transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
					>
						We are dedicated to pioneering excellence in international trade,
						bridging cultures and markets through the Modern Silk Road with
						unwavering commitment to quality and innovation.
					</motion.p>
				</div>
			</section>

			{/* Philosophy Section */}
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
								Our Philosophy
							</h2>
							<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
								At MSR Trading, we believe that successful international trade is built on
								trust, cultural understanding, and technical excellence.
							</p>
						</motion.div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{[
								{
									title: "Cultural Bridge",
									description: "We understand the nuances of different markets and cultures, ensuring smooth transactions across borders.",
									icon: "🌍"
								},
								{
									title: "Technical Excellence",
									description: "Our team possesses deep technical knowledge across medical, laboratory, and industrial sectors.",
									icon: "🔬"
								},
								{
									title: "Trust & Reliability",
									description: "We build long-term partnerships based on transparency, integrity, and consistent delivery.",
									icon: "🤝"
								}
							].map((item, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.1 * index }}
									viewport={{ once: true }}
									className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50"
								>
									<div className="text-4xl mb-4">{item.icon}</div>
									<h3 className="text-2xl font-bold mb-4 text-primary">{item.title}</h3>
									<p className="text-muted-foreground leading-relaxed">{item.description}</p>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Power Section */}
			<section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
				<div className="container mx-auto px-6">
					<div className="max-w-6xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
							className="text-center mb-16"
						>
							<h2 className="text-4xl md:text-5xl font-bold mb-6">
								Our Power:{' '}
								<span 
									className="gradient-text-strong"
									aria-label="Technical and Cultural Polyvalency"
									role="text"
								>
									Technical and Cultural Polyvalency
								</span>
							</h2>
							<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
								What sets us apart is our unique combination of technical expertise and cultural understanding.
							</p>
						</motion.div>

						<div className="grid lg:grid-cols-2 gap-12 items-center">
							<motion.div
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								viewport={{ once: true }}
							>
								<h3 className="text-3xl font-bold mb-6 text-primary">
									Technical Expertise
								</h3>
								<div className="space-y-4">
									{[
										"Deep knowledge of medical equipment specifications and regulations",
										"Expertise in laboratory instrument calibration and maintenance",
										"Understanding of industrial equipment standards and compliance",
										"Technical support and training for complex equipment"
									].map((item, index) => (
										<div key={index} className="flex items-start space-x-3">
											<div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
											<p className="text-muted-foreground">{item}</p>
										</div>
									))}
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: 30 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								viewport={{ once: true }}
								className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8"
							>
								<h3 className="text-3xl font-bold mb-6 text-primary">
									Cultural Understanding
								</h3>
								<div className="space-y-4">
									{[
										"Multilingual team fluent in key business languages",
										"Understanding of regional business practices and customs",
										"Knowledge of local regulations and compliance requirements",
										"Cultural sensitivity in negotiations and partnerships"
									].map((item, index) => (
										<div key={index} className="flex items-start space-x-3">
											<div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
											<p className="text-muted-foreground">{item}</p>
										</div>
									))}
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</section>

			{/* Mission Section */}
			<section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background">
				<div className="container mx-auto px-6">
					<div className="max-w-4xl mx-auto text-center">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
						>
							<h2 className="text-4xl md:text-5xl font-bold mb-8">
								Our <span 
									className="gradient-text-strong"
									aria-label="Mission"
									role="text"
								>
									Mission
								</span>
							</h2>
							<div className="bg-card rounded-2xl p-12 shadow-lg border border-border/50">
								<p className="text-xl md:text-2xl leading-relaxed text-muted-foreground mb-8">
									To facilitate seamless international trade in medical equipment and laboratory instruments
									by leveraging our technical expertise and cultural understanding, ultimately contributing
									to the advancement of global healthcare and scientific research.
								</p>
								<div className="grid md:grid-cols-3 gap-8 mt-12">
									{[
										{ number: "500+", label: "Successful Projects" },
										{ number: "50+", label: "Countries Served" },
										{ number: "99%", label: "Client Satisfaction" }
									].map((stat, index) => (
										<motion.div
											key={index}
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6, delay: 0.1 * index }}
											viewport={{ once: true }}
											className="text-center"
										>
											<div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
											<div className="text-muted-foreground">{stat.label}</div>
										</motion.div>
									))}
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 bg-gradient-to-t from-primary via-primary/95 to-accent text-white">
				<div className="container mx-auto px-6 text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<h2 className="text-4xl md:text-5xl font-bold mb-6">
							Ready to Partner with Us?
						</h2>
						<p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
							Let&apos;s discuss how MSR Trading can help you navigate the complex world of international trade
							with our technical expertise and cultural understanding.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
							>
								Get in Touch
							</motion.button>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
							>
								Learn More
							</motion.button>
						</div>
					</motion.div>
				</div>
			</section>
		</article>
	);
};

export default CompanyClient;
