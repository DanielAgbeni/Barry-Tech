'use client';
import React, { useEffect } from 'react';
import {
	FaLaptop,
	FaPrint,
	FaChalkboardTeacher,
	FaNetworkWired,
	FaCloud,
	FaShieldAlt,
	FaDesktop,
	FaDatabase,
	FaTools,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
	{
		title: 'IT Consulting & Support',
		description:
			'Our team provides reliable IT consulting and support to streamline your operations and optimize your technology infrastructure.',
		icon: FaTools,
		color: 'text-blue-600',
	},
	{
		title: 'Printing Services',
		description:
			'From documents to large-scale posters, we deliver high-quality and affordable printing solutions for all your needs.',
		icon: FaPrint,
		color: 'text-green-600',
	},
	{
		title: 'Photo Studio & Graphics',
		description:
			'Capture your moments beautifully and enhance your visuals with our professional photography, editing, and graphic design services.',
		icon: FaDesktop,
		color: 'text-purple-600',
	},
	{
		title: 'Networking & Cybersecurity',
		description:
			'Secure your business operations with our robust networking solutions and proactive cybersecurity strategies.',
		icon: FaNetworkWired,
		color: 'text-red-600',
	},
	{
		title: 'Cloud Solutions & Hosting',
		description:
			'Leverage reliable cloud solutions and hosting services tailored to your business needs for scalability and performance.',
		icon: FaCloud,
		color: 'text-indigo-600',
	},
	{
		title: 'Training & Certification Programs',
		description:
			'Upskill yourself or your team with our expert-led training and certification programs, covering the latest technologies.',
		icon: FaChalkboardTeacher,
		color: 'text-orange-600',
	},
];

export default function ProductsAndServices() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
		});
	}, []);

	return (
		<div className='bg-gray-50 min-h-screen'>
			<div className='container mx-auto px-4 py-12'>
				<h1
					className='text-4xl font-extrabold text-center mb-12 text-gray-800'
					data-aos='fade-up'>
					Our Products & Services
				</h1>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{features.map((feature, index) => {
						const Icon = feature.icon;
						return (
							<div
								key={index}
								className='bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl'
								data-aos='fade-up'
								data-aos-delay={index * 100}>
								<div className='p-6'>
									<div className='flex items-center mb-4'>
										<Icon className={`${feature.color} text-4xl mr-4`} />
										<h2 className='text-xl font-bold text-gray-800'>
											{feature.title}
										</h2>
									</div>
									<p className='text-gray-600'>{feature.description}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
