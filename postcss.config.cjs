// postcss.config.cjs  
module.exports = {  
  plugins: [  
    require('tailwindcss'),  // Usa este plugin en lugar de @tailwindcss/postcss  
    require('autoprefixer'),  
  ],  
};