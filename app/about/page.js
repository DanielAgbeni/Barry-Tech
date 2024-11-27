'use client';
import React, { useState } from 'react';
import {
	FaPrint,
	FaCamera,
	FaGraduationCap,
	FaTrophy,
	FaUsers,
} from 'react-icons/fa';
import { FaComputerMouse } from 'react-icons/fa6';

export default function About() {
	const [activeTab, setActiveTab] = useState('mission');

	const serviceHighlights = [
		{
			icon: <FaComputerMouse className='text-4xl text-blue-600' />,
			title: 'Computer Services',
			description:
				'Comprehensive hardware and software solutions, from repairs to system optimization.',
		},
		{
			icon: <FaPrint className='text-4xl text-green-600' />,
			title: 'Professional Printing',
			description:
				'High-quality printing services for businesses and individuals, with state-of-the-art technology.',
		},
		{
			icon: <FaCamera className='text-4xl text-purple-600' />,
			title: 'Photography',
			description:
				'Professional photography and graphic design services, capturing moments with precision.',
		},
		{
			icon: <FaGraduationCap className='text-4xl text-red-600' />,
			title: 'Computer Training',
			description:
				'Structured training programs from beginner to advanced levels, with certification support.',
		},
	];

	const tabContents = {
		mission: (
			<div className='bg-blue-50 p-6 rounded-lg'>
				<h2 className='text-2xl font-bold mb-4 text-blue-800'>Our Mission</h2>
				<p className='text-gray-700'>
					Barry Tech is committed to empowering individuals and businesses
					through innovative technology solutions. We strive to bridge the
					digital divide by providing accessible, high-quality services that
					enhance productivity, creativity, and digital literacy.
				</p>
			</div>
		),
		values: (
			<div className='bg-green-50 p-6 rounded-lg'>
				<h2 className='text-2xl font-bold mb-4 text-green-800'>
					Our Core Values
				</h2>
				<ul className='space-y-3 text-gray-700'>
					<li className='flex items-center'>
						<FaTrophy className='mr-3 text-yellow-500' /> Excellence in Service
					</li>
					<li className='flex items-center'>
						<FaUsers className='mr-3 text-blue-500' /> Customer-Centric Approach
					</li>
					<li className='flex items-center'>
						<FaGraduationCap className='mr-3 text-green-500' /> Continuous
						Learning
					</li>
					<li className='flex items-center'>
						<FaComputerMouse className='mr-3 text-purple-500' /> Technological
						Innovation
					</li>
				</ul>
			</div>
		),
		journey: (
			<div className='bg-purple-50 p-6 rounded-lg'>
				<h2 className='text-2xl font-bold mb-4 text-purple-800'>Our Journey</h2>
				<div className='space-y-4 text-gray-700'>
					<div>
						<h3 className='font-semibold text-purple-600'>
							2023: Humble Beginnings
						</h3>
						<p>Founded in Orimerunmu with a single computer and big dreams.</p>
					</div>
					<div>
						<h3 className='font-semibold text-purple-600'>2024: Expansion</h3>
						<p>
							Introduced comprehensive training programs and expanded printing
							services.
						</p>
					</div>
					<div>
						<h3 className='font-semibold text-purple-600'>
							2024(August): Digital Transformation
						</h3>
						<p>
							Adapted to digital era, offering advanced tech solutions and
							online training.
						</p>
					</div>
				</div>
			</div>
		),
	};

	return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-4xl font-bold mb-8 text-center text-gray-800'>
				About Barry Tech
			</h1>

			{/* Services Highlights */}
			<div className='grid md:grid-cols-4 gap-6 mb-12'>
				{serviceHighlights.map((service, index) => (
					<div
						key={index}
						className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center'>
						<div className='flex justify-center mb-4'>{service.icon}</div>
						<h3 className='font-bold text-xl mb-2'>{service.title}</h3>
						<p className='text-gray-600'>{service.description}</p>
					</div>
				))}
			</div>

			{/* Interactive Tabs */}
			<div className='mb-12'>
				<div className='flex justify-center space-x-4 mb-6'>
					{Object.keys(tabContents).map((tab) => (
						<button
							key={tab}
							className={`px-4 py-2 rounded-full transition-all duration-300 ${
								activeTab === tab
									? 'bg-blue-200 text-white'
									: 'bg-gray-200 text-gray-700 hover:bg-blue-100'
							}`}
							onClick={() => setActiveTab(tab)}>
							{tab.charAt(0).toUpperCase() + tab.slice(1)}
						</button>
					))}
				</div>

				{tabContents[activeTab]}
			</div>

			{/* Call to Action */}
			<div className='bg-gray-100 p-8 rounded-lg text-center'>
				<h2 className='text-2xl font-bold mb-4'>
					Ready to Transform Your Digital Experience?
				</h2>
				<p className='mb-6 text-gray-700'>
					Whether you need computer services, printing, photography, or
					training, Barry Tech is your trusted partner in technological
					excellence.
				</p>
				<button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all'>
					Contact Us Today
				</button>
			</div>
		</div>
	);
}
