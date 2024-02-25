(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const P=function(e){const t=`#${e}`,s=`#${e}-title`,i=document.querySelector(t),a=i.querySelector(s),o=i.querySelector(".section-content"),c=a.innerHTML;a.innerHTML="";const n=100;o.style.animationDelay=n*c.length;let r=0;function l(){r<c.length&&(a.innerHTML+=c.charAt(r),r++,setTimeout(l,n))}l()};P("about");const Y=document.querySelector(".header"),H=document.querySelectorAll(".header-nav-link"),Z=document.querySelectorAll(".section"),X=document.querySelector("main"),{height:ee}=Y.getBoundingClientRect(),u=`${ee}px`,te=window.innerWidth<768;te?(document.body.style.paddingBottom=u,document.documentElement.style.scrollPaddingBottom=u):(document.body.style.paddingTop=u,document.documentElement.style.scrollPaddingTop=u);X.style.setProperty("--blurOffset",u);H.forEach(e=>{e.addEventListener("click",se)});function se(e){e.preventDefault();const{id:t}=e.target.dataset;Z.forEach(s=>{const i=s.id===t;s.style.display=i?"block":"none",i&&P(t)}),H.forEach(s=>{s.classList.remove("active")}),e.target.classList.add("active")}const S=document.querySelector("#color-scheme-switcher-checkbox"),ae=document.querySelector(".color-scheme-switcher-slider");function oe(){const e=localStorage.getItem("dark-color-scheme");e&&e!=="false"&&(S.checked=!0)}function M(){const e=document.querySelector("main");e.classList.remove("faded-edges"),S.checked?document.body.classList.add("dark"):document.body.classList.remove("dark");const t=parseFloat(getComputedStyle(document.body).getPropertyValue("transition-duration"))*1e3;setTimeout(()=>{e.classList.add("faded-edges")},t)}function ie(e){localStorage.setItem("dark-color-scheme",e.checked)}function re(){oe(),M(),S.addEventListener("change",ce),setTimeout(()=>{ae.classList.add("animated")},100)}function ce(e){M(),ie(e.currentTarget)}re();const R=[{id:1,name:"Barber course",link:"https://github.com/dev0652/barber",livePage:"https://barbercourse.kyiv.ua/",thumbFilename:"barber",type:"Commercial project",stack:"Front-end",role:"Team member",customer:"barbercourse.kyiv.ua",description:"A landing page of a barber training course created with vanilla JavaScript. I worked on this project in collaboration with two other developers and a designer.",technologies:["HTML","SaSS","JavaScript","EMailJS","Vite"]},{id:2,name:"Real Estate Deals",link:"https://github.com/dev0652/zenbit-test",livePage:"https://dev0652.github.io/zenbit-test/",technologies:["HTML","SaSS","React","React Router","Redux","Node.js","MongoDB"],thumbFilename:"zenbit",type:"Test",stack:"Front-end, back-end",role:null,customer:"ZenBit Tech",description:"Front-end is a MPA built with React (using Create React App tool) and uses React Router for routing and Redux for state management. It also makes use of a few other libraries like React Helmet, React Icons and Notiflix. Back-end is built with Node.js and MongoDB and is hosted on render.com"},{id:3,name:"Fighters (game)",link:"https://github.com/dev0652/fighters-nodejs",livePage:"https://dev0652.github.io/binary-hw-nodejs/",technologies:["HTML","SaSS","JavaScript","React","Node.js"],thumbFilename:"fighters",type:"Test",stack:"Front-end, back-end",role:null,customer:"Binary Academy",description:"A simple, unanimated fighting game. Front-end was built with React making use of class components"},{id:4,name:"Bookshelf",link:"https://github.com/dev0652/bookshelf",livePage:"https://dev0652.github.io/bookshelf/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"bookshelf",type:"Study team project",stack:"Front-end",role:"Team leader",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:5,name:"Drink Master",link:"https://github.com/PVO-fullstack/drink_master",livePage:"https://pvo-fullstack.github.io/drink_master/",technologies:["React","SaSS"],thumbFilename:"drinkmaster",type:"Study team project",stack:"Front-end",role:"Team member",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:6,name:"Car Rental",link:"https://github.com/dev0652/swift-car-rental",livePage:"https://dev0652.github.io/swift-car-rental/",technologies:["React","Styled components"],thumbFilename:"car-rental",type:"Test",stack:"Front-end",role:null,customer:null,description:"Simple, lightweight and user-friendly car rental website developed as a test assignment for a job interview"},{id:7,name:"Phonebook",link:"https://github.com/dev0652/goit-react-hw-08-phonebook",livePage:"https://dev0652.github.io/goit-react-hw-08-phonebook",technologies:["React","Styled components"],thumbFilename:"phonebook",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:8,name:"Movie database",link:"https://github.com/dev0652/goit-react-hw-05-movies",livePage:"https://dev0652.github.io/goit-react-hw-05-movies",technologies:["React"],thumbFilename:"movies",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:9,name:"Pixabay Image Search",link:"https://github.com/dev0652/pixabay-search",livePage:"https://dev0652.github.io/pixabay-search/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"pixabay",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:10,name:"Ice Cream",link:"https://github.com/dev0652/icecream",livePage:"https://dev0652.github.io/icecream/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"icecream",type:"Study team project",stack:"Front-end",role:"Team leader",customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:11,name:"Web studio",link:"https://github.com/dev0652/webstudio",livePage:"https://dev0652.github.io/webstudio/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"webstudio",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:12,name:"Barbershop",link:"https://github.com/dev0652/barbershop",livePage:"https://dev0652.github.io/barbershop/",technologies:["HTML","SaSS","JavaScript"],thumbFilename:"barbershop",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"},{id:13,name:"Britlex school",link:"https://github.com/dev0652/britlex",livePage:"https://dev0652.github.io/britlex/",technologies:["HTML","SaSS"],thumbFilename:"britlex",type:"Study project",stack:"Front-end",role:null,customer:null,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam?"}],le="/about/assets/barber-de3cd9d8.webp",ne="/about/assets/barbershop-ec861e44.webp",be="/about/assets/barbershop_dark-59c3fce1.webp",pe="/about/assets/bookshelf-f8a8c9d4.webp",de="/about/assets/bookshelf_dark-bf3b3150.webp",me="/about/assets/britlex-bcf6ef08.webp",ue="/about/assets/britlex_dark-a4d44317.webp",_e="/about/assets/car-rental-802b2989.webp",ge="/about/assets/car-rental_dark-43daf841.webp",we="/about/assets/drinkmaster-aa80d719.webp",he="/about/assets/fighters-b4765f9f.webp",fe="/about/assets/fighters2-ed0181de.webp",ve="/about/assets/icecream-65c39696.webp",ke="/about/assets/movies-8e6e307f.webp",ye="/about/assets/movies_dark-b7cc634e.webp",je="/about/assets/phonebook-48bfd202.webp",xe="/about/assets/phonebook_dark-d4c93600.webp",Se="/about/assets/pixabay-0ad7c813.webp",Le="/about/assets/pixabay_dark-dda5df94.webp",Te="/about/assets/webstudio-7fcc608d.webp",$e="/about/assets/webstudio_dark-a8029636.webp",Ee="/about/assets/zenbit-15843d79.webp",Fe="/about/assets/zenbit2-2532e0d4.webp",Pe="/about/assets/zenbit2_dark-ffc6b028.webp",He="/about/assets/barber-f8d99466.webp",Me="/about/assets/barbershop-f845a3e9.webp",Re="/about/assets/barbershop_dark-178f4630.webp",qe="/about/assets/bookshelf-557de787.webp",Ce="/about/assets/bookshelf_dark-21d0a7f3.webp",ze="/about/assets/britlex-2b760e1d.webp",Be="/about/assets/britlex_dark-8f8c5ea1.webp",Ie="/about/assets/car-rental-ddb6be08.webp",Oe="/about/assets/car-rental_dark-095f9ccb.webp",Ae="/about/assets/drinkmaster-514cd3e4.webp",Ve="/about/assets/fighters-4d20cf8e.webp",Ne="/about/assets/fighters2-544e9e59.webp",De="/about/assets/icecream-bb641ed3.webp",Je="/about/assets/movies-044bf4cc.webp",Ke="/about/assets/movies_dark-01709605.webp",Qe="/about/assets/phonebook-7909f0b1.webp",Ue="/about/assets/phonebook_dark-d31da813.webp",Ge="/about/assets/pixabay-1e86a6cc.webp",We="/about/assets/pixabay_dark-6b538044.webp",Ye="/about/assets/webstudio-d8b36b21.webp",Ze="/about/assets/webstudio_dark-98964300.webp",Xe="/about/assets/zenbit-2c1e57ee.webp",et="/about/assets/zenbit2-e1519d80.webp",tt="/about/assets/zenbit2_dark-f82dbe79.webp",st="/about/assets/barber-2b870e02.webp",at="/about/assets/barbershop-960e9d39.webp",ot="/about/assets/barbershop_dark-13b7cc16.webp",it="/about/assets/bookshelf-8cfd7c74.webp",rt="/about/assets/bookshelf_dark-a4834c85.webp",ct="/about/assets/britlex-5ec0e49e.webp",lt="/about/assets/britlex_dark-4bbf8186.webp",nt="/about/assets/car-rental-84ddf04d.webp",bt="/about/assets/car-rental_dark-4595a6fc.webp",pt="/about/assets/drinkmaster-e0357061.webp",dt="/about/assets/fighters-6579123e.webp",mt="/about/assets/fighters2-f389db97.webp",ut="/about/assets/icecream-ac11c61e.webp",_t="/about/assets/movies-b9cbdc0a.webp",gt="/about/assets/movies_dark-890dc89c.webp",wt="/about/assets/phonebook-7f4d5039.webp",ht="/about/assets/phonebook_dark-17af4cba.webp",ft="/about/assets/pixabay-73b5c30e.webp",vt="/about/assets/pixabay_dark-45d0cfd9.webp",kt="/about/assets/webstudio-9bf7e70c.webp",yt="/about/assets/webstudio_dark-524c1990.webp",jt="/about/assets/zenbit-e7f62cb0.webp",xt="/about/assets/zenbit2-65a83c01.webp",St="/about/assets/zenbit2_dark-cce9d275.webp",Lt="/about/assets/barber-aa5cbd9f.webp",Tt="/about/assets/barbershop-715c0974.webp",$t="/about/assets/barbershop_dark-439a03ce.webp",Et="/about/assets/bookshelf-262ace7d.webp",Ft="/about/assets/bookshelf_dark-ca6a1c94.webp",Pt="/about/assets/britlex-b678054f.webp",Ht="/about/assets/britlex_dark-da2cb75f.webp",Mt="/about/assets/car-rental-7e3c7285.webp",Rt="/about/assets/car-rental_dark-f0fc1a03.webp",qt="/about/assets/drinkmaster-7f0cc30d.webp",Ct="/about/assets/fighters-59a66213.webp",zt="/about/assets/fighters2-beed3449.webp",Bt="/about/assets/icecream-e9e58622.webp",It="/about/assets/movies-ac6b60f0.webp",Ot="/about/assets/movies_dark-2040b007.webp",At="/about/assets/phonebook-5b906d08.webp",Vt="/about/assets/phonebook_dark-6782d71c.webp",Nt="/about/assets/pixabay-5c253604.webp",Dt="/about/assets/pixabay_dark-ce0f94ae.webp",Jt="/about/assets/webstudio-f5dc1be0.webp",Kt="/about/assets/webstudio_dark-518050e1.webp",Qt="/about/assets/zenbit-339d281b.webp",Ut="/about/assets/zenbit2-46b6c751.webp",Gt="/about/assets/zenbit2_dark-56b9f156.webp";function h(e,t=null){let s="";t&&(s=`?text=${t.split(" ").join("+")}`);const i="https://placehold.co/",a=e+s;return i+a}function f(e,t){return new URL(Object.assign({"/images/projects/webp/large1x/barber.webp":le,"/images/projects/webp/large1x/barbershop.webp":ne,"/images/projects/webp/large1x/barbershop_dark.webp":be,"/images/projects/webp/large1x/bookshelf.webp":pe,"/images/projects/webp/large1x/bookshelf_dark.webp":de,"/images/projects/webp/large1x/britlex.webp":me,"/images/projects/webp/large1x/britlex_dark.webp":ue,"/images/projects/webp/large1x/car-rental.webp":_e,"/images/projects/webp/large1x/car-rental_dark.webp":ge,"/images/projects/webp/large1x/drinkmaster.webp":we,"/images/projects/webp/large1x/fighters.webp":he,"/images/projects/webp/large1x/fighters2.webp":fe,"/images/projects/webp/large1x/icecream.webp":ve,"/images/projects/webp/large1x/movies.webp":ke,"/images/projects/webp/large1x/movies_dark.webp":ye,"/images/projects/webp/large1x/phonebook.webp":je,"/images/projects/webp/large1x/phonebook_dark.webp":xe,"/images/projects/webp/large1x/pixabay.webp":Se,"/images/projects/webp/large1x/pixabay_dark.webp":Le,"/images/projects/webp/large1x/webstudio.webp":Te,"/images/projects/webp/large1x/webstudio_dark.webp":$e,"/images/projects/webp/large1x/zenbit.webp":Ee,"/images/projects/webp/large1x/zenbit2.webp":Fe,"/images/projects/webp/large1x/zenbit2_dark.webp":Pe,"/images/projects/webp/large2x/barber.webp":He,"/images/projects/webp/large2x/barbershop.webp":Me,"/images/projects/webp/large2x/barbershop_dark.webp":Re,"/images/projects/webp/large2x/bookshelf.webp":qe,"/images/projects/webp/large2x/bookshelf_dark.webp":Ce,"/images/projects/webp/large2x/britlex.webp":ze,"/images/projects/webp/large2x/britlex_dark.webp":Be,"/images/projects/webp/large2x/car-rental.webp":Ie,"/images/projects/webp/large2x/car-rental_dark.webp":Oe,"/images/projects/webp/large2x/drinkmaster.webp":Ae,"/images/projects/webp/large2x/fighters.webp":Ve,"/images/projects/webp/large2x/fighters2.webp":Ne,"/images/projects/webp/large2x/icecream.webp":De,"/images/projects/webp/large2x/movies.webp":Je,"/images/projects/webp/large2x/movies_dark.webp":Ke,"/images/projects/webp/large2x/phonebook.webp":Qe,"/images/projects/webp/large2x/phonebook_dark.webp":Ue,"/images/projects/webp/large2x/pixabay.webp":Ge,"/images/projects/webp/large2x/pixabay_dark.webp":We,"/images/projects/webp/large2x/webstudio.webp":Ye,"/images/projects/webp/large2x/webstudio_dark.webp":Ze,"/images/projects/webp/large2x/zenbit.webp":Xe,"/images/projects/webp/large2x/zenbit2.webp":et,"/images/projects/webp/large2x/zenbit2_dark.webp":tt,"/images/projects/webp/medium/barber.webp":st,"/images/projects/webp/medium/barbershop.webp":at,"/images/projects/webp/medium/barbershop_dark.webp":ot,"/images/projects/webp/medium/bookshelf.webp":it,"/images/projects/webp/medium/bookshelf_dark.webp":rt,"/images/projects/webp/medium/britlex.webp":ct,"/images/projects/webp/medium/britlex_dark.webp":lt,"/images/projects/webp/medium/car-rental.webp":nt,"/images/projects/webp/medium/car-rental_dark.webp":bt,"/images/projects/webp/medium/drinkmaster.webp":pt,"/images/projects/webp/medium/fighters.webp":dt,"/images/projects/webp/medium/fighters2.webp":mt,"/images/projects/webp/medium/icecream.webp":ut,"/images/projects/webp/medium/movies.webp":_t,"/images/projects/webp/medium/movies_dark.webp":gt,"/images/projects/webp/medium/phonebook.webp":wt,"/images/projects/webp/medium/phonebook_dark.webp":ht,"/images/projects/webp/medium/pixabay.webp":ft,"/images/projects/webp/medium/pixabay_dark.webp":vt,"/images/projects/webp/medium/webstudio.webp":kt,"/images/projects/webp/medium/webstudio_dark.webp":yt,"/images/projects/webp/medium/zenbit.webp":jt,"/images/projects/webp/medium/zenbit2.webp":xt,"/images/projects/webp/medium/zenbit2_dark.webp":St,"/images/projects/webp/small/barber.webp":Lt,"/images/projects/webp/small/barbershop.webp":Tt,"/images/projects/webp/small/barbershop_dark.webp":$t,"/images/projects/webp/small/bookshelf.webp":Et,"/images/projects/webp/small/bookshelf_dark.webp":Ft,"/images/projects/webp/small/britlex.webp":Pt,"/images/projects/webp/small/britlex_dark.webp":Ht,"/images/projects/webp/small/car-rental.webp":Mt,"/images/projects/webp/small/car-rental_dark.webp":Rt,"/images/projects/webp/small/drinkmaster.webp":qt,"/images/projects/webp/small/fighters.webp":Ct,"/images/projects/webp/small/fighters2.webp":zt,"/images/projects/webp/small/icecream.webp":Bt,"/images/projects/webp/small/movies.webp":It,"/images/projects/webp/small/movies_dark.webp":Ot,"/images/projects/webp/small/phonebook.webp":At,"/images/projects/webp/small/phonebook_dark.webp":Vt,"/images/projects/webp/small/pixabay.webp":Nt,"/images/projects/webp/small/pixabay_dark.webp":Dt,"/images/projects/webp/small/webstudio.webp":Jt,"/images/projects/webp/small/webstudio_dark.webp":Kt,"/images/projects/webp/small/zenbit.webp":Qt,"/images/projects/webp/small/zenbit2.webp":Ut,"/images/projects/webp/small/zenbit2_dark.webp":Gt})[`/images/projects/webp/${e}/${t}.webp`],self.location).href}function q(e){const t=f("small",e),s=f("medium",e),i=f("large1x",e),a=f("large2x",e),o="Image pending",c=h("370x208",o),n=h("480x270",o),r=h("960x540",o),l=h("1920x1080",o);return{imgSmall:e?t:c,imgMedium:e?s:n,imgLarge1x:e?i:r,imgLarge2x:e?a:l}}function Wt(e){const{name:t,type:s,link:i,livePage:a,thumbFilename:o,description:c,stack:n,role:r,customer:l,technologies:p}=e,{imgSmall:x,imgMedium:g,imgLarge1x:d,imgLarge2x:m}=q(o),w=p.join(", ");return`
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

            <p class="technologies">${w}</p>
          </div>

          <div class="modal-image-block">
            <img
              class="project-card-image"
              srcset="
                ${x} 370w,
                ${g} 480w,
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
  `}const k=document.querySelector(".popup-backdrop"),Yt=k.querySelector(".popup-modal-close-button"),Zt=k.querySelector(".modal-content-injection-target");function Xt(e){const t=R.find(s=>s.id===+e);Zt.innerHTML=Wt(t),k.classList.remove("is-hidden"),k.classList.add("current-modal"),Yt.classList.add("current-close-button"),C()}const y=document.querySelector(".email-backdrop"),es=y.querySelector(".email-modal-close-button"),ts=y.querySelector(".email-confirmation-text");function $(e){ts.innerHTML=e,y.classList.remove("is-hidden"),y.classList.add("current-modal"),es.addEventListener("click",_),C()}function C(){document.body.style.overflow="hidden",document.addEventListener("click",z),document.addEventListener("keydown",B),document.querySelector(".current-close-button").addEventListener("click",_)}function _(){document.body.style.removeProperty("overflow"),document.removeEventListener("click",z),document.removeEventListener("keydown",B);const e=document.querySelector(".current-modal");e.classList.add("is-hidden"),e.classList.remove("current-modal"),document.querySelector(".current-close-button").removeEventListener("click",_)}function z(e){const t=document.querySelector(".current-modal");e.target===t&&_()}function B(e){e.key==="Escape"&&_()}function ss(e){const{id:t,name:s,type:i,link:a,livePage:o,thumbFilename:c,description:n,stack:r,role:l,customer:p,technologies:x}=e,{imgSmall:g,imgMedium:d,imgLarge1x:m,imgLarge2x:w}=q(c),T=x.join(", ");return`
    <li class="project-card" tabindex="-1">
      <article class="fade-in">
        <h2 class="card-title collapsible-toggle" aria-expanded="false" aria-controls="collapsible-${s}" tabindex="0" data-id="${s}">${s}</h2>

        <div class="list-card collapsible" id="collapsible-${s}">
          <div class="list-card-wrapper">
            <div class="list-card-image-block">
              <img
                class="project-card-image"
                srcset="
                  ${g} 370w,
                  ${d} 480w,
                  ${m} 960w,
                  ${w} 1920w"
                sizes="(max-width: 767px): 100vw, (max-width: 1279px) 450px, 490px"
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

              <p class="technologies">${T}</p>
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
                    ${g} 370w,
                    ${d} 480w,
                    ${m} 960w,
                    ${w} 1920w"
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

                    <p class="technologies"><span class="field-type">Technologies:</span> ${T}</p>
                  </div>

                  <p class="flip-card-prompt-to-click">Click to learn more</p> 
                </div>

                             
              </div>
            </div>
  </a>

        </div>
      </article>
    </li>
  `}const as=e=>`
  <ul class="project-card-list">
    ${e.map(t=>ss(t)).join("")}
  </ul>`,os=as(R),is=document.querySelector("#gallery");is.innerHTML=os;const I=document.querySelector(".projects-view-switch"),v=document.querySelector(".project-card-list");I.addEventListener("click",rs);function rs(){v.classList.toggle("gallery-view");const e=v.classList.contains("gallery-view");I.innerHTML=`View as ${e?"list":"tiles"}`,e?v.addEventListener("click",E):v.removeEventListener("click",E)}function E(e){if(e.preventDefault(),!e.target.matches(".tile-card-link"))return;const t=e.target.dataset.id;Xt(t)}function O(e){if(!e.target.classList.contains("collapsible-toggle"))return;const t=document.querySelectorAll(".project-card"),s=Array.from(t),i=s.find(r=>r.querySelector(".collapsible-toggle").dataset.id===e.target.dataset.id),a=i.querySelector(".collapsible-toggle"),o=i.querySelector(".collapsible"),c=i.querySelectorAll(".project-link"),n=s.find(r=>r===i?!1:r.querySelector(".collapsible-toggle").classList.contains("content-expanded"));if(n){const r=n.querySelector(".collapsible"),l=n.querySelector(".collapsible-toggle");l.classList.remove("content-expanded"),l.ariaExpanded="false",r.style.maxHeight=null}a.classList.toggle("content-expanded"),o.style.maxHeight?(o.style.maxHeight=null,o.classList.remove("animated"),a.ariaExpanded="false",c.forEach(r=>{r.tabIndex="-1"})):(o.style.maxHeight=o.scrollHeight+"px",o.classList.add("animated"),a.ariaExpanded="true",c.forEach(r=>{r.removeAttribute("tabIndex")}))}function cs(e){(e.key==="Enter"||e.key===" ")&&O(e)}const A=document.querySelector(".gallery");A.addEventListener("click",O);A.addEventListener("keydown",cs);const b={origin:"https://api.emailjs.com",blockHeadless:!1},L=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},ls=(e,t="https://api.emailjs.com")=>{if(!e)return;const s=L(e);b.publicKey=s.publicKey,b.blockHeadless=s.blockHeadless,b.blockList=s.blockList,b.limitRate=s.limitRate,b.origin=s.origin||t};class j{constructor(t=0,s="Network Error"){this.status=t,this.text=s}}const V=async(e,t,s={})=>{const i=await fetch(b.origin+e,{method:"POST",headers:s,body:t}),a=await i.text(),o=new j(i.status,a);if(i.ok)return o;throw o},N=(e,t,s)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},ns=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},D=e=>e.webdriver||!e.languages||e.languages.length===0,J=()=>new j(451,"Unavailable For Headless Browser"),bs=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},ps=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},ds=(e,t)=>e instanceof FormData?e.get(t):e[t],K=(e,t)=>{if(ps(e))return!1;bs(e.list,e.watchVariable);const s=ds(t,e.watchVariable);return typeof s!="string"?!1:e.list.includes(s)},Q=()=>new j(403,"Forbidden"),ms=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},us=(e,t,s)=>{const i=Number(s.getItem(e)||0);return t-Date.now()+i},F=(e,t,s)=>{setTimeout(()=>{s.removeItem(e)},t)},U=(e,t,s)=>{if(!s.throttle)return!1;ms(s.throttle,s.id);const i=s.id||t,a=us(i,s.throttle,e);return a>0?(F(i,a,e),!0):(e.setItem(i,Date.now().toString()),F(i,s.throttle,e),!1)},G=()=>new j(429,"Too Many Requests"),_s=(e,t,s,i)=>{const a=L(i),o=a.publicKey||b.publicKey,c=a.blockHeadless||b.blockHeadless,n={...b.blockList,...a.blockList},r={...b.limitRate,...a.limitRate};return c&&D(navigator)?Promise.reject(J()):(N(o,e,t),ns(s),s&&K(n,s)?Promise.reject(Q()):U(localStorage,location.pathname,r)?Promise.reject(G()):V("/api/v1.0/email/send",JSON.stringify({lib_version:"4.1.0",user_id:o,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"}))},gs=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},ws=e=>typeof e=="string"?document.querySelector(e):e,hs=(e,t,s,i)=>{const a=L(i),o=a.publicKey||b.publicKey,c=a.blockHeadless||b.blockHeadless,n={...b.blockList,...a.blockList},r={...b.limitRate,...a.limitRate};if(c&&D(navigator))return Promise.reject(J());const l=ws(s);N(o,e,t),gs(l);const p=new FormData(l);return K(n,p)?Promise.reject(Q()):U(localStorage,location.pathname,r)?Promise.reject(G()):(p.append("lib_version","4.1.0"),p.append("service_id",e),p.append("template_id",t),p.append("user_id",o),V("/api/v1.0/email/send-form",p))},W={init:ls,send:_s,sendForm:hs};W.init("E8FZeR5jYUP13UDEy");const fs=document.getElementById("contact-form");fs.addEventListener("submit",vs);function vs(e){e.preventDefault(),W.sendForm("default_service","contact_form","#contact-form").then(function(t){t.status===200&&$("Your message has been successfully sent")},function(t){console.error("error: ",t),$("Sorry, there was an error sending your message")}).finally(function(){document.getElementById("contact-form").reset()})}
