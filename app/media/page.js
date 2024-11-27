export default function Media() {
	return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-3xl font-bold mb-6'>Media</h1>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
				<div className='aspect-video bg-gray-200 rounded-lg'>
					{/* Add your media content here */}
					<div className='w-full h-full flex items-center justify-center'>
						Media Content Placeholder
					</div>
				</div>
			</div>
		</div>
	);
}
