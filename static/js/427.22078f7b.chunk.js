"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[427],{128:function(n,t,e){e.d(t,{Ai:function(){return l},Hx:function(){return d},Tg:function(){return f},Y5:function(){return h},xc:function(){return p}});var r=e(861),c=e(757),o=e.n(c),i="https://api.themoviedb.org/3",u="5ccc52ff517b9ef53bd77baeca7b01c7";function a(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(o().mark((function n(){var t,e,r,c=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(t,e);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(){return a("".concat(i,"/trending/movie/day?api_key=").concat(u))}function h(n){return a("".concat(i,"/movie/").concat(n,"?api_key=").concat(u))}function p(n){return a("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(u))}function d(n){return a("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(u))}function l(n){return a("".concat(i,"/search/movie?api_key=").concat(u,"&query=").concat(n))}},427:function(n,t,e){e.r(t),e.d(t,{default:function(){return a}});var r=e(885),c=e(871),o=e(791),i=e(128),u=e(184);function a(){var n=(0,c.UO)().movieId,t=(0,o.useState)([]),e=(0,r.Z)(t,2),a=e[0],s=e[1];return(0,o.useEffect)((function(){(0,i.Hx)(n).then((function(n){return s(n.results)}))}),[n]),(0,u.jsx)(u.Fragment,{children:0!==a.length?(0,u.jsx)("ul",{children:a.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,u.jsxs)("li",{children:[(0,u.jsxs)("h3",{children:["Author: ",e]}),(0,u.jsx)("p",{children:r})]},t)}))}):(0,u.jsx)("p",{children:"We don`t have any reviews for this movie"})})}}}]);
//# sourceMappingURL=427.22078f7b.chunk.js.map