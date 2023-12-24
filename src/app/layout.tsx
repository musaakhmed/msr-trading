import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import NavMenu from '@/components/ui/Header/Header';
import Footer from '@/components/ui/Footer/Footer';

const nunito = Nunito_Sans({
	subsets: ['latin'],
	variable: '--font-nunito-sans',
});

export const metadata: Metadata = {
	title: 'WeldMed',
	description: 'Take the healthcare to the future',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<meta name="viewport" content="width=device-width" />
			<body className={` text-text bg-background ${nunito.className}`}>
				<NavMenu />
				{children}
				<Footer />
			</body>
		</html>
	);
}
