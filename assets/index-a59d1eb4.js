(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const F=function(e){const t=`#${e}`,s=`#${e}-title`,i=document.querySelector(t),a=i.querySelector(s),o=i.querySelector(".section-content"),r=a.innerHTML;a.innerHTML="";const c=100;o.style.animationDelay=c*r.length;let l=0;function n(){l<r.length&&(a.innerHTML+=r.charAt(l),l++,setTimeout(n,c))}n()};F("about");const U=document.querySelector(".header"),R=document.querySelectorAll(".header-nav-link"),G=document.querySelectorAll(".section"),W=document.querySelector("main"),{height:Z}=U.getBoundingClientRect(),k=`${Z}px`;document.body.style.paddingTop=k;document.documentElement.style.scrollPaddingTop=k;W.style.setProperty("--blurOffset",k);R.forEach(e=>{e.addEventListener("click",Y)});function Y(e){e.preventDefault();const{id:t}=e.target.dataset;G.forEach(s=>{const i=s.id===t;s.style.display=i?"block":"none",i&&F(t)}),R.forEach(s=>{s.classList.remove("active")}),e.target.classList.add("active")}const y=document.querySelector("#color-scheme-switcher-checkbox"),X=document.querySelector(".color-scheme-switcher-slider");function ee(){const e=localStorage.getItem("dark-color-scheme");e&&e!=="false"&&(y.checked=!0)}function P(){const e=document.querySelector("main");e.classList.remove("faded-edges"),y.checked?document.body.classList.add("dark"):document.body.classList.remove("dark");const t=parseFloat(getComputedStyle(document.body).getPropertyValue("transition-duration"))*1e3;setTimeout(()=>{e.classList.add("faded-edges")},t)}function te(e){localStorage.setItem("dark-color-scheme",e.checked)}function se(){ee(),P(),y.addEventListener("change",ae),setTimeout(()=>{X.classList.add("animated")},100)}function ae(e){P(),te(e.currentTarget)}se();const H=[{id:1,name:"Barber course",link:"https://github.com/dev0652/barber",livePage:"https://barbercourse.kyiv.ua/",thumbFilename:"barber",type:"Commercial project",stack:"Front-end",role:"Team member",customer:"barbercourse.kyiv.ua",description:"A landing page of a barber training course created with vanilla JavaScript. I worked on this project in collaboration with two other developers and a designer.",technologies:["HTML","SaSS","JavaScript","EMailJS","Vite"]},{id:2,name:"Real Estate Deals",link:"https://github.com/dev0652/zenbit-test",livePage:"https://dev0652.github.io/zenbit-test/",technologies:["HTML","SaSS","React","React Router","Redux","Node.js","MongoDB"],thumbFilename:"zenbit",type:"Test",stack:"Front-end, back-end",role:null,customer:"ZenBit Tech",description:"Front-end is a MPA built with React (using Create React App tool) and uses React Router for routing and Redux for state management. It also makes use of a few other libraries like React Helmet, React Icons and Notiflix. Back-end is built with Node.js and MongoDB and is hosted on render.com"},{id:3,name:"Fighters (game)",link:"https://github.com/dev0652/fighters-nodejs",livePage:"https://dev0652.github.io/binary-hw-nodejs/",technologies:["HTML","SaSS","JavaScript","React","Node.js"],thumbFilename:"fighters",type:"Test",stack:"Front-end, back-end",role:null,customer:"Binary Academy",description:"A simple, unanimated fighting game. Front-end was built with React making use of class components"},{id:4,name:"Bookshelf",link:"https://github.com/dev0652/bookshelf",livePage:"https://dev0652.github.io/bookshelf/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"bookshelf",type:"Study team project",stack:"Front-end",role:"Team leader",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:5,name:"Drink Master",link:"https://github.com/PVO-fullstack/drink_master",livePage:"https://pvo-fullstack.github.io/drink_master/",technologies:["React","SaSS"],thumbFilename:"drinkmaster",type:"Study team project",stack:"Front-end",role:"Team member",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:6,name:"Car Rental",link:"https://github.com/dev0652/swift-car-rental",livePage:"https://dev0652.github.io/swift-car-rental/",technologies:["React","Styled components"],thumbFilename:"car-rental",type:"Test",stack:"Front-end",role:null,customer:null,description:"Simple, lightweight and user-friendly car rental website developed as a test assignment for a job interview"},{id:7,name:"Phonebook",link:"https://github.com/dev0652/goit-react-hw-08-phonebook",livePage:"https://dev0652.github.io/goit-react-hw-08-phonebook",technologies:["React","Styled components"],thumbFilename:"phonebook",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:8,name:"Movie database",link:"https://github.com/dev0652/goit-react-hw-05-movies",livePage:"https://dev0652.github.io/goit-react-hw-05-movies",technologies:["React"],thumbFilename:"movies",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:9,name:"Pixabay Image Search",link:"https://github.com/dev0652/pixabay-search",livePage:"https://dev0652.github.io/pixabay-search/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"pixabay",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:10,name:"Ice Cream",link:"https://github.com/dev0652/icecream",livePage:"https://dev0652.github.io/icecream/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"icecream",type:"Study team project",stack:"Front-end",role:"Team leader",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:11,name:"Web studio",link:"https://github.com/dev0652/webstudio",livePage:"https://dev0652.github.io/webstudio/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"webstudio",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:12,name:"Barbershop",link:"https://github.com/dev0652/barbershop",livePage:"https://dev0652.github.io/barbershop/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"barbershop",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:13,name:"Britlex school",link:"https://github.com/dev0652/britlex",livePage:"https://dev0652.github.io/britlex/",technologies:["HTML","SaSS"],thumbFilename:"britlex",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"}],oe="/about/assets/barber-de3cd9d8.webp",ie="/about/assets/barbershop-ec861e44.webp",re="/about/assets/barbershop_dark-59c3fce1.webp",ce="/about/assets/bookshelf-f8a8c9d4.webp",le="/about/assets/bookshelf_dark-bf3b3150.webp",ne="/about/assets/britlex-bcf6ef08.webp",be="/about/assets/britlex_dark-a4d44317.webp",pe="/about/assets/car-rental-802b2989.webp",de="/about/assets/car-rental_dark-43daf841.webp",me="/about/assets/drinkmaster-aa80d719.webp",_e="/about/assets/fighters-b4765f9f.webp",ue="/about/assets/fighters2-ed0181de.webp",ge="/about/assets/icecream-65c39696.webp",we="/about/assets/movies-8e6e307f.webp",he="/about/assets/movies_dark-b7cc634e.webp",ve="/about/assets/phonebook-48bfd202.webp",fe="/about/assets/phonebook_dark-d4c93600.webp",ke="/about/assets/pixabay-0ad7c813.webp",ye="/about/assets/pixabay_dark-dda5df94.webp",je="/about/assets/webstudio-7fcc608d.webp",xe="/about/assets/webstudio_dark-a8029636.webp",Se="/about/assets/zenbit-15843d79.webp",Le="/about/assets/zenbit2-2532e0d4.webp",Te="/about/assets/zenbit2_dark-ffc6b028.webp",$e="/about/assets/barber-f8d99466.webp",Fe="/about/assets/barbershop-f845a3e9.webp",Re="/about/assets/barbershop_dark-178f4630.webp",Pe="/about/assets/bookshelf-557de787.webp",He="/about/assets/bookshelf_dark-21d0a7f3.webp",Me="/about/assets/britlex-2b760e1d.webp",Ee="/about/assets/britlex_dark-8f8c5ea1.webp",Ce="/about/assets/car-rental-ddb6be08.webp",qe="/about/assets/car-rental_dark-095f9ccb.webp",ze="/about/assets/drinkmaster-514cd3e4.webp",Be="/about/assets/fighters-4d20cf8e.webp",Ie="/about/assets/fighters2-544e9e59.webp",Oe="/about/assets/icecream-bb641ed3.webp",Ve="/about/assets/movies-044bf4cc.webp",Ae="/about/assets/movies_dark-01709605.webp",Ne="/about/assets/phonebook-7909f0b1.webp",De="/about/assets/phonebook_dark-d31da813.webp",Je="/about/assets/pixabay-1e86a6cc.webp",Ke="/about/assets/pixabay_dark-6b538044.webp",Qe="/about/assets/webstudio-d8b36b21.webp",Ue="/about/assets/webstudio_dark-98964300.webp",Ge="/about/assets/zenbit-2c1e57ee.webp",We="/about/assets/zenbit2-e1519d80.webp",Ze="/about/assets/zenbit2_dark-f82dbe79.webp",Ye="/about/assets/barber-2b870e02.webp",Xe="/about/assets/barbershop-960e9d39.webp",et="/about/assets/barbershop_dark-13b7cc16.webp",tt="/about/assets/bookshelf-8cfd7c74.webp",st="/about/assets/bookshelf_dark-a4834c85.webp",at="/about/assets/britlex-5ec0e49e.webp",ot="/about/assets/britlex_dark-4bbf8186.webp",it="/about/assets/car-rental-84ddf04d.webp",rt="/about/assets/car-rental_dark-4595a6fc.webp",ct="/about/assets/drinkmaster-e0357061.webp",lt="/about/assets/fighters-6579123e.webp",nt="/about/assets/fighters2-f389db97.webp",bt="/about/assets/icecream-ac11c61e.webp",pt="/about/assets/movies-b9cbdc0a.webp",dt="/about/assets/movies_dark-890dc89c.webp",mt="/about/assets/phonebook-7f4d5039.webp",_t="/about/assets/phonebook_dark-17af4cba.webp",ut="/about/assets/pixabay-73b5c30e.webp",gt="/about/assets/pixabay_dark-45d0cfd9.webp",wt="/about/assets/webstudio-9bf7e70c.webp",ht="/about/assets/webstudio_dark-524c1990.webp",vt="/about/assets/zenbit-e7f62cb0.webp",ft="/about/assets/zenbit2-65a83c01.webp",kt="/about/assets/zenbit2_dark-cce9d275.webp",yt="/about/assets/barber-aa5cbd9f.webp",jt="/about/assets/barbershop-715c0974.webp",xt="/about/assets/barbershop_dark-439a03ce.webp",St="/about/assets/bookshelf-262ace7d.webp",Lt="/about/assets/bookshelf_dark-ca6a1c94.webp",Tt="/about/assets/britlex-b678054f.webp",$t="/about/assets/britlex_dark-da2cb75f.webp",Ft="/about/assets/car-rental-7e3c7285.webp",Rt="/about/assets/car-rental_dark-f0fc1a03.webp",Pt="/about/assets/drinkmaster-7f0cc30d.webp",Ht="/about/assets/fighters-59a66213.webp",Mt="/about/assets/fighters2-beed3449.webp",Et="/about/assets/icecream-e9e58622.webp",Ct="/about/assets/movies-ac6b60f0.webp",qt="/about/assets/movies_dark-2040b007.webp",zt="/about/assets/phonebook-5b906d08.webp",Bt="/about/assets/phonebook_dark-6782d71c.webp",It="/about/assets/pixabay-5c253604.webp",Ot="/about/assets/pixabay_dark-ce0f94ae.webp",Vt="/about/assets/webstudio-f5dc1be0.webp",At="/about/assets/webstudio_dark-518050e1.webp",Nt="/about/assets/zenbit-339d281b.webp",Dt="/about/assets/zenbit2-46b6c751.webp",Jt="/about/assets/zenbit2_dark-56b9f156.webp";function g(e,t=null){let s="";t&&(s=`?text=${t.split(" ").join("+")}`);const i="https://placehold.co/",a=e+s;return i+a}function w(e,t){return new URL(Object.assign({"/images/projects/webp/large1x/barber.webp":oe,"/images/projects/webp/large1x/barbershop.webp":ie,"/images/projects/webp/large1x/barbershop_dark.webp":re,"/images/projects/webp/large1x/bookshelf.webp":ce,"/images/projects/webp/large1x/bookshelf_dark.webp":le,"/images/projects/webp/large1x/britlex.webp":ne,"/images/projects/webp/large1x/britlex_dark.webp":be,"/images/projects/webp/large1x/car-rental.webp":pe,"/images/projects/webp/large1x/car-rental_dark.webp":de,"/images/projects/webp/large1x/drinkmaster.webp":me,"/images/projects/webp/large1x/fighters.webp":_e,"/images/projects/webp/large1x/fighters2.webp":ue,"/images/projects/webp/large1x/icecream.webp":ge,"/images/projects/webp/large1x/movies.webp":we,"/images/projects/webp/large1x/movies_dark.webp":he,"/images/projects/webp/large1x/phonebook.webp":ve,"/images/projects/webp/large1x/phonebook_dark.webp":fe,"/images/projects/webp/large1x/pixabay.webp":ke,"/images/projects/webp/large1x/pixabay_dark.webp":ye,"/images/projects/webp/large1x/webstudio.webp":je,"/images/projects/webp/large1x/webstudio_dark.webp":xe,"/images/projects/webp/large1x/zenbit.webp":Se,"/images/projects/webp/large1x/zenbit2.webp":Le,"/images/projects/webp/large1x/zenbit2_dark.webp":Te,"/images/projects/webp/large2x/barber.webp":$e,"/images/projects/webp/large2x/barbershop.webp":Fe,"/images/projects/webp/large2x/barbershop_dark.webp":Re,"/images/projects/webp/large2x/bookshelf.webp":Pe,"/images/projects/webp/large2x/bookshelf_dark.webp":He,"/images/projects/webp/large2x/britlex.webp":Me,"/images/projects/webp/large2x/britlex_dark.webp":Ee,"/images/projects/webp/large2x/car-rental.webp":Ce,"/images/projects/webp/large2x/car-rental_dark.webp":qe,"/images/projects/webp/large2x/drinkmaster.webp":ze,"/images/projects/webp/large2x/fighters.webp":Be,"/images/projects/webp/large2x/fighters2.webp":Ie,"/images/projects/webp/large2x/icecream.webp":Oe,"/images/projects/webp/large2x/movies.webp":Ve,"/images/projects/webp/large2x/movies_dark.webp":Ae,"/images/projects/webp/large2x/phonebook.webp":Ne,"/images/projects/webp/large2x/phonebook_dark.webp":De,"/images/projects/webp/large2x/pixabay.webp":Je,"/images/projects/webp/large2x/pixabay_dark.webp":Ke,"/images/projects/webp/large2x/webstudio.webp":Qe,"/images/projects/webp/large2x/webstudio_dark.webp":Ue,"/images/projects/webp/large2x/zenbit.webp":Ge,"/images/projects/webp/large2x/zenbit2.webp":We,"/images/projects/webp/large2x/zenbit2_dark.webp":Ze,"/images/projects/webp/medium/barber.webp":Ye,"/images/projects/webp/medium/barbershop.webp":Xe,"/images/projects/webp/medium/barbershop_dark.webp":et,"/images/projects/webp/medium/bookshelf.webp":tt,"/images/projects/webp/medium/bookshelf_dark.webp":st,"/images/projects/webp/medium/britlex.webp":at,"/images/projects/webp/medium/britlex_dark.webp":ot,"/images/projects/webp/medium/car-rental.webp":it,"/images/projects/webp/medium/car-rental_dark.webp":rt,"/images/projects/webp/medium/drinkmaster.webp":ct,"/images/projects/webp/medium/fighters.webp":lt,"/images/projects/webp/medium/fighters2.webp":nt,"/images/projects/webp/medium/icecream.webp":bt,"/images/projects/webp/medium/movies.webp":pt,"/images/projects/webp/medium/movies_dark.webp":dt,"/images/projects/webp/medium/phonebook.webp":mt,"/images/projects/webp/medium/phonebook_dark.webp":_t,"/images/projects/webp/medium/pixabay.webp":ut,"/images/projects/webp/medium/pixabay_dark.webp":gt,"/images/projects/webp/medium/webstudio.webp":wt,"/images/projects/webp/medium/webstudio_dark.webp":ht,"/images/projects/webp/medium/zenbit.webp":vt,"/images/projects/webp/medium/zenbit2.webp":ft,"/images/projects/webp/medium/zenbit2_dark.webp":kt,"/images/projects/webp/small/barber.webp":yt,"/images/projects/webp/small/barbershop.webp":jt,"/images/projects/webp/small/barbershop_dark.webp":xt,"/images/projects/webp/small/bookshelf.webp":St,"/images/projects/webp/small/bookshelf_dark.webp":Lt,"/images/projects/webp/small/britlex.webp":Tt,"/images/projects/webp/small/britlex_dark.webp":$t,"/images/projects/webp/small/car-rental.webp":Ft,"/images/projects/webp/small/car-rental_dark.webp":Rt,"/images/projects/webp/small/drinkmaster.webp":Pt,"/images/projects/webp/small/fighters.webp":Ht,"/images/projects/webp/small/fighters2.webp":Mt,"/images/projects/webp/small/icecream.webp":Et,"/images/projects/webp/small/movies.webp":Ct,"/images/projects/webp/small/movies_dark.webp":qt,"/images/projects/webp/small/phonebook.webp":zt,"/images/projects/webp/small/phonebook_dark.webp":Bt,"/images/projects/webp/small/pixabay.webp":It,"/images/projects/webp/small/pixabay_dark.webp":Ot,"/images/projects/webp/small/webstudio.webp":Vt,"/images/projects/webp/small/webstudio_dark.webp":At,"/images/projects/webp/small/zenbit.webp":Nt,"/images/projects/webp/small/zenbit2.webp":Dt,"/images/projects/webp/small/zenbit2_dark.webp":Jt})[`/images/projects/webp/${e}/${t}.webp`],self.location).href}function M(e){const t=w("small",e),s=w("medium",e),i=w("large1x",e),a=w("large2x",e),o="Image pending",r=g("370x208",o),c=g("480x270",o),l=g("960x540",o),n=g("1920x1080",o);return{imgSmall:e?t:r,imgMedium:e?s:c,imgLarge1x:e?i:l,imgLarge2x:e?a:n}}function Kt(e){const{name:t,type:s,link:i,livePage:a,thumbFilename:o,description:r,stack:c,role:l,customer:n,technologies:p}=e,{imgSmall:f,imgMedium:_,imgLarge1x:d,imgLarge2x:m}=M(o),u=p.join(", ");return`
      <article>
        <h2 class="modal-title">${t}</h2>

        <div class="modal-content-wrapper">

          <div class="modal-summary">
            <div class="summary-columns-wrapper">
              <div class="summary-column">
                <p class="type"><span class="field-type">Project type:</span> ${s}</p>

                <p class="stack"><span class="field-type">Stack:</span> ${c}</p>
              </div>

              <div class="summary-column">
                <p class="role"
                style="${!l&&"display: none"}">
                  <span class="field-type">Role:</span> ${l}
                </p>

                <p class="customer"
                style="${!n&&"display: none"}">
                  <span class="field-type">Customer:</span> ${n}
                </p>
              </div>
            </div>

            <p class="technologies">${u}</p>
          </div>

          <div class="modal-image-block">
            <img
              class="project-card-image"
              srcset="
                ${f} 370w,
                ${_} 480w,
                ${d} 960w,
                ${m} 1920w"
              sizes="(max-width: 400px): 100vw, (min-width: 768px) 520px, (min-width: 1280px) 620px"
              src="${d}"
              alt="${t} live page screenshot"
            />
          </div>

          <div class="modal-description">
            <p class="project-description">${r}</p>
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
  `}const j=document.querySelector("[data-pop-up]"),E=document.querySelector("[data-modal-close]"),Qt=document.querySelector(".modal-content-injection-target");function Ut(e){const t=H.find(s=>s.id===+e);Qt.innerHTML=Kt(t),document.body.classList.add("modal-open"),j.classList.remove("is-hidden"),E.addEventListener("click",C),document.addEventListener("keydown",z),document.addEventListener("click",q)}function x(){E.removeEventListener("click",C),document.removeEventListener("click",q),document.removeEventListener("keydown",z),j.classList.add("is-hidden"),document.body.classList.remove("modal-open")}function C(e){x()}function q(e){e.target==j&&x()}function z(e){e.key==="Escape"&&x()}function Gt(e){const{id:t,name:s,type:i,link:a,livePage:o,thumbFilename:r,description:c,stack:l,role:n,customer:p,technologies:f}=e,{imgSmall:_,imgMedium:d,imgLarge1x:m,imgLarge2x:u}=M(r),L=f.join(", ");return`
    <li class="project-card">
      <article class="fade-in">
        <h2 class="card-title collapsible-toggle" data-id="${s}">${s}</h2>

        <div class="list-card collapsible">
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
                  <p class="type"><span class="field-type">Type:</span> ${i}</p>

                  <p class="customer"
                  style="${!p&&"display: none"}">
                    <span class="field-type">Customer:</span> ${p}
                  </p>

                  <p class="role"
                  style="${!n&&"display: none"}">
                    <span class="field-type">Role:</span> ${n}
                  </p>

                  <p class="stack"><span class="field-type">Stack:</span> ${l}</p>
              </div>

              <p class="technologies">${L}</p>
            </div>

            <div class="list-card-description">
              <p class="project-description">${c}</p>
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

                    <p class="stack"><span class="field-type">Stack:</span> ${l}</p>

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
  `}const Wt=e=>`
  <ul class="project-card-list">
    ${e.map(t=>Gt(t)).join("")}
  </ul>`,Zt=Wt(H),Yt=document.querySelector("#gallery");Yt.innerHTML=Zt;const B=document.querySelector(".projects-view-switch"),h=document.querySelector(".project-card-list");B.addEventListener("click",Xt);function Xt(){h.classList.toggle("gallery-view");const e=h.classList.contains("gallery-view");B.innerHTML=`View as ${e?"list":"tiles"}`,e?h.addEventListener("click",T):h.removeEventListener("click",T)}function T(e){if(e.preventDefault(),!e.target.matches(".tile-card-link"))return;const t=e.target.dataset.id;Ut(t)}const es=e=>{if(!e.target.classList.contains("collapsible-toggle"))return;const t=document.querySelectorAll(".project-card"),s=Array.from(t),i=s.find(c=>c.querySelector(".collapsible-toggle").dataset.id===e.target.dataset.id),a=i.querySelector(".collapsible-toggle"),o=i.querySelector(".collapsible"),r=s.find(c=>c===i?!1:c.querySelector(".collapsible-toggle").classList.contains("content-expanded"));if(r){const c=r.querySelector(".collapsible");r.querySelector(".collapsible-toggle").classList.remove("content-expanded"),c.style.maxHeight=null}a.classList.toggle("content-expanded"),o.style.maxHeight?(o.style.maxHeight=null,o.classList.remove("animated")):(o.style.maxHeight=o.scrollHeight+"px",o.classList.add("animated"))},ts=document.querySelector(".gallery");ts.addEventListener("click",es);const b={origin:"https://api.emailjs.com",blockHeadless:!1},S=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},ss=(e,t="https://api.emailjs.com")=>{if(!e)return;const s=S(e);b.publicKey=s.publicKey,b.blockHeadless=s.blockHeadless,b.blockList=s.blockList,b.limitRate=s.limitRate,b.origin=s.origin||t};class v{constructor(t=0,s="Network Error"){this.status=t,this.text=s}}const I=async(e,t,s={})=>{const i=await fetch(b.origin+e,{method:"POST",headers:s,body:t}),a=await i.text(),o=new v(i.status,a);if(i.ok)return o;throw o},O=(e,t,s)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},as=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},V=e=>e.webdriver||!e.languages||e.languages.length===0,A=()=>new v(451,"Unavailable For Headless Browser"),os=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},is=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},rs=(e,t)=>e instanceof FormData?e.get(t):e[t],N=(e,t)=>{if(is(e))return!1;os(e.list,e.watchVariable);const s=rs(t,e.watchVariable);return typeof s!="string"?!1:e.list.includes(s)},D=()=>new v(403,"Forbidden"),cs=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},ls=(e,t,s)=>{const i=Number(s.getItem(e)||0);return t-Date.now()+i},$=(e,t,s)=>{setTimeout(()=>{s.removeItem(e)},t)},J=(e,t,s)=>{if(!s.throttle)return!1;cs(s.throttle,s.id);const i=s.id||t,a=ls(i,s.throttle,e);return a>0?($(i,a,e),!0):(e.setItem(i,Date.now().toString()),$(i,s.throttle,e),!1)},K=()=>new v(429,"Too Many Requests"),ns=(e,t,s,i)=>{const a=S(i),o=a.publicKey||b.publicKey,r=a.blockHeadless||b.blockHeadless,c={...b.blockList,...a.blockList},l={...b.limitRate,...a.limitRate};return r&&V(navigator)?Promise.reject(A()):(O(o,e,t),as(s),s&&N(c,s)?Promise.reject(D()):J(localStorage,location.pathname,l)?Promise.reject(K()):I("/api/v1.0/email/send",JSON.stringify({lib_version:"4.1.0",user_id:o,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"}))},bs=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},ps=e=>typeof e=="string"?document.querySelector(e):e,ds=(e,t,s,i)=>{const a=S(i),o=a.publicKey||b.publicKey,r=a.blockHeadless||b.blockHeadless,c={...b.blockList,...a.blockList},l={...b.limitRate,...a.limitRate};if(r&&V(navigator))return Promise.reject(A());const n=ps(s);O(o,e,t),bs(n);const p=new FormData(n);return N(c,p)?Promise.reject(D()):J(localStorage,location.pathname,l)?Promise.reject(K()):(p.append("lib_version","4.1.0"),p.append("service_id",e),p.append("template_id",t),p.append("user_id",o),I("/api/v1.0/email/send-form",p))},Q={init:ss,send:ns,sendForm:ds};Q.init("E8FZeR5jYUP13UDEy");const ms=document.getElementById("contact-form");ms.addEventListener("submit",_s);function _s(e){e.preventDefault(),Q.sendForm("default_service","contact_form","#contact-form").then(function(t){alert("Success")},function(t){alert("Error")}).finally(function(){document.getElementById("contact-form").reset()})}
