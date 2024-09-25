/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', // Update the paths to match your project structure
    './pages/**/*.{html,js}', // If you're using Next.js or a similar framework
    './components/**/*.{html,js}', // Add any other relevant directories
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

