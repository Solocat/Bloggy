(function(t){function e(e){for(var i,c,r=e[0],a=e[1],l=e[2],d=0,p=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var a=n[r];0!==o[a]&&(i=!1)}i&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},o={app:0},s=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=a;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("c21b"),o=n.n(i);o.a},"14e3":function(t,e,n){},1843:function(t,e,n){"use strict";var i=n("3839"),o=n.n(i);o.a},"2dd2":function(t,e,n){t.exports=n.p+"img/edit.eb9cee0e.svg"},3839:function(t,e,n){},"44bf":function(t,e,n){"use strict";var i=n("7ed3"),o=n.n(i);o.a},4657:function(t,e,n){t.exports=n.p+"img/heading.95b984f4.svg"},"4a24":function(t,e,n){t.exports=n.p+"img/check.6dc82634.svg"},"4c2c":function(t,e,n){t.exports=n.p+"img/quote-right.56221d47.svg"},"4fb0":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-link",{attrs:{to:"/"}},[t._v(" Post List ")]),n("router-view")],1)},s=[],c=n("8c4f"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-link",{staticClass:"button",attrs:{to:{name:"new"}}},[t._v("New post")]),n("ul",t._l(t.posts,function(e,i){return n("li",{key:i},[n("article",[n("img",{attrs:{src:"https://placeimg.com/400/300/any"}}),n("h2",[t._v(t._s(e.title))]),n("aside",[t._v(" "+t._s(e.blocks[1].content)+" ")]),n("div",{staticClass:"scrim"}),n("router-link",{staticClass:"button",attrs:{to:{name:"post",params:{postid:i,postdata:e}}}},[t._v("Read more")])],1)])}))],1)},a=[],l=(n("96cf"),n("1da1")),u=n("59ca"),d=n.n(u),p=(n("66ce"),{apiKey:"AIzaSyCD6i_bVMiThtY9IvVIaVtUxQwU9I_ioL4",authDomain:"blog-bee9e.firebaseapp.com",databaseURL:"https://blog-bee9e.firebaseio.com",projectId:"blog-bee9e",storageBucket:"blog-bee9e.appspot.com",messagingSenderId:"89370705170",appId:"1:89370705170:web:1c308df99ea1a2b57e07cb"});d.a.initializeApp(p);var h,f,m=d.a,v={data:function(){return{posts:[]}},created:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=m.database().ref("posts"),t.next=3,e.once("value");case 3:this.posts=t.sent.val();case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},b=v,g=(n("6e3d"),n("2877")),x=Object(g["a"])(b,r,a,!1,null,"40ca4eab",null),k=x.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading?n("div",[t._v("Loading...")]):n("article",[n("router-link",{staticClass:"button",attrs:{to:{name:"edit",params:{postid:t.$route.params.postid,postdata:t.post}}}},[t._v("Edit")]),n("div",[t._v(t._s(new Date(t.post.time).toLocaleDateString()))]),n("div",[t._v(t._s(t.post.author))]),t._l(t.post.blocks,function(t,e){return n("s-block",{key:e,attrs:{item:t}})})],2)},y=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.blocktype,{tag:"component",staticClass:"s-block",class:{editing:t.editing},attrs:{item:t.item,editing:t.editing},on:{click:t.onClick,input:t.onInput}})},I=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("blockquote",{on:{click:t.onClick}},[n("s-text",{attrs:{item:{type:"header",content:this.item.content},editing:this.editing},on:{input:t.onInput}}),n("s-text",{attrs:{item:{type:"footer",content:this.item.footer},editing:this.editing},on:{input:t.onInputFooter}})],1)},$=[],O={props:["item","editing"],render:function(t){var e={},n=this.item.type;e={on:{click:this.onClick}};var i=[];if(1==this.editing)i.push(t("textarea",{domProps:{innerHTML:this.item.content},attrs:{rows:this.rows(),placeholder:"Write here"},directives:[{name:"focus"}],on:{input:this.onInput,keydown:this.onKeydown}}));else{if(!this.item.content)return null;e.domProps={innerHTML:this.item.content}}return t(n,e,i)},directives:{focus:{inserted:function(t){t.focus()}}},methods:{rows:function(){var t;if(!this.$el)return 1;t=this.$el.children&&this.$el.children[0]?this.$el.children[0]:this.$el;var e=window.getComputedStyle(t),n=parseInt(e.getPropertyValue("line-height")),i=parseInt(t.scrollHeight/n);return i},onInput:function(t){this.$emit("input",t.target.value)},onClick:function(){this.$emit("click")},onKeydown:function(t){13==t.keyCode&&t.preventDefault()}}},j=O,C=Object(g["a"])(j,h,f,!1,null,null,null),E=C.exports,B={props:["item","editing"],methods:{onClick:function(){this.$emit("click")},onInput:function(t){this.item.content=t},onInputFooter:function(t){this.item.footer=t}},components:{"s-text":E}},P=B,S=(n("61c8"),Object(g["a"])(P,T,$,!1,null,"ac52f49c",null)),L=S.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image",on:{click:t.onClick}},[n("img",{attrs:{src:this.item.content}}),n("input",{directives:[{name:"show",rawName:"v-show",value:this.editing,expression:"this.editing"}],attrs:{type:"file",accept:"image/*"},on:{input:t.onInput}})])},A=[],M=(n("28a5"),{props:["item","editing"],methods:{onInput:function(t){var e=t.target.value.split("\\").pop();this.$emit("input",e)},onClick:function(){this.$emit("click")}}}),D=M,R=(n("64b6"),Object(g["a"])(D,q,A,!1,null,"77efee7f",null)),N=R.exports,V={props:["item","editing"],components:{"s-quote":L,"s-text":E,"s-image":N},computed:{blocktype:function(){return"img"==this.item.type?"s-image":"blockquote"==this.item.type?"s-quote":"s-text"}},methods:{onClick:function(){this.$emit("click")},onInput:function(t){this.item.content=t}}},F=V,H=Object(g["a"])(F,w,I,!1,null,null,null),K=H.exports,U={props:["postdata"],created:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.postdata||!this.$route.params.postid){t.next=7;break}return this.loading=!0,e=m.database().ref("posts/").child(this.$route.params.postid),t.next=5,e.once("value");case 5:this.post=t.sent.val(),this.loading=!1;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),data:function(){return{loading:!1,post:this.postdata,editPath:"/post/"+this.$route.params.postid+"/edit"}},components:{"s-block":K}},z=U,J=Object(g["a"])(z,_,y,!1,null,null,null),Q=J.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading?n("div",[t._v("Loading...")]):n("div",{attrs:{id:"editor"}},[n("aside",[n("edit-tools",{attrs:{visible:t.selectedIndex>=0,editing:t.editing,hiddenTools:t.hiddenEditTools(),topOffset:t.editToolsTop},on:{useTool:t.useTool}})],1),n("main",[n("button",{on:{click:t.upload}},[t._v("Save post")]),n("button",{on:{click:t.clear}},[t._v("Clear post")]),n("article",t._l(t.post.blocks,function(e,i){return n("s-block",{key:i,class:{selected:i==t.selectedIndex},attrs:{item:e,editing:t.blockIsEditing(i)},on:{click:function(e){t.selectBlock(i,!1)}}})})),n("add-tools",{on:{useTool:t.addBlock}})],1)])},Y=[],G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{style:t.styleOb},t._l(t.visibleTools,function(e){return e.show?n("li",{key:e.text},[n("span",{staticClass:"tooltip"},[t._v(t._s(e.text))]),n("img",{staticClass:"icon",attrs:{src:e.icon},on:{click:function(n){t.useTool(e)}}})]):t._e()}))},X=[],Z=(n("6762"),n("2fdb"),n("71f4")),tt=n.n(Z),et=n("2dd2"),nt=n.n(et),it=n("4a24"),ot=n.n(it),st=n("d7a1"),ct=n.n(st),rt=n("eb88"),at=n.n(rt),lt=n("b717"),ut=n.n(lt),dt={props:["visible","editing","hiddenTools","topOffset"],computed:{visibleTools:function(){var t=this,e=this.tools.filter(function(e){return!t.hiddenTools.includes(e.text)});return e},styleOb:function(){return{top:this.topOffset+"px",visibility:this.visible?"visible":"hidden"}}},methods:{useTool:function(t){this.$emit("useTool",t.text)}},data:function(){return{tools:[{icon:tt.a,text:"move up",show:!0},{icon:nt.a,text:"edit",show:!0,filter:function(){return!this.editing}},{icon:ot.a,text:"save",show:!0,filter:function(){return this.editing}},{icon:ct.a,text:"change",show:!1},{icon:at.a,text:"delete",show:!0},{icon:ut.a,text:"move down",show:!0}]}}},pt=dt,ht=(n("f505"),Object(g["a"])(pt,G,X,!1,null,"7b4a1359",null)),ft=ht.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"addTools"}},[n("ul",t._l(t.addTools,function(e){return n("li",{key:e.text,on:{mouseover:function(n){t.hover(e.text)},click:function(n){t.useTool(e)}}},[n("img",{staticClass:"icon",attrs:{src:e.icon}})])})),n("span",{staticClass:"tooltip"},[t._v(t._s(t.addTooltip))])])},vt=[],bt=n("4657"),gt=n.n(bt),xt=n("db03"),kt=n.n(xt),_t=n("d17f"),yt=n.n(_t),wt=n("4c2c"),It=n.n(wt),Tt={methods:{hover:function(t){this.addTooltip=t},useTool:function(t){this.$emit("useTool",t.type)}},data:function(){return{addTooltip:"tooltip",addTools:[{icon:gt.a,text:"Add heading",type:"h3"},{icon:kt.a,text:"Add paragraph",type:"p"},{icon:yt.a,text:"Add image",type:"img"},{icon:It.a,text:"Add block quote",type:"blockquote"}]}}},$t=Tt,Ot=(n("1843"),Object(g["a"])($t,mt,vt,!1,null,"73f30b7b",null)),jt=Ot.exports;Array.prototype.move=function(t,e){this.splice(e,0,this.splice(t,1)[0])};var Ct={mixins:[Q],methods:{hiddenEditTools:function(){var t=[];return this.editing?t.push("edit"):t.push("save"),this.selectedIndex<=0&&t.push("move up"),this.selectedIndex>=this.post.blocks.length-1&&t.push("move down"),t},upload:function(){this.unselect();var t=null;t=this.$route.params.postid?m.database().ref("posts/").child(this.$route.params.postid):m.database().ref("posts/").push(),this.post.title=this.post.blocks[0].content,this.post.time=Date.now(),this.post.author="me",t.set(this.post,function(t){})},clear:function(){this.unselect(),this.post={}},blockIsEditing:function(t){return 1==this.editing&&t==this.selectedIndex},addBlock:function(t){this.unselect(),this.post.blocks.push({type:t,content:""}),this.selectBlock(this.post.blocks.length-1,!0),this.editing=!0},deleteBlock:function(t){this.post.blocks.splice(t,1)},selectBlock:function(t,e){this.selectedIndex!=t&&(this.unselect(),this.editing=e,this.selectedIndex=t,this.$nextTick(function(){var e=document.getElementsByTagName("article")[0].children[t];this.editToolsTop=e.offsetTop}))},unselect:function(){this.selectedIndex<0||(this.selectedBlock&&!this.selectedBlock.content&&this.deleteBlock(this.selectedIndex),this.selectedIndex=-1,this.editing=!1)},useTool:function(t){"delete"==t?(this.deleteBlock(this.selectedIndex),this.unselect()):"move up"==t&&this.selectedIndex>0?(this.post.blocks.move(this.selectedIndex,this.selectedIndex-1),this.selectBlock(this.selectedIndex-1,!1)):"move down"==t&&this.selectedIndex<this.post.blocks.length-1?(this.post.blocks.move(this.selectedIndex,this.selectedIndex+1),this.selectBlock(this.selectedIndex+1,!1)):"edit"==t?this.editing=!0:"save"==t&&this.unselect()}},computed:{selectedBlock:function(){return this.post.blocks[this.selectedIndex]}},data:function(){return{editing:!1,selectedIndex:-1,editToolsTop:0}},components:{"edit-tools":ft,"add-tools":jt}},Et=Ct,Bt=(n("44bf"),Object(g["a"])(Et,W,Y,!1,null,"3ce3adbe",null)),Pt=Bt.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("404 Not Found")])},Lt=[],qt={},At=qt,Mt=Object(g["a"])(At,St,Lt,!1,null,"6cdf92fc",null),Dt=Mt.exports;i["a"].use(c["a"]);var Rt={name:"app",components:{PostList:k},router:new c["a"]({routes:[{path:"/",component:k},{path:"/post/:postid",component:Q,name:"post",props:!0},{path:"/post/:postid/edit",component:Pt,name:"edit",props:!0},{path:"/post/new",component:Pt,name:"new",props:{postdata:{blocks:[]}}},{path:"/404",alias:"*",component:Dt}],base:"/"})},Nt=Rt,Vt=(n("034f"),Object(g["a"])(Nt,o,s,!1,null,null,null)),Ft=Vt.exports;i["a"].config.productionTip=!0,new i["a"]({render:function(t){return t(Ft)}}).$mount("#app")},"61c8":function(t,e,n){"use strict";var i=n("96f2"),o=n.n(i);o.a},"64b6":function(t,e,n){"use strict";var i=n("14e3"),o=n.n(i);o.a},"6e3d":function(t,e,n){"use strict";var i=n("4fb0"),o=n.n(i);o.a},"71f4":function(t,e,n){t.exports=n.p+"img/angle-up.b0817084.svg"},"7ed3":function(t,e,n){},"96f2":function(t,e,n){},a1d0:function(t,e,n){},b717:function(t,e,n){t.exports=n.p+"img/angle-down.4a0aa59c.svg"},c21b:function(t,e,n){},d17f:function(t,e,n){t.exports=n.p+"img/image.867950cc.svg"},d7a1:function(t,e,n){t.exports=n.p+"img/wrench.7c980e84.svg"},db03:function(t,e,n){t.exports=n.p+"img/paragraph.75097405.svg"},eb88:function(t,e,n){t.exports=n.p+"img/trash-alt.762fa71b.svg"},f505:function(t,e,n){"use strict";var i=n("a1d0"),o=n.n(i);o.a}});
//# sourceMappingURL=app.5085239e.js.map