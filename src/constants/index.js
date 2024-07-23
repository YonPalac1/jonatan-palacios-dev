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

import chat from '../utils/works/img1.png'
import deplace from '../utils/works/img2.webp'
import bdlc from '../utils/works/img3.webp'
import coffee from '../utils/works/img4.webp'

import alkemy from '../utils/cer/alkemy.png'
import curso from '../utils/cer/curso.jpg'
import digital from '../utils/cer/digital.png'
import excel from '../utils/cer/excel.jpg'
import firebase from '../utils/cer/firebase.jpg'

export const WORKS = [{
    name: "Chat en vivo",
    description: "Chat en vivo para consultas con administrador, hecho con socket, node y react",
    img: chat,
    tag: ["React", "Node.js, Socket.io"],
    type: "aplicacion",
    repo: "",
    page: "no"
},{
    name: "Coffe House",
    description: "Landing page para una casa de cafe para mostrar menus y su historia",
    img: coffee,
    tag: ["react", "framerMotion"],
    type: "Landing Page",
    rep: "https://github.com/YonPalac1/coffee-house",
    page: "https://coffee-house-beryl.vercel.app/"
},{
    name: "El baron de la cerveza",
    description: "Plataforma para la compra y venta de bebidas alcoholicas en linea. Esta construida con tecnlogias modernas y escalables, ideal para pequeñas y medianas empresas",
    img: bdlc,
    tag: ["react", "redux", "nodejs", "mysql", "sequelize"],
    type: "Ecommerce",
    repo: "https://github.com/YonPalac1/baron-de-la-cerveza",
    page: "https://baron-de-la-cerveza.vercel.app/"
}, {
    name: "Deplace maison",
    description: "Demo de plataforma Ecommerce con estilos en css y detalles de animación con framer motion",
    img: deplace,
    tag: ["react", "javascript", "magicMouse", "framerMotion"],
    type: "Ecommerce",
    repo: "https://github.com/YonPalac1/deplace-landing",
    page: "https://deplace-landing.vercel.app/"
}]

export const SKILLS = [{
    img: img9,
    name: "react"
},{
    img: img8,
    name:"node"
},{
    img: img6,
    name:"javascript"
},{
    img: img1,
    name: "astro"
},{
    img: img2,
    name: "css"
},{
    img: img3,
    name: "figma"
},{
    img: img4,
    name:"git"
},{
    img: img5,
    name:"html"
},{
    img: img10,
    name:"Tailwind"
},{
    img: img7,
    name:"next"
},
]


export const CERTIFICATIONS = [{
    img: alkemy,
    name: "alkemy"
}, {
    img: digital,
    name: "Digital house"
}, {
    img: excel,
    name: "Excel para el trabajo"
}, {
    img: firebase,
    name: "backend Firebase"
}, {
    img: curso,
    name: "curso fullstack"
},]