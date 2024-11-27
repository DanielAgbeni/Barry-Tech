import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
	title: 'Secure Advance Innovation',
	description: 'Computer Solution Orimerunmu, Ogun State',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
