(function(){"use strict";var t={88:function(t,n,r){var e=r(963),o=r(252);function u(t,n,r,e,u,l){const i=(0,o.up)("Home");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(i)])}var l=r(577);const i=t=>((0,o.dD)("data-v-347c9228"),t=t(),(0,o.Cn)(),t),a={key:0,class:"table",id:"table"},s=i((()=>(0,o._)("tr",null,[(0,o._)("th",null,"Наименование"),(0,o._)("th",null,"Цена"),(0,o._)("th",null,"Количество"),(0,o._)("th",null,"Стоимость")],-1))),c=i((()=>(0,o._)("td",null,[(0,o._)("b",null,"Итого:")],-1))),m=i((()=>(0,o._)("td",null,null,-1))),d=i((()=>(0,o._)("td",null,null,-1)));function h(t,n,r,e,u,i){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("button",{onClick:n[0]||(n[0]=t=>u.showTable=!0)},"Сгенерировать таблицу"),u.showTable?((0,o.wg)(),(0,o.iD)("table",a,[s,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(u.items,((t,n)=>((0,o.wg)(),(0,o.iD)("tr",{key:n},[(0,o._)("td",null,(0,l.zw)(t.name),1),(0,o._)("td",null,(0,l.zw)(t.price),1),(0,o._)("td",null,(0,l.zw)(t.amount),1),(0,o._)("td",null,(0,l.zw)(t.total),1)])))),128)),(0,o._)("tr",null,[c,m,d,(0,o._)("td",null,[(0,o._)("b",null,(0,l.zw)(i.totalItem),1)])])])):(0,o.kq)("",!0)])}var f=r(22),p={data(){return{showTable:!1,items:[]}},computed:{totalItem:function(){let t=0;for(let n=0;n<this.items.length;n++)t+=Number(this.items[n].total);return t}},mounted(){const t=[];console.log(t);for(let n=0;n<50;n++)t.push({name:this.randomName(),price:this.randomNumber(),amount:this.randomAmount(),total:this.getTotalCost()});this.items.push(...t)},methods:{randomName(){const t=(0,f.k)("абвгдежзиклмнопрстуфхцчшщъыьэюя",5);return this.name=t()},randomNumber(){return this.price=Number((1e3*Math.random()).toFixed(2))},randomAmount(){return this.amount=Math.round(100*Math.random())},getTotalCost(){return Number((this.total=this.price*this.amount).toFixed(2))}}},b=r(744);const v=(0,b.Z)(p,[["render",h],["__scopeId","data-v-347c9228"]]);var w=v,_={components:{Home:w}};const g=(0,b.Z)(_,[["render",u]]);var y=g,O=r(416);(0,e.ri)(y).use(O.x0).mount("#app")}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var u=n[e]={exports:{}};return t[e](u,u.exports,r),u.exports}r.m=t,function(){var t=[];r.O=function(n,e,o,u){if(!e){var l=1/0;for(c=0;c<t.length;c++){e=t[c][0],o=t[c][1],u=t[c][2];for(var i=!0,a=0;a<e.length;a++)(!1&u||l>=u)&&Object.keys(r.O).every((function(t){return r.O[t](e[a])}))?e.splice(a--,1):(i=!1,u<l&&(l=u));if(i){t.splice(c--,1);var s=o();void 0!==s&&(n=s)}}return n}u=u||0;for(var c=t.length;c>0&&t[c-1][2]>u;c--)t[c]=t[c-1];t[c]=[e,o,u]}}(),function(){r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};r.O.j=function(n){return 0===t[n]};var n=function(n,e){var o,u,l=e[0],i=e[1],a=e[2],s=0;if(l.some((function(n){return 0!==t[n]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(a)var c=a(r)}for(n&&n(e);s<l.length;s++)u=l[s],r.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return r.O(c)},e=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=r.O(void 0,[998],(function(){return r(88)}));e=r.O(e)})();
//# sourceMappingURL=app.2189d7d3.js.map