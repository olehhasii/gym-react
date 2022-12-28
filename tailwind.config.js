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
				card: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
			},
		},
	},
	plugins: [],
};
