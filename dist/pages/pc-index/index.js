(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var i=e.g.document;if(!t&&i&&(i.currentScript&&"SCRIPT"===i.currentScript.tagName.toUpperCase()&&(t=i.currentScript.src),!t)){var n=i.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!t||!/^http(s?):/.test(t));)t=n[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t+"../../"})();const t=document.querySelectorAll(".layer img"),i=document.querySelector(".bannerAnimate");let n=0;i.addEventListener("mouseenter",(e=>n=e.clientX)),i.addEventListener("mousemove",(e=>{if(""!=t[0].style.transition)for(let e=0;e<t.length;e++)t[e].style.transition="";let i=0;i=e.clientX-n,t[0].style.transform=`translateX(${i/200}px)`,t[1].style.transform=`rotate(${i/300}deg)`,t[3].style.transform=`rotate(${i/280}deg)`,t[4].style.transform=`translateX(${i/80}px)`,t[5].style.transform=`translateX(${i/150}px)`,t[6].style.transform=`translateX(${i/40}px)`,t[7].style.transform=`translateX(${i/40}px) rotate(${i/5e3}deg)`,t[8].style.transform=`translateX(${i/80}px) `,t[9].style.transform=`translateX(${-i/30}px) translateY(${i/30}px) `,t[10].style.transform=`translateX(${i/200}px) `,t[11].style.transform=`translateX(${i/200}px) `,t[12].style.transform=`translateX(${i/70}px) `,t[13].style.transform=`translateX(${i/20}px) translateY(${i/50}px) rotate(${-i/250}deg) scale(${1-i/4e3})`,t[14].style.transform=`translateX(${i/70}px) translateY(${i/2e3}px)`,t[15].style.transform=`scale(${1-i/8e3})`,t[16].style.transform=`translateX(${i/40}px)`,t[17].style.transform=`translateX(${i/80}px) translateY(${-i/30}px) rotate(${i/120}deg) scale(${1-i/8e3})`,t[18].style.transform=`translateX(${i/30}px)`,t[19].style.transform=`translateX(${i/30}px)`,t[20].style.transform=`translateX(${i/30}px)`,t[21].style.transform=`translateX(${-i/30}px)`})),i.addEventListener("mouseleave",(e=>{for(let e=0;e<t.length;e++)t[e].style.transition="all .5s",t[e].style.transform="translateX(0)"})),function(e,t){var i,n=e.document,r=n.documentElement,s=n.querySelector('meta[name="viewport"]'),a=n.querySelector('meta[name="flexible"]'),l=0,o=0,d=t.flexible||(t.flexible={});if(s){console.warn("将根据已有的meta标签来设置缩放比例");var c=s.getAttribute("content").match(/initial\-scale=([\d\.]+)/);c&&(o=parseFloat(c[1]),l=parseInt(1/o))}else if(a){var p=a.getAttribute("content");if(p){var u=p.match(/initial\-dpr=([\d\.]+)/),m=p.match(/maximum\-dpr=([\d\.]+)/);u&&(l=parseFloat(u[1]),o=parseFloat((1/l).toFixed(2))),m&&(l=parseFloat(m[1]),o=parseFloat((1/l).toFixed(2)))}}if(!l&&!o){e.navigator.appVersion.match(/android/gi);var C=e.navigator.appVersion.match(/iphone/gi),g=e.devicePixelRatio;o=1/(l=C?g>=3&&(!l||l>=3)?3:g>=2&&(!l||l>=2)?2:1:1)}if(r.setAttribute("data-dpr",l),!s)if((s=n.createElement("meta")).setAttribute("name","viewport"),s.setAttribute("content","initial-scale="+o+", maximum-scale="+o+", minimum-scale="+o+", user-scalable=no"),r.firstElementChild)r.firstElementChild.appendChild(s);else{var f=n.createElement("div");f.appendChild(s),n.write(f.innerHTML)}function h(){var t=r.getBoundingClientRect().width;t/l>640&&(t=640*l);var i=t/10;r.style.fontSize=i+"px",d.rem=e.rem=i}e.addEventListener("resize",(function(){clearTimeout(i),i=setTimeout(h,300)}),!1),e.addEventListener("pageshow",(function(e){e.persisted&&(clearTimeout(i),i=setTimeout(h,300))}),!1),"complete"===n.readyState?n.body.style.fontSize=12*l+"px":n.addEventListener("DOMContentLoaded",(function(e){n.body.style.fontSize=12*l+"px"}),!1),h(),d.dpr=e.dpr=l,d.refreshRem=h,d.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},d.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}));const r=e.p+"assets/imgs/b867b949b0cd978a06ad.webp",s=e.p+"assets/imgs/3f294b57f0d00098a358.webp",a=e.p+"assets/imgs/7006d1101cce15747055.webp",l=e.p+"assets/imgs/e1dd494afe8f3e4c4bc4.webp",o=e.p+"assets/imgs/23209681acb46a4ba588.webp",d=[{img:r,views:"16.9万",bullets:"4708",during:"02:34",title:"3！2！1！Mirror Tune☆",up:"土埋了半截的人",time:"·20小时前"},{img:s,views:"70.5万",bullets:"1.1万",during:"02:59",title:"虚一直构|《重生之星河棒影》",up:"帕姆的收藏夹",time:"·20小时前"},{img:a,views:"54.5万",bullets:"1560",during:"19:54",title:"《圣经》？P经！",up:"龙三条",time:"·4-10"},{img:l,views:"47.9万",bullets:"394",during:"01:22",title:"澄清一下",up:"-阿迪啊阿迪-",time:"·4-14"},{img:o,views:"4万",bullets:"39",during:"01:15",title:"他们朝我扔",up:"含栗QAQ",time:"·昨天"}],c=[{img:r,views:"16.9万",bullets:"4708",during:"02:34",title:"3！2！1！Mirror Tune☆",up:"土埋了半截的人",time:"·20小时前"},{img:s,views:"70.5万",bullets:"1.1万",during:"02:59",title:"虚一直构|《重生之星河棒影》",up:"帕姆的收藏夹",time:"·20小时前"},{img:a,views:"54.5万",bullets:"1560",during:"19:54",title:"《圣经》？P经！",up:"龙三条",time:"·4-10"},{img:l,views:"47.9万",bullets:"394",during:"01:22",title:"澄清一下",up:"-阿迪啊阿迪-",time:"·4-14"}];function p(e){e.forEach((e=>{const t=document.createElement("div");if(t.classList.add("pc-index-videoCards-littleCards"),t.innerHTML=`\n        <div class="pc-index-videoCards-littleCards-top">\n          <img src="${e.img}" alt=""\n            class="pc-index-videoCards-littleCards-img">\n          <div class="pc-index-videoCards-littleCards-top-data">\n            <div class="pc-index-videoCards-littleCards-top-data-left">\n              <div class="data-left-first">\n                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"\n                  width="24" height="24" fill="#ffffff" class="bili-video-card__stats--icon">\x3c!--[--\x3e\n                  <path\n                    d="M12 4.99805C9.48178 4.99805 7.283 5.12616 5.73089 5.25202C4.65221 5.33949 3.81611 6.16352 3.72 7.23254C3.60607 8.4998 3.5 10.171 3.5 11.998C3.5 13.8251 3.60607 15.4963 3.72 16.76355C3.81611 17.83255 4.65221 18.6566 5.73089 18.7441C7.283 18.8699 9.48178 18.998 12 18.998C14.5185 18.998 16.7174 18.8699 18.2696 18.74405C19.3481 18.65655 20.184 17.8328 20.2801 16.76405C20.394 15.4973 20.5 13.82645 20.5 11.998C20.5 10.16965 20.394 8.49877 20.2801 7.23205C20.184 6.1633 19.3481 5.33952 18.2696 5.25205C16.7174 5.12618 14.5185 4.99805 12 4.99805zM5.60965 3.75693C7.19232 3.62859 9.43258 3.49805 12 3.49805C14.5677 3.49805 16.8081 3.62861 18.3908 3.75696C20.1881 3.90272 21.6118 5.29278 21.7741 7.09773C21.8909 8.3969 22 10.11405 22 11.998C22 13.88205 21.8909 15.5992 21.7741 16.8984C21.6118 18.7033 20.1881 20.09335 18.3908 20.23915C16.8081 20.3675 14.5677 20.498 12 20.498C9.43258 20.498 7.19232 20.3675 5.60965 20.2392C3.81206 20.0934 2.38831 18.70295 2.22603 16.8979C2.10918 15.5982 2 13.8808 2 11.998C2 10.1153 2.10918 8.39787 2.22603 7.09823C2.38831 5.29312 3.81206 3.90269 5.60965 3.75693z"\n                    fill="currentColor"></path>\n                  <path\n                    d="M14.7138 10.96875C15.50765 11.4271 15.50765 12.573 14.71375 13.0313L11.5362 14.8659C10.74235 15.3242 9.75 14.7513 9.75001 13.8346L9.75001 10.1655C9.75001 9.24881 10.74235 8.67587 11.5362 9.13422L14.7138 10.96875z"\n                    fill="currentColor"></path>\x3c!--]--\x3e\n                </svg>\n                <span>${e.views}</span>\n              </div>\n              <div class="data-left-second">\n                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"\n                  width="24" height="24" fill="#ffffff" class="bili-video-card__stats--icon">\x3c!--[--\x3e\n                  <path\n                    d="M12 4.99805C9.48178 4.99805 7.283 5.12616 5.73089 5.25202C4.65221 5.33949 3.81611 6.16352 3.72 7.23254C3.60607 8.4998 3.5 10.171 3.5 11.998C3.5 13.8251 3.60607 15.4963 3.72 16.76355C3.81611 17.83255 4.65221 18.6566 5.73089 18.7441C7.283 18.8699 9.48178 18.998 12 18.998C14.5185 18.998 16.7174 18.8699 18.2696 18.74405C19.3481 18.65655 20.184 17.8328 20.2801 16.76405C20.394 15.4973 20.5 13.82645 20.5 11.998C20.5 10.16965 20.394 8.49877 20.2801 7.23205C20.184 6.1633 19.3481 5.33952 18.2696 5.25205C16.7174 5.12618 14.5185 4.99805 12 4.99805zM5.60965 3.75693C7.19232 3.62859 9.43258 3.49805 12 3.49805C14.5677 3.49805 16.8081 3.62861 18.3908 3.75696C20.1881 3.90272 21.6118 5.29278 21.7741 7.09773C21.8909 8.3969 22 10.11405 22 11.998C22 13.88205 21.8909 15.5992 21.7741 16.8984C21.6118 18.7033 20.1881 20.09335 18.3908 20.23915C16.8081 20.3675 14.5677 20.498 12 20.498C9.43258 20.498 7.19232 20.3675 5.60965 20.2392C3.81206 20.0934 2.38831 18.70295 2.22603 16.8979C2.10918 15.5982 2 13.8808 2 11.998C2 10.1153 2.10918 8.39787 2.22603 7.09823C2.38831 5.29312 3.81206 3.90269 5.60965 3.75693z"\n                    fill="currentColor"></path>\n                  <path\n                    d="M15.875 10.75L9.875 10.75C9.46079 10.75 9.125 10.4142 9.125 10C9.125 9.58579 9.46079 9.25 9.875 9.25L15.875 9.25C16.2892 9.25 16.625 9.58579 16.625 10C16.625 10.4142 16.2892 10.75 15.875 10.75z"\n                    fill="currentColor"></path>\n                  <path\n                    d="M17.375 14.75L11.375 14.75C10.9608 14.75 10.625 14.4142 10.625 14C10.625 13.5858 10.9608 13.25 11.375 13.25L17.375 13.25C17.7892 13.25 18.125 13.5858 18.125 14C18.125 14.4142 17.7892 14.75 17.375 14.75z"\n                    fill="currentColor"></path>\n                  <path\n                    d="M7.875 10C7.875 10.4142 7.53921 10.75 7.125 10.75L6.625 10.75C6.21079 10.75 5.875 10.4142 5.875 10C5.875 9.58579 6.21079 9.25 6.625 9.25L7.125 9.25C7.53921 9.25 7.875 9.58579 7.875 10z"\n                    fill="currentColor"></path>\n                  <path\n                    d="M9.375 14C9.375 14.4142 9.03921 14.75 8.625 14.75L8.125 14.75C7.71079 14.75 7.375 14.4142 7.375 14C7.375 13.5858 7.71079 13.25 8.125 13.25L8.625 13.25C9.03921 13.25 9.375 13.5858 9.375 14z"\n                    fill="currentColor"></path>\x3c!--]--\x3e\n                </svg>\n                <span>${e.bullets}</span>\n              </div>\n            </div>\n            <div class="pc-index-videoCards-littleCards-top-data-right">\n              <span>${e.during}</span>\n            </div>\n          </div>\n        </div>\n        <div class="pc-index-videoCards-littleCards-bottom">\n          <div class="pc-index-videoCards-littleCards-bottom-title">\n            <span>${e.title}</span>\n          </div>\n          <div class="pc-index-videoCards-littleCards-bottom-up">\n            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"\n              width="24" height="24" fill="currentColor" class="bili-video-card__info--owner__up">\x3c!--[--\x3e\n              <path\n                d="M6.15 8.24805C6.5642 8.24805 6.9 8.58383 6.9 8.99805L6.9 12.7741C6.9 13.5881 7.55988 14.248 8.3739 14.248C9.18791 14.248 9.8478 13.5881 9.8478 12.7741L9.8478 8.99805C9.8478 8.58383 10.1836 8.24805 10.5978 8.24805C11.012 8.24805 11.3478 8.58383 11.3478 8.99805L11.3478 12.7741C11.3478 14.41655 10.01635 15.748 8.3739 15.748C6.73146 15.748 5.4 14.41655 5.4 12.7741L5.4 8.99805C5.4 8.58383 5.73578 8.24805 6.15 8.24805z"\n                fill="currentColor"></path>\n              <path\n                d="M12.6522 8.99805C12.6522 8.58383 12.98795 8.24805 13.4022 8.24805L15.725 8.24805C17.31285 8.24805 18.6 9.53522 18.6 11.123C18.6 12.71085 17.31285 13.998 15.725 13.998L14.1522 13.998L14.1522 14.998C14.1522 15.4122 13.8164 15.748 13.4022 15.748C12.98795 15.748 12.6522 15.4122 12.6522 14.998L12.6522 8.99805zM14.1522 12.498L15.725 12.498C16.4844 12.498 17.1 11.8824 17.1 11.123C17.1 10.36365 16.4844 9.74804 15.725 9.74804L14.1522 9.74804L14.1522 12.498z"\n                fill="currentColor"></path>\n              <path\n                d="M12 4.99805C9.48178 4.99805 7.283 5.12616 5.73089 5.25202C4.65221 5.33949 3.81611 6.16352 3.72 7.23254C3.60607 8.4998 3.5 10.171 3.5 11.998C3.5 13.8251 3.60607 15.4963 3.72 16.76355C3.81611 17.83255 4.65221 18.6566 5.73089 18.7441C7.283 18.8699 9.48178 18.998 12 18.998C14.5185 18.998 16.7174 18.8699 18.2696 18.74405C19.3481 18.65655 20.184 17.8328 20.2801 16.76405C20.394 15.4973 20.5 13.82645 20.5 11.998C20.5 10.16965 20.394 8.49877 20.2801 7.23205C20.184 6.1633 19.3481 5.33952 18.2696 5.25205C16.7174 5.12618 14.5185 4.99805 12 4.99805zM5.60965 3.75693C7.19232 3.62859 9.43258 3.49805 12 3.49805C14.5677 3.49805 16.8081 3.62861 18.3908 3.75696C20.1881 3.90272 21.6118 5.29278 21.7741 7.09773C21.8909 8.3969 22 10.11405 22 11.998C22 13.88205 21.8909 15.5992 21.7741 16.8984C21.6118 18.7033 20.1881 20.09335 18.3908 20.23915C16.8081 20.3675 14.5677 20.498 12 20.498C9.43258 20.498 7.19232 20.3675 5.60965 20.2392C3.81206 20.0934 2.38831 18.70295 2.22603 16.8979C2.10918 15.5982 2 13.8808 2 11.998C2 10.1153 2.10918 8.39787 2.22603 7.09823C2.38831 5.29312 3.81206 3.90269 5.60965 3.75693z"\n                fill="currentColor"></path>\x3c!--]--\x3e\n            </svg>\n            <span>${e.up}</span>\n            <span>${e.time}</span>\n          </div>\n        </div>\n  `,0!=document.querySelectorAll(".pc-index-videoCards-littleCards").length){let e=document.querySelectorAll(".pc-index-videoCards-littleCards").length;document.querySelectorAll(".pc-index-videoCards-littleCards")[e-1].after(t)}else document.querySelector(".pc-index-videoCards-bigCards").after(t)}))}function u(){p(d)}function m(){p(c)}p([{img:r,views:"16.9万",bullets:"4708",during:"02:34",title:"3！2！1！Mirror Tune☆",up:"土埋了半截的人",time:"·20小时前"},{img:s,views:"70.5万",bullets:"1.1万",during:"02:59",title:"虚一直构|《重生之星河棒影》",up:"帕姆的收藏夹",time:"·20小时前"},{img:a,views:"54.5万",bullets:"1560",during:"19:54",title:"《圣经》？P经！",up:"龙三条",time:"·4-10"},{img:l,views:"47.9万",bullets:"394",during:"01:22",title:"澄清一下",up:"-阿迪啊阿迪-",time:"·4-14"},{img:o,views:"4万",bullets:"39",during:"01:15",title:"他们朝我扔",up:"含栗QAQ",time:"·昨天"},{img:l,views:"47.9万",bullets:"394",during:"01:22",title:"澄清一下",up:"-阿迪啊阿迪-",time:"·4-14"},{img:s,views:"70.5万",bullets:"1.1万",during:"02:59",title:"虚一直构|《重生之星河棒影》",up:"帕姆的收藏夹",time:"·20小时前"},{img:r,views:"16.9万",bullets:"4708",during:"02:34",title:"3！2！1！Mirror Tune☆",up:"土埋了半截的人",time:"·20小时前"},{img:o,views:"4万",bullets:"39",during:"01:15",title:"他们朝我扔",up:"含栗QAQ",time:"·昨天"},{img:l,views:"47.9万",bullets:"394",during:"01:22",title:"澄清一下",up:"-阿迪啊阿迪-",time:"·4-14"},{img:s,views:"70.5万",bullets:"1.1万",during:"02:59",title:"虚一直构|《重生之星河棒影》",up:"帕姆的收藏夹",time:"·20小时前"},{img:s,views:"70.5万",bullets:"1.1万",during:"02:59",title:"虚一直构|《重生之星河棒影》",up:"帕姆的收藏夹",time:"·20小时前"},{img:r,views:"16.9万",bullets:"4708",during:"02:34",title:"3！2！1！Mirror Tune☆",up:"土埋了半截的人",time:"·20小时前"},{img:o,views:"4万",bullets:"39",during:"01:15",title:"他们朝我扔",up:"含栗QAQ",time:"·昨天"},{img:l,views:"47.9万",bullets:"394",during:"01:22",title:"澄清一下",up:"-阿迪啊阿迪-",time:"·4-14"},{img:a,views:"54.5万",bullets:"1560",during:"19:54",title:"《圣经》？P经！",up:"龙三条",time:"·4-10"}]);const C={sm:"(max-width: 1100px)",md:"(min-width: 1100.1px)",lg:"(min-width: 1367px)",xl:"(min-width: 1700px)",xxl:"(min-width: 2200px)",portrait:"(orientation: portrait)",landscape:"(orientation: landscape)",darkMode:"(prefers-color-scheme: dark)"},g=document.querySelector(".pc-index-videoCards-lazyLoading");let f=!1;const h=new class{constructor(){this.currentBreakpoint=null,this.mediaQueries={},this.handlers=[];for(const[e,t]of Object.entries(C))this.mediaQueries[e]=window.matchMedia(t);window.addEventListener("resize",this.handleResize.bind(this)),this.detectBreakpoint()}detectBreakpoint(){const e=[];for(const[t,i]of Object.entries(this.mediaQueries))i.matches&&e.push(t);let t=null;const i=["xxl","xl","lg","md","sm"];for(const n of i)if(e.includes(n)){t=n;break}if(t!==this.currentBreakpoint){const e=this.currentBreakpoint;this.currentBreakpoint=t,this.triggerHandlers(e,t)}return t}handleResize(){this.resizeTimer&&clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout((()=>{this.detectBreakpoint(),this.resizeTimer=null}),100)}onBreakpointChange(e){this.handlers.push(e),this.currentBreakpoint&&e(this.currentBreakpoint,null)}triggerHandlers(e,t){this.handlers.forEach((i=>{i(t,e)}))}isActive(e){return this.mediaQueries[e]?.matches||!1}getCurrentBreakpoint(){return this.currentBreakpoint}getActiveBreakpoints(){return Object.entries(this.mediaQueries).filter((([e,t])=>t.matches)).map((([e])=>e))}};document.addEventListener("DOMContentLoaded",(()=>{new IntersectionObserver((([e])=>{f||(f=!0,e.isIntersecting&&h.onBreakpointChange((e=>{"sm"===e||"md"===e||"lg"===e?(m(),m()):(u(),u())})),setTimeout((()=>{f=!1}),500))}),{root:null,rootMargin:"50px 0px",threshold:1}).observe(g)}));const v=document.querySelector(".pc-index-swiper-top"),x=document.querySelector(".pc-index-videoCards-bigCards"),w=document.querySelector(".pc-index-videoCards-bigCards-mask"),b=document.querySelector(".pc-index-swiper-bottom-text"),y=document.querySelectorAll(".pc-index-swiper-dotsList li");let L=document.querySelectorAll(".pc-index-swiper-top>*"),$=0,k=!1,M=1;function T(){v.style.transition="none",0===M?(M=L.length-2,v.style.transform=`translateX(-${$*M}px)`):M===L.length-1&&(M=1,v.style.transform=`translateX(-${$}px)`),v.offsetWidth,v.style.transition="transform 0.4s"}function z(){k||(k=!0,M++,S(),X(),E(),v.style.transition="transform 0.4s",v.style.transform=`translateX(-${$*M}px)`,M===L.length-1&&setTimeout(T,400),setTimeout((()=>k=!1),400))}function S(){1!==M&&10!==M||(w.style.backgroundColor="#f27aac"),0!==M&&9!==M||(w.style.backgroundColor="#f2af8d"),2===M&&(w.style.backgroundColor="#494a3f"),3===M&&(w.style.backgroundColor="#74535a"),4===M&&(w.style.backgroundColor="#394c4a"),5===M&&(w.style.backgroundColor="#674d4b"),6===M&&(w.style.backgroundColor="#5f5f5a"),7===M&&(w.style.backgroundColor="#241b1e"),8===M&&(w.style.backgroundColor="#314c7b")}function X(){1!==M&&10!==M||(b.href="#",b.innerHTML="<span>预约领取它博会福利</span>"),0!==M&&9!==M||(b.href="#",b.innerHTML="<span>命定相遇之日，魔法宝袋轻启。</span>"),2===M&&(b.href="#",b.innerHTML="<span>超能力者敌不过花粉过敏?</span>"),3===M&&(b.href="#",b.innerHTML="<span>恶作剧经典之铜人！</span>"),4===M&&(b.href="#",b.innerHTML="<span>晒出你的旅行攻略</span>"),5===M&&(b.href="#",b.innerHTML="<span>以骑行视角，看不同的地理人文</span>"),6===M&&(b.href="#",b.innerHTML="<span>辣椒：一种“不存在的”痛快滋味</span>"),7===M&&(b.href="#",b.innerHTML="<span>猫猫有什么坏心思呢？</span>"),8===M&&(b.href="#",b.innerHTML="<span>淡妆？浓抹？阁主真有格调</span>")}function E(){for(let e=0;e<y.length;e++)y[e].classList.contains("pc-index-swiper-active")&&y[e].classList.remove("pc-index-swiper-active");1!==M&&10!==M||y[0].classList.add("pc-index-swiper-active"),0!==M&&9!==M||y[8].classList.add("pc-index-swiper-active"),2===M&&y[1].classList.add("pc-index-swiper-active"),3===M&&y[2].classList.add("pc-index-swiper-active"),4===M&&y[3].classList.add("pc-index-swiper-active"),5===M&&y[4].classList.add("pc-index-swiper-active"),6===M&&y[5].classList.add("pc-index-swiper-active"),7===M&&y[6].classList.add("pc-index-swiper-active"),8===M&&y[7].classList.add("pc-index-swiper-active")}window.addEventListener("load",(function(){const e=L[0].cloneNode(!0),t=L[L.length-1].cloneNode(!0);v.appendChild(e),v.insertBefore(t,L[0]),L=document.querySelectorAll(".pc-index-swiper-top>*"),$=x.getBoundingClientRect().width,v.style.transform=`translateX(-${$}px)`})),window.addEventListener("resize",(()=>{$=x.getBoundingClientRect().width,v.style.transform=`translateX(-${$*M}px)`})),document.querySelector("#nextImg").addEventListener("click",(()=>{z(),v.addEventListener("transitionend",(()=>{0!==M&&M!==L.length-1||T()}))})),document.querySelector("#lastImg").addEventListener("click",(()=>{k||(k=!0,M--,v.style.transition="transform 0.4s",v.style.transform=`translateX(-${$*M}px)`,S(),X(),E(),0===M&&setTimeout(T,400),setTimeout((()=>k=!1),400)),v.addEventListener("transitionend",(()=>{0!==M&&M!==L.length-1||T()}))}));let B=setInterval((()=>{z()}),2500);x.addEventListener("mouseenter",(()=>{clearInterval(B)})),x.addEventListener("mouseleave",(()=>{B=setInterval((()=>{z()}),2500)}))})();