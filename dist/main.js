var Client;Client=(()=>{var e={631:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,".flightmodal{display:none;position:fixed;width:375px;height:100px;background-color:white;border:solid 1px #000;top:50%}.flightmodal .modalinfo{position:relative;width:350px;text-align:center;margin:10px}.flightmodal .closeflight{float:right;font-weight:bold;font-size:30px}.flightmodal .close:hover{cursor:pointer}.flightmodal #saveflight{height:20px;width:50px;font-size:15px}@media (min-width: 500px) and (max-width: 900px){.flightmodal{position:relative;width:210px;height:90px}.flightmodal .modalinfo{margin:5px;width:200px}.flightmodal .closeflight{font-size:25px}.flightmodal .flightlabel{font-size:16px;padding-bottom:10px}.flightmodal #info{font-size:14px}}@media (max-width: 499px){.flight{margin-left:-120px}.flight .flightmodal{position:relative;width:160px;height:100px}.flight .flightmodal .modalinfo{width:150px;margin:5px}.flight .flightmodal .closeflight{font-size:15px}.flight .flightmodal .flightlabel{font-size:14px;padding-bottom:5px}.flight .flightmodal #info{font-size:10px;height:30px}}\n",""]);const i=r},381:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"footer{background-color:#000;height:100px;display:flex;color:#fff;padding-left:20px}footer p{padding-top:50px;padding-left:20%}footer #topBtn{margin-left:20%;margin-top:30px;margin-right:5%;width:50px;color:black;background-color:gray;cursor:pointer;border:none;border-radius:50%;font-weight:bold;font-size:20px;box-shadow:none}footer #topBtn:hover{background-color:#000;color:#fff}@media (min-width: 600px) and (max-width: 900px){footer{font-size:16px}footer #topBtn{margin-left:15%}footer p{padding-top:45px;padding-left:10%;font-size:12px}}@media (max-width: 599px){footer{display:flex;flex-direction:column;font-size:16px;height:auto}footer #topBtn{margin-left:43%;margin-bottom:10px}footer p{padding-left:10%;font-size:12px;padding-top:0}}\n",""]);const i=r},200:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(645),r=n.n(o),i=n(667),a=n.n(i),l=n(332),c=r()((function(e){return e[1]})),d=a()(l.Z);c.push([e.id,'body{font-family:sans-serif;display:flex;flex-direction:column;margin-top:20px;margin-left:20px;margin-right:20px}h1{font-size:36px;font-weight:600;color:#ffafcc}label{display:block;font-size:27px}input{height:40px;color:cdb4db;font-size:20px;font-family:\'Oswald\', sans-serif;border:solid #a2d2ff}button{width:150px;height:50px;background:#a2d2ff;font-size:26px;font-family:"Lobster",cursive;border:none;border-radius:10px;box-shadow:2px 4px 5px #444;cursor:pointer}button:hover{color:#cdb4db;background:cornflowerblue}#app{padding-left:200px;display:flex;flex-direction:column;background:transparent;justify-content:center;align-items:center;font-size:20px;font-family:"Lobster",cursive;background-image:url('+d+');background-position:top;background-repeat:no-repeat;background-size:cover;background-attachment:fixed;height:70vh}.moreinfo{display:flex;flex-direction:row}#flightinfo{margin-right:10px;height:30px;font-size:20px}.title{font-size:36px;font-weight:700;color:#ffafcc;text-align:center;font-family:"Lobster",cursive}#submit{height:35px;width:100px;background:#a2d2ff;font-size:20px;font-family:"Lobster",cursive;border:none;border-radius:10px;box-shadow:2px 4px 5px #444;cursor:pointer}.packinglist{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#caf0f8}.remove{background:#a2d2ff;height:15px;width:70px;font-size:12px;font-family:"Lobster",cursive;border:none;box-shadow:2px 2px 2px #444;cursor:pointer}input:focus,select:focus,button:focus{outline:none}::placeholder{color:#cdb4db;font-family:"Patrick Hand",cursive}:-ms-input-placeholder{color:#cdb4db;font-family:"Patrick Hand",cursive}::-ms-input-placeholder{color:#cdb4db;font-family:"Patrick Hand",cursive}@media (max-width: 500px){#app{height:85vh}#app .holder_headline,#app .holder_trip,#app .holder_departure,#app #generate{margin-left:-120px}#submit{height:35px;width:65px}}\n',""]);const s=c},444:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,".holder-entry{margin-top:20px;display:flex;flex-direction:column;font-family:\"Lobster\",cursive;justify-content:center;align-items:center}.holder-entry #entryHolder{display:flex;flex-direction:row;width:100%;height:100%;justify-content:center;align-items:center}.holder-entry #entryHolder .infobox{display:flex;flex-direction:column;margin-left:20px;margin-right:10px}.holder-entry #entryHolder #temp,.holder-entry #entryHolder #place,.holder-entry #entryHolder #datedeparture,.holder-entry #entryHolder #daystotrip,.holder-entry #entryHolder #flightcontent,.holder-entry #entryHolder #predForecast{font-family:'Oswald', sans-serif;text-align:justify;color:#b58db6;font-size:20px}.holder-entry #entryHolder #photo{border:solid 1px;box-shadow:2px 4px 5px #444;width:300px;height:300px;transition:transform .2s}.holder-entry #entryHolder #photo:hover{transform:scale(1.5)}.holder-entry .cancel{font-size:20px;height:40px;width:80px}.holder-entry .print{font-size:20px;width:150px;height:40px;margin-bottom:20px;margin-top:10px}@media (max-width: 650px){.holder-entry #entryHolder{display:flex;flex-direction:column;width:auto;height:auto}}\n",""]);const i=r},780:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"",""]);const i=r},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},332:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"ee0785eb4132b8b10efb2316b14e4653.jpg"},379:(e,t,n)=>{"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function l(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],c=t.base?i[0]+t.base:i[0],d=n[c]||0,s="".concat(c," ").concat(d);n[c]=d+1;var p=l(s),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(a[p].references++,a[p].updater(f)):a.push({identifier:s,updater:g(f,t),references:1}),o.push(s)}return o}function d(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,p=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=p(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function u(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,h=0;function g(e,t){var n,o,r;if(t.singleton){var i=h++;n=m||(m=d(t)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=d(t),o=u.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=l(n[o]);a[r].references--}for(var i=c(e,t),d=0;d<n.length;d++){var s=l(n[d]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=i}}}},585:(e,t,n)=>{"use strict";n.r(t),n.d(t,{getCity:()=>o,getImage:()=>l,getWeather:()=>a,performAction:()=>r,postData:()=>c,updateUI:()=>i});const o=async e=>{const t=await fetch(e);console.log(t);try{const e=await t.json();return console.log(e),e}catch(e){console.log("Error",e)}};function r(e){const t=new Date(document.getElementById("date").value),n=t.getFullYear(),r=t.getMonth()+1,d=t.getDate(),s=new Date,p=Math.floor((Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())-Date.UTC(s.getFullYear(),s.getMonth(),s.getDate()))/864e5);console.log(p),c("/travelinfo",{result:p,yearDeparture:n,monthDeparture:r,dayDeparture:d});const f=document.getElementById("city").value;if(""===f)alert("Please inform a city");else{o(`http://api.geonames.org/searchJSON?q=${f}&maxRows=1&username=rkaiso`).then((async e=>{const t=e.geonames[0].lat,n=e.geonames[0].lng,o=e.geonames[0].countryName;console.log(t,n,o),await c("/travelinfo",{lat:t,lng:n,country:o,city:f});a(`http://api.weatherbit.io/v2.0/forecast/daily?NC&key=10e0a8228eb94a56a3a45177435f6433&lat=${t}&lon=${n}`).then((async e=>{if(p<=7){const t=e.data[0].temp;console.log(t),await c("/travelinfo",{temp:t})}else if(p>7&&p<16){const t=e.data[p].temp;console.log(t),await c("/travelinfo",{predForecast:t})}else{const t=e.data[15].temp;console.log(t),await c("/travelinfo",{predForecast:t})}})).then((async e=>{await i()}));l(`http://pixabay.com/api/?key=20163451-39e18669435c651f1e163c4b7&q=${f}&category=places&image_type=photo`).then((async e=>{const t=e.hits[0].webformatURL;console.log(t),await c("/travelinfo",{image:t})})).then((async e=>{await i()}))}))}}document.addEventListener("DOMContentLoaded",(function(){document.getElementById("generate").addEventListener("click",r)}));const i=async()=>{const e=await fetch("/travelinfo");try{const t=await e.json();document.getElementById("placeimage").innerHTML=`<img src="${t.image}" alt="Place image" id="photo">`,document.getElementById("place").innerHTML="My trip to: "+t.city.toUpperCase(),document.getElementById("datedeparture").innerHTML="Departure date: "+t.yearDeparture+"-"+t.monthDeparture+"-"+t.dayDeparture,void 0!==t.temp&&(document.getElementById("temp").innerHTML="Actual Temperature: "+t.temp+"°C"),void 0!==t.predForecast&&(document.getElementById("predForecast").innerHTML="Predicted forecast: "+t.predForecast+"°C"),document.getElementById("daystotrip").innerHTML=t.city.toUpperCase()+", "+t.country+" is "+t.result+" days away",document.getElementById("cancel").innerHTML='<button class = "cancel">Cancel</button>'}catch(e){console.log("error",e)}},a=async e=>{const t=await fetch(e);console.log(t);try{const e=await t.json();return console.log(e),e}catch(e){console.log("Error",e)}},l=async e=>{const t=await fetch(e);console.log(t);try{const e=await t.json();return console.log(e),e}catch(e){console.log("Error",e)}};async function c(e,t){const n=await fetch(e,{method:"POST",credentials:"same-origin",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{return await n.json()}catch(e){console.log("Error",e)}}document.addEventListener("click",(e=>{"top"===e.target.className&&(document.documentElement.scrollTop=0)}));var d=n(379),s=n.n(d),p=n(200),f={insert:"head",singleton:!1};s()(p.Z,f);p.Z.locals;var u=n(381),m={insert:"head",singleton:!1};s()(u.Z,m);u.Z.locals;var h=n(444),g={insert:"head",singleton:!1};s()(h.Z,g);h.Z.locals;var y=n(631),x={insert:"head",singleton:!1};s()(y.Z,x);y.Z.locals;var b=n(780),v={insert:"head",singleton:!1};s()(b.Z,v);b.Z.locals;n(889),n(252),n(557)},557:()=>{document.addEventListener("click",(e=>{"cancel"===e.target.className&&(document.getElementById("date").value="",document.getElementById("city").value="",document.getElementById("placeimage").innerHTML="",document.getElementById("place").innerHTML="",document.getElementById("datedeparture").innerHTML="",document.getElementById("temp").innerHTML="",document.getElementById("predForecast").innerHTML="",document.getElementById("daystotrip").innerHTML="",document.getElementById("cancel").innerHTML="",document.getElementById("flightcontent").innerHTML="",fetch("http://localhost:8081/travelinfo/",{method:"DELETE"}))}))},252:()=>{document.addEventListener("click",(e=>{if("flightinfo"===e.target.className){const e=document.getElementById("flightmodal"),t=document.getElementsByClassName("closeflight")[0],n=document.getElementById("saveflight");e.style.display="block",t.onclick=function(){e.style.display="none"},n.onclick=function(){const t=document.getElementById("info").value;document.getElementById("flightcontent").innerHTML="Flight information: "+t,e.style.display="none"}}}))},889:()=>{document.addEventListener("DOMContentLoaded",(function(){document.querySelector("#submit").disabled=!0,document.querySelector("#item").onkeyup=()=>{document.querySelector("#item").value.length>0?document.querySelector("#submit").disabled=!1:document.querySelector("#submit").disabled=!0},document.addEventListener("click",(e=>{const t=e.target;"remove"===t.className&&t.parentElement.remove()})),document.querySelector("form").onsubmit=()=>{const e=document.querySelector("#item").value,t=document.createElement("li");return t.innerHTML=e,t.innerHTML=`${e} <button class="remove">remove</button><br>`,document.querySelector("#packing").append(t),document.querySelector("#item").value="",document.querySelector("#submit").disabled=!0,!1}}))}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}return n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="",n(585)})();