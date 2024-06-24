/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderComponent, j as renderHead, k as renderSlot, m as maybeRenderHead } from '../astro_CZfBANPu.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Image } from './generic_BZJEfQLm.mjs';
import 'clsx';

const $$Astro$8 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/yona-2/Desktop/portfolio/node_modules/astro/components/ViewTransitions.astro", void 0);

const light_green = new Proxy({"src":"/_astro/light_green.DaGu-xt7.png","width":277,"height":269,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/images/light_green.png";
							}
							
							return target[name];
						}
					});

const light_violet = new Proxy({"src":"/_astro/light_violet.CFssYM6M.png","width":277,"height":269,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/images/light_violet.png";
							}
							
							return target[name];
						}
					});

const $$Astro$7 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="portfolio web"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Image", $$Image, { "class": "light_violet", "src": light_violet, "alt": "" })} ${renderComponent($$result, "Image", $$Image, { "class": "light_green", "src": light_green, "alt": "" })}  </body> </html>`;
}, "C:/Users/yona-2/Desktop/portfolio/src/layouts/Layout.astro", void 0);

const flor = new Proxy({"src":"/_astro/flor.BkN9tq8i.png","width":36,"height":55,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/images/flor.png";
							}
							
							return target[name];
						}
					});

const $$Astro$6 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<div class="card div5" data-astro-cid-v2cbyr3p> <h2 data-astro-cid-v2cbyr3p>About</h2> <p data-astro-cid-v2cbyr3p>
me apasiona crear sitios web y aplicaciones que sean faciles de
        usar, visualmente atractivos y que cumplan con los objetivos de
        mis clientes. estoy siempre buscando nuevos retos y estoy
        dispuesto a aprender nuevas tecnlogias para mejorar mis
        habilidades.
</p> ${renderComponent($$result, "Image", $$Image, { "class": "flower", "src": flor, "alt": "", "data-astro-cid-v2cbyr3p": true })} </div> `;
}, "C:/Users/yona-2/Desktop/portfolio/src/components/About.astro", void 0);

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

const bdlc = new Proxy({"src":"/_astro/img2.D1xTX6i0.webp","width":600,"height":500,"format":"webp"}, {
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

const deplace = new Proxy({"src":"/_astro/img1.Ba98pqrp.webp","width":577,"height":500,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/works/img1.webp";
							}
							
							return target[name];
						}
					});

const coffee = new Proxy({"src":"/_astro/img3.DPeQy-Ty.webp","width":798,"height":500,"format":"webp"}, {
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

const alk = new Proxy({"src":"/_astro/alkemy.D2a47uY_.png","width":1401,"height":831,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/cer/alkemy.png";
							}
							
							return target[name];
						}
					});

const curso = new Proxy({"src":"/_astro/curso.DxPs0WxR.jpg","width":700,"height":1100,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/cer/curso.jpg";
							}
							
							return target[name];
						}
					});

const digital = new Proxy({"src":"/_astro/digital.C-hup2R9.png","width":1215,"height":878,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/cer/digital.png";
							}
							
							return target[name];
						}
					});

const firebase = new Proxy({"src":"/_astro/firebase.DLkCfFrc.jpg","width":800,"height":595,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/cer/firebase.jpg";
							}
							
							return target[name];
						}
					});

const WORKS = [{
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

const CERTIFICATIONS = [{
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
},];

const arrow = new Proxy({"src":"/_astro/flecha.BHW2ZtzP.png","width":64,"height":60,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/images/flecha.png";
							}
							
							return target[name];
						}
					});

const $$Astro$5 = createAstro();
const $$Works = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Works;
  return renderTemplate`${maybeRenderHead()}<div class="card div4" data-astro-cid-ibztcaso> <h2 data-astro-cid-ibztcaso>Proyectos</h2> <div class="images" data-astro-cid-ibztcaso> ${WORKS?.map((item, i) => renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "image", "src": item.img, "alt": "", "data-astro-cid-ibztcaso": true })}`)} </div> ${renderComponent($$result, "Image", $$Image, { "class": "arrow", "src": arrow, "alt": "", "data-astro-cid-ibztcaso": true })} </div> `;
}, "C:/Users/yona-2/Desktop/portfolio/src/components/Works.astro", void 0);

const left = new Proxy({"src":"/_astro/left.DX4pXKL6.png","width":15,"height":15,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/images/left.png";
							}
							
							return target[name];
						}
					});

const right = new Proxy({"src":"/_astro/right.BeeTz3i2.png","width":15,"height":15,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/images/right.png";
							}
							
							return target[name];
						}
					});

const $$Astro$4 = createAstro();
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Skills;
  return renderTemplate`${maybeRenderHead()}<div class="card div9" data-astro-cid-ab4ihpzs> <h2 data-astro-cid-ab4ihpzs>Skills</h2> <div class="row_flex skills" data-astro-cid-ab4ihpzs> ${SKILLS.map((item, i) => {
    return renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": item.img, "class": "w-[50px]", "alt": "item.name", "data-astro-cid-ab4ihpzs": true })}`;
  })} </div> <div class="arrows" data-astro-cid-ab4ihpzs> <button data-astro-cid-ab4ihpzs>${renderComponent($$result, "Image", $$Image, { "src": left, "alt": "", "data-astro-cid-ab4ihpzs": true })}</button> <button data-astro-cid-ab4ihpzs>${renderComponent($$result, "Image", $$Image, { "src": right, "alt": "", "data-astro-cid-ab4ihpzs": true })}</button> </div> </div> `;
}, "C:/Users/yona-2/Desktop/portfolio/src/components/Skills.astro", void 0);

const $$Astro$3 = createAstro();
const $$Certifications = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Certifications;
  return renderTemplate`${maybeRenderHead()}<div class="card div12"> <h2>certificados</h2> <div> ${renderComponent($$result, "Image", $$Image, { "src": CERTIFICATIONS[0].img, "alt": "" })} </div> ${renderComponent($$result, "Image", $$Image, { "class": "arrow", "src": arrow, "alt": "" })} </div>`;
}, "C:/Users/yona-2/Desktop/portfolio/src/components/Certifications.astro", void 0);

const $$Astro$2 = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Experience;
  return renderTemplate`${maybeRenderHead()}<div class="card div8"> <h2>Experiencia</h2> </div>`;
}, "C:/Users/yona-2/Desktop/portfolio/src/components/Experience.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<section class="text-center text-white footer" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>Yonatan Palacios | hecho con Astro | 2024</p> </section> `;
}, "C:/Users/yona-2/Desktop/portfolio/src/components/Footer.astro", void 0);

const photo = new Proxy({"src":"/_astro/portrait.CcWQycKj.webp","width":360,"height":541,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/images/portrait.webp";
							}
							
							return target[name];
						}
					});

const computer = new Proxy({"src":"/_astro/computer.D7SnwWDf.gif","width":400,"height":400,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/images/computer.gif";
							}
							
							return target[name];
						}
					});

const talk = new Proxy({"src":"/_astro/talk.ID0qyX6T.gif","width":400,"height":400,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yona-2/Desktop/portfolio/src/utils/images/talk.gif";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio | Jonatan Palacios", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="parent" data-astro-cid-j7pv25f6> <div class="card div1" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": photo, "class": "img_photo", "alt": "foto de jonatan palacios dev", "data-astro-cid-j7pv25f6": true })} <button class="btn_download" data-astro-cid-j7pv25f6> <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" data-astro-cid-j7pv25f6> <path d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z" fill="#ffffff" data-astro-cid-j7pv25f6></path> <path d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z" fill="#ffffff" data-astro-cid-j7pv25f6></path> </svg>
CV</button> </div> <div class="card div2" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Jonatan Palacios</h2> <p data-astro-cid-j7pv25f6>Desarrollador web / Fullstack</p> </div> <div class="card div3" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "class": "computer", "src": computer, "alt": "", "data-astro-cid-j7pv25f6": true })} </div> ${renderComponent($$result2, "Experience", $$Experience, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "About", $$About, { "data-astro-cid-j7pv25f6": true })} <div class="card div6" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>redes</h2> <div class="row_flex social" data-astro-cid-j7pv25f6> <a href="" data-astro-cid-j7pv25f6> <svg width="30px" height="30px" viewBox="0 0 16 16" fill="none" data-astro-cid-j7pv25f6><path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z" data-astro-cid-j7pv25f6></path></svg> </a> <a href="" data-astro-cid-j7pv25f6> <svg fill="#F70606" width="30px" height="30px" viewBox="0 0 32 32" version="1.1" data-astro-cid-j7pv25f6> <path d="M30.996 7.824v17.381c0 0 0 0 0 0.001 0 1.129-0.915 2.044-2.044 2.044-0 0-0 0-0.001 0h-4.772v-11.587l-8.179 6.136-8.179-6.136v11.588h-4.772c0 0 0 0-0 0-1.129 0-2.044-0.915-2.044-2.044 0-0 0-0.001 0-0.001v0-17.381c0-0 0-0.001 0-0.001 0-1.694 1.373-3.067 3.067-3.067 0.694 0 1.334 0.231 1.848 0.619l-0.008-0.006 10.088 7.567 10.088-7.567c0.506-0.383 1.146-0.613 1.84-0.613 1.694 0 3.067 1.373 3.067 3.067v0z" data-astro-cid-j7pv25f6></path> </svg> </a> <a href="" data-astro-cid-j7pv25f6> <svg width="30px" height="30px" viewBox="0 0 32 32" fill="none" data-astro-cid-j7pv25f6> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z" fill="#BFC8D0" data-astro-cid-j7pv25f6></path> <path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_87_7264)" data-astro-cid-j7pv25f6></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="white" data-astro-cid-j7pv25f6></path> <path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white" data-astro-cid-j7pv25f6></path> <defs data-astro-cid-j7pv25f6> <linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse" data-astro-cid-j7pv25f6> <stop stop-color="#5BD066" data-astro-cid-j7pv25f6></stop> <stop offset="1" stop-color="#27B43E" data-astro-cid-j7pv25f6></stop> </linearGradient> </defs> </svg> </a> </div> </div> <div class="card div7" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Mate y código</h2> </div> ${renderComponent($$result2, "Certifications", $$Certifications, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-j7pv25f6": true })} <div class="card div10" data-astro-cid-j7pv25f6></div> <div class="card div11" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "class": "computer", "src": talk, "alt": "", "data-astro-cid-j7pv25f6": true })} </div> ${renderComponent($$result2, "Works", $$Works, { "data-astro-cid-j7pv25f6": true })} </div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` })}  `;
}, "C:/Users/yona-2/Desktop/portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/yona-2/Desktop/portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
