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
            animation: {
                "move-left-right": "move-left-right 2s normal forwards linear",
                "modal-popout": "modal-popout 0.3 normal forwards linear",
            },
            keyframes: {
                "move-left-right": {
                    "0%": {
                        left: "-50%",
                    },
                    "100%": {
                        left: "150%",
                    }
                },
                "width-to-100%": {
                    "0%": {
                        width: "0%",
                    },
                    "100%": {
                        width: "100%",
                    }
                },
                "modal-popout": {
                    "0%": {
                        transform: "scale(1)",
                    },
                    "33%": {
                        transform: "scale(0.95)",
                    },
                    "66%": {
                        transform: "scale(1.05)",
                    },
                    "100%": {
                        transform: "scale(1)",
                    }
                },
            }
        },
    },
    plugins: [
        require("@tailwindcss/line-clamp"),
    ],
}
