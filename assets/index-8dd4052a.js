(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();const I=function(e){const t=`#${e}`,s=`#${e}-title`,a=document.querySelector(t),i=a.querySelector(s),o=a.querySelector(".section-content"),r=i.innerHTML;i.innerHTML="";const n=100;o.style.animationDelay=n*r.length;let c=0;function d(){c<r.length&&(i.innerHTML+=r.charAt(c),c++,setTimeout(d,n))}d()};I("about");const se=document.querySelector(".header"),V=document.querySelectorAll(".header-nav-link"),ie=document.querySelectorAll(".section"),oe=document.querySelector("main"),{height:ae}=se.getBoundingClientRect(),F=`${ae}px`;document.body.style.paddingTop=F;document.documentElement.style.scrollPaddingTop=F;oe.style.setProperty("--blurOffset",F);V.forEach(e=>{e.addEventListener("click",re)});function re(e){e.preventDefault();const{id:t}=e.target.dataset;ie.forEach(s=>{const a=s.id===t;s.style.display=a?"block":"none",a&&I(t)}),V.forEach(s=>{s.classList.remove("active")}),e.target.classList.add("active")}const H=document.querySelector("#color-scheme-switcher-checkbox"),ne=document.querySelector(".color-scheme-switcher-slider");function ce(){const e=localStorage.getItem("dark-color-scheme");e&&e!=="false"&&(H.checked=!0)}function A(){const e=document.querySelector("main");e.classList.remove("faded-edges"),H.checked?document.body.classList.add("dark"):document.body.classList.remove("dark");const t=parseFloat(getComputedStyle(document.body).getPropertyValue("transition-duration"))*1e3;setTimeout(()=>{e.classList.add("faded-edges")},t)}function le(e){localStorage.setItem("dark-color-scheme",e.checked)}function de(){ce(),A(),H.addEventListener("change",me),setTimeout(()=>{ne.classList.add("animated")},100)}function me(e){A(),le(e.currentTarget)}de();const N=[{id:1,name:"Barber course",link:"https://github.com/dev0652/barber",livePage:"https://barbercourse.kyiv.ua/",thumbFilename:"barber",type:"Commercial project",stack:"Front-end",role:"Team member",customer:"barbercourse.kyiv.ua",description:"A landing page of a barber training course created with vanilla JavaScript. I worked on this project in collaboration with two other developers and a designer.",technologies:["HTML","SaSS","JavaScript","EMailJS","Vite"]},{id:2,name:"Real Estate Deals",link:"https://github.com/dev0652/zenbit-test",livePage:"https://dev0652.github.io/zenbit-test/",technologies:["HTML","SaSS","React","React Router","Redux","Node.js","MongoDB"],thumbFilename:"zenbit",type:"Test",stack:"Front-end, back-end",role:null,customer:"ZenBit Tech",description:"Front-end is a MPA built with React (using Create React App tool) and uses React Router for routing and Redux for state management. It also makes use of a few other libraries like React Helmet, React Icons and Notiflix. Back-end is built with Node.js and MongoDB and is hosted on render.com"},{id:3,name:"Fighters (game)",link:"https://github.com/dev0652/fighters-nodejs",livePage:"https://dev0652.github.io/binary-hw-nodejs/",technologies:["HTML","SaSS","JavaScript","React","Node.js"],thumbFilename:"fighters",type:"Test",stack:"Front-end, back-end",role:null,customer:"Binary Academy",description:"A simple, unanimated fighting game. Front-end was built with React making use of class components"},{id:4,name:"Bookshelf",link:"https://github.com/dev0652/bookshelf",livePage:"https://dev0652.github.io/bookshelf/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"bookshelf",type:"Study team project",stack:"Front-end",role:"Team leader",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:5,name:"Drink Master",link:"https://github.com/PVO-fullstack/drink_master",livePage:"https://pvo-fullstack.github.io/drink_master/",technologies:["React","SaSS"],thumbFilename:"drinkmaster",type:"Study team project",stack:"Front-end",role:"Team member",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:6,name:"Car Rental",link:"https://github.com/dev0652/swift-car-rental",livePage:"https://dev0652.github.io/swift-car-rental/",technologies:["React","Styled components"],thumbFilename:"car-rental",type:"Test",stack:"Front-end",role:null,customer:null,description:"Simple, lightweight and user-friendly car rental website developed as a test assignment for a job interview"},{id:7,name:"Phonebook",link:"https://github.com/dev0652/goit-react-hw-08-phonebook",livePage:"https://dev0652.github.io/goit-react-hw-08-phonebook",technologies:["React","Styled components"],thumbFilename:"phonebook",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:8,name:"Movie database",link:"https://github.com/dev0652/goit-react-hw-05-movies",livePage:"https://dev0652.github.io/goit-react-hw-05-movies",technologies:["React"],thumbFilename:"movies",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:9,name:"Pixabay Image Search",link:"https://github.com/dev0652/pixabay-search",livePage:"https://dev0652.github.io/pixabay-search/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"pixabay",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:10,name:"Ice Cream",link:"https://github.com/dev0652/icecream",livePage:"https://dev0652.github.io/icecream/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"icecream",type:"Study team project",stack:"Front-end",role:"Team leader",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:11,name:"Web studio",link:"https://github.com/dev0652/webstudio",livePage:"https://dev0652.github.io/webstudio/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"webstudio",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:12,name:"Barbershop",link:"https://github.com/dev0652/barbershop",livePage:"https://dev0652.github.io/barbershop/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"barbershop",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:13,name:"Britlex school",link:"https://github.com/dev0652/britlex",livePage:"https://dev0652.github.io/britlex/",technologies:["HTML","SaSS"],type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"}];function p(e,t=null){let s="";t&&(s=`?text=${t.split(" ").join("+")}`);const a="https://placehold.co/",i=e+s;return a+i}function ue(e){const{name:t,type:s,link:a,livePage:i,thumbFilename:o,description:r,stack:n,role:c,customer:d,technologies:m}=e,h="/images/projects",u="Image pending",g=new URL(`${h}/small/${o}.png`,import.meta.url).href,L=new URL(`${h}/medium/${o}.png`,import.meta.url).href,S=new URL(`${h}/large1x/${o}.png`,import.meta.url).href,w=new URL(`${h}/large2x/${o}.png`,import.meta.url).href,j=p("370x208",u),$=p("480x270",u),x=p("960x540",u),T=p("1920x1080",u),R=o?g:j,P=o?L:$,b=o?S:x,f=o?w:T,y=m.join(", ");return`
      <article>
        <h2 class="modal-title">${t}</h2>

        <div class="modal-content-wrapper">

          <div class="modal-summary">
            <div class="summary-columns-wrapper">
              <div class="summary-column">
                <p class="type"><span class="field-type">Project type:</span> ${s}</p>

                <p class="stack"><span class="field-type">Stack:</span> ${n}</p>
              </div>

              <div class="summary-column">
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

            <p class="technologies">${y}</p>
          </div>

          <div class="modal-image-block">
            <img
              class="project-card-image"
                  srcset="
                    ${R} 370w,
                    ${P} 480w,
                    ${b} 960w,
                    ${f} 1920w"
                  src="${b}"
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
              href="${i}"
              target="_blank"
              rel="noopener noreferrer"
              >Live page</a
            >
          </div>

        </div>
      </article>
  `}const M=document.querySelector("[data-pop-up]"),O=document.querySelector("[data-modal-close]"),pe=document.querySelector(".modal-content-injection-target");function he(e){const t=N.find(s=>s.id===+e);pe.innerHTML=ue(t),document.body.classList.add("modal-open"),M.classList.remove("is-hidden"),O.addEventListener("click",U),document.addEventListener("keydown",J),document.addEventListener("click",D)}function E(){O.removeEventListener("click",U),document.removeEventListener("click",D),document.removeEventListener("keydown",J),M.classList.add("is-hidden"),document.body.classList.remove("modal-open")}function U(e){E()}function D(e){e.target==M&&E()}function J(e){e.key==="Escape"&&E()}function ge(e){const{id:t,name:s,type:a,link:i,livePage:o,thumbFilename:r,description:n,stack:c,role:d,customer:m,technologies:h}=e,u="/images/projects",g="Image pending",L=new URL(`${u}/small/${r}.png`,import.meta.url).href,S=new URL(`${u}/medium/${r}.png`,import.meta.url).href,w=new URL(`${u}/large1x/${r}.png`,import.meta.url).href,j=new URL(`${u}/large2x/${r}.png`,import.meta.url).href,$=p("370x208",g),x=p("480x270",g),T=p("960x540",g),R=p("1920x1080",g),P=r?L:$,b=r?S:x,f=r?w:T,y=r?j:R,q=h.join(", ");return`
    <li class="project-card">
      <article class="fade-in">
        <h2 class="card-title collapsible-toggle" data-id="${s}">${s}</h2>

        <div class="list-card collapsible">
          <div class="list-card-wrapper">
            <div class="list-card-image-block">
              <img
                class="project-card-image"
                srcset="${f} 1x, ${y} 2x"
                src="${f}"
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
                href="${o}"
                target="_blank"
                rel="noopener noreferrer"
                >Live page</a
              >
            </div>

            <div class="list-card-summary">
              <div class="summary-items-wrapper">
                  <p class="type"><span class="field-type">Type:</span> ${a}</p>

                  <p class="customer"
                  style="${!m&&"display: none"}">
                    <span class="field-type">Customer:</span> ${m}
                  </p>

                  <p class="role"
                  style="${!d&&"display: none"}">
                    <span class="field-type">Role:</span> ${d}
                  </p>

                  <p class="stack"><span class="field-type">Stack:</span> ${c}</p>
              </div>

              <p class="technologies">${q}</p>
            </div>

            <div class="list-card-description">
              <p class="project-description">${n}</p>
            </div>  

          </div>
        </div>

        <div class="tile-card">
          <a
            class="tile-card-link flip-card"
            href="#"
            data-id="${t}"
          >
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  class="project-card-image"
                  srcset="
                    ${P} 370w,
                    ${b} 480w,
                    ${f} 960w,
                    ${y} 1920w"
                  src="${b}"
                  alt="${s} live page screenshot"
                  loading="lazy"
                />
              </div>

              <div class="flip-card-back">
                <h3 class="flip-card-project-name">${s}</h3>

                <div class="tile-card-project-summary">
                  <div>
                    <p class="type"><span class="field-type">Type:</span> ${a}</p>

                    <p class="stack"><span class="field-type">Stack:</span> ${c}</p>

                    <p class="technologies"><span class="field-type">Technologies:</span> ${q}</p>
                  </div>

                  <p class="flip-card-prompt-to-click">Click to learn more</p> 
                </div>

                             
              </div>
            </div>
  </a>

        </div>
      </article>
    </li>
  `}const be=e=>`
  <ul class="project-card-list">
    ${e.map(t=>ge(t)).join("")}
  </ul>`,fe=be(N),ye=document.querySelector("#gallery");ye.innerHTML=fe;const K=document.querySelector(".projects-view-switch"),v=document.querySelector(".project-card-list");K.addEventListener("click",ve);function ve(){v.classList.toggle("gallery-view");const e=v.classList.contains("gallery-view");K.innerHTML=`View as ${e?"list":"tiles"}`,e?v.addEventListener("click",B):v.removeEventListener("click",B)}function B(e){if(e.preventDefault(),!e.target.matches(".tile-card-link"))return;const t=e.target.dataset.id;he(t)}const ke=e=>{if(!e.target.classList.contains("collapsible-toggle"))return;const t=document.querySelectorAll(".project-card"),s=Array.from(t),a=s.find(n=>n.querySelector(".collapsible-toggle").dataset.id===e.target.dataset.id),i=a.querySelector(".collapsible-toggle"),o=a.querySelector(".collapsible"),r=s.find(n=>n===a?!1:n.querySelector(".collapsible-toggle").classList.contains("content-expanded"));if(r){const n=r.querySelector(".collapsible");r.querySelector(".collapsible-toggle").classList.remove("content-expanded"),n.style.maxHeight=null}i.classList.toggle("content-expanded"),o.style.maxHeight?(o.style.maxHeight=null,o.classList.remove("animated")):(o.style.maxHeight=o.scrollHeight+"px",o.classList.add("animated"))},Le=document.querySelector(".gallery");Le.addEventListener("click",ke);const l={origin:"https://api.emailjs.com",blockHeadless:!1},C=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},Se=(e,t="https://api.emailjs.com")=>{if(!e)return;const s=C(e);l.publicKey=s.publicKey,l.blockHeadless=s.blockHeadless,l.blockList=s.blockList,l.limitRate=s.limitRate,l.origin=s.origin||t};class k{constructor(t=0,s="Network Error"){this.status=t,this.text=s}}const Q=async(e,t,s={})=>{const a=await fetch(l.origin+e,{method:"POST",headers:s,body:t}),i=await a.text(),o=new k(a.status,i);if(a.ok)return o;throw o},z=(e,t,s)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},we=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},G=e=>e.webdriver||!e.languages||e.languages.length===0,W=()=>new k(451,"Unavailable For Headless Browser"),je=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},$e=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},xe=(e,t)=>e instanceof FormData?e.get(t):e[t],Z=(e,t)=>{if($e(e))return!1;je(e.list,e.watchVariable);const s=xe(t,e.watchVariable);return typeof s!="string"?!1:e.list.includes(s)},Y=()=>new k(403,"Forbidden"),Te=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},Re=(e,t,s)=>{const a=Number(s.getItem(e)||0);return t-Date.now()+a},_=(e,t,s)=>{setTimeout(()=>{s.removeItem(e)},t)},X=(e,t,s)=>{if(!s.throttle)return!1;Te(s.throttle,s.id);const a=s.id||t,i=Re(a,s.throttle,e);return i>0?(_(a,i,e),!0):(e.setItem(a,Date.now().toString()),_(a,s.throttle,e),!1)},ee=()=>new k(429,"Too Many Requests"),Pe=(e,t,s,a)=>{const i=C(a),o=i.publicKey||l.publicKey,r=i.blockHeadless||l.blockHeadless,n={...l.blockList,...i.blockList},c={...l.limitRate,...i.limitRate};return r&&G(navigator)?Promise.reject(W()):(z(o,e,t),we(s),s&&Z(n,s)?Promise.reject(Y()):X(localStorage,location.pathname,c)?Promise.reject(ee()):Q("/api/v1.0/email/send",JSON.stringify({lib_version:"4.1.0",user_id:o,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"}))},Fe=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},He=e=>typeof e=="string"?document.querySelector(e):e,Me=(e,t,s,a)=>{const i=C(a),o=i.publicKey||l.publicKey,r=i.blockHeadless||l.blockHeadless,n={...l.blockList,...i.blockList},c={...l.limitRate,...i.limitRate};if(r&&G(navigator))return Promise.reject(W());const d=He(s);z(o,e,t),Fe(d);const m=new FormData(d);return Z(n,m)?Promise.reject(Y()):X(localStorage,location.pathname,c)?Promise.reject(ee()):(m.append("lib_version","4.1.0"),m.append("service_id",e),m.append("template_id",t),m.append("user_id",o),Q("/api/v1.0/email/send-form",m))},te={init:Se,send:Pe,sendForm:Me};te.init("E8FZeR5jYUP13UDEy");const Ee=document.getElementById("contact-form");Ee.addEventListener("submit",Ce);function Ce(e){e.preventDefault(),te.sendForm("default_service","contact_form","#contact-form").then(function(t){alert("Success")},function(t){alert("Error")}).finally(function(){document.getElementById("contact-form").reset()})}
