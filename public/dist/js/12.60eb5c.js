(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{54:function(t,e,n){"use strict";var o,r,s=n(0),i=n.n(s);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e,n,o,r,s,i){try{var a=t[s](i),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(o,r)}function m(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===l(t)&&(n=t,t=""),n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({url:t,title:e,width:600,height:720},n);var o=void 0!==window.screenLeft?window.screenLeft:window.screen.left,r=void 0!==window.screenTop?window.screenTop:window.screen.top,s=window.innerWidth||document.documentElement.clientWidth||window.screen.width,i=window.innerHeight||document.documentElement.clientHeight||window.screen.height;n.left=s/2-n.width/2+o,n.top=i/2-n.height/2+r;var u=Object.keys(n).reduce((function(t,e){return t.push("".concat(e,"=").concat(n[e])),t}),[]).join(","),m=window.open(t,e,u);return window.focus&&m.focus(),m}var d={name:"LoginWithGithub",computed:{githubAuth:function(){return window.config.githubAuth},url:function(){return"/api/oauth/github"}},mounted:function(){window.addEventListener("message",this.onMessage,!1)},beforeDestroy:function(){window.removeEventListener("message",this.onMessage)},methods:{login:(o=i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=m("",this.$t("login")),t.next=3,this.$store.dispatch("auth/fetchOauthUrl",{provider:"github"});case 3:n=t.sent,e.location.href=n;case 5:case"end":return t.stop()}}),t,this)})),r=function(){var t=this,e=arguments;return new Promise((function(n,r){var s=o.apply(t,e);function i(t){u(s,n,r,i,a,"next",t)}function a(t){u(s,n,r,i,a,"throw",t)}i(void 0)}))},function(){return r.apply(this,arguments)}),onMessage:function(t){t.origin===window.origin&&t.data.token&&(this.$store.dispatch("auth/saveToken",{token:t.data.token}),this.$router.push({name:"home"}))}}},f=n(1),p=Object(f.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return this.githubAuth?e("button",{staticClass:"btn btn-dark ml-auto",attrs:{type:"button"},on:{click:this.login}},[this._v("\n  "+this._s(this.$t("login_with"))+"\n  "),e("fa",{attrs:{icon:["fab","github"]}})],1):this._e()}),[],!1,null,null,null);e.a=p.exports},84:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),s=n(7),i=n.n(s),a=(n(54),n(20));function c(t,e,n,o,r,s,i){try{var a=t[s](i),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(o,r)}var l,u,m={middleware:"guest",metaInfo:function(){return{title:this.$t("login")}},data:function(){return{form:new i.a({email:"",password:""}),remember:!1}},beforeRouteEnter:function(t,e,n){a.a.ua.includes("Wolvpack")?n({name:"m.login"}):a.a.mobile()?n({name:"download"}):n()},methods:{login:(l=r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.form.post("/api/login");case 2:return e=t.sent,n=e.data,this.$store.dispatch("auth/saveToken",{token:n.token,remember:this.remember}),t.next=7,this.$store.dispatch("auth/fetchUser");case 7:this.$router.push({name:"home"});case 8:case"end":return t.stop()}}),t,this)})),u=function(){var t=this,e=arguments;return new Promise((function(n,o){var r=l.apply(t,e);function s(t){c(r,n,o,s,i,"next",t)}function i(t){c(r,n,o,s,i,"throw",t)}s(void 0)}))},function(){return u.apply(this,arguments)})}},d=n(1),f=Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row d-flex justify-content-center col-12 mx-0"},[n("div",{staticClass:"col-lg-5 col-md-7 m-auto"},[n("card",{staticClass:"pt-3",attrs:{title:t.$t("login")}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)},keydown:function(e){return t.form.onKeydown(e)}}},[n("div",{staticClass:"form-group row d-flex justify-content-center mb-0"},[n("div",{staticClass:"col-md-9"},[n("div",{staticClass:"col-md-12 d-flex align-items-center py-1"},[n("v-img",{staticClass:"mr-2",attrs:{src:"/dist/assets/mail.svg","max-width":"25","max-height":"25",contain:""}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control col-md-11",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email",placeholder:t.$t("email")},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})],1),t._v(" "),n("has-error",{staticClass:"d-block pl-5 text-left",attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),n("div",{staticClass:"form-group row d-flex justify-content-center mb-0"},[n("div",{staticClass:"col-md-9"},[n("div",{staticClass:"col-md-12 d-flex align-items-center py-1"},[n("v-img",{staticClass:"mr-2",attrs:{src:"/dist/assets/key.svg","max-width":"25","max-height":"25",contain:""}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control col-md-11",class:{"is-invalid":t.form.errors.has("password")},attrs:{type:"password",name:"password",placeholder:t.$t("password")},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})],1),t._v(" "),n("has-error",{staticClass:"d-block pl-5 text-left",attrs:{form:t.form,field:"password"}})],1)]),t._v(" "),n("div",{staticClass:"form-group row d-flex justify-content-center mt-3 text-center"},[n("div",{staticClass:"col-12 col-md-8 d-md-flex align-items-space-between align-center"},[n("checkbox",{staticClass:"login-ckbox mx-m-auto",attrs:{name:"remember"},model:{value:t.remember,callback:function(e){t.remember=e},expression:"remember"}},[n("span",[t._v(t._s(t.$t("remember_me")))])]),t._v(" "),n("router-link",{staticClass:"small ml-auto my-auto",attrs:{to:{name:"password.request"}}},[t._v("\n              "+t._s(t.$t("forgot_password"))+"\n            ")])],1)]),t._v(" "),n("div",{staticClass:"form-group row d-flex justify-content-center"},[n("div",{staticClass:"d-flex pl-5 col-md-9"},[n("v-button",{staticClass:"ml-3",attrs:{loading:t.form.busy}},[t._v("\n              "+t._s(t.$t("login"))+"\n            ")])],1)])])])],1)])}),[],!1,null,null,null);e.default=f.exports}}]);