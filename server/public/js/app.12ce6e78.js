(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7aeec9eb"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"#993955",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"atams name",contain:"","min-width":"100",src:n("cf05"),width:"100"}})],1),a("v-spacer"),a("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"#A3C3D9",to:"/"}},[t._v(" Home ")]),a("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"#A3C3D9",to:"/newtrip"}},[t._v(" New trip ")]),a("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"#A3C3D9",to:"/trips"}},[t._v(" Trips ")])],1),a("v-main",[t.offline?a("v-alert",{attrs:{text:"",prominent:"",type:"error",icon:"mdi-cloud-alert"}},[t._v(" You are currently offline! ")]):t._e(),a("router-view")],1),a("v-footer",{attrs:{color:"#E9ECF5",padless:""}},[a("v-row",{attrs:{justify:"center",color:"A3C3D9","no-gutters":""}},[a("v-col",{attrs:{col:"4"}}),a("v-col",{staticClass:"py-4 text-center my-auto",attrs:{col:"4"}},[t._v(" baily.at | "),a("strong",[t._v("atams")])]),a("v-col",{staticClass:"py-4 text-right",attrs:{col:"4"}},[a("v-btn",{staticClass:"pr-4",attrs:{plain:"",to:"/about"}},[t._v("Impressum")])],1)],1)],1)],1)},o=[],i={name:"App",data:function(){return{offline:null}},created:function(){var t=this;window.addEventListener("online",(function(){return t.offline=!1})),window.addEventListener("offline",(function(){return t.offline=!0})),document.addEventListener("swUpdated",this.updateAvailable,{once:!0}),window.indexedDB||alert("IndexedDB is not available!")},methods:{updateAvailable:function(){confirm("New content is available!. Click OK to refresh")&&window.location.reload()}}},s=i,c=n("2877"),l=n("6544"),u=n.n(l),d=n("0798"),f=n("7496"),p=n("40dc"),v=n("8336"),m=n("62ad"),h=n("553a"),g=n("adda"),b=n("f6c4"),w=n("0fd9"),x=n("2fa4"),D=Object(c["a"])(s,r,o,!1,null,null,null),_=D.exports;u()(D,{VAlert:d["a"],VApp:f["a"],VAppBar:p["a"],VBtn:v["a"],VCol:m["a"],VFooter:h["a"],VImg:g["a"],VMain:b["a"],VRow:w["a"],VSpacer:x["a"]});var y=n("9483");Object(y["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\n For more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(t){document.dispatchEvent(new CustomEvent("swUpdated",{detail:t}))},offline:function(){console.log("No internet connection found. App is running in offline mode."),document.dispatchEvent(new CustomEvent("offline"))},online:function(){document.dispatchEvent(new CustomEvent("online"))},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7"),n("3ca3"),n("ddb0");var C=n("8c4f"),T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("h1",[t._v("ATAMS")]),n("h3")])}],O={name:"Home",data:function(){return{text:["Your traffic monitoring application","Second Text"]}},components:{}},j=O,V=Object(c["a"])(j,T,k,!1,null,null,null),E=V.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items},scopedSlots:t._u([{key:"item.distance",fn:function(e){var a=e.item;return[n("p",[t._v(t._s(a.distance)+" km")])]}},{key:"item.date",fn:function(e){var a=e.item;return[n("p",[t._v(t._s(t._f("moment")(a.date,"d.M.YYYY")))])]}},{key:"item.edit",fn:function(e){var a=e.item;return[n("v-btn",{attrs:{icon:"",color:"pink"},on:{click:function(e){return t.delTrip(a)}}},[n("v-icon",[t._v("mdi-heart")])],1),n("v-btn",{attrs:{tile:"",color:"success"}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-pencil ")]),t._v(" Edit ")],1)]}}])})],1)},S=[],N=n("b85c"),R=n("5530"),P=n("1da1"),M=(n("4de4"),n("159b"),n("d81d"),n("a9e3"),n("99af"),n("96cf"),n("bc3a")),B=n.n(M),I=n("1d25"),L={name:"Trips",data:function(){return{headers:[{text:"ID",align:"start",value:"id",sortable:!1},{text:"Name",value:"name"},{text:"GPS Calls",value:"gpscalls"},{text:"Distance traveled",value:"distance"},{text:"Date",value:"date"},{text:"Edit",value:"edit",sortable:!1}],items:[],db:null,offline:null,storedTrips:[]}},computed:{},watch:{},created:function(){var t=this;window.addEventListener("online",(function(){t.offline=!1})),window.addEventListener("offline",(function(){return t.offline=!0})),this.db||this.openDB()},methods:{openDB:function(){var t=this;return Object(P["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(I["a"])("atamsDB",1,{upgrade:function(t){var e=t.createObjectStore("trips",{keyPath:"id"});e.createIndex("name","name",{unique:!1})}});case 2:t.db=e.sent,t.fetchData();case 4:case"end":return e.stop()}}),e)})))()},getStoredTrips:function(){var t=this;return Object(P["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.db.getAll("trips");case 2:t.storedTrips=e.sent;case 3:case"end":return e.stop()}}),e)})))()},syncStore:function(){var t=this;return Object(P["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.db.getAll("trips");case 2:n=e.sent,a=n.filter((function(t){return 1==t.isDeleted})),console.log(a),a.forEach((function(e){t.delTripOn(e)}));case 6:case"end":return e.stop()}}),e)})))()},fetchData:function(){console.log("fetchData called"),this.offline?this.getDataOff():this.getDataOn()},getDataOn:function(){var t=this;return Object(P["a"])(regeneratorRuntime.mark((function e(){var n,a,r,o,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,B()({url:"".concat("","/trips"),method:"get"});case 2:return n=e.sent,a=n.data,console.log(a.data),t.items=a.data.map((function(t){return Object(R["a"])(Object(R["a"])({},t),{},{isDeleted:!1})})),console.log(t.items),r=t.db.transaction("trips","readwrite"),r.objectStore("trips").clear(),e.next=11,r.done;case 11:o=Object(N["a"])(t.items),e.prev=12,o.s();case 14:if((i=o.n()).done){e.next=20;break}return s=i.value,e.next=18,t.db.put("trips",s);case 18:e.next=14;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](12),o.e(e.t0);case 25:return e.prev=25,o.f(),e.finish(25);case 28:case"end":return e.stop()}}),e,null,[[12,22,25,28]])})))()}},getDataOff:function(){var t=this;return Object(P["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.db.getAll("trips");case 2:n=e.sent,t.trips=n.filter((function(t){return 0==t.isDeleted}));case 4:case"end":return e.stop()}}),e)})))()},delTrip:function(t){console.log("delTrip called"),this.offline?this.delTripOff(t):this.delTripOn(t),this.fetchData()},delTripOff:function(t){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.db.get("trips",Number(t.id));case 2:a=n.sent,a.isDeleted=!0,e.db.put("trips",a),e.fetchData();case 6:case"end":return n.stop()}}),n)})))()},delTripOn:function(t){return Object(P["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B()({url:"".concat("","/trip/").concat(t.id),method:"delete"});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}},$=L,F=n("8fea"),q=n("132d"),Y=Object(c["a"])($,A,S,!1,null,null,null),H=Y.exports;u()(Y,{VBtn:v["a"],VDataTable:F["a"],VIcon:q["a"]});var W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"text-center"},[n("h3",[t._v("Start a new trip")]),n("NewTripForm",{staticClass:"d-inline",attrs:{disabled:t.isDisabled},on:{start:t.startTracking}}),n("v-btn",{staticClass:"ma-2",attrs:{disabled:!t.isDisabled},on:{click:t.stopTracking}},[t._v("stop")])],1),n("h4",[t._v("GPS calls:")]),n("v-data-table",{attrs:{headers:t.headers,items:t.gpsData,"items-per-page":6,"sort-by":t.sortBy,"sort-desc":t.sortDesc},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}}}),n("p",[t._v("Traveled Distance: "+t._s(t.traveledDistance)+" km")])],1)},G=[],K=n("61c5"),U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"#A3C3D9"}},"v-btn",r,!1),a),[t._v(" Start ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"text-h5"},[t._v("Plan a new trip")])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Trip name*",hint:"The name of your trip",required:"",rules:t.nameRules},model:{value:t.tripName,callback:function(e){t.tripName=e},expression:"tripName"}})],1)],1)],1),n("small",[t._v("*indicates required field")])],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.startTrip}},[t._v(" Start ")])],1)],1)],1)],1)},z=[],J={name:"NewTripForm",data:function(){return{dialog:!1,valid:!0,tripName:"",nameRules:[function(t){return!!t||"Name is required"}]}},methods:{validate:function(){return this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()},startTrip:function(){1==this.validate()&&(this.$emit("start",this.tripName),this.dialog=!1)}}},Z=J,Q=n("b0af"),X=n("99d9"),tt=n("a523"),et=n("169a"),nt=n("4bd4"),at=n("8654"),rt=Object(c["a"])(Z,U,z,!1,null,null,null),ot=rt.exports;u()(rt,{VBtn:v["a"],VCard:Q["a"],VCardActions:X["a"],VCardText:X["b"],VCardTitle:X["c"],VCol:m["a"],VContainer:tt["a"],VDialog:et["a"],VForm:nt["a"],VRow:w["a"],VSpacer:x["a"],VTextField:at["a"]});var it={name:"NewTrip",data:function(){return{headers:[{text:"ID",align:"start",value:"nr",sortable:!1},{text:"Latitude",value:"lat",sortable:!1},{text:"Longitude",value:"lon",sortable:!1}],sortBy:"nr",sortDesc:!0,dialog:!1,gpsCalls:0,isDisabled:!1,gpsData:[],geoWatch:null,date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),tripName:"",traveledDistance:0,lastTwoCalls:[{},{}]}},props:{},created:function(){},methods:{startTracking:function(t){console.log(t),this.tripName=t,this.geoWatch=navigator.geolocation.watchPosition(this.getLocation,this.geoError,{enableHighAccuracy:!0}),this.isDisabled=!0},stopTracking:function(){var t=this;return Object(P["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return navigator.geolocation.clearWatch(t.geoWatch),t.isDisabled=!1,e.next=4,B()({url:"".concat("","/trip"),method:"post",contentType:"application/json",data:{name:t.tripName,gpscalls:t.gpsCalls,distance:t.traveledDistance,date:t.date}});case 4:n=e.sent,console.log(n);case 6:case"end":return e.stop()}}),e)})))()},getLocation:function(t){console.log(t.coords.latitude),console.log(t.coords.longitude),this.gpsCalls+=1,this.gpsData.push({nr:this.gpsCalls,lat:t.coords.latitude,lon:t.coords.longitude}),this.gpsCalls%2!=0?(console.log("Ungerade Zahl"),this.lastTwoCalls[0]={lat:t.coords.latitude,lon:t.coords.longitude}):(console.log("Gerade Zahl"),this.lastTwoCalls[1]={lat:t.coords.latitude,lon:t.coords.longitude},this.traveledDistance+=Object(K["getDistance"])(this.lastTwoCalls[0],this.lastTwoCalls[1],"K"),console.log("Distance: ",this.traveledDistance))},geoError:function(){alert("Please enable geolocation to use this feature."),this.isDisabled=!1}},components:{NewTripForm:ot}},st=it,ct=Object(c["a"])(st,W,G,!1,null,null,null),lt=ct.exports;u()(ct,{VBtn:v["a"],VDataTable:F["a"]}),a["a"].use(C["a"]);var ut=[{path:"/",name:"Home",component:E},{path:"/trips",name:"Trips",component:H},{path:"/newtrip",name:"NewTrip",component:lt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],dt=new C["a"]({mode:"history",base:"/",routes:ut}),ft=dt,pt=n("f309");a["a"].use(pt["a"]);var vt=new pt["a"]({}),mt=n("2ead"),ht=n.n(mt);a["a"].config.productionTip=!1,new a["a"]({router:ft,vuetify:vt,render:function(t){return t(_)}}).$mount("#app"),a["a"].use(ht.a)},"61c5":function(t,e){e.getDistance=function(t,e,n){var a=t.lat,r=t.lon,o=e.lat,i=e.lon;if(a==o&&r==i)return 0;var s=Math.PI*a/180,c=Math.PI*o/180,l=r-i,u=Math.PI*l/180,d=Math.sin(s)*Math.sin(c)+Math.cos(s)*Math.cos(c)*Math.cos(u);return d>1&&(d=1),d=Math.acos(d),d=180*d/Math.PI,d=60*d*1.1515,"K"==n&&(d*=1.609344),"N"==n&&(d*=.8684),d}},cf05:function(t,e,n){t.exports=n.p+"img/logo.c7c51713.png"}});