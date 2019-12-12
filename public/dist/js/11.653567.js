(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{24:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var a=function(t){return t=t.toString(),isNaN(parseFloat(t.replace(/,/g,"")))?"0":parseFloat(t.replace(/,/g,"")).toFixed().replace(/\B(?=(\d{3})+(?!\d))/g,".")}},64:function(t,e,s){"use strict";s.r(e);var a=s(6),n=s(9),i=s(24),r=s(17),c=s(18),o=s(44),l=s(21),d=s(10),u=s.n(d),_=s(2),v=s(11);function m(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function p(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var f={middleware:"auth",components:{QrcodeVue:o.a},data:function(){return{id:"",isHistory:""}},beforeRouteEnter:function(t,e,s){_.a.dispatch("transaction/fetchTransaction").then((function(){return s((function(e){return e.isHistory=t.name.includes("history")}))}))},computed:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?m(Object(s),!0).forEach((function(e){p(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):m(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}({},Object(a.b)({transactions:"transaction/transactions",user:"auth/user",paymentInfo:"transaction/paymentInfo"}),{transactionList:function(){var t=this;return"1"===this.user.role?this.transactions.filter((function(e){return t.isHistory?+new Date(e.event.end_time)<=+new Date:new Date(e.event.end_time)>new Date})):this.transactions},qrUrl:function(){return"".concat(l.a,"transaction/").concat(this.id)},isMember:function(){return"1"===this.user.role}}),methods:{handleTransactionUrl:function(t){if(this.isHistory){var e=this.transactionList.findIndex((function(e){return e.id===t}));this.$router.push({name:"event.detail",params:{id:Object(n.b)(this.transactionList[e].event.id)}})}else c.a.mobile()&&this.$router.push({name:"transaction.detail",params:{id:Object(n.b)(t)}})},currencyFormat:i.a,dateFormat:r.a,handleEventUrl:function(t){this.$router.push({name:"event.detail",params:{id:Object(n.b)(t)}})},handleQr:function(t){u()("#qrCode").modal("show"),this.id=Object(n.b)(t)},eventImageUrl:v.a,total:function(t){var e=this.countCut(t);return t.qty*t.ticket.price-e},countCut:function(t){if(!t.coupon_id)return 0;var e=parseInt(t.coupon.max_cut),s=t.qty*t.ticket.price*(t.coupon.rate/100);return 0===e?s:s>e?e:s},handlePaymentDest:function(t){_.a.dispatch("transaction/fetchPaymentInfo",t).then((function(){return u()("#paymentDest").modal("show")}))}}},b=s(1),h=Object(b.a)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[0===t.transactionList.length?s("div",{staticClass:"col-12 text-center d-absolute",staticStyle:{transform:"translateY(175%)"}},[s("img",{attrs:{src:"/dist/assets/frown.svg",width:"60"}}),t._v(" "),t.isHistory?s("p",[t._v(t._s(t.$t("no_history")))]):s("p",[t._v(t._s(t.$t("no_ticket")))])]):s("div",[t._l(t.transactionList,(function(e,a){return s("div",{key:a,on:{click:function(s){return t.handleTransactionUrl(e.id)}}},[s("div",{staticClass:"row col-12 d-md-flex rounded-lg bg-white m-2",class:{"d-none":t.isMember}},[s("div",{staticClass:"col-12 p-0"},[s("p",{staticClass:"m-0"},[t._v(t._s(t.$t("transaction_id"))+t._s(e.id.toUpperCase()))])]),t._v(" "),s("v-img",{staticClass:"col-3 rounded-lg",class:{"d-none":"1"!==t.user.role,"gray-out":!e.settled_at},attrs:{src:t.eventImageUrl(e.event.image),height:"174",width:"300",cover:""}}),t._v(" "),s("div",{staticClass:"col-3 d-flex flex-column justify-content-center",class:{"col-6 pl-0":!t.isMember}},[s("h5",{staticClass:"m-0 d-block text-truncate"},[t._v(t._s(e.event.title))]),t._v(" "),s("p",{staticClass:"m-0 d-block text-truncate"},[t._v(t._s(e.ticket.name))]),t._v(" "),s("v-divider",{staticClass:"my-2 mx-0"}),t._v(" "),s("p",{staticClass:"m-0"},[t._v(t._s(t.dateFormat(new Date(t.isMember?e.event.start_time:e.created_at),"dd, DD MMM YYYY")))]),t._v(" "),s("p",{staticClass:"m-0"},[t._v(t._s(t.dateFormat(new Date(t.isMember?e.event.start_time:e.created_at),"hh.mm")))])],1),t._v(" "),s("div",{staticClass:"col-3 d-flex flex-column justify-content-center",class:{"col-6 ":!t.isMember}},[s("p",{staticClass:"m-0"},[t._v(t._s(t.$t("ticket_price")))]),t._v(" "),s("span",[t._v(t._s(e.qty)+" × "),s("span",{staticClass:"font-weight-bold"},[t._v("Rp "+t._s(t.currencyFormat(e.ticket.price)))])]),t._v(" "),s("v-divider",{staticClass:"my-2 mx-0"}),t._v(" "),s("div",{staticClass:"d-flex align-items-center justify-content-between"},[s("div",[s("p",{staticClass:"m-0"},[t._v(t._s(t.$t("total_payment")))]),t._v(" "),s("span",{staticClass:"font-weight-bold"},[t._v("Rp "+t._s(t.currencyFormat(t.total(e))))])]),t._v(" "),e.coupon_id&&e.coupon?s("div",[s("span",{staticClass:"d-none d-md-inline"},[t._v(t._s(e.coupon.code))]),t._v(" "),s("img",{attrs:{src:"/dist/assets/tag.svg",height:"18"}})]):t._e()])],1),t._v(" "),t.isMember?s("div",{staticClass:"px-4 col-3 text-right d-flex flex-column justify-content-around"},[e.settled_at&&!t.isHistory?s("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"button"},on:{click:function(s){return t.handleQr(e.id)}}},[t._v("\n            "+t._s(t.$t("see_qr"))+"\n          ")]):t._e(),t._v(" "),e.settled_at||t.isHistory?t._e():s("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"button"},on:{click:function(s){return t.handlePaymentDest(e.event.eo_id)}}},[t._v("\n            "+t._s(t.$t("see_payment_dest"))+"\n          ")]),t._v(" "),s("button",{staticClass:"btn btn-white text-primary btn-block",attrs:{type:"button"},on:{click:function(s){return t.handleEventUrl(e.event.id)}}},[t._v("\n            "+t._s(t.$t("see_event_detail"))+"\n          ")])]):t._e(),t._v(" "),t.isMember||e.settled_at?t._e():s("div",{staticClass:"col-12 d-flex p-0"},[s("div",{staticClass:"col-6 p-0"},[s("p",{staticClass:"m-0"},[t._v(t._s(t.$t("sender_name"))+":")]),t._v(" "),s("p",{staticClass:"m-0"},[t._v(t._s(e.member.name))])]),t._v(" "),s("div",{staticClass:"col-6 text-right"},[s("button",{staticClass:"btn btn-success",attrs:{type:"button"}},[s("img",{staticClass:"white-svg",attrs:{src:"/dist/assets/check-circle.svg",height:"18",cover:""}}),t._v(" "),s("span",[t._v(t._s(t.$t("settle")))])])])])],1),t._v(" "),"1"===t.user.role?s("Ticket",{staticClass:"d-md-none",attrs:{image:e.event.image,title:e.event.title,name:e.ticket.name,date:e.event.start_time,settled_at:e.settled_at},on:{click:function(s){return t.handleTransactionUrl(e.id)}}}):t._e()],1)})),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"qrCode",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("see_qr")))]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"modal-body d-flex justify-content-center flex-wrap"},[s("qrcode-vue",{staticClass:"col-12 px-0 d-flex justify-content-center",attrs:{value:t.qrUrl,size:"250"}})],1)])])]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"paymentDest",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("see_payment_dest")))]),t._v(" "),t._m(1)]),t._v(" "),t.paymentInfo?s("div",{staticClass:"modal-body text-center"},[s("p",[s("small",[t._v(t._s(t.$t("please_transfer_to")))])]),t._v(" "),s("p",[t._v(t._s(t.paymentInfo.name))]),t._v(" "),s("p",[t._v(t._s(t.paymentInfo.bank)+" - "+t._s(t.paymentInfo.acc_number))])]):t._e()])])])],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}],!1,null,null,null);e.default=h.exports}}]);