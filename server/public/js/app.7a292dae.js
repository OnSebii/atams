(function(e){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7aeec9eb"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(e);var l=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}a[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"#993955",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"atams name",contain:"","min-width":"100",src:n("cf05"),width:"100"}})],1),r("v-spacer"),r("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"#A3C3D9",to:"/"},on:{click:e.vibrate}},[e._v(" Home ")]),r("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"#A3C3D9",to:"/newtrip"},on:{click:e.vibrate}},[e._v(" New trip ")]),r("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"#A3C3D9",to:"/trips"},on:{click:e.vibrate}},[e._v(" Trips ")])],1),r("v-main",[e.offline?r("v-alert",{attrs:{text:"",prominent:"",type:"error",icon:"mdi-cloud-alert"}},[e._v(" You are currently offline! ")]):e._e(),r("router-view",{attrs:{offline:e.offline}})],1),r("v-footer",{attrs:{color:"#E9ECF5",padless:""}},[r("v-row",{attrs:{justify:"center",color:"A3C3D9","no-gutters":""}},[r("v-col",{attrs:{col:"4"}}),r("v-col",{staticClass:"py-4 text-center my-auto",attrs:{col:"4"}},[e._v(" baily.at | "),r("strong",[e._v("atams")])]),r("v-col",{staticClass:"py-4 text-right",attrs:{col:"4"}},[r("v-btn",{staticClass:"pr-4",attrs:{plain:"",to:"/about"}},[e._v("Impressum")])],1)],1)],1)],1)},i=[],o={name:"App",data:function(){return{offline:null}},created:function(){var e=this;window.addEventListener("online",(function(){return e.offline=!1})),window.addEventListener("offline",(function(){return e.offline=!0})),document.addEventListener("swUpdated",this.updateAvailable,{once:!0}),window.indexedDB||alert("IndexedDB is not available!")},methods:{updateAvailable:function(){confirm("New content is available!. Click OK to refresh")&&window.location.reload()},vibrate:function(){navigator.vibrate(200)}}},s=o,c=n("2877"),l=n("6544"),u=n.n(l),d=n("0798"),p=n("7496"),f=n("40dc"),v=n("8336"),m=n("62ad"),h=n("553a"),b=n("adda"),g=n("f6c4"),w=n("0fd9"),x=n("2fa4"),k=Object(c["a"])(s,a,i,!1,null,null,null),T=k.exports;u()(k,{VAlert:d["a"],VApp:p["a"],VAppBar:f["a"],VBtn:v["a"],VCol:m["a"],VFooter:h["a"],VImg:b["a"],VMain:g["a"],VRow:w["a"],VSpacer:x["a"]});var y=n("9483");Object(y["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\n For more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(e){document.dispatchEvent(new CustomEvent("swUpdated",{detail:e}))},offline:function(){console.log("No internet connection found. App is running in offline mode."),document.dispatchEvent(new CustomEvent("offline"))},online:function(){document.dispatchEvent(new CustomEvent("online"))},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var C=n("8c4f"),D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("h1",[e._v("ATAMS")]),n("h3",[e._v("Subscribe to push notifications")]),n("v-btn",{staticClass:"btn btn-primary",on:{click:e.subscribe}},[e._v("Subscribe")])],1)},_=[],O=n("1da1"),j=(n("38cf"),n("ac1f"),n("5319"),n("5cc6"),n("907a"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("96cf"),n("bc3a")),V=n.n(j),R={name:"Home",data:function(){return{text:["Your traffic monitoring application","Second Text"]}},methods:{subscribe:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("serviceWorker"in navigator){t.next=3;break}return console.log("no service worker!"),t.abrupt("return");case 3:return n="BKRdIZ5jBe5fYXKjJ91UJHcqbNmbe4fpLv6jxop0POQ3weDbrtWRR-AjGkptXABn1Nrjf4hV3h3khNqnlxHUkag",t.next=6,navigator.serviceWorker.ready;case 6:return r=t.sent,t.next=9,r.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:e.urlBase64ToUint8Array(n)});case 9:return a=t.sent,t.next=12,V.a.post("".concat("","/subscribe"),a);case 12:case"end":return t.stop()}}),t)})))()},urlBase64ToUint8Array:function(e){for(var t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),r=window.atob(n),a=new Uint8Array(r.length),i=0;i<r.length;++i)a[i]=r.charCodeAt(i);return a}},components:{}},N=R,A=Object(c["a"])(N,D,_,!1,null,null,null),E=A.exports;u()(A,{VBtn:v["a"]});var S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items},scopedSlots:e._u([{key:"item.distance",fn:function(t){var r=t.item;return[n("p",[e._v(e._s(r.distance)+" km")])]}},{key:"item.date",fn:function(t){var r=t.item;return[n("p",[e._v(e._s(e._f("moment")(r.date,"d.M.YYYY")))])]}},{key:"item.edit",fn:function(t){var r=t.item;return[n("v-btn",{attrs:{icon:"",color:"pink"},on:{click:function(t){return e.delTrip(r)}}},[n("v-icon",[e._v("mdi-delete")])],1),n("EditTrip",{staticClass:"d-inline",attrs:{item:r},on:{updatedTrip:e.updateTrip}})]}}])})],1)},B=[],P=n("b85c"),M=n("5530"),$=(n("4de4"),n("159b"),n("d81d"),n("a9e3"),n("99af"),n("b0c0"),n("1d25")),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:"",color:"blue"}},"v-btn",a,!1),r),[n("v-icon",{attrs:{left:""}},[e._v(" mdi-pencil ")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"text-h5"},[e._v("Edit your trip")])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Trip name*",hint:"The name of your trip",required:"",rules:e.nameRules},model:{value:e.tripName,callback:function(t){e.tripName=t},expression:"tripName"}})],1)],1)],1),n("small",[e._v("*indicates required field")])],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Close ")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.saveTrip}},[e._v(" Save ")])],1)],1)],1)],1)},q=[],F={name:"EditTrip",data:function(){return{dialog:!1,valid:!0,tripName:"",nameRules:[function(e){return!!e||"Name is required"}]}},props:{item:{value:Object}},created:function(){this.tripName=this.item.name},methods:{validate:function(){return this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()},saveTrip:function(){if(1==this.validate()){var e=this.item;e.name=this.tripName,this.$emit("updatedTrip",e),this.dialog=!1}}}},L=F,U=n("b0af"),W=n("99d9"),Y=n("a523"),H=n("169a"),K=n("4bd4"),G=n("132d"),J=n("8654"),z=Object(c["a"])(L,I,q,!1,null,null,null),Z=z.exports;u()(z,{VBtn:v["a"],VCard:U["a"],VCardActions:W["a"],VCardText:W["b"],VCardTitle:W["c"],VCol:m["a"],VContainer:Y["a"],VDialog:H["a"],VForm:K["a"],VIcon:G["a"],VRow:w["a"],VSpacer:x["a"],VTextField:J["a"]});var X={name:"Trips",data:function(){return{headers:[{text:"ID",align:"start",value:"id",sortable:!1},{text:"Name",value:"name"},{text:"GPS Calls",value:"gpscalls"},{text:"Distance traveled",value:"distance"},{text:"Date",value:"date"},{text:"Edit",value:"edit",sortable:!1}],items:[],db:null,offline:null,storedTrips:[]}},computed:{},watch:{offline:function(e,t){console.log(e,t),0==e&&this.syncTrips()}},props:{offline:{value:String}},created:function(){this.db||this.openDB()},methods:{openDB:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object($["a"])("atamsDB",1,{upgrade:function(e){var t=e.createObjectStore("trips",{keyPath:"id"});t.createIndex("name","name",{unique:!1})}});case 2:e.db=t.sent,e.fetchData();case 4:case"end":return t.stop()}}),t)})))()},getStoredTrips:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.db.getAll("trips");case 2:e.storedTrips=t.sent;case 3:case"end":return t.stop()}}),t)})))()},syncTrips:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.db.getAll("trips");case 2:n=t.sent,r=n.filter((function(e){return 1==e.isDeleted})),a=n.filter((function(e){return 1==e.isUpdated})),console.log(r,a),r.forEach((function(t){e.delTripOn(t)})),a.forEach((function(t){e.updateTripOn(t)}));case 8:case"end":return t.stop()}}),t)})))()},fetchData:function(){console.log("fetchData called"),console.log(this.offline),this.offline?this.getDataOff():this.getDataOn()},getDataOn:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){var n,r,a,i,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,V()({url:"".concat("","/trips"),method:"get"});case 2:return n=t.sent,r=n.data,console.log(r.data),e.items=r.data.map((function(e){return Object(M["a"])(Object(M["a"])({},e),{},{isDeleted:!1})})),console.log(e.items),a=e.db.transaction("trips","readwrite"),a.objectStore("trips").clear(),t.next=11,a.done;case 11:i=Object(P["a"])(e.items),t.prev=12,i.s();case 14:if((o=i.n()).done){t.next=20;break}return s=o.value,t.next=18,e.db.put("trips",s);case 18:t.next=14;break;case 20:t.next=25;break;case 22:t.prev=22,t.t0=t["catch"](12),i.e(t.t0);case 25:return t.prev=25,i.f(),t.finish(25);case 28:case"end":return t.stop()}}),t,null,[[12,22,25,28]])})))()},getDataOff:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.db.getAll("trips");case 2:n=t.sent,e.items=n.filter((function(e){return 0==e.isDeleted}));case 4:case"end":return t.stop()}}),t)})))()},delTrip:function(e){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(console.log("delTrip called"),!t.offline){n.next=6;break}return n.next=4,t.delTripOff(e);case 4:n.next=8;break;case 6:return n.next=8,t.delTripOn(e);case 8:return n.next=10,t.fetchData();case 10:case"end":return n.stop()}}),n)})))()},delTripOff:function(e){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.db.get("trips",Number(e.id));case 2:r=n.sent,r.isDeleted=!0,t.db.put("trips",r),t.fetchData();case 6:case"end":return n.stop()}}),n)})))()},delTripOn:function(e){return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e),t.prev=1,t.next=4,V()({url:"".concat("","/trip/").concat(e.id),method:"delete"});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](1),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[1,6]])})))()},updateTrip:function(e){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(console.log("updateTrip called"),!t.offline){n.next=6;break}return n.next=4,t.updateTripOff(e);case 4:n.next=8;break;case 6:return n.next=8,t.updateTripOn(e);case 8:return n.next=10,t.fetchData();case 10:case"end":return n.stop()}}),n)})))()},updateTripOff:function(e){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.db.delete("trips",Number(e.id));case 2:return r=e,r.isUpdated=!0,n.next=6,t.db.put("trips",r);case 6:case"end":return n.stop()}}),n)})))()},updateTripOn:function(e){return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,V()({url:"".concat("","/trip/").concat(e.id),method:"patch",contentType:"application/json",data:{name:e.name}});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),console.error(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()}},components:{EditTrip:Z}},Q=X,ee=n("8fea"),te=Object(c["a"])(Q,S,B,!1,null,null,null),ne=te.exports;u()(te,{VBtn:v["a"],VDataTable:ee["a"],VIcon:G["a"]});var re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"text-center"},[n("h3",[e._v("Start a new trip")]),n("NewTripForm",{staticClass:"d-inline",attrs:{disabled:e.isDisabled},on:{start:e.startTracking}}),n("v-btn",{staticClass:"ma-2",attrs:{disabled:!e.isDisabled},on:{click:e.stopTracking}},[e._v("stop")])],1),n("h4",[e._v("GPS calls:")]),n("v-data-table",{attrs:{headers:e.headers,items:e.gpsData,"items-per-page":6,"sort-by":e.sortBy,"sort-desc":e.sortDesc},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t}}}),n("p",[e._v("Traveled Distance: "+e._s(e.traveledDistance)+" km")])],1)},ae=[],ie=n("61c5"),oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{color:"#A3C3D9"}},"v-btn",a,!1),r),[e._v(" Start ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"text-h5"},[e._v("Plan a new trip")])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Trip name*",hint:"The name of your trip",required:"",rules:e.nameRules},model:{value:e.tripName,callback:function(t){e.tripName=t},expression:"tripName"}})],1)],1)],1),n("small",[e._v("*indicates required field")])],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Close ")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.startTrip}},[e._v(" Start ")])],1)],1)],1)],1)},se=[],ce={name:"NewTripForm",data:function(){return{dialog:!1,valid:!0,tripName:"",nameRules:[function(e){return!!e||"Name is required"}]}},methods:{validate:function(){return this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()},startTrip:function(){1==this.validate()&&(this.$emit("start",this.tripName),this.dialog=!1)}}},le=ce,ue=Object(c["a"])(le,oe,se,!1,null,null,null),de=ue.exports;u()(ue,{VBtn:v["a"],VCard:U["a"],VCardActions:W["a"],VCardText:W["b"],VCardTitle:W["c"],VCol:m["a"],VContainer:Y["a"],VDialog:H["a"],VForm:K["a"],VRow:w["a"],VSpacer:x["a"],VTextField:J["a"]});var pe={name:"NewTrip",data:function(){return{headers:[{text:"ID",align:"start",value:"nr",sortable:!1},{text:"Latitude",value:"lat",sortable:!1},{text:"Longitude",value:"lon",sortable:!1}],sortBy:"nr",sortDesc:!0,dialog:!1,gpsCalls:0,isDisabled:!1,gpsData:[],geoWatch:null,date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),tripName:"",traveledDistance:0,lastTwoCalls:[{},{}]}},props:{},created:function(){},methods:{startTracking:function(e){console.log(e),this.tripName=e,this.geoWatch=navigator.geolocation.watchPosition(this.getLocation,this.geoError,{enableHighAccuracy:!0}),this.isDisabled=!0},stopTracking:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return navigator.geolocation.clearWatch(e.geoWatch),e.isDisabled=!1,t.next=4,V()({url:"".concat("","/trip"),method:"post",contentType:"application/json",data:{name:e.tripName,gpscalls:e.gpsCalls,distance:e.traveledDistance,date:e.date}});case 4:n=t.sent,e.gpsData=[],e.gpsCalls=0,e.lastTwoCalls=[{},{}],e.tripName="",e.traveledDistance=0,console.log(n);case 11:case"end":return t.stop()}}),t)})))()},getLocation:function(e){console.log(e.coords.latitude),console.log(e.coords.longitude),this.gpsCalls+=1,this.gpsData.push({nr:this.gpsCalls,lat:e.coords.latitude,lon:e.coords.longitude}),this.gpsCalls%2!=0?(console.log("Ungerade Zahl"),this.lastTwoCalls[0]={lat:e.coords.latitude,lon:e.coords.longitude}):(console.log("Gerade Zahl"),this.lastTwoCalls[1]={lat:e.coords.latitude,lon:e.coords.longitude},this.traveledDistance+=Object(ie["getDistance"])(this.lastTwoCalls[0],this.lastTwoCalls[1],"K"),console.log("Distance: ",this.traveledDistance))},geoError:function(){alert("Please enable geolocation to use this feature."),this.isDisabled=!1}},components:{NewTripForm:de}},fe=pe,ve=Object(c["a"])(fe,re,ae,!1,null,null,null),me=ve.exports;u()(ve,{VBtn:v["a"],VDataTable:ee["a"]}),r["a"].use(C["a"]);var he=[{path:"/",name:"Home",component:E},{path:"/trips",name:"Trips",component:ne},{path:"/newtrip",name:"NewTrip",component:me},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],be=new C["a"]({mode:"history",base:"/",routes:he}),ge=be,we=n("f309");r["a"].use(we["a"]);var xe=new we["a"]({}),ke=n("2ead"),Te=n.n(ke);r["a"].config.productionTip=!1,new r["a"]({router:ge,vuetify:xe,render:function(e){return e(T)}}).$mount("#app"),r["a"].use(Te.a)},"61c5":function(e,t){t.getDistance=function(e,t,n){var r=e.lat,a=e.lon,i=t.lat,o=t.lon;if(r==i&&a==o)return 0;var s=Math.PI*r/180,c=Math.PI*i/180,l=a-o,u=Math.PI*l/180,d=Math.sin(s)*Math.sin(c)+Math.cos(s)*Math.cos(c)*Math.cos(u);return d>1&&(d=1),d=Math.acos(d),d=180*d/Math.PI,d=60*d*1.1515,"K"==n&&(d*=1.609344),"N"==n&&(d*=.8684),d}},cf05:function(e,t,n){e.exports=n.p+"img/logo.c7c51713.png"}});