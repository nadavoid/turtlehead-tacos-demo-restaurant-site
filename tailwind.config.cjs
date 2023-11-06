const { ComponentsContentPath } = require("@yext/search-ui-react");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    // this will apply the Tailwind styles to the components
    ComponentsContentPath,
  ],
  theme: {
    extend: {
      colors: {
        orange: "#ff9500",
        "dark-orange": "#db8000",
      },
      scale: {
        1.02: "1.02",
      },
    },
  },
  plugins: [],
};
