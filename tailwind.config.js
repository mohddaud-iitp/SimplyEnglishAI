/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#53747e",
        // secondary: "#00f6ff", 
        dimWhite: "rgb(255, 255, 255)",
        underlineRed:"#e84839",
        contactus:'#d9d9d9',
        footer:'#343a40',
        caseStudy:'#ebebeb',
        feature:'#637b89',
        views: '#f4f4f4' ,
        viewFont:"#6f6f6f"
      },
      textUnderlineOffset : {
        10:'10px',
        12:'12px',
        14:'14px',
        16:'16px',
        18:'18px', 
        20:'20px', 
      } ,
      screens: {  
        xs: "480px",  
        ss: "620px",  
        sm: "768px",   
        nmd:"916px", 
        md: "1060px",   
        lg: "1200px",  
        xl: "1700px",    
      },
      }
    },
  
  plugins: [require('flowbite/plugin'), ],
}