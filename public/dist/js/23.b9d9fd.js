(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{69:function(t,e,s){"use strict";s.r(e);var a=s(10),i=s.n(a),o=s(4),l=s.n(o),c=s(2),r=s(7),n=s.n(r),m=s(6),d=s(43),p=s(21),v=s(9),u=s(11);function f(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function _(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var g={middleware:"auth",metaInfo:function(){return{title:this.$t("create")}},components:{VueEditor:d.a},data:function(){return{e1:0,form:new n.a({id:"",title:"",publish_time:"",start_time:"",end_time:"",location:"",location_guide:"",summary:"",description:"",image:"",image_3d:"",ticket:[],eo_id:"",type_id:"",category_id:""}),imagePreview:"",imagePreview2:"",latLng:{lat:.7,lng:118.9},address:"",zoom:3.75,showMarker:!1,tempTicket:{name:"",qty:"",price:1e3,start_time:"",end_time:"",description:""},ticket:[],paid:!0,removeIndex:"",type:"",category:""}},beforeRouteEnter:function(t,e,s){c.a.dispatch("category/fetchCategories").then((function(){return c.a.dispatch("type/fetchTypes")})).then((function(){t.name.includes("edit")?c.a.dispatch("event/fetchEventById",Object(v.a)(t.params.id)).then((function(){return s((function(t){return t.setEventDetail()}))})):s()}))},computed:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?f(Object(s),!0).forEach((function(e){_(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):f(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}({routeName:function(){return this.$route.name}},Object(m.b)({user:"auth/user",eventDetail:"event/eventDetail",categories:"category/getCategories",types:"type/getTypes"}),{marker:function(){return{position:this.latLng,opacity:1,draggable:!0,enabled:!0,dragended:0}},language:function(){return navigator.language},activeType:function(){return""!==this.type?this.types[this.type].name:""},activeCategory:function(){return""!==this.category?this.categories[this.category].name:""},ticketValid:function(){var t=this.tempTicket,e=t.name,s=t.qty,a=t.start_time,i=t.end_time;return e&&s&&a&&i}}),created:function(){var t=this;this.form.keys().forEach((function(e){t.form[e]=t.user[e]}))},methods:{setType:function(t){this.type=t,this.form.type=this.types[t].id},setCategory:function(t){this.category=t,this.form.category=this.categories[t].id},showTypeModal:function(){i()("#eventType").modal("show")},showCategoryModal:function(){i()("#eventCategory").modal("show")},scrollTop:function(){window.scrollTo({top:0,behavior:"auto"})},setPlace:function(t){t&&(this.showMarker=!0,this.latLng={lat:t.geometry.location.lat(),lng:t.geometry.location.lng()},this.zoom=14)},updateChild:function(t,e,s){console.log(t)},imageUpload:function(t){var e=this,s=new FileReader;t&&t.type.match("image.*")&&(s.readAsDataURL(t),s.onload=function(){e.imagePreview=s.result},this.form.img=t)},imageUpload2:function(t){var e=this,s=new FileReader;t&&t.type.match("image.*")&&(s.readAsDataURL(t),s.onload=function(){e.imagePreview2=s.result},this.form.img_3d=t)},handleImageAdded:function(t,e,s,a){var i=new n.a({image:""});i.image=t,i.image&&i.submit("post","/api/quill",{transformRequest:[function(t,e){return objectToFormData(t)}]}).then((function(t){e.insertEmbed(s,"image","".concat(p.a,"/storage/quill/").concat(t.data[0])),a()})).catch((function(t){console.log(t)}))},addTicket:function(){var t=this,e={name:this.tempTicket.name,type:this.tempTicket.type,qty:this.tempTicket.qty,price:this.tempTicket.price,startTime:new Date(this.tempTicket.startTime),endTime:new Date(this.tempTicket.endTime),description:this.tempTicket.description};this.removeIndex&&(this.ticket.splice(this.removeIndex-1,1),this.removeIndex=""),this.ticket.push(e),this.form.ticket=this.ticket,setTimeout((function(){t.initAddTicket()}),500)},initAddTicket:function(){this.tempTicket.name="",this.tempTicket.qty="",this.tempTicket.price=1e3,this.tempTicket.start_time="",this.tempTicket.end_time="",this.tempTicket.description=""},editTicket:function(t){this.tempTicket=this.form.ticket[t],i()("#addTicket").modal("show"),this.removeIndex=t+1},removeTicket:function(t){this.ticket.splice(t,1),this.form.ticket=this.ticket},setEventDetail:function(){var t=this;this.form.keys().forEach((function(e){return t.form[e]=t.eventDetail[0][e]})),this.type=parseInt(this.form.type_id),this.category=parseInt(this.form.category_id),this.form.publish_time=new Date(this.form.publish_time).toISOString(),this.form.start_time=new Date(this.form.start_time).toISOString(),this.form.end_time=new Date(this.form.end_time).toISOString();var e=this.form.location.split(", ");this.showMarker=!0,this.zoom=14,this.latLng={lat:parseFloat(e[0]),lng:parseFloat(e[1])},l.a.get("https://maps.google.com/maps/api/geocode/json?latlng=".concat(this.latLng.lat,",").concat(this.latLng.lng,"&key=AIzaSyAyhAP-kfAQ9xqD6jEhwnQPkAmxFSNIxZI")).then((function(e){t.address=e.data.results[0].formatted_address})).catch((function(t){console.log(t)})),this.imagePreview=this.form.image?Object(u.a)(this.form.image):"",this.imagePreview2=this.form.image_3d?Object(u.a)(this.form.image_3d):"",this.form.ticket.forEach((function(t){t.start_time=new Date(t.start_time).toISOString(),t.end_time=new Date(t.end_time).toISOString()}))},update:function(){var t=this;this.form.id?this.form._method="PATCH":(this.form.location="".concat(this.latLng.lat,", ").concat(this.latLng.lng),this.form.eo_id=this.user.id),this.form.submit("post","/api/event".concat(this.form.id?"/".concat(this.form.id):""),{transformRequest:[function(t,e){return objectToFormData(t)}]}).then((function(e){t.$store.dispatch("auth/fetchUser"),router.push({name:"event.detail",params:{id:Object(v.b)(e.data.result?e.data.result:t.form.id)}})}))}}},y=s(1),h=Object(y.a)(g,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"col-xl-5 col-lg-6 col-md-8 mx-auto",attrs:{novalidate:""},on:{submit:function(e){return e.preventDefault(),t.update(e)},keydown:function(e){return t.form.onKeydown(e)}}},[s("v-stepper",{staticClass:"stepper",model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}},[s("v-stepper-header",{staticClass:"stepper"},[s("v-stepper-step",{attrs:{complete:t.e1>1,step:"1"}},[t._v(t._s(t.$t("basic_info")))]),t._v(" "),s("v-divider"),t._v(" "),s("v-stepper-step",{attrs:{complete:t.e1>2,step:"2"}},[t._v(t._s(t.$t("details")))]),t._v(" "),s("v-divider"),t._v(" "),s("v-stepper-step",{attrs:{step:"3"}},[t._v(t._s(t.$t("tickets")))])],1),t._v(" "),s("v-stepper-items",[s("v-stepper-content",{attrs:{step:"1"}},[s("div",{staticClass:"row d-flex justify-content-center mb-0"},[s("div",{staticClass:"col-md-12 py-0"},[s("div",{staticClass:"col-md-11 py-1 text-center mx-auto"},[s("h5",[t._v(t._s(t.$t("basic_info")))])])])]),t._v(" "),s("div",{staticClass:"form-group row d-flex justify-content-center mb-0"},[s("div",{staticClass:"col-md-12 py-0 justify-content-center"},[s("label",{staticClass:"col-11 d-block pt-0 col-form-label mx-auto"},[t._v(t._s(t.$t("event_title")))]),t._v(" "),s("div",{staticClass:"col-md-12 d-flex align-items-center py-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"form-control col-md-11 mx-auto",class:{"is-invalid":t.form.errors.has("title")},attrs:{type:"text",name:"title",placeholder:t.$t("event_title_placeholder")},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}})]),t._v(" "),s("has-error",{staticClass:"d-block pl-3 text-left",attrs:{form:t.form,field:"title"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row d-flex justify-content-center mb-0"},[s("div",{staticClass:"col-md-12 py-0 justify-content-center"},[s("label",{staticClass:"col-11 d-block pt-0 col-form-label mx-auto"},[t._v(t._s(t.$t("type")))]),t._v(" "),s("div",{staticClass:"col-md-12 d-flex align-items-center py-1"},[s("div",{staticClass:"input-group col-md-11 mx-auto px-0 py-0",on:{click:t.showTypeModal}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.activeType,expression:"activeType"}],staticClass:"form-control",attrs:{name:"type"},domProps:{value:t.activeType},on:{input:function(e){e.target.composing||(t.activeType=e.target.value)}}}),t._v(" "),s("div",{staticClass:"input-group-append"},[s("span",{staticClass:"input-group-text"},[t._v("Choose")])])])]),t._v(" "),s("has-error",{staticClass:"d-block pl-3 text-left",attrs:{form:t.form,field:"type"}})],1)]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"eventType",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalScrollableTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-scrollable",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalScrollableTitle"}},[t._v(t._s(t.$t("type")))]),t._v(" "),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),s("div",{staticClass:"modal-body d-flex justify-content-center flex-wrap"},t._l(t.types,(function(e,a){return s("div",{key:a,staticClass:"position-relative text-center"},[s("div",{staticClass:"modal-icon-container m-1 rounded-lg",attrs:{width:"140",height:"140","data-dismiss":"modal"},on:{click:function(e){return t.setType(a)}}},[s("v-img",{staticClass:"modal-icon",attrs:{src:e.image,width:"140",height:"140",cover:""}}),t._v(" "),s("span",{staticClass:"position-absolute modal-icon-name"},[t._v(t._s(e.name))])],1)])})),0)])])]),t._v(" "),s("div",{staticClass:"form-group row d-flex justify-content-center mb-0"},[s("div",{staticClass:"col-md-12 py-0 justify-content-center"},[s("label",{staticClass:"col-11 d-block pt-0 col-form-label mx-auto"},[t._v(t._s(t.$t("category")))]),t._v(" "),s("div",{staticClass:"col-md-12 d-flex align-items-center py-1"},[s("div",{staticClass:"input-group col-md-11 mx-auto px-0 py-0",on:{click:t.showCategoryModal}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.activeCategory,expression:"activeCategory"}],staticClass:"form-control",attrs:{name:"category"},domProps:{value:t.activeCategory},on:{input:function(e){e.target.composing||(t.activeCategory=e.target.value)}}}),t._v(" "),s("div",{staticClass:"input-group-append"},[s("span",{staticClass:"input-group-text"},[t._v("Choose")])])])]),t._v(" "),s("has-error",{staticClass:"d-block pl-3 text-left",attrs:{form:t.form,field:"category"}})],1)]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"eventCategory",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalScrollableTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-scrollable",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalScrollableTitle"}},[t._v(t._s(t.$t("category")))]),t._v(" "),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),s("div",{staticClass:"modal-body d-flex justify-content-center flex-wrap"},t._l(t.categories,(function(e,a){return s("div",{key:a,staticClass:"position-relative text-center"},[s("div",{staticClass:"modal-icon-container m-1 rounded-lg",attrs:{width:"140",height:"140","data-dismiss":"modal"},on:{click:function(e){return t.setCategory(a)}}},[s("v-img",{staticClass:"modal-icon",attrs:{src:e.image,width:"140",height:"140",cover:""}}),t._v(" "),s("span",{staticClass:"position-absolute modal-icon-name"},[t._v(t._s(e.name))])],1)])})),0)])])]),t._v(" "),s("div",{staticClass:"form-group row d-flex justify-content-center mb-0"},[s("div",{staticClass:"col-md-12 py-0 justify-content-center"},[s("div",{staticClass:"col-md-12 d-flex align-items-center py-1"},[s("div",{staticClass:"col-md-11 mx-auto px-0"},[s("v-divider")],1)])])]),t._v(" "),s("div",{staticClass:"row d-flex justify-content-center mb-0"},[s("div",{staticClass:"col-md-12 py-0"},[s("div",{staticClass:"col-md-11 py-1 mx-auto text-center"},[s("h5",[t._v(t._s(t.$t("date_n_time")))])])])]),t._v(" "),s("div",{staticClass:"form-group row d-flex justify-content-center mb-0"},[s("div",{staticClass:"col-md-12 py-0 justify-content-center"},[s("label",{staticClass:"col-11 d-block pt-0 col-form-label mx-auto"},[t._v(t._s(t.$t("event_publish")))]),t._v(" "),s("div",{staticClass:"col-md-12 d-flex align-items-center py-1"},[s("datetime",{staticClass:"form-control theme-blue col-md-11 mx-auto py-0",class:{"is-invalid":t.form.errors.has("publishTime")},attrs:{type:"datetime","week-start":1,"minute-step":30},model:{value:t.form.publish_time,callback:function(e){t.$set(t.form,"publish_time",e)},expression:"form.publish_time"}})],1),t._v(" "),s("has-error",{staticClass:"d-block pl-3 text-left",attrs:{form:t.form,field:"publish_time"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row d-flex justify-content-center mb-0"},[s("div",{staticClass:"col-md-12 py-0 justify-content-center"},[s("label",{staticClass:"col-11 d-block pt-0 col-form-label mx-auto"},[t._v(t._s(t.$t("event_start")))]),t._v(" "),s("div",{staticClass:"col-md-12 d-flex align-items-center py-1"},[s("datetime",{staticClass:"form-control theme-blue col-md-11 mx-auto py-0",class:{"is-invalid":t.form.errors.has("startTime")},attrs:{type:"datetime","week-start":1,"minute-step":30},model:{value:t.form.start_time,callback:function(e){t.$set(t.form,"start_time",e)},expression:"form.start_time"}})],1),t._v(" "),s("has-error",{staticClass:"d-block pl-3 text-left",attrs:{form:t.form,field:"start_time"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row d-flex justify-content-center mb-0"},[s("div",{staticClass:"col-md-12 py-0 justify-content-center"},[s("label",{staticClass:"col-11 d-block pt-0 col-form-label mx-auto"},[t._v(t._s(t.$t("event_end")))]),t._v(" "),s("div",{staticClass:"col-md-12 d-flex align-items-center py-1"},[s("datetime",{staticClass:"form-control theme-blue col-md-11 mx-auto py-0",class:{"is-invalid":t.form.errors.has("endTime")},attrs:{type:"datetime","week-start":1,"minute-step":30},model:{value:t.form.end_time,callback:function(e){t.$set(t.form,"end_time",e)},expression:"form.end_time"}})],1),t._v(" "),s("has-error",{staticClass:"d-block pl-3 text-left",attrs:{form:t.form,field:"end_time"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row d-flex justify-content-center mb-0"},[s("div",{staticClass:"col-md-12 py-0 justify-content-center"},[s("div",{staticClass:"col-md-12 d-flex align-items-center py-1"},[s("div",{staticClass:"col-md-11 mx-auto px-0"},[s("v-divider")],1)])])]),t._v(" "),s("div",{staticClass:"row d-flex justify-content-center mb-0"},[s("div",{staticClass:"col-md-12 py-0"},[s("div",{staticClass:"col-md-11 py-1 mx-auto text-center"},[s("h5",[t._v(t._s(t.$t("location")))])])])]),t._v(" "),s("div",{staticClass:"form-group row d-flex justify-content-center mb-0"},[s("div",{staticClass:"col-md-12 py-0 justify-content-center"},[s("label",{staticClass:"col-11 d-block pt-0 col-form-label mx-auto"},[t._v(t._s(t.$t("venue")))]),t._v(" "),s("div",{staticClass:"col-md-12 d-flex align-items-center py-1"},[s("GmapMap",{staticClass:"mx-auto col-11",staticStyle:{width:"100%",height:"300px"},attrs:{center:t.latLng,zoom:t.zoom,options:{streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1,zoomControl:!1}}},[t.showMarker?s("GmapMarker",{attrs:{position:t.marker.position,clickable:!0,draggable:!1}}):t._e()],1)],1),t._v(" "),s("div",{staticClass:"col-12 d-flex justify-content-center p-0"},[t.address?s("div",{staticClass:"col-md-11 py-1"},[t._v("\n                "+t._s(t.$t("location"))+": "+t._s(t.address)+"\n              ")]):t._e()]),t._v(" "),s("div",{staticClass:"col-md-12 d-flex align-items-center py-1"},[s("gmap-autocomplete",{staticClass:"form-control col-md-11 mx-auto",attrs:{placeholder:t.$t("venue_placeholder"),name:"venue"},on:{place_changed:t.setPlace}})],1),t._v(" "),s("has-error",{staticClass:"d-block pl-3 text-left",attrs:{form:t.form,field:"location"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row d-flex justify-content-center mb-0"},[s("div",{staticClass:"col-md-12 py-0 justify-content-center"},[s("div",{staticClass:"col-md-12 d-flex align-items-center pt-1 pb-0"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.location_guide,expression:"form.location_guide"}],staticClass:"form-control col-md-11 mx-auto",staticStyle:{resize:"none"},attrs:{maxlength:"150",rows:"4",placeholder:t.$t("address_placeholder"),name:"address"},domProps:{value:t.form.location_guide},on:{input:function(e){e.target.composing||t.$set(t.form,"location_guide",e.target.value)}}})]),t._v(" "),t.form.location_guide&&t.form.location_guide.length?s("div",{staticClass:"col-md-12 py-1"},[s("div",{staticClass:"col-md-11 mx-auto py-0 px-0 text-right",class:{"text-danger":150===t.form.location_guide.length}},[t._v(t._s(t.form.location_guide.length)+"/150")])]):t._e(),t._v(" "),s("has-error",{staticClass:"d-block pl-3 text-left",attrs:{form:t.form,field:"title"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row d-flex justify-content-center mt-3 mx-0 col-12"},[s("div",{staticClass:"d-flex col-md-11 px-0 d-flex justify-content-between"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.e1=2,t.scrollTop()}}},[t._v("\n              "+t._s(t.$t("continue"))+"\n            ")])])])]),t._v(" "),s("v-stepper-content",{attrs:{step:"2"}},[s("div",{staticClass:"row d-flex justify-content-center mb-0"},[s("div",{staticClass:"col-md-12 py-0"},[s("div",{staticClass:"col-md-11 py-1 text-center mx-auto"},[s("h5",[t._v(t._s(t.$t("main_event_img")))])])])]),t._v(" "),s("div",{staticClass:"form-group row d-flex justify-content-center mb-0"},[s("div",{staticClass:"col-md-12 py-0 justify-content-center"},[s("div",{staticClass:"col-md-12 d-flex align-items-center py-1"},[s("div",{staticClass:"custom-file col-md-11 mx-auto"},[s("input",{staticClass:"custom-file-input",attrs:{type:"file",accept:"image/*"},on:{change:function(e){return t.imageUpload(e.target.files[0])}}}),t._v(" "),s("label",{staticClass:"custom-file-label"},[t._v(t._s(t.$t("choose_file")))])])]),t._v(" "),t.imagePreview?s("label",{staticClass:"col-11 d-block col-form-label mx-auto"},[t._v(t._s(t.$t("image_preview")))]):t._e(),t._v(" "),s("div",{staticClass:"col-md-12 d-flex align-items-center py-0"},[s("img",{staticClass:"col-6 mx-auto px-0",attrs:{src:t.imagePreview}})]),t._v(" "),s("has-error",{staticClass:"d-block pl-3 text-left",attrs:{form:t.form,field:"img"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row d-flex justify-content-center mb-0"},[s("div",{staticClass:"col-md-12 py-0 justify-content-center"},[s("label",{staticClass:"col-11 d-block pt-0 col-form-label mx-auto"},[t._v(t._s(t.$t("panoramic_image")))]),t._v(" "),s("div",{staticClass:"col-md-12 d-flex align-items-center py-1"},[s("div",{staticClass:"custom-file col-md-11 mx-auto"},[s("input",{staticClass:"custom-file-input",attrs:{type:"file",accept:"image/*"},on:{change:function(e){return t.imageUpload2(e.target.files[0])}}}),t._v(" "),s("label",{staticClass:"custom-file-label"},[t._v(t._s(t.$t("choose_file")))])])]),t._v(" "),t.imagePreview2?s("label",{staticClass:"col-11 d-block col-form-label mx-auto"},[t._v(t._s(t.$t("image_preview")))]):t._e(),t._v(" "),s("div",{staticClass:"col-md-12 d-flex align-items-center py-0"},[s("img",{staticClass:"col-6 mx-auto px-0",attrs:{src:t.imagePreview2}})]),t._v(" "),s("has-error",{staticClass:"d-block pl-3 text-left",attrs:{form:t.form,field:"type"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row d-flex justify-content-center mb-0"},[s("div",{staticClass:"col-md-12 py-0 justify-content-center"},[s("div",{staticClass:"col-md-12 d-flex align-items-center py-1"},[s("div",{staticClass:"col-md-11 mx-auto px-0"},[s("v-divider")],1)])])]),t._v(" "),s("div",{staticClass:"row d-flex justify-content-center mb-0"},[s("div",{staticClass:"col-md-12 py-0"},[s("div",{staticClass:"col-md-11 py-1 text-center mx-auto"},[s("h5",[t._v(t._s(t.$t("summary")))])])])]),t._v(" "),s("div",{staticClass:"form-group row d-flex justify-content-center mb-0"},[s("div",{staticClass:"col-md-12 py-0 justify-content-center"},[s("div",{staticClass:"col-md-12 d-flex align-items-center pt-1 pb-0"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.summary,expression:"form.summary"}],staticClass:"form-control col-md-11 mx-auto",staticStyle:{resize:"none"},attrs:{maxlength:"150",rows:"4",placeholder:t.$t("summary_placeholder"),name:"summary"},domProps:{value:t.form.summary},on:{input:function(e){e.target.composing||t.$set(t.form,"summary",e.target.value)}}})]),t._v(" "),t.form.summary&&t.form.summary.length?s("div",{staticClass:"col-md-12 py-1"},[s("div",{staticClass:"col-md-11 mx-auto py-0 px-0 text-right",class:{"text-danger":150===t.form.summary.length}},[t._v(t._s(t.form.summary.length)+"/150")])]):t._e(),t._v(" "),s("has-error",{staticClass:"d-block pl-3 text-left",attrs:{form:t.form,field:"title"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row d-flex justify-content-center mb-0"},[s("div",{staticClass:"col-md-12 py-0 justify-content-center"},[s("div",{staticClass:"col-md-12 d-flex align-items-center py-1"},[s("div",{staticClass:"col-md-11 mx-auto px-0"},[s("v-divider")],1)])])]),t._v(" "),s("div",{staticClass:"row d-flex justify-content-center mb-0"},[s("div",{staticClass:"col-md-12 py-0"},[s("div",{staticClass:"col-md-11 py-1 text-center mx-auto"},[s("h5",[t._v(t._s(t.$t("description")))])])])]),t._v(" "),s("div",{staticClass:"form-group row d-flex justify-content-center mb-0"},[s("div",{staticClass:"col-md-12 py-0 justify-content-center"},[s("div",{staticClass:"col-md-12 d-flex align-items-center py-1"},[s("div",{staticClass:"col-md-11 mx-auto px-0"},[s("vue-editor",{attrs:{useCustomImageHandler:""},on:{"image-added":t.handleImageAdded},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"description"}})],1)])])]),t._v(" "),s("div",{staticClass:"form-group row d-flex justify-content-center mt-3 mx-0 col-12"},[s("div",{staticClass:"d-flex col-md-11 px-0 d-flex justify-content-between"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.e1=3,t.scrollTop()}}},[t._v("\n              "+t._s(t.$t("continue"))+"\n            ")]),t._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){t.e1=1,t.scrollTop()}}},[t._v(t._s(t.$t("back")))])])])]),t._v(" "),s("v-stepper-content",{attrs:{step:"3"}},[s("div",{staticClass:"row d-flex justify-content-center mb-0"},[s("div",{staticClass:"col-md-12 py-0"},[s("div",{staticClass:"col-md-11 py-1 text-center mx-auto"},[s("h5",[t._v(t._s(t.$t("tickets")))])])])]),t._v(" "),s("div",{staticClass:"form-group row d-flex justify-content-center mb-0"},[s("div",{staticClass:"col-md-12 py-0 justify-content-center"},[s("div",{staticClass:"col-md-12 d-flex align-items-center py-1"},[!t.form.ticket||t.form.ticket.length<1?s("div",{staticClass:"col-md-11 mx-auto text-center"},[s("img",{staticClass:"my-4",attrs:{src:"/dist/assets/movie-tickets.svg",width:"100"}}),t._v(" "),s("h5",[t._v(t._s(t.$t("no_ticket_set")))])]):s("div",{staticClass:"col-md-11 mx-auto text-center"},t._l(t.form.ticket,(function(e,a){return s("v-card",{key:a,staticClass:"ticket mb-2"},[s("v-card-title",[t._v(t._s(e.name))]),t._v(" "),s("v-card-text",{staticClass:"pb-0"},[s("p",{staticClass:"text-left"},[t._v(t._s(e.desc))]),t._v(" "),s("h5",[s("p",{staticClass:"text-right my-0"},[t._v(t._s(0===e.price?"FREE":"Rp "+e.price))])])]),t._v(" "),s("v-card-actions",{staticClass:"d-flex align justify-content-end"},[s("img",{staticClass:"mx-3",attrs:{src:"/dist/assets/edit-2.svg",height:"20"},on:{click:function(e){return t.editTicket(a)}}}),t._v(" "),s("img",{staticClass:"mx-1",attrs:{src:"/dist/assets/trash-2.svg",height:"20"},on:{click:function(e){return t.removeTicket(a)}}})])],1)})),1)]),t._v(" "),s("has-error",{staticClass:"d-block pl-3 text-left",attrs:{form:t.form,field:"title"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row d-flex justify-content-center mt-3 mx-0 col-12"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#addTicket"},on:{click:t.initAddTicket}},[t._v("\n            "+t._s(t.$t("add")+" "+t.$t("ticket"))+"\n          ")])]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"addTicket",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-scrollable modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"addTicketTitle"}},[t._v(t._s(t.$t("tickets")))]),t._v(" "),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),s("div",{staticClass:"modal-body"},[s("ul",{staticClass:"nav nav-pills nav-fill"},[s("li",{staticClass:"nav-item",on:{click:function(e){t.tempTicket.price=1e3}}},[s("a",{staticClass:"nav-link",class:{active:t.tempTicket.price>=1e3}},[t._v(t._s(t.$t("paid")))])]),t._v(" "),s("li",{staticClass:"nav-item",on:{click:function(e){t.tempTicket.price=0}}},[s("a",{staticClass:"nav-link",class:{active:0==t.tempTicket.price}},[t._v(t._s(t.$t("free")))])])]),t._v(" "),s("div",{staticClass:"col-12 form-group pt-4 pb-1 px-0 my-0"},[s("label",[t._v(t._s(t.$t("ticket_name")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.tempTicket.name,expression:"tempTicket.name"}],staticClass:"form-control col-12 mx-auto",attrs:{type:"text",maxlength:"50",required:""},domProps:{value:t.tempTicket.name},on:{input:function(e){e.target.composing||t.$set(t.tempTicket,"name",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-12 form-group px-0 py-1 my-0"},[s("label",[t._v(t._s(t.$t("quantity")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.tempTicket.qty,expression:"tempTicket.qty"}],staticClass:"form-control col-12 mx-auto",attrs:{type:"number",required:""},domProps:{value:t.tempTicket.qty},on:{input:function(e){e.target.composing||t.$set(t.tempTicket,"qty",e.target.value)}}})]),t._v(" "),t.tempTicket.price>=1e3?s("div",{staticClass:"col-12 form-group px-0 py-1 my-0"},[s("label",[t._v(t._s(t.$t("price")))]),t._v(" "),s("div",{staticClass:"input-group"},[s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[t._v("Rp")])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.tempTicket.price,expression:"tempTicket.price"}],staticClass:"form-control",attrs:{type:"number",min:"1000",required:""},domProps:{value:t.tempTicket.price},on:{input:function(e){e.target.composing||t.$set(t.tempTicket,"price",e.target.value)}}})])]):t._e(),t._v(" "),s("div",{staticClass:"col-12 form-group px-0 py-1 my-0"},[s("label",[t._v(t._s(t.$t("sales_start")))]),t._v(" "),s("datetime",{staticClass:"form-control theme-blue mx-auto",attrs:{type:"datetime","week-start":1,"minute-step":30},model:{value:t.tempTicket.start_time,callback:function(e){t.$set(t.tempTicket,"start_time",e)},expression:"tempTicket.start_time"}})],1),t._v(" "),s("div",{staticClass:"col-12 form-group px-0 py-1 my-0"},[s("label",[t._v(t._s(t.$t("sales_end")))]),t._v(" "),s("datetime",{staticClass:"form-control theme-blue mx-auto",attrs:{type:"datetime","week-start":1,"minute-step":30},model:{value:t.tempTicket.end_time,callback:function(e){t.$set(t.tempTicket,"end_time",e)},expression:"tempTicket.end_time"}})],1),t._v(" "),s("div",{staticClass:"col-12 form-group px-0 py-1 my-0"},[s("label",[t._v(t._s(t.$t("description")))]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempTicket.description,expression:"tempTicket.description"}],staticClass:"form-control col-12 mx-auto",staticStyle:{resize:"none"},attrs:{maxlength:"150",rows:"4"},domProps:{value:t.tempTicket.description},on:{input:function(e){e.target.composing||t.$set(t.tempTicket,"description",e.target.value)}}}),t._v(" "),s("p",{staticClass:"text-right my-0"},[t._v(t._s(t.tempTicket.description.length)+"/150")])])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal",disabled:!t.ticketValid},on:{click:t.addTicket}},[t._v(t._s(t.$t("save")))])])])])]),t._v(" "),s("div",{staticClass:"form-group row d-flex justify-content-center mt-3 mx-0 col-12"},[s("div",{staticClass:"d-flex col-md-11 px-0 d-flex justify-content-between"},[s("v-button",{attrs:{loading:t.form.busy,type:"success"}},[t._v("\n              "+t._s(t.$t("create"))+"\n            ")]),t._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){t.e1=2,t.scrollTop()}}},[t._v(t._s(t.$t("back")))])],1)])])],1)],1)],1)}),[],!1,null,null,null);e.default=h.exports}}]);