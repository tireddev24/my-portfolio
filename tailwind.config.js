module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
      },
      colors: {
          darkText: '#67e8f9',

      },
      screens : {
        phoneLg:'425px',
        phoneLgr: '530px',
        tablet: '640px',
        laptop: '1024px',  
        desktop: '1280px',
        wide:' 1500px',
      }
      },
    },

}
