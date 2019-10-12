function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _slicedToArray(t,i){return _arrayWithHoles(t)||_iterableToArrayLimit(t,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(t,i){var e=[],n=!0,o=!1,s=void 0;try{for(var r,a=t[Symbol.iterator]();!(n=(r=a.next()).done)&&(e.push(r.value),!i||e.length!==i);n=!0);}catch(t){o=!0,s=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw s}}return e}function _arrayWithHoles(t){if(Array.isArray(t))return t}!function(){this.AdObserver=function(t,i){this.options=Object.assign({threshold:1,immediate:function(t){},meet:function(t){},evade:function(t){},unobservable:!0,debug:!1},i),this.zones=t},this.AdObserver.prototype={debug:function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"info";this.options.debug&&console[e](t,i)},init:function(){t.call(this)},add:function(t){if(n.call(this,t.id))throw new Error("Zone: ".concat(t.id," is already present"));this.zones.push(t),i.call(this)}};var t=function(){var t=this;this.observer=new IntersectionObserver(function(i){i.forEach(function(i){var o=n.call(t,i.target.id);e.call(t,i,o)})},{threshold:this.options.threshold}),i.call(this)},i=function(){var t=this;this.observer.disconnect(),this.options.immediate(this.zones),this.zones.all.forEach(function(i){if(!i.node)throw new Error("No element found with the id: ".concat(i.id));t.observer.observe(i.node)})},e=function(t,i){t.isIntersecting?(this.options.meet(i),this.options.unobservable&&this.observer.unobserve(t.target)):this.options.evade(i)},n=function(t){return this.zones.all.find(function(i){return i.id===parseInt(t)})}}(),function(){this.Viewability=function(t,i){this.options=Object.assign({endpoint:"https://viewability.inda.hu/collect.php",timeout:1e3,ad_blocker:!1,debug:!1},i),this.zones=t,this.timers={},this.measured=[],this.init()},this.Viewability.prototype={init:function(){t.call(this)},stat:function(t,e){i[t].call(this,e)},cancel:function(t){clearTimeout(this.timers[t.id]),delete this.timers[t.id]}};var t=function(){var t=this;this.observer=new AdObserver(this.zones,{threshold:.8,immediate:function(i){t.stat("loaded",i.all)},meet:function(i){t.stat("visible",i)},evade:function(i){t.cancel(i)},unobservable:!1,debug:this.options.debug}),this.observer.init()},i={loaded:function(t){var i=this;t.forEach(function(t){i.measured.includes(t.id)||(e.call(i,"loaded",t),i.measured.push(t.id))})},visible:function(t){var i=this;e.call(this,"visible",t),this.timers[t.id]=setTimeout(function(){e.call(i,"viewed",t)},this.options.timeout)}},e=function(t,i){var e=n({action:t,zone:i,ad_blocker:this.options.ad_blocker});this.observer.debug("VIEWABILITY",e),fetch(this.options.endpoint,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:o(e)}).then(function(t){}).catch(function(t){})},n=function t(i){return Object.entries(i).reduce(function(i,e){var n=_slicedToArray(e,2),o=n[0],s=n[1];return"object"===_typeof(s)?Object.assign(i,t(s)):i[o]=s,i},{})},o=function(t){return Object.entries(t).map(function(t){return t.map(encodeURIComponent).join("=")}).join("&")}}(),function(){this.Adverticum=function(t,i){var e={target:window.customTarget,debug:!1};this.options=Object.assign(e,i),this.zones=t,this.options.ad_blocker||this.init()},this.Adverticum.prototype={init:function(){s.call(this),t.call(this)},add:function(t){this.observer.add(t)}};var t=function(){var t=this;this.observer=new AdObserver(this.zones,{threshold:.1,immediate:function(e){i.call(t,e.normal)},meet:function(e){e.lazy&&i.call(t,[e])},unobservable:!0,debug:this.options.debug}),this.observer.init()},i=function(t){(t=t.filter(function(t){return!t.inserted})).map(function(t){return t.inserted=!0,t}),window.goAdverticum3.onReady(function(i){i.invocation(t.map(function(t){return c(t,["id","node"])}))})},e=function(t){t.node.classList.add("ad-label"),t.node.classList.remove("empty"),t.quality&&new QualityPlacement(t.node)},n={google:function(t){var i=document.getElementById(t).closest(".goAdverticum"),e=this.zones.all.find(function(t){return t.id===parseInt(i.id)});o.parsed.call(this,e)}},o={inserted:function(t){t.adverticum&&!t.empty?e(t):function(t){t.node.classList.add("empty"),t.node.classList.remove("ad-label")}(t),this.observer.debug("ADVERTICUM",t)},parsed:function(t){e(t),"roadblock"===t.area&&t.node.classList.add("google-roadblock")}},s=function(){r.call(this),a.call(this)},r=function(){var t=this;window.onGoa3Invocation=function(i){i.forEach(function(i){var e=t.zones.all.find(function(t){return t.id===parseInt(i.zone)});Object.assign(e,{empty:!1,inserted:!0,adverticum:!e.node.innerHTML.match(/(googletag|rubicon_ad)/)}),o.inserted.call(t,e)})}},a=function(){var t=this;googletag.cmd.push(function(){googletag.pubads().addEventListener("slotRenderEnded",function(i){i.isEmpty||n.google.call(t,i.slot.getSlotElementId())})})},c=function(t,i){return i.reduce(function(i,e){return t&&t.hasOwnProperty(e)&&(i[e]=t[e]),i},{})}}(),function(){this.QualityPlacement=function(t,i){this.options=Object.assign({image:"https://index.hu/assets/images/ad/qp.svg",url:"https://indamediasales.hu/2019/06/25/quality_placement_minosegbiztositasi_tajekoztato_728"},i),this.element=t,this.init()},this.QualityPlacement.prototype={init:function(){t.call(this)}};var t=function(){this.element.classList.add("isQuality"),this.element.insertAdjacentHTML("afterbegin",i.call(this))},i=function(){return'<a class="QualityPlacement" href="'.concat(this.options.url,'" target="_blank">\n                    <img class="QualityPlacement__img" src="').concat(this.options.image,'" alt="QP | Quality Placement"/>\n                </a>')}}(),function(){this.AdLoader=function(i){var e={scriptClass:".goa3-loader",ad_blocker:!window.goAdverticum3,debug:!1,stat:!1};window.adverticum_zones&&(this.options=Object.assign(e,i),this.zones=t.call(this,window.adverticum_zones),this.scripts=document.querySelectorAll(this.options.scriptClass),this.init())},this.AdLoader.prototype={init:function(){e.call(this),n.call(this),i.call(this)},add:function(t){this.adverticum.add(t),this.viewability.add(t)}};var t=function(t){return t.map(function(t){return t.node=document.getElementById(t.id),t}),{all:t,normal:t.filter(function(t){return!t.lazy}),lazy:t.filter(function(t){return t.lazy})}},i=function(){this.adverticum=new Adverticum(this.zones,{ad_blocker:this.options.ad_blocker,debug:this.options.debug}),this.options.stat&&(this.viewability=new Viewability(this.zones,{ad_blocker:this.options.ad_blocker,debug:this.options.debug}))},e=function(){this.scripts.forEach(function(t){return t.remove()}),window.adverticum_zones=null},n=function(){window.googletag=window.googletag||{},googletag.cmd=googletag.cmd||[]}}();
