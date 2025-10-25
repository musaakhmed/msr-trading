import { Contact } from '@/components/Contact/Contact';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact Us',
	description: 'Get in touch with MSR Trading for all your medical equipment and laboratory instrument needs. Contact our expert team in Istanbul, Turkey for international trade solutions.',
	keywords: [
		'contact MSR Trading',
		'medical equipment contact',
		'laboratory instrument contact',
		'international trade contact',
		'healthcare trading contact',
		'medical device contact',
		'lab equipment contact',
		'Istanbul trading contact',
		'global medical supplies contact',
		'healthcare technology contact',
		'medical equipment inquiry',
		'laboratory supplies contact',
		'healthcare solutions contact',
		'medical device inquiry',
		'lab instrument contact',
		'international healthcare contact',
		'medical equipment quote',
		'laboratory equipment contact',
		'healthcare trading inquiry',
		'medical device consultation'
	],
	openGraph: {
		title: 'Contact MSR Trading - Medical Equipment & Laboratory Instruments',
		description: 'Get in touch with MSR Trading for all your medical equipment and laboratory instrument needs. Contact our expert team for international trade solutions.',
		url: 'https://msrtrading.com/contact',
		siteName: 'MSR Trading',
		images: [
			{
				url: '/assets/images/og-contact.jpg',
				width: 1200,
				height: 630,
				alt: 'Contact MSR Trading - Medical Equipment Trading',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Contact MSR Trading - Medical Equipment Trading',
		description: 'Get in touch with our expert team for all your medical equipment and laboratory instrument needs.',
		images: ['/assets/images/twitter-contact.jpg'],
	},
	alternates: {
		canonical: 'https://msrtrading.com/contact',
	},
};

const contact = () => {
	return (
		<main className="pt-20">
			<Contact />
		</main>
	);
};

export default contact;
