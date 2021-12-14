const colors = require("tailwindcss/colors")

module.exports = {
    darkMode: false,
    content: [
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./lib/**/*.{js,jsx,ts,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {

        },
    },
    plugins: [
        require("@tailwindcss/line-clamp"),
    ],
}
