/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("prettier-plugin-tailwindcss"),
        require("@tailwindcss/line-clamp"),
    ],
};
