'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import operate from '../public/img/img1.jpeg';
import school from '../public/img/img2.jpeg';
import studio from '../public/img/img3.jpeg';

const Hero = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);

	const heroList = [
		{
			title: 'Computer Service and Printing',
			text: 'Power Up Your Productivity with Fast, Reliable & Affordable Solutions For All Your Computing Needs.',
			img: operate,
			alt: 'Computer service and printing illustration',
		},
		{
			title: 'Photo Studio and Graphics',
			text: 'Transform Moments into Timeless Art with Professional Photography, Editing & Framing. Preserve Your Memories, Perfectly.',
			img: studio,
			alt: 'Photo studio and graphics illustration',
		},
		{
			title: 'Computer Training Center',
			text: 'Unlock Your Digital Potential. Learn from Experts, Get Certified. From Basics to Advanced Programming.',
			img: school,
			alt: 'Computer training center illustration',
		},
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setIsTransitioning(true);
			setTimeout(() => {
				setCurrentIndex((prevIndex) =>
					prevIndex === heroList.length - 1 ? 0 : prevIndex + 1,
				);
				setIsTransitioning(false);
			}, 500); // Half of the transition duration
		}, 5000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className='relative flex flex-col md:flex-row items-center justify-center md:justify-between h-screen bg-gray-50 px-10 md:px-16 overflow-hidden'>
			{/* Image Section with Transition */}
			<div className='relative w-full md:w-1/2 h-64 md:h-[70vh] overflow-hidden'>
				<div
					className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
						isTransitioning ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
					}`}>
					<Image
						src={heroList[currentIndex].img}
						alt={heroList[currentIndex].alt}
						layout='fill'
						objectFit='cover'
						className='rounded-lg shadow-md'
						priority
					/>
				</div>
			</div>

			{/* Text Section with Transition */}
			<div
				key={currentIndex}
				className={`w-full md:w-1/2 mt-6 md:mt-0 md:pl-12 text-center md:text-left 
          transition-all duration-1000 ease-in-out transform
          ${
						isTransitioning
							? 'opacity-0 translate-y-10'
							: 'opacity-100 translate-y-0'
					}`}>
				<h1 className='text-3xl md:text-5xl font-bold text-gray-800 mb-4 transition-all duration-1000'>
					{heroList[currentIndex].title}
				</h1>
				<p className='text-lg md:text-xl text-gray-600 mb-6 transition-all duration-1000'>
					{heroList[currentIndex].text}
				</p>
				<button
					className='px-6 py-3 bg-blue-600 text-white rounded-lg shadow 
          hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95'>
					Learn More
				</button>
			</div>

			{/* Navigation Dots */}
			<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2'>
				{heroList.map((_, index) => (
					<button
						key={index}
						onClick={() => {
							setIsTransitioning(true);
							setTimeout(() => {
								setCurrentIndex(index);
								setIsTransitioning(false);
							}, 500);
						}}
						className={`w-3 h-3 rounded-full transition-all duration-300 
              ${currentIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
					/>
				))}
			</div>
		</div>
	);
};

export default Hero;
