'use client';

import { motion } from 'framer-motion';

const titleVars = {
	initial: { opacity: 0, y: 25 },
	animate: { opacity: 1, y: 0 },
};
const descriptionVars = {
	initial: { opacity: 0, y: 25 },
	animate: { opacity: 1, y: 0 },
};

const formVars = {
	initial: { opacity: 0, x: -100 },
	animate: { opacity: 1, x: 0 },
};

const containerVars = {
	initial: {
		transition: { staggerChildren: 0.5 },
	},
	animate: {
		transition: { staggerChildren: 0.9 },
	},
};

export const Contact = () => {
	return (
		<section className="min-h-screen">
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-accent py-32 text-white">
				{/* Background Elements */}
				<div className="absolute inset-0 -z-10">
					<div className="absolute left-1/4 top-1/4 h-96 w-96 animate-float rounded-full bg-white/10 blur-3xl"></div>
					<div
						className="absolute bottom-1/4 right-1/4 h-80 w-80 animate-float rounded-full bg-white/10 blur-3xl"
						style={{ animationDelay: '2s' }}
					></div>
				</div>

				<div className="container mx-auto px-6 text-center">
					<motion.h2
						variants={titleVars}
						initial="initial"
						animate="animate"
						transition={{
							ease: 'easeOut',
							duration: 0.5,
							delay: 0.25,
						}}
						className="mb-8 text-5xl font-extrabold md:text-6xl lg:text-7xl"
					>
						Looking for a{' '}
						<span
							className="gradient-text-strong"
							aria-label="reliable partner"
							role="text"
						>
							reliable partner
						</span>
						?
					</motion.h2>
					<motion.div
						variants={descriptionVars}
						initial="initial"
						animate="animate"
						transition={{
							ease: 'easeOut',
							duration: 0.5,
							delay: 0.5,
						}}
						className="mx-auto max-w-4xl text-xl leading-relaxed md:text-2xl lg:text-3xl"
					>
						<p className="mb-4">
							Building partnerships and powering future starts
							with an interaction. Let&apos;s connect!
						</p>
						<p>
							Contact us for more information about our operations
							in different fields across Africa, Asia and Europe!
						</p>
					</motion.div>
				</div>
			</section>

			{/* Contact Form Section */}
			<section className="bg-gradient-to-br from-background via-muted/20 to-background py-20">
				<div className="container mx-auto px-6">
					<div className="mx-auto max-w-6xl">
						<div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
							{/* Contact Info */}
							<motion.div
								variants={formVars}
								initial="initial"
								animate="animate"
								className="space-y-8"
							>
								<div>
									<h1
										className="gradient-text-strong mb-6 text-4xl font-bold md:text-5xl"
										aria-label="Get in Touch"
									>
										Contact Us
									</h1>
									<p className="mb-8 text-xl leading-relaxed text-muted-foreground">
										Have questions or inquiries? Reach out
										to us! Your path to cutting-edge
										international trade solutions begins
										with a simple message.
									</p>
								</div>

								{/* Contact Details */}
								<div className="space-y-6">
									<div className="flex items-center space-x-4">
										<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary/20 to-accent/20">
											<svg
												className="h-6 w-6 text-primary"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
										</div>
										<div>
											<h3 className="text-lg font-semibold">
												Location
											</h3>
											<p className="text-muted-foreground">
												Atatürk Mahallesi Ataşehir
												Bulvarı, Ertuğrul, Gazi Sokak,
												34758 Ataşehir/İstanbul, Türkiye
											</p>
										</div>
									</div>

									<div className="flex items-center space-x-4">
										<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary/20 to-accent/20">
											<svg
												className="h-6 w-6 text-primary"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
												/>
											</svg>
										</div>
										<div>
											<h3 className="text-lg font-semibold">
												Email
											</h3>
											<p className="text-muted-foreground">
												info@msr-trading.com
											</p>
										</div>
									</div>

									<div className="flex items-center space-x-4">
										<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary/20 to-accent/20">
											<svg
												className="h-6 w-6 text-primary"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
												/>
											</svg>
										</div>
										<div>
											<h3 className="text-lg font-semibold">
												Phone
											</h3>
											<p className="text-muted-foreground">
												+90 (541) 499-0938
											</p>
										</div>
									</div>
								</div>
							</motion.div>

							{/* Contact Form */}
							<ContactForm />
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};

const ContactForm = () => {
	return (
		<motion.form
			variants={formVars}
			initial="initial"
			animate={{
				opacity: 1,
				x: 0,
				transition: {
					duration: 0.5,
					ease: [0.1, 0.03, 0.5, 0.9],
					delay: 0.5,
				},
			}}
			className="rounded-3xl border border-border/50 bg-white p-8 shadow-xl"
		>
			<div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
				<div className="flex flex-col gap-2">
					<label
						className="text-sm font-semibold text-foreground"
						htmlFor="firstname"
					>
						First name
					</label>
					<input
						className="h-12 rounded-xl border border-border/50 p-3 transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
						type="text"
						placeholder="Enter your first name"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label
						className="text-sm font-semibold text-foreground"
						htmlFor="lastname"
					>
						Last name
					</label>
					<input
						className="h-12 rounded-xl border border-border/50 p-3 transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
						type="text"
						placeholder="Enter your last name"
					/>
				</div>
			</div>

			<div className="mb-6 flex flex-col gap-2">
				<label
					className="text-sm font-semibold text-foreground"
					htmlFor="email"
				>
					Email Address
				</label>
				<input
					className="h-12 rounded-xl border border-border/50 p-3 transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
					type="email"
					placeholder="Enter your email address"
				/>
			</div>

			<div className="mb-6 flex flex-col gap-2">
				<label
					className="text-sm font-semibold text-foreground"
					htmlFor="company"
				>
					Company name
				</label>
				<input
					className="h-12 rounded-xl border border-border/50 p-3 transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
					type="text"
					placeholder="Enter your company name"
				/>
			</div>

			<div className="mb-6 flex flex-col gap-2">
				<label
					className="text-sm font-semibold text-foreground"
					htmlFor="subject"
				>
					Subject
				</label>
				<input
					className="h-12 rounded-xl border border-border/50 p-3 transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
					type="text"
					placeholder="What is this about?"
				/>
			</div>

			<div className="mb-8 flex flex-col gap-2">
				<label
					className="text-sm font-semibold text-foreground"
					htmlFor="message"
				>
					Message
				</label>
				<textarea
					rows={6}
					placeholder="Tell us about your project or inquiry..."
					className="resize-none rounded-xl border border-border/50 p-3 transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
				/>
			</div>

			<button className="h-12 w-full rounded-xl bg-primary font-semibold text-white shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl">
				Send Message
			</button>
		</motion.form>
	);
};
