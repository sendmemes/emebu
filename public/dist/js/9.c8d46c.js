(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{19:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var a=function(t){return t=t.toString(),isNaN(parseFloat(t.replace(/,/g,"")))?"0":parseFloat(t.replace(/,/g,"")).toFixed().replace(/\B(?=(\d{3})+(?!\d))/g,".")}},60:function(t,e,i){"use strict";i.r(e);var a=i(9),n=i(2),c=i(6),r=i.n(c),s=i(5),o=i(19),l=i(23),u=i(22);function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var v={data:function(){return{qty:1,ticketId:""}},beforeRouteEnter:function(t,e,i){n.a.dispatch("ticket/fetchTicketById",Object(a.a)(t.params.id)).then((function(){return i((function(e){return e.ticketId=t.params.id}))}))},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(i,!0).forEach((function(e){d(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},Object(s.b)({ticketDetail:"ticket/ticketDetail"}),{total:function(){return this.qty*this.ticketDetail.price},canCheckout:function(){return!isNaN(parseFloat(this.qty))&&isFinite(this.qty)}}),methods:{currencyFormat:o.a,eventImageUrl:l.a,createTransaction:function(){r.a.post("/api/transaction",{ticketId:Object(a.a)(this.ticketId),qty:this.qty}).then((function(t){u.a.push({name:"post.checkout",params:{id:Object(a.b)(t.data.result)}})}))}}},b=i(1),f=Object(b.a)(v,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col- p-0"},[i("v-img",{staticClass:"event-image col-12",staticStyle:{"margin-top":"-.2rem"},attrs:{src:t.eventImageUrl(t.ticketDetail.event.image)}}),t._v(" "),i("div",{staticClass:"col-12"},[i("p",{staticClass:"mb-2"},[t._v(t._s(t.ticketDetail.event.title)+" - "+t._s(t.ticketDetail.name))]),t._v(" "),i("small",[t._v(t._s(t.ticketDetail.description))])]),t._v(" "),i("v-divider"),t._v(" "),i("div",{staticClass:"form-group row d-flex justify-content-center mb-0"},[i("div",{staticClass:"col-12 d-flex align-items-center justify-content-center py-1"},[i("label",{staticClass:"m-0 mr-2"},[t._v(t._s(t.$t("quantity")))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.qty,expression:"qty"}],staticClass:"form-control col-9",attrs:{type:"number",name:"qty",min:"1",step:"1"},domProps:{value:t.qty},on:{input:function(e){e.target.composing||(t.qty=e.target.value)}}})])]),t._v(" "),i("v-divider"),t._v(" "),i("div",{staticClass:"col-12 d-flex justify-content-between blockquote m-0"},[i("span",[i("p",{staticClass:"mb-0"},[t._v(t._s(t.$t("total_payment")))])]),t._v(" "),i("span",[i("p",{staticClass:"font-weight-bold mb-0"},[t._v("Rp "+t._s(t.currencyFormat(t.total)))])])]),t._v(" "),i("div",{staticClass:"col-12 d-flex justify-content-between"},[i("span",[i("p",[t._v(t._s(t.$t("ticket_price")))])]),t._v(" "),i("span",[t._v(t._s(t.qty)+" × "),i("span",{staticClass:"font-weight-bold"},[t._v("Rp "+t._s(t.currencyFormat(t.ticketDetail.price)))])])]),t._v(" "),i("div",{staticClass:"col-12 fixed-bottom bg-light d-md-none",staticStyle:{"box-shadow":"0px -1px 6px 2px rgba(158,158,158,1)"}},[i("button",{staticClass:"btn col-12 btn-primary",attrs:{disabled:!t.canCheckout,type:"button"},on:{click:t.createTransaction}},[t._v(t._s(t.$t("checkout")))])])],1)}),[],!1,null,null,null);e.default=f.exports}}]);