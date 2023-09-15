/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        confortaa: ["Confortaa"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lemonade", "luxury", "autumn", "winter", "garden"],
  },
};
