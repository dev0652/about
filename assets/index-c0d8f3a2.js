(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const B=function(e){const t=`#${e}`,s=`#${e}-title`,i=document.querySelector(t),a=i.querySelector(s),o=i.querySelector(".section-content"),r=a.innerHTML;a.innerHTML="";const n=100;o.style.animationDelay=n*r.length;let c=0;function p(){c<r.length&&(a.innerHTML+=r.charAt(c),c++,setTimeout(p,n))}p()};B("about");const se=document.querySelector(".header"),O=document.querySelectorAll(".header-nav-link"),ae=document.querySelectorAll(".section"),oe=document.querySelector("main"),{height:ie}=se.getBoundingClientRect(),R=`${ie}px`;document.body.style.paddingTop=R;document.documentElement.style.scrollPaddingTop=R;oe.style.setProperty("--blurOffset",R);O.forEach(e=>{e.addEventListener("click",re)});function re(e){e.preventDefault();const{id:t}=e.target.dataset;ae.forEach(s=>{const i=s.id===t;s.style.display=i?"block":"none",i&&B(t)}),O.forEach(s=>{s.classList.remove("active")}),e.target.classList.add("active")}const P=document.querySelector("#color-scheme-switcher-checkbox"),ne=document.querySelector(".color-scheme-switcher-slider");function ce(){const e=localStorage.getItem("dark-color-scheme");e&&e!=="false"&&(P.checked=!0)}function I(){const e=document.querySelector("main");e.classList.remove("faded-edges"),P.checked?document.body.classList.add("dark"):document.body.classList.remove("dark");const t=parseFloat(getComputedStyle(document.body).getPropertyValue("transition-duration"))*1e3;setTimeout(()=>{e.classList.add("faded-edges")},t)}function le(e){localStorage.setItem("dark-color-scheme",e.checked)}function pe(){ce(),I(),P.addEventListener("change",ge),setTimeout(()=>{ne.classList.add("animated")},100)}function ge(e){I(),le(e.currentTarget)}pe();const V=[{id:1,name:"Barber course",link:"https://github.com/dev0652/barber",livePage:"https://barbercourse.kyiv.ua/",thumbFilename:"barber",type:"Commercial project",stack:"Front-end",role:"Team member",customer:"barbercourse.kyiv.ua",description:"A landing page of a barber training course created with vanilla JavaScript. I worked on this project in collaboration with two other developers and a designer.",technologies:["HTML","SaSS","JavaScript","EMailJS","Vite"]},{id:2,name:"Real Estate Deals",link:"https://github.com/dev0652/zenbit-test",livePage:"https://dev0652.github.io/zenbit-test/",technologies:["HTML","SaSS","React","React Router","Redux","Node.js","MongoDB"],thumbFilename:"zenbit",type:"Test",stack:"Front-end, back-end",role:null,customer:"ZenBit Tech",description:"Front-end is a MPA built with React (using Create React App tool) and uses React Router for routing and Redux for state management. It also makes use of a few other libraries like React Helmet, React Icons and Notiflix. Back-end is built with Node.js and MongoDB and is hosted on render.com"},{id:3,name:"Fighters (game)",link:"https://github.com/dev0652/fighters-nodejs",livePage:"https://dev0652.github.io/binary-hw-nodejs/",technologies:["HTML","SaSS","JavaScript","React","Node.js"],thumbFilename:"fighters",type:"Test",stack:"Front-end, back-end",role:null,customer:"Binary Academy",description:"A simple, unanimated fighting game. Front-end was built with React making use of class components"},{id:4,name:"Bookshelf",link:"https://github.com/dev0652/bookshelf",livePage:"https://dev0652.github.io/bookshelf/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"bookshelf",type:"Study team project",stack:"Front-end",role:"Team leader",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:5,name:"Drink Master",link:"https://github.com/PVO-fullstack/drink_master",livePage:"https://pvo-fullstack.github.io/drink_master/",technologies:["React","SaSS"],thumbFilename:"drinkmaster",type:"Study team project",stack:"Front-end",role:"Team member",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:6,name:"Car Rental",link:"https://github.com/dev0652/swift-car-rental",livePage:"https://dev0652.github.io/swift-car-rental/",technologies:["React","Styled components"],thumbFilename:"car-rental",type:"Test",stack:"Front-end",role:null,customer:null,description:"Simple, lightweight and user-friendly car rental website developed as a test assignment for a job interview"},{id:7,name:"Phonebook",link:"https://github.com/dev0652/goit-react-hw-08-phonebook",livePage:"https://dev0652.github.io/goit-react-hw-08-phonebook",technologies:["React","Styled components"],thumbFilename:"phonebook",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:8,name:"Movie database",link:"https://github.com/dev0652/goit-react-hw-05-movies",livePage:"https://dev0652.github.io/goit-react-hw-05-movies",technologies:["React"],thumbFilename:"movies",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:9,name:"Pixabay Image Search",link:"https://github.com/dev0652/pixabay-search",livePage:"https://dev0652.github.io/pixabay-search/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"pixabay",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:10,name:"Ice Cream",link:"https://github.com/dev0652/icecream",livePage:"https://dev0652.github.io/icecream/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"icecream",type:"Study team project",stack:"Front-end",role:"Team leader",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:11,name:"Web studio",link:"https://github.com/dev0652/webstudio",livePage:"https://dev0652.github.io/webstudio/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"webstudio",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:12,name:"Barbershop",link:"https://github.com/dev0652/barbershop",livePage:"https://dev0652.github.io/barbershop/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"barbershop",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:13,name:"Britlex school",link:"https://github.com/dev0652/britlex",livePage:"https://dev0652.github.io/britlex/",technologies:["HTML","SaSS"],thumbFilename:"britlex",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"}],de="/about/assets/barber-1447b65f.png",me="/about/assets/barbershop-34536e07.png",be="/about/assets/barbershop_dark-ee6a1c2a.png",_e="/about/assets/bookshelf-d1a454cd.png",ue="/about/assets/bookshelf_dark-4ba15cbc.png",he="/about/assets/britlex-22c754fb.png",fe="/about/assets/britlex_dark-0c3f2f6b.png",ve="/about/assets/car-rental-7da7d761.png",ke="/about/assets/car-rental_dark-bf50d6c7.png",ye="/about/assets/drinkmaster-953cb5e0.png",je="/about/assets/fighters-f32f6527.png",xe="/about/assets/fighters2-4271ef1a.png",we="/about/assets/icecream-548b5733.png",Le="/about/assets/movies-882a6a8e.png",Se="/about/assets/movies_dark-be2b1c16.png",$e="/about/assets/phonebook-8f20f524.png",Te="/about/assets/phonebook_dark-57339954.png",Re="/about/assets/pixabay-6df6d180.png",Pe="/about/assets/pixabay_dark-45a00706.png",Fe="/about/assets/webstudio-7866571f.png",He="/about/assets/webstudio_dark-5abe8ba2.png",Me="/about/assets/zenbit-4f856ab7.png",Ee="/about/assets/zenbit2-fee2cf1d.png",Ce="/about/assets/zenbit2_dark-c55b5d65.png",qe="/about/assets/barber-da9bb553.png",ze="/about/assets/barbershop-a58497d3.png",Be="/about/assets/barbershop_dark-f2182d98.png",Oe="/about/assets/bookshelf-82fc9a58.png",Ie="/about/assets/bookshelf_dark-dc7b9556.png",Ve="/about/assets/britlex-210a021d.png",Ae="/about/assets/britlex_dark-a23363c7.png",Ne="/about/assets/car-rental-e5a7793a.png",Ue="/about/assets/car-rental_dark-be401f7f.png",De="/about/assets/drinkmaster-184b7409.png",Je="/about/assets/fighters-69efcb6e.png",Ke="/about/assets/fighters2-8667750a.png",Qe="/about/assets/icecream-c5e38b81.png",Ge="/about/assets/movies-256ae957.png",We="/about/assets/movies_dark-97b8438e.png",Ze="/about/assets/phonebook-8ea2438f.png",Ye="/about/assets/phonebook_dark-c96b502e.png",Xe="/about/assets/pixabay-1fb7286e.png",et="/about/assets/pixabay_dark-4a595229.png",tt="/about/assets/webstudio-7c5042ce.png",st="/about/assets/webstudio_dark-9fb1ab1d.png",at="/about/assets/zenbit-9e8437c7.png",ot="/about/assets/zenbit2-fc543e28.png",it="/about/assets/zenbit2_dark-9c8a84fd.png",rt="/about/assets/barber-67625580.png",nt="/about/assets/barbershop-5ef4d7f4.png",ct="/about/assets/barbershop_dark-528d1f16.png",lt="/about/assets/bookshelf-3983bed2.png",pt="/about/assets/bookshelf_dark-2726aa83.png",gt="/about/assets/britlex-1a0890cc.png",dt="/about/assets/britlex_dark-2c21b7aa.png",mt="/about/assets/car-rental-a1cd681a.png",bt="/about/assets/car-rental_dark-8a0bd8a9.png",_t="/about/assets/drinkmaster-bba1ac31.png",ut="/about/assets/fighters-d1a92e9b.png",ht="/about/assets/fighters2-4f7cc224.png",ft="/about/assets/icecream-0e36d0ec.png",vt="/about/assets/movies-f87ea087.png",kt="/about/assets/movies_dark-951e875c.png",yt="/about/assets/phonebook-e273cf89.png",jt="/about/assets/phonebook_dark-6e5b5b73.png",xt="/about/assets/pixabay-b74f509f.png",wt="/about/assets/pixabay_dark-4881f4a6.png",Lt="/about/assets/webstudio-759c4125.png",St="/about/assets/webstudio_dark-fa9b54bc.png",$t="/about/assets/zenbit-b361020f.png",Tt="/about/assets/zenbit2-68802e4f.png",Rt="/about/assets/zenbit2_dark-f26c23e2.png",Pt="/about/assets/barber-8b6e101c.png",Ft="/about/assets/barbershop-1a52d5d5.png",Ht="/about/assets/barbershop_dark-5b0f04fa.png",Mt="/about/assets/bookshelf-1de76841.png",Et="/about/assets/bookshelf_dark-24425141.png",Ct="/about/assets/britlex-86706bec.png",qt="/about/assets/britlex_dark-5575be1d.png",zt="/about/assets/car-rental-e997941c.png",Bt="/about/assets/car-rental_dark-f9ff90be.png",Ot="/about/assets/drinkmaster-e4b6c12e.png",It="/about/assets/fighters-7d88e763.png",Vt="/about/assets/fighters2-b9f8ab01.png",At="/about/assets/icecream-6ec55145.png",Nt="/about/assets/movies-c6a7571d.png",Ut="/about/assets/movies_dark-a6c646aa.png",Dt="/about/assets/phonebook-4d210f6d.png",Jt="/about/assets/phonebook_dark-c03e3d20.png",Kt="/about/assets/pixabay-12da8bd4.png",Qt="/about/assets/pixabay_dark-c844c296.png",Gt="/about/assets/webstudio-87a3ca81.png",Wt="/about/assets/webstudio_dark-60740bb5.png",Zt="/about/assets/zenbit-7c7fd142.png",Yt="/about/assets/zenbit2-8a18fc22.png",Xt="/about/assets/zenbit2_dark-6ddb31cd.png";function d(e,t=null){let s="";t&&(s=`?text=${t.split(" ").join("+")}`);const i="https://placehold.co/",a=e+s;return i+a}function es(e){const{name:t,type:s,link:i,livePage:a,thumbFilename:o,description:r,stack:n,role:c,customer:p,technologies:g}=e,m="Image pending",b=new URL(Object.assign({"/images/projects/small/barber.png":de,"/images/projects/small/barbershop.png":me,"/images/projects/small/barbershop_dark.png":be,"/images/projects/small/bookshelf.png":_e,"/images/projects/small/bookshelf_dark.png":ue,"/images/projects/small/britlex.png":he,"/images/projects/small/britlex_dark.png":fe,"/images/projects/small/car-rental.png":ve,"/images/projects/small/car-rental_dark.png":ke,"/images/projects/small/drinkmaster.png":ye,"/images/projects/small/fighters.png":je,"/images/projects/small/fighters2.png":xe,"/images/projects/small/icecream.png":we,"/images/projects/small/movies.png":Le,"/images/projects/small/movies_dark.png":Se,"/images/projects/small/phonebook.png":$e,"/images/projects/small/phonebook_dark.png":Te,"/images/projects/small/pixabay.png":Re,"/images/projects/small/pixabay_dark.png":Pe,"/images/projects/small/webstudio.png":Fe,"/images/projects/small/webstudio_dark.png":He,"/images/projects/small/zenbit.png":Me,"/images/projects/small/zenbit2.png":Ee,"/images/projects/small/zenbit2_dark.png":Ce})[`/images/projects/small/${o}.png`],self.location).href,_=new URL(Object.assign({"/images/projects/medium/barber.png":qe,"/images/projects/medium/barbershop.png":ze,"/images/projects/medium/barbershop_dark.png":Be,"/images/projects/medium/bookshelf.png":Oe,"/images/projects/medium/bookshelf_dark.png":Ie,"/images/projects/medium/britlex.png":Ve,"/images/projects/medium/britlex_dark.png":Ae,"/images/projects/medium/car-rental.png":Ne,"/images/projects/medium/car-rental_dark.png":Ue,"/images/projects/medium/drinkmaster.png":De,"/images/projects/medium/fighters.png":Je,"/images/projects/medium/fighters2.png":Ke,"/images/projects/medium/icecream.png":Qe,"/images/projects/medium/movies.png":Ge,"/images/projects/medium/movies_dark.png":We,"/images/projects/medium/phonebook.png":Ze,"/images/projects/medium/phonebook_dark.png":Ye,"/images/projects/medium/pixabay.png":Xe,"/images/projects/medium/pixabay_dark.png":et,"/images/projects/medium/webstudio.png":tt,"/images/projects/medium/webstudio_dark.png":st,"/images/projects/medium/zenbit.png":at,"/images/projects/medium/zenbit2.png":ot,"/images/projects/medium/zenbit2_dark.png":it})[`/images/projects/medium/${o}.png`],self.location).href,y=new URL(Object.assign({"/images/projects/large1x/barber.png":rt,"/images/projects/large1x/barbershop.png":nt,"/images/projects/large1x/barbershop_dark.png":ct,"/images/projects/large1x/bookshelf.png":lt,"/images/projects/large1x/bookshelf_dark.png":pt,"/images/projects/large1x/britlex.png":gt,"/images/projects/large1x/britlex_dark.png":dt,"/images/projects/large1x/car-rental.png":mt,"/images/projects/large1x/car-rental_dark.png":bt,"/images/projects/large1x/drinkmaster.png":_t,"/images/projects/large1x/fighters.png":ut,"/images/projects/large1x/fighters2.png":ht,"/images/projects/large1x/icecream.png":ft,"/images/projects/large1x/movies.png":vt,"/images/projects/large1x/movies_dark.png":kt,"/images/projects/large1x/phonebook.png":yt,"/images/projects/large1x/phonebook_dark.png":jt,"/images/projects/large1x/pixabay.png":xt,"/images/projects/large1x/pixabay_dark.png":wt,"/images/projects/large1x/webstudio.png":Lt,"/images/projects/large1x/webstudio_dark.png":St,"/images/projects/large1x/zenbit.png":$t,"/images/projects/large1x/zenbit2.png":Tt,"/images/projects/large1x/zenbit2_dark.png":Rt})[`/images/projects/large1x/${o}.png`],self.location).href,j=new URL(Object.assign({"/images/projects/large2x/barber.png":Pt,"/images/projects/large2x/barbershop.png":Ft,"/images/projects/large2x/barbershop_dark.png":Ht,"/images/projects/large2x/bookshelf.png":Mt,"/images/projects/large2x/bookshelf_dark.png":Et,"/images/projects/large2x/britlex.png":Ct,"/images/projects/large2x/britlex_dark.png":qt,"/images/projects/large2x/car-rental.png":zt,"/images/projects/large2x/car-rental_dark.png":Bt,"/images/projects/large2x/drinkmaster.png":Ot,"/images/projects/large2x/fighters.png":It,"/images/projects/large2x/fighters2.png":Vt,"/images/projects/large2x/icecream.png":At,"/images/projects/large2x/movies.png":Nt,"/images/projects/large2x/movies_dark.png":Ut,"/images/projects/large2x/phonebook.png":Dt,"/images/projects/large2x/phonebook_dark.png":Jt,"/images/projects/large2x/pixabay.png":Kt,"/images/projects/large2x/pixabay_dark.png":Qt,"/images/projects/large2x/webstudio.png":Gt,"/images/projects/large2x/webstudio_dark.png":Wt,"/images/projects/large2x/zenbit.png":Zt,"/images/projects/large2x/zenbit2.png":Yt,"/images/projects/large2x/zenbit2_dark.png":Xt})[`/images/projects/large2x/${o}.png`],self.location).href,x=d("370x208",m),w=d("480x270",m),L=d("960x540",m),S=d("1920x1080",m),$=o?b:x,T=o?_:w,u=o?y:L,h=o?j:S,f=g.join(", ");return`
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
                style="${!c&&"display: none"}">
                  <span class="field-type">Role:</span> ${c}
                </p>

                <p class="customer"
                style="${!p&&"display: none"}">
                  <span class="field-type">Customer:</span> ${p}
                </p>
              </div>
            </div>

            <p class="technologies">${f}</p>
          </div>

          <div class="modal-image-block">
            <img
              class="project-card-image"
              srcset="
                ${$} 370w,
                ${T} 480w,
                ${u} 960w,
                ${h} 1920w"
              sizes="(max-width: 400px): 100vw, (min-width: 768px) 520px, (min-width: 1280px) 620px"
              src="${u}"
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
  `}const F=document.querySelector("[data-pop-up]"),A=document.querySelector("[data-modal-close]"),ts=document.querySelector(".modal-content-injection-target");function ss(e){const t=V.find(s=>s.id===+e);ts.innerHTML=es(t),document.body.classList.add("modal-open"),F.classList.remove("is-hidden"),A.addEventListener("click",N),document.addEventListener("keydown",D),document.addEventListener("click",U)}function H(){A.removeEventListener("click",N),document.removeEventListener("click",U),document.removeEventListener("keydown",D),F.classList.add("is-hidden"),document.body.classList.remove("modal-open")}function N(e){H()}function U(e){e.target==F&&H()}function D(e){e.key==="Escape"&&H()}function as(e){const{id:t,name:s,type:i,link:a,livePage:o,thumbFilename:r,description:n,stack:c,role:p,customer:g,technologies:m}=e,b="../images/projects",_="Image pending",y=new URL(`${b}/small/${r}.png`,import.meta.url).href,j=new URL(`${b}/medium/${r}.png`,import.meta.url).href,x=new URL(`${b}/large1x/${r}.png`,import.meta.url).href,w=new URL(`${b}/large2x/${r}.png`,import.meta.url).href,L=d("370x208",_),S=d("480x270",_),$=d("960x540",_),T=d("1920x1080",_),u=r?y:L,h=r?j:S,f=r?x:$,E=r?w:T,C=m.join(", ");return`
    <li class="project-card">
      <article class="fade-in">
        <h2 class="card-title collapsible-toggle" data-id="${s}">${s}</h2>

        <div class="list-card collapsible">
          <div class="list-card-wrapper">
            <div class="list-card-image-block">
              <img
                class="project-card-image"
                srcset="
                  ${u} 370w,
                  ${h} 480w,
                  ${f} 960w,
                  ${E} 1920w"
                sizes="(min-width: 768px) 480px"
                src="${f}"
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
                  style="${!g&&"display: none"}">
                    <span class="field-type">Customer:</span> ${g}
                  </p>

                  <p class="role"
                  style="${!p&&"display: none"}">
                    <span class="field-type">Role:</span> ${p}
                  </p>

                  <p class="stack"><span class="field-type">Stack:</span> ${c}</p>
              </div>

              <p class="technologies">${C}</p>
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
                    ${u} 370w,
                    ${h} 480w,
                    ${f} 960w,
                    ${E} 1920w"
                  sizes="(min-width: 768px) 350px, (min-width: 1440px) 400px"
                  src="${h}"
                  alt="${s} live page screenshot"
                  loading="lazy"
                />
              </div>

              <div class="flip-card-back">
                <h3 class="flip-card-project-name">${s}</h3>

                <div class="tile-card-project-summary">
                  <div>
                    <p class="type"><span class="field-type">Type:</span> ${i}</p>

                    <p class="stack"><span class="field-type">Stack:</span> ${c}</p>

                    <p class="technologies"><span class="field-type">Technologies:</span> ${C}</p>
                  </div>

                  <p class="flip-card-prompt-to-click">Click to learn more</p> 
                </div>

                             
              </div>
            </div>
  </a>

        </div>
      </article>
    </li>
  `}const os=e=>`
  <ul class="project-card-list">
    ${e.map(t=>as(t)).join("")}
  </ul>`,is=os(V),rs=document.querySelector("#gallery");rs.innerHTML=is;const J=document.querySelector(".projects-view-switch"),v=document.querySelector(".project-card-list");J.addEventListener("click",ns);function ns(){v.classList.toggle("gallery-view");const e=v.classList.contains("gallery-view");J.innerHTML=`View as ${e?"list":"tiles"}`,e?v.addEventListener("click",q):v.removeEventListener("click",q)}function q(e){if(e.preventDefault(),!e.target.matches(".tile-card-link"))return;const t=e.target.dataset.id;ss(t)}const cs=e=>{if(!e.target.classList.contains("collapsible-toggle"))return;const t=document.querySelectorAll(".project-card"),s=Array.from(t),i=s.find(n=>n.querySelector(".collapsible-toggle").dataset.id===e.target.dataset.id),a=i.querySelector(".collapsible-toggle"),o=i.querySelector(".collapsible"),r=s.find(n=>n===i?!1:n.querySelector(".collapsible-toggle").classList.contains("content-expanded"));if(r){const n=r.querySelector(".collapsible");r.querySelector(".collapsible-toggle").classList.remove("content-expanded"),n.style.maxHeight=null}a.classList.toggle("content-expanded"),o.style.maxHeight?(o.style.maxHeight=null,o.classList.remove("animated")):(o.style.maxHeight=o.scrollHeight+"px",o.classList.add("animated"))},ls=document.querySelector(".gallery");ls.addEventListener("click",cs);const l={origin:"https://api.emailjs.com",blockHeadless:!1},M=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},ps=(e,t="https://api.emailjs.com")=>{if(!e)return;const s=M(e);l.publicKey=s.publicKey,l.blockHeadless=s.blockHeadless,l.blockList=s.blockList,l.limitRate=s.limitRate,l.origin=s.origin||t};class k{constructor(t=0,s="Network Error"){this.status=t,this.text=s}}const K=async(e,t,s={})=>{const i=await fetch(l.origin+e,{method:"POST",headers:s,body:t}),a=await i.text(),o=new k(i.status,a);if(i.ok)return o;throw o},Q=(e,t,s)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},gs=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},G=e=>e.webdriver||!e.languages||e.languages.length===0,W=()=>new k(451,"Unavailable For Headless Browser"),ds=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},ms=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},bs=(e,t)=>e instanceof FormData?e.get(t):e[t],Z=(e,t)=>{if(ms(e))return!1;ds(e.list,e.watchVariable);const s=bs(t,e.watchVariable);return typeof s!="string"?!1:e.list.includes(s)},Y=()=>new k(403,"Forbidden"),_s=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},us=(e,t,s)=>{const i=Number(s.getItem(e)||0);return t-Date.now()+i},z=(e,t,s)=>{setTimeout(()=>{s.removeItem(e)},t)},X=(e,t,s)=>{if(!s.throttle)return!1;_s(s.throttle,s.id);const i=s.id||t,a=us(i,s.throttle,e);return a>0?(z(i,a,e),!0):(e.setItem(i,Date.now().toString()),z(i,s.throttle,e),!1)},ee=()=>new k(429,"Too Many Requests"),hs=(e,t,s,i)=>{const a=M(i),o=a.publicKey||l.publicKey,r=a.blockHeadless||l.blockHeadless,n={...l.blockList,...a.blockList},c={...l.limitRate,...a.limitRate};return r&&G(navigator)?Promise.reject(W()):(Q(o,e,t),gs(s),s&&Z(n,s)?Promise.reject(Y()):X(localStorage,location.pathname,c)?Promise.reject(ee()):K("/api/v1.0/email/send",JSON.stringify({lib_version:"4.1.0",user_id:o,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"}))},fs=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},vs=e=>typeof e=="string"?document.querySelector(e):e,ks=(e,t,s,i)=>{const a=M(i),o=a.publicKey||l.publicKey,r=a.blockHeadless||l.blockHeadless,n={...l.blockList,...a.blockList},c={...l.limitRate,...a.limitRate};if(r&&G(navigator))return Promise.reject(W());const p=vs(s);Q(o,e,t),fs(p);const g=new FormData(p);return Z(n,g)?Promise.reject(Y()):X(localStorage,location.pathname,c)?Promise.reject(ee()):(g.append("lib_version","4.1.0"),g.append("service_id",e),g.append("template_id",t),g.append("user_id",o),K("/api/v1.0/email/send-form",g))},te={init:ps,send:hs,sendForm:ks};te.init("E8FZeR5jYUP13UDEy");const ys=document.getElementById("contact-form");ys.addEventListener("submit",js);function js(e){e.preventDefault(),te.sendForm("default_service","contact_form","#contact-form").then(function(t){alert("Success")},function(t){alert("Error")}).finally(function(){document.getElementById("contact-form").reset()})}
