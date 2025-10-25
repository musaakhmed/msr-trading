import React from 'react';
import Image from 'next/image';

const Footer = () => {
	return (
		<footer className="relative overflow-hidden bg-gradient-to-b from-primary via-primary/95 to-accent text-white">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute left-0 top-0 h-full w-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
			</div>

			<div className="relative z-10">
				{/* Main Footer Content */}
				<div className="mx-auto max-w-7xl px-6 py-16">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
						{/* Company Info */}
						<div className="lg:col-span-2">
							<div className="mb-6 flex items-center space-x-3">
								<div className="flex h-20 w-24 items-center justify-center rounded-xl bg-amber-50 bg-white/20 contain-content">
									<Image
										src="/assets/images/logo/logo.png"
										alt="Logo"
										fill
									/>
								</div>
								<div>
									<h3
										className="text-2xl font-bold text-accent"
										aria-label="MSR Trading"
										role="text"
									>
										MSR Trading
									</h3>
									<p className="text-sm text-white/80">
										Modern Silk Road Trading
									</p>
								</div>
							</div>
							<p className="mb-6 max-w-md text-lg leading-relaxed text-white/80">
								Connecting global markets through the Modern
								Silk Road with unparalleled expertise and
								cultural understanding.
							</p>
							<div className="flex space-x-4">
								<a
									href="https://www.linkedin.com/company/msr-trading/"
									className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 transition-colors duration-200 hover:bg-white/30"
								>
									<svg
										className="h-5 w-5"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
									</svg>
								</a>
							</div>
						</div>

						{/* Quick Links */}
						<div>
							<h4 className="mb-6 text-lg font-semibold">
								Quick Links
							</h4>
							<ul className="space-y-3">
								<li>
									<a
										href="/company"
										className="text-white/80 transition-colors duration-200 hover:text-white"
									>
										About Us
									</a>
								</li>
								<li>
									<a
										href="/industries"
										className="text-white/80 transition-colors duration-200 hover:text-white"
									>
										Industries
									</a>
								</li>
								{/*<li>*/}
								{/*	<a*/}
								{/*		href="/partners"*/}
								{/*		className="text-white/80 transition-colors duration-200 hover:text-white"*/}
								{/*	>*/}
								{/*		Partners*/}
								{/*	</a>*/}
								{/*</li>*/}
								<li>
									<a
										href="/contact"
										className="text-white/80 transition-colors duration-200 hover:text-white"
									>
										Contact
									</a>
								</li>
							</ul>
						</div>

						{/* Contact Info */}
						<div>
							<h4 className="mb-6 text-lg font-semibold">
								Contact Info
							</h4>
							<div className="space-y-3 text-white/80">
								<div className="flex items-center space-x-3">
									<svg
										className="h-5 w-5"
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
									<span>
										Atatürk Mahallesi Ataşehir Bulvarı,
										Ertuğrul, Gazi Sokak, 34758
										Ataşehir/İstanbul, Türkiye
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<svg
										className="h-5 w-5"
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
									<span>info@msr-trading.com</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-primary/20">
					<div className="mx-auto max-w-7xl px-6 py-6">
						<div className="flex flex-col items-center justify-between md:flex-row">
							<p className="text-sm text-primary">
								&copy; {new Date().getFullYear()} MSR Trading.
								All rights reserved.
							</p>
							<div className="mt-4 flex space-x-6 md:mt-0">
								<a
									href="#"
									className="text-sm text-primary transition-colors duration-200 hover:text-white"
								>
									Privacy Policy
								</a>
								<a
									href="#"
									className="text-sm text-primary transition-colors duration-200 hover:text-white"
								>
									Terms of Service
								</a>
								<a
									href="#"
									className="text-sm text-primary transition-colors duration-200 hover:text-white"
								>
									Cookie Policy
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
