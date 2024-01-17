(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const r=document.querySelector(".header"),c=document.querySelectorAll(".header-nav-link");(()=>{const{height:t}=r.getBoundingClientRect(),i=`${t}px`;document.body.style.paddingTop=i,document.documentElement.style.scrollPaddingTop=i})();c.forEach(t=>{t.addEventListener("click",l)});function l(t){c.forEach(i=>{i.classList.remove("active")}),t.target.classList.add("active")}const g="/about/assets/barber-6d534d7b.png",d="/about/assets/barbershop-4b1be810.png",p="/about/assets/bookshelf-49864b6f.png",m="/about/assets/britlex-050895a5.png",u="/about/assets/car-rental-b9b4c4bf.png",b="/about/assets/apple-touch-icon-1a74ebfa.png",h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAnpJREFUOE+Vk2tIE1AYhp9tlRfUTY1BRBBRJl0o8VaaRWIyjQwSM/BGXn6ETsFbRRqJP3RlLLWiMlpKaWphhBOxi4aViQ6ELoZRSfhDLYeat6lzsSNZkfvR+Xve7znfeb/3k1gsFgs2TtOL10ilUlQBfrYkSGwB5s1mwtNOIZVK0JcVI5NJl4XYBGh0NRTpqkVRXnIs2fHRtgEjY+O4y10wLyxgHBvH0NvH+dv3WKtcjZOjAx++fOV0Ygxenhtxk7sgk0r5VSM6UGtKaekwMDI6hr29HalREfhs9cQ4Ps7UjImBwWHhxdX6R5hmZ3GXy1EF+FKaq1704MfkFNuiEhmbmCQ/OZZ1a5S0dHSjb+9EIkGYGOznxdB3I4U376BwduJt/S3R3ZIH565V0mbooa1CS7qmnCp9CzvXj4p/9/QrOB6hQpudSlBiBqG7vclPiRd3S4DBESMlVXUcCQ4iMvsskf4fUR/8LETlTRto6NzMg4sFNDxrJyvuKEo3178BQyNGtHfvExt+gJAT2TismKDvcosQeahDMc0701haRN3jVjKtAFfF34CC65W0dffQWqFFrSmj8bmekO3DWFP29I2Sw/sPcSknjb1JGYTu8iEvJe434E8Tb+RlMmeep/llF086DUIU4ueNKtAXu5WrSC4s+dfEdE0Zza+6xGwd7e3IioticnqGfd476O7tExkZGPrGldqHTJusY3QhfI+/6EiYaJ2/u0KO2WwWEMP7Pi5U1eK9xQPT7BzvPvWTmxCNl+cmUSyTyURmrDU2o1ysq6ZYVyO+cCYphpyEY/+3C9ZlCks9KRLYVF4kXl3u2OzAKta3L65zWKDtdf4J7hIt4MMjmqYAAAAASUVORK5CYII=",v="data:image/png;base64,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",A="/about/assets/favicon-df11693e.ico",f="/about/assets/fighters-1a1c90b8.jpeg",y="/about/assets/icecream-2def0c88.png",k="/about/assets/pixabay-40cedfd9.png",B="/about/assets/symbol-defs-5084444a.svg",R="/about/assets/webstudio-33991215.png",_="/about/assets/zenbit-8c4d6381.png",E=[{name:"Real Estate Deals (ZenBit)",link:"https://github.com/dev0652/zenbit-test",livePage:"https://dev0652.github.io/zenbit-test/",technologies:[],thumbFilename:"zenbit.png",type:"Test",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Fighters (Binary Academy)",link:"https://github.com/dev0652/fighters-nodejs",livePage:"https://dev0652.github.io/binary-hw-nodejs/",technologies:[],thumbFilename:"fighters.jpeg",type:"Test",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Barber course landing",link:"https://github.com/dev0652/barber",livePage:"https://dev0652.github.io/barber/",technologies:[],thumbFilename:"barber.png",type:"Commercial project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Web studio",link:"https://github.com/dev0652/webstudio",livePage:"https://dev0652.github.io/webstudio/",technologies:[],thumbFilename:"webstudio.png",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Bookshelf",link:"https://github.com/dev0652/bookshelf",livePage:"https://dev0652.github.io/bookshelf/",technologies:[],thumbFilename:"bookshelf.png",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Car Rental (test)",link:"https://github.com/dev0652/swift-car-rental",livePage:"https://dev0652.github.io/swift-car-rental/",technologies:[],thumbFilename:"car-rental.png",type:"Test",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Pixabay Image Search",link:"https://github.com/dev0652/pixabay-search",livePage:"https://dev0652.github.io/pixabay-search/",technologies:[],thumbFilename:"pixabay.png",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Ice Cream",link:"https://github.com/dev0652/icecream",livePage:"https://dev0652.github.io/icecream/",technologies:[],thumbFilename:"icecream.png",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Barbershop",link:"https://github.com/dev0652/barbershop",livePage:"https://dev0652.github.io/barbershop/",technologies:[],thumbFilename:"barbershop.png",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{name:"Britlex school",link:"https://github.com/dev0652/britlex",livePage:"https://dev0652.github.io/britlex/",technologies:["Grid"],thumbFilename:"britlex.png",type:"Study project",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"}],C=({currentTarget:t})=>{t.onerror=null,t.src="https://placehold.co/400"},Q=t=>{const{name:i,type:n,link:a,thumbFilename:e,description:s}=t,o=new URL(Object.assign({"../images/barber.png":g,"../images/barbershop.png":d,"../images/bookshelf.png":p,"../images/britlex.png":m,"../images/car-rental.png":u,"../images/favicon/apple-touch-icon.png":b,"../images/favicon/favicon-16x16.png":h,"../images/favicon/favicon-32x32.png":v,"../images/favicon/favicon.ico":A,"../images/fighters.jpeg":f,"../images/icecream.png":y,"../images/pixabay.png":k,"../images/symbol-defs.svg":B,"../images/webstudio.png":R,"../images/zenbit.png":_})[`../images/${e}`],self.location).href;return`
   <li class="project-card ">
    <a class="project-card-link flip-card" href="${a}" target="_blank" rel="noopener noreferrer">

      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            class="project-card-image"
            src="${o}"
            alt="${i} live page screenshot"
            loading="lazy"
            onError="${C}"
          />
        </div>

        <div class="flip-card-back">
          <h3 class="project-name">${i}</h3>
          <p class="project-type">${n}</p>
          <p class="project-description">${s}</p>
        </div>
      </div>
    </a>
  </li>
  `},S=t=>`
  <ul class="project-card-list">
    ${t.map(i=>Q(i)).join("")}
  </ul>`,U=S(E),F=document.querySelector("#gallery");F.innerHTML=U;
