(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();const C=function(e){const t=`#${e}`,i=`#${e}-title`,a=document.querySelector(t),s=a.querySelector(i),o=a.querySelector(".section-content"),c=s.innerHTML;s.innerHTML="";const l=100;o.style.animationDelay=l*c.length;let n=0;function r(){n<c.length&&(s.innerHTML+=c.charAt(n),n++,setTimeout(r,l))}r()};C("about");const A=document.querySelector(".header"),M=document.querySelectorAll(".header-nav-link"),N=document.querySelectorAll(".section"),J=document.querySelector("main"),{height:Q}=A.getBoundingClientRect(),S=`${Q}px`;document.body.style.paddingTop=S;document.documentElement.style.scrollPaddingTop=S;J.style.setProperty("--blurOffset",S);M.forEach(e=>{e.addEventListener("click",O)});function O(e){e.preventDefault();const{id:t}=e.target.dataset;N.forEach(i=>{const a=i.id===t;i.style.display=a?"block":"none",a&&C(t)}),M.forEach(i=>{i.classList.remove("active")}),e.target.classList.add("active")}const L=document.querySelector("#color-scheme-switcher-checkbox"),D=document.querySelector(".color-scheme-switcher-slider");function _(){const e=localStorage.getItem("dark-color-scheme");e&&e!=="false"&&(L.checked=!0)}function q(){const e=document.querySelector("main");e.classList.remove("faded-edges"),L.checked?document.body.classList.add("dark"):document.body.classList.remove("dark");const t=parseFloat(getComputedStyle(document.body).getPropertyValue("transition-duration"))*1e3;setTimeout(()=>{e.classList.add("faded-edges")},t)}function V(e){localStorage.setItem("dark-color-scheme",e.checked)}function z(){_(),q(),L.addEventListener("change",G),setTimeout(()=>{D.classList.add("animated")},100)}function G(e){q(),V(e.currentTarget)}z();const R=[{id:1,name:"Barber course",link:"https://github.com/dev0652/barber",livePage:"https://barbercourse.kyiv.ua/",thumbFilename:"barber",type:"Commercial project",stack:"Front-end",role:"Team member",customer:"barbercourse.kyiv.ua",description:"A landing page of a barber training course created with vanilla JavaScript. I worked on this project in collaboration with two other developers and a designer.",technologies:["HTML","SaSS","JavaScript","EMailJS","Vite"]},{id:2,name:"Real Estate Deals",link:"https://github.com/dev0652/zenbit-test",livePage:"https://dev0652.github.io/zenbit-test/",technologies:["HTML","SaSS","React","React Router","Redux","Node.js","MongoDB"],thumbFilename:"zenbit",type:"Test",stack:"Front-end, back-end",role:null,customer:"ZenBit Tech",description:"Front-end is a MPA built with React (using Create React App tool) and uses React Router for routing and Redux for state management. It also makes use of a few other libraries like React Helmet, React Icons and Notiflix. Back-end is built with Node.js and MongoDB and is hosted on render.com"},{id:3,name:"Fighters (game)",link:"https://github.com/dev0652/fighters-nodejs",livePage:"https://dev0652.github.io/binary-hw-nodejs/",technologies:["HTML","SaSS","JavaScript","React","Node.js"],thumbFilename:"fighters",type:"Test",stack:"Front-end, back-end",role:null,customer:"Binary Academy",description:"A simple, unanimated fighting game. Front-end was built with React making use of class components"},{id:4,name:"Bookshelf",link:"https://github.com/dev0652/bookshelf",livePage:"https://dev0652.github.io/bookshelf/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"bookshelf_dark",type:"Study team project",stack:"Front-end",role:"Team leader",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:5,name:"Drink Master",link:"https://github.com/PVO-fullstack/drink_master",livePage:"https://pvo-fullstack.github.io/drink_master/",technologies:["React","SaSS"],thumbFilename:"drinkmaster",type:"Study team project",stack:"Front-end",role:"Team member",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:6,name:"Car Rental",link:"https://github.com/dev0652/swift-car-rental",livePage:"https://dev0652.github.io/swift-car-rental/",technologies:["React","Styled components"],thumbFilename:"car-rental",type:"Test",stack:"Front-end",role:null,customer:null,description:"Simple, lightweight and user-friendly car rental website developed as a test assignment for a job interview"},{id:7,name:"Phonebook",link:"https://github.com/dev0652/goit-react-hw-08-phonebook",livePage:"https://dev0652.github.io/goit-react-hw-08-phonebook",technologies:["React","Styled components"],thumbFilename:"phonebook",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:8,name:"Movie database",link:"https://github.com/dev0652/goit-react-hw-05-movies",livePage:"https://dev0652.github.io/goit-react-hw-05-movies",technologies:["React"],thumbFilename:"movies",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:9,name:"Pixabay Image Search",link:"https://github.com/dev0652/pixabay-search",livePage:"https://dev0652.github.io/pixabay-search/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"pixabay",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:10,name:"Ice Cream",link:"https://github.com/dev0652/icecream",livePage:"https://dev0652.github.io/icecream/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"icecream",type:"Study team project",stack:"Front-end",role:"Team leader",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:11,name:"Web studio",link:"https://github.com/dev0652/webstudio",livePage:"https://dev0652.github.io/webstudio/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"webstudio",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:12,name:"Barbershop",link:"https://github.com/dev0652/barbershop",livePage:"https://dev0652.github.io/barbershop/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"barbershop",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:13,name:"Britlex school",link:"https://github.com/dev0652/britlex",livePage:"https://dev0652.github.io/britlex/",technologies:["HTML","SaSS"],thumbFilename:"britlex",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"}];function W(e){const{name:t,type:i,link:a,livePage:s,thumbFilename:o,description:c,stack:l,role:n,customer:r,technologies:p}=e,g=T(`/large/${o}.png`),b=T(`/large/${o}.png`),u="Image pending",v=P("400x250",u),m=P("800x500",u),h=o?g:v,y=o?b:m,d=p.join(", ");return`
      <article>
        <h2 class="modal-title">${t}</h2>

        <div class="modal-content-wrapper">

          <div class="modal-heading">
            <div class="heading-columns-wrapper">
              <div class="heading-column">
                <p class="type"><span class="field-type">Project type:</span> ${i}</p>

                <p class="stack"><span class="field-type">Stack:</span> ${l}</p>
              </div>

              <div class="heading-column">
                <p class="role"
                style="${!n&&"display: none"}">
                  <span class="field-type">Role:</span> ${n}
                </p>

                <p class="customer"
                style="${!r&&"display: none"}">
                  <span class="field-type">Customer:</span> ${r}
                </p>
              </div>
            </div>

            <p class="technologies">${d}</p>
          </div>

          <div class="modal-image-block">
            <img
              class="project-card-image"
              srcset="${h} 1x, ${y} 2x"
              src="${h}"
              alt="${t} live page screenshot"
            />
          </div>

          <div class="modal-description">
            <p class="project-description">${c}</p>
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
              href="${s}"
              target="_blank"
              rel="noopener noreferrer"
              >Live page</a
            >
          </div>

        </div>
      </article>
  `}function T(e){const t=`/images/projects${e}`;return new URL(t,import.meta.url).href}function P(e,t=null){let i="";t&&(i=`?text=${t.split(" ").join("+")}`);const a="https://placehold.co/",s=e+i;return a+s}const $=document.querySelector("[data-pop-up]"),E=document.querySelector("[data-modal-close]"),K=document.querySelector(".modal-content-injection-target");function Z(e){const t=R.find(i=>i.id===+e);K.innerHTML=W(t),document.body.classList.add("modal-open"),$.classList.remove("is-hidden"),E.addEventListener("click",H),document.addEventListener("keydown",U),document.addEventListener("click",I)}function w(){E.removeEventListener("click",H),document.removeEventListener("click",I),document.removeEventListener("keydown",U),$.classList.add("is-hidden"),document.body.classList.remove("modal-open")}function H(e){w()}function I(e){e.target==$&&w()}function U(e){e.key==="Escape"&&w()}const X=e=>{const{id:t,name:i,type:a,link:s,livePage:o,thumbFilename:c,description:l,stack:n,role:r,customer:p,technologies:g}=e,b=f(`/thumbs/400x250/${c}.webp`),u=f(`/thumbs/800x500/${c}.webp`),v=f(`/large/${c}.png`),m="Image pending",h=F("400x250",m),y=F("800x500",m),d=c?b:h,x=c?u:y,j=g.join(", ");return`
    <li class="project-card">
      <article class="fade-in">
        <h2 class="card-title collapsible-toggle" data-id="${i}">${i}</h2>

        <div class="list-version collapsible">
          <div class="list-version-wrapper">
            <div class="list-version-image-block">
              <img
                class="project-card-image"
                srcset="${d} 1x, ${x} 2x"
                src="${v}"
                alt="${i} live page screenshot"
              />
            </div>

            <div class="project-links-wrapper">
              <a
                class="project-link"
                href="${s}"
                target="_blank"
                rel="noopener noreferrer"
                >GitHub</a
              >

              <a
                class="project-link"
                href="${o}"
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
                  style="${!r&&"display: none"}">
                    <span class="field-type">Role:</span> ${r}
                  </p>

                  <p class="stack"><span class="field-type">Stack:</span> ${n}</p>
              </div>

              <p class="technologies">${j}</p>
            </div>

            <div class="list-version-description">
              <p class="project-description">${l}</p>
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
                  srcset="${d} 1x, ${x} 2x"
                  src="${d}"
                  alt="${i} live page screenshot"
                  width="400"
                  height="250"
                  loading="lazy"
                />
              </div>

              <div class="flip-card-back">
                <h3 class="flip-card-project-name">${i}</h3>

                <div class="flip-card-meta-wrapper">
                  <div>
                    <p class="type"><span class="field-type">Type:</span> ${a}</p>

                    <p class="stack"><span class="field-type">Stack:</span> ${n}</p>

                    <p class="technologies"><span class="field-type">Technologies:</span> ${j}</p>
                  </div>

                  <p class="flip-card-prompt-to-click">Click to learn more</p> 
                </div>

                             
              </div>
            </div>
  </a>

        </div>
      </article>
    </li>
  `};function f(e){const t=`/images/projects${e}`;return new URL(t,import.meta.url).href}function F(e,t=null){let i="";t&&(i=`?text=${t.split(" ").join("+")}`);const a="https://placehold.co/",s=e+i;return a+s}const Y=e=>`
  <ul class="project-card-list list-view">
    ${e.map(t=>X(t)).join("")}
  </ul>`,ee=Y(R),te=document.querySelector("#gallery");te.innerHTML=ee;const B=document.querySelector(".projects-view-switch"),k=document.querySelector(".project-card-list");B.addEventListener("click",se);k.addEventListener("click",ie);function se(){k.classList.toggle("gallery-view");const e=k.classList.contains("gallery-view");B.innerHTML=`View as ${e?"list":"tiles"}`}function ie(e){if(e.preventDefault(),!e.target.matches(".project-card-link"))return;const t=e.target.dataset.id;Z(t)}const oe=e=>{if(!e.target.classList.contains("collapsible-toggle"))return;const t=document.querySelectorAll(".project-card"),i=Array.from(t),a=i.find(l=>l.querySelector(".collapsible-toggle").dataset.id===e.target.dataset.id),s=a.querySelector(".collapsible-toggle"),o=a.querySelector(".collapsible"),c=i.find(l=>l===a?!1:l.querySelector(".collapsible-toggle").classList.contains("content-expanded"));if(c){const l=c.querySelector(".collapsible");c.querySelector(".collapsible-toggle").classList.remove("content-expanded"),l.style.maxHeight=null}s.classList.toggle("content-expanded"),o.style.maxHeight?(o.style.maxHeight=null,o.classList.remove("animated")):(o.style.maxHeight=o.scrollHeight+"px",o.classList.add("animated"))},ae=document.querySelector(".gallery");ae.addEventListener("click",oe);
