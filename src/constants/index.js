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

import magma from '../utils/works/img1.png'
import loscuatroamaneceres from '../utils/works/img2.png'
import bdlc from '../utils/works/img3.webp'
import coffee from '../utils/works/img4.webp'
import glo from '../utils/works/img5.png'
import tucontador from '../utils/works/img6.png'
import retrotoons from '../utils/works/img7.png'

import alkemy from '../utils/cer/alkemy.png'
import curso from '../utils/cer/curso.jpg'
import digital from '../utils/cer/digital.png'
import excel from '../utils/cer/excel.jpg'
import firebase from '../utils/cer/firebase.jpg'

export const WORKS = [{
    name: "Magma vial",
    description: "landing page para empresa de maquinaria agricola, vial y logistica",
    img: magma,
    tag: ["Bootstrap", "css", "Javascript"],
    type: "aplicacion",
    repo: "https://magmavial.com.ar/",
    page: "https://magmavial.com.ar/"
}, {
    name: "los cuatro amaneceres",
    description: "Landing page e contacto e informacion para un complejo dedicado a brindar servicios de retiro.",
    img: loscuatroamaneceres,
    tag: ["react", "javascript", "Nodejs", "framerMotion"],
    type: "Landing Page",
    repo: "https://loscuatroamaneceres.com.ar/",
    page: "https://loscuatroamaneceres.com.ar/"
},
{
    name: "Glo - Apart Hotel",
    description: "Diseño de landing para hotel",
    img: glo,
    tag: ["css", "desing"],
    type: "Landing Page",
    repo: "https://gloaparthotel.com.ar/",
    page: "https://gloaparthotel.com.ar/"
}, {
    name: "Tu contador online",
    description: "Demo de plataforma Ecommerce con estilos en css y detalles de animación con framer motion",
    img: tucontador,
    tag: ["react", "javascript", "Nodejs", "Tailwind", "css"],
    type: "Landing Page",
    repo: "https://tucontador.ar/",
    page: "https://tucontador.ar/"
},{
    name: "Coffe House",
    description: "Landing page para una casa de cafe para mostrar menus y su historia",
    img: coffee,
    tag: ["react", "framerMotion"],
    type: "Landing Page - demo",
    repo: "https://github.com/YonPalac1/coffee-house",
    page: "https://coffee-house-beryl.vercel.app/"
},{
    name: "El baron de la cerveza",
    description: "Plataforma para la compra y venta de bebidas alcoholicas en linea. Esta construida con tecnlogias modernas y escalables, ideal para pequeñas y medianas empresas",
    img: bdlc,
    tag: ["react", "redux", "nodejs", "mysql", "sequelize"],
    type: "Ecommerce - demo",
    repo: "https://github.com/YonPalac1/baron-de-la-cerveza",
    page: "https://baron-de-la-cerveza.vercel.app/"
},{
    name: "Remeras RetroToons",
    description: "Landing page demo para una empresa de remeras",
    img: retrotoons,
    tag: ["react", "redux", "nodejs", "mysql", "sequelize"],
    type: "Landing Page - demo",
    repo: "https://github.com/YonPalac1/retrotoons-tees/",
    page: "https://retrotoons-tees.vercel.app/"
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