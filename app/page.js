import WhyChooseBarryTech from '@/components/ChooseUs';
import Hero from '@/components/Hero';
import Image from 'next/image';
import SEO from './SEO';

export default function Home() {
	return (
		<div>
			<SEO
				title='Secure Advance Innovation'
				description=''
			/>

			<Hero />
			<WhyChooseBarryTech />
		</div>
	);
}
