"use strict";(self.webpackChunkaiclean=self.webpackChunkaiclean||[]).push([[121],{6971:(e,t,r)=>{r.d(t,{A:()=>d});var i=r(5043),n=r(6446),o=r(5865),l=r(9336),a=r(1906),c=r(5475),s=r(579);const d=e=>{let{items:t=[],title:r,basePath:d,buttonText:h}=e;const[x,p]=(0,i.useState)(1),g=(e,t)=>{e.preventDefault(),p(t)},v=()=>{window.scrollTo({top:0,behavior:"smooth"})},m=12*x,u=m-12,f=t.slice(u,m),A=Math.ceil(t.length/12);return(0,s.jsxs)(n.A,{sx:{maxWidth:800,width:"80%",margin:"0 auto",padding:2,backgroundColor:"#0B0121",color:"white"},children:[(0,s.jsx)(o.A,{variant:"h4",gutterBottom:!0,sx:{marginBottom:"40px"},children:r}),(0,s.jsx)(l.A,{sx:{backgroundColor:"#ccc"}}),f.map(((e,t)=>(0,s.jsxs)(n.A,{children:[(0,s.jsxs)(n.A,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:2},children:[(0,s.jsx)(a.A,{variant:"outlined",sx:{borderRadius:"20px",marginRight:2,borderColor:"white",color:"white",minWidth:"100px",height:"40px",flexShrink:0,"&:hover":{backgroundColor:"white",color:"#0B0121"}},onClick:v,children:h}),(0,s.jsx)(o.A,{variant:"body1",sx:{flexGrow:1,textAlign:"center",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.title}),"News"===r?(0,s.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",whiteSpace:"nowrap"},children:(0,s.jsx)(a.A,{sx:{color:"#ccc"},children:"Read More"})}):(0,s.jsx)(c.N_,{to:`${d}/${t+u}`,style:{textDecoration:"none",whiteSpace:"nowrap"},children:(0,s.jsx)(a.A,{sx:{color:"#ccc"},children:"Read More"})})]}),(0,s.jsx)(l.A,{sx:{backgroundColor:"#ccc"}})]},t))),(0,s.jsxs)(n.A,{sx:{textAlign:"center",marginTop:2,marginBottom:4},children:[(0,s.jsx)(a.A,{disabled:1===x,onClick:e=>g(e,x-1),sx:{color:"#ccc"},children:"<"}),[...Array(A).keys()].map((e=>(0,s.jsx)(a.A,{onClick:t=>g(t,e+1),sx:{color:"#ccc",mx:.5},children:e+1},e))),(0,s.jsx)(a.A,{disabled:x===A,onClick:e=>g(e,x+1),sx:{color:"#ccc"},children:">"})]})]})}},121:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});r(5043);var i=r(6446);const n="Research_videoBox__SHnDr",o="Research_videoContent__LsGhO",l="Research_title__FVuQ6",a="Research_subtitle__JYY6w",c="Research_colorBox__MP6WU";var s=r(6971),d=r(4975);var h=r(579);const x=()=>(0,h.jsxs)("div",{children:[(0,h.jsx)(i.A,{className:n,children:(0,h.jsxs)(i.A,{className:o,children:[(0,h.jsx)("h2",{className:l,dangerouslySetInnerHTML:{__html:"AIClean <br />RESEARCH TERMS"}}),(0,h.jsx)("p",{className:a,dangerouslySetInnerHTML:{__html:"Collection of related published papers in top conferences."}})]})}),(0,h.jsx)(i.A,{className:c,children:(0,h.jsx)(s.A,{items:d.O,title:"Publications",basePath:"/articleDetail",buttonText:"RESEARCH"})})]})},9336:(e,t,r)=>{r.d(t,{A:()=>u});var i=r(8587),n=r(8168),o=r(5043),l=r(8387),a=r(8610),c=r(7266),s=r(4535),d=r(8206),h=r(5658),x=r(579);const p=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],g=(0,s.Ay)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((e=>{let{theme:t,ownerState:r}=e;return(0,n.A)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:(0,c.X4)(t.palette.divider,.08)},"inset"===r.variant&&{marginLeft:72},"middle"===r.variant&&"horizontal"===r.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===r.variant&&"vertical"===r.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===r.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"})}),(e=>{let{ownerState:t}=e;return(0,n.A)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}})}),(e=>{let{theme:t,ownerState:r}=e;return(0,n.A)({},r.children&&"vertical"!==r.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,borderTopStyle:"inherit"}})}),(e=>{let{theme:t,ownerState:r}=e;return(0,n.A)({},r.children&&"vertical"===r.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`,borderLeftStyle:"inherit"}})}),(e=>{let{ownerState:t}=e;return(0,n.A)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),v=(0,s.Ay)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((e=>{let{theme:t,ownerState:r}=e;return(0,n.A)({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},"vertical"===r.orientation&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})})),m=o.forwardRef((function(e,t){const r=(0,d.b)({props:e,name:"MuiDivider"}),{absolute:o=!1,children:c,className:s,component:m=(c?"div":"hr"),flexItem:u=!1,light:f=!1,orientation:A="horizontal",role:b=("hr"!==m?"separator":void 0),textAlign:w="center",variant:S="fullWidth"}=r,j=(0,i.A)(r,p),C=(0,n.A)({},r,{absolute:o,component:m,flexItem:u,light:f,orientation:A,role:b,textAlign:w,variant:S}),R=(e=>{const{absolute:t,children:r,classes:i,flexItem:n,light:o,orientation:l,textAlign:c,variant:s}=e,d={root:["root",t&&"absolute",s,o&&"light","vertical"===l&&"vertical",n&&"flexItem",r&&"withChildren",r&&"vertical"===l&&"withChildrenVertical","right"===c&&"vertical"!==l&&"textAlignRight","left"===c&&"vertical"!==l&&"textAlignLeft"],wrapper:["wrapper","vertical"===l&&"wrapperVertical"]};return(0,a.A)(d,h.K,i)})(C);return(0,x.jsx)(g,(0,n.A)({as:m,className:(0,l.A)(R.root,s),role:b,ref:t,ownerState:C},j,{children:c?(0,x.jsx)(v,{className:R.wrapper,ownerState:C,children:c}):null}))}));m.muiSkipListHighlight=!0;const u=m},5658:(e,t,r)=>{r.d(t,{A:()=>l,K:()=>o});var i=r(2532),n=r(2372);function o(e){return(0,n.Ay)("MuiDivider",e)}const l=(0,i.A)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])}}]);
//# sourceMappingURL=121.938f6805.chunk.js.map