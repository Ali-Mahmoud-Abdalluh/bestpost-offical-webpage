import{l as c,_ as m,r as a,j as n,s as t,a as e}from"./index.32c9b7ce.js";import{w as l}from"./index.57ce2022.js";import{m as i}from"./motion.6414969e.js";const p=c(()=>m(()=>import("./WhyBestPostCard.0780df2a.js"),["assets/WhyBestPostCard.0780df2a.js","assets/index.32c9b7ce.js","assets/index.a5312347.css"])),x=()=>{const[o,d]=a.exports.useState(0),r=a.exports.useRef();return a.exports.useEffect(()=>{d(r.current.scrollWidth-r.current.offsetWidth)},[]),n("section",{className:`${t.paddingY} ${t.paddingX} ${t.flexCenter} flex-col relative `,children:[e("div",{className:"w-full flex justify-between items-center sm:mb-8 mb-1 relative z-[1]",children:e("h2",{className:`${t.heading2} font-[48px] text-center`,children:"Why BestPost?"})}),e("div",{className:"w-full py-4 ",children:e(i.div,{ref:r,className:"carousel rounded-[10px]",children:n(i.div,{drag:"x",dragConstraints:{right:0,left:-o},className:"inner-carousel gap-4",children:[l.map(s=>e(i.div,{className:"ss:min-w-[50%]  md:min-w-[32%] min-w-[99%] bg-white  p-[20px] rounded-[10px] my-4  ",children:e(p,{number:s.number,content:s.content,icon:s.icon})},s.number)),l.map(s=>{s.number})]})})})]})};export{x as default};