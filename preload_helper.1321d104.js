!function(){"use strict";var t="/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"ant-design-pro","b":"webpack","f":[["p__ThreeJS.a24d2386.async.js",68],["p__Welcome.5e4d0943.async.js",185],["t__plugin-layout__Layout.5012e1ab.chunk.css",301],["t__plugin-layout__Layout.56145091.async.js",301],["333.0217448f.async.js",333],["390.cbac4733.async.js",390],["477.9bdf3a3a.async.js",477],["p__404.9be3905b.async.js",571],["895.71f76a9f.async.js",895],["905.4ef8a2c5.async.js",905],["930.59ad4d29.async.js",930]],"r":{"/*":[7,9],"/":[2,3,4,8,9],"/welcome":[1,8,10,2,3,4,9],"/threeJS":[0,6,8,10,2,3,4,9]}},{publicPath:"/TechTrove/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();