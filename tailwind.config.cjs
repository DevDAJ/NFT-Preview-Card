/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				main: 'hsl(217, 54%, 11%)',
				card: 'hsl(216, 50%, 16%)',
				line: 'hsl(215, 32%, 27%)',
			},
		},
	},
	plugins: [],
};
