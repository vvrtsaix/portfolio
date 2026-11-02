/** @type {import('tailwindcss').Config} */
// Color tokens are CSS variables (see layout.astro) so light/dark swap in one place.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				paper: token("paper"),
				surface: token("surface"),
				ink: token("ink"),
				muted: token("muted"),
				rule: token("rule"),
				accent: token("accent"),
			},
			fontFamily: {
				sans: ["Archivo", "ui-sans-serif", "system-ui", "sans-serif"],
			},
		},
	},
	plugins: [],
}
