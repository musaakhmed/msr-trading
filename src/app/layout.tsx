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
	title: 'MSR Trading',
	description: 'Modern Silk Road Trading',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<meta name="viewport" content="width=device-width" />
			<body
				// className={` mx-auto min-h-screen bg-background text-text ${nunito.className}`}
				className={cn(
					`
					text-text mx-auto min-h-screen bg-background ${nunito.className} scroll-smooth text-primary antialiased
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
