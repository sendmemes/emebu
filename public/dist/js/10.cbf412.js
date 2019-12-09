(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{24:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i=function(t){return t=t.toString(),isNaN(parseFloat(t.replace(/,/g,"")))?"0":parseFloat(t.replace(/,/g,"")).toFixed().replace(/\B(?=(\d{3})+(?!\d))/g,".")}},60:function(t,e,n){"use strict";n.r(e);var i=n(9),o=n(2),c=n(4),a=n.n(c),s=n(6),r=n(24),l=n(11),u=n(19);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v={data:function(){return{qty:1,coupon:"",ticketId:"",couponId:"",couponApplied:!1}},beforeRouteEnter:function(t,e,n){o.a.dispatch("ticket/fetchTicketById",Object(i.a)(t.params.id)).then((function(){return n((function(e){return e.ticketId=t.params.id}))}))},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(n,!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(s.b)({ticketDetail:"ticket/ticketDetail"}),{badCode:function(){return this.coupon!==this.ticketDetail.coupon.code},total:function(){var t=this.countCut;return this.qty*this.ticketDetail.price-t},canCheckout:function(){return!isNaN(parseFloat(this.qty))&&isFinite(this.qty)},countCut:function(){if(!this.couponApplied)return 0;var t=parseInt(this.ticketDetail.coupon.max_cut),e=this.qty*this.ticketDetail.price*(this.ticketDetail.coupon.rate/100);return 0===t?e:e>t?t:e}}),methods:{currencyFormat:r.a,eventImageUrl:l.a,useCoupon:function(){this.couponApplied=!0,this.couponId=this.ticketDetail.coupon.id},createTransaction:function(){a.a.post("/api/transaction",{ticketId:Object(i.a)(this.ticketId),qty:this.qty,coupon_id:this.couponId?this.couponId:""}).then((function(t){return u.a.push({name:"transaction.detail",params:{id:Object(i.b)(t.data.result)}})}))}}},m=n(1),f=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 col-md-6 m-auto p-0"},[n("v-img",{staticClass:"event-image col-12",staticStyle:{"margin-top":"-.2rem"},attrs:{src:t.eventImageUrl(t.ticketDetail.event.image)}}),t._v(" "),n("div",{staticClass:"col-12"},[n("p",{staticClass:"mb-2"},[t._v(t._s(t.ticketDetail.event.title)+" - "+t._s(t.ticketDetail.name))]),t._v(" "),n("small",[t._v(t._s(t.ticketDetail.description))])]),t._v(" "),n("v-divider"),t._v(" "),n("div",{staticClass:"form-group row d-flex justify-content-center mb-0"},[n("div",{staticClass:"col-12 d-flex align-items-center justify-content-center py-1"},[n("label",{staticClass:"m-0 col-2 pl-0"},[t._v(t._s(t.$t("quantity")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.qty,expression:"qty"}],staticClass:"form-control col-9",attrs:{type:"number",name:"qty",min:"1",step:"1"},domProps:{value:t.qty},on:{input:function(e){e.target.composing||(t.qty=e.target.value)}}})])]),t._v(" "),t.couponApplied?t._e():n("div",{staticClass:"form-group row d-flex justify-content-center mb-0"},[n("div",{staticClass:"col-12 d-flex align-items-center justify-content-center py-1"},[n("label",{staticClass:"m-0 col-2 pl-0"},[t._v(t._s(t.$t("coupon")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon,expression:"coupon"}],staticClass:"form-control col-9",attrs:{type:"text",name:"coupon",oninput:"this.value = this.value.toUpperCase()"},domProps:{value:t.coupon},on:{input:function(e){e.target.composing||(t.coupon=e.target.value)}}})])]),t._v(" "),t.couponApplied?t._e():n("div",{staticClass:"col-12"},[n("button",{staticClass:"btn col-12 btn-success",attrs:{disabled:t.badCode,type:"button"},on:{click:t.useCoupon}},[t._v(t._s(t.$t("use_coupon")))])]),t._v(" "),n("v-divider"),t._v(" "),n("div",{staticClass:"col-12 d-flex justify-content-between"},[n("span",[n("p",{staticClass:"mb-0"},[t._v(t._s(t.$t("ticket_price")))])]),t._v(" "),n("span",[t._v(t._s(t.qty)+" × "),n("span",{staticClass:"font-weight-bold"},[t._v("Rp "+t._s(t.currencyFormat(t.ticketDetail.price)))])])]),t._v(" "),t.couponApplied?n("div",{staticClass:"col-12 d-flex justify-content-between"},[n("span",[n("p",[t._v(t._s(t.coupon))])]),t._v(" "),n("span",[n("p",{staticClass:"font-weight-bold mb-0"},[t._v("- Rp "+t._s(t.currencyFormat(t.countCut)))])])]):t._e(),t._v(" "),n("div",{staticClass:"col-12 d-flex justify-content-between blockquote m-0"},[n("span",[n("p",{staticClass:"mb-0"},[t._v(t._s(t.$t("total_payment")))])]),t._v(" "),n("span",[n("p",{staticClass:"font-weight-bold mb-0"},[t._v("Rp "+t._s(t.currencyFormat(t.total)))])])]),t._v(" "),n("div",{staticClass:"col-12 fixed-bottom bg-light d-md-none",staticStyle:{"box-shadow":"0px -1px 6px 2px rgba(158,158,158,1)"}},[n("button",{staticClass:"btn col-12 btn-primary",attrs:{disabled:!t.canCheckout,type:"button"},on:{click:t.createTransaction}},[t._v(t._s(t.$t("checkout")))])])],1)}),[],!1,null,null,null);e.default=f.exports}}]);