import type { Metadata } from 'next';
import IndustriesClient from './IndustriesClient';

export const metadata: Metadata = {
	title: 'Industries We Serve',
	description: 'Explore the diverse industries MSR Trading serves - from medical equipment and laboratory instruments to healthcare technology and industrial solutions. Discover our comprehensive range of products and services.',
	keywords: [
		'medical equipment industries',
		'laboratory instrument industries',
		'healthcare technology sectors',
		'medical device industries',
		'lab equipment sectors',
		'healthcare solutions industries',
		'medical consumables',
		'laboratory supplies',
		'reagents and chemicals',
		'medical devices',
		'healthcare equipment',
		'laboratory instruments',
		'medical technology',
		'healthcare industry',
		'medical equipment sectors',
		'laboratory technology',
		'healthcare supplies',
		'medical instruments',
		'laboratory equipment',
		'healthcare services'
	],
	openGraph: {
		title: 'Industries We Serve - Medical Equipment & Laboratory Instruments',
		description: 'Explore the diverse industries MSR Trading serves with comprehensive medical equipment and laboratory instrument solutions.',
		url: 'https://msrtrading.com/industries',
		siteName: 'MSR Trading',
		images: [
			{
				url: '/assets/images/og-industries.jpg',
				width: 1200,
				height: 630,
				alt: 'Industries We Serve - MSR Trading',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Industries We Serve - MSR Trading',
		description: 'Explore our comprehensive range of medical equipment and laboratory instrument solutions across diverse industries.',
		images: ['/assets/images/twitter-industries.jpg'],
	},
	alternates: {
		canonical: 'https://msrtrading.com/industries',
	},
};

export default function Industries() {
	return <IndustriesClient />;
}