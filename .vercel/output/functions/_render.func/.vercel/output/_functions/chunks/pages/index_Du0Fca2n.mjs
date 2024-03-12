/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderComponent, j as renderHead, k as renderSlot, m as maybeRenderHead } from '../astro_CZfBANPu.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Image } from './generic_BZJEfQLm.mjs';

const $$Astro$b = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/yona-2/Desktop/portfolio/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$a = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="portfolio web"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/yona-2/Desktop/portfolio/src/layouts/Layout.astro", void 0);

const $$Astro$9 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<nav class="fixed w-full" data-astro-cid-5blmo7yk> <div class="border flex justify-around gap-4 border-gray-700 bg-gray-800 m-auto text-gray-400 max-w-[1024px]" data-astro-cid-5blmo7yk> <a class="cursor-pointer hover:bg-gray-700 w-full pt-3 pb-3 text-center" href="#works" data-astro-cid-5blmo7yk>Trabajos</a> <a class="cursor-pointer hover:bg-gray-700 w-full pt-3 pb-3 text-center" href="#about" data-astro-cid-5blmo7yk>Sobre mi</a> <a class="cursor-pointer text-green-500 hover:bg-green-700 w-full pt-3 pb-3 text-center" href="#contact" data-astro-cid-5blmo7yk>Contactame</a> </div> </nav> `;
}, "C:/Users/yona-2/Desktop/portfolio/src/components/Navbar.astro", void 0);

const duck = new Proxy({"src":"/_astro/duck.D9xn2E7Y.gif","width":383,"height":480,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/images/duck.gif";
							}
							
							return target[name];
						}
					});

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$8 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="filter" data-astro-cid-3ef6ksr2></div> <div class="bg" data-astro-cid-3ef6ksr2></div> <header class="relative text-center uppercase pt-24 pb-24 text-white md:pt-54 lg:pt-64" data-astro-cid-3ef6ksr2> <span class="tagline text-xs font-bold border border-white p-2" data-astro-cid-3ef6ksr2>bienvenido</span> <h1 class="text-3xl mt-5 md:text-6xl" data-astro-cid-3ef6ksr2>Hola! Soy Jonatan\n<span class="text-orange-400" data-astro-cid-3ef6ksr2>Web developer</span> </h1> <p class="font-thin text-xs p-5 mb-10 md:text-sm" data-astro-cid-3ef6ksr2> Hago cosas para la web: e-commerce, landing pages y ese tipo de cosas </p> <div class="flex justify-center" data-astro-cid-3ef6ksr2> <a class="font-bold flex justify-center w-64 flex text-orange-400" href="https://www.linkedin.com/in/palacios-yonatan/" data-astro-cid-3ef6ksr2>Hablemos\n<svg class="icon icon-tabler icon-tabler-circle-arrow-right ml-3" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-3ef6ksr2></path><path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" data-astro-cid-3ef6ksr2></path><path d="M16 12l-4 -4" data-astro-cid-3ef6ksr2></path><path d="M16 12h-8" data-astro-cid-3ef6ksr2></path><path d="M12 16l4 -4" data-astro-cid-3ef6ksr2></path></svg> </a> </div> ', ' </header>  <script type="module">\n    const trackMouse = (e) => {\n        document.documentElement.style.setProperty(\n          "--cursorXPos",\n          `${e.clientX}px`\n        )\n        document.documentElement.style.setProperty(\n          "--cursorYPos",\n          `${e.clientY}px`\n        )\n      }\n    \n    document.addEventListener("mousemove", trackMouse)\n<\/script>'], ["", '<div class="filter" data-astro-cid-3ef6ksr2></div> <div class="bg" data-astro-cid-3ef6ksr2></div> <header class="relative text-center uppercase pt-24 pb-24 text-white md:pt-54 lg:pt-64" data-astro-cid-3ef6ksr2> <span class="tagline text-xs font-bold border border-white p-2" data-astro-cid-3ef6ksr2>bienvenido</span> <h1 class="text-3xl mt-5 md:text-6xl" data-astro-cid-3ef6ksr2>Hola! Soy Jonatan\n<span class="text-orange-400" data-astro-cid-3ef6ksr2>Web developer</span> </h1> <p class="font-thin text-xs p-5 mb-10 md:text-sm" data-astro-cid-3ef6ksr2> Hago cosas para la web: e-commerce, landing pages y ese tipo de cosas </p> <div class="flex justify-center" data-astro-cid-3ef6ksr2> <a class="font-bold flex justify-center w-64 flex text-orange-400" href="https://www.linkedin.com/in/palacios-yonatan/" data-astro-cid-3ef6ksr2>Hablemos\n<svg class="icon icon-tabler icon-tabler-circle-arrow-right ml-3" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-3ef6ksr2></path><path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" data-astro-cid-3ef6ksr2></path><path d="M16 12l-4 -4" data-astro-cid-3ef6ksr2></path><path d="M16 12h-8" data-astro-cid-3ef6ksr2></path><path d="M12 16l4 -4" data-astro-cid-3ef6ksr2></path></svg> </a> </div> ', ' </header>  <script type="module">\n    const trackMouse = (e) => {\n        document.documentElement.style.setProperty(\n          "--cursorXPos",\n          \\`\\${e.clientX}px\\`\n        )\n        document.documentElement.style.setProperty(\n          "--cursorYPos",\n          \\`\\${e.clientY}px\\`\n        )\n      }\n    \n    document.addEventListener("mousemove", trackMouse)\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Image", $$Image, { "class": "absolute w-24", "src": duck, "alt": "a duck walking", "data-astro-cid-3ef6ksr2": true }));
}, "C:/Users/yona-2/Desktop/portfolio/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$7 = createAstro();
const $$Marquee = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Marquee;
  return renderTemplate(_a || (_a = __template(["", '<section class="relative w-[100%]" data-astro-cid-tpudeaz7> <div class="marquee flex w-[100%] p-5 bg-orange-400 overflow-hidden uppercase" data-astro-cid-tpudeaz7> <h1 data-astro-cid-tpudeaz7> E-commerce * Landing Page * Web Apps * Web Design * ', "</h1> </div> </section>  <script type=\"module\">\nfunction Marquee(selector, speed) {\n  const parentSelector = document.querySelector(selector);\n  const clone = parentSelector.innerHTML;\n  const firstElement = parentSelector.children[0];\n  let i = 0;\n  parentSelector.insertAdjacentHTML('beforeend', clone);\n  parentSelector.insertAdjacentHTML('beforeend', clone);\n\n  setInterval(function () {\n    firstElement.style.marginLeft = `-${i}px`;\n    if (i > firstElement.clientWidth) {\n      i = 0;\n    }\n    i = i + speed;\n  }, 0);\n}\n\n//after window is completed load\n//1 class selector for marquee\n//2 marquee speed 0.2\nwindow.addEventListener('load', Marquee('.marquee', 1))\n<\/script>"], ["", '<section class="relative w-[100%]" data-astro-cid-tpudeaz7> <div class="marquee flex w-[100%] p-5 bg-orange-400 overflow-hidden uppercase" data-astro-cid-tpudeaz7> <h1 data-astro-cid-tpudeaz7> E-commerce * Landing Page * Web Apps * Web Design * ', "</h1> </div> </section>  <script type=\"module\">\nfunction Marquee(selector, speed) {\n  const parentSelector = document.querySelector(selector);\n  const clone = parentSelector.innerHTML;\n  const firstElement = parentSelector.children[0];\n  let i = 0;\n  parentSelector.insertAdjacentHTML('beforeend', clone);\n  parentSelector.insertAdjacentHTML('beforeend', clone);\n\n  setInterval(function () {\n    firstElement.style.marginLeft = \\`-\\${i}px\\`;\n    if (i > firstElement.clientWidth) {\n      i = 0;\n    }\n    i = i + speed;\n  }, 0);\n}\n\n//after window is completed load\n//1 class selector for marquee\n//2 marquee speed 0.2\nwindow.addEventListener('load', Marquee('.marquee', 1))\n<\/script>"])), maybeRenderHead(), " ");
}, "C:/Users/yona-2/Desktop/portfolio/src/components/Marquee.astro", void 0);

const $$Astro$6 = createAstro();
const $$Photo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Photo;
  return renderTemplate`<!-- <Image src={} alt="Foto desarrollador web" class="m-auto w-[100%]" /> -->${maybeRenderHead()}<div class="border text-right w-[100%] p-2" data-astro-cid-w4fmld3g> <button data-astro-cid-w4fmld3g> <svg class="icon icon-tabler icon-tabler-thumb-up" width="24" height="24" view-box="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-w4fmld3g><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-w4fmld3g></path><path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" data-astro-cid-w4fmld3g></path></svg> <!-- <svg
                             class="icon icon-tabler icon-tabler-thumb-up-filled"
                             width="24"
                             height="24"
                             view-box="0 0 24 24"
                             stroke-width="1.5"
                             stroke="currentColor"
                             fill="none"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                         ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                             d="M13 3a3 3 0 0 1 2.995 2.824l.005 .176v4h2a3 3 0 0 1 2.98 2.65l.015 .174l.005 .176l-.02 .196l-1.006 5.032c-.381 1.626 -1.502 2.796 -2.81 2.78l-.164 -.008h-8a1 1 0 0 1 -.993 -.883l-.007 -.117l.001 -9.536a1 1 0 0 1 .5 -.865a2.998 2.998 0 0 0 1.492 -2.397l.007 -.202v-1a3 3 0 0 1 3 -3z"
                             stroke-width="0"
                             fill="currentColor"></path><path
                                d="M5 10a1 1 0 0 1 .993 .883l.007 .117v9a1 1 0 0 1 -.883 .993l-.117 .007h-1a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-7a2 2 0 0 1 1.85 -1.995l.15 -.005h1z"
                                stroke-width="0"
                                 fill="currentColor"></path></svg> --> </button> </div> `;
}, "C:/Users/yona-2/Desktop/portfolio/src/components/Photo.astro", void 0);

const img1 = new Proxy({"src":"/_astro/astro.wjnskYyY.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/images/astro.png";
							}
							
							return target[name];
						}
					});

const img2 = new Proxy({"src":"/_astro/css.TQO6BS-1.png","width":96,"height":96,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/images/css.png";
							}
							
							return target[name];
						}
					});

const img3 = new Proxy({"src":"/_astro/figma.CWB198fX.png","width":96,"height":96,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/images/figma.png";
							}
							
							return target[name];
						}
					});

const img4 = new Proxy({"src":"/_astro/git.DcUGCXKK.png","width":97,"height":96,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/images/git.png";
							}
							
							return target[name];
						}
					});

const img5 = new Proxy({"src":"/_astro/html.CH_esvs5.png","width":96,"height":96,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/images/html.png";
							}
							
							return target[name];
						}
					});

const img6 = new Proxy({"src":"/_astro/js.C98Zx3P_.png","width":96,"height":96,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/images/js.png";
							}
							
							return target[name];
						}
					});

const img7 = new Proxy({"src":"/_astro/next.CT-wmR2m.png","width":96,"height":96,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/images/next.png";
							}
							
							return target[name];
						}
					});

const img8 = new Proxy({"src":"/_astro/node.DZVlaFDf.png","width":96,"height":96,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/images/node.png";
							}
							
							return target[name];
						}
					});

const img9 = new Proxy({"src":"/_astro/react.xkQ8Km66.png","width":96,"height":96,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/images/react.png";
							}
							
							return target[name];
						}
					});

const img10 = new Proxy({"src":"/_astro/tailwind.B--624RX.png","width":1024,"height":615,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/images/tailwind.png";
							}
							
							return target[name];
						}
					});

const bdlc = new Proxy({"src":"/_astro/img3.B5uxDnQA.webp","width":1035,"height":862,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/works/img3.webp";
							}
							
							return target[name];
						}
					});

const deplace = new Proxy({"src":"/_astro/img2.DVhRbee9.webp","width":821,"height":712,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/works/img2.webp";
							}
							
							return target[name];
						}
					});

const WORKS = [{
    name: "El baron de la cerveza",
    description: "Plataforma para la compra y venta de bebidas alcoholicas en linea. Esta construida con tecnlogias modernas y escalables, ideal para pequeñas y medianas empresas",
    img: bdlc,
    tag: ["react", "redux", "nodejs", "mysql", "sequelize"],
    type: "Ecommerce",
    page: "https://baron-de-la-cerveza.vercel.app/",
}, {
    name: "Deplace maison",
    description: "Demo de plataforma Ecommerce con estilos en css y detalles de animación con framer motion",
    img: deplace,
    tag: ["react", "javascript", "magicMouse", "framerMotion"],
    type: "Ecommerce | Demo",
    page: "https://deplace-landing.vercel.app/"
}];

const SKILLS = [{
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
];

const $$Astro$5 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<section class="text-center uppercase pb-32 p-5 text-white pt-32 relative overflow-hidden" id="about" data-astro-cid-v2cbyr3p> <div class="m-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:pl-64 xl:pr-64" data-astro-cid-v2cbyr3p> <div class="border border-double rounded-2xl fit-content overflow-hidden" data-astro-cid-v2cbyr3p> ${renderComponent($$result, "Photo", $$Photo, { "data-astro-cid-v2cbyr3p": true })} </div> <div class="flex justify-center flex-col z-10 md:text-left" data-astro-cid-v2cbyr3p> <h3 class="text-xl font-bold mb-5" data-astro-cid-v2cbyr3p>
A passion for <span class="text-orange-400" data-astro-cid-v2cbyr3p>learning</span> </h3> <p class="text-sm text-gray-200 leading-6" data-astro-cid-v2cbyr3p>
me apasiona crear sitios web y aplicaciones que sean faciles de usar, visualmente atractivos y que cumplan con los objetivos de mis clientes. estoy siempre buscando nuevos retos y estoy dispuesto a aprender nuevas tecnlogias para mejorar mis habilidades.
</p> <div class="grid grid-cols-5 gap-4" data-astro-cid-v2cbyr3p> ${SKILLS.map((item, i) => {
    return renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": item.img, "class": "w-[50px]", "alt": "item.name", "data-astro-cid-v2cbyr3p": true })}`;
  })} </div> </div> </div> <div class="bg-box" data-astro-cid-v2cbyr3p></div> </section> `;
}, "C:/Users/yona-2/Desktop/portfolio/src/components/About.astro", void 0);

const $$Astro$4 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${maybeRenderHead()}<section class="text-center relative overflow-hidden uppercase p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-24 p-2 text-white gap-4 md:p-24" data-astro-cid-xmivup5a> <div class="card border rounded-2xl p-5" data-astro-cid-xmivup5a> <h3 class="mb-3 font-bold text-xl" data-astro-cid-xmivup5a>Desarrollo de páginas web a medida</h3> <p class="text-left text-xs leading-6" data-astro-cid-xmivup5a> <svg class="icon icon-tabler icon-tabler-corner-right-down text-orange-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xmivup5a><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-xmivup5a></path><path d="M6 6h6a3 3 0 0 1 3 3v10l-4 -4m8 0l-4 4" data-astro-cid-xmivup5a></path></svg>
Destaca en el mundo digital con un a pagina web diseñada y desarrollada a la medida de tus necesidades.</p> <p class="text-left text-xs leading-6 mb-5" data-astro-cid-xmivup5a> <svg class="icon  icon-tabler icon-tabler-corner-right-down text-orange-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xmivup5a><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-xmivup5a></path><path d="M6 6h6a3 3 0 0 1 3 3v10l-4 -4m8 0l-4 4" data-astro-cid-xmivup5a></path></svg>
creamos sitios web únicos que reflejan tu marca, tu estilo y tus objetivos</p> <span class="text-orange-400" data-astro-cid-xmivup5a>Tu presencia online, unica y poderosa</span> </div> <div class="card border border-double rounded-2xl p-5" data-astro-cid-xmivup5a> <h3 class="mb-3 font-bold text-xl" data-astro-cid-xmivup5a>La clave para el desarrollo web exitoso: la comunicación</h3> <p class="text-left text-xs leading-6" data-astro-cid-xmivup5a> <svg class="icon icon-tabler icon-tabler-corner-right-down text-orange-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xmivup5a><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-xmivup5a></path><path d="M6 6h6a3 3 0 0 1 3 3v10l-4 -4m8 0l-4 4" data-astro-cid-xmivup5a></path></svg>
Creo en la importancia de una comunicacioón clara, abiera y transparente durante todo el proceso del desarrollo, por eso me comprometo a:
</p> <p class="text-left text-xs leading-6 flex" data-astro-cid-xmivup5a> <svg class="icon icon-tabler icon-tabler-arrow-right-square text-red-400 text-sm" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xmivup5a><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-xmivup5a></path><path d="M7 12l14 0" data-astro-cid-xmivup5a></path><path d="M18 15l3 -3l-3 -3" data-astro-cid-xmivup5a></path><path d="M3 10h4v4h-4z" data-astro-cid-xmivup5a></path></svg>
Mantenerte informado en cada etapa del proyecto.
</p> <p class="text-left text-xs leading-6 flex" data-astro-cid-xmivup5a> <svg class="icon icon-tabler icon-tabler-arrow-right-square text-red-400 text-sm" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xmivup5a><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-xmivup5a></path><path d="M7 12l14 0" data-astro-cid-xmivup5a></path><path d="M18 15l3 -3l-3 -3" data-astro-cid-xmivup5a></path><path d="M3 10h4v4h-4z" data-astro-cid-xmivup5a></path></svg>
Ser receptivos a tus preguntas y comentarios.
</p> <p class="text-left text-xs leading-6 flex" data-astro-cid-xmivup5a> <svg class="icon icon-tabler icon-tabler-arrow-right-square text-red-400 text-sm" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xmivup5a><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-xmivup5a></path><path d="M7 12l14 0" data-astro-cid-xmivup5a></path><path d="M18 15l3 -3l-3 -3" data-astro-cid-xmivup5a></path><path d="M3 10h4v4h-4z" data-astro-cid-xmivup5a></path></svg>
Solicitar tu opinion y feedback.
</p> <p class="text-left text-xs leading-6 flex" data-astro-cid-xmivup5a> <svg class="icon icon-tabler icon-tabler-arrow-right-square text-red-400 text-sm" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xmivup5a><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-xmivup5a></path><path d="M7 12l14 0" data-astro-cid-xmivup5a></path><path d="M18 15l3 -3l-3 -3" data-astro-cid-xmivup5a></path><path d="M3 10h4v4h-4z" data-astro-cid-xmivup5a></path></svg>
Ser proactivos en la resolución de problemas.
</p> </div> <div class="card border border-double rounded-2xl p-5" data-astro-cid-xmivup5a> <h3 class="mb-3 font-bold text-xl" data-astro-cid-xmivup5a>Precios accesibles</h3> <p class="text-left text-xs leading-6" data-astro-cid-xmivup5a> <svg class="icon icon-tabler icon-tabler-corner-right-down text-orange-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xmivup5a><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-xmivup5a></path><path d="M6 6h6a3 3 0 0 1 3 3v10l-4 -4m8 0l-4 4" data-astro-cid-xmivup5a></path></svg>
Te ofrecemos soluciones web de alta calidad a precios que te sorprenderan y obtendras:
</p> <p class="text-left text-xs leading-6 flex" data-astro-cid-xmivup5a> <svg class="icon icon-tabler icon-tabler-arrow-right-square text-red-400 text-sm" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xmivup5a><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-xmivup5a></path><path d="M7 12l14 0" data-astro-cid-xmivup5a></path><path d="M18 15l3 -3l-3 -3" data-astro-cid-xmivup5a></path><path d="M3 10h4v4h-4z" data-astro-cid-xmivup5a></path></svg>
Diseños personalizados.
</p> <p class="text-left text-xs leading-6 flex" data-astro-cid-xmivup5a> <svg class="icon icon-tabler icon-tabler-arrow-right-square text-red-400 text-sm" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xmivup5a><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-xmivup5a></path><path d="M7 12l14 0" data-astro-cid-xmivup5a></path><path d="M18 15l3 -3l-3 -3" data-astro-cid-xmivup5a></path><path d="M3 10h4v4h-4z" data-astro-cid-xmivup5a></path></svg>
Funcionalidades avanzadas.
</p> <p class="text-left text-xs leading-6 flex" data-astro-cid-xmivup5a> <svg class="icon icon-tabler icon-tabler-arrow-right-square text-red-400 text-sm" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xmivup5a><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-xmivup5a></path><path d="M7 12l14 0" data-astro-cid-xmivup5a></path><path d="M18 15l3 -3l-3 -3" data-astro-cid-xmivup5a></path><path d="M3 10h4v4h-4z" data-astro-cid-xmivup5a></path></svg>
Experiencias de usuario fluidas e intuitivas.
</p> <p class="text-left text-xs leading-6 flex" data-astro-cid-xmivup5a> <svg class="icon icon-tabler icon-tabler-arrow-right-square text-red-400 text-sm" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xmivup5a><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-xmivup5a></path><path d="M7 12l14 0" data-astro-cid-xmivup5a></path><path d="M18 15l3 -3l-3 -3" data-astro-cid-xmivup5a></path><path d="M3 10h4v4h-4z" data-astro-cid-xmivup5a></path></svg>
Ser proactivos en la resolución de problemas.
</p> <span class="text-orange-400" data-astro-cid-xmivup5a>Solicita tu presupuesto hoy mismo, haciendo click aqui</span> </div> <div class="bg-box" data-astro-cid-xmivup5a></div> </section> `;
}, "C:/Users/yona-2/Desktop/portfolio/src/components/Contact.astro", void 0);

const $$Astro$3 = createAstro();
const $$Works = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Works;
  return renderTemplate`${maybeRenderHead()}<section class="text-center uppercase pb-24 p-5 text-white" id="works" data-astro-cid-ibztcaso> <h3 class="text-2xl font-bold mb-5" data-astro-cid-ibztcaso>
Mis <span class="text-orange-400" data-astro-cid-ibztcaso>trabajos</span> </h3> <div class="p-5 m-auto mt-10 grid grid-cols-1 xl:grid-cols-2 lg:pl-24 lg:pr-24" data-astro-cid-ibztcaso> ${WORKS.map((item, i) => {
    return renderTemplate`<div class="col-span-1 mb-6" data-astro-cid-ibztcaso> <div class="grid grid-cols-1 md:grid-cols-2" data-astro-cid-ibztcaso> <div class="overflow-hidden rounded-2xl" data-astro-cid-ibztcaso> ${renderComponent($$result, "Image", $$Image, { "src": item.img, "alt": "ecommerce projects", "data-astro-cid-ibztcaso": true })} </div> <section class="text-center pl-1 lg:text-left" data-astro-cid-ibztcaso> <div class="p-2 text-center lg:text-left" data-astro-cid-ibztcaso> <h4 class="font-bold text-orange-400 pb-3" data-astro-cid-ibztcaso>${item.name} | <span class="text-white" data-astro-cid-ibztcaso>${item.type}</span></h4> <p class="text-xs leading-6" data-astro-cid-ibztcaso>${item.description}</p> <a${addAttribute(item.page, "href")} class="flex justify-center lg:justify-start mt-5" target="_blank" data-astro-cid-ibztcaso>Visitar <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-arrow-up-right" data-astro-cid-ibztcaso><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-ibztcaso></path><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" data-astro-cid-ibztcaso></path><path d="M15 9l-6 6" data-astro-cid-ibztcaso></path><path d="M15 15v-6h-6" data-astro-cid-ibztcaso></path></svg></a> </div> </section> </div> </div>`;
  })} </div> </section> `;
}, "C:/Users/yona-2/Desktop/portfolio/src/components/Works.astro", void 0);

const kid = new Proxy({"src":"/_astro/compuer-kid.Dsv_fQj4.gif","width":498,"height":373,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/images/compuer-kid.gif";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Form;
  return renderTemplate`${maybeRenderHead()}<div class="text-center uppercase pb-24 p-5 text-white pt-24" id="contact" data-astro-cid-346426y5> <div class="m-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:pl-64 xl:pr-64" data-astro-cid-346426y5> <div class="flex justify-center flex-col gap-4" data-astro-cid-346426y5> <div data-astro-cid-346426y5> <p class="text-orange-400 text-sm" data-astro-cid-346426y5>linkedin</p> <span data-astro-cid-346426y5>https://www.linkedin.com/in/palacios-yonatan/</span> </div> <div data-astro-cid-346426y5> <p class="text-orange-400 text-sm" data-astro-cid-346426y5>email</p> <span data-astro-cid-346426y5>palaciosjonatan.dev@gmail.com</span> </div> <div data-astro-cid-346426y5> <p class="text-orange-400 text-sm" data-astro-cid-346426y5>Tel</p> <span data-astro-cid-346426y5>9 11 3936 6942</span> </div> <div data-astro-cid-346426y5> <p class="text-orange-400 text-sm" data-astro-cid-346426y5>De donde soy?</p> <span data-astro-cid-346426y5>Buenos Aires, Argentina</span> </div> </div> <div class="card border border-double rounded-2xl fit-content mt-4 p-6 relative" data-astro-cid-346426y5> <span class="text-orange-400 font-bold" data-astro-cid-346426y5>Llevemos tus ideas al mundo</span> <form class="shadow-md px-8 pt-6 pb-8 mb-4" data-astro-cid-346426y5> <div class="mb-4" data-astro-cid-346426y5> <label class="block text-gray-700 text-sm font-bold mb-2" for="username" data-astro-cid-346426y5>
Como te llamas?
</label> <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Escribe tu bombre" data-astro-cid-346426y5> </div> <div class="mb-6" data-astro-cid-346426y5> <label class="block text-gray-700 text-sm font-bold mb-2" for="email" data-astro-cid-346426y5>
Tu email
</label> <input class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Tu Email" data-astro-cid-346426y5> </div> <div class="mb-6" data-astro-cid-346426y5> <label class="block text-gray-700 text-sm font-bold mb-2" for="question" data-astro-cid-346426y5>
Consulta
</label> <textarea class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="question" placeholder="Escriba su consulta aqui" data-astro-cid-346426y5></textarea> </div> <div class="flex items-center justify-center" data-astro-cid-346426y5> <button class="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" data-astro-cid-346426y5>
Enviar
</button> </div> </form> <div class="img-container absolute " data-astro-cid-346426y5> ${renderComponent($$result, "Image", $$Image, { "class": "w-32 h-32 lg:w-50 lg:h-50", "src": kid, "alt": "", "data-astro-cid-346426y5": true })} </div> </div> </div> </div> `;
}, "C:/Users/yona-2/Desktop/portfolio/src/components/Form.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<section class="text-center text-white p-5"> <p>Yonatan Palacios | hecho con Astro | 2024</p> </section>`;
}, "C:/Users/yona-2/Desktop/portfolio/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio | Jonatan Palacios", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Contact", $$Contact, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Works", $$Works, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Marquee", $$Marquee, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "About", $$About, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Form", $$Form, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` })}  `;
}, "C:/Users/yona-2/Desktop/portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/yona-2/Desktop/portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
