"use strict";(self.webpackChunkaiclean=self.webpackChunkaiclean||[]).push([[580],{6971:(e,i,l)=>{l.d(i,{A:()=>s});var d=l(5043),t=l(6446),f=l(5865),r=l(9336),a=l(1906),o=l(5475),n=l(579);const s=e=>{let{items:i=[],title:l,basePath:s,buttonText:c}=e;const[h,m]=(0,d.useState)(1),g=(e,i)=>{e.preventDefault(),m(i)},x=()=>{window.scrollTo({top:0,behavior:"smooth"})},w=12*h,p=w-12,v=i.slice(p,w),u=Math.ceil(i.length/12);return(0,n.jsxs)(t.A,{sx:{maxWidth:800,width:"80%",margin:"0 auto",padding:2,backgroundColor:"#0B0121",color:"white"},children:[(0,n.jsx)(f.A,{variant:"h4",gutterBottom:!0,sx:{marginBottom:"40px"},children:l}),(0,n.jsx)(r.A,{sx:{backgroundColor:"#ccc"}}),v.map(((e,i)=>(0,n.jsxs)(t.A,{children:[(0,n.jsxs)(t.A,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:2,textAlign:"center"},children:[(0,n.jsx)(a.A,{variant:"outlined",sx:{borderRadius:"20px",marginRight:2,borderColor:"white",color:"white","&:hover":{backgroundColor:"white",color:"#0B0121"}},onClick:x,children:c}),(0,n.jsx)(f.A,{variant:"body1",sx:{flexGrow:1,textAlign:"center"},children:e.title}),"News"===l?(0,n.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",whiteSpace:"nowrap"},children:(0,n.jsx)(a.A,{sx:{color:"#ccc"},children:"Read More"})}):(0,n.jsx)(o.N_,{to:`${s}/${i+p}`,style:{textDecoration:"none",whiteSpace:"nowrap"},children:(0,n.jsx)(a.A,{sx:{color:"#ccc"},children:"Read More"})})]}),(0,n.jsx)(r.A,{sx:{backgroundColor:"#ccc"}})]},i))),(0,n.jsxs)(t.A,{sx:{textAlign:"center",marginTop:2,marginBottom:4},children:[(0,n.jsx)(a.A,{disabled:1===h,onClick:e=>g(e,h-1),sx:{color:"#ccc"},children:"<"}),[...Array(u).keys()].map((e=>(0,n.jsx)(a.A,{onClick:i=>g(i,e+1),sx:{color:"#ccc",mx:.5},children:e+1},e))),(0,n.jsx)(a.A,{disabled:h===u,onClick:e=>g(e,h+1),sx:{color:"#ccc"},children:">"})]})]})}},4504:(e,i,l)=>{l.d(i,{A0:()=>n,Bp:()=>r,Dz:()=>d,HC:()=>o,II:()=>a,ly:()=>t,mK:()=>c,r3:()=>f,tm:()=>s});const d="BLOG",t="LLM Safety Leaderboard <br /> In Industrial Sectors",f="Virtue AI hosts a comprehensive LLM safety leaderboard for existing foundation models, providing the most up-to-date unified evaluation platform.",r=[{field:"id",headerName:"\u6a21\u578b",width:130},{field:"field1",headerName:"\u7535\u5b50\u8bbe\u5907\u5236\u9020",width:100},{field:"field2",headerName:"\u88c5\u5907\u5236\u9020",width:100},{field:"field3",headerName:"\u94a2\u94c1",width:100},{field:"field4",headerName:"\u91c7\u77ff",width:100},{field:"field5",headerName:"\u7535\u529b",width:100},{field:"field6",headerName:"\u77f3\u5316\u5316\u5de5",width:100},{field:"field7",headerName:"\u5efa\u6750",width:100},{field:"field8",headerName:"\u7eba\u7ec7",width:100},{field:"field9",headerName:"\u5e73\u5747",width:100}],a=[{field:"id",headerName:"\u6a21\u578b",width:130},{field:"field1",headerName:"\u5ba2\u89c2\u51c6\u786e\u5ea6",width:112.5},{field:"field2",headerName:"\u4e3b\u89c2\u51c6\u786e\u5ea6",width:112.5},{field:"field3",headerName:"\u8bed\u53e5\u80fd\u529b",width:112.5},{field:"field4",headerName:"\u6982\u62ec\u80fd\u529b",width:112.5},{field:"field5",headerName:"\u903b\u8f91\u80fd\u529b",width:112.5},{field:"field6",headerName:"\u81ea\u6211\u8ba4\u77e5\u80fd\u529b",width:112.5},{field:"field7",headerName:"\u6c61\u67d3\u5206\u6790\u80fd\u529b",width:112.5},{field:"field8",headerName:"\u5e73\u5747",width:112.5}],o={title:"\u884c\u4e1a\u7ef4\u5ea6\u4e0b\u51c6\u786e\u6027\u6d4b\u8bc4\u7ed3\u679c",rows:[{id:"GPT4",field1:"76.8",field2:"71.9",field3:"62.3",field4:"62.2",field5:"49.7",field6:"65.8",field7:"52.2",field8:"57.7",field9:"62.3"},{id:"GPT3.5",field1:"62.9",field2:"52.4",field3:"57.7",field4:"50.8",field5:"52.6",field6:"55.2",field7:"50.5",field8:"47.3",field9:"53.7"},{id:"\u6587\u5fc3\u4e00\u8a00",field1:"69.5",field2:"65.8",field3:"66.9",field4:"53.6",field5:"64.0",field6:"58.1",field7:"56.4",field8:"49.3",field9:"61.7"},{id:"ChatGLM",field1:"62.2",field2:"54.9",field3:"56.6",field4:"44.7",field5:"56.3",field6:"50.4",field7:"51.8",field8:"50.8",field9:"53.6"},{id:"360\u667a\u8111",field1:"59.9",field2:"60.3",field3:"47.3",field4:"50.3",field5:"43.8",field6:"54.0",field7:"49.7",field8:"48.8",field9:"51.7"},{id:"\u5929\u5de5\u5927\u6a21\u578b",field1:"55.5",field2:"53.9",field3:"50.6",field4:"44.2",field5:"54.6",field6:"51.4",field7:"44.4",field8:"45.6",field9:"50.9"},{id:"\u661f\u706b\u5927\u6a21\u578b",field1:"56.4",field2:"53.6",field3:"51.3",field4:"47.4",field5:"48.2",field6:"38.8",field7:"54.6",field8:"47.7",field9:"49.8"},{id:"\u5546\u6c64\u5927\u6a21\u578b",field1:"52.4",field2:"51.6",field3:"49.3",field4:"46.1",field5:"48.4",field6:"53.1",field7:"42.7",field8:"45.5",field9:"48.6"},{id:"\u4ece\u5bb9\u5927\u6a21\u578b",field1:"51.6",field2:"53.1",field3:"51.2",field4:"45.2",field5:"43.9",field6:"53.4",field7:"45.9",field8:"43.7",field9:"48.5"},{id:"\u901a\u4e49\u5343\u95ee",field1:"42.8",field2:"42.4",field3:"36.6",field4:"39.2",field5:"39.9",field6:"36.2",field7:"42.5",field8:"39.3",field9:"39.3"}]},n={title:"\u80fd\u529b\u7ef4\u5ea6\u4e0b\u51c6\u786e\u6027\u6d4b\u8bc4\u7ed3\u679c",rows:[{id:"GPT4",field1:"56.9",field2:"69.8",field3:"76.8",field4:"76.2",field5:"75.1",field6:"12.9",field7:"90",field8:"65.4"},{id:"GPT3.5",field1:"56.2",field2:"61.6",field3:"75.3",field4:"68.2",field5:"68.9",field6:"0.73",field7:"20",field8:"50.1"},{id:"\u6587\u5fc3\u4e00\u8a00",field1:"48.1",field2:"63.8",field3:"74.9",field4:"70.2",field5:"70.4",field6:"1.48",field7:"10",field8:"48.4"},{id:"ChatGLM",field1:"47.5",field2:"68.4",field3:"74.4",field4:"68.2",field5:"67.6",field6:"5.4",field7:"0",field8:"47.4"},{id:"360\u667a\u8111",field1:"47.1",field2:"56.9",field3:"74.4",field4:"68.2",field5:"67.6",field6:"5.4",field7:"0",field8:"43.7"},{id:"\u5929\u5de5\u5927\u6a21\u578b",field1:"44.3",field2:"61.8",field3:"73.1",field4:"65.4",field5:"62.9",field6:"0.2",field7:"0",field8:"44.2"},{id:"\u661f\u706b\u5927\u6a21\u578b",field1:"44.3",field2:"58.7",field3:"71.1",field4:"65.1",field5:"64",field6:"0.7",field7:"0",field8:"43.41"},{id:"\u5546\u6c64\u5927\u6a21\u578b",field1:"43.7",field2:"59.1",field3:"70.7",field4:"62.7",field5:"63.1",field6:"0.1",field7:"0",field8:"42.8"},{id:"\u4ece\u5bb9\u5927\u6a21\u578b",field1:"43.0",field2:"55.6",field3:"68.2",field4:"61.3",field5:"58.9",field6:"0",field7:"0",field8:"41"},{id:"\u901a\u4e49\u5343\u95ee",field1:"32.6",field2:"57.8",field3:"72.4",field4:"64.7",field5:"61.8",field6:"0.5",field7:"0",field8:"41.4"}]},s={title:"\u884c\u4e1a\u7ef4\u5ea6\u4e0b\u7a33\u5b9a\u6027\u6d4b\u8bc4\u7ed3\u679c",rows:[{id:"GPT3.5",field1:"89",field2:"80",field3:"81",field4:"81",field5:"80",field6:"81",field7:"78",field8:"79",field9:"81"},{id:"GPT4",field1:"92",field2:"84",field3:"82",field4:"82",field5:"81",field6:"84",field7:"80",field8:"80",field9:"83"},{id:"\u901a\u4e49\u5343\u95ee",field1:"62",field2:"74",field3:"73",field4:"62",field5:"63",field6:"64",field7:"63",field8:"67",field9:"66"},{id:"\u6587\u5fc3\u4e00\u8a00",field1:"68",field2:"63",field3:"69",field4:"63",field5:"62",field6:"72",field7:"66",field8:"63",field9:"66"},{id:"ChatGLM",field1:"63",field2:"75",field3:"62",field4:"76",field5:"64",field6:"67",field7:"68",field8:"68",field9:"68"},{id:"\u661f\u706b\u8ba4\u77e5\u5927\u6a21\u578b",field1:"67",field2:"71",field3:"76",field4:"75",field5:"76",field6:"68",field7:"79",field8:"75",field9:"73"},{id:"MinMax",field1:"61",field2:"53",field3:"42",field4:"51",field5:"38",field6:"60",field7:"66",field8:"47",field9:"52"},{id:"\u5929\u5de5\u5927\u6a21\u578b",field1:"55",field2:"83",field3:"81",field4:"75",field5:"61",field6:"72",field7:"60",field8:"74",field9:"70"},{id:"\u4e91\u4ece\u5927\u6a21\u578b",field1:"69",field2:"63",field3:"69",field4:"59",field5:"68",field6:"67",field7:"66",field8:"63",field9:"66"},{id:"360\u667a\u8111",field1:"74",field2:"74",field3:"69",field4:"71",field5:"69",field6:"76",field7:"68",field8:"74",field9:"72"}]},c={title:"\u80fd\u529b\u7ef4\u5ea6\u4e0b\u7a33\u5b9a\u6027\u6d4b\u8bc4\u7ed3\u679c",rows:[{id:"GPT3.5",field1:"94.2",field2:"76.9",field3:"83.7",field4:"88.1",field5:"83.3",field6:"84.7",field7:"90.2",field8:"83.2",field9:"85.5"},{id:"GPT4",field1:"95.7",field2:"78.7",field3:"86.3",field4:"89.2",field5:"86.7",field6:"87.3",field7:"91.8",field8:"85.9",field9:"87.7"},{id:"\u901a\u4e49\u5343\u95ee",field1:"96.9",field2:"45.6",field3:"45.5",field4:"86.5",field5:"91.7",field6:"82.5",field7:"88.6",field8:"75.7",field9:"76.6"},{id:"\u6587\u5fc3\u4e00\u8a00",field1:"84.1",field2:"56",field3:"64.7",field4:"73.6",field5:"63.6",field6:"74.2",field7:"79.8",field8:"62.2",field9:"69.8"},{id:"\u661f\u706b\u8ba4\u77e5\u5927\u6a21\u578b",field1:"88.1",field2:"61.4",field3:"68.5",field4:"79.8",field5:"73.6",field6:"79.6",field7:"86.8",field8:"76.3",field9:"76.8"},{id:"MinMax",field1:"68.4",field2:"50",field3:"70.6",field4:"45.5",field5:"50",field6:"58.4",field7:"60.7",field8:"46.2",field9:"56.2"},{id:"\u5929\u5de5\u5927\u6a21\u578b",field1:"78.7",field2:"64.2",field3:"70",field4:"66.7",field5:"33.3",field6:"80",field7:"76.7",field8:"78.8",field9:"68.5"},{id:"\u4e91\u4ece\u5927\u6a21\u578b",field1:"90.2",field2:"53.3",field3:"47.3",field4:"84.5",field5:"80",field6:"78",field7:"84.5",field8:"69.4",field9:"73.4"},{id:"360\u667a\u8111",field1:"87.3",field2:"64.7",field3:"65.4",field4:"77",field5:"68.8",field6:"83.4",field7:"82.5",field8:"70.8",field9:"75"}]}},5103:(e,i,l)=>{l.d(i,{w:()=>d});const d=[{id:3,title:"\u591a\u6a21\u6001AI\u5927\u6a21\u578b\u6c11\u7206\u884c\u4e1a\u5b89\u5168\u76d1\u63a7\u573a\u666f\u5e94\u7528\u6d4b\u8bc4\u60c5\u51b5\u62a5\u544a 2024\u5e7407\u670822\u65e5",link:"https://www.china-aii.com/jgdt/7140408.jhtml"},{id:2,title:"\u4eba\u5de5\u667a\u80fd\u5927\u6a21\u578b\u5de5\u4e1a\u5e94\u7528\u51c6\u786e\u6027\u6d4b\u8bc4\u62a5\u544a  2024\u5e7403\u670801\u65e5",link:"https://www.secrss.com/articles/64065"},{id:1,title:"\u4eba\u5de5\u667a\u80fd\u5927\u6a21\u578b\u5728\u5de5\u4e1a\u9886\u57df\u77e5\u8bc6\u95ee\u7b54\u7a33\u5b9a\u6027\u8bc4\u6d4b\u62a5\u544a 2023\u5e7409\u670817\u65e5",link:"https://www.sohu.com/a/724982031_407401"}]},5580:(e,i,l)=>{l.r(i),l.d(i,{default:()=>x});l(5043);var d=l(6446),t=l(1906);const f="Blog_videoBox__Y9C0Y",r="Blog_videoContent__Tz2R7",a="Blog_title__htGBM",o="Blog_subtitle__PNoiG",n="Blog_colorBox__Iop8x";var s=l(4504),c=l(6971),h=l(5103),m=l(5475),g=l(579);const x=()=>(0,g.jsxs)("div",{children:[(0,g.jsx)(d.A,{className:f,children:(0,g.jsxs)(d.A,{className:r,children:[(0,g.jsx)("h2",{className:a,dangerouslySetInnerHTML:{__html:s.ly}}),(0,g.jsx)("p",{className:o,dangerouslySetInnerHTML:{__html:s.r3}}),(0,g.jsx)(m.N_,{to:"/rank",style:{textDecoration:"none"},children:(0,g.jsx)(t.A,{variant:"contained",color:"primary",children:"Go to Rank"})})]})}),(0,g.jsx)(d.A,{className:n,children:(0,g.jsx)(c.A,{items:h.w,title:"News",basePath:"/newsDetail",buttonText:s.Dz})})]})},9336:(e,i,l)=>{l.d(i,{A:()=>p});var d=l(8587),t=l(8168),f=l(5043),r=l(8387),a=l(8610),o=l(7266),n=l(4535),s=l(8206),c=l(5658),h=l(579);const m=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],g=(0,n.Ay)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,i)=>{const{ownerState:l}=e;return[i.root,l.absolute&&i.absolute,i[l.variant],l.light&&i.light,"vertical"===l.orientation&&i.vertical,l.flexItem&&i.flexItem,l.children&&i.withChildren,l.children&&"vertical"===l.orientation&&i.withChildrenVertical,"right"===l.textAlign&&"vertical"!==l.orientation&&i.textAlignRight,"left"===l.textAlign&&"vertical"!==l.orientation&&i.textAlignLeft]}})((e=>{let{theme:i,ownerState:l}=e;return(0,t.A)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(i.vars||i).palette.divider,borderBottomWidth:"thin"},l.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},l.light&&{borderColor:i.vars?`rgba(${i.vars.palette.dividerChannel} / 0.08)`:(0,o.X4)(i.palette.divider,.08)},"inset"===l.variant&&{marginLeft:72},"middle"===l.variant&&"horizontal"===l.orientation&&{marginLeft:i.spacing(2),marginRight:i.spacing(2)},"middle"===l.variant&&"vertical"===l.orientation&&{marginTop:i.spacing(1),marginBottom:i.spacing(1)},"vertical"===l.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},l.flexItem&&{alignSelf:"stretch",height:"auto"})}),(e=>{let{ownerState:i}=e;return(0,t.A)({},i.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}})}),(e=>{let{theme:i,ownerState:l}=e;return(0,t.A)({},l.children&&"vertical"!==l.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(i.vars||i).palette.divider}`,borderTopStyle:"inherit"}})}),(e=>{let{theme:i,ownerState:l}=e;return(0,t.A)({},l.children&&"vertical"===l.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(i.vars||i).palette.divider}`,borderLeftStyle:"inherit"}})}),(e=>{let{ownerState:i}=e;return(0,t.A)({},"right"===i.textAlign&&"vertical"!==i.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===i.textAlign&&"vertical"!==i.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),x=(0,n.Ay)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,i)=>{const{ownerState:l}=e;return[i.wrapper,"vertical"===l.orientation&&i.wrapperVertical]}})((e=>{let{theme:i,ownerState:l}=e;return(0,t.A)({display:"inline-block",paddingLeft:`calc(${i.spacing(1)} * 1.2)`,paddingRight:`calc(${i.spacing(1)} * 1.2)`},"vertical"===l.orientation&&{paddingTop:`calc(${i.spacing(1)} * 1.2)`,paddingBottom:`calc(${i.spacing(1)} * 1.2)`})})),w=f.forwardRef((function(e,i){const l=(0,s.b)({props:e,name:"MuiDivider"}),{absolute:f=!1,children:o,className:n,component:w=(o?"div":"hr"),flexItem:p=!1,light:v=!1,orientation:u="horizontal",role:A=("hr"!==w?"separator":void 0),textAlign:b="center",variant:N="fullWidth"}=l,j=(0,d.A)(l,m),C=(0,t.A)({},l,{absolute:f,component:w,flexItem:p,light:v,orientation:u,role:A,textAlign:b,variant:N}),S=(e=>{const{absolute:i,children:l,classes:d,flexItem:t,light:f,orientation:r,textAlign:o,variant:n}=e,s={root:["root",i&&"absolute",n,f&&"light","vertical"===r&&"vertical",t&&"flexItem",l&&"withChildren",l&&"vertical"===r&&"withChildrenVertical","right"===o&&"vertical"!==r&&"textAlignRight","left"===o&&"vertical"!==r&&"textAlignLeft"],wrapper:["wrapper","vertical"===r&&"wrapperVertical"]};return(0,a.A)(s,c.K,d)})(C);return(0,h.jsx)(g,(0,t.A)({as:w,className:(0,r.A)(S.root,n),role:A,ref:i,ownerState:C},j,{children:o?(0,h.jsx)(x,{className:S.wrapper,ownerState:C,children:o}):null}))}));w.muiSkipListHighlight=!0;const p=w},5658:(e,i,l)=>{l.d(i,{A:()=>r,K:()=>f});var d=l(2532),t=l(2372);function f(e){return(0,t.Ay)("MuiDivider",e)}const r=(0,d.A)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])}}]);
//# sourceMappingURL=580.ff4d5340.chunk.js.map