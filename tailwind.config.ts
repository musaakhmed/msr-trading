import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				nunito_sans: 'var(--font-nunito-sans)',
			},
			colors: {
				cerulean: {
					50: '#fdfeff',
					100: '#D9F6FC',
					200: '#A1E9F7',
					300: '#1DCAED',
					400: '#0FA0BD',
					500: '#0C7489',
					600: '#0B6F83',
					700: '#096071',
					800: '#06404B',
					900: '#032026',
				},
				primary: 'rgb(var(--color-primary) / <alpha-value>)',
				text: 'rgb(var(--color-text) / <alpha-value>)',
				secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
				background: 'rgb(var(--bg-color) / <alpha-value>)',
			},
			backgroundImage: {
				'hero-pattern': "url('/assets/images/hero/dental1.jpg')",
			},
		},
	},
	plugins: [],
};
export default config;
