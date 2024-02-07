(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const q=function(e){const t=`#${e}`,s=`#${e}-title`,o=document.querySelector(t),i=o.querySelector(s),a=o.querySelector(".section-content"),r=i.innerHTML;i.innerHTML="";const n=100;a.style.animationDelay=n*r.length;let c=0;function d(){c<r.length&&(i.innerHTML+=r.charAt(c),c++,setTimeout(d,n))}d()};q("about");const Y=document.querySelector(".header"),C=document.querySelectorAll(".header-nav-link"),X=document.querySelectorAll(".section"),ee=document.querySelector("main"),{height:te}=Y.getBoundingClientRect(),w=`${te}px`;document.body.style.paddingTop=w;document.documentElement.style.scrollPaddingTop=w;ee.style.setProperty("--blurOffset",w);C.forEach(e=>{e.addEventListener("click",se)});function se(e){e.preventDefault();const{id:t}=e.target.dataset;X.forEach(s=>{const o=s.id===t;s.style.display=o?"block":"none",o&&q(t)}),C.forEach(s=>{s.classList.remove("active")}),e.target.classList.add("active")}const j=document.querySelector("#color-scheme-switcher-checkbox"),ie=document.querySelector(".color-scheme-switcher-slider");function oe(){const e=localStorage.getItem("dark-color-scheme");e&&e!=="false"&&(j.checked=!0)}function B(){const e=document.querySelector("main");e.classList.remove("faded-edges"),j.checked?document.body.classList.add("dark"):document.body.classList.remove("dark");const t=parseFloat(getComputedStyle(document.body).getPropertyValue("transition-duration"))*1e3;setTimeout(()=>{e.classList.add("faded-edges")},t)}function ae(e){localStorage.setItem("dark-color-scheme",e.checked)}function re(){oe(),B(),j.addEventListener("change",ne),setTimeout(()=>{ie.classList.add("animated")},100)}function ne(e){B(),ae(e.currentTarget)}re();const I=[{id:1,name:"Barber course",link:"https://github.com/dev0652/barber",livePage:"https://barbercourse.kyiv.ua/",thumbFilename:"barber",type:"Commercial project",stack:"Front-end",role:"Team member",customer:"barbercourse.kyiv.ua",description:"A landing page of a barber training course created with vanilla JavaScript. I worked on this project in collaboration with two other developers and a designer.",technologies:["HTML","SaSS","JavaScript","EMailJS","Vite"]},{id:2,name:"Real Estate Deals",link:"https://github.com/dev0652/zenbit-test",livePage:"https://dev0652.github.io/zenbit-test/",technologies:["HTML","SaSS","React","React Router","Redux","Node.js","MongoDB"],thumbFilename:"zenbit",type:"Test",stack:"Front-end, back-end",role:null,customer:"ZenBit Tech",description:"Front-end is a MPA built with React (using Create React App tool) and uses React Router for routing and Redux for state management. It also makes use of a few other libraries like React Helmet, React Icons and Notiflix. Back-end is built with Node.js and MongoDB and is hosted on render.com"},{id:3,name:"Fighters (game)",link:"https://github.com/dev0652/fighters-nodejs",livePage:"https://dev0652.github.io/binary-hw-nodejs/",technologies:["HTML","SaSS","JavaScript","React","Node.js"],thumbFilename:"fighters",type:"Test",stack:"Front-end, back-end",role:null,customer:"Binary Academy",description:"A simple, unanimated fighting game. Front-end was built with React making use of class components"},{id:4,name:"Bookshelf",link:"https://github.com/dev0652/bookshelf",livePage:"https://dev0652.github.io/bookshelf/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"bookshelf_dark",type:"Study team project",stack:"Front-end",role:"Team leader",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:5,name:"Drink Master",link:"https://github.com/PVO-fullstack/drink_master",livePage:"https://pvo-fullstack.github.io/drink_master/",technologies:["React","SaSS"],thumbFilename:"drinkmaster",type:"Study team project",stack:"Front-end",role:"Team member",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:6,name:"Car Rental",link:"https://github.com/dev0652/swift-car-rental",livePage:"https://dev0652.github.io/swift-car-rental/",technologies:["React","Styled components"],thumbFilename:"car-rental",type:"Test",stack:"Front-end",role:null,customer:null,description:"Simple, lightweight and user-friendly car rental website developed as a test assignment for a job interview"},{id:7,name:"Phonebook",link:"https://github.com/dev0652/goit-react-hw-08-phonebook",livePage:"https://dev0652.github.io/goit-react-hw-08-phonebook",technologies:["React","Styled components"],thumbFilename:"phonebook",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:8,name:"Movie database",link:"https://github.com/dev0652/goit-react-hw-05-movies",livePage:"https://dev0652.github.io/goit-react-hw-05-movies",technologies:["React"],thumbFilename:"movies",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:9,name:"Pixabay Image Search",link:"https://github.com/dev0652/pixabay-search",livePage:"https://dev0652.github.io/pixabay-search/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"pixabay",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:10,name:"Ice Cream",link:"https://github.com/dev0652/icecream",livePage:"https://dev0652.github.io/icecream/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"icecream",type:"Study team project",stack:"Front-end",role:"Team leader",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:11,name:"Web studio",link:"https://github.com/dev0652/webstudio",livePage:"https://dev0652.github.io/webstudio/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"webstudio",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:12,name:"Barbershop",link:"https://github.com/dev0652/barbershop",livePage:"https://dev0652.github.io/barbershop/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"barbershop",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:13,name:"Britlex school",link:"https://github.com/dev0652/britlex",livePage:"https://dev0652.github.io/britlex/",technologies:["HTML","SaSS"],thumbFilename:"britlex",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"}];function ce(e){const{name:t,type:s,link:o,livePage:i,thumbFilename:a,description:r,stack:n,role:c,customer:d,technologies:u}=e,f=R(`/large/${a}.png`),y=R(`/large/${a}.png`),p="Image pending",v=H("400x250",p),h=H("800x500",p),g=a?f:v,k=a?y:h,m=u.join(", ");return`
      <article>
        <h2 class="modal-title">${t}</h2>

        <div class="modal-content-wrapper">

          <div class="modal-heading">
            <div class="heading-columns-wrapper">
              <div class="heading-column">
                <p class="type"><span class="field-type">Project type:</span> ${s}</p>

                <p class="stack"><span class="field-type">Stack:</span> ${n}</p>
              </div>

              <div class="heading-column">
                <p class="role"
                style="${!c&&"display: none"}">
                  <span class="field-type">Role:</span> ${c}
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
              srcset="${g} 1x, ${k} 2x"
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
              href="${o}"
              target="_blank"
              rel="noopener noreferrer"
              >GitHub</a
            >

            <a
              class="modal-project-link"
              href="${i}"
              target="_blank"
              rel="noopener noreferrer"
              >Live page</a
            >
          </div>

        </div>
      </article>
  `}function R(e){const t=`/images/projects${e}`;return new URL(t,import.meta.url).href}function H(e,t=null){let s="";t&&(s=`?text=${t.split(" ").join("+")}`);const o="https://placehold.co/",i=e+s;return o+i}const x=document.querySelector("[data-pop-up]"),_=document.querySelector("[data-modal-close]"),le=document.querySelector(".modal-content-injection-target");function de(e){const t=I.find(s=>s.id===+e);le.innerHTML=ce(t),document.body.classList.add("modal-open"),x.classList.remove("is-hidden"),_.addEventListener("click",U),document.addEventListener("keydown",A),document.addEventListener("click",V)}function T(){_.removeEventListener("click",U),document.removeEventListener("click",V),document.removeEventListener("keydown",A),x.classList.add("is-hidden"),document.body.classList.remove("modal-open")}function U(e){T()}function V(e){e.target==x&&T()}function A(e){e.key==="Escape"&&T()}const ue=e=>{const{id:t,name:s,type:o,link:i,livePage:a,thumbFilename:r,description:n,stack:c,role:d,customer:u,technologies:f}=e,y=S(`/images/projects/thumbs/400x250/${r}.webp`),p=S(`/images/projects/thumbs/800x500/${r}.webp`),v=S(`/images/projects/large/${r}.png`),h="Image pending",g=E("400x250",h),k=E("800x500",h),m=r?y:g,F=r?p:k,P=f.join(", ");return`
    <li class="project-card">
      <article class="fade-in">
        <h2 class="card-title collapsible-toggle" data-id="${s}">${s}</h2>

        <div class="list-version collapsible">
          <div class="list-version-wrapper">
            <div class="list-version-image-block">
              <img
                class="project-card-image"
                srcset="${m} 1x, ${F} 2x"
                src="${v}"
                alt="${s} live page screenshot"
              />
            </div>

            <div class="project-links-wrapper">
              <a
                class="project-link"
                href="${i}"
                target="_blank"
                rel="noopener noreferrer"
                >GitHub</a
              >

              <a
                class="project-link"
                href="${a}"
                target="_blank"
                rel="noopener noreferrer"
                >Live page</a
              >
            </div>

            <div class="list-version-heading">
              <div class="heading-items-wrapper">
                  <p class="type"><span class="field-type">Type:</span> ${o}</p>

                  <p class="customer"
                  style="${!u&&"display: none"}">
                    <span class="field-type">Customer:</span> ${u}
                  </p>

                  <p class="role"
                  style="${!d&&"display: none"}">
                    <span class="field-type">Role:</span> ${d}
                  </p>

                  <p class="stack"><span class="field-type">Stack:</span> ${c}</p>
              </div>

              <p class="technologies">${P}</p>
            </div>

            <div class="list-version-description">
              <p class="project-description">${n}</p>
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
                  srcset="${m} 1x, ${F} 2x"
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
                    <p class="type"><span class="field-type">Type:</span> ${o}</p>

                    <p class="stack"><span class="field-type">Stack:</span> ${c}</p>

                    <p class="technologies"><span class="field-type">Technologies:</span> ${P}</p>
                  </div>

                  <p class="flip-card-prompt-to-click">Click to learn more</p> 
                </div>

                             
              </div>
            </div>
  </a>

        </div>
      </article>
    </li>
  `};function S(e){return new URL(e,import.meta.url).href}function E(e,t=null){let s="";t&&(s=`?text=${t.split(" ").join("+")}`);const o="https://placehold.co/",i=e+s;return o+i}const me=e=>`
  <ul class="project-card-list list-view">
    ${e.map(t=>ue(t)).join("")}
  </ul>`,pe=me(I),he=document.querySelector("#gallery");he.innerHTML=pe;const N=document.querySelector(".projects-view-switch"),L=document.querySelector(".project-card-list");N.addEventListener("click",ge);L.addEventListener("click",be);function ge(){L.classList.toggle("gallery-view");const e=L.classList.contains("gallery-view");N.innerHTML=`View as ${e?"list":"tiles"}`}function be(e){if(e.preventDefault(),!e.target.matches(".project-card-link"))return;const t=e.target.dataset.id;de(t)}const fe=e=>{if(!e.target.classList.contains("collapsible-toggle"))return;const t=document.querySelectorAll(".project-card"),s=Array.from(t),o=s.find(n=>n.querySelector(".collapsible-toggle").dataset.id===e.target.dataset.id),i=o.querySelector(".collapsible-toggle"),a=o.querySelector(".collapsible"),r=s.find(n=>n===o?!1:n.querySelector(".collapsible-toggle").classList.contains("content-expanded"));if(r){const n=r.querySelector(".collapsible");r.querySelector(".collapsible-toggle").classList.remove("content-expanded"),n.style.maxHeight=null}i.classList.toggle("content-expanded"),a.style.maxHeight?(a.style.maxHeight=null,a.classList.remove("animated")):(a.style.maxHeight=a.scrollHeight+"px",a.classList.add("animated"))},ye=document.querySelector(".gallery");ye.addEventListener("click",fe);const l={origin:"https://api.emailjs.com",blockHeadless:!1},$=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},ve=(e,t="https://api.emailjs.com")=>{if(!e)return;const s=$(e);l.publicKey=s.publicKey,l.blockHeadless=s.blockHeadless,l.blockList=s.blockList,l.limitRate=s.limitRate,l.origin=s.origin||t};class b{constructor(t=0,s="Network Error"){this.status=t,this.text=s}}const O=async(e,t,s={})=>{const o=await fetch(l.origin+e,{method:"POST",headers:s,body:t}),i=await o.text(),a=new b(o.status,i);if(o.ok)return a;throw a},D=(e,t,s)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},ke=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},J=e=>e.webdriver||!e.languages||e.languages.length===0,K=()=>new b(451,"Unavailable For Headless Browser"),Se=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},Le=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},we=(e,t)=>e instanceof FormData?e.get(t):e[t],Q=(e,t)=>{if(Le(e))return!1;Se(e.list,e.watchVariable);const s=we(t,e.watchVariable);return typeof s!="string"?!1:e.list.includes(s)},z=()=>new b(403,"Forbidden"),je=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},xe=(e,t,s)=>{const o=Number(s.getItem(e)||0);return t-Date.now()+o},M=(e,t,s)=>{setTimeout(()=>{s.removeItem(e)},t)},G=(e,t,s)=>{if(!s.throttle)return!1;je(s.throttle,s.id);const o=s.id||t,i=xe(o,s.throttle,e);return i>0?(M(o,i,e),!0):(e.setItem(o,Date.now().toString()),M(o,s.throttle,e),!1)},W=()=>new b(429,"Too Many Requests"),Te=(e,t,s,o)=>{const i=$(o),a=i.publicKey||l.publicKey,r=i.blockHeadless||l.blockHeadless,n={...l.blockList,...i.blockList},c={...l.limitRate,...i.limitRate};return r&&J(navigator)?Promise.reject(K()):(D(a,e,t),ke(s),s&&Q(n,s)?Promise.reject(z()):G(localStorage,location.pathname,c)?Promise.reject(W()):O("/api/v1.0/email/send",JSON.stringify({lib_version:"4.1.0",user_id:a,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"}))},$e=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Fe=e=>typeof e=="string"?document.querySelector(e):e,Pe=(e,t,s,o)=>{const i=$(o),a=i.publicKey||l.publicKey,r=i.blockHeadless||l.blockHeadless,n={...l.blockList,...i.blockList},c={...l.limitRate,...i.limitRate};if(r&&J(navigator))return Promise.reject(K());const d=Fe(s);D(a,e,t),$e(d);const u=new FormData(d);return Q(n,u)?Promise.reject(z()):G(localStorage,location.pathname,c)?Promise.reject(W()):(u.append("lib_version","4.1.0"),u.append("service_id",e),u.append("template_id",t),u.append("user_id",a),O("/api/v1.0/email/send-form",u))},Z={init:ve,send:Te,sendForm:Pe};Z.init("E8FZeR5jYUP13UDEy");const Re=document.getElementById("contact-form");Re.addEventListener("submit",He);function He(e){e.preventDefault(),Z.sendForm("default_service","contact_form","#contact-form").then(function(t){alert("Success")},function(t){alert("Error")}).finally(function(){document.getElementById("contact-form").reset()})}
