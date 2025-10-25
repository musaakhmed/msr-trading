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
		'lab instrument trading',
		'Abbott Architect analyzer reagents',
		'Abbott Alinity system reagents',
		'Abbott i-STAT handheld analyzer',
		'Abbott m2000 molecular system reagents',
		'Abbott RealTime PCR assays',
		'Abbott VP 2000',
		'Roche Cobas 8000 reagents',
		'Roche Cobas e411 reagents',
		'Roche Cobas c311 chemistry analyzer',
		'Roche Cobas Integra 400 plus',
		'BioMérieux VITEK 2 reagents',
		'BioMérieux Mini VIDAS kits',
		'Beckman Coulter AU480 clinical chemistry analyzer',
		'Siemens Advia Centaur XP reagents',
		'Hitachi 902 chemistry analyzer',
		'Sysmex hematology analyzer reagents',
		'Mindray BS-200E reagents',
		'Ortho Clinical Diagnostics VITROS systems',
		'Tosoh AIA-900 immunoassay analyzer',
		'Horiba Yumizen H500 reagents',
		'clinical reagents',
		'laboratory kits',
		'diagnostic reagents',
		'assay kits',
		'laboratory consumables',
		'blood collection tubes',
		'molecular biology reagents',
		'immunology kits',
		'clinical chemistry reagents',
		'hematology reagents',
		'medical supplies',
		'laboratory equipment',
		'pharmaceutical reagents',
		'research reagents',
		'biotech reagents',
		'laboratory solutions',
		'lab supplies online',
		'medical reagents supplier',
		'laboratory reagent distributors',
		'scientific reagents',
		'calibration solutions',
		'reference standards',
		'ELISA kits',
		'PCR kits',
		'rapid test kits',
		'diagnostic testing supplies',
		'clinical reagent suppliers for laboratories',
		'bulk laboratory consumables distributor',
		'OEM clinical chemistry reagents distributor',
		'laboratory reagent supply for hospitals',
		'medical laboratory kits wholesale',
		'clinical diagnostics wholesale supplier',
		'laboratory testing reagents for clinics',
		'procurement partner for medical reagents',
		'B2B supplier for assay kits',
		'international laboratory reagent exporters',
		'ISO-certified reagent manufacturer for B2B',
		'contract supply for diagnostic companies',
		'custom reagent manufacturing services',
		'pharmaceutical laboratory supplies B2B',
		'healthcare procurement laboratory consumables',
		'partnership with laboratory reagent company',
		'bulk pricing clinical diagnostics reagents',
		'turnkey solutions for clinical labs',
		'lab supply distribution partnership inquiry',
		'request a quote for laboratory kits bulk'
	],
	authors: [{ name: 'MSR Trading' }],
	creator: 'MSR Trading',
	publisher: 'MSR Trading',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL('https://msr-trading.com'),
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
				url: '/assets/images/logo/logo.png',
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
		email: 'info@msr-trading.com',
	},
	sameAs: [
		'https://www.linkedin.com/company/msr-trading',
		'https://www.instagram.com/msr_trading/',
		'https://www.facebook.com/msrtrading.med',
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
		'Clinical Reagents',
		'Diagnostic Equipment',
		'Laboratory Consumables',
		'Molecular Biology Reagents',
		'Immunology Kits',
		'Clinical Chemistry Reagents',
		'Hematology Reagents',
		'Pharmaceutical Reagents',
		'Research Reagents',
		'Biotech Reagents',
		'ELISA Kits',
		'PCR Kits',
		'Rapid Test Kits',
		'Calibration Solutions',
		'Reference Standards',
		'B2B Laboratory Supplies',
		'Bulk Laboratory Consumables',
		'OEM Clinical Chemistry Reagents',
		'Medical Laboratory Kits Wholesale',
		'Clinical Diagnostics Wholesale',
		'Laboratory Testing Reagents',
		'Procurement Partner for Medical Reagents',
		'International Laboratory Reagent Exporters',
		'ISO-certified Reagent Manufacturer',
		'Contract Supply for Diagnostic Companies',
		'Custom Reagent Manufacturing',
		'Pharmaceutical Laboratory Supplies',
		'Healthcare Procurement Laboratory Consumables',
		'Turnkey Solutions for Clinical Labs',
		'Lab Supply Distribution Partnership'
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
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Product',
					name: 'Clinical Reagents',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Product',
					name: 'Diagnostic Equipment',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Product',
					name: 'Laboratory Consumables',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Product',
					name: 'Molecular Biology Reagents',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Product',
					name: 'Immunology Kits',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Product',
					name: 'Clinical Chemistry Reagents',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Product',
					name: 'Hematology Reagents',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Product',
					name: 'ELISA Kits',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Product',
					name: 'PCR Kits',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Product',
					name: 'Rapid Test Kits',
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
