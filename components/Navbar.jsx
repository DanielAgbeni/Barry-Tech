'use client';
import { MdClose, MdMenu } from 'react-icons/md';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Navbar = () => {
	const [isMenu, setIsMenu] = useState(false);
	const [scroll, setScroll] = useState(false);
	const menuRef = useRef(null);

	// Handle scrolling logic
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
			setScroll(scrollTop > 500);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// Lock body scroll when the mobile menu is open
	useEffect(() => {
		if (isMenu) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [isMenu]);

	return (
		<header
			className={`${
				scroll ? 'fixed top-0 left-0 w-full z-50 shadow-lg' : 'relative'
			} bg-white transition-all duration-700`}>
			<div className='container mx-auto px-4 h-full'>
				<div className='flex items-center justify-between h-20'>
					{/* <Image
						src='/icon.png'
						alt='icon'
						width={160}
						height={12}
					/> */}
					<h1 className='text-4xl font-semibold leading-tight tracking-tight text-red-500 hover:text-red-600'>
						Barry <span className='text-blue-500'>Tech</span>
					</h1>
					{/* Desktop Navigation */}
					<nav className='hidden md:block'>
						<ul className='flex items-center space-x-8'>
							{[
								{ name: 'Home', link: '#' },
								{ name: 'About Us', link: '#about' },
								{ name: 'Products & Service', link: '#products' },
								{ name: 'Media', link: '#media' },
								{ name: 'Contact', link: '#contact' },
							].map((item) => (
								<li key={item.name}>
									<a
										href={item.link}
										className='text-lg text-primary-500 font-semibold transition-colors duration-500 hover:text-white hover:bg-primary-500 rounded hover:px-4 py-1.5'>
										{item.name}
									</a>
								</li>
							))}
						</ul>
					</nav>

					{/* Mobile Navigation */}
					<div className='md:hidden'>
						<button
							onClick={() => setIsMenu(!isMenu)}
							className='p-2'>
							{isMenu ? (
								<MdClose className='text-3xl text-red-600' />
							) : (
								<MdMenu className='text-3xl text-gray-400' />
							)}
						</button>

						{isMenu && (
							<div
								ref={menuRef}
								className='absolute top-full right-0 w-64 bg-gray-800 shadow-xl rounded-lg mt-2 py-3 px-4 z-50'>
								<ul className='space-y-2'>
									{[
										{ name: 'Home', link: '#' },
										{ name: 'About', link: '#about' },
										{ name: 'Products', link: '#products' },
										{ name: 'Accreditation', link: '#accreditation' },
										{ name: 'Contact', link: '#contact' },
									].map((item) => (
										<li key={item.name}>
											<a
												href={item.link}
												className='block py-2 px-4 text-white font-semibold hover:bg-gray-700 rounded-lg transition-colors duration-300'
												onClick={() => setIsMenu(false)}>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
