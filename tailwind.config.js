module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Lora', 'serif'], // Add Lora for headings
      },
      boxShadow: {
        'text-lg': '0 4px 6px rgba(0, 0, 0, 0.5)', // Custom text shadow
      },
    },
  },
  plugins: [],
};
