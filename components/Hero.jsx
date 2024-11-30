'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import operate from '../public/img/img1.jpeg';
import school from '../public/img/IMG.jpg';
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
			buttonText: 'Explore Services',
		},
		{
			title: 'Photo Studio and Graphics',
			text: 'Transform Moments into Timeless Art with Professional Photography, Editing & Framing. Preserve Your Memories, Perfectly.',
			img: studio,
			alt: 'Photo studio and graphics illustration',
			buttonText: 'View Portfolio',
		},
		{
			title: 'Computer Training Center',
			text: 'Unlock Your Digital Potential. Learn from Experts, Get Certified. From Basics to Advanced Programming.',
			img: school,
			alt: 'Computer training center illustration',
			buttonText: 'Start Learning',
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
		<div className='relative flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 px-6 md:px-16 py-12 overflow-hidden'>
			{/* Image Section with Modern Glass Morphism */}
			<div className='relative w-full md:w-1/2 h-64 md:h-[70vh] mb-8 md:mb-0'>
				<div
					className={`absolute inset-0 transition-all duration-1000 ease-in-out 
					backdrop-blur-sm bg-white/30 rounded-2xl overflow-hidden shadow-2xl 
					${isTransitioning ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}>
					<Image
						src={heroList[currentIndex].img}
						alt={heroList[currentIndex].alt}
						layout='fill'
						objectFit='cover'
						className='absolute inset-0 z-0 rounded-2xl'
						priority
					/>
				</div>
			</div>

			{/* Text Section with Modern Typography */}
			<div
				key={currentIndex}
				className={`w-full md:w-1/2 md:pl-12 text-center md:text-left space-y-6 
				transition-all duration-1000 ease-in-out transform 
				${isTransitioning ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
				<h1 className='text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600'>
					{heroList[currentIndex].title}
				</h1>
				<p className='text-lg md:text-xl text-gray-700 leading-relaxed font-medium opacity-80'>
					{heroList[currentIndex].text}
				</p>
				<div className='flex justify-center md:justify-start'>
					<button
						className='px-8 py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white 
						rounded-xl shadow-lg hover:shadow-xl 
						transition-all duration-300 transform hover:scale-105 active:scale-95 
						focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 
						text-base font-semibold tracking-wider uppercase'>
						{heroList[currentIndex].buttonText}
					</button>
				</div>
			</div>

			{/* Modern Navigation Dots */}
			<div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2.5'>
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
						className={`rounded-full transition-all duration-300 ease-in-out 
						${
							currentIndex === index
								? 'bg-blue-500 w-6 h-2'
								: 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
						} 
						focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50`}
					/>
				))}
			</div>
		</div>
	);
};

export default Hero;
