// Compiled by ClojureScript 1.9.542 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__26455__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__26455__auto__){
return or__26455__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__26455__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__26455__auto__)){
return or__26455__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34402_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34402_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34407 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34408 = null;
var count__34409 = (0);
var i__34410 = (0);
while(true){
if((i__34410 < count__34409)){
var n = cljs.core._nth.call(null,chunk__34408,i__34410);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34411 = seq__34407;
var G__34412 = chunk__34408;
var G__34413 = count__34409;
var G__34414 = (i__34410 + (1));
seq__34407 = G__34411;
chunk__34408 = G__34412;
count__34409 = G__34413;
i__34410 = G__34414;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34407);
if(temp__4657__auto__){
var seq__34407__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34407__$1)){
var c__27274__auto__ = cljs.core.chunk_first.call(null,seq__34407__$1);
var G__34415 = cljs.core.chunk_rest.call(null,seq__34407__$1);
var G__34416 = c__27274__auto__;
var G__34417 = cljs.core.count.call(null,c__27274__auto__);
var G__34418 = (0);
seq__34407 = G__34415;
chunk__34408 = G__34416;
count__34409 = G__34417;
i__34410 = G__34418;
continue;
} else {
var n = cljs.core.first.call(null,seq__34407__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34419 = cljs.core.next.call(null,seq__34407__$1);
var G__34420 = null;
var G__34421 = (0);
var G__34422 = (0);
seq__34407 = G__34419;
chunk__34408 = G__34420;
count__34409 = G__34421;
i__34410 = G__34422;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34473_34484 = cljs.core.seq.call(null,deps);
var chunk__34474_34485 = null;
var count__34475_34486 = (0);
var i__34476_34487 = (0);
while(true){
if((i__34476_34487 < count__34475_34486)){
var dep_34488 = cljs.core._nth.call(null,chunk__34474_34485,i__34476_34487);
topo_sort_helper_STAR_.call(null,dep_34488,(depth + (1)),state);

var G__34489 = seq__34473_34484;
var G__34490 = chunk__34474_34485;
var G__34491 = count__34475_34486;
var G__34492 = (i__34476_34487 + (1));
seq__34473_34484 = G__34489;
chunk__34474_34485 = G__34490;
count__34475_34486 = G__34491;
i__34476_34487 = G__34492;
continue;
} else {
var temp__4657__auto___34493 = cljs.core.seq.call(null,seq__34473_34484);
if(temp__4657__auto___34493){
var seq__34473_34494__$1 = temp__4657__auto___34493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34473_34494__$1)){
var c__27274__auto___34495 = cljs.core.chunk_first.call(null,seq__34473_34494__$1);
var G__34496 = cljs.core.chunk_rest.call(null,seq__34473_34494__$1);
var G__34497 = c__27274__auto___34495;
var G__34498 = cljs.core.count.call(null,c__27274__auto___34495);
var G__34499 = (0);
seq__34473_34484 = G__34496;
chunk__34474_34485 = G__34497;
count__34475_34486 = G__34498;
i__34476_34487 = G__34499;
continue;
} else {
var dep_34500 = cljs.core.first.call(null,seq__34473_34494__$1);
topo_sort_helper_STAR_.call(null,dep_34500,(depth + (1)),state);

var G__34501 = cljs.core.next.call(null,seq__34473_34494__$1);
var G__34502 = null;
var G__34503 = (0);
var G__34504 = (0);
seq__34473_34484 = G__34501;
chunk__34474_34485 = G__34502;
count__34475_34486 = G__34503;
i__34476_34487 = G__34504;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34477){
var vec__34481 = p__34477;
var seq__34482 = cljs.core.seq.call(null,vec__34481);
var first__34483 = cljs.core.first.call(null,seq__34482);
var seq__34482__$1 = cljs.core.next.call(null,seq__34482);
var x = first__34483;
var xs = seq__34482__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34481,seq__34482,first__34483,seq__34482__$1,x,xs,get_deps__$1){
return (function (p1__34423_SHARP_){
return clojure.set.difference.call(null,p1__34423_SHARP_,x);
});})(vec__34481,seq__34482,first__34483,seq__34482__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34517 = cljs.core.seq.call(null,provides);
var chunk__34518 = null;
var count__34519 = (0);
var i__34520 = (0);
while(true){
if((i__34520 < count__34519)){
var prov = cljs.core._nth.call(null,chunk__34518,i__34520);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34521_34529 = cljs.core.seq.call(null,requires);
var chunk__34522_34530 = null;
var count__34523_34531 = (0);
var i__34524_34532 = (0);
while(true){
if((i__34524_34532 < count__34523_34531)){
var req_34533 = cljs.core._nth.call(null,chunk__34522_34530,i__34524_34532);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34533,prov);

var G__34534 = seq__34521_34529;
var G__34535 = chunk__34522_34530;
var G__34536 = count__34523_34531;
var G__34537 = (i__34524_34532 + (1));
seq__34521_34529 = G__34534;
chunk__34522_34530 = G__34535;
count__34523_34531 = G__34536;
i__34524_34532 = G__34537;
continue;
} else {
var temp__4657__auto___34538 = cljs.core.seq.call(null,seq__34521_34529);
if(temp__4657__auto___34538){
var seq__34521_34539__$1 = temp__4657__auto___34538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34521_34539__$1)){
var c__27274__auto___34540 = cljs.core.chunk_first.call(null,seq__34521_34539__$1);
var G__34541 = cljs.core.chunk_rest.call(null,seq__34521_34539__$1);
var G__34542 = c__27274__auto___34540;
var G__34543 = cljs.core.count.call(null,c__27274__auto___34540);
var G__34544 = (0);
seq__34521_34529 = G__34541;
chunk__34522_34530 = G__34542;
count__34523_34531 = G__34543;
i__34524_34532 = G__34544;
continue;
} else {
var req_34545 = cljs.core.first.call(null,seq__34521_34539__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34545,prov);

var G__34546 = cljs.core.next.call(null,seq__34521_34539__$1);
var G__34547 = null;
var G__34548 = (0);
var G__34549 = (0);
seq__34521_34529 = G__34546;
chunk__34522_34530 = G__34547;
count__34523_34531 = G__34548;
i__34524_34532 = G__34549;
continue;
}
} else {
}
}
break;
}

var G__34550 = seq__34517;
var G__34551 = chunk__34518;
var G__34552 = count__34519;
var G__34553 = (i__34520 + (1));
seq__34517 = G__34550;
chunk__34518 = G__34551;
count__34519 = G__34552;
i__34520 = G__34553;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34517);
if(temp__4657__auto__){
var seq__34517__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34517__$1)){
var c__27274__auto__ = cljs.core.chunk_first.call(null,seq__34517__$1);
var G__34554 = cljs.core.chunk_rest.call(null,seq__34517__$1);
var G__34555 = c__27274__auto__;
var G__34556 = cljs.core.count.call(null,c__27274__auto__);
var G__34557 = (0);
seq__34517 = G__34554;
chunk__34518 = G__34555;
count__34519 = G__34556;
i__34520 = G__34557;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34517__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34525_34558 = cljs.core.seq.call(null,requires);
var chunk__34526_34559 = null;
var count__34527_34560 = (0);
var i__34528_34561 = (0);
while(true){
if((i__34528_34561 < count__34527_34560)){
var req_34562 = cljs.core._nth.call(null,chunk__34526_34559,i__34528_34561);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34562,prov);

var G__34563 = seq__34525_34558;
var G__34564 = chunk__34526_34559;
var G__34565 = count__34527_34560;
var G__34566 = (i__34528_34561 + (1));
seq__34525_34558 = G__34563;
chunk__34526_34559 = G__34564;
count__34527_34560 = G__34565;
i__34528_34561 = G__34566;
continue;
} else {
var temp__4657__auto___34567__$1 = cljs.core.seq.call(null,seq__34525_34558);
if(temp__4657__auto___34567__$1){
var seq__34525_34568__$1 = temp__4657__auto___34567__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34525_34568__$1)){
var c__27274__auto___34569 = cljs.core.chunk_first.call(null,seq__34525_34568__$1);
var G__34570 = cljs.core.chunk_rest.call(null,seq__34525_34568__$1);
var G__34571 = c__27274__auto___34569;
var G__34572 = cljs.core.count.call(null,c__27274__auto___34569);
var G__34573 = (0);
seq__34525_34558 = G__34570;
chunk__34526_34559 = G__34571;
count__34527_34560 = G__34572;
i__34528_34561 = G__34573;
continue;
} else {
var req_34574 = cljs.core.first.call(null,seq__34525_34568__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34574,prov);

var G__34575 = cljs.core.next.call(null,seq__34525_34568__$1);
var G__34576 = null;
var G__34577 = (0);
var G__34578 = (0);
seq__34525_34558 = G__34575;
chunk__34526_34559 = G__34576;
count__34527_34560 = G__34577;
i__34528_34561 = G__34578;
continue;
}
} else {
}
}
break;
}

var G__34579 = cljs.core.next.call(null,seq__34517__$1);
var G__34580 = null;
var G__34581 = (0);
var G__34582 = (0);
seq__34517 = G__34579;
chunk__34518 = G__34580;
count__34519 = G__34581;
i__34520 = G__34582;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34587_34591 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34588_34592 = null;
var count__34589_34593 = (0);
var i__34590_34594 = (0);
while(true){
if((i__34590_34594 < count__34589_34593)){
var ns_34595 = cljs.core._nth.call(null,chunk__34588_34592,i__34590_34594);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34595);

var G__34596 = seq__34587_34591;
var G__34597 = chunk__34588_34592;
var G__34598 = count__34589_34593;
var G__34599 = (i__34590_34594 + (1));
seq__34587_34591 = G__34596;
chunk__34588_34592 = G__34597;
count__34589_34593 = G__34598;
i__34590_34594 = G__34599;
continue;
} else {
var temp__4657__auto___34600 = cljs.core.seq.call(null,seq__34587_34591);
if(temp__4657__auto___34600){
var seq__34587_34601__$1 = temp__4657__auto___34600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34587_34601__$1)){
var c__27274__auto___34602 = cljs.core.chunk_first.call(null,seq__34587_34601__$1);
var G__34603 = cljs.core.chunk_rest.call(null,seq__34587_34601__$1);
var G__34604 = c__27274__auto___34602;
var G__34605 = cljs.core.count.call(null,c__27274__auto___34602);
var G__34606 = (0);
seq__34587_34591 = G__34603;
chunk__34588_34592 = G__34604;
count__34589_34593 = G__34605;
i__34590_34594 = G__34606;
continue;
} else {
var ns_34607 = cljs.core.first.call(null,seq__34587_34601__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34607);

var G__34608 = cljs.core.next.call(null,seq__34587_34601__$1);
var G__34609 = null;
var G__34610 = (0);
var G__34611 = (0);
seq__34587_34591 = G__34608;
chunk__34588_34592 = G__34609;
count__34589_34593 = G__34610;
i__34590_34594 = G__34611;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__26455__auto__ = goog.require__;
if(cljs.core.truth_(or__26455__auto__)){
return or__26455__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34612__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34612 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34613__i = 0, G__34613__a = new Array(arguments.length -  0);
while (G__34613__i < G__34613__a.length) {G__34613__a[G__34613__i] = arguments[G__34613__i + 0]; ++G__34613__i;}
  args = new cljs.core.IndexedSeq(G__34613__a,0,null);
} 
return G__34612__delegate.call(this,args);};
G__34612.cljs$lang$maxFixedArity = 0;
G__34612.cljs$lang$applyTo = (function (arglist__34614){
var args = cljs.core.seq(arglist__34614);
return G__34612__delegate(args);
});
G__34612.cljs$core$IFn$_invoke$arity$variadic = G__34612__delegate;
return G__34612;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34615 = cljs.core._EQ_;
var expr__34616 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34615.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34616))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34615,expr__34616){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34615,expr__34616))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34615,expr__34616){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34618){if((e34618 instanceof Error)){
var e = e34618;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34618;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34615,expr__34616))
} else {
if(cljs.core.truth_(pred__34615.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34616))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34615.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__34616))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34615.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34616))){
return ((function (pred__34615,expr__34616){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34619){if((e34619 instanceof Error)){
var e = e34619;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34619;

}
}})());
});
;})(pred__34615,expr__34616))
} else {
return ((function (pred__34615,expr__34616){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34615,expr__34616))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34620,callback){
var map__34623 = p__34620;
var map__34623__$1 = ((((!((map__34623 == null)))?((((map__34623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34623.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34623):map__34623);
var file_msg = map__34623__$1;
var request_url = cljs.core.get.call(null,map__34623__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34623,map__34623__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34623,map__34623__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29625__auto__){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (c__29625__auto__){
return (function (state_34647){
var state_val_34648 = (state_34647[(1)]);
if((state_val_34648 === (7))){
var inst_34643 = (state_34647[(2)]);
var state_34647__$1 = state_34647;
var statearr_34649_34669 = state_34647__$1;
(statearr_34649_34669[(2)] = inst_34643);

(statearr_34649_34669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (1))){
var state_34647__$1 = state_34647;
var statearr_34650_34670 = state_34647__$1;
(statearr_34650_34670[(2)] = null);

(statearr_34650_34670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (4))){
var inst_34627 = (state_34647[(7)]);
var inst_34627__$1 = (state_34647[(2)]);
var state_34647__$1 = (function (){var statearr_34651 = state_34647;
(statearr_34651[(7)] = inst_34627__$1);

return statearr_34651;
})();
if(cljs.core.truth_(inst_34627__$1)){
var statearr_34652_34671 = state_34647__$1;
(statearr_34652_34671[(1)] = (5));

} else {
var statearr_34653_34672 = state_34647__$1;
(statearr_34653_34672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (6))){
var state_34647__$1 = state_34647;
var statearr_34654_34673 = state_34647__$1;
(statearr_34654_34673[(2)] = null);

(statearr_34654_34673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (3))){
var inst_34645 = (state_34647[(2)]);
var state_34647__$1 = state_34647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34647__$1,inst_34645);
} else {
if((state_val_34648 === (2))){
var state_34647__$1 = state_34647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34647__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34648 === (11))){
var inst_34639 = (state_34647[(2)]);
var state_34647__$1 = (function (){var statearr_34655 = state_34647;
(statearr_34655[(8)] = inst_34639);

return statearr_34655;
})();
var statearr_34656_34674 = state_34647__$1;
(statearr_34656_34674[(2)] = null);

(statearr_34656_34674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (9))){
var inst_34631 = (state_34647[(9)]);
var inst_34633 = (state_34647[(10)]);
var inst_34635 = inst_34633.call(null,inst_34631);
var state_34647__$1 = state_34647;
var statearr_34657_34675 = state_34647__$1;
(statearr_34657_34675[(2)] = inst_34635);

(statearr_34657_34675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (5))){
var inst_34627 = (state_34647[(7)]);
var inst_34629 = figwheel.client.file_reloading.blocking_load.call(null,inst_34627);
var state_34647__$1 = state_34647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34647__$1,(8),inst_34629);
} else {
if((state_val_34648 === (10))){
var inst_34631 = (state_34647[(9)]);
var inst_34637 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34631);
var state_34647__$1 = state_34647;
var statearr_34658_34676 = state_34647__$1;
(statearr_34658_34676[(2)] = inst_34637);

(statearr_34658_34676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (8))){
var inst_34633 = (state_34647[(10)]);
var inst_34627 = (state_34647[(7)]);
var inst_34631 = (state_34647[(2)]);
var inst_34632 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34633__$1 = cljs.core.get.call(null,inst_34632,inst_34627);
var state_34647__$1 = (function (){var statearr_34659 = state_34647;
(statearr_34659[(9)] = inst_34631);

(statearr_34659[(10)] = inst_34633__$1);

return statearr_34659;
})();
if(cljs.core.truth_(inst_34633__$1)){
var statearr_34660_34677 = state_34647__$1;
(statearr_34660_34677[(1)] = (9));

} else {
var statearr_34661_34678 = state_34647__$1;
(statearr_34661_34678[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29625__auto__))
;
return ((function (switch__29610__auto__,c__29625__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29611__auto__ = null;
var figwheel$client$file_reloading$state_machine__29611__auto____0 = (function (){
var statearr_34665 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34665[(0)] = figwheel$client$file_reloading$state_machine__29611__auto__);

(statearr_34665[(1)] = (1));

return statearr_34665;
});
var figwheel$client$file_reloading$state_machine__29611__auto____1 = (function (state_34647){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_34647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e34666){if((e34666 instanceof Object)){
var ex__29614__auto__ = e34666;
var statearr_34667_34679 = state_34647;
(statearr_34667_34679[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34680 = state_34647;
state_34647 = G__34680;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29611__auto__ = function(state_34647){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29611__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29611__auto____1.call(this,state_34647);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29611__auto____0;
figwheel$client$file_reloading$state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29611__auto____1;
return figwheel$client$file_reloading$state_machine__29611__auto__;
})()
;})(switch__29610__auto__,c__29625__auto__))
})();
var state__29627__auto__ = (function (){var statearr_34668 = f__29626__auto__.call(null);
(statearr_34668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto__);

return statearr_34668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(c__29625__auto__))
);

return c__29625__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34681,callback){
var map__34684 = p__34681;
var map__34684__$1 = ((((!((map__34684 == null)))?((((map__34684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34684):map__34684);
var file_msg = map__34684__$1;
var namespace = cljs.core.get.call(null,map__34684__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34684,map__34684__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34684,map__34684__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34686){
var map__34689 = p__34686;
var map__34689__$1 = ((((!((map__34689 == null)))?((((map__34689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34689.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34689):map__34689);
var file_msg = map__34689__$1;
var namespace = cljs.core.get.call(null,map__34689__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34691){
var map__34694 = p__34691;
var map__34694__$1 = ((((!((map__34694 == null)))?((((map__34694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34694.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34694):map__34694);
var file_msg = map__34694__$1;
var namespace = cljs.core.get.call(null,map__34694__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__26443__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__26443__auto__){
var or__26455__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26455__auto__)){
return or__26455__auto__;
} else {
var or__26455__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26455__auto____$1)){
return or__26455__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__26443__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34696,callback){
var map__34699 = p__34696;
var map__34699__$1 = ((((!((map__34699 == null)))?((((map__34699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34699.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34699):map__34699);
var file_msg = map__34699__$1;
var request_url = cljs.core.get.call(null,map__34699__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34699__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29625__auto___34803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29625__auto___34803,out){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (c__29625__auto___34803,out){
return (function (state_34785){
var state_val_34786 = (state_34785[(1)]);
if((state_val_34786 === (1))){
var inst_34759 = cljs.core.seq.call(null,files);
var inst_34760 = cljs.core.first.call(null,inst_34759);
var inst_34761 = cljs.core.next.call(null,inst_34759);
var inst_34762 = files;
var state_34785__$1 = (function (){var statearr_34787 = state_34785;
(statearr_34787[(7)] = inst_34760);

(statearr_34787[(8)] = inst_34761);

(statearr_34787[(9)] = inst_34762);

return statearr_34787;
})();
var statearr_34788_34804 = state_34785__$1;
(statearr_34788_34804[(2)] = null);

(statearr_34788_34804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (2))){
var inst_34768 = (state_34785[(10)]);
var inst_34762 = (state_34785[(9)]);
var inst_34767 = cljs.core.seq.call(null,inst_34762);
var inst_34768__$1 = cljs.core.first.call(null,inst_34767);
var inst_34769 = cljs.core.next.call(null,inst_34767);
var inst_34770 = (inst_34768__$1 == null);
var inst_34771 = cljs.core.not.call(null,inst_34770);
var state_34785__$1 = (function (){var statearr_34789 = state_34785;
(statearr_34789[(10)] = inst_34768__$1);

(statearr_34789[(11)] = inst_34769);

return statearr_34789;
})();
if(inst_34771){
var statearr_34790_34805 = state_34785__$1;
(statearr_34790_34805[(1)] = (4));

} else {
var statearr_34791_34806 = state_34785__$1;
(statearr_34791_34806[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (3))){
var inst_34783 = (state_34785[(2)]);
var state_34785__$1 = state_34785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34785__$1,inst_34783);
} else {
if((state_val_34786 === (4))){
var inst_34768 = (state_34785[(10)]);
var inst_34773 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34768);
var state_34785__$1 = state_34785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34785__$1,(7),inst_34773);
} else {
if((state_val_34786 === (5))){
var inst_34779 = cljs.core.async.close_BANG_.call(null,out);
var state_34785__$1 = state_34785;
var statearr_34792_34807 = state_34785__$1;
(statearr_34792_34807[(2)] = inst_34779);

(statearr_34792_34807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (6))){
var inst_34781 = (state_34785[(2)]);
var state_34785__$1 = state_34785;
var statearr_34793_34808 = state_34785__$1;
(statearr_34793_34808[(2)] = inst_34781);

(statearr_34793_34808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (7))){
var inst_34769 = (state_34785[(11)]);
var inst_34775 = (state_34785[(2)]);
var inst_34776 = cljs.core.async.put_BANG_.call(null,out,inst_34775);
var inst_34762 = inst_34769;
var state_34785__$1 = (function (){var statearr_34794 = state_34785;
(statearr_34794[(12)] = inst_34776);

(statearr_34794[(9)] = inst_34762);

return statearr_34794;
})();
var statearr_34795_34809 = state_34785__$1;
(statearr_34795_34809[(2)] = null);

(statearr_34795_34809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__29625__auto___34803,out))
;
return ((function (switch__29610__auto__,c__29625__auto___34803,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29611__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29611__auto____0 = (function (){
var statearr_34799 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34799[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29611__auto__);

(statearr_34799[(1)] = (1));

return statearr_34799;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29611__auto____1 = (function (state_34785){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_34785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e34800){if((e34800 instanceof Object)){
var ex__29614__auto__ = e34800;
var statearr_34801_34810 = state_34785;
(statearr_34801_34810[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34811 = state_34785;
state_34785 = G__34811;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29611__auto__ = function(state_34785){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29611__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29611__auto____1.call(this,state_34785);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29611__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29611__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29611__auto__;
})()
;})(switch__29610__auto__,c__29625__auto___34803,out))
})();
var state__29627__auto__ = (function (){var statearr_34802 = f__29626__auto__.call(null);
(statearr_34802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto___34803);

return statearr_34802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(c__29625__auto___34803,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34812,opts){
var map__34816 = p__34812;
var map__34816__$1 = ((((!((map__34816 == null)))?((((map__34816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34816):map__34816);
var eval_body = cljs.core.get.call(null,map__34816__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34816__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__26443__auto__ = eval_body;
if(cljs.core.truth_(and__26443__auto__)){
return typeof eval_body === 'string';
} else {
return and__26443__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34818){var e = e34818;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34819_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34819_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34828){
var vec__34829 = p__34828;
var k = cljs.core.nth.call(null,vec__34829,(0),null);
var v = cljs.core.nth.call(null,vec__34829,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34832){
var vec__34833 = p__34832;
var k = cljs.core.nth.call(null,vec__34833,(0),null);
var v = cljs.core.nth.call(null,vec__34833,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34839,p__34840){
var map__35088 = p__34839;
var map__35088__$1 = ((((!((map__35088 == null)))?((((map__35088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35088.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35088):map__35088);
var opts = map__35088__$1;
var before_jsload = cljs.core.get.call(null,map__35088__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35088__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35088__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35089 = p__34840;
var map__35089__$1 = ((((!((map__35089 == null)))?((((map__35089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35089):map__35089);
var msg = map__35089__$1;
var files = cljs.core.get.call(null,map__35089__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35089__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35089__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29625__auto__,map__35088,map__35088__$1,opts,before_jsload,on_jsload,reload_dependents,map__35089,map__35089__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (c__29625__auto__,map__35088,map__35088__$1,opts,before_jsload,on_jsload,reload_dependents,map__35089,map__35089__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35243){
var state_val_35244 = (state_35243[(1)]);
if((state_val_35244 === (7))){
var inst_35103 = (state_35243[(7)]);
var inst_35104 = (state_35243[(8)]);
var inst_35106 = (state_35243[(9)]);
var inst_35105 = (state_35243[(10)]);
var inst_35111 = cljs.core._nth.call(null,inst_35104,inst_35106);
var inst_35112 = figwheel.client.file_reloading.eval_body.call(null,inst_35111,opts);
var inst_35113 = (inst_35106 + (1));
var tmp35245 = inst_35103;
var tmp35246 = inst_35104;
var tmp35247 = inst_35105;
var inst_35103__$1 = tmp35245;
var inst_35104__$1 = tmp35246;
var inst_35105__$1 = tmp35247;
var inst_35106__$1 = inst_35113;
var state_35243__$1 = (function (){var statearr_35248 = state_35243;
(statearr_35248[(7)] = inst_35103__$1);

(statearr_35248[(8)] = inst_35104__$1);

(statearr_35248[(9)] = inst_35106__$1);

(statearr_35248[(11)] = inst_35112);

(statearr_35248[(10)] = inst_35105__$1);

return statearr_35248;
})();
var statearr_35249_35335 = state_35243__$1;
(statearr_35249_35335[(2)] = null);

(statearr_35249_35335[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (20))){
var inst_35146 = (state_35243[(12)]);
var inst_35154 = figwheel.client.file_reloading.sort_files.call(null,inst_35146);
var state_35243__$1 = state_35243;
var statearr_35250_35336 = state_35243__$1;
(statearr_35250_35336[(2)] = inst_35154);

(statearr_35250_35336[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (27))){
var state_35243__$1 = state_35243;
var statearr_35251_35337 = state_35243__$1;
(statearr_35251_35337[(2)] = null);

(statearr_35251_35337[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (1))){
var inst_35095 = (state_35243[(13)]);
var inst_35092 = before_jsload.call(null,files);
var inst_35093 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35094 = (function (){return ((function (inst_35095,inst_35092,inst_35093,state_val_35244,c__29625__auto__,map__35088,map__35088__$1,opts,before_jsload,on_jsload,reload_dependents,map__35089,map__35089__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34836_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34836_SHARP_);
});
;})(inst_35095,inst_35092,inst_35093,state_val_35244,c__29625__auto__,map__35088,map__35088__$1,opts,before_jsload,on_jsload,reload_dependents,map__35089,map__35089__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35095__$1 = cljs.core.filter.call(null,inst_35094,files);
var inst_35096 = cljs.core.not_empty.call(null,inst_35095__$1);
var state_35243__$1 = (function (){var statearr_35252 = state_35243;
(statearr_35252[(13)] = inst_35095__$1);

(statearr_35252[(14)] = inst_35093);

(statearr_35252[(15)] = inst_35092);

return statearr_35252;
})();
if(cljs.core.truth_(inst_35096)){
var statearr_35253_35338 = state_35243__$1;
(statearr_35253_35338[(1)] = (2));

} else {
var statearr_35254_35339 = state_35243__$1;
(statearr_35254_35339[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (24))){
var state_35243__$1 = state_35243;
var statearr_35255_35340 = state_35243__$1;
(statearr_35255_35340[(2)] = null);

(statearr_35255_35340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (39))){
var inst_35196 = (state_35243[(16)]);
var state_35243__$1 = state_35243;
var statearr_35256_35341 = state_35243__$1;
(statearr_35256_35341[(2)] = inst_35196);

(statearr_35256_35341[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (46))){
var inst_35238 = (state_35243[(2)]);
var state_35243__$1 = state_35243;
var statearr_35257_35342 = state_35243__$1;
(statearr_35257_35342[(2)] = inst_35238);

(statearr_35257_35342[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (4))){
var inst_35140 = (state_35243[(2)]);
var inst_35141 = cljs.core.List.EMPTY;
var inst_35142 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35141);
var inst_35143 = (function (){return ((function (inst_35140,inst_35141,inst_35142,state_val_35244,c__29625__auto__,map__35088,map__35088__$1,opts,before_jsload,on_jsload,reload_dependents,map__35089,map__35089__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34837_SHARP_){
var and__26443__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34837_SHARP_);
if(cljs.core.truth_(and__26443__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34837_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34837_SHARP_)));
} else {
return and__26443__auto__;
}
});
;})(inst_35140,inst_35141,inst_35142,state_val_35244,c__29625__auto__,map__35088,map__35088__$1,opts,before_jsload,on_jsload,reload_dependents,map__35089,map__35089__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35144 = cljs.core.filter.call(null,inst_35143,files);
var inst_35145 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35146 = cljs.core.concat.call(null,inst_35144,inst_35145);
var state_35243__$1 = (function (){var statearr_35258 = state_35243;
(statearr_35258[(17)] = inst_35142);

(statearr_35258[(12)] = inst_35146);

(statearr_35258[(18)] = inst_35140);

return statearr_35258;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35259_35343 = state_35243__$1;
(statearr_35259_35343[(1)] = (16));

} else {
var statearr_35260_35344 = state_35243__$1;
(statearr_35260_35344[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (15))){
var inst_35130 = (state_35243[(2)]);
var state_35243__$1 = state_35243;
var statearr_35261_35345 = state_35243__$1;
(statearr_35261_35345[(2)] = inst_35130);

(statearr_35261_35345[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (21))){
var inst_35156 = (state_35243[(19)]);
var inst_35156__$1 = (state_35243[(2)]);
var inst_35157 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35156__$1);
var state_35243__$1 = (function (){var statearr_35262 = state_35243;
(statearr_35262[(19)] = inst_35156__$1);

return statearr_35262;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35243__$1,(22),inst_35157);
} else {
if((state_val_35244 === (31))){
var inst_35241 = (state_35243[(2)]);
var state_35243__$1 = state_35243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35243__$1,inst_35241);
} else {
if((state_val_35244 === (32))){
var inst_35196 = (state_35243[(16)]);
var inst_35201 = inst_35196.cljs$lang$protocol_mask$partition0$;
var inst_35202 = (inst_35201 & (64));
var inst_35203 = inst_35196.cljs$core$ISeq$;
var inst_35204 = (cljs.core.PROTOCOL_SENTINEL === inst_35203);
var inst_35205 = (inst_35202) || (inst_35204);
var state_35243__$1 = state_35243;
if(cljs.core.truth_(inst_35205)){
var statearr_35263_35346 = state_35243__$1;
(statearr_35263_35346[(1)] = (35));

} else {
var statearr_35264_35347 = state_35243__$1;
(statearr_35264_35347[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (40))){
var inst_35218 = (state_35243[(20)]);
var inst_35217 = (state_35243[(2)]);
var inst_35218__$1 = cljs.core.get.call(null,inst_35217,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35219 = cljs.core.get.call(null,inst_35217,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35220 = cljs.core.not_empty.call(null,inst_35218__$1);
var state_35243__$1 = (function (){var statearr_35265 = state_35243;
(statearr_35265[(21)] = inst_35219);

(statearr_35265[(20)] = inst_35218__$1);

return statearr_35265;
})();
if(cljs.core.truth_(inst_35220)){
var statearr_35266_35348 = state_35243__$1;
(statearr_35266_35348[(1)] = (41));

} else {
var statearr_35267_35349 = state_35243__$1;
(statearr_35267_35349[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (33))){
var state_35243__$1 = state_35243;
var statearr_35268_35350 = state_35243__$1;
(statearr_35268_35350[(2)] = false);

(statearr_35268_35350[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (13))){
var inst_35116 = (state_35243[(22)]);
var inst_35120 = cljs.core.chunk_first.call(null,inst_35116);
var inst_35121 = cljs.core.chunk_rest.call(null,inst_35116);
var inst_35122 = cljs.core.count.call(null,inst_35120);
var inst_35103 = inst_35121;
var inst_35104 = inst_35120;
var inst_35105 = inst_35122;
var inst_35106 = (0);
var state_35243__$1 = (function (){var statearr_35269 = state_35243;
(statearr_35269[(7)] = inst_35103);

(statearr_35269[(8)] = inst_35104);

(statearr_35269[(9)] = inst_35106);

(statearr_35269[(10)] = inst_35105);

return statearr_35269;
})();
var statearr_35270_35351 = state_35243__$1;
(statearr_35270_35351[(2)] = null);

(statearr_35270_35351[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (22))){
var inst_35159 = (state_35243[(23)]);
var inst_35164 = (state_35243[(24)]);
var inst_35160 = (state_35243[(25)]);
var inst_35156 = (state_35243[(19)]);
var inst_35159__$1 = (state_35243[(2)]);
var inst_35160__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35159__$1);
var inst_35161 = (function (){var all_files = inst_35156;
var res_SINGLEQUOTE_ = inst_35159__$1;
var res = inst_35160__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35159,inst_35164,inst_35160,inst_35156,inst_35159__$1,inst_35160__$1,state_val_35244,c__29625__auto__,map__35088,map__35088__$1,opts,before_jsload,on_jsload,reload_dependents,map__35089,map__35089__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34838_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34838_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35159,inst_35164,inst_35160,inst_35156,inst_35159__$1,inst_35160__$1,state_val_35244,c__29625__auto__,map__35088,map__35088__$1,opts,before_jsload,on_jsload,reload_dependents,map__35089,map__35089__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35162 = cljs.core.filter.call(null,inst_35161,inst_35159__$1);
var inst_35163 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35164__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35163);
var inst_35165 = cljs.core.not_empty.call(null,inst_35164__$1);
var state_35243__$1 = (function (){var statearr_35271 = state_35243;
(statearr_35271[(23)] = inst_35159__$1);

(statearr_35271[(26)] = inst_35162);

(statearr_35271[(24)] = inst_35164__$1);

(statearr_35271[(25)] = inst_35160__$1);

return statearr_35271;
})();
if(cljs.core.truth_(inst_35165)){
var statearr_35272_35352 = state_35243__$1;
(statearr_35272_35352[(1)] = (23));

} else {
var statearr_35273_35353 = state_35243__$1;
(statearr_35273_35353[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (36))){
var state_35243__$1 = state_35243;
var statearr_35274_35354 = state_35243__$1;
(statearr_35274_35354[(2)] = false);

(statearr_35274_35354[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (41))){
var inst_35218 = (state_35243[(20)]);
var inst_35222 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35223 = cljs.core.map.call(null,inst_35222,inst_35218);
var inst_35224 = cljs.core.pr_str.call(null,inst_35223);
var inst_35225 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35224)].join('');
var inst_35226 = figwheel.client.utils.log.call(null,inst_35225);
var state_35243__$1 = state_35243;
var statearr_35275_35355 = state_35243__$1;
(statearr_35275_35355[(2)] = inst_35226);

(statearr_35275_35355[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (43))){
var inst_35219 = (state_35243[(21)]);
var inst_35229 = (state_35243[(2)]);
var inst_35230 = cljs.core.not_empty.call(null,inst_35219);
var state_35243__$1 = (function (){var statearr_35276 = state_35243;
(statearr_35276[(27)] = inst_35229);

return statearr_35276;
})();
if(cljs.core.truth_(inst_35230)){
var statearr_35277_35356 = state_35243__$1;
(statearr_35277_35356[(1)] = (44));

} else {
var statearr_35278_35357 = state_35243__$1;
(statearr_35278_35357[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (29))){
var inst_35159 = (state_35243[(23)]);
var inst_35162 = (state_35243[(26)]);
var inst_35164 = (state_35243[(24)]);
var inst_35196 = (state_35243[(16)]);
var inst_35160 = (state_35243[(25)]);
var inst_35156 = (state_35243[(19)]);
var inst_35192 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35195 = (function (){var all_files = inst_35156;
var res_SINGLEQUOTE_ = inst_35159;
var res = inst_35160;
var files_not_loaded = inst_35162;
var dependencies_that_loaded = inst_35164;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35159,inst_35162,inst_35164,inst_35196,inst_35160,inst_35156,inst_35192,state_val_35244,c__29625__auto__,map__35088,map__35088__$1,opts,before_jsload,on_jsload,reload_dependents,map__35089,map__35089__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35194){
var map__35279 = p__35194;
var map__35279__$1 = ((((!((map__35279 == null)))?((((map__35279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35279.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35279):map__35279);
var namespace = cljs.core.get.call(null,map__35279__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35159,inst_35162,inst_35164,inst_35196,inst_35160,inst_35156,inst_35192,state_val_35244,c__29625__auto__,map__35088,map__35088__$1,opts,before_jsload,on_jsload,reload_dependents,map__35089,map__35089__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35196__$1 = cljs.core.group_by.call(null,inst_35195,inst_35162);
var inst_35198 = (inst_35196__$1 == null);
var inst_35199 = cljs.core.not.call(null,inst_35198);
var state_35243__$1 = (function (){var statearr_35281 = state_35243;
(statearr_35281[(16)] = inst_35196__$1);

(statearr_35281[(28)] = inst_35192);

return statearr_35281;
})();
if(inst_35199){
var statearr_35282_35358 = state_35243__$1;
(statearr_35282_35358[(1)] = (32));

} else {
var statearr_35283_35359 = state_35243__$1;
(statearr_35283_35359[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (44))){
var inst_35219 = (state_35243[(21)]);
var inst_35232 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35219);
var inst_35233 = cljs.core.pr_str.call(null,inst_35232);
var inst_35234 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35233)].join('');
var inst_35235 = figwheel.client.utils.log.call(null,inst_35234);
var state_35243__$1 = state_35243;
var statearr_35284_35360 = state_35243__$1;
(statearr_35284_35360[(2)] = inst_35235);

(statearr_35284_35360[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (6))){
var inst_35137 = (state_35243[(2)]);
var state_35243__$1 = state_35243;
var statearr_35285_35361 = state_35243__$1;
(statearr_35285_35361[(2)] = inst_35137);

(statearr_35285_35361[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (28))){
var inst_35162 = (state_35243[(26)]);
var inst_35189 = (state_35243[(2)]);
var inst_35190 = cljs.core.not_empty.call(null,inst_35162);
var state_35243__$1 = (function (){var statearr_35286 = state_35243;
(statearr_35286[(29)] = inst_35189);

return statearr_35286;
})();
if(cljs.core.truth_(inst_35190)){
var statearr_35287_35362 = state_35243__$1;
(statearr_35287_35362[(1)] = (29));

} else {
var statearr_35288_35363 = state_35243__$1;
(statearr_35288_35363[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (25))){
var inst_35160 = (state_35243[(25)]);
var inst_35176 = (state_35243[(2)]);
var inst_35177 = cljs.core.not_empty.call(null,inst_35160);
var state_35243__$1 = (function (){var statearr_35289 = state_35243;
(statearr_35289[(30)] = inst_35176);

return statearr_35289;
})();
if(cljs.core.truth_(inst_35177)){
var statearr_35290_35364 = state_35243__$1;
(statearr_35290_35364[(1)] = (26));

} else {
var statearr_35291_35365 = state_35243__$1;
(statearr_35291_35365[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (34))){
var inst_35212 = (state_35243[(2)]);
var state_35243__$1 = state_35243;
if(cljs.core.truth_(inst_35212)){
var statearr_35292_35366 = state_35243__$1;
(statearr_35292_35366[(1)] = (38));

} else {
var statearr_35293_35367 = state_35243__$1;
(statearr_35293_35367[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (17))){
var state_35243__$1 = state_35243;
var statearr_35294_35368 = state_35243__$1;
(statearr_35294_35368[(2)] = recompile_dependents);

(statearr_35294_35368[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (3))){
var state_35243__$1 = state_35243;
var statearr_35295_35369 = state_35243__$1;
(statearr_35295_35369[(2)] = null);

(statearr_35295_35369[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (12))){
var inst_35133 = (state_35243[(2)]);
var state_35243__$1 = state_35243;
var statearr_35296_35370 = state_35243__$1;
(statearr_35296_35370[(2)] = inst_35133);

(statearr_35296_35370[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (2))){
var inst_35095 = (state_35243[(13)]);
var inst_35102 = cljs.core.seq.call(null,inst_35095);
var inst_35103 = inst_35102;
var inst_35104 = null;
var inst_35105 = (0);
var inst_35106 = (0);
var state_35243__$1 = (function (){var statearr_35297 = state_35243;
(statearr_35297[(7)] = inst_35103);

(statearr_35297[(8)] = inst_35104);

(statearr_35297[(9)] = inst_35106);

(statearr_35297[(10)] = inst_35105);

return statearr_35297;
})();
var statearr_35298_35371 = state_35243__$1;
(statearr_35298_35371[(2)] = null);

(statearr_35298_35371[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (23))){
var inst_35159 = (state_35243[(23)]);
var inst_35162 = (state_35243[(26)]);
var inst_35164 = (state_35243[(24)]);
var inst_35160 = (state_35243[(25)]);
var inst_35156 = (state_35243[(19)]);
var inst_35167 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35169 = (function (){var all_files = inst_35156;
var res_SINGLEQUOTE_ = inst_35159;
var res = inst_35160;
var files_not_loaded = inst_35162;
var dependencies_that_loaded = inst_35164;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35159,inst_35162,inst_35164,inst_35160,inst_35156,inst_35167,state_val_35244,c__29625__auto__,map__35088,map__35088__$1,opts,before_jsload,on_jsload,reload_dependents,map__35089,map__35089__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35168){
var map__35299 = p__35168;
var map__35299__$1 = ((((!((map__35299 == null)))?((((map__35299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35299):map__35299);
var request_url = cljs.core.get.call(null,map__35299__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35159,inst_35162,inst_35164,inst_35160,inst_35156,inst_35167,state_val_35244,c__29625__auto__,map__35088,map__35088__$1,opts,before_jsload,on_jsload,reload_dependents,map__35089,map__35089__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35170 = cljs.core.reverse.call(null,inst_35164);
var inst_35171 = cljs.core.map.call(null,inst_35169,inst_35170);
var inst_35172 = cljs.core.pr_str.call(null,inst_35171);
var inst_35173 = figwheel.client.utils.log.call(null,inst_35172);
var state_35243__$1 = (function (){var statearr_35301 = state_35243;
(statearr_35301[(31)] = inst_35167);

return statearr_35301;
})();
var statearr_35302_35372 = state_35243__$1;
(statearr_35302_35372[(2)] = inst_35173);

(statearr_35302_35372[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (35))){
var state_35243__$1 = state_35243;
var statearr_35303_35373 = state_35243__$1;
(statearr_35303_35373[(2)] = true);

(statearr_35303_35373[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (19))){
var inst_35146 = (state_35243[(12)]);
var inst_35152 = figwheel.client.file_reloading.expand_files.call(null,inst_35146);
var state_35243__$1 = state_35243;
var statearr_35304_35374 = state_35243__$1;
(statearr_35304_35374[(2)] = inst_35152);

(statearr_35304_35374[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (11))){
var state_35243__$1 = state_35243;
var statearr_35305_35375 = state_35243__$1;
(statearr_35305_35375[(2)] = null);

(statearr_35305_35375[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (9))){
var inst_35135 = (state_35243[(2)]);
var state_35243__$1 = state_35243;
var statearr_35306_35376 = state_35243__$1;
(statearr_35306_35376[(2)] = inst_35135);

(statearr_35306_35376[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (5))){
var inst_35106 = (state_35243[(9)]);
var inst_35105 = (state_35243[(10)]);
var inst_35108 = (inst_35106 < inst_35105);
var inst_35109 = inst_35108;
var state_35243__$1 = state_35243;
if(cljs.core.truth_(inst_35109)){
var statearr_35307_35377 = state_35243__$1;
(statearr_35307_35377[(1)] = (7));

} else {
var statearr_35308_35378 = state_35243__$1;
(statearr_35308_35378[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (14))){
var inst_35116 = (state_35243[(22)]);
var inst_35125 = cljs.core.first.call(null,inst_35116);
var inst_35126 = figwheel.client.file_reloading.eval_body.call(null,inst_35125,opts);
var inst_35127 = cljs.core.next.call(null,inst_35116);
var inst_35103 = inst_35127;
var inst_35104 = null;
var inst_35105 = (0);
var inst_35106 = (0);
var state_35243__$1 = (function (){var statearr_35309 = state_35243;
(statearr_35309[(7)] = inst_35103);

(statearr_35309[(8)] = inst_35104);

(statearr_35309[(32)] = inst_35126);

(statearr_35309[(9)] = inst_35106);

(statearr_35309[(10)] = inst_35105);

return statearr_35309;
})();
var statearr_35310_35379 = state_35243__$1;
(statearr_35310_35379[(2)] = null);

(statearr_35310_35379[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (45))){
var state_35243__$1 = state_35243;
var statearr_35311_35380 = state_35243__$1;
(statearr_35311_35380[(2)] = null);

(statearr_35311_35380[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (26))){
var inst_35159 = (state_35243[(23)]);
var inst_35162 = (state_35243[(26)]);
var inst_35164 = (state_35243[(24)]);
var inst_35160 = (state_35243[(25)]);
var inst_35156 = (state_35243[(19)]);
var inst_35179 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35181 = (function (){var all_files = inst_35156;
var res_SINGLEQUOTE_ = inst_35159;
var res = inst_35160;
var files_not_loaded = inst_35162;
var dependencies_that_loaded = inst_35164;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35159,inst_35162,inst_35164,inst_35160,inst_35156,inst_35179,state_val_35244,c__29625__auto__,map__35088,map__35088__$1,opts,before_jsload,on_jsload,reload_dependents,map__35089,map__35089__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35180){
var map__35312 = p__35180;
var map__35312__$1 = ((((!((map__35312 == null)))?((((map__35312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35312.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35312):map__35312);
var namespace = cljs.core.get.call(null,map__35312__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35312__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35159,inst_35162,inst_35164,inst_35160,inst_35156,inst_35179,state_val_35244,c__29625__auto__,map__35088,map__35088__$1,opts,before_jsload,on_jsload,reload_dependents,map__35089,map__35089__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35182 = cljs.core.map.call(null,inst_35181,inst_35160);
var inst_35183 = cljs.core.pr_str.call(null,inst_35182);
var inst_35184 = figwheel.client.utils.log.call(null,inst_35183);
var inst_35185 = (function (){var all_files = inst_35156;
var res_SINGLEQUOTE_ = inst_35159;
var res = inst_35160;
var files_not_loaded = inst_35162;
var dependencies_that_loaded = inst_35164;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35159,inst_35162,inst_35164,inst_35160,inst_35156,inst_35179,inst_35181,inst_35182,inst_35183,inst_35184,state_val_35244,c__29625__auto__,map__35088,map__35088__$1,opts,before_jsload,on_jsload,reload_dependents,map__35089,map__35089__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35159,inst_35162,inst_35164,inst_35160,inst_35156,inst_35179,inst_35181,inst_35182,inst_35183,inst_35184,state_val_35244,c__29625__auto__,map__35088,map__35088__$1,opts,before_jsload,on_jsload,reload_dependents,map__35089,map__35089__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35186 = setTimeout(inst_35185,(10));
var state_35243__$1 = (function (){var statearr_35314 = state_35243;
(statearr_35314[(33)] = inst_35179);

(statearr_35314[(34)] = inst_35184);

return statearr_35314;
})();
var statearr_35315_35381 = state_35243__$1;
(statearr_35315_35381[(2)] = inst_35186);

(statearr_35315_35381[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (16))){
var state_35243__$1 = state_35243;
var statearr_35316_35382 = state_35243__$1;
(statearr_35316_35382[(2)] = reload_dependents);

(statearr_35316_35382[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (38))){
var inst_35196 = (state_35243[(16)]);
var inst_35214 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35196);
var state_35243__$1 = state_35243;
var statearr_35317_35383 = state_35243__$1;
(statearr_35317_35383[(2)] = inst_35214);

(statearr_35317_35383[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (30))){
var state_35243__$1 = state_35243;
var statearr_35318_35384 = state_35243__$1;
(statearr_35318_35384[(2)] = null);

(statearr_35318_35384[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (10))){
var inst_35116 = (state_35243[(22)]);
var inst_35118 = cljs.core.chunked_seq_QMARK_.call(null,inst_35116);
var state_35243__$1 = state_35243;
if(inst_35118){
var statearr_35319_35385 = state_35243__$1;
(statearr_35319_35385[(1)] = (13));

} else {
var statearr_35320_35386 = state_35243__$1;
(statearr_35320_35386[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (18))){
var inst_35150 = (state_35243[(2)]);
var state_35243__$1 = state_35243;
if(cljs.core.truth_(inst_35150)){
var statearr_35321_35387 = state_35243__$1;
(statearr_35321_35387[(1)] = (19));

} else {
var statearr_35322_35388 = state_35243__$1;
(statearr_35322_35388[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (42))){
var state_35243__$1 = state_35243;
var statearr_35323_35389 = state_35243__$1;
(statearr_35323_35389[(2)] = null);

(statearr_35323_35389[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (37))){
var inst_35209 = (state_35243[(2)]);
var state_35243__$1 = state_35243;
var statearr_35324_35390 = state_35243__$1;
(statearr_35324_35390[(2)] = inst_35209);

(statearr_35324_35390[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (8))){
var inst_35103 = (state_35243[(7)]);
var inst_35116 = (state_35243[(22)]);
var inst_35116__$1 = cljs.core.seq.call(null,inst_35103);
var state_35243__$1 = (function (){var statearr_35325 = state_35243;
(statearr_35325[(22)] = inst_35116__$1);

return statearr_35325;
})();
if(inst_35116__$1){
var statearr_35326_35391 = state_35243__$1;
(statearr_35326_35391[(1)] = (10));

} else {
var statearr_35327_35392 = state_35243__$1;
(statearr_35327_35392[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29625__auto__,map__35088,map__35088__$1,opts,before_jsload,on_jsload,reload_dependents,map__35089,map__35089__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29610__auto__,c__29625__auto__,map__35088,map__35088__$1,opts,before_jsload,on_jsload,reload_dependents,map__35089,map__35089__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29611__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29611__auto____0 = (function (){
var statearr_35331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35331[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29611__auto__);

(statearr_35331[(1)] = (1));

return statearr_35331;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29611__auto____1 = (function (state_35243){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_35243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e35332){if((e35332 instanceof Object)){
var ex__29614__auto__ = e35332;
var statearr_35333_35393 = state_35243;
(statearr_35333_35393[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35394 = state_35243;
state_35243 = G__35394;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29611__auto__ = function(state_35243){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29611__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29611__auto____1.call(this,state_35243);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29611__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29611__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29611__auto__;
})()
;})(switch__29610__auto__,c__29625__auto__,map__35088,map__35088__$1,opts,before_jsload,on_jsload,reload_dependents,map__35089,map__35089__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29627__auto__ = (function (){var statearr_35334 = f__29626__auto__.call(null);
(statearr_35334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto__);

return statearr_35334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(c__29625__auto__,map__35088,map__35088__$1,opts,before_jsload,on_jsload,reload_dependents,map__35089,map__35089__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29625__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35397,link){
var map__35400 = p__35397;
var map__35400__$1 = ((((!((map__35400 == null)))?((((map__35400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35400):map__35400);
var file = cljs.core.get.call(null,map__35400__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35400,map__35400__$1,file){
return (function (p1__35395_SHARP_,p2__35396_SHARP_){
if(cljs.core._EQ_.call(null,p1__35395_SHARP_,p2__35396_SHARP_)){
return p1__35395_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35400,map__35400__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35406){
var map__35407 = p__35406;
var map__35407__$1 = ((((!((map__35407 == null)))?((((map__35407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35407):map__35407);
var match_length = cljs.core.get.call(null,map__35407__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35407__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35402_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35402_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35409_SHARP_,p2__35410_SHARP_){
return cljs.core.assoc.call(null,p1__35409_SHARP_,cljs.core.get.call(null,p2__35410_SHARP_,key),p2__35410_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35411 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35411);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35411);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35412,p__35413){
var map__35418 = p__35412;
var map__35418__$1 = ((((!((map__35418 == null)))?((((map__35418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35418):map__35418);
var on_cssload = cljs.core.get.call(null,map__35418__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35419 = p__35413;
var map__35419__$1 = ((((!((map__35419 == null)))?((((map__35419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35419.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35419):map__35419);
var files_msg = map__35419__$1;
var files = cljs.core.get.call(null,map__35419__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map