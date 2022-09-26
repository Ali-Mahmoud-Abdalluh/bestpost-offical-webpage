import{h as k}from"./index.a0826f41.js";import{j as y,a as l}from"./index.b86210f7.js";import{s as z}from"./style.04c75079.js";import{b as M,S as C,a as R}from"./swiper.min.ac11ddf9.js";import{N as V,S as A,A as j,P as I}from"./scrollbar.min.d2759655.js";function _({swiper:e,extendParams:u,emit:f,once:b}){u({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function S(){const i=e.getTranslate();e.setTranslate(i),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function B(){const{touchEventsData:i,touches:t}=e;i.velocities.length===0&&i.velocities.push({position:t[e.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:t[e.isHorizontal()?"currentX":"currentY"],time:M()})}function E({currentPos:i}){const{params:t,$wrapperEl:h,rtlTranslate:v,snapGrid:s,touchEventsData:m}=e,N=M()-m.touchStartTime;if(i<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(i>-e.maxTranslate()){e.slides.length<s.length?e.slideTo(s.length-1):e.slideTo(e.slides.length-1);return}if(t.freeMode.momentum){if(m.velocities.length>1){const n=m.velocities.pop(),a=m.velocities.pop(),P=n.position-a.position,T=n.time-a.time;e.velocity=P/T,e.velocity/=2,Math.abs(e.velocity)<t.freeMode.minimumVelocity&&(e.velocity=0),(T>150||M()-n.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=t.freeMode.momentumVelocityRatio,m.velocities.length=0;let c=1e3*t.freeMode.momentumRatio;const D=e.velocity*c;let o=e.translate+D;v&&(o=-o);let x=!1,d;const r=Math.abs(e.velocity)*20*t.freeMode.momentumBounceRatio;let g;if(o<e.maxTranslate())t.freeMode.momentumBounce?(o+e.maxTranslate()<-r&&(o=e.maxTranslate()-r),d=e.maxTranslate(),x=!0,m.allowMomentumBounce=!0):o=e.maxTranslate(),t.loop&&t.centeredSlides&&(g=!0);else if(o>e.minTranslate())t.freeMode.momentumBounce?(o-e.minTranslate()>r&&(o=e.minTranslate()+r),d=e.minTranslate(),x=!0,m.allowMomentumBounce=!0):o=e.minTranslate(),t.loop&&t.centeredSlides&&(g=!0);else if(t.freeMode.sticky){let n;for(let a=0;a<s.length;a+=1)if(s[a]>-o){n=a;break}Math.abs(s[n]-o)<Math.abs(s[n-1]-o)||e.swipeDirection==="next"?o=s[n]:o=s[n-1],o=-o}if(g&&b("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(v?c=Math.abs((-o-e.translate)/e.velocity):c=Math.abs((o-e.translate)/e.velocity),t.freeMode.sticky){const n=Math.abs((v?-o:o)-e.translate),a=e.slidesSizesGrid[e.activeIndex];n<a?c=t.speed:n<2*a?c=t.speed*1.5:c=t.speed*2.5}}else if(t.freeMode.sticky){e.slideToClosest();return}t.freeMode.momentumBounce&&x?(e.updateProgress(d),e.setTransition(c),e.setTranslate(o),e.transitionStart(!0,e.swipeDirection),e.animating=!0,h.transitionEnd(()=>{!e||e.destroyed||!m.allowMomentumBounce||(f("momentumBounce"),e.setTransition(t.speed),setTimeout(()=>{e.setTranslate(d),h.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(f("_freeModeNoMomentumRelease"),e.updateProgress(o),e.setTransition(c),e.setTranslate(o),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,h.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(o),e.updateActiveIndex(),e.updateSlidesClasses()}else if(t.freeMode.sticky){e.slideToClosest();return}else t.freeMode&&f("_freeModeNoMomentumRelease");(!t.freeMode.momentum||N>=t.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:S,onTouchMove:B,onTouchEnd:E}})}const F=({blog:e})=>y("div",{className:"card flex flex-col items-center text-center overflow-hidden ss:items-start ss:text-start relative z-[1] rounded-[10px]",children:[l("img",{src:e.smallImage,alt:"blog image",className:"card-image w-full h-full z-[0]  rounded-[10px] ease-out duration-300 "}),l("div",{className:"h-[50%] w-full absolute left-0 right-0 bottom-0        bg-gradient-to-b from-transparent to-[#0A345C] z-[2] rounded-[10px] pb-[45px]"}),y("div",{className:"absolute bottom-[24px] min-w-full  p-[24px] z-[10] items-start rounded-[10px]",children:[l("h2",{className:"rounded-[4px] inline-block py-[3px] px-[16px] bg-[#FCC320] font-bold font-[18px] leading-[33px]",children:e.category}),l("p",{className:"mt-[6px] font-normal text-[#ffffff] font-[24px] leading-[36px] ",children:e.shortDescription})]}),l("div",{className:"absolute top-0 right-0 bottom-0 left-0 min-w-full min-h-full z-[20]"})]});const O=()=>l("section",{className:`${z.flexCenter} flex-col relative `,children:l("div",{className:"w-full py-4 ",children:l(C,{className:"pb-[50px] px-[50px]",modules:[V,A,j,I,_],spaceBetween:50,freeMode:"true",scrollbar:{draggable:!0},breakpoints:{480:{slidesPerView:1},600:{slidesPerView:2,spaceBetween:15},1200:{slidesPerView:3}},navigation:!0,pagination:{clickable:!0},children:k.map((e,u)=>l(R,{children:l(F,{blog:e})},u))})})});export{O as default};
