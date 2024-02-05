(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(s){if(s.ep)return;s.ep=!0;const t=a(s);fetch(s.href,t)}})();const F=function(e){const o=`#${e}`,a=`#${e}-title`,r=document.querySelector(o),s=r.querySelector(a),t=r.querySelector(".section-content"),i=s.innerHTML;s.innerHTML="";const c=100;t.style.animationDelay=c*i.length;let n=0;function l(){n<i.length&&(s.innerHTML+=i.charAt(n),n++,setTimeout(l,c))}l()};F("about");const D=document.querySelector(".header"),I=document.querySelectorAll(".header-nav-link"),V=document.querySelectorAll(".section"),G=document.querySelector("main"),{height:K}=D.getBoundingClientRect(),C=`${K}px`;document.body.style.paddingTop=C;document.documentElement.style.scrollPaddingTop=C;G.style.setProperty("--blurOffset",C);I.forEach(e=>{e.addEventListener("click",W)});function W(e){e.preventDefault();const{id:o}=e.target.dataset;V.forEach(a=>{const r=a.id===o;a.style.display=r?"block":"none",r&&F(o)}),I.forEach(a=>{a.classList.remove("active")}),e.target.classList.add("active")}const H=document.querySelector("#color-scheme-switcher-checkbox"),Z=document.querySelector(".color-scheme-switcher-slider");function X(){const e=localStorage.getItem("dark-color-scheme");e&&e!=="false"&&(H.checked=!0)}function B(){const e=document.querySelector("main");e.classList.remove("faded-edges"),H.checked?document.body.classList.add("dark"):document.body.classList.remove("dark");const o=parseFloat(getComputedStyle(document.body).getPropertyValue("transition-duration"))*1e3;setTimeout(()=>{e.classList.add("faded-edges")},o)}function Y(e){localStorage.setItem("dark-color-scheme",e.checked)}function ee(){X(),B(),H.addEventListener("change",te),setTimeout(()=>{Z.classList.add("animated")},100)}function te(e){B(),Y(e.currentTarget)}ee();const se="/about/assets/barber-14d0dc74.webp",oe="/about/assets/barbershop-46b42bde.webp",ae="/about/assets/bookshelf-2b821771.webp",ie="/about/assets/bookshelf_dark-3d63f722.webp",re="/about/assets/britlex-db156075.webp",ce="/about/assets/car-rental-b0bc9ef3.webp",ne="/about/assets/drinkmaster-4aa67b19.webp",le="/about/assets/fighters-74ec193d.webp",pe="/about/assets/icecream-3016d4ec.webp",de="/about/assets/movies-201d44f7.webp",ge="/about/assets/phonebook-417fc357.webp",be="/about/assets/pixabay-e28e8c3a.webp",me="/about/assets/webstudio-9621d582.webp",ue="/about/assets/zenbit-208b3aad.webp",he="/about/assets/barber-acd8c8c4.webp",_e="/about/assets/barbershop-fd8a4289.webp",ve="/about/assets/bookshelf-dd6d5501.webp",fe="/about/assets/bookshelf_dark-6db58418.webp",je="/about/assets/britlex-9a245dde.webp",ke="/about/assets/car-rental-f4b8228a.webp",ye="/about/assets/drinkmaster-cbadb30c.webp",we="/about/assets/fighters-26e8c59f.webp",xe="/about/assets/icecream-4b97558d.webp",Se="/about/assets/movies-c3b76fa2.webp",Le="/about/assets/phonebook-c1615721.webp",$e="/about/assets/pixabay-5a7fc132.webp",Te="/about/assets/webstudio-63580449.webp",Pe="/about/assets/zenbit-5942fa3f.webp",h="/about/assets/barber-8b6e101c.png",_="/about/assets/barbershop-8bcd1350.png",v="/about/assets/bookshelf-49864b6f.png",f="/about/assets/bookshelf_dark-db358684.png",j="/about/assets/britlex-050895a5.png",k="/about/assets/car-rental-b9b4c4bf.png",y="/about/assets/drinkmaster-e4b6c12e.png",w="/about/assets/fighters-1a1c90b8.png",x="/about/assets/icecream-5f5f4caf.png",S="/about/assets/movies-06202e5c.png",L="/about/assets/phonebook-f79ea4be.png",$="/about/assets/pixabay-40cedfd9.png",T="/about/assets/webstudio-33991215.png",P="/about/assets/zenbit-f027c253.png",z=[{id:1,name:"Barber course",link:"https://github.com/dev0652/barber",livePage:"https://barbercourse.kyiv.ua/",thumbFilename:"barber",type:"Commercial project",description:"This is a landing page of an offline barber training course that was taking place in Kyiv. I worked on this project in collaboration with two other developers and a designer.",technologies:["HTML","SaSS","JavaScript","EMailJS","Vite"]},{id:2,name:"Real Estate Deals (ZenBit)",link:"https://github.com/dev0652/zenbit-test",livePage:"https://dev0652.github.io/zenbit-test/",technologies:["HTML","SaSS","React","React Router","Redux","Node.js","MongoDB"],thumbFilename:"zenbit",type:"Test assignment (front end, back end)",description:"This website was my full-stack test assignment for ZenBit Tech. Front end is an MPA built with React (using Create React App tool) and uses React Router for routing and Redux for state management. It also makes use of a few other libraries like React Helmet, React Icons and Notiflix. Back end is built with Node and MongoDB and is hosted on render.com. "},{id:3,name:"Fighters (Binary Academy)",link:"https://github.com/dev0652/fighters-nodejs",livePage:"https://dev0652.github.io/binary-hw-nodejs/",technologies:["HTML","SaSS","JavaScript","React","Node.js"],thumbFilename:"fighters",type:"Test assignment (front end, back end)",description:"This a test assignment I've done for Binary Academy. Although I failed to deliver it on time, I still went on and completed it. The test is a simple, unanimated fighting game built with React and utilizes class components."},{id:4,name:"Bookshelf",link:"https://github.com/dev0652/bookshelf",livePage:"https://dev0652.github.io/bookshelf/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"bookshelf_dark",type:"Study team project",role:"Team leader",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:5,name:"Drink Master",link:"https://github.com/PVO-fullstack/drink_master",livePage:"https://pvo-fullstack.github.io/drink_master/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"drinkmaster",type:"Study team project",role:"Front-end developer",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:6,name:"Car Rental",link:"https://github.com/dev0652/swift-car-rental",livePage:"https://dev0652.github.io/swift-car-rental/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"car-rental",type:"Test assignment",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:7,name:"Phonebook",link:"https://github.com/dev0652/goit-react-hw-08-phonebook",livePage:"https://dev0652.github.io/goit-react-hw-08-phonebook",technologies:["React"],thumbFilename:"phonebook",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:8,name:"Movie database",link:"https://github.com/dev0652/goit-react-hw-05-movies",livePage:"https://dev0652.github.io/goit-react-hw-05-movies",technologies:["React"],thumbFilename:"movies",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:9,name:"Pixabay Image Search",link:"https://github.com/dev0652/pixabay-search",livePage:"https://dev0652.github.io/pixabay-search/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"pixabay",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:10,name:"Ice Cream",link:"https://github.com/dev0652/icecream",livePage:"https://dev0652.github.io/icecream/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"icecream",type:"Study team project",role:"Team leader",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:11,name:"Web studio",link:"https://github.com/dev0652/webstudio",livePage:"https://dev0652.github.io/webstudio/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"webstudio",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:12,name:"Barbershop",link:"https://github.com/dev0652/barbershop",livePage:"https://dev0652.github.io/barbershop/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"barbershop",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:13,name:"Britlex school",link:"https://github.com/dev0652/britlex",livePage:"https://dev0652.github.io/britlex/",technologies:["Grid"],thumbFilename:"britlex",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"}];function Me(e){const{name:o,type:a,link:r,livePage:s,thumbFilename:t,description:i,technologies:c}=e,n=new URL(Object.assign({"../images/projects/large/barber.png":h,"../images/projects/large/barbershop.png":_,"../images/projects/large/bookshelf.png":v,"../images/projects/large/bookshelf_dark.png":f,"../images/projects/large/britlex.png":j,"../images/projects/large/car-rental.png":k,"../images/projects/large/drinkmaster.png":y,"../images/projects/large/fighters.png":w,"../images/projects/large/icecream.png":x,"../images/projects/large/movies.png":S,"../images/projects/large/phonebook.png":L,"../images/projects/large/pixabay.png":$,"../images/projects/large/webstudio.png":T,"../images/projects/large/zenbit.png":P})[`../images/projects/large/${t}.png`],self.location).href,l=new URL(Object.assign({"../images/projects/large/barber.png":h,"../images/projects/large/barbershop.png":_,"../images/projects/large/bookshelf.png":v,"../images/projects/large/bookshelf_dark.png":f,"../images/projects/large/britlex.png":j,"../images/projects/large/car-rental.png":k,"../images/projects/large/drinkmaster.png":y,"../images/projects/large/fighters.png":w,"../images/projects/large/icecream.png":x,"../images/projects/large/movies.png":S,"../images/projects/large/phonebook.png":L,"../images/projects/large/pixabay.png":$,"../images/projects/large/webstudio.png":T,"../images/projects/large/zenbit.png":P})[`../images/projects/large/${t}.png`],self.location).href,m="https://placehold.co/400x250?text=Image+pending",u="https://placehold.co/800x500?text=Image+pending",d=t!==""&&t!==void 0,g=d?n:m,b=d?l:u,p=c.join(", ");return`
      <article class="modal-article">
        <h2 class="modal-title">${o}</h2>

        <div class="modal-content-wrapper">

          <div class="modal-image-block">
            <img
              class="project-card-image"
              srcset="${g} 1x, ${b} 2x"
              src="${g}"
              alt="${o} live page screenshot"
            />
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

          <div class="modal-heading">
            <p class="project-type">${a}</p>
            <p class="technologies">${p}</p>
          </div>

          <div class="modal-description">
            <p class="project-description">${i}</p>
          </div>  
        </div>
      </article>
  `}const q=document.querySelector("[data-pop-up]"),O=document.querySelector("[data-modal-close]"),Ce=document.querySelector(".modal-content-injection-target");function He(e){const o=z.find(a=>a.id===+e);Ce.innerHTML=Me(o),q.classList.remove("is-hidden"),document.body.style.overflow="hidden",O.addEventListener("click",A),document.addEventListener("keydown",U),document.addEventListener("click",N)}function E(){O.removeEventListener("click",A),document.removeEventListener("click",N),document.removeEventListener("keydown",U),q.classList.add("is-hidden"),document.body.style.removeProperty("overflow")}function A(e){E()}function N(e){e.target==q&&E()}function U(e){e.key==="Escape"&&E()}const qe=e=>{const{id:o,name:a,type:r,link:s,livePage:t,thumbFilename:i,description:c,technologies:n}=e,l=new URL(Object.assign({"../images/projects/thumbs/400x250/barber.webp":se,"../images/projects/thumbs/400x250/barbershop.webp":oe,"../images/projects/thumbs/400x250/bookshelf.webp":ae,"../images/projects/thumbs/400x250/bookshelf_dark.webp":ie,"../images/projects/thumbs/400x250/britlex.webp":re,"../images/projects/thumbs/400x250/car-rental.webp":ce,"../images/projects/thumbs/400x250/drinkmaster.webp":ne,"../images/projects/thumbs/400x250/fighters.webp":le,"../images/projects/thumbs/400x250/icecream.webp":pe,"../images/projects/thumbs/400x250/movies.webp":de,"../images/projects/thumbs/400x250/phonebook.webp":ge,"../images/projects/thumbs/400x250/pixabay.webp":be,"../images/projects/thumbs/400x250/webstudio.webp":me,"../images/projects/thumbs/400x250/zenbit.webp":ue})[`../images/projects/thumbs/400x250/${i}.webp`],self.location).href,m=new URL(Object.assign({"../images/projects/thumbs/800x500/barber.webp":he,"../images/projects/thumbs/800x500/barbershop.webp":_e,"../images/projects/thumbs/800x500/bookshelf.webp":ve,"../images/projects/thumbs/800x500/bookshelf_dark.webp":fe,"../images/projects/thumbs/800x500/britlex.webp":je,"../images/projects/thumbs/800x500/car-rental.webp":ke,"../images/projects/thumbs/800x500/drinkmaster.webp":ye,"../images/projects/thumbs/800x500/fighters.webp":we,"../images/projects/thumbs/800x500/icecream.webp":xe,"../images/projects/thumbs/800x500/movies.webp":Se,"../images/projects/thumbs/800x500/phonebook.webp":Le,"../images/projects/thumbs/800x500/pixabay.webp":$e,"../images/projects/thumbs/800x500/webstudio.webp":Te,"../images/projects/thumbs/800x500/zenbit.webp":Pe})[`../images/projects/thumbs/800x500/${i}.webp`],self.location).href,u=new URL(Object.assign({"../images/projects/large/barber.png":h,"../images/projects/large/barbershop.png":_,"../images/projects/large/bookshelf.png":v,"../images/projects/large/bookshelf_dark.png":f,"../images/projects/large/britlex.png":j,"../images/projects/large/car-rental.png":k,"../images/projects/large/drinkmaster.png":y,"../images/projects/large/fighters.png":w,"../images/projects/large/icecream.png":x,"../images/projects/large/movies.png":S,"../images/projects/large/phonebook.png":L,"../images/projects/large/pixabay.png":$,"../images/projects/large/webstudio.png":T,"../images/projects/large/zenbit.png":P})[`../images/projects/large/${i}.png`],self.location).href,d="https://placehold.co/400x250?text=Image+pending",g="https://placehold.co/800x500?text=Image+pending",b=i!==""&&i!==void 0,p=b?l:d,R=b?m:g,Q=n.join(", ");return`
    <li class="project-card">
      <article class="fade-in">
        <h2 class="card-title collapsible-toggle" data-id="${a}">${a}</h2>

        <div class="list-version collapsible">
          <div class="list-version-wrapper">
            <div class="list-version-image-block">
              <img
                class="project-card-image"
                srcset="${p} 1x, ${R} 2x"
                src="${u}"
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
              <p class="technologies">${Q}</p>
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
                  srcset="${p} 1x, ${R} 2x"
                  src="${p}"
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
  </ul>`,Re=Ee(z),Fe=document.querySelector("#gallery");Fe.innerHTML=Re;const J=document.querySelector(".projects-view-switch"),M=document.querySelector(".project-card-list");J.addEventListener("click",Ie);M.addEventListener("click",Be);function Ie(){M.classList.toggle("gallery-view");const e=M.classList.contains("gallery-view");J.innerHTML=`View as ${e?"list":"tiles"}`}function Be(e){if(e.preventDefault(),!e.target.matches(".project-card-link"))return;const o=e.target.dataset.id;He(o)}const ze=e=>{if(!e.target.classList.contains("collapsible-toggle"))return;const o=document.querySelectorAll(".project-card"),a=Array.from(o),r=a.find(c=>c.querySelector(".collapsible-toggle").dataset.id===e.target.dataset.id),s=r.querySelector(".collapsible-toggle"),t=r.querySelector(".collapsible"),i=a.find(c=>c===r?!1:c.querySelector(".collapsible-toggle").classList.contains("content-expanded"));if(i){const c=i.querySelector(".collapsible");i.querySelector(".collapsible-toggle").classList.remove("content-expanded"),c.style.maxHeight=null}s.classList.toggle("content-expanded"),t.style.maxHeight?(t.style.maxHeight=null,t.classList.remove("animated")):(t.style.maxHeight=t.scrollHeight+"px",t.classList.add("animated"))},Oe=document.querySelector(".gallery");Oe.addEventListener("click",ze);
