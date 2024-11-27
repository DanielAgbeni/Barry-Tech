import React from 'react';
import {
	FaFacebook,
	FaTwitter,
	FaLinkedin,
	FaYoutube,
	FaInstagram,
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
	const now = new Date().getFullYear();
	return (
		<footer className='bg-black text-white px-4 py-8'>
			<div className='container mx-auto'>
				{/* Main Footer Content */}
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
					{/* Company Info */}
					<div className='space-y-4'>
						<Image
							src='/img/logo.jpeg'
							alt='icon'
							width={160}
							height={12}
						/>
						<p className='text-sm text-gray-300'>
							Leading tech solutions to help you create a business foundation
							that meets your organization's needs
						</p>
					</div>

					{/* Our Company */}
					<div>
						<h3 className='font-semibold mb-4'>Our Company</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/about'
									className='text-gray-300 hover:text-white'>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href='/products'
									className='text-gray-300 hover:text-white'>
									Products & Services
								</Link>
							</li>
							<li>
								<Link
									href='/careers'
									className='text-gray-300 hover:text-white'>
									Media
								</Link>
							</li>
							<li>
								<Link
									href='/partners'
									className='text-gray-300 hover:text-white'>
									Partners
								</Link>
							</li>
						</ul>
					</div>

					{/* Community */}
					<div>
						<h3 className='font-semibold mb-4'>Community</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/news'
									className='text-gray-300 hover:text-white'>
									News
								</Link>
							</li>
							<li>
								<Link
									href='/blog'
									className='text-gray-300 hover:text-white'>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href='/careers'
									className='text-gray-300 hover:text-white'>
									Careers
								</Link>
							</li>
							<li>
								<Link
									href='/contact'
									className='text-gray-300 hover:text-white'>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>

					{/* Social Media */}
					<div>
						<h3 className='font-semibold mb-4'>Our Social Media</h3>
						<p className='text-sm text-gray-300 mb-4'>
							Connect with us on our social media platforms
						</p>
						<div className='flex space-x-4'>
							<Link
								href='#'
								className='hover:text-gray-300'>
								<FaFacebook size={20} />
							</Link>
							<Link
								href='#'
								className='hover:text-gray-300'>
								<FaTwitter size={20} />
							</Link>
							<Link
								href='#'
								className='hover:text-gray-300'>
								<FaLinkedin size={20} />
							</Link>
							<Link
								href='#'
								className='hover:text-gray-300'>
								<FaYoutube size={20} />
							</Link>
							<Link
								href='#'
								className='hover:text-gray-300'>
								<FaInstagram size={20} />
							</Link>
						</div>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className='border-t border-gray-800 pt-8'>
					<div className='flex flex-col md:flex-row justify-between items-center'>
						<div className='text-sm text-gray-300 mb-4 md:mb-0'>
							Copyright {now} © Secure Advance Information All rights reserved.
						</div>
						<div className='flex space-x-4 text-sm text-gray-300'>
							<Link
								href='/privacy'
								className='hover:text-white'>
								Privacy Policy
							</Link>
							<Link
								href='/terms'
								className='hover:text-white'>
								Terms & Conditions
							</Link>
							<Link
								href='/cookies'
								className='hover:text-white'>
								Cookies Policy
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
