module.exports = {
    darkMode: "media",
    content: [
        "./index.html",
        "./login.html",
        "./privacy.html",
        "./add-issue.html",
        "./changelog.html",
        "./why_prompt.html",
        "./*.js",
    ],
    theme: {
        extend: {
            colors: {
                deepblue: "#18344A", // background
                medblue: "#295B7A", // eye
                lightblue: "#4A90A4", // eye ring
                darkbg: "#0f1a2a", // dark mode background
                darktext: "#e2e8f0", // dark mode text
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
