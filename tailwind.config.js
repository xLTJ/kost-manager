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
        require("daisyui"),
        require('tailwind-scrollbar'),
        require("tailwind-gradient-mask-image"),
    ],
    daisyui: {
        themes: [
            {
            greencake: {
                ...require("daisyui/src/theming/themes")["cupcake"],
                'text': '#0b1204',
                'primary': '#82d438',
                'secondary': '#93A6DA',
                'accent': '#EBA16E',
            }
        }
        ]
    },
}

