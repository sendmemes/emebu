(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{24:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a=function(t){return t=t.toString(),isNaN(parseFloat(t.replace(/,/g,"")))?"0":parseFloat(t.replace(/,/g,"")).toFixed().replace(/\B(?=(\d{3})+(?!\d))/g,".")}},82:function(t,e,n){"use strict";n.r(e);var a=n(9),i=n(6),r=n(44),c=(n(3),n(24)),s=n(2);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p={components:{QrcodeVue:r.a},data:function(){return{id:""}},beforeRouteEnter:function(t,e,n){var i=t.params.id,r=Object(a.a)(i);s.a.dispatch("transaction/fetchTransactionById",r).then((function(){return s.a.dispatch("transaction/fetchPaymentInfo",s.a.getters["transaction/transactionDetail"].event.eo_id)})).then((function(){return n((function(t){t.id=i||""}))}))},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(i.b)({transactionDetail:"transaction/transactionDetail",paymentInfo:"transaction/paymentInfo"}),{url:function(){return window.location.href},size:function(){return window.innerWidth<500?.5*window.innerWidth:250},total:function(){var t=this.countCut;return this.transactionDetail.qty*this.transactionDetail.ticket.price-t},countCut:function(){if(!this.transactionDetail.coupon_id)return 0;var t=parseInt(this.transactionDetail.coupon.max_cut),e=this.transactionDetail.qty*this.transactionDetail.ticket.price*(this.transactionDetail.coupon.rate/100);return 0===t?e:e>t?t:e}}),methods:{decrypt:a.a,currencyFormat:c.a,handleEventUrl:function(){this.$router.push({name:"event.detail",params:{id:Object(a.b)(this.transactionDetail.event.id)}})}}},u=n(1),_=Object(u.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.transactionDetail.settled_at?n("div",[n("qrcode-vue",{staticClass:"col-12 px-0 d-flex justify-content-center",staticStyle:{"margin-top":"4%"},attrs:{value:t.url,size:t.size}}),t._v(" "),n("p",{staticClass:"text-center",staticStyle:{"font-size":".7rem"}},[t._v(t._s(t.$t("ticket_guide")))])],1):t._e(),t._v(" "),n("div",{staticClass:"col-12"},[n("div",{staticClass:"col-12 p-0"},[n("p",{staticClass:"m-0"},[t._v(t._s(t.$t("transaction_id")))]),t._v(" "),n("p",[t._v(t._s(t.transactionDetail.id.toUpperCase()))])]),t._v(" "),n("div",{staticClass:"col-12 p-0"},[n("p",[t._v(t._s(t.transactionDetail.event.title)+" - "+t._s(t.transactionDetail.ticket.name))])]),t._v(" "),n("v-divider"),t._v(" "),n("div",{staticClass:"col-12 p-0 d-flex justify-content-between"},[n("span",[n("p",[t._v(t._s(t.$t("ticket_price")))])]),t._v(" "),n("span",[t._v(t._s(t.transactionDetail.qty)+" × "),n("span",{staticClass:"font-weight-bold"},[t._v("Rp "+t._s(t.currencyFormat(t.transactionDetail.ticket.price)))])])]),t._v(" "),t.transactionDetail.coupon?n("div",{staticClass:"col-12 p-0 d-flex justify-content-between"},[n("span",[n("p",[t._v(t._s(t.transactionDetail.coupon.code))])]),t._v(" "),n("span",{staticClass:"font-weight-bold mb-0"},[t._v("- Rp "+t._s(t.currencyFormat(t.countCut)))])]):t._e(),t._v(" "),n("div",{staticClass:"col-12 p-0 d-flex justify-content-between blockquote m-0"},[n("span",[n("p",[t._v(t._s(t.$t("total_payment")))])]),t._v(" "),n("span",[n("p",{staticClass:"font-weight-bold"},[t._v("Rp "+t._s(t.currencyFormat(t.total)))])])]),t._v(" "),t.paymentInfo&&!t.transactionDetail.settled_at?n("div",[n("v-divider"),t._v(" "),n("p",[t._v(t._s(t.$t("please_transfer_to")))]),t._v(" "),n("p",[t._v(t._s(t.paymentInfo.name))]),t._v(" "),n("p",[t._v(t._s(t.paymentInfo.bank)+" - "+t._s(t.paymentInfo.acc_number))])],1):t._e()],1),t._v(" "),n("div",{staticClass:"col-12 fixed-bottom bg-light d-md-none",staticStyle:{"box-shadow":"0px -1px 6px 2px rgba(158,158,158,1)"}},[n("button",{staticClass:"btn col-12 btn-primary",attrs:{type:"button"},on:{click:function(e){return t.handleEventUrl()}}},[t._v(t._s(t.$t("see_event_detail")))])])])}),[],!1,null,null,null);e.default=_.exports}}]);