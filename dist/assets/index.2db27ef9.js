var t=Object.defineProperty,e=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(e,o,s)=>o in e?t(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s;import{T as r,P as c,a as l,E as h,b as d,A as m,D as g,S as u,W as p,u as w,M as v,B as y,c as f,h as b,r as x,s as C}from"./vendor.39a3f7e8.js";const k=new r,M=k.load("metal.jpg");k.load("work.jpg");const z=k.load("space.jpg");class L extends c{constructor(){super(75,window.innerWidth/window.innerHeight,.1,1e3),this.distanceFromCube=S(),this.position.set(0,0,this.getDistanceFromCube())}tweenOut(){return new l(this.position).to({x:0,y:0,z:S()+2.5}).onUpdate((()=>{this.position.set(this.position.x,this.position.y,this.position.z)}))}tweenIn(){return new l(this.position).to({x:0,y:0,z:S()}).onUpdate((()=>{this.position.set(this.position.x,this.position.y,this.position.z)})).easing(h.Quadratic.In)}getDistanceFromCube(){return this.distanceFromCube}setDistanceFromCube(){this.distanceFromCube=S()}}const S=()=>{const t=window.innerHeight/100*.5/Math.tan(Math.PI/180*37.5);return window.innerWidth/100/2+t},T=()=>Math.ceil(window.innerWidth/155),B=new d(16777215),E=new d(16777215),I=new d(16777215),P=new d(16777215);let $;const A={},F=document.querySelector("canvas"),D=document.querySelector("#intro-text-container"),j=document.querySelector("#arrow-container"),O=document.querySelector("#arrow-circle"),q=document.querySelector("#name"),V=()=>{setTimeout((()=>{H(),function(t,e){if(!e)return t();if(void 0===$){const t=document.createElement("link").relList;$=t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(e.map((t=>{if(t in A)return;A[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const s=document.createElement("link");return s.rel=e?"stylesheet":$,e||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),e?new Promise(((t,e)=>{s.addEventListener("load",t),s.addEventListener("error",e)})):void 0}))).then((()=>t()))}((()=>Promise.resolve().then((function(){return Dt}))),void 0).then((t=>{t.renderDynamicComponents()}))}),800)},H=()=>{for(let t=0;t<3;t++)setTimeout((()=>{D.children[t].style.opacity="1"}),500*t);j.classList.remove("opacity-0"),setTimeout((async()=>{setTimeout((()=>{O.classList.add("circle-bounce")}),1400);for(let t=0;t<q.children.length;t++)0===t?(q.children.item(t).classList.add("theme-color"),await N(),q.children.item(t+1).classList.add("theme-color"),await N(),q.children.item(t+2).classList.add("theme-color"),await N()):(q.children.item(t).classList.add("theme-color"),t<q.children.length-1&&q.children.item(t+1).classList.add("theme-color"),t<q.children.length-2&&q.children.item(t+2).classList.add("theme-color")),await N(),q.children.item(t).classList.remove("theme-color")}),2e3)},N=async()=>await new Promise((t=>{setTimeout((()=>t(!0)),33)}));let _=0;const R=document.querySelector("#arrow-circle");class W{constructor(){this.aboutPage=new U,this.workPage=new Y,this.contactPage=new K}static getInstance(){return W.instance||(W.instance=new W),W.instance}removeIntroArrowAnimation(){return!R.classList.contains("circle-bounce")||(R.classList.remove("circle-bounce"),!1)}}class K{constructor(){this.hasBeenShown=!1}showNavBox(t=0){this.hasBeenShown||setTimeout((()=>{document.getElementById("nav-box").style.transform="translateY(0)",this.hasBeenShown=!0}),t)}}class Y{constructor(){this.hasBeenDrawn=!1}drawTodoSvg(t=0){this.hasBeenDrawn||setTimeout((()=>{const t=document.getElementById("todo-svg");t.style.animation="draw 2.5s linear forwards",setTimeout((()=>{t.style.fillOpacity="1",t.style.strokeDashoffset="0",t.style.animation="",this.hasBeenDrawn=!0}),2500)}),t+500)}}class U{constructor(){this.techSlideId=0,this.translateVal=0,this.hasStarted=!1,this.duration=Date.now(),this.exclamationShown=!1}start(t=0){this.startTechSlide(t),this.showExclamation(t),this.showDivider(t),this.showProfilePhoto(t)}startTechSlide(t=0){setTimeout((async()=>{this.hasStarted||await new Promise((t=>{setTimeout((()=>{this.hasStarted=!0,t(!0)}),2e3)})),this.techSlideId=requestAnimationFrame((()=>this.animateTechSlide()))}),t)}stopTechSlide(){cancelAnimationFrame(this.techSlideId)}animateTechSlide(){this.techSlideId=requestAnimationFrame((()=>this.animateTechSlide())),document.getElementById("tech-slider-inner").style.left=`${this.translateVal}%`,Date.now()-this.duration>10&&(this.translateVal-=.2,this.duration=Date.now()),this.translateVal<=-533&&(this.translateVal=0)}showExclamation(t=0){this.exclamationShown||(this.exclamationShown=!0,setTimeout((()=>{const t=document.getElementById("exclamation-cover");t.style.transform="translate(-30px, -90px)",setTimeout((()=>{t.style.transition="",t.style.transform="scale(0, 0)"}),1200)}),t))}showDivider(t=0){setTimeout((()=>{document.getElementById("about-heading-divider").style.width="100%"}),t)}showProfilePhoto(t=0){setTimeout((()=>{document.getElementById("profile-photo-container").style.transform="scale(1)"}),t)}}const G=class{constructor(t){this.pages={"/intro":document.querySelector("#intro-page"),"/work":document.querySelector("#work-page"),"/about":document.querySelector("#about-page"),"/contact":document.querySelector("#contact-page")},this.contentContainer=document.getElementById("content-container"),this.controllers=t,this.route="/intro",G.teardownFunctions=[W.getInstance().removeIntroArrowAnimation]}goTo(t,e){switch(this.runTeardowns(),setTimeout((()=>{window.scrollTo({top:0}),this.contentContainer.scrollTo({top:0})}),500),t){case"/intro":this.intro();break;case"/work":this.work(e);break;case"/about":this.about(e);break;case"/contact":this.contact(e)}}runTeardowns(){G.teardownFunctions=G.teardownFunctions.filter((t=>t()))}intro(){if("/intro"!==this.route){history.pushState({},"","/"),this.fadeOutCurrentPage(this.pages[this.route]),this.route="/intro";const t=this.getAnimationDuration(G.pos1),e=t/2;this.controllers.camera.tweenOut().duration(e).start().chain(this.controllers.camera.tweenIn().duration(e)),this.controllers.cube.rotateToPos1().duration(t).start(),this.fadeInNextPage(this.pages["/intro"],t)}}about(t){if("/about"!==this.route){const e=t?this.getAnimationDuration(G.pos2):0,o=e/2;t&&history.pushState({},"About","#about"),this.fadeOutCurrentPage(this.pages[this.route]),this.route="/about";const s=W.getInstance();s.aboutPage.start(e),G.teardownFunctions.push((()=>(s.aboutPage.stopTechSlide(),!1))),this.controllers.camera.tweenOut().duration(o).start().chain(this.controllers.camera.tweenIn().duration(o)),this.controllers.cube.rotateToPos2().duration(e).start(),this.fadeInNextPage(this.pages["/about"],e)}}work(t){if("/work"!==this.route){const e=t?this.getAnimationDuration(G.pos3):0,o=e/2;t&&history.pushState({},"Work","#work"),this.fadeOutCurrentPage(this.pages[this.route]),this.route="/work",W.getInstance().workPage.drawTodoSvg(e),this.controllers.camera.tweenOut().duration(o).start().chain(this.controllers.camera.tweenIn().duration(o)),this.controllers.cube.rotateToPos3().duration(e).start(),this.fadeInNextPage(this.pages["/work"],e+50)}}contact(t){if("/contact"!==this.route){const e=t?this.getAnimationDuration(G.pos4):0,o=e/2;t&&history.pushState({},"Contact","#contact"),this.fadeOutCurrentPage(this.pages[this.route]),this.route="/contact",W.getInstance().contactPage.showNavBox(e),this.controllers.camera.tweenOut().duration(o).start().chain(this.controllers.camera.tweenIn().duration(o)),this.controllers.cube.rotateToPos4().duration(e).start(),this.fadeInNextPage(this.pages["/contact"],e)}}fadeInNextPage(t,e){t.classList.remove("none"),setTimeout((()=>{t.style.opacity="1"}),e)}fadeOutCurrentPage(t){t.style.opacity="0",setTimeout((()=>{t.classList.add("none")}),150)}getAnimationDuration(t){const e=Math.abs(this.controllers.cube.rotation.y-t);return e===Math.PI?900:e>Math.PI?1150:800}};let Z=G;Z.pos1=0,Z.pos2=-Math.PI/2,Z.pos3=-Math.PI,Z.pos4=1.5*-Math.PI;const J=(t="")=>b`
    <svg
      class="social-icon ${t} theme-hover fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
      />
    </svg>
  `,Q=()=>b`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 117.7 226.6"
    class="social-icon text-white theme-hover"
  >
    <path
      d="M76.4 226.6V123.2h34.7l5.2-40.3H76.4V57.2c0-11.7 3.2-19.6 20-19.6h21.3v-36C114 1.1 101.3 0 86.6 0 55.8 0 34.8 18.8 34.8 53.2v29.7H0v40.3h34.8v103.4h41.6z"
      class="fill-current"
    ></path>
  </svg>
`,X=()=>b`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25.8 25.7"
    class="social-icon text-white theme-hover"
  >
    <g fill="#010202">
      <path
        d="M.4 8.5h5.3v17.2H.4V8.5zM3.1 0c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1C1.4 6.2 0 4.8 0 3.1 0 1.4 1.4 0 3.1 0M9.1 8.5h5.1v2.3h.1C15 9.4 16.8 8 19.4 8c5.4 0 6.4 3.6 6.4 8.2v9.4h-5.3v-8.4c0-2 0-4.6-2.8-4.6s-3.2 2.2-3.2 4.4v8.5H9.1v-17z"
        class="fill-current"
      ></path>
    </g>
  </svg>
`,tt=()=>b`
    <svg
      class="social-icon theme-hover stroke-current"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <title>External Link</title>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  `,et=()=>b`
    <svg
      class="social-icon text-white theme-hover fill-current"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
    >
      <path
        d="M255.807 87.087c-.059-.31-.11-.62-.193-.924-.052-.183-.114-.355-.172-.535a11.007 11.007 0 0 0-.283-.8c-.076-.182-.162-.358-.245-.534a9.74 9.74 0 0 0-.376-.73c-.096-.176-.207-.342-.313-.51a11.038 11.038 0 0 0-.842-1.142 11.166 11.166 0 0 0-.544-.596c-.145-.145-.29-.29-.442-.431a9.07 9.07 0 0 0-.624-.52c-.165-.128-.327-.26-.5-.377-.061-.044-.117-.096-.182-.138L134.099 1.85a10.989 10.989 0 0 0-12.201 0l-117 77.998c-.065.041-.116.093-.182.138-.172.12-.334.248-.5.376a15.52 15.52 0 0 0-.624.517 8.604 8.604 0 0 0-.438.43c-.193.194-.372.39-.548.597-.13.155-.255.31-.376.483-.165.217-.317.438-.465.669-.107.169-.214.334-.314.51a9.593 9.593 0 0 0-.372.724c-.083.176-.172.355-.245.534-.107.262-.2.531-.286.8-.058.18-.12.355-.169.517-.08.303-.138.61-.193.924-.03.159-.069.314-.09.476-.062.475-.096.951-.096 1.437v78.016c0 .482.034.965.103 1.437.025.173.07.31.104.476.055.31.103.62.207.931.048.172.103.345.172.534.086.276.172.552.276.804.072.172.172.344.241.517.114.241.242.482.38.734.096.172.206.345.31.503.148.242.31.449.482.655.121.173.242.31.38.476.175.207.344.414.551.597.141.137.276.31.448.413.2.173.414.345.62.524.166.138.346.242.483.376.066.034.104.103.173.134l116.968 78.04a10.815 10.815 0 0 0 6.102 1.851 11.06 11.06 0 0 0 6.102-1.85l117-78c.065-.04.12-.089.182-.134.172-.12.334-.248.5-.375.214-.17.424-.345.624-.524.151-.135.296-.283.441-.428a9.876 9.876 0 0 0 .92-1.072c.166-.217.318-.441.466-.669.107-.165.214-.334.314-.503.138-.242.258-.486.375-.734.083-.176.17-.352.245-.531.107-.266.197-.535.283-.804.058-.179.12-.355.172-.534.08-.303.135-.614.193-.924.028-.159.07-.314.086-.476.063-.475.097-.951.097-1.437V89c0-.486-.038-.962-.097-1.438-.027-.169-.079-.306-.113-.475h.017zm-127.81 66.935l-38.905-26.021 38.905-26.025 38.907 26.025-38.907 26.021zm-10.998-71.155l-47.692 31.9L30.81 89.013 117 31.555v51.312zm-67.477 45.13l-27.517 18.406v-36.811l27.517 18.405zm19.785 13.245L117 173.138v51.312l-86.19-57.465 38.498-25.75v.007zm69.69 31.89l47.692-31.896 38.501 25.749-86.193 57.458v-51.312zm67.477-45.128l27.521-18.409v36.815l-27.52-18.413v.007zm-19.785-13.238L138.997 82.87V31.555l86.193 57.459-38.5 25.752z"
      />
    </svg>
  `,ot=()=>b`
    <svg
      class="social-icon text-white theme-hover fill-current"
      viewBox="0 0 256 256"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
    >
      <g>
        <path
          d="M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z"
        ></path>
      </g>
    </svg>
  `,st=[{projectTitle:"BuildHub",imgUrls:["/BuildHub2.png"],headline:"Elevate Your Fitness and Sports Experience",description:"\n   BuildHub is a comprehensive fitness platform offering a wide range of fitness services, with multiple certified trainers and instructors to guide you on your fitness journey. Our revamped website now includes a seamless online booking system for registered users to schedule fitness sessions and classes from the comfort of their homes.\n   \n    ",websiteLink:"https://rctapp-dien.vercel.app/",githubLink:"https://github.com/babureddyg2308/BuildHub_Rct104"},{projectTitle:"Knowledge Knook",imgUrls:["/Knowledge_Knook.png","/Knowledge_Knook2.png","/Knowledge_Knook3.png","/Knowledge_Knook4.png"],headline:"Full Stack Application",description:"\n    Knowledge Knook presents a sophisticated yet user-friendly edu-tech platform, empowering users to create, consume, and rate educational content. It offers seamless account management with secure authentication and email verification. While currently paused, this initiative holds promising potential for future expansion into a comprehensive educational hub.",websiteLink:"https://lg-legends-053-nem-104.vercel.app/",githubLink:"https://github.com/kPratik07/LG-Legends_053-NEM104-",isMobileApp:!0},{projectTitle:"Cosmos",imgUrls:["/cosmos2.png"],headline:"Cosmos: Revolutionizing the Cosmetics Industry with Fresh Perspectives",description:"\n    Cosmos is a cutting-edge beauty brand that revolutionizes the way you discover, experience, and enjoy cosmetics. By blending innovative product formulations with a user-centric digital platform, Cosmos offers a unique approach to beauty that is both modern and engaging.",websiteLink:"https://github.com/tashwini-p/Cosmos-and-Figma",githubLink:"https://github.com/tashwini-p/Cosmos-and-Figma"}],it=document.getElementById("overlay-container"),nt=t=>{history.pushState({overlay:!0},"Overlay","#overlay"),x(at(st[t]),it),it.classList.remove("none"),setTimeout((()=>{it.style.transform="scale(1, 1)"}),10)},at=t=>b`
    <div class="w-full sm:w-3/6 flex flex-col items-center mb-5 pt-12 mx-auto">
      ${lt()}
      <h3 class="text-4xl font-bold m-3 w-11/12 sm:w-full">
        ${t.projectTitle}<span class="text-theme">.</span>
      </h3>
      <div
        id="image-carousel"
        class="border border-gray-300 shadow-xl ${t.isMobileApp?"grid grid-cols-4":""}"
      >
        ${t.imgUrls.map((t=>b`<img src=${t} class="w-full" />`))}
      </div>
      <div class="w-11/12 sm:w-full mt-3  text-gray-600 flex flex-col">
        <h6 class="text-2xl text-gray-500">${t.headline}</h6>
        <br class="h-2" />
        <p class="overflow-auto" style="max-height: 149px;">
          ${t.description}
        </p>
        <div class="flex">
          ${rt(t.websiteLink)}
          ${ct(t.githubLink)}
        </div>
      </div>
    </div>
  `,rt=t=>b`
  <style>
    .overlay-website-link:hover span,
    .overlay-website-link:hover svg {
      color: white;
    }
  </style>
  <a
    href=${t}
    target="_blank"
    class="overlay-website-link  w-3/6 sm:w-1/4 py-2 mt-4 flex items-center justify-center bg-theme hover:bg-gray-600 border-2 border-gray-600 rounded-md transition-colors duration-300"
  >
    ${tt()}
    <span class="ml-3">VIEW SITE</span>
  </a>
`,ct=t=>b`
  <a
    href=${t}
    target="_blank"
    class="overlay-website-link w-3/6 sm:w-1/4 py-2 mt-4 ml-4 flex items-center justify-center bg-theme hover:bg-gray-600 border-2 border-gray-600 rounded-md transition-colors duration-300"
  >
    ${J()}
    <span class="ml-3">CODE</span>
  </a>
`,lt=()=>b` <style>
      .cross-bar {
        width: 35px;
        height: 5px;
        margin: 3px 0;
        transition: color 0.1s ease-in-out;
        background: currentColor;
        border-radius: 2px;
      }
      #overlay-close-container:hover .cross-bar {
        color: var(--theme);
      }
    </style>
    <button
      @click=${()=>{history.back(),it.style.transform="scale(1, 0)",setTimeout((()=>{it.classList.add("none"),it.style.transform="scale(0, 1)"}),500)}}
      id="overlay-close-container"
      class="fixed top-3 right-3 h-9"
    >
      <div
        class="cross-bar"
        style="transform: rotate(45deg) translate(6px, 6px);"
      ></div>
      <div class="cross-bar" style="transform: rotate(-45deg);"></div>
    </button>`,ht=document.querySelector("#x-1"),dt=document.querySelector("#x-2"),mt=document.querySelector("#x-none");const gt=t=>b` <div class="flex justify-center my-10">${t}</div> `,ut=t=>{const e=wt(t,vt());return b`
    <div
      class="static sm:fixed bottom-0 right-10 sm:top-2/4 justify-end transition-colors duration-200 sm:flex"
    >
      ${e}
    </div>
  `},pt=t=>{const e=wt(t,vt({transform:"rotate(180deg)"}));return b`
    <div
      class="hidden sm:fixed bottom-0 left-10 sm:top-2/4  sm:flex  justify-start trnasition-colors duration-200"
    >
      ${e}
    </div>
  `},wt=(t,e)=>b`
    <button
      @click=${t}
      class="flex justify-start items-center border border-current rounded-full transition-all hover:text-theme"
      style="width: 48px; height: 48px;"
    >
      ${e}
    </button>
  `,vt=(t={})=>{return b` <div class="arrow">
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      style=${C((r=((t,e)=>{for(var o in e||(e={}))i.call(e,o)&&a(t,o,e[o]);if(s)for(var o of s(e))n.call(e,o)&&a(t,o,e[o]);return t})({},t),c={marginLeft:"11px"},e(r,o(c))))}
    >
      <path
        d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
        class="fill-current stroke-current"
      />
    </svg>
  </div>`;var r,c},yt=()=>b`
    <style>
      #back-home-arrow {
        transform: rotate(165deg);
        transition: transform 0.7s ease-in-out;
      }
      #back-home-arrow:hover {
        transform: rotate(525deg);
      }
    </style>
    <div
      id="back-home-arrow"
      class="w-full flex justify-center"
      style=" margin-right: 2px"
    >
      <svg
        version="1.1"
        id="restart-icon"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 225.455 225.455"
        style="enable-background:new 0 0 225.455 225.455;"
        xml:space="preserve"
        height="24px"
        width="24px"
      >
        <path
          class="fill-current stroke-current"
          d="M222.18,67.311c-3.424-2.334-8.088-1.452-10.422,1.97L196.461,91.71c-3.974-18.515-13.179-35.528-26.876-49.224
      c-18.768-18.768-43.721-29.104-70.264-29.104c-26.542,0-51.496,10.336-70.264,29.104c-38.744,38.744-38.744,101.785,0,140.528
      c19.372,19.372,44.818,29.058,70.264,29.058s50.892-9.686,70.264-29.058c2.929-2.929,2.929-7.678,0-10.607
      c-2.929-2.929-7.678-2.929-10.606,0c-32.896,32.895-86.419,32.895-119.314,0c-32.895-32.895-32.895-86.42,0-119.315
      C55.6,37.158,76.786,28.382,99.322,28.382c22.536,0,43.723,8.776,59.657,24.711c12.299,12.298,20.315,27.751,23.34,44.527
      l-26.623-18.158c-3.422-2.334-8.088-1.452-10.422,1.97c-2.334,3.422-1.452,8.088,1.97,10.422l39.714,27.087
      c0.002,0.001,0.004,0.003,0.006,0.005c0.628,0.428,1.298,0.743,1.987,0.958c0.021,0.007,0.041,0.018,0.062,0.024
      c0.117,0.036,0.236,0.05,0.354,0.08c0.6,0.15,1.208,0.242,1.816,0.242c2.396,0,4.751-1.146,6.203-3.274l26.764-39.242
      C226.484,74.311,225.602,69.645,222.18,67.311z"
        />
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </div>
  `,ft=b`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    height="${50}"
    width="${50}"
  >
    <title>HTML5 Logo</title>

    <polygon
      fill="#E44D26"
      points="107.644,470.877 74.633,100.62 437.367,100.62 404.321,470.819 255.778,512    "
    />
    <polygon
      fill="#F16529"
      points="256,480.523 376.03,447.246 404.27,130.894 256,130.894    "
    />
    <polygon
      fill="#EBEBEB"
      points="256,268.217 195.91,268.217 191.76,221.716 256,221.716 256,176.305 255.843,176.305 142.132,176.305 143.219,188.488 154.38,313.627 256,313.627"
    />
    <polygon
      fill="#EBEBEB"
      points="256,386.153 255.801,386.206 205.227,372.55 201.994,336.333 177.419,336.333 156.409,336.333 162.771,407.634 255.791,433.457 256,433.399"
    />
    <path
      d="M108.382,0h23.077v22.8h21.11V0h23.078v69.044H152.57v-23.12h-21.11v23.12h-23.077V0z"
    />
    <path
      d="M205.994,22.896h-20.316V0h63.72v22.896h-20.325v46.148h-23.078V22.896z"
    />
    <path
      d="M259.511,0h24.063l14.802,24.26L313.163,0h24.072v69.044h-22.982V34.822l-15.877,24.549h-0.397l-15.888-24.549v34.222h-22.58V0z"
    />
    <path d="M348.72,0h23.084v46.222h32.453v22.822H348.72V0z" />
    <polygon
      fill="#FFFFFF"
      points="255.843,268.217 255.843,313.627 311.761,313.627 306.49,372.521 255.843,386.191 255.843,433.435 348.937,407.634 349.62,399.962 360.291,280.411 361.399,268.217 349.162,268.217"
    />
    <polygon
      fill="#FFFFFF"
      points="255.843,176.305 255.843,204.509 255.843,221.605 255.843,221.716 365.385,221.716 365.385,221.716 365.531,221.716 366.442,211.509 368.511,188.488 369.597,176.305"
    />
  </svg>
`,bt=b`
  <svg
    width="${50}"
    height="${50}"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    style="enable-background:new 0 0 512 512;"
    xml:space="preserve"
  >
    <path
      style="fill:#F2F2F2;"
      d="M512,256c0,82.317-38.86,155.564-99.234,202.397C369.455,492.001,315.068,512,256,512
	s-113.455-19.999-156.766-53.603C38.86,411.564,0,338.317,0,256C0,114.615,114.615,0,256,0S512,114.615,512,256z"
    />
    <path
      style="fill:#006BC0;"
      d="M441.992,119.474l-29.226,338.923C369.455,492.001,315.068,512,256,512
	s-113.455-19.999-156.766-53.603L70.008,119.474H441.992z"
    />
    <polygon
      style="fill:#0096DC;"
      points="255.997,151.338 255.997,505.296 378.269,470.777 405.545,151.338 "
    />
    <polygon
      style="fill:#FFFFFF;"
      points="364.036,289.787 275.85,289.787 367.999,242.89 371.981,195.746 140.013,195.746 
	144.072,243.811 237.189,243.811 147.845,288.484 152.002,337.723 152.002,337.723 311.376,337.723 306.152,396.366 255.997,409.95 
	203.752,395.321 202.446,358.75 153.778,358.75 159.866,430.848 255.997,458.015 352.127,430.848 364.039,289.779 "
    />
    <g>
      <polygon
        style="fill:#222123;"
        points="165.352,67.224 165.352,33.787 213.417,33.787 213.417,15.676 147.937,15.676 
		147.937,85.335 213.417,85.335 213.417,67.224 	"
      />
      <polygon
        style="fill:#222123;"
        points="241.542,42.93 241.542,34.57 289.347,34.57 289.347,33.787 289.347,15.676 223.866,15.676 
		223.866,58.864 270.799,58.864 270.799,67.224 223.866,67.224 223.866,85.335 289.347,85.335 289.347,67.224 289.347,42.93 	"
      />
      <polygon
        style="fill:#222123;"
        points="316.252,42.93 316.252,34.57 364.056,34.57 364.056,33.787 364.056,15.676 298.576,15.676 
		298.576,58.864 345.509,58.864 345.509,67.224 298.576,67.224 298.576,85.335 364.056,85.335 364.056,67.224 364.056,42.93 	"
      />
    </g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
  </svg>
`,xt=b`<svg
  width="${50}"
  height="${50}"
  viewBox="0 0 256 256"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMinYMin meet"
>
  <path d="M0 0h256v256H0V0z" fill="#F7DF1E" />
  <path
    d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"
  />
</svg>`,Ct=b`<svg
  width="${50}"
  height="${50}"
  id="Layer_1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 400 400"
>
  <style>
    .st0 {
      fill: #007acc;
    }
    .st1 {
      fill: #fff;
    }
  </style>
  <path class="st0" d="M0 200V0h400v400H0" />
  <path
    class="st1"
    d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"
  />
</svg>`,kt=b`
  <svg
    width="${50}"
    height="${50}"
    viewBox="0 0 256 351"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMin meet"
  >
    <defs>
      <linearGradient x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%" id="a">
        <stop stop-color="#5382A1" offset="0%" />
        <stop stop-color="#2A5D8E" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M89.229 351c80.509 0 132.521-42.38 132.521-42.38s-7.126-4.283-13.074-7.934c-23.985-14.61-46.815-27.9-68.539-41.646-30.728-19.858-53.633-37.689-64.92-58.094 20.163-19.147 40.364-35.692 56.148-54.707 20.743-24.913 33.112-48.678 33.112-48.678s7.136-9.646 7.51-20.853c.397-11.947-5.633-21.612-5.633-21.612s-16.57-5.33-33.687 1.285c-21.502 8.028-47.028 27.307-58.773 39.304-23.288 24.174-40.448 56.57-52.175 90.136C13.317 265.545 0 311.253 0 311.253s48.428 39.747 89.229 39.747zM90.904 274.973c10.272 0 18.585-8.36 18.585-18.642 0-10.28-8.313-18.642-18.585-18.642-10.272 0-18.584 8.362-18.584 18.642 0 10.282 8.312 18.642 18.584 18.642z"
      fill="url(#a)"
    />
    <path
      d="M107.994 246.332c8.134-4.776 21.528-8.38 30.304-9.694 15.124-2.227 31.364-1.31 31.364-1.31s4.05 14.382 7.003 22.273c6.145 16.151 9.213 30.356 9.213 30.356s-15.579 9.273-34.53 16.209c-27.987 9.678-51.998 16.575-51.998 16.575s-3.308-4.573-6.434-12.952c-6.148-16.154-9.922-29.703-9.922-29.703s5.84-6.52 15.325-15.754z"
      fill="#EA2D2E"
    />
  </svg>
`,Mt=b`<svg
  height="${50}"
  width="${50}"
  viewBox="175.7 78 490.6 436.9"
  xmlns="http://www.w3.org/2000/svg"
>
  <g fill="#61dafb">
    <path
      d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"
    />
    <circle cx="420.9" cy="296.5" r="45.7" />
  </g>
</svg>`,zt=b`
  <svg
    width="${50}"
    height="${50}"
    viewBox="0 0 256 244"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
  >
    <path
      d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"
      fill="#764ABC"
    />
  </svg>
`,Lt=b`
  <svg
    width="${50}"
    height="${50}"
    viewBox="0 0 256 289"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMid"
  >
    <g>
      <path
        d="M127.999999,288.463771 C124.024844,288.463771 120.314699,287.403728 116.869564,285.548656 L81.6231884,264.612838 C76.32298,261.697724 78.9730854,260.637682 80.5631458,260.107661 C87.7184259,257.72257 89.0434775,257.192547 96.4637688,252.952381 C97.2587979,252.422361 98.3188405,252.687372 99.1138718,253.217392 L126.144927,269.383024 C127.20497,269.913045 128.530021,269.913045 129.325053,269.383024 L235.064182,208.165634 C236.124225,207.635611 236.654245,206.575571 236.654245,205.250519 L236.654245,83.0807467 C236.654245,81.7556929 236.124225,80.6956526 235.064182,80.1656324 L129.325053,19.2132506 C128.26501,18.6832305 126.939959,18.6832305 126.144927,19.2132506 L20.4057954,80.1656324 C19.3457551,80.6956526 18.8157349,82.0207041 18.8157349,83.0807467 L18.8157349,205.250519 C18.8157349,206.31056 19.3457551,207.635611 20.4057954,208.165634 L49.2919247,224.861286 C64.9275364,232.811595 74.7329196,223.536234 74.7329196,214.260871 L74.7329196,93.681159 C74.7329196,92.0910985 76.0579711,90.5010358 77.9130428,90.5010358 L91.4285716,90.5010358 C93.0186343,90.5010358 94.6086948,91.8260873 94.6086948,93.681159 L94.6086948,214.260871 C94.6086948,235.196689 83.2132512,247.387164 63.3374737,247.387164 C57.2422362,247.387164 52.4720502,247.387164 38.9565214,240.761906 L11.1304347,224.861286 C4.24016581,220.886129 5.68434189e-14,213.46584 5.68434189e-14,205.515528 L5.68434189e-14,83.3457557 C5.68434189e-14,75.3954465 4.24016581,67.9751552 11.1304347,64.0000006 L116.869564,2.78260752 C123.494824,-0.927535841 132.505176,-0.927535841 139.130436,2.78260752 L244.869565,64.0000006 C251.759834,67.9751552 256,75.3954465 256,83.3457557 L256,205.515528 C256,213.46584 251.759834,220.886129 244.869565,224.861286 L139.130436,286.078676 C135.685299,287.668739 131.710145,288.463771 127.999999,288.463771 L127.999999,288.463771 Z M160.596274,204.455488 C114.219461,204.455488 104.679089,183.254659 104.679089,165.233955 C104.679089,163.643893 106.004141,162.053832 107.859212,162.053832 L121.639752,162.053832 C123.229813,162.053832 124.554864,163.113872 124.554864,164.703935 C126.674947,178.749484 132.770187,185.639753 160.861283,185.639753 C183.122154,185.639753 192.662526,180.604556 192.662526,168.67909 C192.662526,161.788821 190.012423,156.753624 155.296065,153.308489 C126.409938,150.393375 108.389235,144.033126 108.389235,120.977226 C108.389235,99.5113875 126.409938,86.7908901 156.621119,86.7908901 C190.542443,86.7908901 207.238095,98.4513472 209.358178,123.89234 C209.358178,124.687371 209.093167,125.482403 208.563147,126.277434 C208.033127,126.807454 207.238095,127.337474 206.443064,127.337474 L192.662526,127.337474 C191.337475,127.337474 190.012423,126.277434 189.747412,124.952382 C186.567289,110.376813 178.351966,105.606625 156.621119,105.606625 C132.240165,105.606625 129.325053,114.086957 129.325053,120.447205 C129.325053,128.132506 132.770187,130.5176 165.631471,134.757766 C198.227744,138.997931 213.598344,145.093169 213.598344,167.884058 C213.333333,191.20497 194.252589,204.455488 160.596274,204.455488 L160.596274,204.455488 Z"
        fill="#539E43"
      ></path>
    </g>
  </svg>
`,St=b`<svg
  height="${50}"
  width="${50}"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 67 40"
  fill="#fff"
  fill-rule="evenodd"
  stroke="#000"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <use xlink:href="#A" x="1" y="1" />
  <symbol id="A" overflow="visible">
    <path
      d="M64 36.167c-2.328.592-3.768.026-5.06-1.914l-9.188-12.712-1.328-1.76-10.73 14.514c-1.226 1.746-2.512 2.506-4.8 1.888l13.74-18.444-12.792-16.66c2.2-.428 3.72-.21 5.07 1.76l9.53 12.87 9.6-12.8c1.23-1.746 2.552-2.41 4.76-1.766l-4.96 6.576-6.72 8.75c-.8 1-.69 1.684.046 2.65L64 36.167zM.016 17.431l1.124-5.528C4.2.963 16.74-3.583 25.388 3.177c5.054 3.976 6.31 9.6 6.06 15.9H2.96c-.428 11.34 7.734 18.184 18.14 14.692 3.65-1.226 5.8-4.084 6.876-7.66.546-1.792 1.45-2.072 3.134-1.56-.86 4.472-2.8 8.208-6.9 10.546-6.126 3.5-14.87 2.368-19.47-2.496C2 29.777.868 26.201.36 22.377c-.08-.632-.24-1.234-.36-1.84q.016-1.552.016-3.104zm2.996-.76h25.744c-.168-8.2-5.274-14.024-12.252-14.074-7.66-.06-13.16 5.626-13.492 14.074z"
      stroke="none"
      fill="#000"
      fill-rule="nonzero"
    />
  </symbol>
</svg>`,Tt=b`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="${50}"
    width="${50}"
    viewBox="0 0 256 256"
    fill="#4479A1"
  >
    <path
      d="M127.792 16.545a119.79 119.79 0 0 0-29.517 3.787c-11.517 2.544-22.036 6.726-31.055 12.82-10.8 7.2-19.066 16.8-23.47 29.63-4.474 12.82-4.746 26.208-1.456 39.058 4.08 15.73 12.51 28.05 23.46 37.01 12.24 10.56 26.19 15.24 41.1 15.24 11.25 0 22.89-3.24 34.02-9.81 10.71-6.24 18.9-14.76 24.01-24.68 6.96-14.76 8.04-30.36 3.41-45.83-5.88-23.4-21.6-41.34-44.43-51.77a112.444 112.444 0 0 0-32.72-10.22zm39.97 38.82c1.77 6.24 1.26 12.9-1.32 19.08-2.55 6.84-7.38 12.66-13.5 16.98-6.36 4.5-13.56 6.57-21.09 6.57-8.46 0-16.2-2.97-22.44-8.91-6.24-6.06-9.63-13.95-9.99-23.22-.36-10.35 3.18-19.56 10.29-27.54 6.3-6.99 14.46-11.7 24.15-13.95a95.712 95.712 0 0 1 22.5-1.95c10.53 0 20.85 2.64 30.54 7.62 8.55 4.77 15.21 11.28 19.74 19.08 3.72 6.57 5.55 13.71 5.55 21.42 0 6.75-1.23 13.14-3.66 19.02-1.95 4.86-4.74 9.15-8.19 12.96-3.6 4.2-8.01 7.59-12.9 10.2-5.67 3.21-11.97 5.46-18.66 6.6-6.57 1.08-13.29.99-19.92-.27-6.75-1.26-13.05-3.87-18.84-7.83-6.12-4.14-11.1-9.6-14.85-16.2-3.6-6.39-5.4-13.65-5.4-21.39 0-8.37 2.13-16.29 6.21-23.67 4.68-8.28 11.19-15.09 19.08-20.61 7.92-5.58 17.25-8.52 27.54-8.52 7.65 0 14.85 1.5 21.42 4.5 6.48 2.97 12.15 7.08 17.01 12.15 4.74 4.74 8.52 10.26 11.34 16.38z"
    />
  </svg>
`;b` <svg
  xmlns="http://www.w3.org/2000/svg"
  height="${50}"
  width="${50}"
  viewBox="0 0 25.6 25.6"
>
  <style>
    <![CDATA[.B{stroke-linecap:round}.C{stroke-linejoin:round}.D{stroke-linejoin:miter}.E{stroke-width:.716}]]>
  </style>
  <g fill="none" stroke="#fff">
    <path
      d="M18.983 18.636c.163-1.357.114-1.555 1.124-1.336l.257.023c.777.035 1.793-.125 2.4-.402 1.285-.596 2.047-1.592.78-1.33-2.89.596-3.1-.383-3.1-.383 3.053-4.53 4.33-10.28 3.227-11.687-3.004-3.84-8.205-2.024-8.292-1.976l-.028.005c-.57-.12-1.2-.19-1.93-.2-1.308-.02-2.3.343-3.054.914 0 0-9.277-3.822-8.846 4.807.092 1.836 2.63 13.9 5.66 10.25C8.29 15.987 9.36 14.86 9.36 14.86c.53.353 1.167.533 1.834.468l.052-.044a2.01 2.01 0 0 0 .021.518c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.162l-.046.183c.306.245.285 1.76.33 2.842s.116 2.093.337 2.688.48 2.13 2.53 1.7c1.713-.367 3.023-.896 3.143-5.81"
      fill="#000"
      stroke="#000"
      stroke-linecap="butt"
      stroke-width="2.149"
      class="D"
    />
    <path
      d="M23.535 15.6c-2.89.596-3.1-.383-3.1-.383 3.053-4.53 4.33-10.28 3.228-11.687-3.004-3.84-8.205-2.023-8.292-1.976l-.028.005a10.31 10.31 0 0 0-1.929-.201c-1.308-.02-2.3.343-3.054.914 0 0-9.278-3.822-8.846 4.807.092 1.836 2.63 13.9 5.66 10.25C8.29 15.987 9.36 14.86 9.36 14.86c.53.353 1.167.533 1.834.468l.052-.044a2.02 2.02 0 0 0 .021.518c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.162l-.046.183c.306.245.52 1.593.484 2.815s-.06 2.06.18 2.716.48 2.13 2.53 1.7c1.713-.367 2.6-1.32 2.725-2.906.088-1.128.286-.962.3-1.97l.16-.478c.183-1.53.03-2.023 1.085-1.793l.257.023c.777.035 1.794-.125 2.39-.402 1.285-.596 2.047-1.592.78-1.33z"
      fill="#336791"
      stroke="none"
    />
    <g class="E">
      <g class="B">
        <path
          d="M12.814 16.467c-.08 2.846.02 5.712.298 6.4s.875 2.05 2.926 1.612c1.713-.367 2.337-1.078 2.607-2.647l.633-5.017M10.356 2.2S1.072-1.596 1.504 7.033c.092 1.836 2.63 13.9 5.66 10.25C8.27 15.95 9.27 14.907 9.27 14.907m6.1-13.4c-.32.1 5.164-2.005 8.282 1.978 1.1 1.407-.175 7.157-3.228 11.687"
          class="C"
        />
        <path
          d="M20.425 15.17s.2.98 3.1.382c1.267-.262.504.734-.78 1.33-1.054.49-3.418.615-3.457-.06-.1-1.745 1.244-1.215 1.147-1.652-.088-.394-.69-.78-1.086-1.744-.347-.84-4.76-7.29 1.224-6.333.22-.045-1.56-5.7-7.16-5.782S7.99 8.196 7.99 8.196"
          stroke-linejoin="bevel"
        />
      </g>
      <g class="C">
        <path
          d="M11.247 15.768c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.163.35-.49-.002-1.27-.482-1.468-.232-.096-.542-.216-.94.23z"
        />
        <path
          d="M11.196 15.753c-.08-.513.168-1.122.433-1.836.398-1.07 1.316-2.14.582-5.537-.547-2.53-4.22-.527-4.22-.184s.166 1.74-.06 3.365c-.297 2.122 1.35 3.916 3.246 3.733"
          class="B"
        />
      </g>
    </g>
    <g fill="#fff" class="D">
      <path
        d="M10.322 8.145c-.017.117.215.43.516.472s.558-.202.575-.32-.215-.246-.516-.288-.56.02-.575.136z"
        stroke-width=".239"
      />
      <path
        d="M19.486 7.906c.016.117-.215.43-.516.472s-.56-.202-.575-.32.215-.246.516-.288.56.02.575.136z"
        stroke-width=".119"
      />
    </g>
    <path
      d="M20.562 7.095c.05.92-.198 1.545-.23 2.524-.046 1.422.678 3.05-.413 4.68"
      class="B C E"
    />
  </g>
</svg>`;const Bt=b`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="${50}"
  height="${50}"
  viewBox="0 0 32 32"
>
  <path
    d="M15.9.087l.854 1.604c.192.296.4.558.645.802.715.715 1.394 1.464 2.004 2.266 1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12-.488.488-1.01.94-1.57 1.342-.296 0-.436-.227-.558-.436-.227-.383-.366-.82-.436-1.255-.105-.523-.174-1.046-.14-1.586v-.244C16.057 24.21 15.796.21 15.9.087z"
    fill="#599636"
  />
  <path
    d="M15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614L15.9.034z"
    fill="#6cac48"
  />
  <path
    d="M16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453-.105-.174-.192-.383-.26-.575-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1-.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z"
    fill="#c2bfbf"
  />
</svg>`,Et=b`<svg
  width="${50}"
  height="${50}"
  viewBox="0 0 256 256"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMinYMin meet"
>
  <path
    d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 69.637a19.82 19.82 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 0-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 0 1 6.421-4.281V94.196a19.378 19.378 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442l-76.64 76.635c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324"
    fill="#DE4C36"
  />
</svg>`;b`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="${50}"
    height="${50}"
  >
    <path
      fill="#03A9F4"
      d="M40,20c0.391-1.735-0.092-3.78-2.5-6c-3.914,3.543-2.795,7.227-1.5,9c0,0-0.166,1-4,1S2,24,2,24S0.167,40,18,40c15.593,0,19.973-12.003,20.828-15.076C39.182,24.972,39.579,25.003,40,25c2.147-0.017,4.93-1.171,6-5.484C43.162,18.533,41.339,18.978,40,20z"
    />
    <path
      fill="#0288D1"
      d="M2.165,28C2.9,32.739,5.983,40,18,40c12.185,0,17.523-7.33,19.682-12H2.165z"
    />
    <path
      fill="#81D4FA"
      d="M19.812,39.938C18.892,39.616,14.74,38.848,14,33c-4.209,1.863-7.938,1.375-9.579,1.008C6.583,37.237,10.591,40,18,40C18.623,40,19.224,39.976,19.812,39.938z"
    />
    <path fill="#FFF" d="M18 30A2 2 0 1 0 18 34A2 2 0 1 0 18 30Z" />
    <path
      fill="#37474F"
      d="M14.914,33.597c0.224,0.505,0.02,1.162-0.51,1.318c-3.301,0.973-6.146,1.102-8.297,1.102c-0.644-0.619-1.194-1.279-1.656-1.963c2.585,0,6.71-0.12,9.144-0.966C14.117,32.906,14.69,33.09,14.914,33.597z M2,27c0,0,1.875,0.125,3-1c1.875,1.688,5.94,1.088,7,0c1.063,1.688,6.938,1.375,8,0c1.25,1.438,6.625,1.75,8,0c0.479,1.461,6.819,1.874,8,0c1.061,1.088,5.063,1.938,7.311,0C43.875,27.188,46,27,46,27v1H2 M17,32c0,0.552,0.448,1,1,1s1-0.448,1-1s-0.448-1-1-1S17,31.448,17,32z"
    />
    <path
      fill="#01579B"
      d="M11,24H6v-5h5V24z M21,19h-5v5h5V19z M31,19h-5v5h5V19z M16,14h-5v5h5V14z M26,14h-5v5h5V14z"
    />
    <path
      fill="#0288D1"
      d="M16,24h-5v-5h5V24z M26,19h-5v5h5V19z M26,9h-5v5h5V9z M21,14h-5v5h5V14z"
    />
  </svg>
`,b`
  <svg
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns="http://www.w3.org/2000/svg"
    version="1.0"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    viewBox="0 0 266 312"
    width=${50}
    height=${50}
  >
    <metadata>
      <rdf:RDF>
        <cc:Work rdf:about="">
          <dc:format>image/svg+xml</dc:format>

          <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />

          <dc:title />
        </cc:Work>
      </rdf:RDF>
    </metadata>

    <g transform="translate(-3.3359375,285.2793)">
      <path
        d="M132-206c0,1-1,1-1,1h-1c-1,0-1-1-2-2,0,0-1-1-1-2s0-1,1-1l2,1c1,1,2,2,2,3m-18-10c0-5-2-8-5-8,0,0,0,1-1,1v2h3c0,2,1,3,1,5h2m35-5c2,0,3,2,4,5h2c-1-1-1-2-1-3s0-2-1-3-2-2-3-2c0,0-1,1-2,1,0,1,1,1,1,2m-30,16c-1,0-1,0-1-1s0-2,1-3c2,0,3-1,3-1,1,0,1,1,1,1,0,1-1,2-3,4h-1m-11-1c-4-2-5-5-5-10,0-3,0-5,2-7,1-2,3-3,5-3s3,1,5,3c1,3,2,6,2,9v1,1h1v-1c1,0,1-2,1-6,0-3,0-6-2-9s-4-5-8-5c-3,0-6,2-7,5-2,4-2.4,7-2.4,12,0,4,1.4,8,5.4,12,1-1,2-1,3-2m125,141c1,0,1-0.4,1-1.3,0-2.2-1-4.8-4-7.7-3-3-8-4.9-14-5.7-1-0.1-2-0.1-2-0.1-1-0.2-1-0.2-2-0.2-1-0.1-3-0.3-4-0.5,3-9.3,4-17.5,4-24.7,0-10-2-17-6-23s-8-9-13-10c-1,1-1,1-1,2,5,2,10,6,13,12,3,7,4,13,4,20,0,5.6-1,13.9-5,24.5-4,1.6-8,5.3-11,11.1,0,0.9,0,1.4,1,1.4,0,0,1-0.9,2-2.6,2-1.7,3-3.4,5-5.1,3-1.7,5-2.6,8-2.6,5,0,10,0.7,13,2.1,4,1.3,6,2.7,7,4.3,1,1.5,2,2.9,3,4.2,0,1.3,1,1.9,1,1.9m-92-145c-1-1-1-3-1-5,0-4,0-6,2-9,2-2,4-3,6-3,3,0,5,2,7,4,1,3,2,5,2,8,0,5-2,8-6,9,0,0,1,1,2,1,2,0,3,1,5,2,1-6,2-10,2-15,0-6-1-10-3-13-3-3-6-4-10-4-3,0-6,1-9,3-2,3-3,5-3,8,0,5,1,9,3,13,1,0,2,1,3,1m12,16c-13,9-23,13-31,13-7,0-14-3-20-8,1,2,2,4,3,5l6,6c4,4,9,6,14,6,7,0,15-4,25-11l9-6c2-2,4-4,4-7,0-1,0-2-1-2-1-2-6-5-16-8-9-4-16-6-20-6-3,0-8,2-15,6-6,4-10,8-10,12,0,0,1,1,2,3,6,5,12,8,18,8,8,0,18-4,31-14v2c1,0,1,1,1,1m23,202c4,7.52,11,11.3,19,11.3,2,0,4-0.3,6-0.9,2-0.4,4-1.1,5-1.9,1-0.7,2-1.4,3-2.2,2-0.7,2-1.2,3-1.7l17-14.7c4-3.19,8-5.98,13-8.4,4-2.4,8-4,10-4.9,3-0.8,5-2,7-3.6,1-1.5,2-3.4,2-5.8,0-2.9-2-5.1-4-6.7s-4-2.7-6-3.4-4-2.3-7-5c-2-2.6-4-6.2-5-10.9l-1-5.8c-1-2.7-1-4.7-2-5.8,0-0.3,0-0.4-1-0.4s-3,0.9-4,2.6c-2,1.7-4,3.6-6,5.6-1,2-4,3.8-6,5.5-3,1.7-6,2.6-8,2.6-8,0-12-2.2-15-6.5-2-3.2-3-6.9-4-11.1-2-1.7-3-2.6-5-2.6-5,0-7,5.2-7,15.7v3.3,11.6,8.9,4.3,3c0,0.9-1,2.9-1,6-1,3.1-1,6.62-1,10.6l-2,11.1v0.17m-145-5.29c9.3,1.36,20,4.27,32.1,8.71,12.1,4.4,19.5,6.7,22.2,6.7,7,0,12.8-3.1,17.6-9.09,1-1.94,1-4.22,1-6.84,0-9.45-5.7-21.4-17.1-35.9l-6.8-9.1c-1.4-1.9-3.1-4.8-5.3-8.7-2.1-3.9-4-6.9-5.5-9-1.3-2.3-3.4-4.6-6.1-6.9-2.6-2.3-5.6-3.8-8.9-4.6-4.2,0.8-7.1,2.2-8.5,4.1s-2.2,4-2.4,6.2c-0.3,2.1-0.9,3.5-1.9,4.2-1,0.6-2.7,1.1-5,1.6-0.5,0-1.4,0-2.7,0.1h-2.7c-5.3,0-8.9,0.6-10.8,1.6-2.5,2.9-3.8,6.2-3.8,9.7,0,1.6,0.4,4.3,1.2,8.1,0.8,3.7,1.2,6.7,1.2,8.8,0,4.1-1.2,8.2-3.7,12.3-2.5,4.3-3.8,7.5-3.8,9.78,1,3.88,7.6,6.61,19.7,8.21m33.3-90.9c0-6.9,1.8-14.5,5.5-23.5,3.6-9,7.2-15,10.7-19-0.2-1-0.7-1-1.5-1l-1-1c-2.9,3-6.4,10-10.6,20-4.2,9-6.4,17.3-6.4,23.4,0,4.5,1.1,8.4,3.1,11.8,2.2,3.3,7.5,8.1,15.9,14.2l10.6,6.9c11.3,9.8,17.3,16.6,17.3,20.6,0,2.1-1,4.2-4,6.5-2,2.4-4.7,3.6-7,3.6-0.2,0-0.3,0.2-0.3,0.7,0,0.1,1,2.1,3.1,6,4.2,5.7,13.2,8.5,25.2,8.5,22,0,39-9,52-27,0-5,0-8.1-1-9.4v-3.7c0-6.5,1-11.4,3-14.6s4-4.7,7-4.7c2,0,4,0.7,6,2.2,1-7.7,1-14.4,1-20.4,0-9.1,0-16.6-2-23.6-1-6-3-11-5-15-2-3-4-6-6-9s-3-6-5-9c-1-4-2-7-2-12-3-5-5-10-8-15-2-5-4-10-6-14l-9,7c-10,7-18,10-25,10-6,0-11-1-14-5l-6-5c0,3-1,7-3,11l-6.3,12c-2.8,7-4.3,11-4.6,14-0.4,2-0.7,4-0.9,4l-7.5,15c-8.1,15-12.2,28.9-12.2,40.4,0,2.3,0.2,4.7,0.6,7.1-4.5-3.1-6.7-7.4-6.7-13m71.6,94.6c-13,0-23,1.76-30,5.25v-0.3c-5,6-10.6,9.1-18.4,9.1-4.9,0-12.6-1.9-23-5.7-10.5-3.6-19.8-6.36-27.9-8.18-0.8-0.23-2.6-0.57-5.5-1.03-2.8-0.45-5.4-0.91-7.7-1.37-2.1-0.45-4.5-1.13-7.1-2.05-2.5-0.79-4.5-1.82-6-3.07-1.38-1.26-2.06-2.68-2.06-4.27,0-1.6,0.34-3.31,1.02-5.13,0.64-1.1,1.34-2.2,2.04-3.2,0.7-1.1,1.3-2.1,1.7-3.1,0.6-0.9,1-1.8,1.4-2.8,0.4-0.9,0.8-1.8,1-2.9,0.2-1,0.4-2,0.4-3s-0.4-4-1.2-9.3c-0.8-5.2-1.2-8.5-1.2-9.9,0-4.4,1-7.9,3.2-10.4s4.3-3.8,6.5-3.8h11.5c0.9,0,2.3-0.5,4.4-1.7,0.7-1.6,1.3-2.9,1.7-4.1,0.5-1.2,0.7-2.1,0.9-2.5,0.2-0.6,0.4-1.2,0.6-1.7,0.4-0.7,0.9-1.5,1.6-2.3-0.8-1-1.2-2.3-1.2-3.9,0-1.1,0-2.1,0.2-2.7,0-3.6,1.7-8.7,5.3-15.4l3.5-6.3c2.9-5.4,5.1-9.4,6.7-13.4,1.7-4,3.5-10,5.5-18,1.6-7,5.4-14,11.4-21l7.5-9c5.2-6,8.6-11,10.5-15s2.9-9,2.9-13c0-2-0.5-8-1.6-18-1-10-1.5-20-1.5-29,0-7,0.6-12,1.9-17s3.6-10,7-14c3-4,7-8,13-10s13-3,21-3c3,0,6,0,9,1,3,0,7,1,12,3,4,2,8,4,11,7,4,3,7,8,10,13,2,6,4,12,5,20,1,5,1,10,2,17,0,6,1,10,1,13,1,3,1,7,2,12,1,4,2,8,4,11,2,4,4,8,7,12,3,5,7,10,11,16,9,10,16,21,20,32,5,10,8,23,8,36.9,0,6.9-1,13.6-3,20.1,2,0,3,0.8,4,2.2s2,4.4,3,9.1l1,7.4c1,2.2,2,4.3,5,6.1,2,1.8,4,3.3,7,4.5,2,1,5,2.4,7,4.2,2,2,3,4.1,3,6.3,0,3.4-1,5.9-3,7.7-2,2-4,3.4-7,4.3-2,1-6,3-12,5.82-5,2.96-10,6.55-15,10.8l-10,8.51c-4,3.9-8,6.7-11,8.4-3,1.8-7,2.7-11,2.7l-7-0.8c-8-2.1-13-6.1-16-12.2-16-1.94-29-2.9-37-2.9"
      />
    </g>
  </svg>
`;const It=b`
  <img
    id="profile-photo"
    src="/PratikRaj-Photo.png"
    alt="Profile photo"
    width="300px"
    class="rounded-md border-2 border-solid border-black shadow-md "
  />
`;class Pt{constructor(t){this.navbar=t}appendAboutPageComponents(){x(gt([pt((()=>this.navbar.intro())),ut((()=>this.navbar.work()))]),document.getElementById("about-components"))}appendWorkPageComponents(){x(gt([pt((()=>this.navbar.about())),ut((()=>this.navbar.contact()))]),document.getElementById("work-components")),(()=>{const t=document.querySelectorAll(".project-title"),e=document.querySelectorAll(".image-container");for(let o=0;o<t.length;o++)t[o].addEventListener("click",(()=>nt(o))),e[o].addEventListener("click",(()=>nt(o)))})()}appendContactPageComponents(){this.addNavBox(),x(gt([pt((()=>this.navbar.work()))]),document.getElementById("contact-components")),x((t=>{const e=wt(t,yt());return b`
    <div class="relative bottom-2 transition-colors duration-200">
      ${e}
    </div>
  `})((()=>this.navbar.intro())),document.getElementById("backhome-container"))}addNavBox(){x((()=>{const t=window.innerWidth/2,e=window.innerHeight/3;return b`
    <style>
      #nav-box {
        width: 0;
        height: 0;
        border-left: ${t}px solid transparent;
        border-right: ${t}px solid transparent;
        border-bottom: ${e}px solid;
        transform: translateY(${e}px);
        transition: transform 1s ease-in-out;
      }
    </style>
    <div id="nav-box" class="border-gray-600"></div>
  `})(),document.getElementById("contact-nav-box-container")),x(b`
    <style>
      #middle-row {
        margin-left: 30%;
        margin-right: 30%;
      }
      @media (max-width: 450px) {
        #middle-row {
          margin-left: 29%;
          margin-right: 29%;
        }
      }
    </style>
    <div
      id="nav-box-content"
      class="text-white flex flex-col justify-between item-center w-full"
      style="height: ${window.innerHeight/3}px;"
    >
      <a
        href="https://www.linkedin.com/in/pratik-raj-543527214/"
        target="_blank"
        class="linkedin-icon mx-auto mt-5 sm:mt-3 w-min"
      ></a>
      <div id="middle-row" class="flex justify-between relative top-3">
        <a
          href="https://github.com/kPratik07"
          target="_blank"
          class="github-icon"
        ></a>
        <div id="backhome-container"></div>
      </div>
      <div
        class="flex justify-between mb-2"
        style="margin-left: 10%; margin-right: 10%;"
      >
        <a
          href="https://www.facebook.com/pratik.raj.140"
          target="_blank"
          class="facebook-icon"
        ></a>
        <a
          href="https://www.instagram.com/pratikraj5656/"
          target="_blank"
          class="instagram-icon"
        ></a>
      </div>
    </div>
  `,document.getElementById("contact-nav-content-container"))}addIcons(){this.appendIcons("github-icon",(()=>J("text-white"))),this.appendIcons("external-link",tt),this.appendIcons("facebook-icon",Q),this.appendIcons("linkedin-icon",X),this.appendIcons("codepen-icon",et),this.appendIcons("instagram-icon",ot),this.addTodoSvg()}appendIcons(t,e){const o=document.getElementsByClassName(t);for(let s=0;s<o.length;s++)x(e(),o.item(s))}addTodoSvg(){x(b`
  <svg
    id="todo-svg"
    class="stroke-current fill-current mb-1 sm:mb-0"
    style="transition: fill-opacity 0.5s; fill-opacity: 0; stroke-dasharray: 300px; stroke-dashoffset: 300px"
    enable-background="new 0 0 64 64"
    height="65px"
    viewBox="0 0 64 64"
    width="65px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m8 19h8c.55225 0 1-.44775 1-1v-3h-2v2h-6v-6h3v-2h-4c-.55225 0-1 .44775-1 1v8c0 .55225.44775 1 1 1z"
    />
    <path
      d="m12 13.58594-1.29297-1.29297-1.41406 1.41406 2 2c.19531.19531.45117.29297.70703.29297s.51172-.09766.70703-.29297l6-6-1.41406-1.41406z"
    />
    <path
      d="m15 30h-6v-6h3v-2h-4c-.55225 0-1 .44775-1 1v8c0 .55225.44775 1 1 1h8c.55225 0 1-.44775 1-1v-3h-2z"
    />
    <path
      d="m12 26.58594-1.29297-1.29297-1.41406 1.41406 2 2c.19531.19531.45117.29297.70703.29297s.51172-.09766.70703-.29297l6-6-1.41406-1.41406z"
    />
    <path
      d="m16 35h-8c-.55225 0-1 .44775-1 1v8c0 .55225.44775 1 1 1h8c.55225 0 1-.44775 1-1v-8c0-.55225-.44775-1-1-1zm-1 8h-6v-6h6z"
    />
    <path
      d="m16 48h-8c-.55225 0-1 .44775-1 1v8c0 .55225.44775 1 1 1h8c.55225 0 1-.44775 1-1v-8c0-.55225-.44775-1-1-1zm-1 8h-6v-6h6z"
    />
    <path
      d="m57.70703 5.29297c-.39062-.39062-1.02344-.39062-1.41406 0l-6.29297 6.29297-9.29297-9.29297c-.1875-.1875-.44189-.29297-.70703-.29297h-37c-.55225 0-1 .44775-1 1v58c0 .55225.44775 1 1 1h47c.55225 0 1-.44775 1-1v-39.58594l10.70703-10.70703c.39062-.39062.39062-1.02344 0-1.41406zm-8.70703 54.70703h-45v-56h35.58594l8 8h-6.58594v-5h-2v6c0 .55225.44775 1 1 1h7.58594l-23.29297 23.29297c-.10986.10986-.19238.24365-.2417.39062l-2 6c-.11963.35938-.02637.75586.2417 1.02344.19043.19092.44629.29297.70703.29297.10596 0 .2124-.0166.31641-.05127l6-2c.14697-.04932.28076-.13184.39062-.2417l19.29297-19.29297zm-23.56299-20.14893 1.71191 1.71191-2.56787.85596zm3.56299.73487-2.58594-2.58594 30.58594-30.58594 2.58594 2.58594z"
    />
    <path d="m45 56h2v2h-2z" />
    <path d="m41 56h2v2h-2z" />
    <path d="m37 56h2v2h-2z" />
  </svg>
`,document.getElementById("todo-svg-container"))}render(){this.appendAboutPageComponents(),this.appendWorkPageComponents(),this.appendContactPageComponents(),this.addIcons()}reRender(){this.addNavBox()}}const $t=()=>{const t=b`
    <div id="tech-slider-inner" class="my-2 relative flex items-center">
      ${Ft.map(((t,e)=>b`
          <div
            class="flex items-center justify-center"
            style="width: 33.3333%; min-width: 33.3333%;"
          >
            ${At[e]}
            <span class="flex justify-center ml-2 text-gray-600">${t}</span>
          </div>
        `))}
    </div>
  `;x(t,document.getElementById("tech-slider"))},At=[ft,bt,xt,Ct,kt,Mt,zt,Mt,Lt,St,Tt,Bt,Et,ft,bt,xt],Ft=["HTML","CSS","JavaScript","TypeScript","Java","React","Redux","React Native","Node.js","Express","MySql","MongoDB","Git","HTML","CSS","JavaScript"];var Dt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Components:Pt,renderDynamicComponents:()=>{$t(),x(It,document.getElementById("profile-photo-container"))}});document.getElementById("about-page"),document.getElementById("work-page"),document.getElementById("contact-page"),document.getElementById("tech-slider");const jt=document.querySelector("#contact-form");function Ot(t){t.textContent="Oops, Something went wrong!",t.classList.replace("text-theme","text-red-700"),t.style.transform="scale(1)",Z.teardownFunctions.push((()=>(t.textContent="Success, thank you!",t.classList.replace("text-red-700","text-theme"),t.style.transform="scale(0)",jt.reset(),!1)))}let qt,Vt,Ht,Nt;let _t=0,Rt=0;const Wt=()=>{qt=NaN,Vt=NaN,Ht=NaN,Nt=NaN},Kt=()=>Math.abs(Nt-Ht)<60,Yt=()=>Rt-_t<300,Ut=new class extends v{constructor(){super(),this.cubeWidth=()=>window.innerWidth/100,this.cubeHeight=()=>window.innerHeight/100,this.geometry=this.createGeometry(),this.material=this.createMaterials()}redraw(){this.geometry=this.createGeometry(),this.material=this.createMaterials()}createGeometry(){const t=this.cubeWidth();return new y(t,this.cubeHeight(),t)}createMaterials(){return[new f({color:16777215}),new f({color:16777215}),new f({color:4210752}),new f({color:4210752}),new f({color:1776411,map:M}),new f({color:16777215})]}rotateToPos1(){return this.rotate(Z.pos1)}rotateToPos2(){return this.rotate(Z.pos2)}rotateToPos3(){return this.rotate(Z.pos3)}rotateToPos4(){return this.rotate(Z.pos4)}rotate(t){return new l(this.rotation).to({x:0,y:t,z:0}).onUpdate((()=>{this.rotation.set(this.rotation.x,this.rotation.y,this.rotation.z)})).easing(h.Quadratic.InOut)}},{scene:Gt,renderer:Zt,camera:Jt,animate:Qt}=(()=>{const t=new u;t.background=z;const e=new L,o=new p({canvas:document.querySelector("#scene")});return o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(window.devicePixelRatio||1),o.setClearColor(16777215),(t=>{B.position.set(0,0,T()),E.position.set(T(),0,0),I.position.set(T(),0,0),P.position.set(0,0,T());const e=new m(11184810);t.add(e,B,E,I,P)})(t),g.onLoad=()=>{setTimeout((()=>{document.getElementById("initial-loader").style.display="none",F.style.transform="scale(1)",document.querySelector("main").classList.replace("hidden","block"),V()}),0)},{scene:t,renderer:o,camera:e,animate:function s(){requestAnimationFrame(s),w(),o.render(t,e)}}})();Gt.add(Ut),(()=>{const t=document.getElementById("contact-form-status");jt.addEventListener("submit",(async function(e){e.preventDefault();const o={};for(let t=0;t<jt.children.length;t++){const e=jt.children.item(t);"submit"!==e.getAttribute("name")&&(o[e.getAttribute("name")]=e.value)}try{const e=await fetch("https://formspree.io/f/mrbzzboa",{method:"POST",body:JSON.stringify(o),headers:{Accept:"application/json"}});e.ok?(t.style.transform="scale(1)",jt.reset(),Z.teardownFunctions.push((()=>(t.style.transform="scale(0)",!1)))):(console.log(e),Ot(t))}catch(s){console.log(s),Ot(t)}}))})();const Xt=new Z({camera:Jt,cube:Ut}),te=new class{constructor(t){this.navbar=document.querySelector("#navbar"),this.burger=document.querySelector("#burger"),this.activeTab=document.querySelector("#intro"),this.textDark="rgba(55, 65, 81, 1)",this.textLight="white",this.router=t,this.overlayOpen=!1,this.navtabContainer=document.querySelector("#navtab-container"),this.contentContainer=document.querySelector("#content-container"),this.addListeners(),"#about"===window.location.hash?(this.about(!1),this.router.route="/about"):"#work"===window.location.hash?(this.work(!1),this.router.route="/work"):"#contact"===window.location.hash&&(this.contact(!1),this.router.route="/contact"),window.onhashchange=t=>{if("overlay"===t.oldURL.slice(-7))it.style.transform="scale(1, 0)",setTimeout((()=>{it.classList.add("none"),it.style.transform="scale(0, 1)"}),500);else switch(window.location.hash){case"":this.intro();break;case"#about":this.about();break;case"#work":this.work();break;case"#contact":this.contact()}}}addListeners(){document.querySelector("#intro").addEventListener("click",(()=>this.intro())),document.querySelector("#work").addEventListener("click",(()=>this.work())),document.querySelector("#about").addEventListener("click",(()=>this.about())),document.querySelector("#contact").addEventListener("click",(()=>this.contact())),document.querySelector("#burger").addEventListener("click",(()=>{this.overlayOpen?this.hideOverlay():this.showOverlay()})),document.querySelector("#arrow-circle").addEventListener("click",(()=>{this.about()}))}hideOverlay(){this.contentContainer.style.opacity="1",this.navtabContainer.classList.replace("top-0","-top-full"),this.navtabContainer.classList.replace("bottom-0","bottom-full"),ht.style.transform="",dt.style.transform="",mt.style.opacity="1",this.overlayOpen=!1}showOverlay(){this.contentContainer.style.opacity="0",this.navtabContainer.classList.replace("-top-full","top-0"),this.navtabContainer.classList.replace("bottom-full","bottom-0"),ht.style.transform="rotate(45deg) translate(7px, 8px)",dt.style.transform="rotate(-45deg)",mt.style.opacity="0",this.overlayOpen=!0}intro(t=!0){this.changeTextColor("white",Z.pos1),this.navbar.style.background="transparent",this.removeActiveTab(),this.goTo("/intro",t)}aboutContentChanges(){this.changeTextColor(this.textDark,Z.pos2),this.changeNavBackground("white",Z.pos2),this.changeActiveTab("#about")}about(t=!0){this.aboutContentChanges(),this.goTo("/about",t)}work(t=!0){this.changeTextColor(this.textDark,Z.pos3),this.changeNavBackground("white",Z.pos3),this.changeActiveTab("#work"),this.goTo("/work",t)}contact(t=!0){this.changeTextColor(this.textDark,Z.pos4),this.changeNavBackground("white",Z.pos4),this.changeActiveTab("#contact"),this.goTo("/contact",t)}changeActiveTab(t){this.removeActiveTab(),this.activeTab=this.navbar.querySelector(t),this.activeTab.classList.add("navtab-active")}removeActiveTab(){this.activeTab.classList.remove("navtab-active")}changeTextColor(t,e){this.navbar.style.background="transparent",setTimeout((()=>{this.navbar.style.color=t,this.burger.querySelectorAll("div").forEach((e=>e.style.backgroundColor=t))}),this.router.getAnimationDuration(e))}changeNavBackground(t,e){setTimeout((()=>{this.navbar.style.backgroundColor=t}),this.router.getAnimationDuration(e))}goTo(t,e){this.hideOverlay(),this.router.goTo(t,e)}goToNext(){switch(this.router.route){case"/intro":this.about();break;case"/about":this.work();break;case"/work":this.contact()}}goToPrevious(){switch(this.router.route){case"/intro":break;case"/about":this.intro();break;case"/work":this.about();break;case"/contact":this.work()}}}(Xt),ee=new Pt(te);var oe,se,ie,ne,ae;ee.render(),oe=Zt,se=Jt,ie=Ut,ne=ee,window.addEventListener("resize",(()=>{clearTimeout(_),_=setTimeout((()=>{oe.setSize(window.innerWidth,window.innerHeight),se.aspect=window.innerWidth/window.innerHeight,se.updateProjectionMatrix(),se.setDistanceFromCube(),se.position.z=se.getDistanceFromCube(),ie.redraw(),ne.reRender(),B.position.set(0,0,T()),E.position.set(T(),0,0),I.position.set(T(),0,0),P.position.set(0,0,T())}),200)})),ae=te,document.addEventListener("touchstart",(t=>{_t=Date.now(),qt=t.touches[0].screenX,Ht=t.touches[0].screenY})),document.addEventListener("touchmove",(t=>{Vt=t.touches[0].screenX,Nt=t.touches[0].screenY})),document.addEventListener("touchend",(()=>{Rt=Date.now(),Kt()&&Yt()&&(Vt-100>qt&&(console.log("right swipe"),ae.goToPrevious()),Vt+100<qt&&(console.log("left swipe"),ae.goToNext())),Wt()})),Qt();
