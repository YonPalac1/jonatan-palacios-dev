import img1 from '../utils/images/astro.png'
import img2 from '../utils/images/css.png'
import img3 from '../utils/images/figma.png'
import img4 from '../utils/images/git.png'
import img5 from '../utils/images/html.png'
import img6 from '../utils/images/js.png'
import img7 from '../utils/images/next.png'
import img8 from '../utils/images/node.png'
import img9 from '../utils/images/react.png'
import img10 from '../utils/images/tailwind.png'

import bdlc from '../utils/works/img2.webp'
import deplace from '../utils/works/img1.webp'
import coffee from '../utils/works/img3.webp'

import alk from '../utils/cer/alkemy.png'
import curso from '../utils/cer/curso.jpg'
import digital from '../utils/cer/digital.png'
import firebase from '../utils/cer/firebase.jpg'

export const WORKS = [{
    name: "Coffe House",
    description: "Landing page para una casa de cafe para mostrar menus y su historia",
    img: coffee,
    tag: ["react", "framerMotion"],
    type: "Landing Page",
    page: "https://coffee-house-beryl.vercel.app/",
    sale: "free"
},{
    name: "El baron de la cerveza",
    description: "Plataforma para la compra y venta de bebidas alcoholicas en linea. Esta construida con tecnlogias modernas y escalables, ideal para pequeñas y medianas empresas",
    img: bdlc,
    tag: ["react", "redux", "nodejs", "mysql", "sequelize"],
    type: "Ecommerce",
    page: "https://baron-de-la-cerveza.vercel.app/",
    sale: "free"
}, {
    name: "Deplace maison",
    description: "Demo de plataforma Ecommerce con estilos en css y detalles de animación con framer motion",
    img: deplace,
    tag: ["react", "javascript", "magicMouse", "framerMotion"],
    type: "Ecommerce",
    page: "https://deplace-landing.vercel.app/",
    sale: "demo"
}]

export const SKILLS = [{
    img: img9,
    name: "react logo"
},{
    img: img8,
    name:"node logo"
},{
    img: img6,
    name:"javascript logo"
},{
    img: img1,
    name: "astro logo"
},{
    img: img2,
    name: "css logo"
},{
    img: img3,
    name: "figma logo"
},{
    img: img4,
    name:"git logo"
},{
    img: img5,
    name:"html logo"
},{
    img: img10,
    name:"Tailwind"
},{
    img: img7,
    name:"next logo"
},
]

export const CERTIFICATIONS = [{
    img: digital,
    name: "Digital House",
},
{
    img: alk,
    name: "Alkemy",
},
{
    img: curso,
    name: "Diseño y desarrollo web fullstack",
},
{
    img: firebase,
    name: "Firebase",
},]