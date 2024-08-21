/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // Tailwind Forms 플러그인 추가
  ],
  future: {
    hoverOnlyWhenSupported: true, // future 설정에 hoverOnlyWhenSupported 추가
  },
};
