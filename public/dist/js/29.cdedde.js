(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{63:function(e,r,t){"use strict";t.r(r);var n=t(0),o=t.n(n);function a(e,r,t,n,o,a,s){try{var i=e[a](s),c=i.value}catch(e){return void t(e)}i.done?r(c):Promise.resolve(c).then(n,o)}var s,i,c={components:{QrcodeStream:t(94).QrcodeStream},data:function(){return{error:""}},methods:{onDecode:function(e){window.location.href=e},onInit:(s=o.a.mark((function e(r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r;case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),"NotAllowedError"===e.t0.name?this.error="ERROR: you need to grant camera access permisson":"NotFoundError"===e.t0.name?this.error="ERROR: no camera on this device":"NotSupportedError"===e.t0.name?this.error="ERROR: secure context required (HTTPS, localhost)":"NotReadableError"===e.t0.name?this.error="ERROR: is the camera already in use?":"OverconstrainedError"===e.t0.name?this.error="ERROR: installed cameras are not suitable":"StreamApiNotSupportedError"===e.t0.name&&(this.error="ERROR: Stream API is not supported in this browser");case 8:case"end":return e.stop()}}),e,this,[[0,5]])})),i=function(){var e=this,r=arguments;return new Promise((function(t,n){var o=s.apply(e,r);function i(e){a(o,t,n,i,c,"next",e)}function c(e){a(o,t,n,i,c,"throw",e)}i(void 0)}))},function(e){return i.apply(this,arguments)})}},u=t(1),d=Object(u.a)(c,(function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"camera text-center text-white"},[r("qrcode-stream",{staticClass:"scanner",on:{decode:this.onDecode}},[this._v("\n    You can scan attendees ticket here.\n  ")]),this._v(" "),r("p",{staticClass:"error"},[this._v(this._s(this.error))])],1)}),[],!1,null,null,null);r.default=d.exports}}]);