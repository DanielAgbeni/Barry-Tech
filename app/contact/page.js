'use client';
import React, { useEffect, useState } from 'react';
import {
	FaMapMarkerAlt,
	FaClock,
	FaEnvelope,
	FaPhoneAlt,
	FaPaperPlane,
	FaUser,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
		});
	}, []);

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[id]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// TODO: Add form submission logic
		console.log('Form submitted', formData);
		// Reset form after submission
		setFormData({
			name: '',
			email: '',
			message: '',
		});
	};

	return (
		<div className='bg-gray-50 min-h-screen'>
			<div className='container mx-auto px-4 py-12'>
				<h1
					className='text-4xl font-extrabold text-center mb-12 text-gray-800'
					data-aos='fade-up'>
					Contact Us
				</h1>

				<div className='grid md:grid-cols-2 gap-8'>
					{/* Contact Form */}
					<div
						className='bg-white shadow-lg rounded-xl p-8'
						data-aos='fade-right'>
						<h2 className='text-2xl font-bold mb-6 text-gray-800 flex items-center'>
							<FaPaperPlane className='mr-3 text-blue-600' />
							Get in Touch
						</h2>
						<form
							onSubmit={handleSubmit}
							className='space-y-5'>
							<div>
								<label
									htmlFor='name'
									className='block mb-2 text-gray-700 flex items-center'>
									<FaUser className='mr-2 text-gray-500' /> Name
								</label>
								<input
									type='text'
									id='name'
									value={formData.name}
									onChange={handleChange}
									className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
									placeholder='Your Name'
									required
								/>
							</div>
							<div>
								<label
									htmlFor='email'
									className='block mb-2 text-gray-700 flex items-center'>
									<FaEnvelope className='mr-2 text-gray-500' /> Email
								</label>
								<input
									type='email'
									id='email'
									value={formData.email}
									onChange={handleChange}
									className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
									placeholder='Your Email'
									required
								/>
							</div>
							<div>
								<label
									htmlFor='message'
									className='block mb-2 text-gray-700 flex items-center'>
									<FaPaperPlane className='mr-2 text-gray-500' /> Message
								</label>
								<textarea
									id='message'
									rows='4'
									value={formData.message}
									onChange={handleChange}
									className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
									placeholder='Your Message'
									required></textarea>
							</div>
							<button
								type='submit'
								className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center'>
								<FaPaperPlane className='mr-2' /> Send Message
							</button>
						</form>
					</div>

					{/* Contact Information */}
					<div
						className='bg-white shadow-lg rounded-xl p-8'
						data-aos='fade-left'>
						<h2 className='text-2xl font-bold mb-6 text-gray-800 flex items-center'>
							<FaMapMarkerAlt className='mr-3 text-green-600' />
							Our Location
						</h2>

						<div className='mb-6'>
							<h3 className='text-xl font-semibold mb-3 text-gray-700 flex items-center'>
								<FaMapMarkerAlt className='mr-2 text-red-500' /> Address
							</h3>
							<p className='text-gray-600'>
								Barry Tech
								<br />
								Orimerunmu, Ogun State
								<br />
								Nigeria
							</p>
						</div>

						<div className='mb-6'>
							<h3 className='text-xl font-semibold mb-3 text-gray-700 flex items-center'>
								<FaClock className='mr-2 text-purple-500' /> Business Hours
							</h3>
							<div className='text-gray-600'>
								<p>Monday - Friday: 9:00 AM - 6:00 PM</p>
								<p>Saturday: 10:00 AM - 4:00 PM</p>
								<p>Sunday: Closed</p>
							</div>
						</div>

						<div>
							<h3 className='text-xl font-semibold mb-3 text-gray-700 flex items-center'>
								<FaPhoneAlt className='mr-2 text-blue-500' /> Contact
							</h3>
							<p className='text-gray-600'>
								Email: support@barrytech.com
								<br />
								Phone: +234 123 456 7890
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
