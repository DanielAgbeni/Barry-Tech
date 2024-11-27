'use client';
import { MdClose, MdMenu } from 'react-icons/md';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
	const [isMenu, setIsMenu] = useState(false);
	const [scroll, setScroll] = useState(false);
	const menuRef = useRef(null);

	// Handle scrolling logic
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
			setScroll(scrollTop > 100);
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

	const navItems = [
		{ name: 'Home', link: '/' },
		{ name: 'About Us', link: '/#about' },
		{ name: 'Products & Service', link: '/#products' },
		{ name: 'Media', link: '/#media' },
		{ name: 'Contact', link: '/#contact' },
	];

	return (
		<header
			className={`${
				scroll ? 'fixed top-0 left-0 w-full z-50 shadow-lg' : 'relative'
			} bg-gray-50 transition-all duration-700`}>
			<div className='container mx-auto px-4 h-full'>
				<div className='flex items-center justify-between h-20'>
					<h1 className='text-4xl font-semibold leading-tight tracking-tight text-red-500 hover:text-red-600'>
						Barry <span className='text-blue-500'>Tech</span>
					</h1>

					{/* Desktop Navigation */}
					<nav className='hidden md:block'>
						<ul className='flex items-center space-x-4'>
							{navItems.map((item) => (
								<li key={item.name}>
									<Link
										href={item.link}
										className='relative group px-3 py-2 text-lg text-gray-700 font-medium 
											transition-all duration-300 ease-in-out
											hover:text-blue-600
											after:content-[""] after:absolute after:bottom-0 after:left-0 
											after:w-0 after:h-0.5 after:bg-blue-600 
											after:transition-all after:duration-300 after:ease-in-out
											hover:after:w-full'>
										{item.name}
									</Link>
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
								className='fixed top-0 left-0 w-full h-full bg-black/70 z-40'
								onClick={() => setIsMenu(false)}>
								<div
									className='absolute top-0 right-0 w-64 h-full bg-white shadow-xl 
									px-6 py-8 transform transition-transform duration-300 ease-in-out'
									onClick={(e) => e.stopPropagation()}>
									<div className='flex justify-end mb-6'>
										<button
											onClick={() => setIsMenu(false)}
											className='text-gray-600 hover:text-red-500 transition-colors'>
											<MdClose className='text-3xl' />
										</button>
									</div>

									<ul className='space-y-4'>
										{navItems.map((item) => (
											<li key={item.name}>
												<Link
													href={item.link}
													className='block py-2 text-lg text-gray-800 
														font-medium transition-colors duration-300 
														hover:text-blue-600 
														relative 
														after:content-[""] after:absolute after:bottom-0 after:left-0 
														after:w-0 after:h-0.5 after:bg-blue-600 
														after:transition-all after:duration-300 after:ease-in-out
														hover:after:w-full'
													onClick={() => setIsMenu(false)}>
													{item.name}
												</Link>
											</li>
										))}
									</ul>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
