import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import NavMenu from '@/components/ui/Header/Header';
import Footer from '@/components/ui/Footer/Footer';
import { cn } from '../lib/utils';
import { GoogleAnalytics } from '@next/third-parties/google';

const nunito = Nunito_Sans({
	subsets: ['latin'],
	variable: '--font-nunito-sans',
});

export const metadata: Metadata = {
	title: {
		default: 'MSR Trading - Modern Silk Road Trading | International Medical & Lab Equipment',
		template: '%s | MSR Trading'
	},
	description: 'MSR Trading connects global markets through the Modern Silk Road with unparalleled expertise in medical equipment, laboratory instruments, and industrial solutions. Trusted partner for international trade.',
	keywords: [
		'medical equipment trading',
		'laboratory instruments',
		'international trade',
		'Modern Silk Road',
		'medical devices',
		'lab equipment',
		'healthcare solutions',
		'industrial equipment',
		'Istanbul trading',
		'global medical supplies',
		'medical device distribution',
		'laboratory supplies',
		'healthcare technology',
		'medical equipment export',
		'lab instrument trading'
	],
	authors: [{ name: 'MSR Trading' }],
	creator: 'MSR Trading',
	publisher: 'MSR Trading',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL('https://msrtrading.com'),
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/en-US',
			'tr-TR': '/tr-TR',
		},
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://msr-trading.com',
		siteName: 'MSR Trading',
		title: 'MSR Trading - Modern Silk Road Trading | International Medical & Lab Equipment',
		description: 'MSR Trading connects global markets through the Modern Silk Road with unparalleled expertise in medical equipment, laboratory instruments, and industrial solutions.',
		images: [
			{
				url: '/assets/images/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'MSR Trading - Modern Silk Road Trading',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'MSR Trading - Modern Silk Road Trading',
		description: 'Connecting global markets through the Modern Silk Road with unparalleled expertise in medical equipment and laboratory instruments.',
		images: ['/assets/images/twitter-image.jpg'],
		creator: '@msrtrading',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		google: 'your-google-verification-code',
		yandex: 'your-yandex-verification-code',
		yahoo: 'your-yahoo-verification-code',
	},
	category: 'trading',
};

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: 'MSR Trading',
	alternateName: 'Modern Silk Road Trading',
	url: 'https://msrtrading.com',
	logo: 'https://msrtrading.com/assets/images/logo/logo.png',
	description: 'MSR Trading connects global markets through the Modern Silk Road with unparalleled expertise in medical equipment, laboratory instruments, and industrial solutions.',
	foundingDate: '2020',
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'Istanbul',
		addressCountry: 'Turkey',
	},
	contactPoint: {
		'@type': 'ContactPoint',
		telephone: '+90-212-123-4567',
		contactType: 'customer service',
		email: 'info@msrtrading.com',
	},
	sameAs: [
		'https://www.linkedin.com/company/msr-trading',
		'https://twitter.com/msrtrading',
		'https://www.facebook.com/msrtrading',
	],
	areaServed: {
		'@type': 'Place',
		name: 'Global',
	},
	knowsAbout: [
		'Medical Equipment Trading',
		'Laboratory Instruments',
		'International Trade',
		'Healthcare Solutions',
		'Industrial Equipment',
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Medical and Laboratory Equipment',
		itemListElement: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Product',
					name: 'Medical Equipment',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Product',
					name: 'Laboratory Instruments',
				},
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body
				className={cn(
					`
					text-foreground mx-auto min-h-screen bg-background ${nunito.className} scroll-smooth antialiased
					`,
				)}
			>
				<NavMenu />
				{children}
				<Footer />
			</body>
			<GoogleAnalytics gaId="G-QQ9R6TZTFP" />
		</html>
	);
}
