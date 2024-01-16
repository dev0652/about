(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const n=document.querySelector(".header");console.log("header: ",n);const c=document.querySelectorAll(".header-nav-link");console.log("headerNavLinks: ",c);(()=>{const{height:t}=n.getBoundingClientRect(),i=`${t}px`;document.body.style.paddingTop=i,document.documentElement.style.scrollPaddingTop=i})();c.forEach(t=>{t.addEventListener("click",l)});function l(t){c.forEach(i=>{i.classList.remove("active")}),t.target.classList.add("active")}const d=[{name:"Real Estate Deals (ZenBit)",link:"https://github.com/dev0652/zenbit-test",livePage:"https://dev0652.github.io/zenbit-test/",technologies:[],thumb:"/images/zenbit.png",type:"Test",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Fighters (Binary Academy)",link:"https://github.com/dev0652/fighters-nodejs",livePage:"https://dev0652.github.io/binary-hw-nodejs/",technologies:[],thumb:"/images/fighters.jpeg",type:"Test",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Barber course landing",link:"https://github.com/dev0652/barber",livePage:"https://dev0652.github.io/barber/",technologies:[],thumb:"/images/barber.png",type:"Commercial project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Web studio",link:"https://github.com/dev0652/webstudio",livePage:"https://dev0652.github.io/webstudio/",technologies:[],thumb:"/images/webstudio.png",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Bookshelf",link:"https://github.com/dev0652/bookshelf",livePage:"https://dev0652.github.io/bookshelf/",technologies:[],thumb:"/images/bookshelf.png",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Car Rental (test)",link:"https://github.com/dev0652/swift-car-rental",livePage:"https://dev0652.github.io/swift-car-rental/",technologies:[],thumb:"/images/car-rental.png",type:"Test",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Pixabay Image Search",link:"https://github.com/dev0652/pixabay-search",livePage:"https://dev0652.github.io/pixabay-search/",technologies:[],thumb:"/images/Pixabay.png",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Ice Cream",link:"https://github.com/dev0652/icecream",livePage:"https://dev0652.github.io/icecream/",technologies:[],thumb:"/images/icecream.png",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Barbershop",link:"https://github.com/dev0652/barbershop",livePage:"https://dev0652.github.io/barbershop/",technologies:[],thumb:"/images/Barbershop.png",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Britlex school",link:"https://github.com/dev0652/britlex",livePage:"https://dev0652.github.io/britlex/",technologies:["Grid"],thumb:"/images/Britlex.png",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"}],u=({currentTarget:t})=>{console.log("currentTarget: ",t),t.onerror=null,t.src="https://placehold.co/400"},p=t=>{const{name:i,type:r,link:s,thumb:e,description:o}=t;return`
   <li class="project-card ">
    <a class="project-card-link flip-card" href="${s}" target="_blank" rel="noopener noreferrer">

      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            class="project-card-image"
            src="${e}"
            alt="${i} live page screenshot"
            loading="lazy"
            onError="${u}"
          />
        </div>

        <div class="flip-card-back">
          <h3 class="project-name">${i}</h3>
          <p class="project-type">${r}</p>
          <p class="project-description">${o}</p>
        </div>
      </div>
    </a>
  </li>
  `},m=t=>`
  <ul class="project-card-list">
    ${t.map(i=>p(i)).join("")}
  </ul>`,h=m(d),g=document.querySelector("#gallery");g.innerHTML=h;
