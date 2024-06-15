/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "button-hover":"#45BCFF",
        "button":"#1894DF",
        "primary-para-color":"#4D4D4D",
        "secondary-para-color":"#4E6072",
        "tag-color":"#686868",
        "primary-card-color":"#EABB76",
        "secondary-card-color":"#004A75",
        "primary-heading-color":"#F0F0F4",
        "secondary-heading-color":"#EFEFEF",
        "tag-color":"#686868",
        "primary-bg-color":"#45BCFF",
        "secondary-bg-color":"#1894DF",
        "ternary-bg-color":"#4D4D4D",
        "fortery-bg-color":"#4E6072",
        "text-color":"#686868",
        "link-color":"#45BCFF",
        "link-hover-color":"#1894DF",
        "primary-heading-color":"#4D4D4D",
        "secondary-heading-color":"#4E6072",
        "ternary-heading-color":"#686868"
  
      }
    },
  },
  plugins: [],
}

