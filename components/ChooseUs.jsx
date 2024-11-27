'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseBarryTech = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	const features = [
		// {
		// 	title: 'Custom Software Development',
		// 	description:
		// 		'We build tailored software solutions to address your business needs, ensuring efficiency, scalability, and a competitive edge.',
		// },
		{
			title: 'IT Consulting & Support',
			description:
				'Our team provides reliable IT consulting and support to streamline your operations and optimize your technology infrastructure.',
		},
		{
			title: 'Printing Services',
			description:
				'From documents to large-scale posters, we deliver high-quality and affordable printing solutions for all your needs.',
		},
		{
			title: 'Photo Studio & Graphics',
			description:
				'Capture your moments beautifully and enhance your visuals with our professional photography, editing, and graphic design services.',
		},
		{
			title: 'Networking & Cybersecurity',
			description:
				'Secure your business operations with our robust networking solutions and proactive cybersecurity strategies.',
		},
		// {
		// 	title: 'Website Design & Development',
		// 	description:
		// 		'Create a powerful online presence with our custom-built, responsive, and user-friendly websites.',
		// },
		{
			title: 'Cloud Solutions & Hosting',
			description:
				'Leverage reliable cloud solutions and hosting services tailored to your business needs for scalability and performance.',
		},
		{
			title: 'Training & Certification Programs',
			description:
				'Upskill yourself or your team with our expert-led training and certification programs, covering the latest technologies.',
		},
	];

	return (
		<div className='bg-gray-50 py-12'>
			<div className='container mx-auto px-10'>
				<h2
					className='text-3xl font-bold mb-8 text-center text-gray-800'
					data-aos='fade-up'>
					Why Secure Advance Information?
				</h2>
				<div
					className='grid md:grid-cols-3 gap-8'
					data-aos='fade-up'>
					{features.map((feature, index) => (
						<div
							key={index}
							className='bg-white px-6 py-10 rounded-lg shadow-md hover:shadow-xl transition-all duration-300'
							data-aos='fade-up'>
							<h3 className='text-xl font-bold mb-4'>{feature.title}</h3>
							<p className='text-gray-600'>{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WhyChooseBarryTech;
