(window.webpackJsonp_saberslide=window.webpackJsonp_saberslide||[]).push([[1],{3:function(e,t,n){}}]),function(e){function t(t){for(var r,u,l=t[0],c=t[1],s=t[2],a=0,f=[];a<l.length;a++)u=l[a],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(p&&p(t);f.length;)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={0:0},i=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var l=window.webpackJsonp_saberslide=window.webpackJsonp_saberslide||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var p=c;i.push([5,1]),n()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.blockEditor},,function(e,t){e.exports=window.wp.i18n},function(e,t,n){"use strict";n.r(t);var r=n(1),o=(n(3),n(0)),i=(n(4),n(2));Object(r.registerBlockType)("saber-slider/slide",{edit:function(){return Object(o.createElement)("li",Object(i.useBlockProps)(),"EDITOR RENDER")},save:function(){return Object(o.createElement)("li",{class:"splide__slide"},"SAVED CONTENT")}})}]);