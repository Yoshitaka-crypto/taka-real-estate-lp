/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'sm': '0 1px 2px var(--tw-shadow-color)',
        'DEFAULT': '0 2px 4px var(--tw-shadow-color)',
        'md': '0 4px 6px var(--tw-shadow-color)',
        'lg': '0 10px 15px var(--tw-shadow-color)',
        'xl': '0 20px 25px var(--tw-shadow-color)',
        '2xl': '0 25px 50px var(--tw-shadow-color)',
        // 白っぽい影
        'white-sm': '1px 1px 2px rgba(255, 255, 255, 0.7)',
        'white-md': '2px 2px 4px rgba(255, 255, 255, 0.7)',
        'white-lg': '3px 3px 6px rgba(255, 255, 255, 0.7)',
        // グレー系の影
        'gray-sm': '1px 1px 2px rgba(107, 114, 128, 0.7)',
        'gray-md': '2px 2px 4px rgba(107, 114, 128, 0.7)',
        'gray-lg': '3px 3px 6px rgba(107, 114, 128, 0.7)',
      }
    },
  },
  plugins: [],
}
