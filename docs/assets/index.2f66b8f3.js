import{i as n}from"./index.201c3aba.js";import{g as l,i,x as u,o as s,c as m,a as c,_ as d}from"./index.97fb5946.js";const p={class:"app-container"},x=l({__name:"index",setup(f){const t=i();let r={normal:{top:200,left:300,width:500,height:400,zIndex:6,backgroundColor:""},color:["rgba(245, 166, 35, 1)","rgba(19, 173, 255, 1)"],title:{show:!0,text:"\u57FA\u7840\u96F7\u8FBE\u56FE",left:"40%",top:"1%",textStyle:{fontSize:18,fontStyle:"normal",fontWeight:"normal"}},legend:{show:!0,icon:"circle",left:"35%",top:"90%",orient:"horizontal",textStyle:{fontSize:14},data:["\u6570\u636E1","\u6570\u636E2"]},radar:{center:["50%","50%"],radius:"70%",startAngle:90,splitNumber:4,shape:"circle",splitArea:{areaStyle:{color:["transparent"]}},axisLabel:{show:!1,fontSize:18,color:"#fff",fontStyle:"normal",fontWeight:"normal"},axisLine:{show:!0,lineStyle:{color:"grey"}},splitLine:{show:!0,lineStyle:{color:"grey"}},indicator:[{name:"\u9053\u8DEF\u7ED3\u51B0",max:88},{name:"\u66B4\u96EA",max:88},{name:"\u66B4\u96E8",max:88},{name:"\u51B0\u96F9",max:88},{name:"\u5927\u98CE",max:88},{name:"\u5927\u96FE",max:88},{name:"\u9AD8\u6E29",max:88},{name:"\u5E72\u65F1",max:88},{name:"\u5BD2\u6F6E",max:88},{name:"\u96F7\u7535",max:88},{name:"\u973E",max:88},{name:"\u6C99\u5C18\u66B4",max:88},{name:"\u971C\u51BB",max:88},{name:"\u53F0\u98CE",max:88},{name:"\u6D2A\u6C34",max:88}]},series:[{name:"\u6570\u636E1",type:"radar",symbol:"circle",symbolSize:10,areaStyle:{normal:{color:"rgba(245, 166, 35, 0.4)"}},itemStyle:{color:"rgba(245, 166, 35, 1)",borderColor:"rgba(245, 166, 35, 0.3)",borderWidth:10},lineStyle:{normal:{type:"dashed",color:"rgba(245, 166, 35, 1)",width:2}},data:[[80,50,55,80,50,80,48,43,60,78,60,40,42,44,65]]},{name:"\u6570\u636E2",type:"radar",symbol:"circle",symbolSize:10,itemStyle:{normal:{color:"rgba(19, 173, 255, 1)",borderColor:"rgba(19, 173, 255, 0.4)",borderWidth:10}},areaStyle:{normal:{color:"rgba(19, 173, 255, 0.5)"}},lineStyle:{normal:{color:"rgba(19, 173, 255, 1)",width:2,type:"dashed"}},data:[[60,60,65,60,70,40,80,63,68,60,77,60,80,62,80]]}]},e;const o=()=>{const a=n(t.value);return a.setOption(r),a};return u(()=>{e=o(),window.addEventListener("resize",function(){e&&e.resize()})}),(a,h)=>(s(),m("div",p,[c("div",{ref_key:"chartsRef",ref:t,class:"app-echarts"},null,512)]))}});const b=d(x,[["__scopeId","data-v-d188ccf7"]]);export{b as default};
