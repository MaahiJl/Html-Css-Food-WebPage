/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {

    },
    screens: {
        '2xl': {'max': '1400px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1200px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '992px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '768px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '576px'},
        // => @media (max-width: 639px) { ... }
      },
    extend: {
        colors:{
            "red" : "#C90000",
            "yellow" : "#FFC300",
            "yellowHover" : "rgb(228, 175, 0)",
            "yellowLight" : "#FFFDE6",
            "greyLight" : "#504F4F",
            "gerylighter" : "#7D7C7C",
            "greyDark" : "#323232",
            "btnGrey" : "rgb(241 241 241)"
        },
        fontFamily: {
            "poppins-light": "poppinsLight",
            "poppins-regular" : "poppinsRegular",
            "poppins-medium" : "poppinsMedium",
            "poppins-semibold" : "poppinsSemibold",
        },
        container: {
            center: true,

        }

    },
  },
  plugins: [],
}


