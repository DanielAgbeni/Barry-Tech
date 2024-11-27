/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: {
					100: '#B2BEB5',
					400: '#A9A9A9',
					500: '#808080',
				},
				blue: {
					200: '#2d3091',
				},
				red: {
					200: '#ec1a23',
				},
			},
		},
	},
	plugins: [],
};
