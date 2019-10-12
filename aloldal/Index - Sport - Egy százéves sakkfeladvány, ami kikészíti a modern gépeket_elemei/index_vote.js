!function(){this.VoteCounter=function(t,e){var i={names:["óra","perc","mp"]};this.element=t,this.options=o(i,e),this.init()},this.VoteCounter.prototype={init:function(){t.call(this),e.call(this),i.call(this)}};var t=function(){this.counter=this.element.querySelector(".counter"),this.end=new Date(1e3*this.counter.dataset.to).getTime()},e=function(){this.timer=setInterval(function(){var t=(new Date).getTime(),e=(this.end-t)/1e3;if(parseInt(e)>0){var i=[Math.floor(e/86400*24),Math.floor(e%3600/60),Math.floor(e%60)],o=this.options.names.map(function(t,e){return i[e]>=0?" <strong>"+i[e]+"</strong> "+t:""}).join("");this.counter.innerHTML=o+" urnazárásig"}else this.element.style.display="none",clearInterval(this.timer)}.bind(this),1e3)},i=function(){},o=function(t,e){var i,o={};for(i in t)Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i]);for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&(o[i]=e[i]);return o}}(),function(){this.VoteParticipation=function(t,e){var i={years:[2002,2010,2014,2018],radioEl:".vote__participation-button",showRecord:!1};this.element=t,this.options=o(i,e),this.radios=this.element.querySelectorAll(this.options.radioEl),this.init()},this.VoteParticipation.prototype={init:function(){e.call(this)}};var t=function(t){var e=JSON.parse(t.value),o=Object.keys(e).sort(function(t,i){return e[i]-e[t]});this.options.years.forEach(function(t){var n=this.element.querySelector(".rect-data"+t),a=this.element.querySelector(".text-data"+t),s=parseInt(o[0])===t,r=e[t]||0;i(n,"width",r),i(a,"x",r),a.textContent=a.dataset.content=0!==r?r+"%"+(s&&this.options.showRecord?" *":""):"Még nincs adat"},this)},e=function(){this.radios.forEach(function(e){e.addEventListener("click",t.bind(this,e)),e.checked&&t.call(this,e)},this)},i=function(t,e,i){var o=0,n=function(t){return t*t*t*t},a=parseFloat(t.getAttribute(e)),s=parseFloat(i),r=function(i){o||(o=i);var c=(i-o)/500,h=a+(s-a)*n(c);c<1?(t.setAttribute(e,h+"%"),window.requestAnimationFrame(r)):t.setAttribute(e,s+"%")};window.requestAnimationFrame(r)},o=function(t,e){var i,o={};for(i in t)Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i]);for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&(o[i]=e[i]);return o}}(),function(){this.VoteStacked=function(t,e){var i={breakpoints:{230:"historic",70:"current",50:"all"}};this.element=t,this.options=n(i,e),this.init()},this.VoteStacked.prototype={init:function(){t.call(this),i.call(this),e.call(this)}};var t=function(){this.bars=this.element.querySelectorAll(".bar")},e=function(){this.bars.forEach(function(t){var e=t.getBoundingClientRect().width;Object.keys(this.options.breakpoints).forEach(function(i){t.classList.toggle("hide-"+this.options.breakpoints[i],e<=i)},this)},this)},i=function(){["resize","headerOpened"].forEach(function(t){window.addEventListener(t,o(e.bind(this),250),{passive:!0})},this)},o=function(t,e){var i,o;return function(){var n=this,a=arguments;o?(clearTimeout(i),i=setTimeout(function(){Date.now()-o>=e&&(t.apply(n,a),o=Date.now())},e-(Date.now()-o))):(t.apply(n,a),o=Date.now())}},n=function(t,e){var i,o={};for(i in t)Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i]);for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&(o[i]=e[i]);return o}}(),function(){this.FlourishChart=function(t,e){var i={api_key:"aX89pnaFKQCKXlRvhh6R-vZLNiAWGDuNpx9sYdDRLe63LeXI_RgVUMWgqpVAnIdT",template:"",data:[],colors:{europe:["EPP: #000c57","S&D: #bb1303","ECR: #006996","ALDE&R: #e9aa03","GUE/NGL: #7f0a01","Zöldek/ESS: #036702","EFDD: #24b8b9","ENF: #2a485d","NI: #ba5a1f","Egyéb képviselők: #a2a1a0"],hungary:["Fidesz-KDNP: #fd7e08","Jobbik: #0a0a0a","MSZP-Párbeszéd: #bf021e","DK: #1465ae","LMP: #72b02f","Momentum: #8e6fce","Mi hazánk: #fddf00"]}};this.options=Object.assign(i,e),this.container=t,this.flourish={container:this.container,api_key:this.options.api_key,data:this.options.data},this.init()},this.FlourishChart.prototype={init:function(){this.flourishInstance=new Flourish.Live(Object.assign(this.flourish,this[this.options.template].call(this))),t.call(this)},parliamentChart:function(){return{template:"@flourish/parliament-chart",version:"3",bindings:{data:{party:"Párt",seats:["2019","2014"]}},state:{hemicycle_arc:240,layout:{header_align:"center",space_between_sections:1},show_legend:!1,show_table:!1,color:{custom_palette:this.options.colors.europe.join("\n")}}}},map:function(){return{template:"@flourish/projection-map",version:2,column_names:{choropleth:{geometry:"geometry",metadata:[""],name:"id",value:[""]}},state:{map_categorical_colors:{custom_palette:this.options.colors.hungary.join("\n")},fit:"map",choropleth_missing_values:"fill",projection:"August",map_scale_type:"categorical",map_search:!1,zoom_on:!1,choropleth_legend_show:!1,map_highlight_stroke_width:3}}},fideszMap:function(){return{template:"@flourish/projection-map",version:2,column_names:{choropleth:{geometry:"geometry",name:"id",value:[""]}},state:{fit:"map",choropleth_missing_values:"fill",projection:"August",map_search:!1,zoom_on:!1,map_highlight_stroke_width:3,custom_thresholds:"30;35;40;45;50;55;60;65;70",discrete_mode:"custom",legend_max:70,legend_min:30,map_scale_type:"discrete",sequential_palette:"Oranges",choropleth_legend_show:this.options.legend,map_formatting:{suffix:"%"},layout:{header_align:"center",space_between_sections:this.options.legend?4:0}}}},EUmap:function(){return{template:"@flourish/projection-map",version:2,column_names:{choropleth:{geometry:"geometry",metadata:[""],name:"id",value:[""]}},state:{map_categorical_colors:{custom_palette:this.options.colors.europe.join("\n")},fit:"map",choropleth_missing_values:"fill",projection:"August",map_scale_type:"categorical",map_search:!1,zoom_on:!1,choropleth_legend_show:!1,map_highlight_stroke_width:3}}}};var t=function(){var t=this;window.addEventListener("headerOpened",function(){t.flourishInstance.update(t.flourishInstance)})}}();
//# sourceMappingURL=index_vote.ugly.js.map