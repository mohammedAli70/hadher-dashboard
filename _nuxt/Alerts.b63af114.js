import{_}from"./UiChildCard.vue.6a0b4d2b.js";import{_ as m,r,o as n,c as i,a as e,w as t,e as l,F as v,d as f,f as h,k as b,g as k}from"./entry.c1191a23.js";const C={};function T(u,o){const a=r("v-alert");return n(),i(v,null,[e(a,{class:"mb-3",color:"error",variant:"tonal"},{default:t(()=>[l("This is an error alert — check it out!")]),_:1}),e(a,{class:"mb-3",color:"warning",variant:"tonal"},{default:t(()=>[l("This is a warning alert — check it out!")]),_:1}),e(a,{class:"mb-3",color:"info",variant:"tonal"},{default:t(()=>[l("This is an info alert — check it out!")]),_:1}),e(a,{color:"success",variant:"tonal"},{default:t(()=>[l("This is a success alert — check it out!")]),_:1})],64)}const w=m(C,[["render",T]]),x={};function y(u,o){const a=r("v-alert");return n(),i("div",null,[e(a,{class:"mb-3",type:"error"},{default:t(()=>[l("This is an error alert — check it out!")]),_:1}),e(a,{class:"mb-3",type:"warning"},{default:t(()=>[l("This is a warning alert — check it out!")]),_:1}),e(a,{class:"mb-3",type:"info"},{default:t(()=>[l("This is an info alert — check it out!")]),_:1}),e(a,{type:"success"},{default:t(()=>[l("This is a success alert — check it out!")]),_:1})])}const A=m(x,[["render",y]]),V={key:0},g=f({__name:"Closable",setup(u){const o=h(!0);return(a,s)=>{const c=r("v-alert"),p=r("v-btn");return n(),i("div",null,[e(c,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=d=>o.value=d),border:"start",variant:"tonal",closable:"","close-label":"Close Alert",color:"primary",title:"Closable Alert"},{default:t(()=>[l(" Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. Cras dapibus. Vivamus consectetuer hendrerit lacus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non ")]),_:1},8,["modelValue"]),o.value?b("",!0):(n(),i("div",V,[e(p,{color:"primary",onClick:s[1]||(s[1]=d=>o.value=!0),flat:""},{default:t(()=>[l(" Reset ")]),_:1})]))])}}}),q=f({__name:"Alerts",setup(u){return(o,a)=>{const s=r("v-col"),c=r("v-row");return n(),k(c,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[e(c,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[e(_,{title:"Alert Basic"},{default:t(()=>[e(w)]),_:1})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(_,{title:"Alert Filled"},{default:t(()=>[e(A)]),_:1})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(_,{title:"Alert Closable"},{default:t(()=>[e(g)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{q as default};