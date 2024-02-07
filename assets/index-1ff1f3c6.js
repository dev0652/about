(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const E=function(e){const t=`#${e}`,s=`#${e}-title`,a=document.querySelector(t),o=a.querySelector(s),i=a.querySelector(".section-content"),r=o.innerHTML;o.innerHTML="";const c=100;i.style.animationDelay=c*r.length;let n=0;function d(){n<r.length&&(o.innerHTML+=r.charAt(n),n++,setTimeout(d,c))}d()};E("about");const Z=document.querySelector(".header"),M=document.querySelectorAll(".header-nav-link"),Y=document.querySelectorAll(".section"),X=document.querySelector("main"),{height:ee}=Z.getBoundingClientRect(),w=`${ee}px`;document.body.style.paddingTop=w;document.documentElement.style.scrollPaddingTop=w;X.style.setProperty("--blurOffset",w);M.forEach(e=>{e.addEventListener("click",te)});function te(e){e.preventDefault();const{id:t}=e.target.dataset;Y.forEach(s=>{const a=s.id===t;s.style.display=a?"block":"none",a&&E(t)}),M.forEach(s=>{s.classList.remove("active")}),e.target.classList.add("active")}const j=document.querySelector("#color-scheme-switcher-checkbox"),se=document.querySelector(".color-scheme-switcher-slider");function oe(){const e=localStorage.getItem("dark-color-scheme");e&&e!=="false"&&(j.checked=!0)}function q(){const e=document.querySelector("main");e.classList.remove("faded-edges"),j.checked?document.body.classList.add("dark"):document.body.classList.remove("dark");const t=parseFloat(getComputedStyle(document.body).getPropertyValue("transition-duration"))*1e3;setTimeout(()=>{e.classList.add("faded-edges")},t)}function ae(e){localStorage.setItem("dark-color-scheme",e.checked)}function ie(){oe(),q(),j.addEventListener("change",re),setTimeout(()=>{se.classList.add("animated")},100)}function re(e){q(),ae(e.currentTarget)}ie();const ce="/about/assets/barber-14d0dc74.webp",ne="/about/assets/barbershop-46b42bde.webp",le="/about/assets/bookshelf-2b821771.webp",de="/about/assets/bookshelf_dark-3d63f722.webp",pe="/about/assets/britlex-db156075.webp",me="/about/assets/car-rental-b0bc9ef3.webp",ue="/about/assets/drinkmaster-4aa67b19.webp",be="/about/assets/fighters-74ec193d.webp",ge="/about/assets/icecream-3016d4ec.webp",he="/about/assets/movies-201d44f7.webp",_e="/about/assets/phonebook-417fc357.webp",fe="/about/assets/pixabay-e28e8c3a.webp",ve="/about/assets/webstudio-9621d582.webp",ye="/about/assets/zenbit-208b3aad.webp",ke="/about/assets/barber-acd8c8c4.webp",we="/about/assets/barbershop-fd8a4289.webp",je="/about/assets/bookshelf-dd6d5501.webp",Se="/about/assets/bookshelf_dark-6db58418.webp",xe="/about/assets/britlex-9a245dde.webp",Le="/about/assets/car-rental-f4b8228a.webp",Te="/about/assets/drinkmaster-cbadb30c.webp",$e="/about/assets/fighters-26e8c59f.webp",Fe="/about/assets/icecream-4b97558d.webp",Pe="/about/assets/movies-c3b76fa2.webp",Re="/about/assets/phonebook-c1615721.webp",He="/about/assets/pixabay-5a7fc132.webp",Ee="/about/assets/webstudio-63580449.webp",Me="/about/assets/zenbit-5942fa3f.webp",qe="/about/assets/barber-8b6e101c.png",Ce="/about/assets/barbershop-8bcd1350.png",Be="/about/assets/bookshelf-49864b6f.png",Ue="/about/assets/bookshelf_dark-db358684.png",Ie="/about/assets/britlex-050895a5.png",Oe="/about/assets/car-rental-b9b4c4bf.png",Ve="/about/assets/drinkmaster-e4b6c12e.png",Ae="/about/assets/fighters-1a1c90b8.png",Ne="/about/assets/icecream-5f5f4caf.png",De="/about/assets/movies-06202e5c.png",Je="/about/assets/phonebook-f79ea4be.png",ze="/about/assets/pixabay-40cedfd9.png",Ke="/about/assets/webstudio-33991215.png",Qe="/about/assets/zenbit-f027c253.png",C=[{id:1,name:"Barber course",link:"https://github.com/dev0652/barber",livePage:"https://barbercourse.kyiv.ua/",thumbFilename:"barber",type:"Commercial project",stack:"Front-end",role:"Team member",customer:"barbercourse.kyiv.ua",description:"A landing page of a barber training course created with vanilla JavaScript. I worked on this project in collaboration with two other developers and a designer.",technologies:["HTML","SaSS","JavaScript","EMailJS","Vite"]},{id:2,name:"Real Estate Deals",link:"https://github.com/dev0652/zenbit-test",livePage:"https://dev0652.github.io/zenbit-test/",technologies:["HTML","SaSS","React","React Router","Redux","Node.js","MongoDB"],thumbFilename:"zenbit",type:"Test",stack:"Front-end, back-end",role:null,customer:"ZenBit Tech",description:"Front-end is a MPA built with React (using Create React App tool) and uses React Router for routing and Redux for state management. It also makes use of a few other libraries like React Helmet, React Icons and Notiflix. Back-end is built with Node.js and MongoDB and is hosted on render.com"},{id:3,name:"Fighters (game)",link:"https://github.com/dev0652/fighters-nodejs",livePage:"https://dev0652.github.io/binary-hw-nodejs/",technologies:["HTML","SaSS","JavaScript","React","Node.js"],thumbFilename:"fighters",type:"Test",stack:"Front-end, back-end",role:null,customer:"Binary Academy",description:"A simple, unanimated fighting game. Front-end was built with React making use of class components"},{id:4,name:"Bookshelf",link:"https://github.com/dev0652/bookshelf",livePage:"https://dev0652.github.io/bookshelf/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"bookshelf_dark",type:"Study team project",stack:"Front-end",role:"Team leader",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:5,name:"Drink Master",link:"https://github.com/PVO-fullstack/drink_master",livePage:"https://pvo-fullstack.github.io/drink_master/",technologies:["React","SaSS"],thumbFilename:"drinkmaster",type:"Study team project",stack:"Front-end",role:"Team member",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:6,name:"Car Rental",link:"https://github.com/dev0652/swift-car-rental",livePage:"https://dev0652.github.io/swift-car-rental/",technologies:["React","Styled components"],thumbFilename:"car-rental",type:"Test",stack:"Front-end",role:null,customer:null,description:"Simple, lightweight and user-friendly car rental website developed as a test assignment for a job interview"},{id:7,name:"Phonebook",link:"https://github.com/dev0652/goit-react-hw-08-phonebook",livePage:"https://dev0652.github.io/goit-react-hw-08-phonebook",technologies:["React","Styled components"],thumbFilename:"phonebook",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:8,name:"Movie database",link:"https://github.com/dev0652/goit-react-hw-05-movies",livePage:"https://dev0652.github.io/goit-react-hw-05-movies",technologies:["React"],thumbFilename:"movies",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:9,name:"Pixabay Image Search",link:"https://github.com/dev0652/pixabay-search",livePage:"https://dev0652.github.io/pixabay-search/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"pixabay",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:10,name:"Ice Cream",link:"https://github.com/dev0652/icecream",livePage:"https://dev0652.github.io/icecream/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"icecream",type:"Study team project",stack:"Front-end",role:"Team leader",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:11,name:"Web studio",link:"https://github.com/dev0652/webstudio",livePage:"https://dev0652.github.io/webstudio/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"webstudio",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:12,name:"Barbershop",link:"https://github.com/dev0652/barbershop",livePage:"https://dev0652.github.io/barbershop/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"barbershop",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:13,name:"Britlex school",link:"https://github.com/dev0652/britlex",livePage:"https://dev0652.github.io/britlex/",technologies:["HTML","SaSS"],thumbFilename:"britlex",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"}];function Ge(e){const{name:t,type:s,link:a,livePage:o,thumbFilename:i,description:r,stack:c,role:n,customer:d,technologies:p}=e,_=F(`/large/${i}.png`),f=F(`/large/${i}.png`),u="Image pending",v=P("400x250",u),b=P("800x500",u),g=i?_:v,y=i?f:b,m=p.join(", ");return`
      <article>
        <h2 class="modal-title">${t}</h2>

        <div class="modal-content-wrapper">

          <div class="modal-heading">
            <div class="heading-columns-wrapper">
              <div class="heading-column">
                <p class="type"><span class="field-type">Project type:</span> ${s}</p>

                <p class="stack"><span class="field-type">Stack:</span> ${c}</p>
              </div>

              <div class="heading-column">
                <p class="role"
                style="${!n&&"display: none"}">
                  <span class="field-type">Role:</span> ${n}
                </p>

                <p class="customer"
                style="${!d&&"display: none"}">
                  <span class="field-type">Customer:</span> ${d}
                </p>
              </div>
            </div>

            <p class="technologies">${m}</p>
          </div>

          <div class="modal-image-block">
            <img
              class="project-card-image"
              srcset="${g} 1x, ${y} 2x"
              src="${g}"
              alt="${t} live page screenshot"
            />
          </div>

          <div class="modal-description">
            <p class="project-description">${r}</p>
          </div>
          
          <div class="modal-project-links-wrapper">
            <a
              class="modal-project-link"
              href="${a}"
              target="_blank"
              rel="noopener noreferrer"
              >GitHub</a
            >

            <a
              class="modal-project-link"
              href="${o}"
              target="_blank"
              rel="noopener noreferrer"
              >Live page</a
            >
          </div>

        </div>
      </article>
  `}function F(e){const t=`/images/projects${e}`;return new URL(t,import.meta.url).href}function P(e,t=null){let s="";t&&(s=`?text=${t.split(" ").join("+")}`);const a="https://placehold.co/",o=e+s;return a+o}const S=document.querySelector("[data-pop-up]"),B=document.querySelector("[data-modal-close]"),We=document.querySelector(".modal-content-injection-target");function Ze(e){const t=C.find(s=>s.id===+e);We.innerHTML=Ge(t),document.body.classList.add("modal-open"),S.classList.remove("is-hidden"),B.addEventListener("click",U),document.addEventListener("keydown",O),document.addEventListener("click",I)}function x(){B.removeEventListener("click",U),document.removeEventListener("click",I),document.removeEventListener("keydown",O),S.classList.add("is-hidden"),document.body.classList.remove("modal-open")}function U(e){x()}function I(e){e.target==S&&x()}function O(e){e.key==="Escape"&&x()}const Ye=e=>{const{id:t,name:s,type:a,link:o,livePage:i,thumbFilename:r,description:c,stack:n,role:d,customer:p,technologies:_}=e,f=new URL(Object.assign({"/images/projects/thumbs/400x250/barber.webp":ce,"/images/projects/thumbs/400x250/barbershop.webp":ne,"/images/projects/thumbs/400x250/bookshelf.webp":le,"/images/projects/thumbs/400x250/bookshelf_dark.webp":de,"/images/projects/thumbs/400x250/britlex.webp":pe,"/images/projects/thumbs/400x250/car-rental.webp":me,"/images/projects/thumbs/400x250/drinkmaster.webp":ue,"/images/projects/thumbs/400x250/fighters.webp":be,"/images/projects/thumbs/400x250/icecream.webp":ge,"/images/projects/thumbs/400x250/movies.webp":he,"/images/projects/thumbs/400x250/phonebook.webp":_e,"/images/projects/thumbs/400x250/pixabay.webp":fe,"/images/projects/thumbs/400x250/webstudio.webp":ve,"/images/projects/thumbs/400x250/zenbit.webp":ye})[`/images/projects/thumbs/400x250/${r}.webp`],self.location).href,u=new URL(Object.assign({"/images/projects/thumbs/800x500/barber.webp":ke,"/images/projects/thumbs/800x500/barbershop.webp":we,"/images/projects/thumbs/800x500/bookshelf.webp":je,"/images/projects/thumbs/800x500/bookshelf_dark.webp":Se,"/images/projects/thumbs/800x500/britlex.webp":xe,"/images/projects/thumbs/800x500/car-rental.webp":Le,"/images/projects/thumbs/800x500/drinkmaster.webp":Te,"/images/projects/thumbs/800x500/fighters.webp":$e,"/images/projects/thumbs/800x500/icecream.webp":Fe,"/images/projects/thumbs/800x500/movies.webp":Pe,"/images/projects/thumbs/800x500/phonebook.webp":Re,"/images/projects/thumbs/800x500/pixabay.webp":He,"/images/projects/thumbs/800x500/webstudio.webp":Ee,"/images/projects/thumbs/800x500/zenbit.webp":Me})[`/images/projects/thumbs/800x500/${r}.webp`],self.location).href,v=new URL(Object.assign({"/images/projects/large/barber.png":qe,"/images/projects/large/barbershop.png":Ce,"/images/projects/large/bookshelf.png":Be,"/images/projects/large/bookshelf_dark.png":Ue,"/images/projects/large/britlex.png":Ie,"/images/projects/large/car-rental.png":Oe,"/images/projects/large/drinkmaster.png":Ve,"/images/projects/large/fighters.png":Ae,"/images/projects/large/icecream.png":Ne,"/images/projects/large/movies.png":De,"/images/projects/large/phonebook.png":Je,"/images/projects/large/pixabay.png":ze,"/images/projects/large/webstudio.png":Ke,"/images/projects/large/zenbit.png":Qe})[`/images/projects/large/${r}.png`],self.location).href,b="Image pending",g=R("400x250",b),y=R("800x500",b),m=r?f:g,T=r?u:y,$=_.join(", ");return`
    <li class="project-card">
      <article class="fade-in">
        <h2 class="card-title collapsible-toggle" data-id="${s}">${s}</h2>

        <div class="list-version collapsible">
          <div class="list-version-wrapper">
            <div class="list-version-image-block">
              <img
                class="project-card-image"
                srcset="${m} 1x, ${T} 2x"
                src="${v}"
                alt="${s} live page screenshot"
              />
            </div>

            <div class="project-links-wrapper">
              <a
                class="project-link"
                href="${o}"
                target="_blank"
                rel="noopener noreferrer"
                >GitHub</a
              >

              <a
                class="project-link"
                href="${i}"
                target="_blank"
                rel="noopener noreferrer"
                >Live page</a
              >
            </div>

            <div class="list-version-heading">
              <div class="heading-items-wrapper">
                  <p class="type"><span class="field-type">Type:</span> ${a}</p>

                  <p class="customer"
                  style="${!p&&"display: none"}">
                    <span class="field-type">Customer:</span> ${p}
                  </p>

                  <p class="role"
                  style="${!d&&"display: none"}">
                    <span class="field-type">Role:</span> ${d}
                  </p>

                  <p class="stack"><span class="field-type">Stack:</span> ${n}</p>
              </div>

              <p class="technologies">${$}</p>
            </div>

            <div class="list-version-description">
              <p class="project-description">${c}</p>
            </div>  

          </div>
        </div>

        <div class="gallery-version">
          <a
            class="project-card-link flip-card"
            href="#"
            data-id="${t}"
          >
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  class="project-card-image"
                  srcset="${m} 1x, ${T} 2x"
                  src="${m}"
                  alt="${s} live page screenshot"
                  width="400"
                  height="250"
                  loading="lazy"
                />
              </div>

              <div class="flip-card-back">
                <h3 class="flip-card-project-name">${s}</h3>

                <div class="flip-card-meta-wrapper">
                  <div>
                    <p class="type"><span class="field-type">Type:</span> ${a}</p>

                    <p class="stack"><span class="field-type">Stack:</span> ${n}</p>

                    <p class="technologies"><span class="field-type">Technologies:</span> ${$}</p>
                  </div>

                  <p class="flip-card-prompt-to-click">Click to learn more</p> 
                </div>

                             
              </div>
            </div>
  </a>

        </div>
      </article>
    </li>
  `};function R(e,t=null){let s="";t&&(s=`?text=${t.split(" ").join("+")}`);const a="https://placehold.co/",o=e+s;return a+o}const Xe=e=>`
  <ul class="project-card-list list-view">
    ${e.map(t=>Ye(t)).join("")}
  </ul>`,et=Xe(C),tt=document.querySelector("#gallery");tt.innerHTML=et;const V=document.querySelector(".projects-view-switch"),k=document.querySelector(".project-card-list");V.addEventListener("click",st);k.addEventListener("click",ot);function st(){k.classList.toggle("gallery-view");const e=k.classList.contains("gallery-view");V.innerHTML=`View as ${e?"list":"tiles"}`}function ot(e){if(e.preventDefault(),!e.target.matches(".project-card-link"))return;const t=e.target.dataset.id;Ze(t)}const at=e=>{if(!e.target.classList.contains("collapsible-toggle"))return;const t=document.querySelectorAll(".project-card"),s=Array.from(t),a=s.find(c=>c.querySelector(".collapsible-toggle").dataset.id===e.target.dataset.id),o=a.querySelector(".collapsible-toggle"),i=a.querySelector(".collapsible"),r=s.find(c=>c===a?!1:c.querySelector(".collapsible-toggle").classList.contains("content-expanded"));if(r){const c=r.querySelector(".collapsible");r.querySelector(".collapsible-toggle").classList.remove("content-expanded"),c.style.maxHeight=null}o.classList.toggle("content-expanded"),i.style.maxHeight?(i.style.maxHeight=null,i.classList.remove("animated")):(i.style.maxHeight=i.scrollHeight+"px",i.classList.add("animated"))},it=document.querySelector(".gallery");it.addEventListener("click",at);const l={origin:"https://api.emailjs.com",blockHeadless:!1},L=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},rt=(e,t="https://api.emailjs.com")=>{if(!e)return;const s=L(e);l.publicKey=s.publicKey,l.blockHeadless=s.blockHeadless,l.blockList=s.blockList,l.limitRate=s.limitRate,l.origin=s.origin||t};class h{constructor(t=0,s="Network Error"){this.status=t,this.text=s}}const A=async(e,t,s={})=>{const a=await fetch(l.origin+e,{method:"POST",headers:s,body:t}),o=await a.text(),i=new h(a.status,o);if(a.ok)return i;throw i},N=(e,t,s)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},ct=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},D=e=>e.webdriver||!e.languages||e.languages.length===0,J=()=>new h(451,"Unavailable For Headless Browser"),nt=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},lt=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},dt=(e,t)=>e instanceof FormData?e.get(t):e[t],z=(e,t)=>{if(lt(e))return!1;nt(e.list,e.watchVariable);const s=dt(t,e.watchVariable);return typeof s!="string"?!1:e.list.includes(s)},K=()=>new h(403,"Forbidden"),pt=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},mt=(e,t,s)=>{const a=Number(s.getItem(e)||0);return t-Date.now()+a},H=(e,t,s)=>{setTimeout(()=>{s.removeItem(e)},t)},Q=(e,t,s)=>{if(!s.throttle)return!1;pt(s.throttle,s.id);const a=s.id||t,o=mt(a,s.throttle,e);return o>0?(H(a,o,e),!0):(e.setItem(a,Date.now().toString()),H(a,s.throttle,e),!1)},G=()=>new h(429,"Too Many Requests"),ut=(e,t,s,a)=>{const o=L(a),i=o.publicKey||l.publicKey,r=o.blockHeadless||l.blockHeadless,c={...l.blockList,...o.blockList},n={...l.limitRate,...o.limitRate};return r&&D(navigator)?Promise.reject(J()):(N(i,e,t),ct(s),s&&z(c,s)?Promise.reject(K()):Q(localStorage,location.pathname,n)?Promise.reject(G()):A("/api/v1.0/email/send",JSON.stringify({lib_version:"4.1.0",user_id:i,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"}))},bt=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},gt=e=>typeof e=="string"?document.querySelector(e):e,ht=(e,t,s,a)=>{const o=L(a),i=o.publicKey||l.publicKey,r=o.blockHeadless||l.blockHeadless,c={...l.blockList,...o.blockList},n={...l.limitRate,...o.limitRate};if(r&&D(navigator))return Promise.reject(J());const d=gt(s);N(i,e,t),bt(d);const p=new FormData(d);return z(c,p)?Promise.reject(K()):Q(localStorage,location.pathname,n)?Promise.reject(G()):(p.append("lib_version","4.1.0"),p.append("service_id",e),p.append("template_id",t),p.append("user_id",i),A("/api/v1.0/email/send-form",p))},W={init:rt,send:ut,sendForm:ht};W.init("E8FZeR5jYUP13UDEy");const _t=document.getElementById("contact-form");_t.addEventListener("submit",ft);function ft(e){e.preventDefault(),W.sendForm("default_service","contact_form","#contact-form").then(function(t){alert("Success")},function(t){alert("Error")}).finally(function(){document.getElementById("contact-form").reset()})}
