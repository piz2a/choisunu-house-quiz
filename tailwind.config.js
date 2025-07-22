module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Pretendard', 'sans-serif'],
                pretendard: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", 'sans-serif'],
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}