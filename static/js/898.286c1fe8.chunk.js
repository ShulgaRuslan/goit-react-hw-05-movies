"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[898],{9898:function(n,t,r){r.r(t),r.d(t,{default:function(){return s}});var e=r(885),a=r(2791),c=r(6871),u=r(722),i=r(184),o=function(n){var t=n.data;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{children:t.map((function(n){var t=n.id,r=n.author,e=n.content;return(0,i.jsxs)("li",{children:[(0,i.jsxs)("p",{children:["Author: ",r]}),(0,i.jsx)("p",{children:e})]},t)}))})})},s=function(){var n=(0,c.UO)().movieId,t=(0,a.useState)([]),r=(0,e.Z)(t,2),s=r[0],f=r[1];return(0,a.useEffect)((function(){(0,u.GZ)(n).then((function(n){var t=n.results;f(t)}))}),[n]),(0,i.jsx)(i.Fragment,{children:s.length?(0,i.jsx)(o,{data:s}):(0,i.jsx)("div",{children:"We don't have any reviews for this movie"})})}},722:function(n,t,r){r.d(t,{GZ:function(){return d},IY:function(){return p},MX:function(){return v},Rb:function(){return f},k8:function(){return s}});var e=r(5861),a=r(7757),c=r.n(a),u=r(4569),i=r.n(u);i().defaults.baseURL="https://api.themoviedb.org/3";var o="5ccc52ff517b9ef53bd77baeca7b01c7",s=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()("/trending/movie/day?api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()("/search/movie?api_key=".concat(o,"&query=").concat(t,"&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()("/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()("/movie/".concat(t,"/credits?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()("/movie/".concat(t,"/reviews?api_key=").concat(o,"&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=898.286c1fe8.chunk.js.map