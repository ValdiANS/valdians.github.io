(function(e){function t(t){for(var o,r,u=t[0],l=t[1],a=t[2],s=0,b=[];s<u.length;s++)r=u[s],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&b.push(i[r][0]),i[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);p&&p(t);while(b.length)b.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,u=1;u<n.length;u++){var l=n[u];0!==i[l]&&(o=!1)}o&&(c.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},i={app:0},c=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"31f3":function(e,t,n){},4360:function(e,t,n){"use strict";n("31f3")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),i=Object(o["e"])("div",{class:"attribution"},[Object(o["f"])(" Challenge by "),Object(o["e"])("a",{href:"https://www.frontendmentor.io/profile/ValdiANS",target:"_blank"},"Frontend Mentor"),Object(o["f"])(". Coded by "),Object(o["e"])("a",{href:"https://github.com/ValdiANS",target:"_blank"},"Valdi"),Object(o["f"])(". ")],-1),c=Object(o["e"])("h1",null,[Object(o["e"])("span",null,"Spli"),Object(o["e"])("span",null,"tter")],-1);function r(e,t,n,r,u,l){var a=Object(o["p"])("tip-calculator-app");return Object(o["k"])(),Object(o["d"])("main",null,[i,c,Object(o["g"])(a)])}n("b680");var u=function(e){return Object(o["m"])("data-v-759f3a08"),e=e(),Object(o["l"])(),e},l={class:"tip-calculator-container"},a={class:"calculator"},p={id:"calculator"},s={class:"input-tag"},b=u((function(){return Object(o["e"])("label",{for:"bill"},"Bill",-1)})),f={key:0},d={class:"input-elemen"},O=u((function(){return Object(o["e"])("span",null,"$",-1)})),j={class:"select-tip"},m=u((function(){return Object(o["e"])("label",{for:"customTip"},"Select Tip %",-1)})),v={class:"tip-container"},y=u((function(){return Object(o["e"])("input",{type:"radio",name:"tip-option-list",value:"5",id:"option1"},null,-1)})),h={class:"option"},T=u((function(){return Object(o["e"])("input",{type:"radio",name:"tip-option-list",value:"10",id:"option2"},null,-1)})),g={class:"option"},k=u((function(){return Object(o["e"])("input",{type:"radio",name:"tip-option-list",value:"15",id:"option3"},null,-1)})),C={class:"option"},w=u((function(){return Object(o["e"])("input",{type:"radio",name:"tip-option-list",value:"25",id:"option4"},null,-1)})),P={class:"option"},N=u((function(){return Object(o["e"])("input",{type:"radio",name:"tip-option-list",value:"50",id:"option5"},null,-1)})),S={class:"option"},_=["value"],A={class:"option"},I={for:"option6"},x={class:"input-tag"},F=u((function(){return Object(o["e"])("label",{for:"peopleNumber"},"Number of People",-1)})),E={key:0},V={class:"input-elemen"},M=u((function(){return Object(o["e"])("span",null,[Object(o["e"])("i",{class:"fas fa-user"})],-1)})),q={class:"result"},R={class:"information-container"},U={class:"information tip-amount"},$=u((function(){return Object(o["e"])("div",{class:"caption"},[Object(o["e"])("p",null,"Tip Amount"),Object(o["e"])("span",null,"/ person")],-1)})),z={class:"number"},B={class:"information total"},H=u((function(){return Object(o["e"])("div",{class:"caption"},[Object(o["e"])("p",null,"Total"),Object(o["e"])("span",null,"/ person")],-1)})),J={class:"number"},D=["disabled"];function G(e,t,n,i,c,r){return Object(o["k"])(),Object(o["d"])("div",l,[Object(o["e"])("div",a,[Object(o["e"])("form",p,[Object(o["e"])("div",s,[b,i.isInputError(i.bill)?(Object(o["k"])(),Object(o["d"])("span",f,"Can't be zero")):Object(o["c"])("",!0),Object(o["e"])("div",d,[O,Object(o["t"])(Object(o["e"])("input",{type:"number",inputmode:"numeric",id:"bill",min:"0",placeholder:"0","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.bill=e}),onInput:t[1]||(t[1]=function(){return e.billHandler&&e.billHandler.apply(e,arguments)}),class:Object(o["i"])({error:i.isInputError(i.bill)})},null,34),[[o["r"],i.bill]])])]),Object(o["e"])("section",j,[m,Object(o["e"])("div",v,[y,Object(o["e"])("div",h,[Object(o["e"])("label",{for:"option1",onClick:t[2]||(t[2]=function(e){return i.setTip(5)})},"5%")]),T,Object(o["e"])("div",g,[Object(o["e"])("label",{for:"option2",onClick:t[3]||(t[3]=function(e){return i.setTip(10)})},"10%")]),k,Object(o["e"])("div",C,[Object(o["e"])("label",{for:"option3",onClick:t[4]||(t[4]=function(e){return i.setTip(15)})},"15%")]),w,Object(o["e"])("div",P,[Object(o["e"])("label",{for:"option4",onClick:t[5]||(t[5]=function(e){return i.setTip(25)})},"25%")]),N,Object(o["e"])("div",S,[Object(o["e"])("label",{for:"option5",onClick:t[6]||(t[6]=function(e){return i.setTip(50)})},"50%")]),Object(o["e"])("input",{type:"radio",name:"tip-option-list",value:i.customTip,id:"option6"},null,8,_),Object(o["e"])("div",A,[Object(o["e"])("label",I,[Object(o["t"])(Object(o["e"])("input",{type:"number",inputmode:"numeric",id:"customTip",min:"0",placeholder:"custom",onFocus:t[7]||(t[7]=function(){return i.customTipFocus&&i.customTipFocus.apply(i,arguments)}),"onUpdate:modelValue":t[8]||(t[8]=function(e){return i.customTip=e}),onInput:t[9]||(t[9]=function(e){return i.setTip(i.customTip)}),onClick:t[10]||(t[10]=function(e){return i.setTip(i.customTip)})},null,544),[[o["r"],i.customTip]])])])])]),Object(o["e"])("div",x,[F,i.isInputError(i.numberOfPeople)?(Object(o["k"])(),Object(o["d"])("span",E,"Can't be zero")):Object(o["c"])("",!0),Object(o["e"])("div",V,[M,Object(o["t"])(Object(o["e"])("input",{type:"number",inputmode:"numeric",id:"peopleNumber",min:"0",placeholder:"0","onUpdate:modelValue":t[11]||(t[11]=function(e){return i.numberOfPeople=e}),class:Object(o["i"])({error:i.isInputError(i.numberOfPeople)})},null,2),[[o["r"],i.numberOfPeople]])])])])]),Object(o["e"])("div",q,[Object(o["e"])("div",R,[Object(o["e"])("div",U,[$,Object(o["e"])("div",z,[Object(o["e"])("h2",null,"$"+Object(o["q"])(i.tipAmount.toFixed(2)),1)])]),Object(o["e"])("div",B,[H,Object(o["e"])("div",J,[Object(o["e"])("h2",null,"$"+Object(o["q"])(i.total.toFixed(2)),1)])])]),Object(o["e"])("button",{type:"reset",form:"calculator",disabled:i.disableReset,onClick:t[12]||(t[12]=function(){return i.reset&&i.reset.apply(i,arguments)}),class:"reset"}," Reset ",8,D)])])}n("9129"),n("a9e3");var K={name:"TipCalculatorApp",setup:function(){var e=Object(o["o"])(),t=Object(o["o"])(),n=Object(o["o"])(),i=Object(o["o"])(0),c=Object(o["a"])((function(){var n=e.value*(i.value/100)/t.value;return(Number.isNaN(n)||n===1/0)&&(n=0),n})),r=Object(o["a"])((function(){var n=e.value/t.value+c.value;return(Number.isNaN(n)||n===1/0)&&(n=0),n})),u=function(){document.getElementById("option6").checked=!0},l=function(e){if(e>100)return n.value=100,void(i.value=100);i.value=e},a=function(){e.value=null,t.value=null,n.value=null,l(0),document.querySelector("form#calculator").reset()},p=Object(o["a"])((function(){return!(e.value||t.value||n.value||i.value)})),s=function(e){return 0===e};return{customTipFocus:u,customTip:n,tipAmount:c,total:r,bill:e,numberOfPeople:t,tip:i,setTip:l,reset:a,disableReset:p,isInputError:s}}},L=(n("4360"),n("6b0d")),Q=n.n(L);const W=Q()(K,[["render",G],["__scopeId","data-v-759f3a08"]]);var X=W,Y={name:"App",components:{TipCalculatorApp:X},setup:function(){Object(o["j"])((function(){document.title="Tip Calculator App"}))}};n("8a57");const Z=Q()(Y,[["render",r]]);var ee=Z,te=n("5502"),ne=Object(te["a"])({state:{},mutations:{},actions:{},modules:{}});Object(o["b"])(ee).use(ne).mount("#app")},"8a57":function(e,t,n){"use strict";n("e899")},e899:function(e,t,n){}});
//# sourceMappingURL=app.5aeaf7e7.js.map