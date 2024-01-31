(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const _=function(e){const s=`#${e}`,i=`#${e}-title`,a=document.querySelector(s),t=a.querySelector(i),o=a.querySelector(".section-content"),c=t.innerHTML;t.innerHTML="";const r=100;o.style.animationDelay=r*c.length;let l=0;function n(){l<c.length&&(t.innerHTML+=c.charAt(l),l+=1,setTimeout(n,r))}n()};_("about");const w=document.querySelector(".header"),v=document.querySelectorAll(".header-nav-link"),x=document.querySelectorAll(".section"),k=document.querySelector("main"),{height:j}=w.getBoundingClientRect(),d=`${j}px`;document.body.style.paddingTop=d;document.documentElement.style.scrollPaddingTop=d;k.style.setProperty("--topOffset",d);v.forEach(e=>{e.addEventListener("click",L)});function L(e){e.preventDefault();const{id:s}=e.target.dataset;x.forEach(i=>{const a=i.id===s;i.style.display=a?"block":"none",a&&_(s)}),v.forEach(i=>{i.classList.remove("active")}),e.target.classList.add("active")}const p=document.querySelector("#color-scheme-switcher-checkbox"),S=document.querySelector(".color-scheme-switcher-slider");function $(){const e=localStorage.getItem("dark-color-scheme");e&&e!=="false"&&(p.checked=!0)}function f(){const e=document.querySelector("main");e.classList.remove("faded-edges"),p.checked?document.body.classList.add("dark"):document.body.classList.remove("dark");const s=parseFloat(getComputedStyle(document.body).getPropertyValue("transition-duration"))*1e3;setTimeout(()=>{e.classList.add("faded-edges")},s)}function P(e){localStorage.setItem("dark-color-scheme",e.checked)}function q(){$(),f(),p.addEventListener("change",C),setTimeout(()=>{S.classList.add("animated")},100)}function C(e){f(),P(e.currentTarget)}q();const T="/about/assets/barber-14d0dc74.webp",F="/about/assets/barbershop-46b42bde.webp",E="/about/assets/bookshelf-2b821771.webp",Q="/about/assets/bookshelf_dark-3d63f722.webp",H="/about/assets/britlex-db156075.webp",M="/about/assets/car-rental-b0bc9ef3.webp",I="/about/assets/drinkmaster-4aa67b19.webp",O="/about/assets/fighters-74ec193d.webp",z="/about/assets/icecream-3016d4ec.webp",R="/about/assets/movies-201d44f7.webp",A="/about/assets/phonebook-417fc357.webp",B="/about/assets/pixabay-e28e8c3a.webp",N="/about/assets/webstudio-9621d582.webp",D="/about/assets/zenbit-208b3aad.webp",U="/about/assets/barber-acd8c8c4.webp",V="/about/assets/barbershop-fd8a4289.webp",G="/about/assets/bookshelf-dd6d5501.webp",W="/about/assets/bookshelf_dark-6db58418.webp",K="/about/assets/britlex-9a245dde.webp",Z="/about/assets/car-rental-f4b8228a.webp",J="/about/assets/drinkmaster-cbadb30c.webp",X="/about/assets/fighters-26e8c59f.webp",Y="/about/assets/icecream-4b97558d.webp",ee="/about/assets/movies-c3b76fa2.webp",te="/about/assets/phonebook-c1615721.webp",se="/about/assets/pixabay-5a7fc132.webp",oe="/about/assets/webstudio-63580449.webp",ie="/about/assets/zenbit-5942fa3f.webp",ae=[{name:"Barber course",link:"https://github.com/dev0652/barber",livePage:"https://dev0652.github.io/barber/",technologies:[],thumbFilename:"barber",type:"Commercial project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Real Estate Deals (ZenBit)",link:"https://github.com/dev0652/zenbit-test",livePage:"https://dev0652.github.io/zenbit-test/",technologies:[],thumbFilename:"zenbit",type:"Test",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Fighters (Binary Academy)",link:"https://github.com/dev0652/fighters-nodejs",livePage:"https://dev0652.github.io/binary-hw-nodejs/",technologies:[],thumbFilename:"fighters",type:"Test",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Bookshelf",link:"https://github.com/dev0652/bookshelf",livePage:"https://dev0652.github.io/bookshelf/",technologies:[],thumbFilename:"bookshelf_dark",type:"Study team project",role:"Team leader",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Drink Master",link:"https://github.com/PVO-fullstack/drink_master",livePage:"https://pvo-fullstack.github.io/drink_master/",technologies:[],thumbFilename:"drinkmaster",type:"Study team project",role:"Front-end developer",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Car Rental",link:"https://github.com/dev0652/swift-car-rental",livePage:"https://dev0652.github.io/swift-car-rental/",technologies:[],thumbFilename:"car-rental",type:"Test",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Phonebook",link:"https://github.com/dev0652/goit-react-hw-08-phonebook",livePage:"https://dev0652.github.io/goit-react-hw-08-phonebook",technologies:["React"],thumbFilename:"phonebook",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Movie database",link:"https://github.com/dev0652/goit-react-hw-05-movies",livePage:"https://dev0652.github.io/goit-react-hw-05-movies",technologies:["React"],thumbFilename:"movies",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Pixabay Image Search",link:"https://github.com/dev0652/pixabay-search",livePage:"https://dev0652.github.io/pixabay-search/",technologies:[],thumbFilename:"pixabay",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Ice Cream",link:"https://github.com/dev0652/icecream",livePage:"https://dev0652.github.io/icecream/",technologies:[],thumbFilename:"icecream",type:"Study team project",role:"Team leader",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Web studio",link:"https://github.com/dev0652/webstudio",livePage:"https://dev0652.github.io/webstudio/",technologies:[],thumbFilename:"webstudio",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Barbershop",link:"https://github.com/dev0652/barbershop",livePage:"https://dev0652.github.io/barbershop/",technologies:[],thumbFilename:"barbershop",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Britlex school",link:"https://github.com/dev0652/britlex",livePage:"https://dev0652.github.io/britlex/",technologies:["Grid"],thumbFilename:"britlex",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"}],h=({currentTarget:e})=>{e.onerror=null,e.src="https://placehold.co/400"},ce=e=>{const{name:s,type:i,link:a,thumbFilename:t,description:o}=e,c=new URL(Object.assign({"../images/projects/thumbs/400x250/barber.webp":T,"../images/projects/thumbs/400x250/barbershop.webp":F,"../images/projects/thumbs/400x250/bookshelf.webp":E,"../images/projects/thumbs/400x250/bookshelf_dark.webp":Q,"../images/projects/thumbs/400x250/britlex.webp":H,"../images/projects/thumbs/400x250/car-rental.webp":M,"../images/projects/thumbs/400x250/drinkmaster.webp":I,"../images/projects/thumbs/400x250/fighters.webp":O,"../images/projects/thumbs/400x250/icecream.webp":z,"../images/projects/thumbs/400x250/movies.webp":R,"../images/projects/thumbs/400x250/phonebook.webp":A,"../images/projects/thumbs/400x250/pixabay.webp":B,"../images/projects/thumbs/400x250/webstudio.webp":N,"../images/projects/thumbs/400x250/zenbit.webp":D})[`../images/projects/thumbs/400x250/${t}.webp`],self.location).href,r=new URL(Object.assign({"../images/projects/thumbs/800x500/barber.webp":U,"../images/projects/thumbs/800x500/barbershop.webp":V,"../images/projects/thumbs/800x500/bookshelf.webp":G,"../images/projects/thumbs/800x500/bookshelf_dark.webp":W,"../images/projects/thumbs/800x500/britlex.webp":K,"../images/projects/thumbs/800x500/car-rental.webp":Z,"../images/projects/thumbs/800x500/drinkmaster.webp":J,"../images/projects/thumbs/800x500/fighters.webp":X,"../images/projects/thumbs/800x500/icecream.webp":Y,"../images/projects/thumbs/800x500/movies.webp":ee,"../images/projects/thumbs/800x500/phonebook.webp":te,"../images/projects/thumbs/800x500/pixabay.webp":se,"../images/projects/thumbs/800x500/webstudio.webp":oe,"../images/projects/thumbs/800x500/zenbit.webp":ie})[`../images/projects/thumbs/800x500/${t}.webp`],self.location).href,l="https://placehold.co/400x250?text=Image+pending",n="https://placehold.co/800x500?text=Image+pending",u=t!=="",b=u?c:l,m=u?r:n;return`
  <li class="project-card">
    <article class="fade-in">
      <h2 class="card-title collapsible-toggle" data-id="${s}">${s}</h2>

      <div class="list-content collapsible">
        <div class="list-content-meta">
          <h3 class="project-name">${s}</h3>
          <p class="project-type">${i}</p>
          <p class="project-description">${o}</p>

          <button type="button" class="project-card-button">View more</button>
        </div>

        <div class="list-content-image">
          <img
                  class="project-card-image"
                  srcset="${b} 1x, ${m} 2x"
                  src="${b}"
                  alt="${s} live page screenshot"
                  width="400"
                  height="250"
                  loading="lazy"
                  onError="${h}"
                />
        </div>
      </div>

      <div class="gallery-content">
        <a
          class="project-card-link flip-card"
          href="${a}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                class="project-card-image"
                srcset="${b} 1x, ${m} 2x"
                src="${b}"
                alt="${s} live page screenshot"
                width="400"
                height="250"
                loading="lazy"
                onError="${h}"
              />
            </div>

            <div class="flip-card-back">
              <h3 class="project-name">${s}</h3>
              <p class="project-type">${i}</p>
              <p class="project-description">${o}</p>
            </div>
          </div>
        </a>
      </div>
    </article>
  </li>
  `},re=e=>`
  <ul class="project-card-list list-view">
    ${e.map(s=>ce(s)).join("")}
  </ul>`,le=re(ae),ne=document.querySelector("#gallery");ne.innerHTML=le;const y=document.querySelector(".projects-view-switch"),g=document.querySelector(".project-card-list");y.addEventListener("click",be);function be(){g.classList.toggle("gallery-view");const e=g.classList.contains("gallery-view");y.innerHTML=`Switch to ${e?"list":"gallery"}`}const de=e=>{if(!e.target.classList.contains("collapsible-toggle"))return;const s=document.querySelectorAll(".project-card"),i=Array.from(s),a=i.find(r=>r.querySelector(".collapsible-toggle").dataset.id===e.target.dataset.id),t=a.querySelector(".collapsible-toggle"),o=a.querySelector(".collapsible"),c=i.find(r=>r===a?!1:r.querySelector(".collapsible-toggle").classList.contains("content-expanded"));if(c){const r=c.querySelector(".collapsible");c.querySelector(".collapsible-toggle").classList.remove("content-expanded"),r.style.maxHeight=null}t.classList.toggle("content-expanded"),o.style.maxHeight?o.style.maxHeight=null:o.style.maxHeight=o.scrollHeight+"px"},pe=document.querySelector(".gallery");pe.addEventListener("click",de);
