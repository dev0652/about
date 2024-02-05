(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(s){if(s.ep)return;s.ep=!0;const t=a(s);fetch(s.href,t)}})();const h=function(e){const o=`#${e}`,a=`#${e}-title`,i=document.querySelector(o),s=i.querySelector(a),t=i.querySelector(".section-content"),r=s.innerHTML;s.innerHTML="";const c=100;t.style.animationDelay=c*r.length;let n=0;function l(){n<r.length&&(s.innerHTML+=r.charAt(n),n++,setTimeout(l,c))}l()};h("about");const j=document.querySelector(".header"),_=document.querySelectorAll(".header-nav-link"),x=document.querySelectorAll(".section"),L=document.querySelector("main"),{height:T}=j.getBoundingClientRect(),p=`${T}px`;document.body.style.paddingTop=p;document.documentElement.style.scrollPaddingTop=p;L.style.setProperty("--topOffset",p);_.forEach(e=>{e.addEventListener("click",P)});function P(e){e.preventDefault();const{id:o}=e.target.dataset;x.forEach(a=>{const i=a.id===o;a.style.display=i?"block":"none",i&&h(o)}),_.forEach(a=>{a.classList.remove("active")}),e.target.classList.add("active")}const d=document.querySelector("#color-scheme-switcher-checkbox"),$=document.querySelector(".color-scheme-switcher-slider");function M(){const e=localStorage.getItem("dark-color-scheme");e&&e!=="false"&&(d.checked=!0)}function v(){const e=document.querySelector("main");e.classList.remove("faded-edges"),d.checked?document.body.classList.add("dark"):document.body.classList.remove("dark");const o=parseFloat(getComputedStyle(document.body).getPropertyValue("transition-duration"))*1e3;setTimeout(()=>{e.classList.add("faded-edges")},o)}function H(e){localStorage.setItem("dark-color-scheme",e.checked)}function C(){M(),v(),d.addEventListener("change",q),setTimeout(()=>{$.classList.add("animated")},100)}function q(e){v(),H(e.currentTarget)}C();const R="/about/assets/barber-14d0dc74.webp",F="/about/assets/barbershop-46b42bde.webp",I="/about/assets/bookshelf-2b821771.webp",E="/about/assets/bookshelf_dark-3d63f722.webp",z="/about/assets/britlex-db156075.webp",B="/about/assets/car-rental-b0bc9ef3.webp",A="/about/assets/drinkmaster-4aa67b19.webp",N="/about/assets/fighters-74ec193d.webp",O="/about/assets/icecream-3016d4ec.webp",J="/about/assets/movies-201d44f7.webp",Q="/about/assets/phonebook-417fc357.webp",D="/about/assets/pixabay-e28e8c3a.webp",U="/about/assets/webstudio-9621d582.webp",V="/about/assets/zenbit-208b3aad.webp",G="/about/assets/barber-acd8c8c4.webp",K="/about/assets/barbershop-fd8a4289.webp",W="/about/assets/bookshelf-dd6d5501.webp",Z="/about/assets/bookshelf_dark-6db58418.webp",X="/about/assets/britlex-9a245dde.webp",Y="/about/assets/car-rental-f4b8228a.webp",ee="/about/assets/drinkmaster-cbadb30c.webp",te="/about/assets/fighters-26e8c59f.webp",se="/about/assets/icecream-4b97558d.webp",oe="/about/assets/movies-c3b76fa2.webp",ie="/about/assets/phonebook-c1615721.webp",ae="/about/assets/pixabay-5a7fc132.webp",re="/about/assets/webstudio-63580449.webp",ce="/about/assets/zenbit-5942fa3f.webp",ne="/about/assets/barber-8b6e101c.png",le="/about/assets/barbershop-8bcd1350.png",be="/about/assets/bookshelf-49864b6f.png",pe="/about/assets/bookshelf_dark-db358684.png",de="/about/assets/britlex-050895a5.png",ge="/about/assets/car-rental-b9b4c4bf.png",me="/about/assets/drinkmaster-e4b6c12e.png",ue="/about/assets/fighters-1a1c90b8.png",he="/about/assets/icecream-5f5f4caf.png",_e="/about/assets/movies-06202e5c.png",ve="/about/assets/phonebook-f79ea4be.png",fe="/about/assets/pixabay-40cedfd9.png",we="/about/assets/webstudio-33991215.png",ye="/about/assets/zenbit-f027c253.png",ke=[{name:"Barber course",link:"https://github.com/dev0652/barber",livePage:"https://barbercourse.kyiv.ua/",thumbFilename:"barber",type:"Commercial project",description:"This is a landing page of an offline barber training course that was taking place in Kyiv. I worked on this project in collaboration with two other developers and a designer.",technologies:["HTML","SaSS","JavaScript","EMailJS","Vite"]},{name:"Real Estate Deals (ZenBit)",link:"https://github.com/dev0652/zenbit-test",livePage:"https://dev0652.github.io/zenbit-test/",technologies:["HTML","SaSS","React","React Router","Redux","Node.js","MongoDB"],thumbFilename:"zenbit",type:"Test assignment (front end, back end)",description:"This website was my full-stack test assignment for ZenBit Tech. Front end is an MPA built with React (using Create React App tool) and uses React Router for routing and Redux for state management. It also makes use of a few other libraries like React Helmet, React Icons and Notiflix. Back end is built with Node and MongoDB and is hosted on render.com. "},{name:"Fighters (Binary Academy)",link:"https://github.com/dev0652/fighters-nodejs",livePage:"https://dev0652.github.io/binary-hw-nodejs/",technologies:["HTML","SaSS","JavaScript","React","Node.js"],thumbFilename:"fighters",type:"Test assignment (front end, back end)",description:"This a test assignment I've done for Binary Academy. Although I failed to deliver it on time, I still went on and completed it. The test is a simple, unanimated fighting game built with React and utilizes class components."},{name:"Bookshelf",link:"https://github.com/dev0652/bookshelf",livePage:"https://dev0652.github.io/bookshelf/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"bookshelf_dark",type:"Study team project",role:"Team leader",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Drink Master",link:"https://github.com/PVO-fullstack/drink_master",livePage:"https://pvo-fullstack.github.io/drink_master/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"drinkmaster",type:"Study team project",role:"Front-end developer",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Car Rental",link:"https://github.com/dev0652/swift-car-rental",livePage:"https://dev0652.github.io/swift-car-rental/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"car-rental",type:"Test assignment",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Phonebook",link:"https://github.com/dev0652/goit-react-hw-08-phonebook",livePage:"https://dev0652.github.io/goit-react-hw-08-phonebook",technologies:["React"],thumbFilename:"phonebook",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Movie database",link:"https://github.com/dev0652/goit-react-hw-05-movies",livePage:"https://dev0652.github.io/goit-react-hw-05-movies",technologies:["React"],thumbFilename:"movies",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Pixabay Image Search",link:"https://github.com/dev0652/pixabay-search",livePage:"https://dev0652.github.io/pixabay-search/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"pixabay",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Ice Cream",link:"https://github.com/dev0652/icecream",livePage:"https://dev0652.github.io/icecream/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"icecream",type:"Study team project",role:"Team leader",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Web studio",link:"https://github.com/dev0652/webstudio",livePage:"https://dev0652.github.io/webstudio/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"webstudio",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Barbershop",link:"https://github.com/dev0652/barbershop",livePage:"https://dev0652.github.io/barbershop/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"barbershop",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Britlex school",link:"https://github.com/dev0652/britlex",livePage:"https://dev0652.github.io/britlex/",technologies:["Grid"],thumbFilename:"britlex",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"}],Se=e=>{const{name:o,type:a,link:i,livePage:s,thumbFilename:t,description:r,technologies:c}=e,n=new URL(Object.assign({"../images/projects/thumbs/400x250/barber.webp":R,"../images/projects/thumbs/400x250/barbershop.webp":F,"../images/projects/thumbs/400x250/bookshelf.webp":I,"../images/projects/thumbs/400x250/bookshelf_dark.webp":E,"../images/projects/thumbs/400x250/britlex.webp":z,"../images/projects/thumbs/400x250/car-rental.webp":B,"../images/projects/thumbs/400x250/drinkmaster.webp":A,"../images/projects/thumbs/400x250/fighters.webp":N,"../images/projects/thumbs/400x250/icecream.webp":O,"../images/projects/thumbs/400x250/movies.webp":J,"../images/projects/thumbs/400x250/phonebook.webp":Q,"../images/projects/thumbs/400x250/pixabay.webp":D,"../images/projects/thumbs/400x250/webstudio.webp":U,"../images/projects/thumbs/400x250/zenbit.webp":V})[`../images/projects/thumbs/400x250/${t}.webp`],self.location).href,l=new URL(Object.assign({"../images/projects/thumbs/800x500/barber.webp":G,"../images/projects/thumbs/800x500/barbershop.webp":K,"../images/projects/thumbs/800x500/bookshelf.webp":W,"../images/projects/thumbs/800x500/bookshelf_dark.webp":Z,"../images/projects/thumbs/800x500/britlex.webp":X,"../images/projects/thumbs/800x500/car-rental.webp":Y,"../images/projects/thumbs/800x500/drinkmaster.webp":ee,"../images/projects/thumbs/800x500/fighters.webp":te,"../images/projects/thumbs/800x500/icecream.webp":se,"../images/projects/thumbs/800x500/movies.webp":oe,"../images/projects/thumbs/800x500/phonebook.webp":ie,"../images/projects/thumbs/800x500/pixabay.webp":ae,"../images/projects/thumbs/800x500/webstudio.webp":re,"../images/projects/thumbs/800x500/zenbit.webp":ce})[`../images/projects/thumbs/800x500/${t}.webp`],self.location).href,w=new URL(Object.assign({"../images/projects/large/barber.png":ne,"../images/projects/large/barbershop.png":le,"../images/projects/large/bookshelf.png":be,"../images/projects/large/bookshelf_dark.png":pe,"../images/projects/large/britlex.png":de,"../images/projects/large/car-rental.png":ge,"../images/projects/large/drinkmaster.png":me,"../images/projects/large/fighters.png":ue,"../images/projects/large/icecream.png":he,"../images/projects/large/movies.png":_e,"../images/projects/large/phonebook.png":ve,"../images/projects/large/pixabay.png":fe,"../images/projects/large/webstudio.png":we,"../images/projects/large/zenbit.png":ye})[`../images/projects/large/${t}.png`],self.location).href,y="https://placehold.co/400x250?text=Image+pending",k="https://placehold.co/800x500?text=Image+pending",g=t!==""&&t!==void 0,b=g?n:y,m=g?l:k,S=c.join(", ");return`
    <li class="project-card">
      <article class="fade-in">
        <h2 class="card-title collapsible-toggle" data-id="${o}">${o}</h2>

        <div class="list-version collapsible">
          <div class="list-version-wrapper">
            <div class="list-version-image-block">
              <img
                class="project-card-image"
                srcset="${b} 1x, ${m} 2x"
                src="${w}"
                alt="${o} live page screenshot"
                loading="lazy"
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
                href="${s}"
                target="_blank"
                rel="noopener noreferrer"
                >Live page</a
              >
            </div>

            <div class="list-version-heading">
              <p class="project-type">${a}</p>
              <p class="technologies">${S}</p>
            </div>

            <div class="list-version-description">
              <p class="project-description">${r}</p>
            </div>  

          </div>
        </div>

        <div class="gallery-version">
          <a
            class="project-card-link flip-card"
            href="${i}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  class="project-card-image"
                  srcset="${b} 1x, ${m} 2x"
                  src="${b}"
                  alt="${o} live page screenshot"
                  width="400"
                  height="250"
                  loading="lazy"
                />
              </div>

              <div class="flip-card-back">
                <h3 class="project-name">${o}</h3>
                <p class="project-type">${a}</p>
                <p class="project-description">${r}</p>
              </div>
            </div>
          </a>
        </div>
      </article>
    </li>
  `},je=e=>`
  <ul class="project-card-list list-view">
    ${e.map(o=>Se(o)).join("")}
  </ul>`,xe=je(ke),Le=document.querySelector("#gallery");Le.innerHTML=xe;const f=document.querySelector(".projects-view-switch"),u=document.querySelector(".project-card-list");f.addEventListener("click",Te);function Te(){u.classList.toggle("gallery-view");const e=u.classList.contains("gallery-view");f.innerHTML=`Switch to ${e?"list":"gallery"}`}const Pe=e=>{if(!e.target.classList.contains("collapsible-toggle"))return;const o=document.querySelectorAll(".project-card"),a=Array.from(o),i=a.find(c=>c.querySelector(".collapsible-toggle").dataset.id===e.target.dataset.id),s=i.querySelector(".collapsible-toggle"),t=i.querySelector(".collapsible"),r=a.find(c=>c===i?!1:c.querySelector(".collapsible-toggle").classList.contains("content-expanded"));if(r){const c=r.querySelector(".collapsible");r.querySelector(".collapsible-toggle").classList.remove("content-expanded"),c.style.maxHeight=null}s.classList.toggle("content-expanded"),t.style.maxHeight?(t.style.maxHeight=null,t.classList.remove("animated")):(t.style.maxHeight=t.scrollHeight+"px",t.classList.add("animated"))},$e=document.querySelector(".gallery");$e.addEventListener("click",Pe);
