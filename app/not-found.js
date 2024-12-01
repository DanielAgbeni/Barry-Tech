'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function NotFound() {
	useEffect(() => {
		// Log the 404 error (optional)
		console.log('404 error occurred');
	}, []);

	return (
		<div className='min-h-[70vh] flex items-center justify-center px-4'>
			<div className='text-center'>
				<h1 className='text-6xl font-bold text-red-200 mb-4'>404</h1>
				<h2 className='text-2xl font-semibold text-foreground mb-4'>
					Page Not Found
				</h2>
				<p className='text-primary-500 mb-8 max-w-md mx-auto'>
					The page you are looking for might have been removed, had its name
					changed, or is temporarily unavailable.
				</p>
				<Link
					href='/'
					className='inline-block bg-blue-200 text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity'>
					Return Home
				</Link>
			</div>
		</div>
	);
}
