// Compiled by ClojureScript 1.9.542 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__27794__auto__ = [];
var len__27787__auto___37177 = arguments.length;
var i__27788__auto___37178 = (0);
while(true){
if((i__27788__auto___37178 < len__27787__auto___37177)){
args__27794__auto__.push((arguments[i__27788__auto___37178]));

var G__37179 = (i__27788__auto___37178 + (1));
i__27788__auto___37178 = G__37179;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((2) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27795__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__37169_37180 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__37170_37181 = null;
var count__37171_37182 = (0);
var i__37172_37183 = (0);
while(true){
if((i__37172_37183 < count__37171_37182)){
var k_37184 = cljs.core._nth.call(null,chunk__37170_37181,i__37172_37183);
e.setAttribute(cljs.core.name.call(null,k_37184),cljs.core.get.call(null,attrs,k_37184));

var G__37185 = seq__37169_37180;
var G__37186 = chunk__37170_37181;
var G__37187 = count__37171_37182;
var G__37188 = (i__37172_37183 + (1));
seq__37169_37180 = G__37185;
chunk__37170_37181 = G__37186;
count__37171_37182 = G__37187;
i__37172_37183 = G__37188;
continue;
} else {
var temp__4657__auto___37189 = cljs.core.seq.call(null,seq__37169_37180);
if(temp__4657__auto___37189){
var seq__37169_37190__$1 = temp__4657__auto___37189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37169_37190__$1)){
var c__27493__auto___37191 = cljs.core.chunk_first.call(null,seq__37169_37190__$1);
var G__37192 = cljs.core.chunk_rest.call(null,seq__37169_37190__$1);
var G__37193 = c__27493__auto___37191;
var G__37194 = cljs.core.count.call(null,c__27493__auto___37191);
var G__37195 = (0);
seq__37169_37180 = G__37192;
chunk__37170_37181 = G__37193;
count__37171_37182 = G__37194;
i__37172_37183 = G__37195;
continue;
} else {
var k_37196 = cljs.core.first.call(null,seq__37169_37190__$1);
e.setAttribute(cljs.core.name.call(null,k_37196),cljs.core.get.call(null,attrs,k_37196));

var G__37197 = cljs.core.next.call(null,seq__37169_37190__$1);
var G__37198 = null;
var G__37199 = (0);
var G__37200 = (0);
seq__37169_37180 = G__37197;
chunk__37170_37181 = G__37198;
count__37171_37182 = G__37199;
i__37172_37183 = G__37200;
continue;
}
} else {
}
}
break;
}

var seq__37173_37201 = cljs.core.seq.call(null,children);
var chunk__37174_37202 = null;
var count__37175_37203 = (0);
var i__37176_37204 = (0);
while(true){
if((i__37176_37204 < count__37175_37203)){
var ch_37205 = cljs.core._nth.call(null,chunk__37174_37202,i__37176_37204);
e.appendChild(ch_37205);

var G__37206 = seq__37173_37201;
var G__37207 = chunk__37174_37202;
var G__37208 = count__37175_37203;
var G__37209 = (i__37176_37204 + (1));
seq__37173_37201 = G__37206;
chunk__37174_37202 = G__37207;
count__37175_37203 = G__37208;
i__37176_37204 = G__37209;
continue;
} else {
var temp__4657__auto___37210 = cljs.core.seq.call(null,seq__37173_37201);
if(temp__4657__auto___37210){
var seq__37173_37211__$1 = temp__4657__auto___37210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37173_37211__$1)){
var c__27493__auto___37212 = cljs.core.chunk_first.call(null,seq__37173_37211__$1);
var G__37213 = cljs.core.chunk_rest.call(null,seq__37173_37211__$1);
var G__37214 = c__27493__auto___37212;
var G__37215 = cljs.core.count.call(null,c__27493__auto___37212);
var G__37216 = (0);
seq__37173_37201 = G__37213;
chunk__37174_37202 = G__37214;
count__37175_37203 = G__37215;
i__37176_37204 = G__37216;
continue;
} else {
var ch_37217 = cljs.core.first.call(null,seq__37173_37211__$1);
e.appendChild(ch_37217);

var G__37218 = cljs.core.next.call(null,seq__37173_37211__$1);
var G__37219 = null;
var G__37220 = (0);
var G__37221 = (0);
seq__37173_37201 = G__37218;
chunk__37174_37202 = G__37219;
count__37175_37203 = G__37220;
i__37176_37204 = G__37221;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq37166){
var G__37167 = cljs.core.first.call(null,seq37166);
var seq37166__$1 = cljs.core.next.call(null,seq37166);
var G__37168 = cljs.core.first.call(null,seq37166__$1);
var seq37166__$2 = cljs.core.next.call(null,seq37166__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__37167,G__37168,seq37166__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__27607__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__27608__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__27609__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__27610__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__27611__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__27607__auto__,prefer_table__27608__auto__,method_cache__27609__auto__,cached_hierarchy__27610__auto__,hierarchy__27611__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__27607__auto__,prefer_table__27608__auto__,method_cache__27609__auto__,cached_hierarchy__27610__auto__,hierarchy__27611__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__27611__auto__,method_table__27607__auto__,prefer_table__27608__auto__,method_cache__27609__auto__,cached_hierarchy__27610__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_37222 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-o-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("border-top: 1px solid #f5f5f5;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #333;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 0px 10px 0px 70px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: fixed;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("bottom: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity: 0.0;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-sizing: border-box;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 10000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: left;")].join('')], null));
el_37222.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_37222.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_37222.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_37222);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__37223,st_map){
var map__37230 = p__37223;
var map__37230__$1 = ((((!((map__37230 == null)))?((((map__37230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37230.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37230):map__37230);
var container_el = cljs.core.get.call(null,map__37230__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__37230,map__37230__$1,container_el){
return (function (p__37232){
var vec__37233 = p__37232;
var k = cljs.core.nth.call(null,vec__37233,(0),null);
var v = cljs.core.nth.call(null,vec__37233,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__37230,map__37230__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__37236,dom_str){
var map__37239 = p__37236;
var map__37239__$1 = ((((!((map__37239 == null)))?((((map__37239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37239.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37239):map__37239);
var c = map__37239__$1;
var content_area_el = cljs.core.get.call(null,map__37239__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__37241){
var map__37244 = p__37241;
var map__37244__$1 = ((((!((map__37244 == null)))?((((map__37244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37244):map__37244);
var content_area_el = cljs.core.get.call(null,map__37244__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("float: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-decoration: none;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: rgba(84,84,84, 0.5);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__29844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto__){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto__){
return (function (state_37287){
var state_val_37288 = (state_37287[(1)]);
if((state_val_37288 === (1))){
var inst_37272 = (state_37287[(7)]);
var inst_37272__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_37273 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_37274 = ["10px","10px","100%","68px","1.0"];
var inst_37275 = cljs.core.PersistentHashMap.fromArrays(inst_37273,inst_37274);
var inst_37276 = cljs.core.merge.call(null,inst_37275,style);
var inst_37277 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37272__$1,inst_37276);
var inst_37278 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_37272__$1,msg);
var inst_37279 = cljs.core.async.timeout.call(null,(300));
var state_37287__$1 = (function (){var statearr_37289 = state_37287;
(statearr_37289[(7)] = inst_37272__$1);

(statearr_37289[(8)] = inst_37278);

(statearr_37289[(9)] = inst_37277);

return statearr_37289;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37287__$1,(2),inst_37279);
} else {
if((state_val_37288 === (2))){
var inst_37272 = (state_37287[(7)]);
var inst_37281 = (state_37287[(2)]);
var inst_37282 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_37283 = ["auto"];
var inst_37284 = cljs.core.PersistentHashMap.fromArrays(inst_37282,inst_37283);
var inst_37285 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37272,inst_37284);
var state_37287__$1 = (function (){var statearr_37290 = state_37287;
(statearr_37290[(10)] = inst_37281);

return statearr_37290;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37287__$1,inst_37285);
} else {
return null;
}
}
});})(c__29844__auto__))
;
return ((function (switch__29829__auto__,c__29844__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__29830__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__29830__auto____0 = (function (){
var statearr_37294 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37294[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__29830__auto__);

(statearr_37294[(1)] = (1));

return statearr_37294;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__29830__auto____1 = (function (state_37287){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_37287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e37295){if((e37295 instanceof Object)){
var ex__29833__auto__ = e37295;
var statearr_37296_37298 = state_37287;
(statearr_37296_37298[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37299 = state_37287;
state_37287 = G__37299;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__29830__auto__ = function(state_37287){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__29830__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__29830__auto____1.call(this,state_37287);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__29830__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__29830__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto__))
})();
var state__29846__auto__ = (function (){var statearr_37297 = f__29845__auto__.call(null);
(statearr_37297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto__);

return statearr_37297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto__))
);

return c__29844__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args37300 = [];
var len__27787__auto___37303 = arguments.length;
var i__27788__auto___37304 = (0);
while(true){
if((i__27788__auto___37304 < len__27787__auto___37303)){
args37300.push((arguments[i__27788__auto___37304]));

var G__37305 = (i__27788__auto___37304 + (1));
i__27788__auto___37304 = G__37305;
continue;
} else {
}
break;
}

var G__37302 = args37300.length;
switch (G__37302) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37300.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-bottom: 2px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding-top: 1px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" <span style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("display: inline-block;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-line=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-column=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__37307){
var map__37310 = p__37307;
var map__37310__$1 = ((((!((map__37310 == null)))?((((map__37310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37310):map__37310);
var file = cljs.core.get.call(null,map__37310__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37310__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37310__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__26674__auto__ = file;
if(cljs.core.truth_(or__26674__auto__)){
return or__26674__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='color: #757575;'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  </span>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__37312){
var vec__37319 = p__37312;
var typ = cljs.core.nth.call(null,vec__37319,(0),null);
var line_number = cljs.core.nth.call(null,vec__37319,(1),null);
var line = cljs.core.nth.call(null,vec__37319,(2),null);
var pred__37322 = cljs.core._EQ_;
var expr__37323 = typ;
if(cljs.core.truth_(pred__37322.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__37323))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__37322.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__37323))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__37322.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__37323))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__37325_SHARP_){
return cljs.core.update_in.call(null,p1__37325_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__37326_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__37326_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__37329){
var map__37332 = p__37329;
var map__37332__$1 = ((((!((map__37332 == null)))?((((map__37332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37332.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37332):map__37332);
var exception = map__37332__$1;
var message = cljs.core.get.call(null,map__37332__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__37332__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__37332__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__37332__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__37332__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__37332__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__37332__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__37332__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__37332__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__37332__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__37332__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__26662__auto__ = file;
if(cljs.core.truth_(and__26662__auto__)){
return line;
} else {
return and__26662__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__37332,map__37332__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__37327_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37327_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__37332,map__37332__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join(''):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''),(cljs.core.truth_(display_ex_data)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__37332,map__37332__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__37328_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__37328_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__37328_SHARP_)))].join('');
});})(last_message,map__37332,map__37332__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__37334){
var map__37337 = p__37334;
var map__37337__$1 = ((((!((map__37337 == null)))?((((map__37337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37337.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37337):map__37337);
var file = cljs.core.get.call(null,map__37337__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37337__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37337__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__37342 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__37342__$1 = ((((!((map__37342 == null)))?((((map__37342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37342.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37342):map__37342);
var head = cljs.core.get.call(null,map__37342__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__37342__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__37342__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__37342__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__37342__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37342__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37342__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__37345){
var map__37348 = p__37345;
var map__37348__$1 = ((((!((map__37348 == null)))?((((map__37348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37348):map__37348);
var warning_data = map__37348__$1;
var file = cljs.core.get.call(null,map__37348__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37348__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37348__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__37348__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__37348__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__26662__auto__ = file;
if(cljs.core.truth_(and__26662__auto__)){
return line;
} else {
return and__26662__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__37348,map__37348__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__37344_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37344_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__37348,map__37348__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__37352 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__37352__$1 = ((((!((map__37352 == null)))?((((map__37352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37352.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37352):map__37352);
var head = cljs.core.get.call(null,map__37352__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__37352__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__37352__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__37352__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__37352__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37352__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37352__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__37354){
var map__37358 = p__37354;
var map__37358__$1 = ((((!((map__37358 == null)))?((((map__37358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37358):map__37358);
var warning_data = map__37358__$1;
var message = cljs.core.get.call(null,map__37358__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__37358__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37358__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37358__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37360 = message;
var G__37360__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37360),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37360);
var G__37360__$2 = (cljs.core.truth_((function (){var and__26662__auto__ = line;
if(cljs.core.truth_(and__26662__auto__)){
return column;
} else {
return and__26662__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37360__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__37360__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37360__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__37360__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__37361){
var map__37366 = p__37361;
var map__37366__$1 = ((((!((map__37366 == null)))?((((map__37366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37366):map__37366);
var warning_data = map__37366__$1;
var message = cljs.core.get.call(null,map__37366__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__37366__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37366__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37366__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__37368 = figwheel.client.heads_up.ensure_container.call(null);
var map__37368__$1 = ((((!((map__37368 == null)))?((((map__37368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37368):map__37368);
var content_area_el = cljs.core.get.call(null,map__37368__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__4657__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__4657__auto__)){
var last_child = temp__4657__auto__;
var temp__4655__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__4655__auto__)){
var message_count = temp__4655__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__29844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto__){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto__){
return (function (state_37416){
var state_val_37417 = (state_37416[(1)]);
if((state_val_37417 === (1))){
var inst_37399 = (state_37416[(7)]);
var inst_37399__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_37400 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_37401 = ["0.0"];
var inst_37402 = cljs.core.PersistentHashMap.fromArrays(inst_37400,inst_37401);
var inst_37403 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37399__$1,inst_37402);
var inst_37404 = cljs.core.async.timeout.call(null,(300));
var state_37416__$1 = (function (){var statearr_37418 = state_37416;
(statearr_37418[(7)] = inst_37399__$1);

(statearr_37418[(8)] = inst_37403);

return statearr_37418;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37416__$1,(2),inst_37404);
} else {
if((state_val_37417 === (2))){
var inst_37399 = (state_37416[(7)]);
var inst_37406 = (state_37416[(2)]);
var inst_37407 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_37408 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_37409 = cljs.core.PersistentHashMap.fromArrays(inst_37407,inst_37408);
var inst_37410 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37399,inst_37409);
var inst_37411 = cljs.core.async.timeout.call(null,(200));
var state_37416__$1 = (function (){var statearr_37419 = state_37416;
(statearr_37419[(9)] = inst_37406);

(statearr_37419[(10)] = inst_37410);

return statearr_37419;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37416__$1,(3),inst_37411);
} else {
if((state_val_37417 === (3))){
var inst_37399 = (state_37416[(7)]);
var inst_37413 = (state_37416[(2)]);
var inst_37414 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_37399,"");
var state_37416__$1 = (function (){var statearr_37420 = state_37416;
(statearr_37420[(11)] = inst_37413);

return statearr_37420;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37416__$1,inst_37414);
} else {
return null;
}
}
}
});})(c__29844__auto__))
;
return ((function (switch__29829__auto__,c__29844__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__29830__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__29830__auto____0 = (function (){
var statearr_37424 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37424[(0)] = figwheel$client$heads_up$clear_$_state_machine__29830__auto__);

(statearr_37424[(1)] = (1));

return statearr_37424;
});
var figwheel$client$heads_up$clear_$_state_machine__29830__auto____1 = (function (state_37416){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_37416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e37425){if((e37425 instanceof Object)){
var ex__29833__auto__ = e37425;
var statearr_37426_37428 = state_37416;
(statearr_37426_37428[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37429 = state_37416;
state_37416 = G__37429;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__29830__auto__ = function(state_37416){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__29830__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__29830__auto____1.call(this,state_37416);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__29830__auto____0;
figwheel$client$heads_up$clear_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__29830__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto__))
})();
var state__29846__auto__ = (function (){var statearr_37427 = f__29845__auto__.call(null);
(statearr_37427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto__);

return statearr_37427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto__))
);

return c__29844__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__29844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto__){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto__){
return (function (state_37461){
var state_val_37462 = (state_37461[(1)]);
if((state_val_37462 === (1))){
var inst_37451 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_37461__$1 = state_37461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37461__$1,(2),inst_37451);
} else {
if((state_val_37462 === (2))){
var inst_37453 = (state_37461[(2)]);
var inst_37454 = cljs.core.async.timeout.call(null,(400));
var state_37461__$1 = (function (){var statearr_37463 = state_37461;
(statearr_37463[(7)] = inst_37453);

return statearr_37463;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37461__$1,(3),inst_37454);
} else {
if((state_val_37462 === (3))){
var inst_37456 = (state_37461[(2)]);
var inst_37457 = figwheel.client.heads_up.clear.call(null);
var state_37461__$1 = (function (){var statearr_37464 = state_37461;
(statearr_37464[(8)] = inst_37456);

return statearr_37464;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37461__$1,(4),inst_37457);
} else {
if((state_val_37462 === (4))){
var inst_37459 = (state_37461[(2)]);
var state_37461__$1 = state_37461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37461__$1,inst_37459);
} else {
return null;
}
}
}
}
});})(c__29844__auto__))
;
return ((function (switch__29829__auto__,c__29844__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__29830__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__29830__auto____0 = (function (){
var statearr_37468 = [null,null,null,null,null,null,null,null,null];
(statearr_37468[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__29830__auto__);

(statearr_37468[(1)] = (1));

return statearr_37468;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__29830__auto____1 = (function (state_37461){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_37461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e37469){if((e37469 instanceof Object)){
var ex__29833__auto__ = e37469;
var statearr_37470_37472 = state_37461;
(statearr_37470_37472[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37473 = state_37461;
state_37461 = G__37473;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__29830__auto__ = function(state_37461){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__29830__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__29830__auto____1.call(this,state_37461);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__29830__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__29830__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto__))
})();
var state__29846__auto__ = (function (){var statearr_37471 = f__29845__auto__.call(null);
(statearr_37471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto__);

return statearr_37471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto__))
);

return c__29844__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__4657__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: absolute;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 9000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 100vh;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("top: 0px; left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #FFF5DB;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin: auto;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-top: 10px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: center; "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 2px 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map