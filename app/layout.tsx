import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavMenu from '@/components/ui/Header/Header';
import Footer from '@/components/ui/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

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
			<body className={inter.className}>
				<NavMenu />
				{children}
				<Footer />
			</body>
		</html>
	);
}
