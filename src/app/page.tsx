import Industries from '@/components/HomePage/Industries/Industries';
import Hero from '@/components/HomePage/Hero/Hero';
import Faq from '@/components/HomePage/Faq/Faq';
import WhyChooseUs from '@/components/HomePage/WhyChooseUs/WhyChooseUs';
import Brands from '@/components/HomePage/Brands/Brands';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Home',
	description: 'MSR Trading - Your trusted partner for international medical equipment and laboratory instruments. Connecting global markets through the Modern Silk Road with unparalleled expertise.',
	keywords: [
		'medical equipment trading',
		'laboratory instruments',
		'international trade',
		'Modern Silk Road',
		'medical devices',
		'lab equipment',
		'healthcare solutions',
		'Istanbul trading company',
		'global medical supplies',
		'medical device distribution',
		'laboratory supplies',
		'healthcare technology',
		'medical equipment export',
		'lab instrument trading',
		'medical equipment supplier',
		'laboratory equipment distributor',
		'healthcare trading company',
		'medical device trading',
		'lab instrument supplier',
		'international healthcare trade'
	],
	openGraph: {
		title: 'MSR Trading - Modern Silk Road Trading | International Medical & Lab Equipment',
		description: 'Your trusted partner for international medical equipment and laboratory instruments. Connecting global markets through the Modern Silk Road.',
		url: 'https://msrtrading.com',
		siteName: 'MSR Trading',
		images: [
			{
				url: '/assets/images/og-home.jpg',
				width: 1200,
				height: 630,
				alt: 'MSR Trading - Modern Silk Road Trading Homepage',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'MSR Trading - Modern Silk Road Trading',
		description: 'Your trusted partner for international medical equipment and laboratory instruments.',
		images: ['/assets/images/twitter-home.jpg'],
	},
	alternates: {
		canonical: 'https://msrtrading.com',
	},
};

export default function Home() {
	return (
		<>
			<main className="pt-20">
				<Hero />
				<Brands />
				<Industries />
				<WhyChooseUs />
				<Faq />
			</main>
			
			{/* Additional SEO Content */}
			<section className="py-16 bg-muted/30">
				<div className="container mx-auto px-6">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
							Leading Medical Equipment Trading Company
						</h2>
						<div className="prose prose-lg max-w-none text-muted-foreground">
							<p className="mb-6">
								MSR Trading stands at the forefront of international medical equipment and laboratory instrument trading. 
								Based in Istanbul, Turkey, we serve as a crucial bridge connecting global markets through the Modern Silk Road, 
								facilitating the exchange of cutting-edge healthcare technology and laboratory solutions.
							</p>
							<p className="mb-6">
								Our expertise spans across multiple sectors including medical devices, laboratory instruments, 
								industrial equipment, and healthcare technology. We partner with leading manufacturers worldwide 
								to provide high-quality products and solutions to healthcare institutions, research laboratories, 
								and industrial facilities across the globe.
							</p>
							<p>
								With our deep understanding of international trade regulations, cultural nuances, and market dynamics, 
								MSR Trading ensures seamless transactions and reliable supply chain management for all our clients. 
								Our commitment to excellence and customer satisfaction has made us a trusted partner in the global healthcare industry.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
