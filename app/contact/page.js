export default function Contact() {
	return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-3xl font-bold mb-6'>Contact Us</h1>
			<div className='grid md:grid-cols-2 gap-8'>
				<div>
					<h2 className='text-xl font-semibold mb-4'>Get in Touch</h2>
					<form className='space-y-4'>
						<div>
							<label
								htmlFor='name'
								className='block mb-1'>
								Name
							</label>
							<input
								type='text'
								id='name'
								className='w-full p-2 border rounded-lg'
								placeholder='Your Name'
							/>
						</div>
						<div>
							<label
								htmlFor='email'
								className='block mb-1'>
								Email
							</label>
							<input
								type='email'
								id='email'
								className='w-full p-2 border rounded-lg'
								placeholder='Your Email'
							/>
						</div>
						<div>
							<label
								htmlFor='message'
								className='block mb-1'>
								Message
							</label>
							<textarea
								id='message'
								rows='4'
								className='w-full p-2 border rounded-lg'
								placeholder='Your Message'></textarea>
						</div>
						<button
							type='submit'
							className='bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-400'>
							Send Message
						</button>
					</form>
				</div>
				<div>
					<h2 className='text-xl font-semibold mb-4'>Our Location</h2>
					<p className='mb-4'>
						Barry Tech
						<br />
						Orimerunmu, Ogun State
						<br />
						Nigeria
					</p>
					<div className='mb-4'>
						<h3 className='font-semibold mb-2'>Business Hours:</h3>
						<p>Monday - Friday: 9:00 AM - 6:00 PM</p>
						<p>Saturday: 10:00 AM - 4:00 PM</p>
						<p>Sunday: Closed</p>
					</div>
				</div>
			</div>
		</div>
	);
}
