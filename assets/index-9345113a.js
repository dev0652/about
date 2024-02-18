(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const E=function(e){const t=`#${e}`,s=`#${e}-title`,i=document.querySelector(t),a=i.querySelector(s),o=i.querySelector(".section-content"),c=a.innerHTML;a.innerHTML="";const n=100;o.style.animationDelay=n*c.length;let r=0;function l(){r<c.length&&(a.innerHTML+=c.charAt(r),r++,setTimeout(l,n))}l()};E("about");const W=document.querySelector(".header"),F=document.querySelectorAll(".header-nav-link"),Z=document.querySelectorAll(".section"),Y=document.querySelector("main"),{height:X}=W.getBoundingClientRect(),k=`${X}px`;document.body.style.paddingTop=k;document.documentElement.style.scrollPaddingTop=k;Y.style.setProperty("--blurOffset",k);F.forEach(e=>{e.addEventListener("click",ee)});function ee(e){e.preventDefault();const{id:t}=e.target.dataset;Z.forEach(s=>{const i=s.id===t;s.style.display=i?"block":"none",i&&E(t)}),F.forEach(s=>{s.classList.remove("active")}),e.target.classList.add("active")}const y=document.querySelector("#color-scheme-switcher-checkbox"),te=document.querySelector(".color-scheme-switcher-slider");function se(){const e=localStorage.getItem("dark-color-scheme");e&&e!=="false"&&(y.checked=!0)}function R(){const e=document.querySelector("main");e.classList.remove("faded-edges"),y.checked?document.body.classList.add("dark"):document.body.classList.remove("dark");const t=parseFloat(getComputedStyle(document.body).getPropertyValue("transition-duration"))*1e3;setTimeout(()=>{e.classList.add("faded-edges")},t)}function ae(e){localStorage.setItem("dark-color-scheme",e.checked)}function oe(){se(),R(),y.addEventListener("change",ie),setTimeout(()=>{te.classList.add("animated")},100)}function ie(e){R(),ae(e.currentTarget)}oe();const P=[{id:1,name:"Barber course",link:"https://github.com/dev0652/barber",livePage:"https://barbercourse.kyiv.ua/",thumbFilename:"barber",type:"Commercial project",stack:"Front-end",role:"Team member",customer:"barbercourse.kyiv.ua",description:"A landing page of a barber training course created with vanilla JavaScript. I worked on this project in collaboration with two other developers and a designer.",technologies:["HTML","SaSS","JavaScript","EMailJS","Vite"]},{id:2,name:"Real Estate Deals",link:"https://github.com/dev0652/zenbit-test",livePage:"https://dev0652.github.io/zenbit-test/",technologies:["HTML","SaSS","React","React Router","Redux","Node.js","MongoDB"],thumbFilename:"zenbit",type:"Test",stack:"Front-end, back-end",role:null,customer:"ZenBit Tech",description:"Front-end is a MPA built with React (using Create React App tool) and uses React Router for routing and Redux for state management. It also makes use of a few other libraries like React Helmet, React Icons and Notiflix. Back-end is built with Node.js and MongoDB and is hosted on render.com"},{id:3,name:"Fighters (game)",link:"https://github.com/dev0652/fighters-nodejs",livePage:"https://dev0652.github.io/binary-hw-nodejs/",technologies:["HTML","SaSS","JavaScript","React","Node.js"],thumbFilename:"fighters",type:"Test",stack:"Front-end, back-end",role:null,customer:"Binary Academy",description:"A simple, unanimated fighting game. Front-end was built with React making use of class components"},{id:4,name:"Bookshelf",link:"https://github.com/dev0652/bookshelf",livePage:"https://dev0652.github.io/bookshelf/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"bookshelf",type:"Study team project",stack:"Front-end",role:"Team leader",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:5,name:"Drink Master",link:"https://github.com/PVO-fullstack/drink_master",livePage:"https://pvo-fullstack.github.io/drink_master/",technologies:["React","SaSS"],thumbFilename:"drinkmaster",type:"Study team project",stack:"Front-end",role:"Team member",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:6,name:"Car Rental",link:"https://github.com/dev0652/swift-car-rental",livePage:"https://dev0652.github.io/swift-car-rental/",technologies:["React","Styled components"],thumbFilename:"car-rental",type:"Test",stack:"Front-end",role:null,customer:null,description:"Simple, lightweight and user-friendly car rental website developed as a test assignment for a job interview"},{id:7,name:"Phonebook",link:"https://github.com/dev0652/goit-react-hw-08-phonebook",livePage:"https://dev0652.github.io/goit-react-hw-08-phonebook",technologies:["React","Styled components"],thumbFilename:"phonebook",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:8,name:"Movie database",link:"https://github.com/dev0652/goit-react-hw-05-movies",livePage:"https://dev0652.github.io/goit-react-hw-05-movies",technologies:["React"],thumbFilename:"movies",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:9,name:"Pixabay Image Search",link:"https://github.com/dev0652/pixabay-search",livePage:"https://dev0652.github.io/pixabay-search/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"pixabay",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:10,name:"Ice Cream",link:"https://github.com/dev0652/icecream",livePage:"https://dev0652.github.io/icecream/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"icecream",type:"Study team project",stack:"Front-end",role:"Team leader",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:11,name:"Web studio",link:"https://github.com/dev0652/webstudio",livePage:"https://dev0652.github.io/webstudio/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"webstudio",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:12,name:"Barbershop",link:"https://github.com/dev0652/barbershop",livePage:"https://dev0652.github.io/barbershop/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"barbershop",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:13,name:"Britlex school",link:"https://github.com/dev0652/britlex",livePage:"https://dev0652.github.io/britlex/",technologies:["HTML","SaSS"],thumbFilename:"britlex",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"}],re="/about/assets/barber-de3cd9d8.webp",ce="/about/assets/barbershop-ec861e44.webp",le="/about/assets/barbershop_dark-59c3fce1.webp",ne="/about/assets/bookshelf-f8a8c9d4.webp",be="/about/assets/bookshelf_dark-bf3b3150.webp",pe="/about/assets/britlex-bcf6ef08.webp",de="/about/assets/britlex_dark-a4d44317.webp",me="/about/assets/car-rental-802b2989.webp",_e="/about/assets/car-rental_dark-43daf841.webp",ue="/about/assets/drinkmaster-aa80d719.webp",ge="/about/assets/fighters-b4765f9f.webp",we="/about/assets/fighters2-ed0181de.webp",he="/about/assets/icecream-65c39696.webp",fe="/about/assets/movies-8e6e307f.webp",ve="/about/assets/movies_dark-b7cc634e.webp",ke="/about/assets/phonebook-48bfd202.webp",ye="/about/assets/phonebook_dark-d4c93600.webp",je="/about/assets/pixabay-0ad7c813.webp",xe="/about/assets/pixabay_dark-dda5df94.webp",Se="/about/assets/webstudio-7fcc608d.webp",Le="/about/assets/webstudio_dark-a8029636.webp",$e="/about/assets/zenbit-15843d79.webp",Te="/about/assets/zenbit2-2532e0d4.webp",Ee="/about/assets/zenbit2_dark-ffc6b028.webp",Fe="/about/assets/barber-f8d99466.webp",Re="/about/assets/barbershop-f845a3e9.webp",Pe="/about/assets/barbershop_dark-178f4630.webp",He="/about/assets/bookshelf-557de787.webp",Me="/about/assets/bookshelf_dark-21d0a7f3.webp",Ce="/about/assets/britlex-2b760e1d.webp",qe="/about/assets/britlex_dark-8f8c5ea1.webp",ze="/about/assets/car-rental-ddb6be08.webp",Be="/about/assets/car-rental_dark-095f9ccb.webp",Ie="/about/assets/drinkmaster-514cd3e4.webp",Ae="/about/assets/fighters-4d20cf8e.webp",Oe="/about/assets/fighters2-544e9e59.webp",Ve="/about/assets/icecream-bb641ed3.webp",Ne="/about/assets/movies-044bf4cc.webp",De="/about/assets/movies_dark-01709605.webp",Je="/about/assets/phonebook-7909f0b1.webp",Ke="/about/assets/phonebook_dark-d31da813.webp",Qe="/about/assets/pixabay-1e86a6cc.webp",Ue="/about/assets/pixabay_dark-6b538044.webp",Ge="/about/assets/webstudio-d8b36b21.webp",We="/about/assets/webstudio_dark-98964300.webp",Ze="/about/assets/zenbit-2c1e57ee.webp",Ye="/about/assets/zenbit2-e1519d80.webp",Xe="/about/assets/zenbit2_dark-f82dbe79.webp",et="/about/assets/barber-2b870e02.webp",tt="/about/assets/barbershop-960e9d39.webp",st="/about/assets/barbershop_dark-13b7cc16.webp",at="/about/assets/bookshelf-8cfd7c74.webp",ot="/about/assets/bookshelf_dark-a4834c85.webp",it="/about/assets/britlex-5ec0e49e.webp",rt="/about/assets/britlex_dark-4bbf8186.webp",ct="/about/assets/car-rental-84ddf04d.webp",lt="/about/assets/car-rental_dark-4595a6fc.webp",nt="/about/assets/drinkmaster-e0357061.webp",bt="/about/assets/fighters-6579123e.webp",pt="/about/assets/fighters2-f389db97.webp",dt="/about/assets/icecream-ac11c61e.webp",mt="/about/assets/movies-b9cbdc0a.webp",_t="/about/assets/movies_dark-890dc89c.webp",ut="/about/assets/phonebook-7f4d5039.webp",gt="/about/assets/phonebook_dark-17af4cba.webp",wt="/about/assets/pixabay-73b5c30e.webp",ht="/about/assets/pixabay_dark-45d0cfd9.webp",ft="/about/assets/webstudio-9bf7e70c.webp",vt="/about/assets/webstudio_dark-524c1990.webp",kt="/about/assets/zenbit-e7f62cb0.webp",yt="/about/assets/zenbit2-65a83c01.webp",jt="/about/assets/zenbit2_dark-cce9d275.webp",xt="/about/assets/barber-aa5cbd9f.webp",St="/about/assets/barbershop-715c0974.webp",Lt="/about/assets/barbershop_dark-439a03ce.webp",$t="/about/assets/bookshelf-262ace7d.webp",Tt="/about/assets/bookshelf_dark-ca6a1c94.webp",Et="/about/assets/britlex-b678054f.webp",Ft="/about/assets/britlex_dark-da2cb75f.webp",Rt="/about/assets/car-rental-7e3c7285.webp",Pt="/about/assets/car-rental_dark-f0fc1a03.webp",Ht="/about/assets/drinkmaster-7f0cc30d.webp",Mt="/about/assets/fighters-59a66213.webp",Ct="/about/assets/fighters2-beed3449.webp",qt="/about/assets/icecream-e9e58622.webp",zt="/about/assets/movies-ac6b60f0.webp",Bt="/about/assets/movies_dark-2040b007.webp",It="/about/assets/phonebook-5b906d08.webp",At="/about/assets/phonebook_dark-6782d71c.webp",Ot="/about/assets/pixabay-5c253604.webp",Vt="/about/assets/pixabay_dark-ce0f94ae.webp",Nt="/about/assets/webstudio-f5dc1be0.webp",Dt="/about/assets/webstudio_dark-518050e1.webp",Jt="/about/assets/zenbit-339d281b.webp",Kt="/about/assets/zenbit2-46b6c751.webp",Qt="/about/assets/zenbit2_dark-56b9f156.webp";function g(e,t=null){let s="";t&&(s=`?text=${t.split(" ").join("+")}`);const i="https://placehold.co/",a=e+s;return i+a}function w(e,t){return new URL(Object.assign({"/images/projects/webp/large1x/barber.webp":re,"/images/projects/webp/large1x/barbershop.webp":ce,"/images/projects/webp/large1x/barbershop_dark.webp":le,"/images/projects/webp/large1x/bookshelf.webp":ne,"/images/projects/webp/large1x/bookshelf_dark.webp":be,"/images/projects/webp/large1x/britlex.webp":pe,"/images/projects/webp/large1x/britlex_dark.webp":de,"/images/projects/webp/large1x/car-rental.webp":me,"/images/projects/webp/large1x/car-rental_dark.webp":_e,"/images/projects/webp/large1x/drinkmaster.webp":ue,"/images/projects/webp/large1x/fighters.webp":ge,"/images/projects/webp/large1x/fighters2.webp":we,"/images/projects/webp/large1x/icecream.webp":he,"/images/projects/webp/large1x/movies.webp":fe,"/images/projects/webp/large1x/movies_dark.webp":ve,"/images/projects/webp/large1x/phonebook.webp":ke,"/images/projects/webp/large1x/phonebook_dark.webp":ye,"/images/projects/webp/large1x/pixabay.webp":je,"/images/projects/webp/large1x/pixabay_dark.webp":xe,"/images/projects/webp/large1x/webstudio.webp":Se,"/images/projects/webp/large1x/webstudio_dark.webp":Le,"/images/projects/webp/large1x/zenbit.webp":$e,"/images/projects/webp/large1x/zenbit2.webp":Te,"/images/projects/webp/large1x/zenbit2_dark.webp":Ee,"/images/projects/webp/large2x/barber.webp":Fe,"/images/projects/webp/large2x/barbershop.webp":Re,"/images/projects/webp/large2x/barbershop_dark.webp":Pe,"/images/projects/webp/large2x/bookshelf.webp":He,"/images/projects/webp/large2x/bookshelf_dark.webp":Me,"/images/projects/webp/large2x/britlex.webp":Ce,"/images/projects/webp/large2x/britlex_dark.webp":qe,"/images/projects/webp/large2x/car-rental.webp":ze,"/images/projects/webp/large2x/car-rental_dark.webp":Be,"/images/projects/webp/large2x/drinkmaster.webp":Ie,"/images/projects/webp/large2x/fighters.webp":Ae,"/images/projects/webp/large2x/fighters2.webp":Oe,"/images/projects/webp/large2x/icecream.webp":Ve,"/images/projects/webp/large2x/movies.webp":Ne,"/images/projects/webp/large2x/movies_dark.webp":De,"/images/projects/webp/large2x/phonebook.webp":Je,"/images/projects/webp/large2x/phonebook_dark.webp":Ke,"/images/projects/webp/large2x/pixabay.webp":Qe,"/images/projects/webp/large2x/pixabay_dark.webp":Ue,"/images/projects/webp/large2x/webstudio.webp":Ge,"/images/projects/webp/large2x/webstudio_dark.webp":We,"/images/projects/webp/large2x/zenbit.webp":Ze,"/images/projects/webp/large2x/zenbit2.webp":Ye,"/images/projects/webp/large2x/zenbit2_dark.webp":Xe,"/images/projects/webp/medium/barber.webp":et,"/images/projects/webp/medium/barbershop.webp":tt,"/images/projects/webp/medium/barbershop_dark.webp":st,"/images/projects/webp/medium/bookshelf.webp":at,"/images/projects/webp/medium/bookshelf_dark.webp":ot,"/images/projects/webp/medium/britlex.webp":it,"/images/projects/webp/medium/britlex_dark.webp":rt,"/images/projects/webp/medium/car-rental.webp":ct,"/images/projects/webp/medium/car-rental_dark.webp":lt,"/images/projects/webp/medium/drinkmaster.webp":nt,"/images/projects/webp/medium/fighters.webp":bt,"/images/projects/webp/medium/fighters2.webp":pt,"/images/projects/webp/medium/icecream.webp":dt,"/images/projects/webp/medium/movies.webp":mt,"/images/projects/webp/medium/movies_dark.webp":_t,"/images/projects/webp/medium/phonebook.webp":ut,"/images/projects/webp/medium/phonebook_dark.webp":gt,"/images/projects/webp/medium/pixabay.webp":wt,"/images/projects/webp/medium/pixabay_dark.webp":ht,"/images/projects/webp/medium/webstudio.webp":ft,"/images/projects/webp/medium/webstudio_dark.webp":vt,"/images/projects/webp/medium/zenbit.webp":kt,"/images/projects/webp/medium/zenbit2.webp":yt,"/images/projects/webp/medium/zenbit2_dark.webp":jt,"/images/projects/webp/small/barber.webp":xt,"/images/projects/webp/small/barbershop.webp":St,"/images/projects/webp/small/barbershop_dark.webp":Lt,"/images/projects/webp/small/bookshelf.webp":$t,"/images/projects/webp/small/bookshelf_dark.webp":Tt,"/images/projects/webp/small/britlex.webp":Et,"/images/projects/webp/small/britlex_dark.webp":Ft,"/images/projects/webp/small/car-rental.webp":Rt,"/images/projects/webp/small/car-rental_dark.webp":Pt,"/images/projects/webp/small/drinkmaster.webp":Ht,"/images/projects/webp/small/fighters.webp":Mt,"/images/projects/webp/small/fighters2.webp":Ct,"/images/projects/webp/small/icecream.webp":qt,"/images/projects/webp/small/movies.webp":zt,"/images/projects/webp/small/movies_dark.webp":Bt,"/images/projects/webp/small/phonebook.webp":It,"/images/projects/webp/small/phonebook_dark.webp":At,"/images/projects/webp/small/pixabay.webp":Ot,"/images/projects/webp/small/pixabay_dark.webp":Vt,"/images/projects/webp/small/webstudio.webp":Nt,"/images/projects/webp/small/webstudio_dark.webp":Dt,"/images/projects/webp/small/zenbit.webp":Jt,"/images/projects/webp/small/zenbit2.webp":Kt,"/images/projects/webp/small/zenbit2_dark.webp":Qt})[`/images/projects/webp/${e}/${t}.webp`],self.location).href}function H(e){const t=w("small",e),s=w("medium",e),i=w("large1x",e),a=w("large2x",e),o="Image pending",c=g("370x208",o),n=g("480x270",o),r=g("960x540",o),l=g("1920x1080",o);return{imgSmall:e?t:c,imgMedium:e?s:n,imgLarge1x:e?i:r,imgLarge2x:e?a:l}}function Ut(e){const{name:t,type:s,link:i,livePage:a,thumbFilename:o,description:c,stack:n,role:r,customer:l,technologies:p}=e,{imgSmall:v,imgMedium:_,imgLarge1x:d,imgLarge2x:m}=H(o),u=p.join(", ");return`
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
                style="${!r&&"display: none"}">
                  <span class="field-type">Role:</span> ${r}
                </p>

                <p class="customer"
                style="${!l&&"display: none"}">
                  <span class="field-type">Customer:</span> ${l}
                </p>
              </div>
            </div>

            <p class="technologies">${u}</p>
          </div>

          <div class="modal-image-block">
            <img
              class="project-card-image"
              srcset="
                ${v} 370w,
                ${_} 480w,
                ${d} 960w,
                ${m} 1920w"
              sizes="(max-width: 400px): 100vw, (min-width: 768px) 520px, (min-width: 1280px) 620px"
              src="${d}"
              alt="${t} live page screenshot"
            />
          </div>

          <div class="modal-description">
            <p class="project-description">${c}</p>
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
              href="${a}"
              target="_blank"
              rel="noopener noreferrer"
              >Live page</a
            >
          </div>

        </div>
      </article>
  `}const j=document.querySelector("[data-pop-up]"),M=document.querySelector("[data-modal-close]"),Gt=document.querySelector(".modal-content-injection-target");function Wt(e){const t=P.find(s=>s.id===+e);Gt.innerHTML=Ut(t),document.body.classList.add("modal-open"),j.classList.remove("is-hidden"),M.addEventListener("click",C),document.addEventListener("keydown",z),document.addEventListener("click",q)}function x(){M.removeEventListener("click",C),document.removeEventListener("click",q),document.removeEventListener("keydown",z),j.classList.add("is-hidden"),document.body.classList.remove("modal-open")}function C(e){x()}function q(e){e.target==j&&x()}function z(e){e.key==="Escape"&&x()}function Zt(e){const{id:t,name:s,type:i,link:a,livePage:o,thumbFilename:c,description:n,stack:r,role:l,customer:p,technologies:v}=e,{imgSmall:_,imgMedium:d,imgLarge1x:m,imgLarge2x:u}=H(c),L=v.join(", ");return`
    <li class="project-card" tabindex="-1">
      <article class="fade-in">
        <h2 class="card-title collapsible-toggle" aria-expanded="false" aria-controls="collapsible-${s}" tabindex="0" data-id="${s}">${s}</h2>

        <div class="list-card collapsible" id="collapsible-${s}">
          <div class="list-card-wrapper">
            <div class="list-card-image-block">
              <img
                class="project-card-image"
                srcset="
                  ${_} 370w,
                  ${d} 480w,
                  ${m} 960w,
                  ${u} 1920w"
                sizes="(min-width: 768px) 480px"
                src="${m}"
                alt="${s} live page screenshot"
              />
            </div>

            <div class="project-links-wrapper">
              <a
                class="project-link"
                href="${a}"
                target="_blank"
                rel="noopener noreferrer"
                tabindex="-1"
                >GitHub</a
              >

              <a
                class="project-link"
                href="${o}"
                target="_blank"
                rel="noopener noreferrer"
                tabindex="-1"
                >Live page</a
              >
            </div>

            <div class="list-card-summary">
              <div class="summary-items-wrapper">
                  <p class="type"><span class="field-type">Type:</span> ${i}</p>

                  <p class="customer"
                  style="${!p&&"display: none"}">
                    <span class="field-type">Customer:</span> ${p}
                  </p>

                  <p class="role"
                  style="${!l&&"display: none"}">
                    <span class="field-type">Role:</span> ${l}
                  </p>

                  <p class="stack"><span class="field-type">Stack:</span> ${r}</p>
              </div>

              <p class="technologies">${L}</p>
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
                    ${_} 370w,
                    ${d} 480w,
                    ${m} 960w,
                    ${u} 1920w"
                  sizes="(min-width: 768px) 350px, (min-width: 1440px) 400px"
                  src="${d}"
                  alt="${s} live page screenshot"
                  loading="lazy"
                />
              </div>

              <div class="flip-card-back">
                <h3 class="flip-card-project-name">${s}</h3>

                <div class="tile-card-project-summary">
                  <div>
                    <p class="type"><span class="field-type">Type:</span> ${i}</p>

                    <p class="stack"><span class="field-type">Stack:</span> ${r}</p>

                    <p class="technologies"><span class="field-type">Technologies:</span> ${L}</p>
                  </div>

                  <p class="flip-card-prompt-to-click">Click to learn more</p> 
                </div>

                             
              </div>
            </div>
  </a>

        </div>
      </article>
    </li>
  `}const Yt=e=>`
  <ul class="project-card-list">
    ${e.map(t=>Zt(t)).join("")}
  </ul>`,Xt=Yt(P),es=document.querySelector("#gallery");es.innerHTML=Xt;const B=document.querySelector(".projects-view-switch"),h=document.querySelector(".project-card-list");B.addEventListener("click",ts);function ts(){h.classList.toggle("gallery-view");const e=h.classList.contains("gallery-view");B.innerHTML=`View as ${e?"list":"tiles"}`,e?h.addEventListener("click",$):h.removeEventListener("click",$)}function $(e){if(e.preventDefault(),!e.target.matches(".tile-card-link"))return;const t=e.target.dataset.id;Wt(t)}function I(e){if(!e.target.classList.contains("collapsible-toggle"))return;const t=document.querySelectorAll(".project-card"),s=Array.from(t),i=s.find(r=>r.querySelector(".collapsible-toggle").dataset.id===e.target.dataset.id),a=i.querySelector(".collapsible-toggle"),o=i.querySelector(".collapsible"),c=i.querySelectorAll(".project-link"),n=s.find(r=>r===i?!1:r.querySelector(".collapsible-toggle").classList.contains("content-expanded"));if(n){const r=n.querySelector(".collapsible"),l=n.querySelector(".collapsible-toggle");l.classList.remove("content-expanded"),l.ariaExpanded="false",r.style.maxHeight=null}a.classList.toggle("content-expanded"),o.style.maxHeight?(o.style.maxHeight=null,o.classList.remove("animated"),a.ariaExpanded="false",c.forEach(r=>{r.tabIndex="-1"})):(o.style.maxHeight=o.scrollHeight+"px",o.classList.add("animated"),a.ariaExpanded="true",c.forEach(r=>{r.removeAttribute("tabIndex")}))}function ss(e){(e.key==="Enter"||e.key===" ")&&I(e)}const A=document.querySelector(".gallery");A.addEventListener("click",I);A.addEventListener("keydown",ss);const b={origin:"https://api.emailjs.com",blockHeadless:!1},S=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},as=(e,t="https://api.emailjs.com")=>{if(!e)return;const s=S(e);b.publicKey=s.publicKey,b.blockHeadless=s.blockHeadless,b.blockList=s.blockList,b.limitRate=s.limitRate,b.origin=s.origin||t};class f{constructor(t=0,s="Network Error"){this.status=t,this.text=s}}const O=async(e,t,s={})=>{const i=await fetch(b.origin+e,{method:"POST",headers:s,body:t}),a=await i.text(),o=new f(i.status,a);if(i.ok)return o;throw o},V=(e,t,s)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},os=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},N=e=>e.webdriver||!e.languages||e.languages.length===0,D=()=>new f(451,"Unavailable For Headless Browser"),is=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},rs=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},cs=(e,t)=>e instanceof FormData?e.get(t):e[t],J=(e,t)=>{if(rs(e))return!1;is(e.list,e.watchVariable);const s=cs(t,e.watchVariable);return typeof s!="string"?!1:e.list.includes(s)},K=()=>new f(403,"Forbidden"),ls=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},ns=(e,t,s)=>{const i=Number(s.getItem(e)||0);return t-Date.now()+i},T=(e,t,s)=>{setTimeout(()=>{s.removeItem(e)},t)},Q=(e,t,s)=>{if(!s.throttle)return!1;ls(s.throttle,s.id);const i=s.id||t,a=ns(i,s.throttle,e);return a>0?(T(i,a,e),!0):(e.setItem(i,Date.now().toString()),T(i,s.throttle,e),!1)},U=()=>new f(429,"Too Many Requests"),bs=(e,t,s,i)=>{const a=S(i),o=a.publicKey||b.publicKey,c=a.blockHeadless||b.blockHeadless,n={...b.blockList,...a.blockList},r={...b.limitRate,...a.limitRate};return c&&N(navigator)?Promise.reject(D()):(V(o,e,t),os(s),s&&J(n,s)?Promise.reject(K()):Q(localStorage,location.pathname,r)?Promise.reject(U()):O("/api/v1.0/email/send",JSON.stringify({lib_version:"4.1.0",user_id:o,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"}))},ps=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},ds=e=>typeof e=="string"?document.querySelector(e):e,ms=(e,t,s,i)=>{const a=S(i),o=a.publicKey||b.publicKey,c=a.blockHeadless||b.blockHeadless,n={...b.blockList,...a.blockList},r={...b.limitRate,...a.limitRate};if(c&&N(navigator))return Promise.reject(D());const l=ds(s);V(o,e,t),ps(l);const p=new FormData(l);return J(n,p)?Promise.reject(K()):Q(localStorage,location.pathname,r)?Promise.reject(U()):(p.append("lib_version","4.1.0"),p.append("service_id",e),p.append("template_id",t),p.append("user_id",o),O("/api/v1.0/email/send-form",p))},G={init:as,send:bs,sendForm:ms};G.init("E8FZeR5jYUP13UDEy");const _s=document.getElementById("contact-form");_s.addEventListener("submit",us);function us(e){e.preventDefault(),G.sendForm("default_service","contact_form","#contact-form").then(function(t){alert("Success")},function(t){alert("Error")}).finally(function(){document.getElementById("contact-form").reset()})}
