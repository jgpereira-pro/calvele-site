/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Adicionando as cores da Calvele
				calvele: {
					red: '#D31A1A',
					yellow: '#F2B705',
					dark: '#120F0F',
				}
			},
		},
	},
	plugins: [],
}