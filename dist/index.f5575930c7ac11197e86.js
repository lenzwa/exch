!function(){"use strict";var e={91:function(e){e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},963:function(e,t,n){e.exports=n.p+"assets/bc6e787dba8a76bbc8cf.png"},261:function(e,t,n){e.exports=n.p+"assets/db79b9db79833d1f8b6d.png"},517:function(e,t,n){e.exports=n.p+"assets/0dae83fe3219bccf2482.png"},546:function(e,t,n){e.exports=n.p+"assets/ae01d6d00fb35483e8a3.png"},74:function(e,t,n){e.exports=n.p+"assets/b88d04fba731603756b1.css"},447:function(e,t,n){e.exports=n.p+"assets/3e9c961a684952dee50f.js"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e}(),n.b=document.baseURI||self.location.href,function(){var e=n(91),t=n.n(e),o=new URL(n(74),n.b),r=new URL(n(261),n.b),a=new URL(n(963),n.b),c=new URL(n(546),n.b),i=new URL(n(517),n.b),s=new URL(n(447),n.b);t()(o),t()(r),t()(a),t()(c),t()(i),t()(s);const l=document.querySelector(".main__exchange-window-selectWrapper-selectItem1"),u=document.querySelector(".main__exchange-window-selectWrapper-selectItem2"),d=document.querySelector(".main__exchange-window-inputwrapper-amount"),p=document.querySelector(".main__exchange-window-button"),f=document.querySelector(".main__exchange-window-inputwrapper-result");!async function(){await fetch("https://v6.exchangerate-api.com/v6/e3db0a0162b212042571d1aa/codes").then((e=>e.json())).then((e=>e.supported_codes)).then((e=>{for(let n of e)(t=document.createElement("option")).value=n[0],t.innerHTML=n[1],l.append(t);for(let n of e){var t;(t=document.createElement("option")).value=n[0],t.innerHTML=n[1],u.append(t)}}))}(),p.addEventListener("click",(()=>{let e=d.value;if("FROM"===l.value||"TO"==u.value||"FROM"==l.value&&"TO"==u.value)throw new Error("No");fetch(`https://v6.exchangerate-api.com/v6/e3db0a0162b212042571d1aa/pair/${l.value}/${u.value}/${e}`).then((e=>(console.log("Pending Data"),e.json()))).then((e=>(console.log("Receiving Data"),e.conversion_result))).then((e=>{f.textContent=e}))}));const v=document.querySelector(".header__nav-list-item-link-exchange"),m=document.querySelector(".header__nav-list-item-link-contact");document.querySelector(".header__nav-list-item-link").addEventListener("click",(e=>{e.preventDefault()})),m.addEventListener("click",(e=>{e.preventDefault(),document.querySelector(".contact__name_email-name").scrollIntoView({behavior:"smooth"})})),v.addEventListener("click",(e=>{e.preventDefault(),d.scrollIntoView({behavior:"smooth"})}));const h=document.querySelector(".header__nav-logo"),b=document.querySelector(".header__nav-list-closingItem"),w=document.querySelector(".header__nav-list");screen.width<=620&&(h.addEventListener("click",(()=>{w.style.animation="slidinToBot 1.5s alternate ease forwards",w.style.display="flex",document.body.style.overflow="hidden",v.addEventListener("click",(()=>{document.body.style.overflow="visible",w.style.display="none"}))||m.addEventListener("click",(()=>{document.body.style.overflow="visible",w.style.display="none"}))})),b.addEventListener("click",(()=>{w.style.animation="slidinToTop 1.5s reverse ease forwards",document.body.style.overflow="visible"})))}()}();