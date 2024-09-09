/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
		footerM: "0.5rem",
		baseM: "0.8125rem",
		base: "1rem",
		zoom: "1.25rem",
		lg: "1.5rem",
		xl: "2rem",
		"2xl": "2.25rem",
		"3xl": "3rem",
		"4xl": "4rem",
	},
	colors: {
		baseColor: "#050315", //Text Primary Color
		accent:"#2F27CE", //Primary Color
		lightAccent:"#443DFF", //Subtitle Color
		background: "#FFFFFF", //Backgrond Color
		accentBackground: "#F7F7FD", //Nav Fill Color
		white: "#FFFFFF"
	},
	fontFamily: {
        comfortaa: ['Comfortaa', 'sans-serif'],
      }
  },
  plugins: [],
};
