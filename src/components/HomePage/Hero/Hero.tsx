'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Hero() {
	return (
		<motion.section className="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center space-y-12 pb-16 pt-32 overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-float"></div>
				<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
			</div>

			{/* Hero Content */}
			<div className="relative z-10 text-center max-w-6xl mx-auto px-6">
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							ease: [0.1, 0.03, 0.5, 0.9],
							duration: 0.8,
						},
					}}
					className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-8"
				>
					Welcome to{' '}
					<span 
						className="gradient-text-hero animate-pulse-glow"
						aria-label="MSR Trading - Medical Equipment Trading Company"
					>
						MSR Trading
					</span>
					<br />
					your trusted partner on the{' '}
					<span 
						className="gradient-text-hero"
						aria-label="Modern Silk Road - International Trade"
					>
						Modern Silk Road
					</span>
					!
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 25 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							ease: [0.1, 0.03, 0.5, 0.9],
							duration: 0.6,
							delay: 0.3,
						},
					}}
					className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12"
				>
					We are your trusted partner for navigating the intricate
					world of international trade with{' '}
					<span className="font-semibold text-primary">
						unparalleled expertise
					</span>{' '}
					and{' '}
					<span className="font-semibold text-accent">
						cultural understanding
					</span>
					.
				</motion.p>
			</div>

			{/* Hero Image/Visual */}
			<motion.div
				className="relative mx-4 max-w-4xl w-full"
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{
					opacity: 1,
					scale: 1,
					transition: {
						ease: [0.1, 0.03, 0.5, 0.9],
						duration: 1,
						delay: 0.6,
					},
				}}
			>
				<div className="relative rounded-3xl overflow-hidden shadow-2xl">
					<div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20"></div>
					<div className="relative bg-hero-pattern bg-cover bg-center h-96 md:h-[500px] flex items-center justify-center">
						<div className="glass rounded-2xl p-8 md:p-12 text-center max-w-2xl">
							<h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
								Connecting Global Markets
							</h2>
							<p className="text-lg md:text-xl text-white/90">
								From Istanbul to Beijing, we bridge cultures and commerce
								across the historic Silk Road
							</p>
						</div>
					</div>
				</div>
			</motion.div>

			{/* CTA Buttons */}
			<motion.div
				initial={{ opacity: 0, y: 25 }}
				animate={{
					opacity: 1,
					y: 0,
					transition: {
						ease: [0.1, 0.03, 0.5, 0.9],
						duration: 0.6,
						delay: 0.9,
					},
				}}
				className="flex flex-col sm:flex-row gap-6 items-center justify-center"
			>
				<Button 
					size="lg"
					className="text-lg font-bold px-8 py-4 bg-primary hover:bg-primary/90 text-white shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 group"
				>
					<span className="flex items-center gap-2">
						Explore The Industries
						<svg 
							className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
							fill="none" 
							stroke="currentColor" 
							viewBox="0 0 24 24"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</span>
				</Button>
				<Button 
					variant="outline" 
					size="lg"
					className="text-lg font-bold px-8 py-4 border-2 border-primary/50 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 group"
				>
					<span className="flex items-center gap-2">
						Learn More
						<svg 
							className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
							fill="none" 
							stroke="currentColor" 
							viewBox="0 0 24 24"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</span>
				</Button>
			</motion.div>
		</motion.section>
	);
}
