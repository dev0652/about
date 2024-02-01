(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const h=function(e){const o=`#${e}`,i=`#${e}-title`,a=document.querySelector(o),t=a.querySelector(i),s=a.querySelector(".section-content"),c=t.innerHTML;t.innerHTML="";const r=100;s.style.animationDelay=r*c.length;let n=0;function l(){n<c.length&&(t.innerHTML+=c.charAt(n),n+=1,setTimeout(l,r))}l()};h("about");const S=document.querySelector(".header"),g=document.querySelectorAll(".header-nav-link"),k=document.querySelectorAll(".section"),x=document.querySelector("main"),{height:j}=S.getBoundingClientRect(),d=`${j}px`;document.body.style.paddingTop=d;document.documentElement.style.scrollPaddingTop=d;x.style.setProperty("--topOffset",d);g.forEach(e=>{e.addEventListener("click",L)});function L(e){e.preventDefault();const{id:o}=e.target.dataset;k.forEach(i=>{const a=i.id===o;i.style.display=a?"block":"none",a&&h(o)}),g.forEach(i=>{i.classList.remove("active")}),e.target.classList.add("active")}const b=document.querySelector("#color-scheme-switcher-checkbox"),T=document.querySelector(".color-scheme-switcher-slider");function M(){const e=localStorage.getItem("dark-color-scheme");e&&e!=="false"&&(b.checked=!0)}function _(){const e=document.querySelector("main");e.classList.remove("faded-edges"),b.checked?document.body.classList.add("dark"):document.body.classList.remove("dark");const o=parseFloat(getComputedStyle(document.body).getPropertyValue("transition-duration"))*1e3;setTimeout(()=>{e.classList.add("faded-edges")},o)}function P(e){localStorage.setItem("dark-color-scheme",e.checked)}function C(){M(),_(),b.addEventListener("change",H),setTimeout(()=>{T.classList.add("animated")},100)}function H(e){_(),P(e.currentTarget)}C();const q="/about/assets/barber-14d0dc74.webp",R="/about/assets/barbershop-46b42bde.webp",$="/about/assets/bookshelf-2b821771.webp",F="/about/assets/bookshelf_dark-3d63f722.webp",I="/about/assets/britlex-db156075.webp",E="/about/assets/car-rental-b0bc9ef3.webp",B="/about/assets/drinkmaster-4aa67b19.webp",A="/about/assets/fighters-74ec193d.webp",N="/about/assets/icecream-3016d4ec.webp",J="/about/assets/movies-201d44f7.webp",O="/about/assets/phonebook-417fc357.webp",Q="/about/assets/pixabay-e28e8c3a.webp",z="/about/assets/webstudio-9621d582.webp",D="/about/assets/zenbit-208b3aad.webp",V="/about/assets/barber-acd8c8c4.webp",U="/about/assets/barbershop-fd8a4289.webp",G="/about/assets/bookshelf-dd6d5501.webp",K="/about/assets/bookshelf_dark-6db58418.webp",W="/about/assets/britlex-9a245dde.webp",Z="/about/assets/car-rental-f4b8228a.webp",X="/about/assets/drinkmaster-cbadb30c.webp",Y="/about/assets/fighters-26e8c59f.webp",ee="/about/assets/icecream-4b97558d.webp",te="/about/assets/movies-c3b76fa2.webp",se="/about/assets/phonebook-c1615721.webp",oe="/about/assets/pixabay-5a7fc132.webp",ie="/about/assets/webstudio-63580449.webp",ae="/about/assets/zenbit-5942fa3f.webp",ce=[{name:"Barber course",link:"https://github.com/dev0652/barber",livePage:"https://barbercourse.kyiv.ua/",thumbFilename:"barber",type:"Commercial project",description:"This is a landing page of an offline barber training course that was taking place in Kyiv. I worked on this project in collaboration with two other developers and a designer.",technologies:["HTML","SaSS","JavaScript","EMailJS","Vite"]},{name:"Real Estate Deals (ZenBit)",link:"https://github.com/dev0652/zenbit-test",livePage:"https://dev0652.github.io/zenbit-test/",technologies:["HTML","SaSS","React","React Router","Redux","Node.js","MongoDB"],thumbFilename:"zenbit",type:"Test",description:"This website was my full-stack test assignment for ZenBit Tech. Front end is an MPA built with React (using Create React App tool) and uses React Router for routing and Redux for state management. It also makes use of a few other libraries like React Helmet, React Icons and Notiflix. Back end is built with Node and MongoDB and is hosted on render.com. "},{name:"Fighters (Binary Academy)",link:"https://github.com/dev0652/fighters-nodejs",livePage:"https://dev0652.github.io/binary-hw-nodejs/",technologies:["HTML","SaSS","JavaScript","React","Node.js"],thumbFilename:"fighters",type:"Test (front end, back end)",description:"This a test assignment I've done for Binary Academy. Although I failed to deliver it on time, I still went on and completed it. The test is a simple, unanimated fighting game built with React and utilizes class components."},{name:"Bookshelf",link:"https://github.com/dev0652/bookshelf",livePage:"https://dev0652.github.io/bookshelf/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"bookshelf_dark",type:"Study team project",role:"Team leader",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Drink Master",link:"https://github.com/PVO-fullstack/drink_master",livePage:"https://pvo-fullstack.github.io/drink_master/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"drinkmaster",type:"Study team project",role:"Front-end developer",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Car Rental",link:"https://github.com/dev0652/swift-car-rental",livePage:"https://dev0652.github.io/swift-car-rental/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"car-rental",type:"Test",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Phonebook",link:"https://github.com/dev0652/goit-react-hw-08-phonebook",livePage:"https://dev0652.github.io/goit-react-hw-08-phonebook",technologies:["React"],thumbFilename:"phonebook",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Movie database",link:"https://github.com/dev0652/goit-react-hw-05-movies",livePage:"https://dev0652.github.io/goit-react-hw-05-movies",technologies:["React"],thumbFilename:"movies",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Pixabay Image Search",link:"https://github.com/dev0652/pixabay-search",livePage:"https://dev0652.github.io/pixabay-search/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"pixabay",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Ice Cream",link:"https://github.com/dev0652/icecream",livePage:"https://dev0652.github.io/icecream/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"icecream",type:"Study team project",role:"Team leader",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Web studio",link:"https://github.com/dev0652/webstudio",livePage:"https://dev0652.github.io/webstudio/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"webstudio",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Barbershop",link:"https://github.com/dev0652/barbershop",livePage:"https://dev0652.github.io/barbershop/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"barbershop",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Britlex school",link:"https://github.com/dev0652/britlex",livePage:"https://dev0652.github.io/britlex/",technologies:["Grid"],thumbFilename:"britlex",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"}],re=({currentTarget:e})=>{e.onerror=null,e.src="https://placehold.co/400"},ne=e=>{const{name:o,type:i,link:a,thumbFilename:t,description:s,technologies:c}=e,r=new URL(Object.assign({"../images/projects/thumbs/400x250/barber.webp":q,"../images/projects/thumbs/400x250/barbershop.webp":R,"../images/projects/thumbs/400x250/bookshelf.webp":$,"../images/projects/thumbs/400x250/bookshelf_dark.webp":F,"../images/projects/thumbs/400x250/britlex.webp":I,"../images/projects/thumbs/400x250/car-rental.webp":E,"../images/projects/thumbs/400x250/drinkmaster.webp":B,"../images/projects/thumbs/400x250/fighters.webp":A,"../images/projects/thumbs/400x250/icecream.webp":N,"../images/projects/thumbs/400x250/movies.webp":J,"../images/projects/thumbs/400x250/phonebook.webp":O,"../images/projects/thumbs/400x250/pixabay.webp":Q,"../images/projects/thumbs/400x250/webstudio.webp":z,"../images/projects/thumbs/400x250/zenbit.webp":D})[`../images/projects/thumbs/400x250/${t}.webp`],self.location).href,n=new URL(Object.assign({"../images/projects/thumbs/800x500/barber.webp":V,"../images/projects/thumbs/800x500/barbershop.webp":U,"../images/projects/thumbs/800x500/bookshelf.webp":G,"../images/projects/thumbs/800x500/bookshelf_dark.webp":K,"../images/projects/thumbs/800x500/britlex.webp":W,"../images/projects/thumbs/800x500/car-rental.webp":Z,"../images/projects/thumbs/800x500/drinkmaster.webp":X,"../images/projects/thumbs/800x500/fighters.webp":Y,"../images/projects/thumbs/800x500/icecream.webp":ee,"../images/projects/thumbs/800x500/movies.webp":te,"../images/projects/thumbs/800x500/phonebook.webp":se,"../images/projects/thumbs/800x500/pixabay.webp":oe,"../images/projects/thumbs/800x500/webstudio.webp":ie,"../images/projects/thumbs/800x500/zenbit.webp":ae})[`../images/projects/thumbs/800x500/${t}.webp`],self.location).href,l="https://placehold.co/400x250?text=Image+pending",f="https://placehold.co/800x500?text=Image+pending",p=t!=="",u=p?r:l,w=p?n:f,y=c.join(", ");return`
  <li class="project-card">
    <article class="fade-in">
      <h2 class="card-title collapsible-toggle" data-id="${o}">${o}</h2>

      <div class="list-content collapsible">
        <div class="list-content-meta">
          <div>
            <p class="project-type">${i}</p>
            <p class="technologies">${y}</p>
          </div>

          <p class="project-description">${s}</p>
          

          <button type="button" class="project-card-button">View more</button>
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
                srcset="${u} 1x, ${w} 2x"
                src="${u}"
                alt="${o} live page screenshot"
                width="400"
                height="250"
                loading="lazy"
                onError="${re}"
              />
            </div>

            <div class="flip-card-back">
              <h3 class="project-name">${o}</h3>
              <p class="project-type">${i}</p>
              <p class="project-description">${s}</p>
            </div>
          </div>
        </a>
      </div>
    </article>
  </li>
  `},le=e=>`
  <ul class="project-card-list list-view">
    ${e.map(o=>ne(o)).join("")}
  </ul>`,de=le(ce),be=document.querySelector("#gallery");be.innerHTML=de;const v=document.querySelector(".projects-view-switch"),m=document.querySelector(".project-card-list");v.addEventListener("click",pe);function pe(){m.classList.toggle("gallery-view");const e=m.classList.contains("gallery-view");v.innerHTML=`Switch to ${e?"list":"gallery"}`}const ue=e=>{if(!e.target.classList.contains("collapsible-toggle"))return;const o=document.querySelectorAll(".project-card"),i=Array.from(o),a=i.find(r=>r.querySelector(".collapsible-toggle").dataset.id===e.target.dataset.id),t=a.querySelector(".collapsible-toggle"),s=a.querySelector(".collapsible"),c=i.find(r=>r===a?!1:r.querySelector(".collapsible-toggle").classList.contains("content-expanded"));if(c){const r=c.querySelector(".collapsible");c.querySelector(".collapsible-toggle").classList.remove("content-expanded"),r.style.maxHeight=null}t.classList.toggle("content-expanded"),s.style.maxHeight?s.style.maxHeight=null:s.style.maxHeight=s.scrollHeight+"px"},me=document.querySelector(".gallery");me.addEventListener("click",ue);
