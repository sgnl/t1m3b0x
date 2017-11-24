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
var args__27575__auto__ = [];
var len__27568__auto___36957 = arguments.length;
var i__27569__auto___36958 = (0);
while(true){
if((i__27569__auto___36958 < len__27568__auto___36957)){
args__27575__auto__.push((arguments[i__27569__auto___36958]));

var G__36959 = (i__27569__auto___36958 + (1));
i__27569__auto___36958 = G__36959;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((2) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27576__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__36949_36960 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__36950_36961 = null;
var count__36951_36962 = (0);
var i__36952_36963 = (0);
while(true){
if((i__36952_36963 < count__36951_36962)){
var k_36964 = cljs.core._nth.call(null,chunk__36950_36961,i__36952_36963);
e.setAttribute(cljs.core.name.call(null,k_36964),cljs.core.get.call(null,attrs,k_36964));

var G__36965 = seq__36949_36960;
var G__36966 = chunk__36950_36961;
var G__36967 = count__36951_36962;
var G__36968 = (i__36952_36963 + (1));
seq__36949_36960 = G__36965;
chunk__36950_36961 = G__36966;
count__36951_36962 = G__36967;
i__36952_36963 = G__36968;
continue;
} else {
var temp__4657__auto___36969 = cljs.core.seq.call(null,seq__36949_36960);
if(temp__4657__auto___36969){
var seq__36949_36970__$1 = temp__4657__auto___36969;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36949_36970__$1)){
var c__27274__auto___36971 = cljs.core.chunk_first.call(null,seq__36949_36970__$1);
var G__36972 = cljs.core.chunk_rest.call(null,seq__36949_36970__$1);
var G__36973 = c__27274__auto___36971;
var G__36974 = cljs.core.count.call(null,c__27274__auto___36971);
var G__36975 = (0);
seq__36949_36960 = G__36972;
chunk__36950_36961 = G__36973;
count__36951_36962 = G__36974;
i__36952_36963 = G__36975;
continue;
} else {
var k_36976 = cljs.core.first.call(null,seq__36949_36970__$1);
e.setAttribute(cljs.core.name.call(null,k_36976),cljs.core.get.call(null,attrs,k_36976));

var G__36977 = cljs.core.next.call(null,seq__36949_36970__$1);
var G__36978 = null;
var G__36979 = (0);
var G__36980 = (0);
seq__36949_36960 = G__36977;
chunk__36950_36961 = G__36978;
count__36951_36962 = G__36979;
i__36952_36963 = G__36980;
continue;
}
} else {
}
}
break;
}

var seq__36953_36981 = cljs.core.seq.call(null,children);
var chunk__36954_36982 = null;
var count__36955_36983 = (0);
var i__36956_36984 = (0);
while(true){
if((i__36956_36984 < count__36955_36983)){
var ch_36985 = cljs.core._nth.call(null,chunk__36954_36982,i__36956_36984);
e.appendChild(ch_36985);

var G__36986 = seq__36953_36981;
var G__36987 = chunk__36954_36982;
var G__36988 = count__36955_36983;
var G__36989 = (i__36956_36984 + (1));
seq__36953_36981 = G__36986;
chunk__36954_36982 = G__36987;
count__36955_36983 = G__36988;
i__36956_36984 = G__36989;
continue;
} else {
var temp__4657__auto___36990 = cljs.core.seq.call(null,seq__36953_36981);
if(temp__4657__auto___36990){
var seq__36953_36991__$1 = temp__4657__auto___36990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36953_36991__$1)){
var c__27274__auto___36992 = cljs.core.chunk_first.call(null,seq__36953_36991__$1);
var G__36993 = cljs.core.chunk_rest.call(null,seq__36953_36991__$1);
var G__36994 = c__27274__auto___36992;
var G__36995 = cljs.core.count.call(null,c__27274__auto___36992);
var G__36996 = (0);
seq__36953_36981 = G__36993;
chunk__36954_36982 = G__36994;
count__36955_36983 = G__36995;
i__36956_36984 = G__36996;
continue;
} else {
var ch_36997 = cljs.core.first.call(null,seq__36953_36991__$1);
e.appendChild(ch_36997);

var G__36998 = cljs.core.next.call(null,seq__36953_36991__$1);
var G__36999 = null;
var G__37000 = (0);
var G__37001 = (0);
seq__36953_36981 = G__36998;
chunk__36954_36982 = G__36999;
count__36955_36983 = G__37000;
i__36956_36984 = G__37001;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq36946){
var G__36947 = cljs.core.first.call(null,seq36946);
var seq36946__$1 = cljs.core.next.call(null,seq36946);
var G__36948 = cljs.core.first.call(null,seq36946__$1);
var seq36946__$2 = cljs.core.next.call(null,seq36946__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__36947,G__36948,seq36946__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__27388__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__27389__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__27390__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__27391__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__27392__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__27388__auto__,prefer_table__27389__auto__,method_cache__27390__auto__,cached_hierarchy__27391__auto__,hierarchy__27392__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__27388__auto__,prefer_table__27389__auto__,method_cache__27390__auto__,cached_hierarchy__27391__auto__,hierarchy__27392__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__27392__auto__,method_table__27388__auto__,prefer_table__27389__auto__,method_cache__27390__auto__,cached_hierarchy__27391__auto__));
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
var el_37002 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-o-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("border-top: 1px solid #f5f5f5;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #333;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 0px 10px 0px 70px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: fixed;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("bottom: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity: 0.0;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-sizing: border-box;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 10000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: left;")].join('')], null));
el_37002.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_37002.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_37002.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_37002);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__37003,st_map){
var map__37010 = p__37003;
var map__37010__$1 = ((((!((map__37010 == null)))?((((map__37010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37010):map__37010);
var container_el = cljs.core.get.call(null,map__37010__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__37010,map__37010__$1,container_el){
return (function (p__37012){
var vec__37013 = p__37012;
var k = cljs.core.nth.call(null,vec__37013,(0),null);
var v = cljs.core.nth.call(null,vec__37013,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__37010,map__37010__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__37016,dom_str){
var map__37019 = p__37016;
var map__37019__$1 = ((((!((map__37019 == null)))?((((map__37019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37019.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37019):map__37019);
var c = map__37019__$1;
var content_area_el = cljs.core.get.call(null,map__37019__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__37021){
var map__37024 = p__37021;
var map__37024__$1 = ((((!((map__37024 == null)))?((((map__37024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37024.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37024):map__37024);
var content_area_el = cljs.core.get.call(null,map__37024__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("float: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-decoration: none;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: rgba(84,84,84, 0.5);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__29625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29625__auto__){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (c__29625__auto__){
return (function (state_37067){
var state_val_37068 = (state_37067[(1)]);
if((state_val_37068 === (1))){
var inst_37052 = (state_37067[(7)]);
var inst_37052__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_37053 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_37054 = ["10px","10px","100%","68px","1.0"];
var inst_37055 = cljs.core.PersistentHashMap.fromArrays(inst_37053,inst_37054);
var inst_37056 = cljs.core.merge.call(null,inst_37055,style);
var inst_37057 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37052__$1,inst_37056);
var inst_37058 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_37052__$1,msg);
var inst_37059 = cljs.core.async.timeout.call(null,(300));
var state_37067__$1 = (function (){var statearr_37069 = state_37067;
(statearr_37069[(7)] = inst_37052__$1);

(statearr_37069[(8)] = inst_37057);

(statearr_37069[(9)] = inst_37058);

return statearr_37069;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37067__$1,(2),inst_37059);
} else {
if((state_val_37068 === (2))){
var inst_37052 = (state_37067[(7)]);
var inst_37061 = (state_37067[(2)]);
var inst_37062 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_37063 = ["auto"];
var inst_37064 = cljs.core.PersistentHashMap.fromArrays(inst_37062,inst_37063);
var inst_37065 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37052,inst_37064);
var state_37067__$1 = (function (){var statearr_37070 = state_37067;
(statearr_37070[(10)] = inst_37061);

return statearr_37070;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37067__$1,inst_37065);
} else {
return null;
}
}
});})(c__29625__auto__))
;
return ((function (switch__29610__auto__,c__29625__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__29611__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__29611__auto____0 = (function (){
var statearr_37074 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37074[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__29611__auto__);

(statearr_37074[(1)] = (1));

return statearr_37074;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__29611__auto____1 = (function (state_37067){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_37067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e37075){if((e37075 instanceof Object)){
var ex__29614__auto__ = e37075;
var statearr_37076_37078 = state_37067;
(statearr_37076_37078[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37079 = state_37067;
state_37067 = G__37079;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__29611__auto__ = function(state_37067){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__29611__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__29611__auto____1.call(this,state_37067);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__29611__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__29611__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__29611__auto__;
})()
;})(switch__29610__auto__,c__29625__auto__))
})();
var state__29627__auto__ = (function (){var statearr_37077 = f__29626__auto__.call(null);
(statearr_37077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto__);

return statearr_37077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(c__29625__auto__))
);

return c__29625__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args37080 = [];
var len__27568__auto___37083 = arguments.length;
var i__27569__auto___37084 = (0);
while(true){
if((i__27569__auto___37084 < len__27568__auto___37083)){
args37080.push((arguments[i__27569__auto___37084]));

var G__37085 = (i__27569__auto___37084 + (1));
i__27569__auto___37084 = G__37085;
continue;
} else {
}
break;
}

var G__37082 = args37080.length;
switch (G__37082) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37080.length)].join('')));

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
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__37087){
var map__37090 = p__37087;
var map__37090__$1 = ((((!((map__37090 == null)))?((((map__37090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37090.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37090):map__37090);
var file = cljs.core.get.call(null,map__37090__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37090__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37090__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__26455__auto__ = file;
if(cljs.core.truth_(or__26455__auto__)){
return or__26455__auto__;
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
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__37092){
var vec__37099 = p__37092;
var typ = cljs.core.nth.call(null,vec__37099,(0),null);
var line_number = cljs.core.nth.call(null,vec__37099,(1),null);
var line = cljs.core.nth.call(null,vec__37099,(2),null);
var pred__37102 = cljs.core._EQ_;
var expr__37103 = typ;
if(cljs.core.truth_(pred__37102.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__37103))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__37102.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__37103))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__37102.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__37103))){
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
return (function (p1__37105_SHARP_){
return cljs.core.update_in.call(null,p1__37105_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__37106_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__37106_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__37109){
var map__37112 = p__37109;
var map__37112__$1 = ((((!((map__37112 == null)))?((((map__37112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37112):map__37112);
var exception = map__37112__$1;
var message = cljs.core.get.call(null,map__37112__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__37112__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__37112__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__37112__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__37112__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__37112__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__37112__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__37112__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__37112__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__37112__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__37112__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__26443__auto__ = file;
if(cljs.core.truth_(and__26443__auto__)){
return line;
} else {
return and__26443__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__37112,map__37112__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__37107_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37107_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__37112,map__37112__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join(''):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''),(cljs.core.truth_(display_ex_data)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__37112,map__37112__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__37108_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__37108_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__37108_SHARP_)))].join('');
});})(last_message,map__37112,map__37112__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__37114){
var map__37117 = p__37114;
var map__37117__$1 = ((((!((map__37117 == null)))?((((map__37117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37117.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37117):map__37117);
var file = cljs.core.get.call(null,map__37117__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37117__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37117__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__37122 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__37122__$1 = ((((!((map__37122 == null)))?((((map__37122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37122.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37122):map__37122);
var head = cljs.core.get.call(null,map__37122__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__37122__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__37122__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__37122__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__37122__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37122__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37122__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__37125){
var map__37128 = p__37125;
var map__37128__$1 = ((((!((map__37128 == null)))?((((map__37128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37128.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37128):map__37128);
var warning_data = map__37128__$1;
var file = cljs.core.get.call(null,map__37128__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37128__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37128__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__37128__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__37128__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__26443__auto__ = file;
if(cljs.core.truth_(and__26443__auto__)){
return line;
} else {
return and__26443__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__37128,map__37128__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__37124_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37124_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__37128,map__37128__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__37132 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__37132__$1 = ((((!((map__37132 == null)))?((((map__37132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37132):map__37132);
var head = cljs.core.get.call(null,map__37132__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__37132__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__37132__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__37132__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__37132__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37132__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37132__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__37134){
var map__37138 = p__37134;
var map__37138__$1 = ((((!((map__37138 == null)))?((((map__37138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37138.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37138):map__37138);
var warning_data = map__37138__$1;
var message = cljs.core.get.call(null,map__37138__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__37138__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37138__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37138__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37140 = message;
var G__37140__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37140),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37140);
var G__37140__$2 = (cljs.core.truth_((function (){var and__26443__auto__ = line;
if(cljs.core.truth_(and__26443__auto__)){
return column;
} else {
return and__26443__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37140__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__37140__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37140__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__37140__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__37141){
var map__37146 = p__37141;
var map__37146__$1 = ((((!((map__37146 == null)))?((((map__37146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37146):map__37146);
var warning_data = map__37146__$1;
var message = cljs.core.get.call(null,map__37146__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__37146__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37146__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37146__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__37148 = figwheel.client.heads_up.ensure_container.call(null);
var map__37148__$1 = ((((!((map__37148 == null)))?((((map__37148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37148):map__37148);
var content_area_el = cljs.core.get.call(null,map__37148__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
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
var c__29625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29625__auto__){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (c__29625__auto__){
return (function (state_37196){
var state_val_37197 = (state_37196[(1)]);
if((state_val_37197 === (1))){
var inst_37179 = (state_37196[(7)]);
var inst_37179__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_37180 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_37181 = ["0.0"];
var inst_37182 = cljs.core.PersistentHashMap.fromArrays(inst_37180,inst_37181);
var inst_37183 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37179__$1,inst_37182);
var inst_37184 = cljs.core.async.timeout.call(null,(300));
var state_37196__$1 = (function (){var statearr_37198 = state_37196;
(statearr_37198[(7)] = inst_37179__$1);

(statearr_37198[(8)] = inst_37183);

return statearr_37198;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37196__$1,(2),inst_37184);
} else {
if((state_val_37197 === (2))){
var inst_37179 = (state_37196[(7)]);
var inst_37186 = (state_37196[(2)]);
var inst_37187 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_37188 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_37189 = cljs.core.PersistentHashMap.fromArrays(inst_37187,inst_37188);
var inst_37190 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37179,inst_37189);
var inst_37191 = cljs.core.async.timeout.call(null,(200));
var state_37196__$1 = (function (){var statearr_37199 = state_37196;
(statearr_37199[(9)] = inst_37190);

(statearr_37199[(10)] = inst_37186);

return statearr_37199;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37196__$1,(3),inst_37191);
} else {
if((state_val_37197 === (3))){
var inst_37179 = (state_37196[(7)]);
var inst_37193 = (state_37196[(2)]);
var inst_37194 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_37179,"");
var state_37196__$1 = (function (){var statearr_37200 = state_37196;
(statearr_37200[(11)] = inst_37193);

return statearr_37200;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37196__$1,inst_37194);
} else {
return null;
}
}
}
});})(c__29625__auto__))
;
return ((function (switch__29610__auto__,c__29625__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__29611__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__29611__auto____0 = (function (){
var statearr_37204 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37204[(0)] = figwheel$client$heads_up$clear_$_state_machine__29611__auto__);

(statearr_37204[(1)] = (1));

return statearr_37204;
});
var figwheel$client$heads_up$clear_$_state_machine__29611__auto____1 = (function (state_37196){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_37196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e37205){if((e37205 instanceof Object)){
var ex__29614__auto__ = e37205;
var statearr_37206_37208 = state_37196;
(statearr_37206_37208[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37209 = state_37196;
state_37196 = G__37209;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__29611__auto__ = function(state_37196){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__29611__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__29611__auto____1.call(this,state_37196);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__29611__auto____0;
figwheel$client$heads_up$clear_$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__29611__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__29611__auto__;
})()
;})(switch__29610__auto__,c__29625__auto__))
})();
var state__29627__auto__ = (function (){var statearr_37207 = f__29626__auto__.call(null);
(statearr_37207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto__);

return statearr_37207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(c__29625__auto__))
);

return c__29625__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__29625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29625__auto__){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (c__29625__auto__){
return (function (state_37241){
var state_val_37242 = (state_37241[(1)]);
if((state_val_37242 === (1))){
var inst_37231 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_37241__$1 = state_37241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37241__$1,(2),inst_37231);
} else {
if((state_val_37242 === (2))){
var inst_37233 = (state_37241[(2)]);
var inst_37234 = cljs.core.async.timeout.call(null,(400));
var state_37241__$1 = (function (){var statearr_37243 = state_37241;
(statearr_37243[(7)] = inst_37233);

return statearr_37243;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37241__$1,(3),inst_37234);
} else {
if((state_val_37242 === (3))){
var inst_37236 = (state_37241[(2)]);
var inst_37237 = figwheel.client.heads_up.clear.call(null);
var state_37241__$1 = (function (){var statearr_37244 = state_37241;
(statearr_37244[(8)] = inst_37236);

return statearr_37244;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37241__$1,(4),inst_37237);
} else {
if((state_val_37242 === (4))){
var inst_37239 = (state_37241[(2)]);
var state_37241__$1 = state_37241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37241__$1,inst_37239);
} else {
return null;
}
}
}
}
});})(c__29625__auto__))
;
return ((function (switch__29610__auto__,c__29625__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__29611__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__29611__auto____0 = (function (){
var statearr_37248 = [null,null,null,null,null,null,null,null,null];
(statearr_37248[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__29611__auto__);

(statearr_37248[(1)] = (1));

return statearr_37248;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__29611__auto____1 = (function (state_37241){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_37241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e37249){if((e37249 instanceof Object)){
var ex__29614__auto__ = e37249;
var statearr_37250_37252 = state_37241;
(statearr_37250_37252[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37253 = state_37241;
state_37241 = G__37253;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__29611__auto__ = function(state_37241){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__29611__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__29611__auto____1.call(this,state_37241);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__29611__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__29611__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__29611__auto__;
})()
;})(switch__29610__auto__,c__29625__auto__))
})();
var state__29627__auto__ = (function (){var statearr_37251 = f__29626__auto__.call(null);
(statearr_37251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto__);

return statearr_37251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(c__29625__auto__))
);

return c__29625__auto__;
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