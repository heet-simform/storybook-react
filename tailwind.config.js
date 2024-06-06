/** @type {import('tailwindcss').Config} */
const path = require("path");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\,css&/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            ident: "postcss",
            plugins: [require("tailwindcss"), require("autoprefixer")],
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });
    return config;
  },
};
