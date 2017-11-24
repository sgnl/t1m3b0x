// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36817){
var map__36842 = p__36817;
var map__36842__$1 = ((((!((map__36842 == null)))?((((map__36842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36842):map__36842);
var m = map__36842__$1;
var n = cljs.core.get.call(null,map__36842__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36842__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36844_36866 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36845_36867 = null;
var count__36846_36868 = (0);
var i__36847_36869 = (0);
while(true){
if((i__36847_36869 < count__36846_36868)){
var f_36870 = cljs.core._nth.call(null,chunk__36845_36867,i__36847_36869);
cljs.core.println.call(null,"  ",f_36870);

var G__36871 = seq__36844_36866;
var G__36872 = chunk__36845_36867;
var G__36873 = count__36846_36868;
var G__36874 = (i__36847_36869 + (1));
seq__36844_36866 = G__36871;
chunk__36845_36867 = G__36872;
count__36846_36868 = G__36873;
i__36847_36869 = G__36874;
continue;
} else {
var temp__4657__auto___36875 = cljs.core.seq.call(null,seq__36844_36866);
if(temp__4657__auto___36875){
var seq__36844_36876__$1 = temp__4657__auto___36875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36844_36876__$1)){
var c__27274__auto___36877 = cljs.core.chunk_first.call(null,seq__36844_36876__$1);
var G__36878 = cljs.core.chunk_rest.call(null,seq__36844_36876__$1);
var G__36879 = c__27274__auto___36877;
var G__36880 = cljs.core.count.call(null,c__27274__auto___36877);
var G__36881 = (0);
seq__36844_36866 = G__36878;
chunk__36845_36867 = G__36879;
count__36846_36868 = G__36880;
i__36847_36869 = G__36881;
continue;
} else {
var f_36882 = cljs.core.first.call(null,seq__36844_36876__$1);
cljs.core.println.call(null,"  ",f_36882);

var G__36883 = cljs.core.next.call(null,seq__36844_36876__$1);
var G__36884 = null;
var G__36885 = (0);
var G__36886 = (0);
seq__36844_36866 = G__36883;
chunk__36845_36867 = G__36884;
count__36846_36868 = G__36885;
i__36847_36869 = G__36886;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36887 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26455__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26455__auto__)){
return or__26455__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36887);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36887)))?cljs.core.second.call(null,arglists_36887):arglists_36887));
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
var seq__36848_36888 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36849_36889 = null;
var count__36850_36890 = (0);
var i__36851_36891 = (0);
while(true){
if((i__36851_36891 < count__36850_36890)){
var vec__36852_36892 = cljs.core._nth.call(null,chunk__36849_36889,i__36851_36891);
var name_36893 = cljs.core.nth.call(null,vec__36852_36892,(0),null);
var map__36855_36894 = cljs.core.nth.call(null,vec__36852_36892,(1),null);
var map__36855_36895__$1 = ((((!((map__36855_36894 == null)))?((((map__36855_36894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36855_36894.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36855_36894):map__36855_36894);
var doc_36896 = cljs.core.get.call(null,map__36855_36895__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36897 = cljs.core.get.call(null,map__36855_36895__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36893);

cljs.core.println.call(null," ",arglists_36897);

if(cljs.core.truth_(doc_36896)){
cljs.core.println.call(null," ",doc_36896);
} else {
}

var G__36898 = seq__36848_36888;
var G__36899 = chunk__36849_36889;
var G__36900 = count__36850_36890;
var G__36901 = (i__36851_36891 + (1));
seq__36848_36888 = G__36898;
chunk__36849_36889 = G__36899;
count__36850_36890 = G__36900;
i__36851_36891 = G__36901;
continue;
} else {
var temp__4657__auto___36902 = cljs.core.seq.call(null,seq__36848_36888);
if(temp__4657__auto___36902){
var seq__36848_36903__$1 = temp__4657__auto___36902;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36848_36903__$1)){
var c__27274__auto___36904 = cljs.core.chunk_first.call(null,seq__36848_36903__$1);
var G__36905 = cljs.core.chunk_rest.call(null,seq__36848_36903__$1);
var G__36906 = c__27274__auto___36904;
var G__36907 = cljs.core.count.call(null,c__27274__auto___36904);
var G__36908 = (0);
seq__36848_36888 = G__36905;
chunk__36849_36889 = G__36906;
count__36850_36890 = G__36907;
i__36851_36891 = G__36908;
continue;
} else {
var vec__36857_36909 = cljs.core.first.call(null,seq__36848_36903__$1);
var name_36910 = cljs.core.nth.call(null,vec__36857_36909,(0),null);
var map__36860_36911 = cljs.core.nth.call(null,vec__36857_36909,(1),null);
var map__36860_36912__$1 = ((((!((map__36860_36911 == null)))?((((map__36860_36911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36860_36911.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36860_36911):map__36860_36911);
var doc_36913 = cljs.core.get.call(null,map__36860_36912__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36914 = cljs.core.get.call(null,map__36860_36912__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36910);

cljs.core.println.call(null," ",arglists_36914);

if(cljs.core.truth_(doc_36913)){
cljs.core.println.call(null," ",doc_36913);
} else {
}

var G__36915 = cljs.core.next.call(null,seq__36848_36903__$1);
var G__36916 = null;
var G__36917 = (0);
var G__36918 = (0);
seq__36848_36888 = G__36915;
chunk__36849_36889 = G__36916;
count__36850_36890 = G__36917;
i__36851_36891 = G__36918;
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

var seq__36862 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36863 = null;
var count__36864 = (0);
var i__36865 = (0);
while(true){
if((i__36865 < count__36864)){
var role = cljs.core._nth.call(null,chunk__36863,i__36865);
var temp__4657__auto___36919__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36919__$1)){
var spec_36920 = temp__4657__auto___36919__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_36920));
} else {
}

var G__36921 = seq__36862;
var G__36922 = chunk__36863;
var G__36923 = count__36864;
var G__36924 = (i__36865 + (1));
seq__36862 = G__36921;
chunk__36863 = G__36922;
count__36864 = G__36923;
i__36865 = G__36924;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36862);
if(temp__4657__auto____$1){
var seq__36862__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36862__$1)){
var c__27274__auto__ = cljs.core.chunk_first.call(null,seq__36862__$1);
var G__36925 = cljs.core.chunk_rest.call(null,seq__36862__$1);
var G__36926 = c__27274__auto__;
var G__36927 = cljs.core.count.call(null,c__27274__auto__);
var G__36928 = (0);
seq__36862 = G__36925;
chunk__36863 = G__36926;
count__36864 = G__36927;
i__36865 = G__36928;
continue;
} else {
var role = cljs.core.first.call(null,seq__36862__$1);
var temp__4657__auto___36929__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36929__$2)){
var spec_36930 = temp__4657__auto___36929__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_36930));
} else {
}

var G__36931 = cljs.core.next.call(null,seq__36862__$1);
var G__36932 = null;
var G__36933 = (0);
var G__36934 = (0);
seq__36862 = G__36931;
chunk__36863 = G__36932;
count__36864 = G__36933;
i__36865 = G__36934;
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