/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "xs": "375px",
        "mx":"786px",
        "xlg":"1020px"
      },
      colors: {
        "desaturated-dark-cyan": "hsl(180, 29%, 50%)",
        "desaturated-dark-cyan-shadow": "hsla(180, 29%, 50%,.2)",
        "light-grayish-cyan-background": "hsl(180, 52%, 96%)",
        "light-grayish-cyan-filter-tablets": "hsl(180, 31%, 95%)",
        "dark-grayish-cyan": "hsl(180, 8%, 52%)",
        "very-dark-grayish-cyan": "hsl(180, 14%, 20%)",
      },
      backgroundImage: (theme) => ({
        'image-mobile':
          "url('./assets/images/bg-header-mobile.svg')",
        'image-desktop':
          "url('./assets/images/bg-header-desktop.svg')",
      }),

    },
  },

  
}
