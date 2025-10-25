import type { Metadata } from 'next';
import CompanyClient from './CompanyClient';

export const metadata: Metadata = {
	title: 'About Us - Company',
	description: 'Learn about MSR Trading - a leading international medical equipment and laboratory instrument trading company. Our vision, mission, and commitment to excellence in global healthcare trade.',
	keywords: [
		'about MSR Trading',
		'company information',
		'medical equipment trading company',
		'laboratory instrument trading',
		'international trade company',
		'healthcare trading company',
		'medical device trading',
		'lab equipment trading',
		'Istanbul trading company',
		'global medical supplies',
		'healthcare technology trading',
		'medical equipment distribution',
		'laboratory supplies trading',
		'healthcare solutions company',
		'medical device distribution',
		'lab instrument trading company',
		'international healthcare trade',
		'medical equipment supplier',
		'laboratory equipment distributor',
		'healthcare trading services'
	],
	openGraph: {
		title: 'About MSR Trading - Leading Medical Equipment Trading Company',
		description: 'Learn about MSR Trading - a leading international medical equipment and laboratory instrument trading company. Our vision, mission, and commitment to excellence.',
		url: 'https://msrtrading.com/company',
		siteName: 'MSR Trading',
		images: [
			{
				url: '/assets/images/og-company.jpg',
				width: 1200,
				height: 630,
				alt: 'About MSR Trading - Medical Equipment Trading Company',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'About MSR Trading - Medical Equipment Trading Company',
		description: 'Learn about our vision, mission, and commitment to excellence in international medical equipment trading.',
		images: ['/assets/images/twitter-company.jpg'],
	},
	alternates: {
		canonical: 'https://msrtrading.com/company',
	},
};

export default function Company() {
	return <CompanyClient />;
}