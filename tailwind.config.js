/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                brand: '#00f2ea', // Reference cyan color
                'primary-brand': '#00f2ea',
                primary: {
                    50: '#f0fdfa',
                    100: '#ccfbf1',
                    200: '#99f6e4',
                    300: '#5eead4',
                    400: '#2dd4bf', // Default teal
                    500: '#14b8a6',
                    600: '#0d9488',
                    700: '#0f766e',
                    800: '#115e59',
                    900: '#134e4a',
                },
                dark: {
                    bg: '#111827', // Dark navy/slate
                    surface: '#1f2937',
                    border: '#374151',
                    card: '#1a1f2c',
                }
            },
            borderRadius: {
                'plectrum': '40% 60% 60% 40% / 60% 30% 70% 40%', // Custom shape approximate
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
