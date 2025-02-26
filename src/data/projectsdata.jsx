
import portfolio from '../assets/images/portfolio.png'
import cafeteria from '../assets/images/cafeteria-services.png';
import memegen from '../assets/images/meme-gen.png'
import tenzies from '../assets/images/tenzies.png'
import calculator from '../assets/images/calculator.png'
import kudaclone from '../assets/images/kudaclone.png'
import productstore from '../assets/images/productstore.png'


const username = 'tireddev24'

export default [
    {
        id: 1,
        projectName: "Portfolio",
        projectImage: `${portfolio}`,
        description: 'My portfolio website showing my skills and projects',
        github: `https://github.com/${username}/my-portfolio`,
        isLive: true,
        url : "https://michael-amao-portfolio.netlify.app/",
        alt : "Portfolio",
        class: ''

    },
    {
        id: 2,
        projectName: "Cafeteria",
        projectImage: `${cafeteria}`,
        description: '',
        github: `https://github.com/${username}/Cafeteria-Project`,
        isLive: false,
        url : "#",
        alt : "Cafeteria page",
        class: ''

    },  
     {
        id : 3,
        projectName : "Meme Generator",
        projectImage : `${memegen}`,
        description: '',
        github: `https://github.com/${username}/meme-generator`,
        url : "#",
        isLive: false,
        alt : "Meme generator page ",
        class: ''

    },
    {
        id : 4,
        projectName : "Tenzies Game",
        projectImage : `${tenzies}`,
        description: 'A simple game of tenzies built with React',
        github: `https://github.com/${username}/Tenziess-Game1`,
        isLive: true,
        url : "https://tenziess-game1.netlify.app/",
        alt : "Tenzies Game page ",
        class: ''

    },
    {
        id:5, 
        projectName : 'Calculator', 
        projectImage : `${calculator}` ,
        description: 'A basic calculator built with html, css and javascript',
        github: `https://github.com/${username}/Basic-calculator`,
        url: "#",
        isLive: false,
        alt: "Calculator page",
        class: ''

    },
    {
        id:6,
        projectName : 'Kuda Clone', 
        projectImage : `${kudaclone}` ,
        description: 'A clone of the Kuda Microfinance Bank web site',
        github: `https://github.com/${username}/kuda-clone`,
        isLive: true,
        url: "https://white-ocean-04314c40f.5.azurestaticapps.net/",
        alt: "Kuda clone page",
        class: ''
    },
    {
    id:7,
    projectName : 'Product Store', 
    projectImage : `${productstore}` ,
    description: 'A web application built with the MERN stack. You can view, create, edit and delete product records. ',
    github: `https://github.com/${username}/product-store`,
    isLive: true,
    url: "https://my-product-store2.onrender.com/",
    alt: "Product store page",
    class: ''
    }

]
