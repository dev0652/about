(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const B=function(e){const t=`#${e}`,s=`#${e}-title`,i=document.querySelector(t),a=i.querySelector(s),o=i.querySelector(".section-content"),r=a.innerHTML;a.innerHTML="";const n=100;o.style.animationDelay=n*r.length;let c=0;function g(){c<r.length&&(a.innerHTML+=r.charAt(c),c++,setTimeout(g,n))}g()};B("about");const se=document.querySelector(".header"),I=document.querySelectorAll(".header-nav-link"),ae=document.querySelectorAll(".section"),oe=document.querySelector("main"),{height:ie}=se.getBoundingClientRect(),F=`${ie}px`;document.body.style.paddingTop=F;document.documentElement.style.scrollPaddingTop=F;oe.style.setProperty("--blurOffset",F);I.forEach(e=>{e.addEventListener("click",re)});function re(e){e.preventDefault();const{id:t}=e.target.dataset;ae.forEach(s=>{const i=s.id===t;s.style.display=i?"block":"none",i&&B(t)}),I.forEach(s=>{s.classList.remove("active")}),e.target.classList.add("active")}const R=document.querySelector("#color-scheme-switcher-checkbox"),ne=document.querySelector(".color-scheme-switcher-slider");function ce(){const e=localStorage.getItem("dark-color-scheme");e&&e!=="false"&&(R.checked=!0)}function O(){const e=document.querySelector("main");e.classList.remove("faded-edges"),R.checked?document.body.classList.add("dark"):document.body.classList.remove("dark");const t=parseFloat(getComputedStyle(document.body).getPropertyValue("transition-duration"))*1e3;setTimeout(()=>{e.classList.add("faded-edges")},t)}function le(e){localStorage.setItem("dark-color-scheme",e.checked)}function ge(){ce(),O(),R.addEventListener("change",pe),setTimeout(()=>{ne.classList.add("animated")},100)}function pe(e){O(),le(e.currentTarget)}ge();const V=[{id:1,name:"Barber course",link:"https://github.com/dev0652/barber",livePage:"https://barbercourse.kyiv.ua/",thumbFilename:"barber",type:"Commercial project",stack:"Front-end",role:"Team member",customer:"barbercourse.kyiv.ua",description:"A landing page of a barber training course created with vanilla JavaScript. I worked on this project in collaboration with two other developers and a designer.",technologies:["HTML","SaSS","JavaScript","EMailJS","Vite"]},{id:2,name:"Real Estate Deals",link:"https://github.com/dev0652/zenbit-test",livePage:"https://dev0652.github.io/zenbit-test/",technologies:["HTML","SaSS","React","React Router","Redux","Node.js","MongoDB"],thumbFilename:"zenbit",type:"Test",stack:"Front-end, back-end",role:null,customer:"ZenBit Tech",description:"Front-end is a MPA built with React (using Create React App tool) and uses React Router for routing and Redux for state management. It also makes use of a few other libraries like React Helmet, React Icons and Notiflix. Back-end is built with Node.js and MongoDB and is hosted on render.com"},{id:3,name:"Fighters (game)",link:"https://github.com/dev0652/fighters-nodejs",livePage:"https://dev0652.github.io/binary-hw-nodejs/",technologies:["HTML","SaSS","JavaScript","React","Node.js"],thumbFilename:"fighters",type:"Test",stack:"Front-end, back-end",role:null,customer:"Binary Academy",description:"A simple, unanimated fighting game. Front-end was built with React making use of class components"},{id:4,name:"Bookshelf",link:"https://github.com/dev0652/bookshelf",livePage:"https://dev0652.github.io/bookshelf/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"bookshelf",type:"Study team project",stack:"Front-end",role:"Team leader",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:5,name:"Drink Master",link:"https://github.com/PVO-fullstack/drink_master",livePage:"https://pvo-fullstack.github.io/drink_master/",technologies:["React","SaSS"],thumbFilename:"drinkmaster",type:"Study team project",stack:"Front-end",role:"Team member",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:6,name:"Car Rental",link:"https://github.com/dev0652/swift-car-rental",livePage:"https://dev0652.github.io/swift-car-rental/",technologies:["React","Styled components"],thumbFilename:"car-rental",type:"Test",stack:"Front-end",role:null,customer:null,description:"Simple, lightweight and user-friendly car rental website developed as a test assignment for a job interview"},{id:7,name:"Phonebook",link:"https://github.com/dev0652/goit-react-hw-08-phonebook",livePage:"https://dev0652.github.io/goit-react-hw-08-phonebook",technologies:["React","Styled components"],thumbFilename:"phonebook",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:8,name:"Movie database",link:"https://github.com/dev0652/goit-react-hw-05-movies",livePage:"https://dev0652.github.io/goit-react-hw-05-movies",technologies:["React"],thumbFilename:"movies",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:9,name:"Pixabay Image Search",link:"https://github.com/dev0652/pixabay-search",livePage:"https://dev0652.github.io/pixabay-search/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"pixabay",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:10,name:"Ice Cream",link:"https://github.com/dev0652/icecream",livePage:"https://dev0652.github.io/icecream/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"icecream",type:"Study team project",stack:"Front-end",role:"Team leader",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:11,name:"Web studio",link:"https://github.com/dev0652/webstudio",livePage:"https://dev0652.github.io/webstudio/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"webstudio",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:12,name:"Barbershop",link:"https://github.com/dev0652/barbershop",livePage:"https://dev0652.github.io/barbershop/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"barbershop",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:13,name:"Britlex school",link:"https://github.com/dev0652/britlex",livePage:"https://dev0652.github.io/britlex/",technologies:["HTML","SaSS"],thumbFilename:"britlex",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"}],de="/about/assets/barber-67625580.png",_e="/about/assets/barbershop-5ef4d7f4.png",be="/about/assets/barbershop_dark-528d1f16.png",me="/about/assets/bookshelf-3983bed2.png",ue="/about/assets/bookshelf_dark-2726aa83.png",he="/about/assets/britlex-1a0890cc.png",ve="/about/assets/britlex_dark-2c21b7aa.png",fe="/about/assets/car-rental-a1cd681a.png",ke="/about/assets/car-rental_dark-8a0bd8a9.png",ye="/about/assets/drinkmaster-bba1ac31.png",je="/about/assets/fighters-d1a92e9b.png",xe="/about/assets/fighters2-4f7cc224.png",we="/about/assets/icecream-0e36d0ec.png",Se="/about/assets/movies-f87ea087.png",Le="/about/assets/movies_dark-951e875c.png",Te="/about/assets/phonebook-e273cf89.png",$e="/about/assets/phonebook_dark-6e5b5b73.png",Pe="/about/assets/pixabay-b74f509f.png",Fe="/about/assets/pixabay_dark-4881f4a6.png",Re="/about/assets/webstudio-759c4125.png",He="/about/assets/webstudio_dark-fa9b54bc.png",Me="/about/assets/zenbit-b361020f.png",Ee="/about/assets/zenbit2-68802e4f.png",ze="/about/assets/zenbit2_dark-f26c23e2.png",Ce="/about/assets/barber-8b6e101c.png",qe="/about/assets/barbershop-1a52d5d5.png",Be="/about/assets/barbershop_dark-5b0f04fa.png",Ie="/about/assets/bookshelf-1de76841.png",Oe="/about/assets/bookshelf_dark-24425141.png",Ve="/about/assets/britlex-86706bec.png",Ae="/about/assets/britlex_dark-5575be1d.png",Ne="/about/assets/car-rental-e997941c.png",De="/about/assets/car-rental_dark-f9ff90be.png",Ue="/about/assets/drinkmaster-e4b6c12e.png",Je="/about/assets/fighters-7d88e763.png",Ke="/about/assets/fighters2-b9f8ab01.png",Qe="/about/assets/icecream-6ec55145.png",Ge="/about/assets/movies-c6a7571d.png",We="/about/assets/movies_dark-a6c646aa.png",Ze="/about/assets/phonebook-4d210f6d.png",Ye="/about/assets/phonebook_dark-c03e3d20.png",Xe="/about/assets/pixabay-12da8bd4.png",et="/about/assets/pixabay_dark-c844c296.png",tt="/about/assets/webstudio-87a3ca81.png",st="/about/assets/webstudio_dark-60740bb5.png",at="/about/assets/zenbit-7c7fd142.png",ot="/about/assets/zenbit2-8a18fc22.png",it="/about/assets/zenbit2_dark-6ddb31cd.png",rt="/about/assets/barber-da9bb553.png",nt="/about/assets/barbershop-a58497d3.png",ct="/about/assets/barbershop_dark-f2182d98.png",lt="/about/assets/bookshelf-82fc9a58.png",gt="/about/assets/bookshelf_dark-dc7b9556.png",pt="/about/assets/britlex-210a021d.png",dt="/about/assets/britlex_dark-a23363c7.png",_t="/about/assets/car-rental-e5a7793a.png",bt="/about/assets/car-rental_dark-be401f7f.png",mt="/about/assets/drinkmaster-184b7409.png",ut="/about/assets/fighters-69efcb6e.png",ht="/about/assets/fighters2-8667750a.png",vt="/about/assets/icecream-c5e38b81.png",ft="/about/assets/movies-256ae957.png",kt="/about/assets/movies_dark-97b8438e.png",yt="/about/assets/phonebook-8ea2438f.png",jt="/about/assets/phonebook_dark-c96b502e.png",xt="/about/assets/pixabay-1fb7286e.png",wt="/about/assets/pixabay_dark-4a595229.png",St="/about/assets/webstudio-7c5042ce.png",Lt="/about/assets/webstudio_dark-9fb1ab1d.png",Tt="/about/assets/zenbit-9e8437c7.png",$t="/about/assets/zenbit2-fc543e28.png",Pt="/about/assets/zenbit2_dark-9c8a84fd.png",Ft="/about/assets/barber-8b6e101c.png",Rt="/about/assets/barbershop-1a52d5d5.png",Ht="/about/assets/barbershop_dark-5b0f04fa.png",Mt="/about/assets/bookshelf-1de76841.png",Et="/about/assets/bookshelf_dark-24425141.png",zt="/about/assets/britlex-86706bec.png",Ct="/about/assets/britlex_dark-5575be1d.png",qt="/about/assets/car-rental-e997941c.png",Bt="/about/assets/car-rental_dark-f9ff90be.png",It="/about/assets/drinkmaster-e4b6c12e.png",Ot="/about/assets/fighters-7d88e763.png",Vt="/about/assets/fighters2-b9f8ab01.png",At="/about/assets/icecream-6ec55145.png",Nt="/about/assets/movies-c6a7571d.png",Dt="/about/assets/movies_dark-a6c646aa.png",Ut="/about/assets/phonebook-4d210f6d.png",Jt="/about/assets/phonebook_dark-c03e3d20.png",Kt="/about/assets/pixabay-12da8bd4.png",Qt="/about/assets/pixabay_dark-c844c296.png",Gt="/about/assets/webstudio-87a3ca81.png",Wt="/about/assets/webstudio_dark-60740bb5.png",Zt="/about/assets/zenbit-7c7fd142.png",Yt="/about/assets/zenbit2-8a18fc22.png",Xt="/about/assets/zenbit2_dark-6ddb31cd.png",es="/about/assets/barber-1447b65f.png",ts="/about/assets/barbershop-34536e07.png",ss="/about/assets/barbershop_dark-ee6a1c2a.png",as="/about/assets/bookshelf-d1a454cd.png",os="/about/assets/bookshelf_dark-4ba15cbc.png",is="/about/assets/britlex-22c754fb.png",rs="/about/assets/britlex_dark-0c3f2f6b.png",ns="/about/assets/car-rental-7da7d761.png",cs="/about/assets/car-rental_dark-bf50d6c7.png",ls="/about/assets/drinkmaster-953cb5e0.png",gs="/about/assets/fighters-f32f6527.png",ps="/about/assets/fighters2-4271ef1a.png",ds="/about/assets/icecream-548b5733.png",_s="/about/assets/movies-882a6a8e.png",bs="/about/assets/movies_dark-be2b1c16.png",ms="/about/assets/phonebook-8f20f524.png",us="/about/assets/phonebook_dark-57339954.png",hs="/about/assets/pixabay-6df6d180.png",vs="/about/assets/pixabay_dark-45a00706.png",fs="/about/assets/webstudio-7866571f.png",ks="/about/assets/webstudio_dark-5abe8ba2.png",ys="/about/assets/zenbit-4f856ab7.png",js="/about/assets/zenbit2-fee2cf1d.png",xs="/about/assets/zenbit2_dark-c55b5d65.png";function d(e,t=null){let s="";t&&(s=`?text=${t.split(" ").join("+")}`);const i="https://placehold.co/",a=e+s;return i+a}function f(e,t){return new URL(Object.assign({"/images/projects/large1x/barber.png":de,"/images/projects/large1x/barbershop.png":_e,"/images/projects/large1x/barbershop_dark.png":be,"/images/projects/large1x/bookshelf.png":me,"/images/projects/large1x/bookshelf_dark.png":ue,"/images/projects/large1x/britlex.png":he,"/images/projects/large1x/britlex_dark.png":ve,"/images/projects/large1x/car-rental.png":fe,"/images/projects/large1x/car-rental_dark.png":ke,"/images/projects/large1x/drinkmaster.png":ye,"/images/projects/large1x/fighters.png":je,"/images/projects/large1x/fighters2.png":xe,"/images/projects/large1x/icecream.png":we,"/images/projects/large1x/movies.png":Se,"/images/projects/large1x/movies_dark.png":Le,"/images/projects/large1x/phonebook.png":Te,"/images/projects/large1x/phonebook_dark.png":$e,"/images/projects/large1x/pixabay.png":Pe,"/images/projects/large1x/pixabay_dark.png":Fe,"/images/projects/large1x/webstudio.png":Re,"/images/projects/large1x/webstudio_dark.png":He,"/images/projects/large1x/zenbit.png":Me,"/images/projects/large1x/zenbit2.png":Ee,"/images/projects/large1x/zenbit2_dark.png":ze,"/images/projects/large2x/barber.png":Ce,"/images/projects/large2x/barbershop.png":qe,"/images/projects/large2x/barbershop_dark.png":Be,"/images/projects/large2x/bookshelf.png":Ie,"/images/projects/large2x/bookshelf_dark.png":Oe,"/images/projects/large2x/britlex.png":Ve,"/images/projects/large2x/britlex_dark.png":Ae,"/images/projects/large2x/car-rental.png":Ne,"/images/projects/large2x/car-rental_dark.png":De,"/images/projects/large2x/drinkmaster.png":Ue,"/images/projects/large2x/fighters.png":Je,"/images/projects/large2x/fighters2.png":Ke,"/images/projects/large2x/icecream.png":Qe,"/images/projects/large2x/movies.png":Ge,"/images/projects/large2x/movies_dark.png":We,"/images/projects/large2x/phonebook.png":Ze,"/images/projects/large2x/phonebook_dark.png":Ye,"/images/projects/large2x/pixabay.png":Xe,"/images/projects/large2x/pixabay_dark.png":et,"/images/projects/large2x/webstudio.png":tt,"/images/projects/large2x/webstudio_dark.png":st,"/images/projects/large2x/zenbit.png":at,"/images/projects/large2x/zenbit2.png":ot,"/images/projects/large2x/zenbit2_dark.png":it,"/images/projects/medium/barber.png":rt,"/images/projects/medium/barbershop.png":nt,"/images/projects/medium/barbershop_dark.png":ct,"/images/projects/medium/bookshelf.png":lt,"/images/projects/medium/bookshelf_dark.png":gt,"/images/projects/medium/britlex.png":pt,"/images/projects/medium/britlex_dark.png":dt,"/images/projects/medium/car-rental.png":_t,"/images/projects/medium/car-rental_dark.png":bt,"/images/projects/medium/drinkmaster.png":mt,"/images/projects/medium/fighters.png":ut,"/images/projects/medium/fighters2.png":ht,"/images/projects/medium/icecream.png":vt,"/images/projects/medium/movies.png":ft,"/images/projects/medium/movies_dark.png":kt,"/images/projects/medium/phonebook.png":yt,"/images/projects/medium/phonebook_dark.png":jt,"/images/projects/medium/pixabay.png":xt,"/images/projects/medium/pixabay_dark.png":wt,"/images/projects/medium/webstudio.png":St,"/images/projects/medium/webstudio_dark.png":Lt,"/images/projects/medium/zenbit.png":Tt,"/images/projects/medium/zenbit2.png":$t,"/images/projects/medium/zenbit2_dark.png":Pt,"/images/projects/raw/barber.png":Ft,"/images/projects/raw/barbershop.png":Rt,"/images/projects/raw/barbershop_dark.png":Ht,"/images/projects/raw/bookshelf.png":Mt,"/images/projects/raw/bookshelf_dark.png":Et,"/images/projects/raw/britlex.png":zt,"/images/projects/raw/britlex_dark.png":Ct,"/images/projects/raw/car-rental.png":qt,"/images/projects/raw/car-rental_dark.png":Bt,"/images/projects/raw/drinkmaster.png":It,"/images/projects/raw/fighters.png":Ot,"/images/projects/raw/fighters2.png":Vt,"/images/projects/raw/icecream.png":At,"/images/projects/raw/movies.png":Nt,"/images/projects/raw/movies_dark.png":Dt,"/images/projects/raw/phonebook.png":Ut,"/images/projects/raw/phonebook_dark.png":Jt,"/images/projects/raw/pixabay.png":Kt,"/images/projects/raw/pixabay_dark.png":Qt,"/images/projects/raw/webstudio.png":Gt,"/images/projects/raw/webstudio_dark.png":Wt,"/images/projects/raw/zenbit.png":Zt,"/images/projects/raw/zenbit2.png":Yt,"/images/projects/raw/zenbit2_dark.png":Xt,"/images/projects/small/barber.png":es,"/images/projects/small/barbershop.png":ts,"/images/projects/small/barbershop_dark.png":ss,"/images/projects/small/bookshelf.png":as,"/images/projects/small/bookshelf_dark.png":os,"/images/projects/small/britlex.png":is,"/images/projects/small/britlex_dark.png":rs,"/images/projects/small/car-rental.png":ns,"/images/projects/small/car-rental_dark.png":cs,"/images/projects/small/drinkmaster.png":ls,"/images/projects/small/fighters.png":gs,"/images/projects/small/fighters2.png":ps,"/images/projects/small/icecream.png":ds,"/images/projects/small/movies.png":_s,"/images/projects/small/movies_dark.png":bs,"/images/projects/small/phonebook.png":ms,"/images/projects/small/phonebook_dark.png":us,"/images/projects/small/pixabay.png":hs,"/images/projects/small/pixabay_dark.png":vs,"/images/projects/small/webstudio.png":fs,"/images/projects/small/webstudio_dark.png":ks,"/images/projects/small/zenbit.png":ys,"/images/projects/small/zenbit2.png":js,"/images/projects/small/zenbit2_dark.png":xs})[`/images/projects/${e}/${t}.png`],self.location).href}function ws(e){const{name:t,type:s,link:i,livePage:a,thumbFilename:o,description:r,stack:n,role:c,customer:g,technologies:p}=e,j=getImageUrl("small",o),x=getImageUrl("medium",o),w=getImageUrl("large1x",o),S=getImageUrl("large2x",o),_="Image pending",b=d("370x208",_),L=d("480x270",_),T=d("960x540",_),$=d("1920x1080",_),P=o?j:b,h=o?x:L,m=o?w:T,u=o?S:$,v=p.join(", ");return`
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
                style="${!g&&"display: none"}">
                  <span class="field-type">Customer:</span> ${g}
                </p>
              </div>
            </div>

            <p class="technologies">${v}</p>
          </div>

          <div class="modal-image-block">
            <img
              class="project-card-image"
              srcset="
                ${P} 370w,
                ${h} 480w,
                ${m} 960w,
                ${u} 1920w"
              sizes="(max-width: 400px): 100vw, (min-width: 768px) 520px, (min-width: 1280px) 620px"
              src="${m}"
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
  `}const H=document.querySelector("[data-pop-up]"),A=document.querySelector("[data-modal-close]"),Ss=document.querySelector(".modal-content-injection-target");function Ls(e){const t=V.find(s=>s.id===+e);Ss.innerHTML=ws(t),document.body.classList.add("modal-open"),H.classList.remove("is-hidden"),A.addEventListener("click",N),document.addEventListener("keydown",U),document.addEventListener("click",D)}function M(){A.removeEventListener("click",N),document.removeEventListener("click",D),document.removeEventListener("keydown",U),H.classList.add("is-hidden"),document.body.classList.remove("modal-open")}function N(e){M()}function D(e){e.target==H&&M()}function U(e){e.key==="Escape"&&M()}function Ts(e){const{id:t,name:s,type:i,link:a,livePage:o,thumbFilename:r,description:n,stack:c,role:g,customer:p,technologies:j}=e,x=f("small",r),w=f("medium",r),S=f("large1x",r),_=f("large2x",r),b="Image pending",L=d("370x208",b),T=d("480x270",b),$=d("960x540",b),P=d("1920x1080",b),h=r?x:L,m=r?w:T,u=r?S:$,v=r?_:P,z=j.join(", ");return`
    <li class="project-card">
      <article class="fade-in">
        <h2 class="card-title collapsible-toggle" data-id="${s}">${s}</h2>

        <div class="list-card collapsible">
          <div class="list-card-wrapper">
            <div class="list-card-image-block">
              <img
                class="project-card-image"
                srcset="
                  ${h} 370w,
                  ${m} 480w,
                  ${u} 960w,
                  ${v} 1920w"
                sizes="(min-width: 768px) 480px"
                src="${u}"
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
                  style="${!g&&"display: none"}">
                    <span class="field-type">Role:</span> ${g}
                  </p>

                  <p class="stack"><span class="field-type">Stack:</span> ${c}</p>
              </div>

              <p class="technologies">${z}</p>
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
                    ${h} 370w,
                    ${m} 480w,
                    ${u} 960w,
                    ${v} 1920w"
                  sizes="(min-width: 768px) 350px, (min-width: 1440px) 400px"
                  src="${m}"
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

                    <p class="technologies"><span class="field-type">Technologies:</span> ${z}</p>
                  </div>

                  <p class="flip-card-prompt-to-click">Click to learn more</p> 
                </div>

                             
              </div>
            </div>
  </a>

        </div>
      </article>
    </li>
  `}const $s=e=>`
  <ul class="project-card-list">
    ${e.map(t=>Ts(t)).join("")}
  </ul>`,Ps=$s(V),Fs=document.querySelector("#gallery");Fs.innerHTML=Ps;const J=document.querySelector(".projects-view-switch"),k=document.querySelector(".project-card-list");J.addEventListener("click",Rs);function Rs(){k.classList.toggle("gallery-view");const e=k.classList.contains("gallery-view");J.innerHTML=`View as ${e?"list":"tiles"}`,e?k.addEventListener("click",C):k.removeEventListener("click",C)}function C(e){if(e.preventDefault(),!e.target.matches(".tile-card-link"))return;const t=e.target.dataset.id;Ls(t)}const Hs=e=>{if(!e.target.classList.contains("collapsible-toggle"))return;const t=document.querySelectorAll(".project-card"),s=Array.from(t),i=s.find(n=>n.querySelector(".collapsible-toggle").dataset.id===e.target.dataset.id),a=i.querySelector(".collapsible-toggle"),o=i.querySelector(".collapsible"),r=s.find(n=>n===i?!1:n.querySelector(".collapsible-toggle").classList.contains("content-expanded"));if(r){const n=r.querySelector(".collapsible");r.querySelector(".collapsible-toggle").classList.remove("content-expanded"),n.style.maxHeight=null}a.classList.toggle("content-expanded"),o.style.maxHeight?(o.style.maxHeight=null,o.classList.remove("animated")):(o.style.maxHeight=o.scrollHeight+"px",o.classList.add("animated"))},Ms=document.querySelector(".gallery");Ms.addEventListener("click",Hs);const l={origin:"https://api.emailjs.com",blockHeadless:!1},E=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},Es=(e,t="https://api.emailjs.com")=>{if(!e)return;const s=E(e);l.publicKey=s.publicKey,l.blockHeadless=s.blockHeadless,l.blockList=s.blockList,l.limitRate=s.limitRate,l.origin=s.origin||t};class y{constructor(t=0,s="Network Error"){this.status=t,this.text=s}}const K=async(e,t,s={})=>{const i=await fetch(l.origin+e,{method:"POST",headers:s,body:t}),a=await i.text(),o=new y(i.status,a);if(i.ok)return o;throw o},Q=(e,t,s)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},zs=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},G=e=>e.webdriver||!e.languages||e.languages.length===0,W=()=>new y(451,"Unavailable For Headless Browser"),Cs=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},qs=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},Bs=(e,t)=>e instanceof FormData?e.get(t):e[t],Z=(e,t)=>{if(qs(e))return!1;Cs(e.list,e.watchVariable);const s=Bs(t,e.watchVariable);return typeof s!="string"?!1:e.list.includes(s)},Y=()=>new y(403,"Forbidden"),Is=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},Os=(e,t,s)=>{const i=Number(s.getItem(e)||0);return t-Date.now()+i},q=(e,t,s)=>{setTimeout(()=>{s.removeItem(e)},t)},X=(e,t,s)=>{if(!s.throttle)return!1;Is(s.throttle,s.id);const i=s.id||t,a=Os(i,s.throttle,e);return a>0?(q(i,a,e),!0):(e.setItem(i,Date.now().toString()),q(i,s.throttle,e),!1)},ee=()=>new y(429,"Too Many Requests"),Vs=(e,t,s,i)=>{const a=E(i),o=a.publicKey||l.publicKey,r=a.blockHeadless||l.blockHeadless,n={...l.blockList,...a.blockList},c={...l.limitRate,...a.limitRate};return r&&G(navigator)?Promise.reject(W()):(Q(o,e,t),zs(s),s&&Z(n,s)?Promise.reject(Y()):X(localStorage,location.pathname,c)?Promise.reject(ee()):K("/api/v1.0/email/send",JSON.stringify({lib_version:"4.1.0",user_id:o,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"}))},As=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Ns=e=>typeof e=="string"?document.querySelector(e):e,Ds=(e,t,s,i)=>{const a=E(i),o=a.publicKey||l.publicKey,r=a.blockHeadless||l.blockHeadless,n={...l.blockList,...a.blockList},c={...l.limitRate,...a.limitRate};if(r&&G(navigator))return Promise.reject(W());const g=Ns(s);Q(o,e,t),As(g);const p=new FormData(g);return Z(n,p)?Promise.reject(Y()):X(localStorage,location.pathname,c)?Promise.reject(ee()):(p.append("lib_version","4.1.0"),p.append("service_id",e),p.append("template_id",t),p.append("user_id",o),K("/api/v1.0/email/send-form",p))},te={init:Es,send:Vs,sendForm:Ds};te.init("E8FZeR5jYUP13UDEy");const Us=document.getElementById("contact-form");Us.addEventListener("submit",Js);function Js(e){e.preventDefault(),te.sendForm("default_service","contact_form","#contact-form").then(function(t){alert("Success")},function(t){alert("Error")}).finally(function(){document.getElementById("contact-form").reset()})}
