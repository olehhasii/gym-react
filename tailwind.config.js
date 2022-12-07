/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				green_txt: '#00AB55',
				green_bg: 'rgba(0, 171, 85, 0.08)',
			},
			boxShadow: {
				bru: '5px 5px 0px 0px #000',
			},
		},
	},
	plugins: [],
};
