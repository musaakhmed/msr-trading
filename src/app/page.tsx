import Industries from '@/components/HomePage/Industries/Industries';
import Hero from '@/components/HomePage/Hero/Hero';
import Faq from '@/components/HomePage/Faq/Faq';
import WhyChooseUs from '@/components/HomePage/WhyChooseUs/WhyChooseUs';
import { Brands } from '@/components/HomePage/Brands/Brands';

export default function Home() {
	return (
		<main>
			<Hero />
			{/*<Brands />*/}
			<Industries />
			<WhyChooseUs />
			<Faq />
		</main>
	);
}
