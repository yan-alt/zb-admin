import{E as L}from"./exceljs.min.e0455df8.js";import{g as C,i as y,r as a,o as p,n as g,w as l,b as s,s as N,S as P,a as i,c as V,F as W,D as j,d as M,M as S}from"./index.8ab1f836.js";const H=i("div",{class:"el-upload__text"},[M(" \u62D6\u62FD\u4E0A\u4F20 "),i("em",null,"\u6216\u8005\u70B9\u51FB\u4E0A\u4F20 Excel")],-1),U=C({__name:"index",setup(J){const f=y([]),h=y([]),k=(m,B)=>new Promise((x,b)=>{const o=new FileReader;o.onload=async r=>{const n=r.target.result,e=new L.Workbook;try{let c=await e.xlsx.load(n);const F=c._worksheets&&c._worksheets.filter(d=>typeof d<"u"),E=[];let u=[];F.forEach(d=>{d._rows.forEach((v,A)=>{if(A===0)v.values.forEach(t=>{u.push(t)});else{let t={},w=[];v.values.forEach(_=>{w.push(_)}),u.forEach((_,D)=>{t[_]=w[D]}),E.push(t)}})}),f.value=E,h.value=u}catch{S.error("\u89E3\u6790\u5931\u8D25")}},o.readAsArrayBuffer(m)});return(m,B)=>{const x=a("el-icon"),b=a("el-upload"),o=a("el-table-column"),r=a("el-table"),n=a("PageWrapLayout");return p(),g(n,{class:"m-upload-excel"},{default:l(()=>[s(b,{style:{width:"100%"},class:"upload-demo",drag:"",action:"/","before-upload":k,type:"file",accept:".xlsx, .xls"},{default:l(()=>[s(x,{class:"el-icon--upload"},{default:l(()=>[s(N(P))]),_:1}),H]),_:1}),i("div",null,[s(r,{data:f.value,border:"","highlight-current-row":"",style:{width:"100%","margin-top":"20px"}},{default:l(()=>[(p(!0),V(W,null,j(h.value,e=>(p(),g(o,{prop:e,label:e,key:e},null,8,["prop","label"]))),128))]),_:1},8,["data"])])]),_:1})}}});export{U as default};