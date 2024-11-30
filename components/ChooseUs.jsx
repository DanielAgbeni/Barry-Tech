'use client';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseBarryTech = () => {
	const [customerSatisfaction, setCustomerSatisfaction] = useState(0);
	const [africaCoverage, setAfricaCoverage] = useState(0);
	const [teamMembers, setTeamMembers] = useState(0);
	const [companyGrowth, setCompanyGrowth] = useState(0);

	useEffect(() => {
		AOS.init();

		// Function to animate a number up to a target
		const animateNumber = (setter, target, increment, delay) => {
			const step = () => {
				setter((prev) => {
					if (prev + increment >= target) {
						return target; // Stop at the target
					}
					return prev + increment;
				});
			};
			const interval = setInterval(() => {
				step();
				if (setter((prev) => prev) >= target) {
					clearInterval(interval); // Clear interval when the target is reached
				}
			}, delay);
		};

		// Start animations
		animateNumber(setCustomerSatisfaction, 99.9, 1, 10);
		animateNumber(setAfricaCoverage, 10, 0.1, 50);
		animateNumber(setTeamMembers, 10, 1, 10);
		animateNumber(setCompanyGrowth, 300, 0.5, 10);
	}, []);

	const features = [
		{
			title: 'IT Consulting & Support',
			description:
				'Our team provides reliable IT consulting and support to streamline your operations and optimize your technology infrastructure.',
		},
		{
			title: 'Networking & Cybersecurity',
			description:
				'Secure your business operations with our robust networking solutions and proactive cybersecurity strategies.',
		},
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
		// {
		// 	title: 'Data Analytics & Insights',
		// 	description:
		// 		'Transform raw data into actionable insights with our advanced data analytics and visualization tools.',
		// },
		{
			title: 'Custom Software Development',
			description:
				'Build tailored software solutions to meet your unique business requirements, ensuring efficiency and scalability.',
		},
		{
			title: 'Technical Support & Maintenance',
			description:
				'Receive ongoing technical support and system maintenance to keep your operations running smoothly.',
		},
	];

	return (
		<div className='bg-gray-50 py-16'>
			<div className='container mx-auto px-6 md:px-10'>
				<h2
					className='text-4xl font-extrabold mb-10 text-center text-gray-800'
					data-aos='fade-up'>
					Why Choose SAI?
				</h2>

				<div
					className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'
					data-aos='fade-up'>
					{features.map((feature, index) => (
						<div
							key={index}
							className='bg-white px-8 py-10 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center'>
							<h3 className='text-xl font-bold text-red-500 mb-4'>
								{feature.title}
							</h3>
							<p className='text-gray-600'>{feature.description}</p>
						</div>
					))}
				</div>

				<div
					className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 items-center justify-center mx-auto'
					data-aos='fade-up'>
					<div className='bg-white px-6 py-10 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center'>
						<h3 className='text-2xl font-bold text-red-500 mb-2'>
							{customerSatisfaction ? customerSatisfaction.toFixed(1) : '0.0'}%
						</h3>
						<p className='text-gray-600'>Customer Satisfaction</p>
					</div>
					<div className='bg-white px-6 py-10 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center'>
						<h3 className='text-2xl font-bold text-red-500 mb-2'>
							{africaCoverage ? africaCoverage.toFixed(1) : '0.0'}+
						</h3>
						<p className='text-gray-600'>Nigeria Coverage</p>
					</div>
					<div className='bg-white px-6 py-10 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center'>
						<h3 className='text-2xl font-bold text-red-500 mb-2'>
							{teamMembers || 0}+
						</h3>
						<p className='text-gray-600'>Team Members</p>
					</div>
					<div className='bg-white px-6 py-10 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center'>
						<h3 className='text-2xl font-bold text-red-500 mb-2'>
							{companyGrowth || 0}%
						</h3>
						<p className='text-gray-600'>Company Growth</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseBarryTech;
