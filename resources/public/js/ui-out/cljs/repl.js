// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37037){
var map__37062 = p__37037;
var map__37062__$1 = ((((!((map__37062 == null)))?((((map__37062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37062):map__37062);
var m = map__37062__$1;
var n = cljs.core.get.call(null,map__37062__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37062__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37064_37086 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37065_37087 = null;
var count__37066_37088 = (0);
var i__37067_37089 = (0);
while(true){
if((i__37067_37089 < count__37066_37088)){
var f_37090 = cljs.core._nth.call(null,chunk__37065_37087,i__37067_37089);
cljs.core.println.call(null,"  ",f_37090);

var G__37091 = seq__37064_37086;
var G__37092 = chunk__37065_37087;
var G__37093 = count__37066_37088;
var G__37094 = (i__37067_37089 + (1));
seq__37064_37086 = G__37091;
chunk__37065_37087 = G__37092;
count__37066_37088 = G__37093;
i__37067_37089 = G__37094;
continue;
} else {
var temp__4657__auto___37095 = cljs.core.seq.call(null,seq__37064_37086);
if(temp__4657__auto___37095){
var seq__37064_37096__$1 = temp__4657__auto___37095;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37064_37096__$1)){
var c__27493__auto___37097 = cljs.core.chunk_first.call(null,seq__37064_37096__$1);
var G__37098 = cljs.core.chunk_rest.call(null,seq__37064_37096__$1);
var G__37099 = c__27493__auto___37097;
var G__37100 = cljs.core.count.call(null,c__27493__auto___37097);
var G__37101 = (0);
seq__37064_37086 = G__37098;
chunk__37065_37087 = G__37099;
count__37066_37088 = G__37100;
i__37067_37089 = G__37101;
continue;
} else {
var f_37102 = cljs.core.first.call(null,seq__37064_37096__$1);
cljs.core.println.call(null,"  ",f_37102);

var G__37103 = cljs.core.next.call(null,seq__37064_37096__$1);
var G__37104 = null;
var G__37105 = (0);
var G__37106 = (0);
seq__37064_37086 = G__37103;
chunk__37065_37087 = G__37104;
count__37066_37088 = G__37105;
i__37067_37089 = G__37106;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37107 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26674__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26674__auto__)){
return or__26674__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37107);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37107)))?cljs.core.second.call(null,arglists_37107):arglists_37107));
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
var seq__37068_37108 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37069_37109 = null;
var count__37070_37110 = (0);
var i__37071_37111 = (0);
while(true){
if((i__37071_37111 < count__37070_37110)){
var vec__37072_37112 = cljs.core._nth.call(null,chunk__37069_37109,i__37071_37111);
var name_37113 = cljs.core.nth.call(null,vec__37072_37112,(0),null);
var map__37075_37114 = cljs.core.nth.call(null,vec__37072_37112,(1),null);
var map__37075_37115__$1 = ((((!((map__37075_37114 == null)))?((((map__37075_37114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37075_37114.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37075_37114):map__37075_37114);
var doc_37116 = cljs.core.get.call(null,map__37075_37115__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37117 = cljs.core.get.call(null,map__37075_37115__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37113);

cljs.core.println.call(null," ",arglists_37117);

if(cljs.core.truth_(doc_37116)){
cljs.core.println.call(null," ",doc_37116);
} else {
}

var G__37118 = seq__37068_37108;
var G__37119 = chunk__37069_37109;
var G__37120 = count__37070_37110;
var G__37121 = (i__37071_37111 + (1));
seq__37068_37108 = G__37118;
chunk__37069_37109 = G__37119;
count__37070_37110 = G__37120;
i__37071_37111 = G__37121;
continue;
} else {
var temp__4657__auto___37122 = cljs.core.seq.call(null,seq__37068_37108);
if(temp__4657__auto___37122){
var seq__37068_37123__$1 = temp__4657__auto___37122;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37068_37123__$1)){
var c__27493__auto___37124 = cljs.core.chunk_first.call(null,seq__37068_37123__$1);
var G__37125 = cljs.core.chunk_rest.call(null,seq__37068_37123__$1);
var G__37126 = c__27493__auto___37124;
var G__37127 = cljs.core.count.call(null,c__27493__auto___37124);
var G__37128 = (0);
seq__37068_37108 = G__37125;
chunk__37069_37109 = G__37126;
count__37070_37110 = G__37127;
i__37071_37111 = G__37128;
continue;
} else {
var vec__37077_37129 = cljs.core.first.call(null,seq__37068_37123__$1);
var name_37130 = cljs.core.nth.call(null,vec__37077_37129,(0),null);
var map__37080_37131 = cljs.core.nth.call(null,vec__37077_37129,(1),null);
var map__37080_37132__$1 = ((((!((map__37080_37131 == null)))?((((map__37080_37131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37080_37131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37080_37131):map__37080_37131);
var doc_37133 = cljs.core.get.call(null,map__37080_37132__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37134 = cljs.core.get.call(null,map__37080_37132__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37130);

cljs.core.println.call(null," ",arglists_37134);

if(cljs.core.truth_(doc_37133)){
cljs.core.println.call(null," ",doc_37133);
} else {
}

var G__37135 = cljs.core.next.call(null,seq__37068_37123__$1);
var G__37136 = null;
var G__37137 = (0);
var G__37138 = (0);
seq__37068_37108 = G__37135;
chunk__37069_37109 = G__37136;
count__37070_37110 = G__37137;
i__37071_37111 = G__37138;
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

var seq__37082 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37083 = null;
var count__37084 = (0);
var i__37085 = (0);
while(true){
if((i__37085 < count__37084)){
var role = cljs.core._nth.call(null,chunk__37083,i__37085);
var temp__4657__auto___37139__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37139__$1)){
var spec_37140 = temp__4657__auto___37139__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_37140));
} else {
}

var G__37141 = seq__37082;
var G__37142 = chunk__37083;
var G__37143 = count__37084;
var G__37144 = (i__37085 + (1));
seq__37082 = G__37141;
chunk__37083 = G__37142;
count__37084 = G__37143;
i__37085 = G__37144;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37082);
if(temp__4657__auto____$1){
var seq__37082__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37082__$1)){
var c__27493__auto__ = cljs.core.chunk_first.call(null,seq__37082__$1);
var G__37145 = cljs.core.chunk_rest.call(null,seq__37082__$1);
var G__37146 = c__27493__auto__;
var G__37147 = cljs.core.count.call(null,c__27493__auto__);
var G__37148 = (0);
seq__37082 = G__37145;
chunk__37083 = G__37146;
count__37084 = G__37147;
i__37085 = G__37148;
continue;
} else {
var role = cljs.core.first.call(null,seq__37082__$1);
var temp__4657__auto___37149__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37149__$2)){
var spec_37150 = temp__4657__auto___37149__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_37150));
} else {
}

var G__37151 = cljs.core.next.call(null,seq__37082__$1);
var G__37152 = null;
var G__37153 = (0);
var G__37154 = (0);
seq__37082 = G__37151;
chunk__37083 = G__37152;
count__37084 = G__37153;
i__37085 = G__37154;
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