(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(s){if(s.ep)return;s.ep=!0;const t=a(s);fetch(s.href,t)}})();const I=function(e){const o=`#${e}`,a=`#${e}-title`,r=document.querySelector(o),s=r.querySelector(a),t=r.querySelector(".section-content"),i=s.innerHTML;s.innerHTML="";const c=100;t.style.animationDelay=c*i.length;let n=0;function p(){n<i.length&&(s.innerHTML+=i.charAt(n),n++,setTimeout(p,c))}p()};I("about");const V=document.querySelector(".header"),B=document.querySelectorAll(".header-nav-link"),G=document.querySelectorAll(".section"),W=document.querySelector("main"),{height:K}=V.getBoundingClientRect(),R=`${K}px`;document.body.style.paddingTop=R;document.documentElement.style.scrollPaddingTop=R;W.style.setProperty("--blurOffset",R);B.forEach(e=>{e.addEventListener("click",Z)});function Z(e){e.preventDefault();const{id:o}=e.target.dataset;G.forEach(a=>{const r=a.id===o;a.style.display=r?"block":"none",r&&I(o)}),B.forEach(a=>{a.classList.remove("active")}),e.target.classList.add("active")}const q=document.querySelector("#color-scheme-switcher-checkbox"),X=document.querySelector(".color-scheme-switcher-slider");function Y(){const e=localStorage.getItem("dark-color-scheme");e&&e!=="false"&&(q.checked=!0)}function O(){const e=document.querySelector("main");e.classList.remove("faded-edges"),q.checked?document.body.classList.add("dark"):document.body.classList.remove("dark");const o=parseFloat(getComputedStyle(document.body).getPropertyValue("transition-duration"))*1e3;setTimeout(()=>{e.classList.add("faded-edges")},o)}function ee(e){localStorage.setItem("dark-color-scheme",e.checked)}function te(){Y(),O(),q.addEventListener("change",se),setTimeout(()=>{X.classList.add("animated")},100)}function se(e){O(),ee(e.currentTarget)}te();const oe="/about/assets/barber-14d0dc74.webp",ae="/about/assets/barbershop-46b42bde.webp",ie="/about/assets/bookshelf-2b821771.webp",re="/about/assets/bookshelf_dark-3d63f722.webp",ce="/about/assets/britlex-db156075.webp",ne="/about/assets/car-rental-b0bc9ef3.webp",le="/about/assets/drinkmaster-4aa67b19.webp",pe="/about/assets/fighters-74ec193d.webp",de="/about/assets/icecream-3016d4ec.webp",ge="/about/assets/movies-201d44f7.webp",be="/about/assets/phonebook-417fc357.webp",me="/about/assets/pixabay-e28e8c3a.webp",ue="/about/assets/webstudio-9621d582.webp",he="/about/assets/zenbit-208b3aad.webp",_e="/about/assets/barber-acd8c8c4.webp",ve="/about/assets/barbershop-fd8a4289.webp",fe="/about/assets/bookshelf-dd6d5501.webp",ke="/about/assets/bookshelf_dark-6db58418.webp",je="/about/assets/britlex-9a245dde.webp",we="/about/assets/car-rental-f4b8228a.webp",ye="/about/assets/drinkmaster-cbadb30c.webp",xe="/about/assets/fighters-26e8c59f.webp",Se="/about/assets/icecream-4b97558d.webp",Le="/about/assets/movies-c3b76fa2.webp",$e="/about/assets/phonebook-c1615721.webp",Pe="/about/assets/pixabay-5a7fc132.webp",Fe="/about/assets/webstudio-63580449.webp",Te="/about/assets/zenbit-5942fa3f.webp",v="/about/assets/barber-8b6e101c.png",f="/about/assets/barbershop-8bcd1350.png",k="/about/assets/bookshelf-49864b6f.png",j="/about/assets/bookshelf_dark-db358684.png",w="/about/assets/britlex-050895a5.png",y="/about/assets/car-rental-b9b4c4bf.png",x="/about/assets/drinkmaster-e4b6c12e.png",S="/about/assets/fighters-1a1c90b8.png",L="/about/assets/icecream-5f5f4caf.png",$="/about/assets/movies-06202e5c.png",P="/about/assets/phonebook-f79ea4be.png",F="/about/assets/pixabay-40cedfd9.png",T="/about/assets/webstudio-33991215.png",M="/about/assets/zenbit-f027c253.png",z=[{id:1,name:"Barber course",link:"https://github.com/dev0652/barber",livePage:"https://barbercourse.kyiv.ua/",thumbFilename:"barber",type:"Commercial project",stack:"Front-end",role:"Team member",customer:"Private customer",description:"A landing page of a barber training course made with vanilla JavaScript and Vite. I worked on this project in collaboration with two other developers and a designer.",technologies:["HTML","SaSS","JavaScript","EMailJS","Vite"]},{id:2,name:"Real Estate Deals",link:"https://github.com/dev0652/zenbit-test",livePage:"https://dev0652.github.io/zenbit-test/",technologies:["HTML","SaSS","React","React Router","Redux","Node.js","MongoDB"],thumbFilename:"zenbit",type:"Test",stack:"Front-end, back-end",customer:"ZenBit Tech",description:"Front-end is a MPA built with React (using Create React App tool) and uses React Router for routing and Redux for state management. It also makes use of a few other libraries like React Helmet, React Icons and Notiflix. Back-end is built with Node.js and MongoDB and is hosted on render.com"},{id:3,name:"Fighters (game)",link:"https://github.com/dev0652/fighters-nodejs",livePage:"https://dev0652.github.io/binary-hw-nodejs/",technologies:["HTML","SaSS","JavaScript","React","Node.js"],thumbFilename:"fighters",type:"Test",stack:"Front-end, back-end",customer:"Binary Academy",description:"A simple, unanimated fighting game. Front-end was built with React making use of class components"},{id:4,name:"Bookshelf",link:"https://github.com/dev0652/bookshelf",livePage:"https://dev0652.github.io/bookshelf/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"bookshelf_dark",type:"Study team project",role:"Team leader",stack:"Front-end",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:5,name:"Drink Master",link:"https://github.com/PVO-fullstack/drink_master",livePage:"https://pvo-fullstack.github.io/drink_master/",technologies:["React","SaSS"],thumbFilename:"drinkmaster",type:"Study team project",role:"Team member",stack:"Front-end",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:6,name:"Car Rental",link:"https://github.com/dev0652/swift-car-rental",livePage:"https://dev0652.github.io/swift-car-rental/",technologies:["React","Styled components"],thumbFilename:"car-rental",type:"Test",stack:"Front-end",customer:null,description:"Simple, lightweight and user-friendly car rental website developed as a test assignment for a job interview"},{id:7,name:"Phonebook",link:"https://github.com/dev0652/goit-react-hw-08-phonebook",livePage:"https://dev0652.github.io/goit-react-hw-08-phonebook",technologies:["React","Styled components"],thumbFilename:"phonebook",type:"Study project",stack:"Front-end",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:8,name:"Movie database",link:"https://github.com/dev0652/goit-react-hw-05-movies",livePage:"https://dev0652.github.io/goit-react-hw-05-movies",technologies:["React"],thumbFilename:"movies",type:"Study project",stack:"Front-end",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:9,name:"Pixabay Image Search",link:"https://github.com/dev0652/pixabay-search",livePage:"https://dev0652.github.io/pixabay-search/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"pixabay",type:"Study project",stack:"Front-end",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:10,name:"Ice Cream",link:"https://github.com/dev0652/icecream",livePage:"https://dev0652.github.io/icecream/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"icecream",type:"Study team project",role:"Team leader",stack:"Front-end",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:11,name:"Web studio",link:"https://github.com/dev0652/webstudio",livePage:"https://dev0652.github.io/webstudio/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"webstudio",type:"Study project",stack:"Front-end",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:12,name:"Barbershop",link:"https://github.com/dev0652/barbershop",livePage:"https://dev0652.github.io/barbershop/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"barbershop",type:"Study project",stack:"Front-end",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:13,name:"Britlex school",link:"https://github.com/dev0652/britlex",livePage:"https://dev0652.github.io/britlex/",technologies:["HTML","SaSS"],thumbFilename:"britlex",type:"Study project",stack:"Front-end",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"}];function Me(e){const{name:o,type:a,link:r,livePage:s,thumbFilename:t,description:i,stack:c,role:n,customer:p,technologies:b}=e,m=new URL(Object.assign({"../images/projects/large/barber.png":v,"../images/projects/large/barbershop.png":f,"../images/projects/large/bookshelf.png":k,"../images/projects/large/bookshelf_dark.png":j,"../images/projects/large/britlex.png":w,"../images/projects/large/car-rental.png":y,"../images/projects/large/drinkmaster.png":x,"../images/projects/large/fighters.png":S,"../images/projects/large/icecream.png":L,"../images/projects/large/movies.png":$,"../images/projects/large/phonebook.png":P,"../images/projects/large/pixabay.png":F,"../images/projects/large/webstudio.png":T,"../images/projects/large/zenbit.png":M})[`../images/projects/large/${t}.png`],self.location).href,u=new URL(Object.assign({"../images/projects/large/barber.png":v,"../images/projects/large/barbershop.png":f,"../images/projects/large/bookshelf.png":k,"../images/projects/large/bookshelf_dark.png":j,"../images/projects/large/britlex.png":w,"../images/projects/large/car-rental.png":y,"../images/projects/large/drinkmaster.png":x,"../images/projects/large/fighters.png":S,"../images/projects/large/icecream.png":L,"../images/projects/large/movies.png":$,"../images/projects/large/phonebook.png":P,"../images/projects/large/pixabay.png":F,"../images/projects/large/webstudio.png":T,"../images/projects/large/zenbit.png":M})[`../images/projects/large/${t}.png`],self.location).href,h="https://placehold.co/400x250?text=Image+pending",g="https://placehold.co/800x500?text=Image+pending",l=t!==""&&t!==void 0,d=l?m:h,_=l?u:g,D=b.join(", ");return`
      <article>
        <h2 class="modal-title">${o}</h2>

        <div class="modal-content-wrapper">

          <div class="modal-heading">
            <p class="project-type">Project type: ${a}</p>
            <p class="project-stack">Stack: ${c}</p>
            <p class="technologies">${D}</p>
          </div>

          <div class="modal-image-block">
            <img
              class="project-card-image"
              srcset="${d} 1x, ${_} 2x"
              src="${d}"
              alt="${o} live page screenshot"
            />
          </div>

          <div class="modal-description">
            <p class="project-description">${i}</p>
          </div>
          
          <div class="modal-project-links-wrapper">
            <a
              class="project-link"
              href="${r}"
              target="_blank"
              rel="noopener noreferrer"
              >GitHub</a
            >

            <a
              class="project-link"
              href="${s}"
              target="_blank"
              rel="noopener noreferrer"
              >Live page</a
            >
          </div>

        </div>
      </article>
  `}const E=document.querySelector("[data-pop-up]"),A=document.querySelector("[data-modal-close]"),Ce=document.querySelector(".modal-content-injection-target");function Re(e){const o=z.find(a=>a.id===+e);Ce.innerHTML=Me(o),E.classList.remove("is-hidden"),document.body.style.overflow="hidden",A.addEventListener("click",N),document.addEventListener("keydown",J),document.addEventListener("click",U)}function H(){A.removeEventListener("click",N),document.removeEventListener("click",U),document.removeEventListener("keydown",J),E.classList.add("is-hidden"),document.body.style.removeProperty("overflow")}function N(e){H()}function U(e){e.target==E&&H()}function J(e){e.key==="Escape"&&H()}const qe=e=>{const{id:o,name:a,type:r,link:s,livePage:t,thumbFilename:i,description:c,technologies:n}=e,p=new URL(Object.assign({"../images/projects/thumbs/400x250/barber.webp":oe,"../images/projects/thumbs/400x250/barbershop.webp":ae,"../images/projects/thumbs/400x250/bookshelf.webp":ie,"../images/projects/thumbs/400x250/bookshelf_dark.webp":re,"../images/projects/thumbs/400x250/britlex.webp":ce,"../images/projects/thumbs/400x250/car-rental.webp":ne,"../images/projects/thumbs/400x250/drinkmaster.webp":le,"../images/projects/thumbs/400x250/fighters.webp":pe,"../images/projects/thumbs/400x250/icecream.webp":de,"../images/projects/thumbs/400x250/movies.webp":ge,"../images/projects/thumbs/400x250/phonebook.webp":be,"../images/projects/thumbs/400x250/pixabay.webp":me,"../images/projects/thumbs/400x250/webstudio.webp":ue,"../images/projects/thumbs/400x250/zenbit.webp":he})[`../images/projects/thumbs/400x250/${i}.webp`],self.location).href,b=new URL(Object.assign({"../images/projects/thumbs/800x500/barber.webp":_e,"../images/projects/thumbs/800x500/barbershop.webp":ve,"../images/projects/thumbs/800x500/bookshelf.webp":fe,"../images/projects/thumbs/800x500/bookshelf_dark.webp":ke,"../images/projects/thumbs/800x500/britlex.webp":je,"../images/projects/thumbs/800x500/car-rental.webp":we,"../images/projects/thumbs/800x500/drinkmaster.webp":ye,"../images/projects/thumbs/800x500/fighters.webp":xe,"../images/projects/thumbs/800x500/icecream.webp":Se,"../images/projects/thumbs/800x500/movies.webp":Le,"../images/projects/thumbs/800x500/phonebook.webp":$e,"../images/projects/thumbs/800x500/pixabay.webp":Pe,"../images/projects/thumbs/800x500/webstudio.webp":Fe,"../images/projects/thumbs/800x500/zenbit.webp":Te})[`../images/projects/thumbs/800x500/${i}.webp`],self.location).href,m=new URL(Object.assign({"../images/projects/large/barber.png":v,"../images/projects/large/barbershop.png":f,"../images/projects/large/bookshelf.png":k,"../images/projects/large/bookshelf_dark.png":j,"../images/projects/large/britlex.png":w,"../images/projects/large/car-rental.png":y,"../images/projects/large/drinkmaster.png":x,"../images/projects/large/fighters.png":S,"../images/projects/large/icecream.png":L,"../images/projects/large/movies.png":$,"../images/projects/large/phonebook.png":P,"../images/projects/large/pixabay.png":F,"../images/projects/large/webstudio.png":T,"../images/projects/large/zenbit.png":M})[`../images/projects/large/${i}.png`],self.location).href,u="https://placehold.co/400x250?text=Image+pending",h="https://placehold.co/800x500?text=Image+pending",g=i!==""&&i!==void 0,l=g?p:u,d=g?b:h,_=n.join(", ");return`
    <li class="project-card">
      <article class="fade-in">
        <h2 class="card-title collapsible-toggle" data-id="${a}">${a}</h2>

        <div class="list-version collapsible">
          <div class="list-version-wrapper">
            <div class="list-version-image-block">
              <img
                class="project-card-image"
                srcset="${l} 1x, ${d} 2x"
                src="${m}"
                alt="${a} live page screenshot"
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
                href="${t}"
                target="_blank"
                rel="noopener noreferrer"
                >Live page</a
              >
            </div>

            <div class="list-version-heading">
              <p class="project-type">${r}</p>
              <p class="technologies">${_}</p>
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
            data-id="${o}"
          >
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  class="project-card-image"
                  srcset="${l} 1x, ${d} 2x"
                  src="${l}"
                  alt="${a} live page screenshot"
                  width="400"
                  height="250"
                  loading="lazy"
                />
              </div>

              <div class="flip-card-back">
                <h3 class="project-name">${a}</h3>
                <p class="project-type">${r}</p>
                <p class="project-description">${c}</p>
              </div>
            </div>
  </a>

        </div>
      </article>
    </li>
  `},Ee=e=>`
  <ul class="project-card-list list-view">
    ${e.map(o=>qe(o)).join("")}
  </ul>`,He=Ee(z),Ie=document.querySelector("#gallery");Ie.innerHTML=He;const Q=document.querySelector(".projects-view-switch"),C=document.querySelector(".project-card-list");Q.addEventListener("click",Be);C.addEventListener("click",Oe);function Be(){C.classList.toggle("gallery-view");const e=C.classList.contains("gallery-view");Q.innerHTML=`View as ${e?"list":"tiles"}`}function Oe(e){if(e.preventDefault(),!e.target.matches(".project-card-link"))return;const o=e.target.dataset.id;Re(o)}const ze=e=>{if(!e.target.classList.contains("collapsible-toggle"))return;const o=document.querySelectorAll(".project-card"),a=Array.from(o),r=a.find(c=>c.querySelector(".collapsible-toggle").dataset.id===e.target.dataset.id),s=r.querySelector(".collapsible-toggle"),t=r.querySelector(".collapsible"),i=a.find(c=>c===r?!1:c.querySelector(".collapsible-toggle").classList.contains("content-expanded"));if(i){const c=i.querySelector(".collapsible");i.querySelector(".collapsible-toggle").classList.remove("content-expanded"),c.style.maxHeight=null}s.classList.toggle("content-expanded"),t.style.maxHeight?(t.style.maxHeight=null,t.classList.remove("animated")):(t.style.maxHeight=t.scrollHeight+"px",t.classList.add("animated"))},Ae=document.querySelector(".gallery");Ae.addEventListener("click",ze);
