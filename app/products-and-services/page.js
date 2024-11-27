export default function ProductsAndServices() {
	return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-3xl font-bold mb-6'>Products & Services</h1>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
				<div className='p-4 border rounded-lg'>
					<h2 className='text-xl font-semibold mb-3'>Computer Services</h2>
					<ul className='list-disc list-inside'>
						<li>Hardware Repairs</li>
						<li>Software Installation</li>
						<li>System Maintenance</li>
						<li>Data Recovery</li>
					</ul>
				</div>
				<div className='p-4 border rounded-lg'>
					<h2 className='text-xl font-semibold mb-3'>Printing Services</h2>
					<ul className='list-disc list-inside'>
						<li>Document Printing</li>
						<li>Photo Printing</li>
						<li>Banner Printing</li>
						<li>Business Cards</li>
					</ul>
				</div>
				<div className='p-4 border rounded-lg'>
					<h2 className='text-xl font-semibold mb-3'>Training Programs</h2>
					<ul className='list-disc list-inside'>
						<li>Basic Computer Skills</li>
						<li>Advanced Programming</li>
						<li>Graphics Design</li>
						<li>Web Development</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
