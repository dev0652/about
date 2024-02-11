(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const F=function(e){const t=`#${e}`,s=`#${e}-title`,i=document.querySelector(t),a=i.querySelector(s),o=i.querySelector(".section-content"),r=a.innerHTML;a.innerHTML="";const n=100;o.style.animationDelay=n*r.length;let c=0;function l(){c<r.length&&(a.innerHTML+=r.charAt(c),c++,setTimeout(l,n))}l()};F("about");const U=document.querySelector(".header"),R=document.querySelectorAll(".header-nav-link"),G=document.querySelectorAll(".section"),W=document.querySelector("main"),{height:Z}=U.getBoundingClientRect(),y=`${Z}px`;document.body.style.paddingTop=y;document.documentElement.style.scrollPaddingTop=y;W.style.setProperty("--blurOffset",y);R.forEach(e=>{e.addEventListener("click",Y)});function Y(e){e.preventDefault();const{id:t}=e.target.dataset;G.forEach(s=>{const i=s.id===t;s.style.display=i?"block":"none",i&&F(t)}),R.forEach(s=>{s.classList.remove("active")}),e.target.classList.add("active")}const j=document.querySelector("#color-scheme-switcher-checkbox"),X=document.querySelector(".color-scheme-switcher-slider");function ee(){const e=localStorage.getItem("dark-color-scheme");e&&e!=="false"&&(j.checked=!0)}function P(){const e=document.querySelector("main");e.classList.remove("faded-edges"),j.checked?document.body.classList.add("dark"):document.body.classList.remove("dark");const t=parseFloat(getComputedStyle(document.body).getPropertyValue("transition-duration"))*1e3;setTimeout(()=>{e.classList.add("faded-edges")},t)}function te(e){localStorage.setItem("dark-color-scheme",e.checked)}function se(){ee(),P(),j.addEventListener("change",ae),setTimeout(()=>{X.classList.add("animated")},100)}function ae(e){P(),te(e.currentTarget)}se();const H=[{id:1,name:"Barber course",link:"https://github.com/dev0652/barber",livePage:"https://barbercourse.kyiv.ua/",thumbFilename:"barber",type:"Commercial project",stack:"Front-end",role:"Team member",customer:"barbercourse.kyiv.ua",description:"A landing page of a barber training course created with vanilla JavaScript. I worked on this project in collaboration with two other developers and a designer.",technologies:["HTML","SaSS","JavaScript","EMailJS","Vite"]},{id:2,name:"Real Estate Deals",link:"https://github.com/dev0652/zenbit-test",livePage:"https://dev0652.github.io/zenbit-test/",technologies:["HTML","SaSS","React","React Router","Redux","Node.js","MongoDB"],thumbFilename:"zenbit",type:"Test",stack:"Front-end, back-end",role:null,customer:"ZenBit Tech",description:"Front-end is a MPA built with React (using Create React App tool) and uses React Router for routing and Redux for state management. It also makes use of a few other libraries like React Helmet, React Icons and Notiflix. Back-end is built with Node.js and MongoDB and is hosted on render.com"},{id:3,name:"Fighters (game)",link:"https://github.com/dev0652/fighters-nodejs",livePage:"https://dev0652.github.io/binary-hw-nodejs/",technologies:["HTML","SaSS","JavaScript","React","Node.js"],thumbFilename:"fighters",type:"Test",stack:"Front-end, back-end",role:null,customer:"Binary Academy",description:"A simple, unanimated fighting game. Front-end was built with React making use of class components"},{id:4,name:"Bookshelf",link:"https://github.com/dev0652/bookshelf",livePage:"https://dev0652.github.io/bookshelf/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"bookshelf",type:"Study team project",stack:"Front-end",role:"Team leader",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:5,name:"Drink Master",link:"https://github.com/PVO-fullstack/drink_master",livePage:"https://pvo-fullstack.github.io/drink_master/",technologies:["React","SaSS"],thumbFilename:"drinkmaster",type:"Study team project",stack:"Front-end",role:"Team member",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:6,name:"Car Rental",link:"https://github.com/dev0652/swift-car-rental",livePage:"https://dev0652.github.io/swift-car-rental/",technologies:["React","Styled components"],thumbFilename:"car-rental",type:"Test",stack:"Front-end",role:null,customer:null,description:"Simple, lightweight and user-friendly car rental website developed as a test assignment for a job interview"},{id:7,name:"Phonebook",link:"https://github.com/dev0652/goit-react-hw-08-phonebook",livePage:"https://dev0652.github.io/goit-react-hw-08-phonebook",technologies:["React","Styled components"],thumbFilename:"phonebook",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:8,name:"Movie database",link:"https://github.com/dev0652/goit-react-hw-05-movies",livePage:"https://dev0652.github.io/goit-react-hw-05-movies",technologies:["React"],thumbFilename:"movies",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:9,name:"Pixabay Image Search",link:"https://github.com/dev0652/pixabay-search",livePage:"https://dev0652.github.io/pixabay-search/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"pixabay",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:10,name:"Ice Cream",link:"https://github.com/dev0652/icecream",livePage:"https://dev0652.github.io/icecream/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"icecream",type:"Study team project",stack:"Front-end",role:"Team leader",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:11,name:"Web studio",link:"https://github.com/dev0652/webstudio",livePage:"https://dev0652.github.io/webstudio/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"webstudio",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:12,name:"Barbershop",link:"https://github.com/dev0652/barbershop",livePage:"https://dev0652.github.io/barbershop/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"barbershop",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:13,name:"Britlex school",link:"https://github.com/dev0652/britlex",livePage:"https://dev0652.github.io/britlex/",technologies:["HTML","SaSS"],thumbFilename:"britlex",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"}],oe="/about/assets/barber-67625580.png",ie="/about/assets/barbershop-5ef4d7f4.png",re="/about/assets/barbershop_dark-528d1f16.png",ne="/about/assets/bookshelf-3983bed2.png",ce="/about/assets/bookshelf_dark-2726aa83.png",le="/about/assets/britlex-1a0890cc.png",pe="/about/assets/britlex_dark-2c21b7aa.png",ge="/about/assets/car-rental-a1cd681a.png",de="/about/assets/car-rental_dark-8a0bd8a9.png",_e="/about/assets/drinkmaster-bba1ac31.png",be="/about/assets/fighters-d1a92e9b.png",me="/about/assets/fighters2-4f7cc224.png",ue="/about/assets/icecream-0e36d0ec.png",he="/about/assets/movies-f87ea087.png",ve="/about/assets/movies_dark-951e875c.png",fe="/about/assets/phonebook-e273cf89.png",ke="/about/assets/phonebook_dark-6e5b5b73.png",ye="/about/assets/pixabay-b74f509f.png",je="/about/assets/pixabay_dark-4881f4a6.png",xe="/about/assets/webstudio-759c4125.png",we="/about/assets/webstudio_dark-fa9b54bc.png",Se="/about/assets/zenbit-b361020f.png",Le="/about/assets/zenbit2-68802e4f.png",Te="/about/assets/zenbit2_dark-f26c23e2.png",$e="/about/assets/barber-8b6e101c.png",Fe="/about/assets/barbershop-1a52d5d5.png",Re="/about/assets/barbershop_dark-5b0f04fa.png",Pe="/about/assets/bookshelf-1de76841.png",He="/about/assets/bookshelf_dark-24425141.png",Me="/about/assets/britlex-86706bec.png",Ee="/about/assets/britlex_dark-5575be1d.png",ze="/about/assets/car-rental-e997941c.png",Ce="/about/assets/car-rental_dark-f9ff90be.png",qe="/about/assets/drinkmaster-e4b6c12e.png",Be="/about/assets/fighters-7d88e763.png",Ie="/about/assets/fighters2-b9f8ab01.png",Oe="/about/assets/icecream-6ec55145.png",Ve="/about/assets/movies-c6a7571d.png",Ae="/about/assets/movies_dark-a6c646aa.png",Ne="/about/assets/phonebook-4d210f6d.png",De="/about/assets/phonebook_dark-c03e3d20.png",Je="/about/assets/pixabay-12da8bd4.png",Ke="/about/assets/pixabay_dark-c844c296.png",Qe="/about/assets/webstudio-87a3ca81.png",Ue="/about/assets/webstudio_dark-60740bb5.png",Ge="/about/assets/zenbit-7c7fd142.png",We="/about/assets/zenbit2-8a18fc22.png",Ze="/about/assets/zenbit2_dark-6ddb31cd.png",Ye="/about/assets/barber-da9bb553.png",Xe="/about/assets/barbershop-a58497d3.png",et="/about/assets/barbershop_dark-f2182d98.png",tt="/about/assets/bookshelf-82fc9a58.png",st="/about/assets/bookshelf_dark-dc7b9556.png",at="/about/assets/britlex-210a021d.png",ot="/about/assets/britlex_dark-a23363c7.png",it="/about/assets/car-rental-e5a7793a.png",rt="/about/assets/car-rental_dark-be401f7f.png",nt="/about/assets/drinkmaster-184b7409.png",ct="/about/assets/fighters-69efcb6e.png",lt="/about/assets/fighters2-8667750a.png",pt="/about/assets/icecream-c5e38b81.png",gt="/about/assets/movies-256ae957.png",dt="/about/assets/movies_dark-97b8438e.png",_t="/about/assets/phonebook-8ea2438f.png",bt="/about/assets/phonebook_dark-c96b502e.png",mt="/about/assets/pixabay-1fb7286e.png",ut="/about/assets/pixabay_dark-4a595229.png",ht="/about/assets/webstudio-7c5042ce.png",vt="/about/assets/webstudio_dark-9fb1ab1d.png",ft="/about/assets/zenbit-9e8437c7.png",kt="/about/assets/zenbit2-fc543e28.png",yt="/about/assets/zenbit2_dark-9c8a84fd.png",jt="/about/assets/barber-8b6e101c.png",xt="/about/assets/barbershop-1a52d5d5.png",wt="/about/assets/barbershop_dark-5b0f04fa.png",St="/about/assets/bookshelf-1de76841.png",Lt="/about/assets/bookshelf_dark-24425141.png",Tt="/about/assets/britlex-86706bec.png",$t="/about/assets/britlex_dark-5575be1d.png",Ft="/about/assets/car-rental-e997941c.png",Rt="/about/assets/car-rental_dark-f9ff90be.png",Pt="/about/assets/drinkmaster-e4b6c12e.png",Ht="/about/assets/fighters-7d88e763.png",Mt="/about/assets/fighters2-b9f8ab01.png",Et="/about/assets/icecream-6ec55145.png",zt="/about/assets/movies-c6a7571d.png",Ct="/about/assets/movies_dark-a6c646aa.png",qt="/about/assets/phonebook-4d210f6d.png",Bt="/about/assets/phonebook_dark-c03e3d20.png",It="/about/assets/pixabay-12da8bd4.png",Ot="/about/assets/pixabay_dark-c844c296.png",Vt="/about/assets/webstudio-87a3ca81.png",At="/about/assets/webstudio_dark-60740bb5.png",Nt="/about/assets/zenbit-7c7fd142.png",Dt="/about/assets/zenbit2-8a18fc22.png",Jt="/about/assets/zenbit2_dark-6ddb31cd.png",Kt="/about/assets/barber-1447b65f.png",Qt="/about/assets/barbershop-34536e07.png",Ut="/about/assets/barbershop_dark-ee6a1c2a.png",Gt="/about/assets/bookshelf-d1a454cd.png",Wt="/about/assets/bookshelf_dark-4ba15cbc.png",Zt="/about/assets/britlex-22c754fb.png",Yt="/about/assets/britlex_dark-0c3f2f6b.png",Xt="/about/assets/car-rental-7da7d761.png",es="/about/assets/car-rental_dark-bf50d6c7.png",ts="/about/assets/drinkmaster-953cb5e0.png",ss="/about/assets/fighters-f32f6527.png",as="/about/assets/fighters2-4271ef1a.png",os="/about/assets/icecream-548b5733.png",is="/about/assets/movies-882a6a8e.png",rs="/about/assets/movies_dark-be2b1c16.png",ns="/about/assets/phonebook-8f20f524.png",cs="/about/assets/phonebook_dark-57339954.png",ls="/about/assets/pixabay-6df6d180.png",ps="/about/assets/pixabay_dark-45a00706.png",gs="/about/assets/webstudio-7866571f.png",ds="/about/assets/webstudio_dark-5abe8ba2.png",_s="/about/assets/zenbit-4f856ab7.png",bs="/about/assets/zenbit2-fee2cf1d.png",ms="/about/assets/zenbit2_dark-c55b5d65.png";function u(e,t=null){let s="";t&&(s=`?text=${t.split(" ").join("+")}`);const i="https://placehold.co/",a=e+s;return i+a}function h(e,t){return new URL(Object.assign({"/images/projects/large1x/barber.png":oe,"/images/projects/large1x/barbershop.png":ie,"/images/projects/large1x/barbershop_dark.png":re,"/images/projects/large1x/bookshelf.png":ne,"/images/projects/large1x/bookshelf_dark.png":ce,"/images/projects/large1x/britlex.png":le,"/images/projects/large1x/britlex_dark.png":pe,"/images/projects/large1x/car-rental.png":ge,"/images/projects/large1x/car-rental_dark.png":de,"/images/projects/large1x/drinkmaster.png":_e,"/images/projects/large1x/fighters.png":be,"/images/projects/large1x/fighters2.png":me,"/images/projects/large1x/icecream.png":ue,"/images/projects/large1x/movies.png":he,"/images/projects/large1x/movies_dark.png":ve,"/images/projects/large1x/phonebook.png":fe,"/images/projects/large1x/phonebook_dark.png":ke,"/images/projects/large1x/pixabay.png":ye,"/images/projects/large1x/pixabay_dark.png":je,"/images/projects/large1x/webstudio.png":xe,"/images/projects/large1x/webstudio_dark.png":we,"/images/projects/large1x/zenbit.png":Se,"/images/projects/large1x/zenbit2.png":Le,"/images/projects/large1x/zenbit2_dark.png":Te,"/images/projects/large2x/barber.png":$e,"/images/projects/large2x/barbershop.png":Fe,"/images/projects/large2x/barbershop_dark.png":Re,"/images/projects/large2x/bookshelf.png":Pe,"/images/projects/large2x/bookshelf_dark.png":He,"/images/projects/large2x/britlex.png":Me,"/images/projects/large2x/britlex_dark.png":Ee,"/images/projects/large2x/car-rental.png":ze,"/images/projects/large2x/car-rental_dark.png":Ce,"/images/projects/large2x/drinkmaster.png":qe,"/images/projects/large2x/fighters.png":Be,"/images/projects/large2x/fighters2.png":Ie,"/images/projects/large2x/icecream.png":Oe,"/images/projects/large2x/movies.png":Ve,"/images/projects/large2x/movies_dark.png":Ae,"/images/projects/large2x/phonebook.png":Ne,"/images/projects/large2x/phonebook_dark.png":De,"/images/projects/large2x/pixabay.png":Je,"/images/projects/large2x/pixabay_dark.png":Ke,"/images/projects/large2x/webstudio.png":Qe,"/images/projects/large2x/webstudio_dark.png":Ue,"/images/projects/large2x/zenbit.png":Ge,"/images/projects/large2x/zenbit2.png":We,"/images/projects/large2x/zenbit2_dark.png":Ze,"/images/projects/medium/barber.png":Ye,"/images/projects/medium/barbershop.png":Xe,"/images/projects/medium/barbershop_dark.png":et,"/images/projects/medium/bookshelf.png":tt,"/images/projects/medium/bookshelf_dark.png":st,"/images/projects/medium/britlex.png":at,"/images/projects/medium/britlex_dark.png":ot,"/images/projects/medium/car-rental.png":it,"/images/projects/medium/car-rental_dark.png":rt,"/images/projects/medium/drinkmaster.png":nt,"/images/projects/medium/fighters.png":ct,"/images/projects/medium/fighters2.png":lt,"/images/projects/medium/icecream.png":pt,"/images/projects/medium/movies.png":gt,"/images/projects/medium/movies_dark.png":dt,"/images/projects/medium/phonebook.png":_t,"/images/projects/medium/phonebook_dark.png":bt,"/images/projects/medium/pixabay.png":mt,"/images/projects/medium/pixabay_dark.png":ut,"/images/projects/medium/webstudio.png":ht,"/images/projects/medium/webstudio_dark.png":vt,"/images/projects/medium/zenbit.png":ft,"/images/projects/medium/zenbit2.png":kt,"/images/projects/medium/zenbit2_dark.png":yt,"/images/projects/raw/barber.png":jt,"/images/projects/raw/barbershop.png":xt,"/images/projects/raw/barbershop_dark.png":wt,"/images/projects/raw/bookshelf.png":St,"/images/projects/raw/bookshelf_dark.png":Lt,"/images/projects/raw/britlex.png":Tt,"/images/projects/raw/britlex_dark.png":$t,"/images/projects/raw/car-rental.png":Ft,"/images/projects/raw/car-rental_dark.png":Rt,"/images/projects/raw/drinkmaster.png":Pt,"/images/projects/raw/fighters.png":Ht,"/images/projects/raw/fighters2.png":Mt,"/images/projects/raw/icecream.png":Et,"/images/projects/raw/movies.png":zt,"/images/projects/raw/movies_dark.png":Ct,"/images/projects/raw/phonebook.png":qt,"/images/projects/raw/phonebook_dark.png":Bt,"/images/projects/raw/pixabay.png":It,"/images/projects/raw/pixabay_dark.png":Ot,"/images/projects/raw/webstudio.png":Vt,"/images/projects/raw/webstudio_dark.png":At,"/images/projects/raw/zenbit.png":Nt,"/images/projects/raw/zenbit2.png":Dt,"/images/projects/raw/zenbit2_dark.png":Jt,"/images/projects/small/barber.png":Kt,"/images/projects/small/barbershop.png":Qt,"/images/projects/small/barbershop_dark.png":Ut,"/images/projects/small/bookshelf.png":Gt,"/images/projects/small/bookshelf_dark.png":Wt,"/images/projects/small/britlex.png":Zt,"/images/projects/small/britlex_dark.png":Yt,"/images/projects/small/car-rental.png":Xt,"/images/projects/small/car-rental_dark.png":es,"/images/projects/small/drinkmaster.png":ts,"/images/projects/small/fighters.png":ss,"/images/projects/small/fighters2.png":as,"/images/projects/small/icecream.png":os,"/images/projects/small/movies.png":is,"/images/projects/small/movies_dark.png":rs,"/images/projects/small/phonebook.png":ns,"/images/projects/small/phonebook_dark.png":cs,"/images/projects/small/pixabay.png":ls,"/images/projects/small/pixabay_dark.png":ps,"/images/projects/small/webstudio.png":gs,"/images/projects/small/webstudio_dark.png":ds,"/images/projects/small/zenbit.png":_s,"/images/projects/small/zenbit2.png":bs,"/images/projects/small/zenbit2_dark.png":ms})[`/images/projects/${e}/${t}.png`],self.location).href}function M(e){const t=h("small",e),s=h("medium",e),i=h("large1x",e),a=h("large2x",e),o="Image pending",r=u("370x208",o),n=u("480x270",o),c=u("960x540",o),l=u("1920x1080",o);return{imgSmall:e?t:r,imgMedium:e?s:n,imgLarge1x:e?i:c,imgLarge2x:e?a:l}}function us(e){const{name:t,type:s,link:i,livePage:a,thumbFilename:o,description:r,stack:n,role:c,customer:l,technologies:g}=e,{imgSmall:k,imgMedium:b,imgLarge1x:d,imgLarge2x:_}=M(o),m=g.join(", ");return`
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
                style="${!l&&"display: none"}">
                  <span class="field-type">Customer:</span> ${l}
                </p>
              </div>
            </div>

            <p class="technologies">${m}</p>
          </div>

          <div class="modal-image-block">
            <img
              class="project-card-image"
              srcset="
                ${k} 370w,
                ${b} 480w,
                ${d} 960w,
                ${_} 1920w"
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
  `}const x=document.querySelector("[data-pop-up]"),E=document.querySelector("[data-modal-close]"),hs=document.querySelector(".modal-content-injection-target");function vs(e){const t=H.find(s=>s.id===+e);hs.innerHTML=us(t),document.body.classList.add("modal-open"),x.classList.remove("is-hidden"),E.addEventListener("click",z),document.addEventListener("keydown",q),document.addEventListener("click",C)}function w(){E.removeEventListener("click",z),document.removeEventListener("click",C),document.removeEventListener("keydown",q),x.classList.add("is-hidden"),document.body.classList.remove("modal-open")}function z(e){w()}function C(e){e.target==x&&w()}function q(e){e.key==="Escape"&&w()}function fs(e){const{id:t,name:s,type:i,link:a,livePage:o,thumbFilename:r,description:n,stack:c,role:l,customer:g,technologies:k}=e,{imgSmall:b,imgMedium:d,imgLarge1x:_,imgLarge2x:m}=M(r),L=k.join(", ");return`
    <li class="project-card">
      <article class="fade-in">
        <h2 class="card-title collapsible-toggle" data-id="${s}">${s}</h2>

        <div class="list-card collapsible">
          <div class="list-card-wrapper">
            <div class="list-card-image-block">
              <img
                class="project-card-image"
                srcset="
                  ${b} 370w,
                  ${d} 480w,
                  ${_} 960w,
                  ${m} 1920w"
                sizes="(min-width: 768px) 480px"
                src="${_}"
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
                  style="${!l&&"display: none"}">
                    <span class="field-type">Role:</span> ${l}
                  </p>

                  <p class="stack"><span class="field-type">Stack:</span> ${c}</p>
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
                    ${b} 370w,
                    ${d} 480w,
                    ${_} 960w,
                    ${m} 1920w"
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

                    <p class="stack"><span class="field-type">Stack:</span> ${c}</p>

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
  `}const ks=e=>`
  <ul class="project-card-list">
    ${e.map(t=>fs(t)).join("")}
  </ul>`,ys=ks(H),js=document.querySelector("#gallery");js.innerHTML=ys;const B=document.querySelector(".projects-view-switch"),v=document.querySelector(".project-card-list");B.addEventListener("click",xs);function xs(){v.classList.toggle("gallery-view");const e=v.classList.contains("gallery-view");B.innerHTML=`View as ${e?"list":"tiles"}`,e?v.addEventListener("click",T):v.removeEventListener("click",T)}function T(e){if(e.preventDefault(),!e.target.matches(".tile-card-link"))return;const t=e.target.dataset.id;vs(t)}const ws=e=>{if(!e.target.classList.contains("collapsible-toggle"))return;const t=document.querySelectorAll(".project-card"),s=Array.from(t),i=s.find(n=>n.querySelector(".collapsible-toggle").dataset.id===e.target.dataset.id),a=i.querySelector(".collapsible-toggle"),o=i.querySelector(".collapsible"),r=s.find(n=>n===i?!1:n.querySelector(".collapsible-toggle").classList.contains("content-expanded"));if(r){const n=r.querySelector(".collapsible");r.querySelector(".collapsible-toggle").classList.remove("content-expanded"),n.style.maxHeight=null}a.classList.toggle("content-expanded"),o.style.maxHeight?(o.style.maxHeight=null,o.classList.remove("animated")):(o.style.maxHeight=o.scrollHeight+"px",o.classList.add("animated"))},Ss=document.querySelector(".gallery");Ss.addEventListener("click",ws);const p={origin:"https://api.emailjs.com",blockHeadless:!1},S=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},Ls=(e,t="https://api.emailjs.com")=>{if(!e)return;const s=S(e);p.publicKey=s.publicKey,p.blockHeadless=s.blockHeadless,p.blockList=s.blockList,p.limitRate=s.limitRate,p.origin=s.origin||t};class f{constructor(t=0,s="Network Error"){this.status=t,this.text=s}}const I=async(e,t,s={})=>{const i=await fetch(p.origin+e,{method:"POST",headers:s,body:t}),a=await i.text(),o=new f(i.status,a);if(i.ok)return o;throw o},O=(e,t,s)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Ts=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},V=e=>e.webdriver||!e.languages||e.languages.length===0,A=()=>new f(451,"Unavailable For Headless Browser"),$s=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},Fs=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},Rs=(e,t)=>e instanceof FormData?e.get(t):e[t],N=(e,t)=>{if(Fs(e))return!1;$s(e.list,e.watchVariable);const s=Rs(t,e.watchVariable);return typeof s!="string"?!1:e.list.includes(s)},D=()=>new f(403,"Forbidden"),Ps=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},Hs=(e,t,s)=>{const i=Number(s.getItem(e)||0);return t-Date.now()+i},$=(e,t,s)=>{setTimeout(()=>{s.removeItem(e)},t)},J=(e,t,s)=>{if(!s.throttle)return!1;Ps(s.throttle,s.id);const i=s.id||t,a=Hs(i,s.throttle,e);return a>0?($(i,a,e),!0):(e.setItem(i,Date.now().toString()),$(i,s.throttle,e),!1)},K=()=>new f(429,"Too Many Requests"),Ms=(e,t,s,i)=>{const a=S(i),o=a.publicKey||p.publicKey,r=a.blockHeadless||p.blockHeadless,n={...p.blockList,...a.blockList},c={...p.limitRate,...a.limitRate};return r&&V(navigator)?Promise.reject(A()):(O(o,e,t),Ts(s),s&&N(n,s)?Promise.reject(D()):J(localStorage,location.pathname,c)?Promise.reject(K()):I("/api/v1.0/email/send",JSON.stringify({lib_version:"4.1.0",user_id:o,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"}))},Es=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},zs=e=>typeof e=="string"?document.querySelector(e):e,Cs=(e,t,s,i)=>{const a=S(i),o=a.publicKey||p.publicKey,r=a.blockHeadless||p.blockHeadless,n={...p.blockList,...a.blockList},c={...p.limitRate,...a.limitRate};if(r&&V(navigator))return Promise.reject(A());const l=zs(s);O(o,e,t),Es(l);const g=new FormData(l);return N(n,g)?Promise.reject(D()):J(localStorage,location.pathname,c)?Promise.reject(K()):(g.append("lib_version","4.1.0"),g.append("service_id",e),g.append("template_id",t),g.append("user_id",o),I("/api/v1.0/email/send-form",g))},Q={init:Ls,send:Ms,sendForm:Cs};Q.init("E8FZeR5jYUP13UDEy");const qs=document.getElementById("contact-form");qs.addEventListener("submit",Bs);function Bs(e){e.preventDefault(),Q.sendForm("default_service","contact_form","#contact-form").then(function(t){alert("Success")},function(t){alert("Error")}).finally(function(){document.getElementById("contact-form").reset()})}
