// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37036){
var map__37061 = p__37036;
var map__37061__$1 = ((((!((map__37061 == null)))?((((map__37061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37061):map__37061);
var m = map__37061__$1;
var n = cljs.core.get.call(null,map__37061__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37061__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37063_37085 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37064_37086 = null;
var count__37065_37087 = (0);
var i__37066_37088 = (0);
while(true){
if((i__37066_37088 < count__37065_37087)){
var f_37089 = cljs.core._nth.call(null,chunk__37064_37086,i__37066_37088);
cljs.core.println.call(null,"  ",f_37089);

var G__37090 = seq__37063_37085;
var G__37091 = chunk__37064_37086;
var G__37092 = count__37065_37087;
var G__37093 = (i__37066_37088 + (1));
seq__37063_37085 = G__37090;
chunk__37064_37086 = G__37091;
count__37065_37087 = G__37092;
i__37066_37088 = G__37093;
continue;
} else {
var temp__4657__auto___37094 = cljs.core.seq.call(null,seq__37063_37085);
if(temp__4657__auto___37094){
var seq__37063_37095__$1 = temp__4657__auto___37094;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37063_37095__$1)){
var c__27493__auto___37096 = cljs.core.chunk_first.call(null,seq__37063_37095__$1);
var G__37097 = cljs.core.chunk_rest.call(null,seq__37063_37095__$1);
var G__37098 = c__27493__auto___37096;
var G__37099 = cljs.core.count.call(null,c__27493__auto___37096);
var G__37100 = (0);
seq__37063_37085 = G__37097;
chunk__37064_37086 = G__37098;
count__37065_37087 = G__37099;
i__37066_37088 = G__37100;
continue;
} else {
var f_37101 = cljs.core.first.call(null,seq__37063_37095__$1);
cljs.core.println.call(null,"  ",f_37101);

var G__37102 = cljs.core.next.call(null,seq__37063_37095__$1);
var G__37103 = null;
var G__37104 = (0);
var G__37105 = (0);
seq__37063_37085 = G__37102;
chunk__37064_37086 = G__37103;
count__37065_37087 = G__37104;
i__37066_37088 = G__37105;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37106 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26674__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26674__auto__)){
return or__26674__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37106);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37106)))?cljs.core.second.call(null,arglists_37106):arglists_37106));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37067_37107 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37068_37108 = null;
var count__37069_37109 = (0);
var i__37070_37110 = (0);
while(true){
if((i__37070_37110 < count__37069_37109)){
var vec__37071_37111 = cljs.core._nth.call(null,chunk__37068_37108,i__37070_37110);
var name_37112 = cljs.core.nth.call(null,vec__37071_37111,(0),null);
var map__37074_37113 = cljs.core.nth.call(null,vec__37071_37111,(1),null);
var map__37074_37114__$1 = ((((!((map__37074_37113 == null)))?((((map__37074_37113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37074_37113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37074_37113):map__37074_37113);
var doc_37115 = cljs.core.get.call(null,map__37074_37114__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37116 = cljs.core.get.call(null,map__37074_37114__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37112);

cljs.core.println.call(null," ",arglists_37116);

if(cljs.core.truth_(doc_37115)){
cljs.core.println.call(null," ",doc_37115);
} else {
}

var G__37117 = seq__37067_37107;
var G__37118 = chunk__37068_37108;
var G__37119 = count__37069_37109;
var G__37120 = (i__37070_37110 + (1));
seq__37067_37107 = G__37117;
chunk__37068_37108 = G__37118;
count__37069_37109 = G__37119;
i__37070_37110 = G__37120;
continue;
} else {
var temp__4657__auto___37121 = cljs.core.seq.call(null,seq__37067_37107);
if(temp__4657__auto___37121){
var seq__37067_37122__$1 = temp__4657__auto___37121;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37067_37122__$1)){
var c__27493__auto___37123 = cljs.core.chunk_first.call(null,seq__37067_37122__$1);
var G__37124 = cljs.core.chunk_rest.call(null,seq__37067_37122__$1);
var G__37125 = c__27493__auto___37123;
var G__37126 = cljs.core.count.call(null,c__27493__auto___37123);
var G__37127 = (0);
seq__37067_37107 = G__37124;
chunk__37068_37108 = G__37125;
count__37069_37109 = G__37126;
i__37070_37110 = G__37127;
continue;
} else {
var vec__37076_37128 = cljs.core.first.call(null,seq__37067_37122__$1);
var name_37129 = cljs.core.nth.call(null,vec__37076_37128,(0),null);
var map__37079_37130 = cljs.core.nth.call(null,vec__37076_37128,(1),null);
var map__37079_37131__$1 = ((((!((map__37079_37130 == null)))?((((map__37079_37130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37079_37130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37079_37130):map__37079_37130);
var doc_37132 = cljs.core.get.call(null,map__37079_37131__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37133 = cljs.core.get.call(null,map__37079_37131__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37129);

cljs.core.println.call(null," ",arglists_37133);

if(cljs.core.truth_(doc_37132)){
cljs.core.println.call(null," ",doc_37132);
} else {
}

var G__37134 = cljs.core.next.call(null,seq__37067_37122__$1);
var G__37135 = null;
var G__37136 = (0);
var G__37137 = (0);
seq__37067_37107 = G__37134;
chunk__37068_37108 = G__37135;
count__37069_37109 = G__37136;
i__37070_37110 = G__37137;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__37081 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37082 = null;
var count__37083 = (0);
var i__37084 = (0);
while(true){
if((i__37084 < count__37083)){
var role = cljs.core._nth.call(null,chunk__37082,i__37084);
var temp__4657__auto___37138__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37138__$1)){
var spec_37139 = temp__4657__auto___37138__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_37139));
} else {
}

var G__37140 = seq__37081;
var G__37141 = chunk__37082;
var G__37142 = count__37083;
var G__37143 = (i__37084 + (1));
seq__37081 = G__37140;
chunk__37082 = G__37141;
count__37083 = G__37142;
i__37084 = G__37143;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37081);
if(temp__4657__auto____$1){
var seq__37081__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37081__$1)){
var c__27493__auto__ = cljs.core.chunk_first.call(null,seq__37081__$1);
var G__37144 = cljs.core.chunk_rest.call(null,seq__37081__$1);
var G__37145 = c__27493__auto__;
var G__37146 = cljs.core.count.call(null,c__27493__auto__);
var G__37147 = (0);
seq__37081 = G__37144;
chunk__37082 = G__37145;
count__37083 = G__37146;
i__37084 = G__37147;
continue;
} else {
var role = cljs.core.first.call(null,seq__37081__$1);
var temp__4657__auto___37148__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37148__$2)){
var spec_37149 = temp__4657__auto___37148__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_37149));
} else {
}

var G__37150 = cljs.core.next.call(null,seq__37081__$1);
var G__37151 = null;
var G__37152 = (0);
var G__37153 = (0);
seq__37081 = G__37150;
chunk__37082 = G__37151;
count__37083 = G__37152;
i__37084 = G__37153;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map