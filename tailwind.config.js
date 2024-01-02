/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      //   mobile: {max:"425px"},
      //   // => @media (min-width: 425px) { ... }

      //   tablet: {max:"640px"},

      //   // => @media (min-width: 640px) { ... }

      //   laptop: {max:"1024px"},
      //   // => @media (min-width: 1024px) { ... }

      //   desktop: {max:"1280px"},
      //   // => @media (min-width: 1280px) { ... }
      sm: { max: "640px" },
      //   =>(min-width: 640px )
      lg: "1023px",
      //   =>(min-width: px )
      mobile: { min: "640px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      tablet: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      laptop: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      desktop: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "large-screen": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
