import{_ as L,m as w,D as S,s as i,r,o as N,c as R,a as c,j as o,w as _,u as t,z as d,t as v,f as q,E as B,G as f,H as U}from"./index.65ef0bc3.js";const z=""+new URL("logo.1e8c34ec.png",import.meta.url).href;const D={class:"login"},E={class:"login-form"},I={style:{margin:"16px"}},T={__name:"Login",setup(j){let m=w(),g=S(),s=i(""),a=i(""),e=i(!0);i(!0);let b=()=>{e.value?B(s.value,a.value).then(u=>{u.resultCode==200&&(localStorage.setItem("xftoken",u.data),g.query.needback==1?m.back():m.replace("/home"),f({type:"success",message:"\u767B\u5F55\u6210\u529F"}))}):U(s.value,a.value).then(u=>{u.resultCode==200&&(f({type:"success",message:"\u6CE8\u518C\u6210\u529F"}),e=!0)})},y=()=>{m.push("/home")};return(u,n)=>{const k=r("van-icon"),h=r("van-nav-bar"),V=r("van-image"),p=r("van-field"),x=r("van-button"),C=r("van-form");return N(),R("div",D,[c("header",null,[o(h,{title:t(e)?"\u767B\u5F55":"\u6CE8\u518C","left-arrow":"",onClickLeft:t(y)},{right:_(()=>[o(k,{name:"ellipsis",size:"18"})]),_:1},8,["title","onClickLeft"])]),o(V,{round:"",class:"logo",src:t(z)},null,8,["src"]),c("div",E,[o(C,{onSubmit:t(b)},{default:_(()=>[o(p,{modelValue:t(s),"onUpdate:modelValue":n[0]||(n[0]=l=>d(s)?s.value=l:s=l),name:"\u7528\u6237\u540D",label:"\u7528\u6237\u540D",placeholder:"\u624B\u673A\u53F7",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u624B\u673A\u53F7"}]},null,8,["modelValue"]),o(p,{modelValue:t(a),"onUpdate:modelValue":n[1]||(n[1]=l=>d(a)?a.value=l:a=l),type:"password",name:"\u5BC6\u7801",label:"\u5BC6\u7801",placeholder:"\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u5BC6\u7801"}]},null,8,["modelValue"]),c("div",I,[c("p",{class:"link-register",onClick:n[2]||(n[2]=l=>d(e)?e.value=!t(e):e=!t(e))},v(t(e)?"\u7ACB\u5373\u6CE8\u518C":"\u5DF2\u6709\u8D26\u53F7\uFF0C\u7ACB\u5373\u767B\u5F55"),1),o(x,{round:"",block:"",type:"primary","native-type":"submit"},{default:_(()=>[q(v(t(e)?"\u767B\u5F55":"\u6CE8\u518C"),1)]),_:1})])]),_:1},8,["onSubmit"])])])}}},H=L(T,[["__scopeId","data-v-0d82b48c"]]);export{H as default};