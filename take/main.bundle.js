!function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=0)}([function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(1),o=(t.n(n),document.querySelectorAll(".fading")),a=new ScrollMagic.Controller;new ScrollMagic.Scene({triggerElement:".bgc-parallax",triggerHook:0,duration:"100%"}).setTween(TweenMax.to(".masthead",1,{y:"-50%",ease:Power0.easeNone})).addTo(a),new ScrollMagic.Scene({triggerElement:".bgc-parallax.car",triggerHook:.6,duration:"100%"}).setTween(TweenMax.to(".old-car",1,{y:"-30%",ease:Power0.easeNone})).addTo(a);o.forEach(function(e){new ScrollMagic.Scene({triggerElement:e,triggerHook:.8,reverse:!1}).setClassToggle(e,"fade-active").addTo(a)},this)},function(e,r){}]);