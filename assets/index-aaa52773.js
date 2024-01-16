(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c=[{name:"Real Estate Deals (ZenBit)",link:"https://github.com/dev0652/zenbit-test",livePage:"https://dev0652.github.io/zenbit-test/",technologies:[],thumb:"/images/zenbit.png",type:"Test",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Fighters (Binary Academy)",link:"https://github.com/dev0652/fighters-nodejs",livePage:"https://dev0652.github.io/binary-hw-nodejs/",technologies:[],thumb:"/images/fighters.jpeg",type:"Test",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Barber course landing",link:"https://github.com/dev0652/barber",livePage:"https://dev0652.github.io/barber/",technologies:[],thumb:"/images/barber.png",type:"Commercial project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Web studio",link:"https://github.com/dev0652/webstudio",livePage:"https://dev0652.github.io/webstudio/",technologies:[],thumb:"/images/webstudio.png",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Bookshelf",link:"https://github.com/dev0652/bookshelf",livePage:"https://dev0652.github.io/bookshelf/",technologies:[],thumb:"/images/bookshelf.png",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Car Rental (test)",link:"https://github.com/dev0652/swift-car-rental",livePage:"https://dev0652.github.io/swift-car-rental/",technologies:[],thumb:"/images/car-rental.png",type:"Test",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Pixabay Image Search",link:"https://github.com/dev0652/pixabay-search",livePage:"https://dev0652.github.io/pixabay-search/",technologies:[],thumb:"/images/Pixabay.png",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Ice Cream",link:"https://github.com/dev0652/icecream",livePage:"https://dev0652.github.io/icecream/",technologies:[],thumb:"/images/icecream.png",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Barbershop",link:"https://github.com/dev0652/barbershop",livePage:"https://dev0652.github.io/barbershop/",technologies:[],thumb:"/images/Barbershop.png",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Britlex school",link:"https://github.com/dev0652/britlex",livePage:"https://dev0652.github.io/britlex/",technologies:["Grid"],thumb:"/images/Britlex.png",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"}],l=({currentTarget:i})=>{console.log("currentTarget: ",i),i.onerror=null,i.src="https://placehold.co/400"},n=i=>{const{name:s,type:r,link:o,thumb:e,description:t}=i;return`
   <li class="project-card ">
    <a class="project-card-link flip-card" href="${o}" target="_blank" rel="noopener noreferrer">

      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            class="project-card-image"
            src="${e}"
            alt="${s} live page screenshot"
            loading="lazy"
            onError="${l}"
          />
        </div>

        <div class="flip-card-back">
          <h3 class="project-name">${s}</h3>
          <p class="project-type">${r}</p>
          <p class="project-description">${t}</p>
        </div>
      </div>
    </a>
  </li>
  `},p=i=>`
  <ul class="project-card-list">
    ${i.map(s=>n(s)).join("")}
  </ul>`,u=p(c),m=document.querySelector("#gallery");m.innerHTML=u;
