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
          darkpink: '#8a045c',
          textdark: "#22d3ee",
          textlight: '#ec4899',
          bglight: "#fee2e2"

      },
      screens : {
        phoneLg:'425px',
        phoneLgr: '530px',
        tablet: '640px',
        laptop: '1024px',  
        desktop: '1280px',
        wide:' 1500px',
        wide_desktop:'1920px',
        wider_desktop:'2000px'
      }
      },
    },

}
