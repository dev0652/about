(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const D=function(e){const t=`#${e}`,s=`#${e}-title`,i=document.querySelector(t),o=i.querySelector(s),a=i.querySelector(".section-content"),r=o.innerHTML;o.innerHTML="";const c=100;a.style.animationDelay=c*r.length;let n=0;function p(){n<r.length&&(o.innerHTML+=r.charAt(n),n++,setTimeout(p,c))}p()};D("about");const le=document.querySelector(".header"),J=document.querySelectorAll(".header-nav-link"),pe=document.querySelectorAll(".section"),de=document.querySelector("main"),{height:me}=le.getBoundingClientRect(),B=`${me}px`;document.body.style.paddingTop=B;document.documentElement.style.scrollPaddingTop=B;de.style.setProperty("--blurOffset",B);J.forEach(e=>{e.addEventListener("click",be)});function be(e){e.preventDefault();const{id:t}=e.target.dataset;pe.forEach(s=>{const i=s.id===t;s.style.display=i?"block":"none",i&&D(t)}),J.forEach(s=>{s.classList.remove("active")}),e.target.classList.add("active")}const O=document.querySelector("#color-scheme-switcher-checkbox"),ue=document.querySelector(".color-scheme-switcher-slider");function ge(){const e=localStorage.getItem("dark-color-scheme");e&&e!=="false"&&(O.checked=!0)}function K(){const e=document.querySelector("main");e.classList.remove("faded-edges"),O.checked?document.body.classList.add("dark"):document.body.classList.remove("dark");const t=parseFloat(getComputedStyle(document.body).getPropertyValue("transition-duration"))*1e3;setTimeout(()=>{e.classList.add("faded-edges")},t)}function he(e){localStorage.setItem("dark-color-scheme",e.checked)}function _e(){ge(),K(),O.addEventListener("change",fe),setTimeout(()=>{ue.classList.add("animated")},100)}function fe(e){K(),he(e.currentTarget)}_e();const Q=[{id:1,name:"Barber course",link:"https://github.com/dev0652/barber",livePage:"https://barbercourse.kyiv.ua/",thumbFilename:"barber",type:"Commercial project",stack:"Front-end",role:"Team member",customer:"barbercourse.kyiv.ua",description:"A landing page of a barber training course created with vanilla JavaScript. I worked on this project in collaboration with two other developers and a designer.",technologies:["HTML","SaSS","JavaScript","EMailJS","Vite"]},{id:2,name:"Real Estate Deals",link:"https://github.com/dev0652/zenbit-test",livePage:"https://dev0652.github.io/zenbit-test/",technologies:["HTML","SaSS","React","React Router","Redux","Node.js","MongoDB"],thumbFilename:"zenbit",type:"Test",stack:"Front-end, back-end",role:null,customer:"ZenBit Tech",description:"Front-end is a MPA built with React (using Create React App tool) and uses React Router for routing and Redux for state management. It also makes use of a few other libraries like React Helmet, React Icons and Notiflix. Back-end is built with Node.js and MongoDB and is hosted on render.com"},{id:3,name:"Fighters (game)",link:"https://github.com/dev0652/fighters-nodejs",livePage:"https://dev0652.github.io/binary-hw-nodejs/",technologies:["HTML","SaSS","JavaScript","React","Node.js"],thumbFilename:"fighters",type:"Test",stack:"Front-end, back-end",role:null,customer:"Binary Academy",description:"A simple, unanimated fighting game. Front-end was built with React making use of class components"},{id:4,name:"Bookshelf",link:"https://github.com/dev0652/bookshelf",livePage:"https://dev0652.github.io/bookshelf/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"bookshelf_dark",type:"Study team project",stack:"Front-end",role:"Team leader",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:5,name:"Drink Master",link:"https://github.com/PVO-fullstack/drink_master",livePage:"https://pvo-fullstack.github.io/drink_master/",technologies:["React","SaSS"],thumbFilename:"drinkmaster",type:"Study team project",stack:"Front-end",role:"Team member",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:6,name:"Car Rental",link:"https://github.com/dev0652/swift-car-rental",livePage:"https://dev0652.github.io/swift-car-rental/",technologies:["React","Styled components"],thumbFilename:"car-rental",type:"Test",stack:"Front-end",role:null,customer:null,description:"Simple, lightweight and user-friendly car rental website developed as a test assignment for a job interview"},{id:7,name:"Phonebook",link:"https://github.com/dev0652/goit-react-hw-08-phonebook",livePage:"https://dev0652.github.io/goit-react-hw-08-phonebook",technologies:["React","Styled components"],thumbFilename:"phonebook",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:8,name:"Movie database",link:"https://github.com/dev0652/goit-react-hw-05-movies",livePage:"https://dev0652.github.io/goit-react-hw-05-movies",technologies:["React"],thumbFilename:"movies",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:9,name:"Pixabay Image Search",link:"https://github.com/dev0652/pixabay-search",livePage:"https://dev0652.github.io/pixabay-search/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"pixabay",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:10,name:"Ice Cream",link:"https://github.com/dev0652/icecream",livePage:"https://dev0652.github.io/icecream/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"icecream",type:"Study team project",stack:"Front-end",role:"Team leader",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:11,name:"Web studio",link:"https://github.com/dev0652/webstudio",livePage:"https://dev0652.github.io/webstudio/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"webstudio",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:12,name:"Barbershop",link:"https://github.com/dev0652/barbershop",livePage:"https://dev0652.github.io/barbershop/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"barbershop",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:13,name:"Britlex school",link:"https://github.com/dev0652/britlex",livePage:"https://dev0652.github.io/britlex/",technologies:["HTML","SaSS"],thumbFilename:"britlex",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"}],w="/about/assets/barber-8b6e101c.png",j="/about/assets/barbershop-8bcd1350.png",S="/about/assets/bookshelf-49864b6f.png",x="/about/assets/bookshelf_dark-db358684.png",L="/about/assets/britlex-050895a5.png",T="/about/assets/car-rental-b9b4c4bf.png",$="/about/assets/drinkmaster-e4b6c12e.png",R="/about/assets/fighters-1a1c90b8.png",F="/about/assets/icecream-5f5f4caf.png",P="/about/assets/movies-06202e5c.png",H="/about/assets/phonebook-f79ea4be.png",E="/about/assets/pixabay-40cedfd9.png",M="/about/assets/webstudio-33991215.png",C="/about/assets/zenbit-f027c253.png";function h(e,t=null){let s="";t&&(s=`?text=${t.split(" ").join("+")}`);const i="https://placehold.co/",o=e+s;return i+o}function ve(e){const{name:t,type:s,link:i,livePage:o,thumbFilename:a,description:r,stack:c,role:n,customer:p,technologies:d}=e,f=new URL(Object.assign({"/images/projects/large/barber.png":w,"/images/projects/large/barbershop.png":j,"/images/projects/large/bookshelf.png":S,"/images/projects/large/bookshelf_dark.png":x,"/images/projects/large/britlex.png":L,"/images/projects/large/car-rental.png":T,"/images/projects/large/drinkmaster.png":$,"/images/projects/large/fighters.png":R,"/images/projects/large/icecream.png":F,"/images/projects/large/movies.png":P,"/images/projects/large/phonebook.png":H,"/images/projects/large/pixabay.png":E,"/images/projects/large/webstudio.png":M,"/images/projects/large/zenbit.png":C})[`/images/projects/large/${a}.png`],self.location).href,v=new URL(Object.assign({"/images/projects/large/barber.png":w,"/images/projects/large/barbershop.png":j,"/images/projects/large/bookshelf.png":S,"/images/projects/large/bookshelf_dark.png":x,"/images/projects/large/britlex.png":L,"/images/projects/large/car-rental.png":T,"/images/projects/large/drinkmaster.png":$,"/images/projects/large/fighters.png":R,"/images/projects/large/icecream.png":F,"/images/projects/large/movies.png":P,"/images/projects/large/phonebook.png":H,"/images/projects/large/pixabay.png":E,"/images/projects/large/webstudio.png":M,"/images/projects/large/zenbit.png":C})[`/images/projects/large/${a}.png`],self.location).href,b="Image pending",y=h("400x250",b),u=h("800x500",b),g=a?f:y,k=a?v:u,m=d.join(", ");return`
      <article>
        <h2 class="modal-title">${t}</h2>

        <div class="modal-content-wrapper">

          <div class="modal-summary">
            <div class="summary-columns-wrapper">
              <div class="summary-column">
                <p class="type"><span class="field-type">Project type:</span> ${s}</p>

                <p class="stack"><span class="field-type">Stack:</span> ${c}</p>
              </div>

              <div class="summary-column">
                <p class="role"
                style="${!n&&"display: none"}">
                  <span class="field-type">Role:</span> ${n}
                </p>

                <p class="customer"
                style="${!p&&"display: none"}">
                  <span class="field-type">Customer:</span> ${p}
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
              href="${i}"
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
  `}const U=document.querySelector("[data-pop-up]"),G=document.querySelector("[data-modal-close]"),ye=document.querySelector(".modal-content-injection-target");function ke(e){const t=Q.find(s=>s.id===+e);ye.innerHTML=ve(t),document.body.classList.add("modal-open"),U.classList.remove("is-hidden"),G.addEventListener("click",W),document.addEventListener("keydown",Y),document.addEventListener("click",Z)}function I(){G.removeEventListener("click",W),document.removeEventListener("click",Z),document.removeEventListener("keydown",Y),U.classList.add("is-hidden"),document.body.classList.remove("modal-open")}function W(e){I()}function Z(e){e.target==U&&I()}function Y(e){e.key==="Escape"&&I()}const we="/about/assets/barber-14d0dc74.webp",je="/about/assets/barbershop-46b42bde.webp",Se="/about/assets/bookshelf-2b821771.webp",xe="/about/assets/bookshelf_dark-3d63f722.webp",Le="/about/assets/britlex-db156075.webp",Te="/about/assets/car-rental-b0bc9ef3.webp",$e="/about/assets/drinkmaster-4aa67b19.webp",Re="/about/assets/fighters-74ec193d.webp",Fe="/about/assets/icecream-3016d4ec.webp",Pe="/about/assets/movies-201d44f7.webp",He="/about/assets/phonebook-417fc357.webp",Ee="/about/assets/pixabay-e28e8c3a.webp",Me="/about/assets/webstudio-9621d582.webp",Ce="/about/assets/zenbit-208b3aad.webp",qe="/about/assets/barber-acd8c8c4.webp",Be="/about/assets/barbershop-fd8a4289.webp",Oe="/about/assets/bookshelf-dd6d5501.webp",Ue="/about/assets/bookshelf_dark-6db58418.webp",Ie="/about/assets/britlex-9a245dde.webp",Ve="/about/assets/car-rental-f4b8228a.webp",Ae="/about/assets/drinkmaster-cbadb30c.webp",Ne="/about/assets/fighters-26e8c59f.webp",ze="/about/assets/icecream-4b97558d.webp",De="/about/assets/movies-c3b76fa2.webp",Je="/about/assets/phonebook-c1615721.webp",Ke="/about/assets/pixabay-5a7fc132.webp",Qe="/about/assets/webstudio-63580449.webp",Ge="/about/assets/zenbit-5942fa3f.webp";function We(e){const{id:t,name:s,type:i,link:o,livePage:a,thumbFilename:r,description:c,stack:n,role:p,customer:d,technologies:f}=e,v=new URL(Object.assign({"/images/projects/thumbs/400x250/barber.webp":we,"/images/projects/thumbs/400x250/barbershop.webp":je,"/images/projects/thumbs/400x250/bookshelf.webp":Se,"/images/projects/thumbs/400x250/bookshelf_dark.webp":xe,"/images/projects/thumbs/400x250/britlex.webp":Le,"/images/projects/thumbs/400x250/car-rental.webp":Te,"/images/projects/thumbs/400x250/drinkmaster.webp":$e,"/images/projects/thumbs/400x250/fighters.webp":Re,"/images/projects/thumbs/400x250/icecream.webp":Fe,"/images/projects/thumbs/400x250/movies.webp":Pe,"/images/projects/thumbs/400x250/phonebook.webp":He,"/images/projects/thumbs/400x250/pixabay.webp":Ee,"/images/projects/thumbs/400x250/webstudio.webp":Me,"/images/projects/thumbs/400x250/zenbit.webp":Ce})[`/images/projects/thumbs/400x250/${r}.webp`],self.location).href,b=new URL(Object.assign({"/images/projects/thumbs/800x500/barber.webp":qe,"/images/projects/thumbs/800x500/barbershop.webp":Be,"/images/projects/thumbs/800x500/bookshelf.webp":Oe,"/images/projects/thumbs/800x500/bookshelf_dark.webp":Ue,"/images/projects/thumbs/800x500/britlex.webp":Ie,"/images/projects/thumbs/800x500/car-rental.webp":Ve,"/images/projects/thumbs/800x500/drinkmaster.webp":Ae,"/images/projects/thumbs/800x500/fighters.webp":Ne,"/images/projects/thumbs/800x500/icecream.webp":ze,"/images/projects/thumbs/800x500/movies.webp":De,"/images/projects/thumbs/800x500/phonebook.webp":Je,"/images/projects/thumbs/800x500/pixabay.webp":Ke,"/images/projects/thumbs/800x500/webstudio.webp":Qe,"/images/projects/thumbs/800x500/zenbit.webp":Ge})[`/images/projects/thumbs/800x500/${r}.webp`],self.location).href,y=new URL(Object.assign({"/images/projects/large/barber.png":w,"/images/projects/large/barbershop.png":j,"/images/projects/large/bookshelf.png":S,"/images/projects/large/bookshelf_dark.png":x,"/images/projects/large/britlex.png":L,"/images/projects/large/car-rental.png":T,"/images/projects/large/drinkmaster.png":$,"/images/projects/large/fighters.png":R,"/images/projects/large/icecream.png":F,"/images/projects/large/movies.png":P,"/images/projects/large/phonebook.png":H,"/images/projects/large/pixabay.png":E,"/images/projects/large/webstudio.png":M,"/images/projects/large/zenbit.png":C})[`/images/projects/large/${r}.png`],self.location).href,u="Image pending",g=h("400x250",u),k=h("800x500",u),m=r?v:g,A=r?b:k,N=f.join(", ");return`
    <li class="project-card">
      <article class="fade-in">
        <h2 class="card-title collapsible-toggle" data-id="${s}">${s}</h2>

        <div class="list-view collapsible">
          <div class="list-view-wrapper">
            <div class="list-view-image-block">
              <img
                class="project-card-image"
                srcset="${m} 1x, ${A} 2x"
                src="${y}"
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
                href="${a}"
                target="_blank"
                rel="noopener noreferrer"
                >Live page</a
              >
            </div>

            <div class="list-view-summary">
              <div class="summary-items-wrapper">
                  <p class="type"><span class="field-type">Type:</span> ${i}</p>

                  <p class="customer"
                  style="${!d&&"display: none"}">
                    <span class="field-type">Customer:</span> ${d}
                  </p>

                  <p class="role"
                  style="${!p&&"display: none"}">
                    <span class="field-type">Role:</span> ${p}
                  </p>

                  <p class="stack"><span class="field-type">Stack:</span> ${n}</p>
              </div>

              <p class="technologies">${N}</p>
            </div>

            <div class="list-view-description">
              <p class="project-description">${c}</p>
            </div>  

          </div>
        </div>

        <div class="gallery-view">
          <a
            class="project-card-link flip-card"
            href="#"
            data-id="${t}"
          >
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  class="project-card-image"
                  srcset="${m} 1x, ${A} 2x"
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
                    <p class="type"><span class="field-type">Type:</span> ${i}</p>

                    <p class="stack"><span class="field-type">Stack:</span> ${n}</p>

                    <p class="technologies"><span class="field-type">Technologies:</span> ${N}</p>
                  </div>

                  <p class="flip-card-prompt-to-click">Click to learn more</p> 
                </div>

                             
              </div>
            </div>
  </a>

        </div>
      </article>
    </li>
  `}const Ze=e=>`
  <ul class="project-card-list">
    ${e.map(t=>We(t)).join("")}
  </ul>`,Ye=Ze(Q),Xe=document.querySelector("#gallery");Xe.innerHTML=Ye;const X=document.querySelector(".projects-view-switch"),q=document.querySelector(".project-card-list");X.addEventListener("click",et);q.addEventListener("click",tt);function et(){q.classList.toggle("gallery-view");const e=q.classList.contains("gallery-view");X.innerHTML=`View as ${e?"list":"tiles"}`}function tt(e){if(e.preventDefault(),!e.target.matches(".project-card-link"))return;const t=e.target.dataset.id;ke(t)}const st=e=>{if(!e.target.classList.contains("collapsible-toggle"))return;const t=document.querySelectorAll(".project-card"),s=Array.from(t),i=s.find(c=>c.querySelector(".collapsible-toggle").dataset.id===e.target.dataset.id),o=i.querySelector(".collapsible-toggle"),a=i.querySelector(".collapsible"),r=s.find(c=>c===i?!1:c.querySelector(".collapsible-toggle").classList.contains("content-expanded"));if(r){const c=r.querySelector(".collapsible");r.querySelector(".collapsible-toggle").classList.remove("content-expanded"),c.style.maxHeight=null}o.classList.toggle("content-expanded"),a.style.maxHeight?(a.style.maxHeight=null,a.classList.remove("animated")):(a.style.maxHeight=a.scrollHeight+"px",a.classList.add("animated"))},ot=document.querySelector(".gallery");ot.addEventListener("click",st);const l={origin:"https://api.emailjs.com",blockHeadless:!1},V=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},at=(e,t="https://api.emailjs.com")=>{if(!e)return;const s=V(e);l.publicKey=s.publicKey,l.blockHeadless=s.blockHeadless,l.blockList=s.blockList,l.limitRate=s.limitRate,l.origin=s.origin||t};class _{constructor(t=0,s="Network Error"){this.status=t,this.text=s}}const ee=async(e,t,s={})=>{const i=await fetch(l.origin+e,{method:"POST",headers:s,body:t}),o=await i.text(),a=new _(i.status,o);if(i.ok)return a;throw a},te=(e,t,s)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},it=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},se=e=>e.webdriver||!e.languages||e.languages.length===0,oe=()=>new _(451,"Unavailable For Headless Browser"),rt=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},ct=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},nt=(e,t)=>e instanceof FormData?e.get(t):e[t],ae=(e,t)=>{if(ct(e))return!1;rt(e.list,e.watchVariable);const s=nt(t,e.watchVariable);return typeof s!="string"?!1:e.list.includes(s)},ie=()=>new _(403,"Forbidden"),lt=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},pt=(e,t,s)=>{const i=Number(s.getItem(e)||0);return t-Date.now()+i},z=(e,t,s)=>{setTimeout(()=>{s.removeItem(e)},t)},re=(e,t,s)=>{if(!s.throttle)return!1;lt(s.throttle,s.id);const i=s.id||t,o=pt(i,s.throttle,e);return o>0?(z(i,o,e),!0):(e.setItem(i,Date.now().toString()),z(i,s.throttle,e),!1)},ce=()=>new _(429,"Too Many Requests"),dt=(e,t,s,i)=>{const o=V(i),a=o.publicKey||l.publicKey,r=o.blockHeadless||l.blockHeadless,c={...l.blockList,...o.blockList},n={...l.limitRate,...o.limitRate};return r&&se(navigator)?Promise.reject(oe()):(te(a,e,t),it(s),s&&ae(c,s)?Promise.reject(ie()):re(localStorage,location.pathname,n)?Promise.reject(ce()):ee("/api/v1.0/email/send",JSON.stringify({lib_version:"4.1.0",user_id:a,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"}))},mt=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},bt=e=>typeof e=="string"?document.querySelector(e):e,ut=(e,t,s,i)=>{const o=V(i),a=o.publicKey||l.publicKey,r=o.blockHeadless||l.blockHeadless,c={...l.blockList,...o.blockList},n={...l.limitRate,...o.limitRate};if(r&&se(navigator))return Promise.reject(oe());const p=bt(s);te(a,e,t),mt(p);const d=new FormData(p);return ae(c,d)?Promise.reject(ie()):re(localStorage,location.pathname,n)?Promise.reject(ce()):(d.append("lib_version","4.1.0"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",a),ee("/api/v1.0/email/send-form",d))},ne={init:at,send:dt,sendForm:ut};ne.init("E8FZeR5jYUP13UDEy");const gt=document.getElementById("contact-form");gt.addEventListener("submit",ht);function ht(e){e.preventDefault(),ne.sendForm("default_service","contact_form","#contact-form").then(function(t){alert("Success")},function(t){alert("Error")}).finally(function(){document.getElementById("contact-form").reset()})}
