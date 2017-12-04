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
var or__26674__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__26674__auto__){
return or__26674__auto__;
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
var or__26674__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__26674__auto__)){
return or__26674__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34622_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34622_SHARP_));
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
var seq__34627 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34628 = null;
var count__34629 = (0);
var i__34630 = (0);
while(true){
if((i__34630 < count__34629)){
var n = cljs.core._nth.call(null,chunk__34628,i__34630);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34631 = seq__34627;
var G__34632 = chunk__34628;
var G__34633 = count__34629;
var G__34634 = (i__34630 + (1));
seq__34627 = G__34631;
chunk__34628 = G__34632;
count__34629 = G__34633;
i__34630 = G__34634;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34627);
if(temp__4657__auto__){
var seq__34627__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34627__$1)){
var c__27493__auto__ = cljs.core.chunk_first.call(null,seq__34627__$1);
var G__34635 = cljs.core.chunk_rest.call(null,seq__34627__$1);
var G__34636 = c__27493__auto__;
var G__34637 = cljs.core.count.call(null,c__27493__auto__);
var G__34638 = (0);
seq__34627 = G__34635;
chunk__34628 = G__34636;
count__34629 = G__34637;
i__34630 = G__34638;
continue;
} else {
var n = cljs.core.first.call(null,seq__34627__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34639 = cljs.core.next.call(null,seq__34627__$1);
var G__34640 = null;
var G__34641 = (0);
var G__34642 = (0);
seq__34627 = G__34639;
chunk__34628 = G__34640;
count__34629 = G__34641;
i__34630 = G__34642;
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

var seq__34693_34704 = cljs.core.seq.call(null,deps);
var chunk__34694_34705 = null;
var count__34695_34706 = (0);
var i__34696_34707 = (0);
while(true){
if((i__34696_34707 < count__34695_34706)){
var dep_34708 = cljs.core._nth.call(null,chunk__34694_34705,i__34696_34707);
topo_sort_helper_STAR_.call(null,dep_34708,(depth + (1)),state);

var G__34709 = seq__34693_34704;
var G__34710 = chunk__34694_34705;
var G__34711 = count__34695_34706;
var G__34712 = (i__34696_34707 + (1));
seq__34693_34704 = G__34709;
chunk__34694_34705 = G__34710;
count__34695_34706 = G__34711;
i__34696_34707 = G__34712;
continue;
} else {
var temp__4657__auto___34713 = cljs.core.seq.call(null,seq__34693_34704);
if(temp__4657__auto___34713){
var seq__34693_34714__$1 = temp__4657__auto___34713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34693_34714__$1)){
var c__27493__auto___34715 = cljs.core.chunk_first.call(null,seq__34693_34714__$1);
var G__34716 = cljs.core.chunk_rest.call(null,seq__34693_34714__$1);
var G__34717 = c__27493__auto___34715;
var G__34718 = cljs.core.count.call(null,c__27493__auto___34715);
var G__34719 = (0);
seq__34693_34704 = G__34716;
chunk__34694_34705 = G__34717;
count__34695_34706 = G__34718;
i__34696_34707 = G__34719;
continue;
} else {
var dep_34720 = cljs.core.first.call(null,seq__34693_34714__$1);
topo_sort_helper_STAR_.call(null,dep_34720,(depth + (1)),state);

var G__34721 = cljs.core.next.call(null,seq__34693_34714__$1);
var G__34722 = null;
var G__34723 = (0);
var G__34724 = (0);
seq__34693_34704 = G__34721;
chunk__34694_34705 = G__34722;
count__34695_34706 = G__34723;
i__34696_34707 = G__34724;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34697){
var vec__34701 = p__34697;
var seq__34702 = cljs.core.seq.call(null,vec__34701);
var first__34703 = cljs.core.first.call(null,seq__34702);
var seq__34702__$1 = cljs.core.next.call(null,seq__34702);
var x = first__34703;
var xs = seq__34702__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34701,seq__34702,first__34703,seq__34702__$1,x,xs,get_deps__$1){
return (function (p1__34643_SHARP_){
return clojure.set.difference.call(null,p1__34643_SHARP_,x);
});})(vec__34701,seq__34702,first__34703,seq__34702__$1,x,xs,get_deps__$1))
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
var seq__34737 = cljs.core.seq.call(null,provides);
var chunk__34738 = null;
var count__34739 = (0);
var i__34740 = (0);
while(true){
if((i__34740 < count__34739)){
var prov = cljs.core._nth.call(null,chunk__34738,i__34740);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34741_34749 = cljs.core.seq.call(null,requires);
var chunk__34742_34750 = null;
var count__34743_34751 = (0);
var i__34744_34752 = (0);
while(true){
if((i__34744_34752 < count__34743_34751)){
var req_34753 = cljs.core._nth.call(null,chunk__34742_34750,i__34744_34752);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34753,prov);

var G__34754 = seq__34741_34749;
var G__34755 = chunk__34742_34750;
var G__34756 = count__34743_34751;
var G__34757 = (i__34744_34752 + (1));
seq__34741_34749 = G__34754;
chunk__34742_34750 = G__34755;
count__34743_34751 = G__34756;
i__34744_34752 = G__34757;
continue;
} else {
var temp__4657__auto___34758 = cljs.core.seq.call(null,seq__34741_34749);
if(temp__4657__auto___34758){
var seq__34741_34759__$1 = temp__4657__auto___34758;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34741_34759__$1)){
var c__27493__auto___34760 = cljs.core.chunk_first.call(null,seq__34741_34759__$1);
var G__34761 = cljs.core.chunk_rest.call(null,seq__34741_34759__$1);
var G__34762 = c__27493__auto___34760;
var G__34763 = cljs.core.count.call(null,c__27493__auto___34760);
var G__34764 = (0);
seq__34741_34749 = G__34761;
chunk__34742_34750 = G__34762;
count__34743_34751 = G__34763;
i__34744_34752 = G__34764;
continue;
} else {
var req_34765 = cljs.core.first.call(null,seq__34741_34759__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34765,prov);

var G__34766 = cljs.core.next.call(null,seq__34741_34759__$1);
var G__34767 = null;
var G__34768 = (0);
var G__34769 = (0);
seq__34741_34749 = G__34766;
chunk__34742_34750 = G__34767;
count__34743_34751 = G__34768;
i__34744_34752 = G__34769;
continue;
}
} else {
}
}
break;
}

var G__34770 = seq__34737;
var G__34771 = chunk__34738;
var G__34772 = count__34739;
var G__34773 = (i__34740 + (1));
seq__34737 = G__34770;
chunk__34738 = G__34771;
count__34739 = G__34772;
i__34740 = G__34773;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34737);
if(temp__4657__auto__){
var seq__34737__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34737__$1)){
var c__27493__auto__ = cljs.core.chunk_first.call(null,seq__34737__$1);
var G__34774 = cljs.core.chunk_rest.call(null,seq__34737__$1);
var G__34775 = c__27493__auto__;
var G__34776 = cljs.core.count.call(null,c__27493__auto__);
var G__34777 = (0);
seq__34737 = G__34774;
chunk__34738 = G__34775;
count__34739 = G__34776;
i__34740 = G__34777;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34737__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34745_34778 = cljs.core.seq.call(null,requires);
var chunk__34746_34779 = null;
var count__34747_34780 = (0);
var i__34748_34781 = (0);
while(true){
if((i__34748_34781 < count__34747_34780)){
var req_34782 = cljs.core._nth.call(null,chunk__34746_34779,i__34748_34781);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34782,prov);

var G__34783 = seq__34745_34778;
var G__34784 = chunk__34746_34779;
var G__34785 = count__34747_34780;
var G__34786 = (i__34748_34781 + (1));
seq__34745_34778 = G__34783;
chunk__34746_34779 = G__34784;
count__34747_34780 = G__34785;
i__34748_34781 = G__34786;
continue;
} else {
var temp__4657__auto___34787__$1 = cljs.core.seq.call(null,seq__34745_34778);
if(temp__4657__auto___34787__$1){
var seq__34745_34788__$1 = temp__4657__auto___34787__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34745_34788__$1)){
var c__27493__auto___34789 = cljs.core.chunk_first.call(null,seq__34745_34788__$1);
var G__34790 = cljs.core.chunk_rest.call(null,seq__34745_34788__$1);
var G__34791 = c__27493__auto___34789;
var G__34792 = cljs.core.count.call(null,c__27493__auto___34789);
var G__34793 = (0);
seq__34745_34778 = G__34790;
chunk__34746_34779 = G__34791;
count__34747_34780 = G__34792;
i__34748_34781 = G__34793;
continue;
} else {
var req_34794 = cljs.core.first.call(null,seq__34745_34788__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34794,prov);

var G__34795 = cljs.core.next.call(null,seq__34745_34788__$1);
var G__34796 = null;
var G__34797 = (0);
var G__34798 = (0);
seq__34745_34778 = G__34795;
chunk__34746_34779 = G__34796;
count__34747_34780 = G__34797;
i__34748_34781 = G__34798;
continue;
}
} else {
}
}
break;
}

var G__34799 = cljs.core.next.call(null,seq__34737__$1);
var G__34800 = null;
var G__34801 = (0);
var G__34802 = (0);
seq__34737 = G__34799;
chunk__34738 = G__34800;
count__34739 = G__34801;
i__34740 = G__34802;
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
var seq__34807_34811 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34808_34812 = null;
var count__34809_34813 = (0);
var i__34810_34814 = (0);
while(true){
if((i__34810_34814 < count__34809_34813)){
var ns_34815 = cljs.core._nth.call(null,chunk__34808_34812,i__34810_34814);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34815);

var G__34816 = seq__34807_34811;
var G__34817 = chunk__34808_34812;
var G__34818 = count__34809_34813;
var G__34819 = (i__34810_34814 + (1));
seq__34807_34811 = G__34816;
chunk__34808_34812 = G__34817;
count__34809_34813 = G__34818;
i__34810_34814 = G__34819;
continue;
} else {
var temp__4657__auto___34820 = cljs.core.seq.call(null,seq__34807_34811);
if(temp__4657__auto___34820){
var seq__34807_34821__$1 = temp__4657__auto___34820;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34807_34821__$1)){
var c__27493__auto___34822 = cljs.core.chunk_first.call(null,seq__34807_34821__$1);
var G__34823 = cljs.core.chunk_rest.call(null,seq__34807_34821__$1);
var G__34824 = c__27493__auto___34822;
var G__34825 = cljs.core.count.call(null,c__27493__auto___34822);
var G__34826 = (0);
seq__34807_34811 = G__34823;
chunk__34808_34812 = G__34824;
count__34809_34813 = G__34825;
i__34810_34814 = G__34826;
continue;
} else {
var ns_34827 = cljs.core.first.call(null,seq__34807_34821__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34827);

var G__34828 = cljs.core.next.call(null,seq__34807_34821__$1);
var G__34829 = null;
var G__34830 = (0);
var G__34831 = (0);
seq__34807_34811 = G__34828;
chunk__34808_34812 = G__34829;
count__34809_34813 = G__34830;
i__34810_34814 = G__34831;
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
goog.require_figwheel_backup_ = (function (){var or__26674__auto__ = goog.require__;
if(cljs.core.truth_(or__26674__auto__)){
return or__26674__auto__;
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
var G__34832__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34832 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34833__i = 0, G__34833__a = new Array(arguments.length -  0);
while (G__34833__i < G__34833__a.length) {G__34833__a[G__34833__i] = arguments[G__34833__i + 0]; ++G__34833__i;}
  args = new cljs.core.IndexedSeq(G__34833__a,0,null);
} 
return G__34832__delegate.call(this,args);};
G__34832.cljs$lang$maxFixedArity = 0;
G__34832.cljs$lang$applyTo = (function (arglist__34834){
var args = cljs.core.seq(arglist__34834);
return G__34832__delegate(args);
});
G__34832.cljs$core$IFn$_invoke$arity$variadic = G__34832__delegate;
return G__34832;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34835 = cljs.core._EQ_;
var expr__34836 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34835.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34836))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34835,expr__34836){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34835,expr__34836))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34835,expr__34836){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34838){if((e34838 instanceof Error)){
var e = e34838;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34838;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34835,expr__34836))
} else {
if(cljs.core.truth_(pred__34835.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34836))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34835.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__34836))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34835.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34836))){
return ((function (pred__34835,expr__34836){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34839){if((e34839 instanceof Error)){
var e = e34839;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34839;

}
}})());
});
;})(pred__34835,expr__34836))
} else {
return ((function (pred__34835,expr__34836){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34835,expr__34836))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34840,callback){
var map__34843 = p__34840;
var map__34843__$1 = ((((!((map__34843 == null)))?((((map__34843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34843.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34843):map__34843);
var file_msg = map__34843__$1;
var request_url = cljs.core.get.call(null,map__34843__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34843,map__34843__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34843,map__34843__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__29844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto__){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto__){
return (function (state_34867){
var state_val_34868 = (state_34867[(1)]);
if((state_val_34868 === (7))){
var inst_34863 = (state_34867[(2)]);
var state_34867__$1 = state_34867;
var statearr_34869_34889 = state_34867__$1;
(statearr_34869_34889[(2)] = inst_34863);

(statearr_34869_34889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34868 === (1))){
var state_34867__$1 = state_34867;
var statearr_34870_34890 = state_34867__$1;
(statearr_34870_34890[(2)] = null);

(statearr_34870_34890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34868 === (4))){
var inst_34847 = (state_34867[(7)]);
var inst_34847__$1 = (state_34867[(2)]);
var state_34867__$1 = (function (){var statearr_34871 = state_34867;
(statearr_34871[(7)] = inst_34847__$1);

return statearr_34871;
})();
if(cljs.core.truth_(inst_34847__$1)){
var statearr_34872_34891 = state_34867__$1;
(statearr_34872_34891[(1)] = (5));

} else {
var statearr_34873_34892 = state_34867__$1;
(statearr_34873_34892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34868 === (6))){
var state_34867__$1 = state_34867;
var statearr_34874_34893 = state_34867__$1;
(statearr_34874_34893[(2)] = null);

(statearr_34874_34893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34868 === (3))){
var inst_34865 = (state_34867[(2)]);
var state_34867__$1 = state_34867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34867__$1,inst_34865);
} else {
if((state_val_34868 === (2))){
var state_34867__$1 = state_34867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34867__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34868 === (11))){
var inst_34859 = (state_34867[(2)]);
var state_34867__$1 = (function (){var statearr_34875 = state_34867;
(statearr_34875[(8)] = inst_34859);

return statearr_34875;
})();
var statearr_34876_34894 = state_34867__$1;
(statearr_34876_34894[(2)] = null);

(statearr_34876_34894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34868 === (9))){
var inst_34851 = (state_34867[(9)]);
var inst_34853 = (state_34867[(10)]);
var inst_34855 = inst_34853.call(null,inst_34851);
var state_34867__$1 = state_34867;
var statearr_34877_34895 = state_34867__$1;
(statearr_34877_34895[(2)] = inst_34855);

(statearr_34877_34895[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34868 === (5))){
var inst_34847 = (state_34867[(7)]);
var inst_34849 = figwheel.client.file_reloading.blocking_load.call(null,inst_34847);
var state_34867__$1 = state_34867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34867__$1,(8),inst_34849);
} else {
if((state_val_34868 === (10))){
var inst_34851 = (state_34867[(9)]);
var inst_34857 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34851);
var state_34867__$1 = state_34867;
var statearr_34878_34896 = state_34867__$1;
(statearr_34878_34896[(2)] = inst_34857);

(statearr_34878_34896[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34868 === (8))){
var inst_34853 = (state_34867[(10)]);
var inst_34847 = (state_34867[(7)]);
var inst_34851 = (state_34867[(2)]);
var inst_34852 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34853__$1 = cljs.core.get.call(null,inst_34852,inst_34847);
var state_34867__$1 = (function (){var statearr_34879 = state_34867;
(statearr_34879[(9)] = inst_34851);

(statearr_34879[(10)] = inst_34853__$1);

return statearr_34879;
})();
if(cljs.core.truth_(inst_34853__$1)){
var statearr_34880_34897 = state_34867__$1;
(statearr_34880_34897[(1)] = (9));

} else {
var statearr_34881_34898 = state_34867__$1;
(statearr_34881_34898[(1)] = (10));

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
});})(c__29844__auto__))
;
return ((function (switch__29829__auto__,c__29844__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29830__auto__ = null;
var figwheel$client$file_reloading$state_machine__29830__auto____0 = (function (){
var statearr_34885 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34885[(0)] = figwheel$client$file_reloading$state_machine__29830__auto__);

(statearr_34885[(1)] = (1));

return statearr_34885;
});
var figwheel$client$file_reloading$state_machine__29830__auto____1 = (function (state_34867){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_34867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e34886){if((e34886 instanceof Object)){
var ex__29833__auto__ = e34886;
var statearr_34887_34899 = state_34867;
(statearr_34887_34899[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34900 = state_34867;
state_34867 = G__34900;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29830__auto__ = function(state_34867){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29830__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29830__auto____1.call(this,state_34867);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29830__auto____0;
figwheel$client$file_reloading$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29830__auto____1;
return figwheel$client$file_reloading$state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto__))
})();
var state__29846__auto__ = (function (){var statearr_34888 = f__29845__auto__.call(null);
(statearr_34888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto__);

return statearr_34888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto__))
);

return c__29844__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34901,callback){
var map__34904 = p__34901;
var map__34904__$1 = ((((!((map__34904 == null)))?((((map__34904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34904.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34904):map__34904);
var file_msg = map__34904__$1;
var namespace = cljs.core.get.call(null,map__34904__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34904,map__34904__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34904,map__34904__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34906){
var map__34909 = p__34906;
var map__34909__$1 = ((((!((map__34909 == null)))?((((map__34909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34909):map__34909);
var file_msg = map__34909__$1;
var namespace = cljs.core.get.call(null,map__34909__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34911){
var map__34914 = p__34911;
var map__34914__$1 = ((((!((map__34914 == null)))?((((map__34914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34914.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34914):map__34914);
var file_msg = map__34914__$1;
var namespace = cljs.core.get.call(null,map__34914__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__26662__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__26662__auto__){
var or__26674__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26674__auto__)){
return or__26674__auto__;
} else {
var or__26674__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26674__auto____$1)){
return or__26674__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__26662__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34916,callback){
var map__34919 = p__34916;
var map__34919__$1 = ((((!((map__34919 == null)))?((((map__34919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34919.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34919):map__34919);
var file_msg = map__34919__$1;
var request_url = cljs.core.get.call(null,map__34919__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34919__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29844__auto___35023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto___35023,out){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto___35023,out){
return (function (state_35005){
var state_val_35006 = (state_35005[(1)]);
if((state_val_35006 === (1))){
var inst_34979 = cljs.core.seq.call(null,files);
var inst_34980 = cljs.core.first.call(null,inst_34979);
var inst_34981 = cljs.core.next.call(null,inst_34979);
var inst_34982 = files;
var state_35005__$1 = (function (){var statearr_35007 = state_35005;
(statearr_35007[(7)] = inst_34980);

(statearr_35007[(8)] = inst_34981);

(statearr_35007[(9)] = inst_34982);

return statearr_35007;
})();
var statearr_35008_35024 = state_35005__$1;
(statearr_35008_35024[(2)] = null);

(statearr_35008_35024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35006 === (2))){
var inst_34988 = (state_35005[(10)]);
var inst_34982 = (state_35005[(9)]);
var inst_34987 = cljs.core.seq.call(null,inst_34982);
var inst_34988__$1 = cljs.core.first.call(null,inst_34987);
var inst_34989 = cljs.core.next.call(null,inst_34987);
var inst_34990 = (inst_34988__$1 == null);
var inst_34991 = cljs.core.not.call(null,inst_34990);
var state_35005__$1 = (function (){var statearr_35009 = state_35005;
(statearr_35009[(10)] = inst_34988__$1);

(statearr_35009[(11)] = inst_34989);

return statearr_35009;
})();
if(inst_34991){
var statearr_35010_35025 = state_35005__$1;
(statearr_35010_35025[(1)] = (4));

} else {
var statearr_35011_35026 = state_35005__$1;
(statearr_35011_35026[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35006 === (3))){
var inst_35003 = (state_35005[(2)]);
var state_35005__$1 = state_35005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35005__$1,inst_35003);
} else {
if((state_val_35006 === (4))){
var inst_34988 = (state_35005[(10)]);
var inst_34993 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34988);
var state_35005__$1 = state_35005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35005__$1,(7),inst_34993);
} else {
if((state_val_35006 === (5))){
var inst_34999 = cljs.core.async.close_BANG_.call(null,out);
var state_35005__$1 = state_35005;
var statearr_35012_35027 = state_35005__$1;
(statearr_35012_35027[(2)] = inst_34999);

(statearr_35012_35027[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35006 === (6))){
var inst_35001 = (state_35005[(2)]);
var state_35005__$1 = state_35005;
var statearr_35013_35028 = state_35005__$1;
(statearr_35013_35028[(2)] = inst_35001);

(statearr_35013_35028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35006 === (7))){
var inst_34989 = (state_35005[(11)]);
var inst_34995 = (state_35005[(2)]);
var inst_34996 = cljs.core.async.put_BANG_.call(null,out,inst_34995);
var inst_34982 = inst_34989;
var state_35005__$1 = (function (){var statearr_35014 = state_35005;
(statearr_35014[(12)] = inst_34996);

(statearr_35014[(9)] = inst_34982);

return statearr_35014;
})();
var statearr_35015_35029 = state_35005__$1;
(statearr_35015_35029[(2)] = null);

(statearr_35015_35029[(1)] = (2));


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
});})(c__29844__auto___35023,out))
;
return ((function (switch__29829__auto__,c__29844__auto___35023,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29830__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29830__auto____0 = (function (){
var statearr_35019 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35019[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29830__auto__);

(statearr_35019[(1)] = (1));

return statearr_35019;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29830__auto____1 = (function (state_35005){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_35005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e35020){if((e35020 instanceof Object)){
var ex__29833__auto__ = e35020;
var statearr_35021_35030 = state_35005;
(statearr_35021_35030[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35031 = state_35005;
state_35005 = G__35031;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29830__auto__ = function(state_35005){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29830__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29830__auto____1.call(this,state_35005);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29830__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29830__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto___35023,out))
})();
var state__29846__auto__ = (function (){var statearr_35022 = f__29845__auto__.call(null);
(statearr_35022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto___35023);

return statearr_35022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto___35023,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35032,opts){
var map__35036 = p__35032;
var map__35036__$1 = ((((!((map__35036 == null)))?((((map__35036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35036):map__35036);
var eval_body = cljs.core.get.call(null,map__35036__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35036__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__26662__auto__ = eval_body;
if(cljs.core.truth_(and__26662__auto__)){
return typeof eval_body === 'string';
} else {
return and__26662__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35038){var e = e35038;
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
return (function (p1__35039_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35039_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__35048){
var vec__35049 = p__35048;
var k = cljs.core.nth.call(null,vec__35049,(0),null);
var v = cljs.core.nth.call(null,vec__35049,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35052){
var vec__35053 = p__35052;
var k = cljs.core.nth.call(null,vec__35053,(0),null);
var v = cljs.core.nth.call(null,vec__35053,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35059,p__35060){
var map__35308 = p__35059;
var map__35308__$1 = ((((!((map__35308 == null)))?((((map__35308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35308):map__35308);
var opts = map__35308__$1;
var before_jsload = cljs.core.get.call(null,map__35308__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35308__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35308__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35309 = p__35060;
var map__35309__$1 = ((((!((map__35309 == null)))?((((map__35309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35309.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35309):map__35309);
var msg = map__35309__$1;
var files = cljs.core.get.call(null,map__35309__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35309__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35309__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto__,map__35308,map__35308__$1,opts,before_jsload,on_jsload,reload_dependents,map__35309,map__35309__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto__,map__35308,map__35308__$1,opts,before_jsload,on_jsload,reload_dependents,map__35309,map__35309__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35463){
var state_val_35464 = (state_35463[(1)]);
if((state_val_35464 === (7))){
var inst_35325 = (state_35463[(7)]);
var inst_35324 = (state_35463[(8)]);
var inst_35326 = (state_35463[(9)]);
var inst_35323 = (state_35463[(10)]);
var inst_35331 = cljs.core._nth.call(null,inst_35324,inst_35326);
var inst_35332 = figwheel.client.file_reloading.eval_body.call(null,inst_35331,opts);
var inst_35333 = (inst_35326 + (1));
var tmp35465 = inst_35325;
var tmp35466 = inst_35324;
var tmp35467 = inst_35323;
var inst_35323__$1 = tmp35467;
var inst_35324__$1 = tmp35466;
var inst_35325__$1 = tmp35465;
var inst_35326__$1 = inst_35333;
var state_35463__$1 = (function (){var statearr_35468 = state_35463;
(statearr_35468[(7)] = inst_35325__$1);

(statearr_35468[(8)] = inst_35324__$1);

(statearr_35468[(9)] = inst_35326__$1);

(statearr_35468[(11)] = inst_35332);

(statearr_35468[(10)] = inst_35323__$1);

return statearr_35468;
})();
var statearr_35469_35555 = state_35463__$1;
(statearr_35469_35555[(2)] = null);

(statearr_35469_35555[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (20))){
var inst_35366 = (state_35463[(12)]);
var inst_35374 = figwheel.client.file_reloading.sort_files.call(null,inst_35366);
var state_35463__$1 = state_35463;
var statearr_35470_35556 = state_35463__$1;
(statearr_35470_35556[(2)] = inst_35374);

(statearr_35470_35556[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (27))){
var state_35463__$1 = state_35463;
var statearr_35471_35557 = state_35463__$1;
(statearr_35471_35557[(2)] = null);

(statearr_35471_35557[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (1))){
var inst_35315 = (state_35463[(13)]);
var inst_35312 = before_jsload.call(null,files);
var inst_35313 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35314 = (function (){return ((function (inst_35315,inst_35312,inst_35313,state_val_35464,c__29844__auto__,map__35308,map__35308__$1,opts,before_jsload,on_jsload,reload_dependents,map__35309,map__35309__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35056_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35056_SHARP_);
});
;})(inst_35315,inst_35312,inst_35313,state_val_35464,c__29844__auto__,map__35308,map__35308__$1,opts,before_jsload,on_jsload,reload_dependents,map__35309,map__35309__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35315__$1 = cljs.core.filter.call(null,inst_35314,files);
var inst_35316 = cljs.core.not_empty.call(null,inst_35315__$1);
var state_35463__$1 = (function (){var statearr_35472 = state_35463;
(statearr_35472[(14)] = inst_35313);

(statearr_35472[(15)] = inst_35312);

(statearr_35472[(13)] = inst_35315__$1);

return statearr_35472;
})();
if(cljs.core.truth_(inst_35316)){
var statearr_35473_35558 = state_35463__$1;
(statearr_35473_35558[(1)] = (2));

} else {
var statearr_35474_35559 = state_35463__$1;
(statearr_35474_35559[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (24))){
var state_35463__$1 = state_35463;
var statearr_35475_35560 = state_35463__$1;
(statearr_35475_35560[(2)] = null);

(statearr_35475_35560[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (39))){
var inst_35416 = (state_35463[(16)]);
var state_35463__$1 = state_35463;
var statearr_35476_35561 = state_35463__$1;
(statearr_35476_35561[(2)] = inst_35416);

(statearr_35476_35561[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (46))){
var inst_35458 = (state_35463[(2)]);
var state_35463__$1 = state_35463;
var statearr_35477_35562 = state_35463__$1;
(statearr_35477_35562[(2)] = inst_35458);

(statearr_35477_35562[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (4))){
var inst_35360 = (state_35463[(2)]);
var inst_35361 = cljs.core.List.EMPTY;
var inst_35362 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35361);
var inst_35363 = (function (){return ((function (inst_35360,inst_35361,inst_35362,state_val_35464,c__29844__auto__,map__35308,map__35308__$1,opts,before_jsload,on_jsload,reload_dependents,map__35309,map__35309__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35057_SHARP_){
var and__26662__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35057_SHARP_);
if(cljs.core.truth_(and__26662__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35057_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35057_SHARP_)));
} else {
return and__26662__auto__;
}
});
;})(inst_35360,inst_35361,inst_35362,state_val_35464,c__29844__auto__,map__35308,map__35308__$1,opts,before_jsload,on_jsload,reload_dependents,map__35309,map__35309__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35364 = cljs.core.filter.call(null,inst_35363,files);
var inst_35365 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35366 = cljs.core.concat.call(null,inst_35364,inst_35365);
var state_35463__$1 = (function (){var statearr_35478 = state_35463;
(statearr_35478[(12)] = inst_35366);

(statearr_35478[(17)] = inst_35362);

(statearr_35478[(18)] = inst_35360);

return statearr_35478;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35479_35563 = state_35463__$1;
(statearr_35479_35563[(1)] = (16));

} else {
var statearr_35480_35564 = state_35463__$1;
(statearr_35480_35564[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (15))){
var inst_35350 = (state_35463[(2)]);
var state_35463__$1 = state_35463;
var statearr_35481_35565 = state_35463__$1;
(statearr_35481_35565[(2)] = inst_35350);

(statearr_35481_35565[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (21))){
var inst_35376 = (state_35463[(19)]);
var inst_35376__$1 = (state_35463[(2)]);
var inst_35377 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35376__$1);
var state_35463__$1 = (function (){var statearr_35482 = state_35463;
(statearr_35482[(19)] = inst_35376__$1);

return statearr_35482;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35463__$1,(22),inst_35377);
} else {
if((state_val_35464 === (31))){
var inst_35461 = (state_35463[(2)]);
var state_35463__$1 = state_35463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35463__$1,inst_35461);
} else {
if((state_val_35464 === (32))){
var inst_35416 = (state_35463[(16)]);
var inst_35421 = inst_35416.cljs$lang$protocol_mask$partition0$;
var inst_35422 = (inst_35421 & (64));
var inst_35423 = inst_35416.cljs$core$ISeq$;
var inst_35424 = (cljs.core.PROTOCOL_SENTINEL === inst_35423);
var inst_35425 = (inst_35422) || (inst_35424);
var state_35463__$1 = state_35463;
if(cljs.core.truth_(inst_35425)){
var statearr_35483_35566 = state_35463__$1;
(statearr_35483_35566[(1)] = (35));

} else {
var statearr_35484_35567 = state_35463__$1;
(statearr_35484_35567[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (40))){
var inst_35438 = (state_35463[(20)]);
var inst_35437 = (state_35463[(2)]);
var inst_35438__$1 = cljs.core.get.call(null,inst_35437,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35439 = cljs.core.get.call(null,inst_35437,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35440 = cljs.core.not_empty.call(null,inst_35438__$1);
var state_35463__$1 = (function (){var statearr_35485 = state_35463;
(statearr_35485[(21)] = inst_35439);

(statearr_35485[(20)] = inst_35438__$1);

return statearr_35485;
})();
if(cljs.core.truth_(inst_35440)){
var statearr_35486_35568 = state_35463__$1;
(statearr_35486_35568[(1)] = (41));

} else {
var statearr_35487_35569 = state_35463__$1;
(statearr_35487_35569[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (33))){
var state_35463__$1 = state_35463;
var statearr_35488_35570 = state_35463__$1;
(statearr_35488_35570[(2)] = false);

(statearr_35488_35570[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (13))){
var inst_35336 = (state_35463[(22)]);
var inst_35340 = cljs.core.chunk_first.call(null,inst_35336);
var inst_35341 = cljs.core.chunk_rest.call(null,inst_35336);
var inst_35342 = cljs.core.count.call(null,inst_35340);
var inst_35323 = inst_35341;
var inst_35324 = inst_35340;
var inst_35325 = inst_35342;
var inst_35326 = (0);
var state_35463__$1 = (function (){var statearr_35489 = state_35463;
(statearr_35489[(7)] = inst_35325);

(statearr_35489[(8)] = inst_35324);

(statearr_35489[(9)] = inst_35326);

(statearr_35489[(10)] = inst_35323);

return statearr_35489;
})();
var statearr_35490_35571 = state_35463__$1;
(statearr_35490_35571[(2)] = null);

(statearr_35490_35571[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (22))){
var inst_35376 = (state_35463[(19)]);
var inst_35384 = (state_35463[(23)]);
var inst_35379 = (state_35463[(24)]);
var inst_35380 = (state_35463[(25)]);
var inst_35379__$1 = (state_35463[(2)]);
var inst_35380__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35379__$1);
var inst_35381 = (function (){var all_files = inst_35376;
var res_SINGLEQUOTE_ = inst_35379__$1;
var res = inst_35380__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35376,inst_35384,inst_35379,inst_35380,inst_35379__$1,inst_35380__$1,state_val_35464,c__29844__auto__,map__35308,map__35308__$1,opts,before_jsload,on_jsload,reload_dependents,map__35309,map__35309__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35058_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35058_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35376,inst_35384,inst_35379,inst_35380,inst_35379__$1,inst_35380__$1,state_val_35464,c__29844__auto__,map__35308,map__35308__$1,opts,before_jsload,on_jsload,reload_dependents,map__35309,map__35309__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35382 = cljs.core.filter.call(null,inst_35381,inst_35379__$1);
var inst_35383 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35384__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35383);
var inst_35385 = cljs.core.not_empty.call(null,inst_35384__$1);
var state_35463__$1 = (function (){var statearr_35491 = state_35463;
(statearr_35491[(23)] = inst_35384__$1);

(statearr_35491[(24)] = inst_35379__$1);

(statearr_35491[(26)] = inst_35382);

(statearr_35491[(25)] = inst_35380__$1);

return statearr_35491;
})();
if(cljs.core.truth_(inst_35385)){
var statearr_35492_35572 = state_35463__$1;
(statearr_35492_35572[(1)] = (23));

} else {
var statearr_35493_35573 = state_35463__$1;
(statearr_35493_35573[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (36))){
var state_35463__$1 = state_35463;
var statearr_35494_35574 = state_35463__$1;
(statearr_35494_35574[(2)] = false);

(statearr_35494_35574[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (41))){
var inst_35438 = (state_35463[(20)]);
var inst_35442 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35443 = cljs.core.map.call(null,inst_35442,inst_35438);
var inst_35444 = cljs.core.pr_str.call(null,inst_35443);
var inst_35445 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35444)].join('');
var inst_35446 = figwheel.client.utils.log.call(null,inst_35445);
var state_35463__$1 = state_35463;
var statearr_35495_35575 = state_35463__$1;
(statearr_35495_35575[(2)] = inst_35446);

(statearr_35495_35575[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (43))){
var inst_35439 = (state_35463[(21)]);
var inst_35449 = (state_35463[(2)]);
var inst_35450 = cljs.core.not_empty.call(null,inst_35439);
var state_35463__$1 = (function (){var statearr_35496 = state_35463;
(statearr_35496[(27)] = inst_35449);

return statearr_35496;
})();
if(cljs.core.truth_(inst_35450)){
var statearr_35497_35576 = state_35463__$1;
(statearr_35497_35576[(1)] = (44));

} else {
var statearr_35498_35577 = state_35463__$1;
(statearr_35498_35577[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (29))){
var inst_35376 = (state_35463[(19)]);
var inst_35416 = (state_35463[(16)]);
var inst_35384 = (state_35463[(23)]);
var inst_35379 = (state_35463[(24)]);
var inst_35382 = (state_35463[(26)]);
var inst_35380 = (state_35463[(25)]);
var inst_35412 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35415 = (function (){var all_files = inst_35376;
var res_SINGLEQUOTE_ = inst_35379;
var res = inst_35380;
var files_not_loaded = inst_35382;
var dependencies_that_loaded = inst_35384;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35376,inst_35416,inst_35384,inst_35379,inst_35382,inst_35380,inst_35412,state_val_35464,c__29844__auto__,map__35308,map__35308__$1,opts,before_jsload,on_jsload,reload_dependents,map__35309,map__35309__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35414){
var map__35499 = p__35414;
var map__35499__$1 = ((((!((map__35499 == null)))?((((map__35499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35499):map__35499);
var namespace = cljs.core.get.call(null,map__35499__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35376,inst_35416,inst_35384,inst_35379,inst_35382,inst_35380,inst_35412,state_val_35464,c__29844__auto__,map__35308,map__35308__$1,opts,before_jsload,on_jsload,reload_dependents,map__35309,map__35309__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35416__$1 = cljs.core.group_by.call(null,inst_35415,inst_35382);
var inst_35418 = (inst_35416__$1 == null);
var inst_35419 = cljs.core.not.call(null,inst_35418);
var state_35463__$1 = (function (){var statearr_35501 = state_35463;
(statearr_35501[(16)] = inst_35416__$1);

(statearr_35501[(28)] = inst_35412);

return statearr_35501;
})();
if(inst_35419){
var statearr_35502_35578 = state_35463__$1;
(statearr_35502_35578[(1)] = (32));

} else {
var statearr_35503_35579 = state_35463__$1;
(statearr_35503_35579[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (44))){
var inst_35439 = (state_35463[(21)]);
var inst_35452 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35439);
var inst_35453 = cljs.core.pr_str.call(null,inst_35452);
var inst_35454 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35453)].join('');
var inst_35455 = figwheel.client.utils.log.call(null,inst_35454);
var state_35463__$1 = state_35463;
var statearr_35504_35580 = state_35463__$1;
(statearr_35504_35580[(2)] = inst_35455);

(statearr_35504_35580[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (6))){
var inst_35357 = (state_35463[(2)]);
var state_35463__$1 = state_35463;
var statearr_35505_35581 = state_35463__$1;
(statearr_35505_35581[(2)] = inst_35357);

(statearr_35505_35581[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (28))){
var inst_35382 = (state_35463[(26)]);
var inst_35409 = (state_35463[(2)]);
var inst_35410 = cljs.core.not_empty.call(null,inst_35382);
var state_35463__$1 = (function (){var statearr_35506 = state_35463;
(statearr_35506[(29)] = inst_35409);

return statearr_35506;
})();
if(cljs.core.truth_(inst_35410)){
var statearr_35507_35582 = state_35463__$1;
(statearr_35507_35582[(1)] = (29));

} else {
var statearr_35508_35583 = state_35463__$1;
(statearr_35508_35583[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (25))){
var inst_35380 = (state_35463[(25)]);
var inst_35396 = (state_35463[(2)]);
var inst_35397 = cljs.core.not_empty.call(null,inst_35380);
var state_35463__$1 = (function (){var statearr_35509 = state_35463;
(statearr_35509[(30)] = inst_35396);

return statearr_35509;
})();
if(cljs.core.truth_(inst_35397)){
var statearr_35510_35584 = state_35463__$1;
(statearr_35510_35584[(1)] = (26));

} else {
var statearr_35511_35585 = state_35463__$1;
(statearr_35511_35585[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (34))){
var inst_35432 = (state_35463[(2)]);
var state_35463__$1 = state_35463;
if(cljs.core.truth_(inst_35432)){
var statearr_35512_35586 = state_35463__$1;
(statearr_35512_35586[(1)] = (38));

} else {
var statearr_35513_35587 = state_35463__$1;
(statearr_35513_35587[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (17))){
var state_35463__$1 = state_35463;
var statearr_35514_35588 = state_35463__$1;
(statearr_35514_35588[(2)] = recompile_dependents);

(statearr_35514_35588[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (3))){
var state_35463__$1 = state_35463;
var statearr_35515_35589 = state_35463__$1;
(statearr_35515_35589[(2)] = null);

(statearr_35515_35589[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (12))){
var inst_35353 = (state_35463[(2)]);
var state_35463__$1 = state_35463;
var statearr_35516_35590 = state_35463__$1;
(statearr_35516_35590[(2)] = inst_35353);

(statearr_35516_35590[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (2))){
var inst_35315 = (state_35463[(13)]);
var inst_35322 = cljs.core.seq.call(null,inst_35315);
var inst_35323 = inst_35322;
var inst_35324 = null;
var inst_35325 = (0);
var inst_35326 = (0);
var state_35463__$1 = (function (){var statearr_35517 = state_35463;
(statearr_35517[(7)] = inst_35325);

(statearr_35517[(8)] = inst_35324);

(statearr_35517[(9)] = inst_35326);

(statearr_35517[(10)] = inst_35323);

return statearr_35517;
})();
var statearr_35518_35591 = state_35463__$1;
(statearr_35518_35591[(2)] = null);

(statearr_35518_35591[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (23))){
var inst_35376 = (state_35463[(19)]);
var inst_35384 = (state_35463[(23)]);
var inst_35379 = (state_35463[(24)]);
var inst_35382 = (state_35463[(26)]);
var inst_35380 = (state_35463[(25)]);
var inst_35387 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35389 = (function (){var all_files = inst_35376;
var res_SINGLEQUOTE_ = inst_35379;
var res = inst_35380;
var files_not_loaded = inst_35382;
var dependencies_that_loaded = inst_35384;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35376,inst_35384,inst_35379,inst_35382,inst_35380,inst_35387,state_val_35464,c__29844__auto__,map__35308,map__35308__$1,opts,before_jsload,on_jsload,reload_dependents,map__35309,map__35309__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35388){
var map__35519 = p__35388;
var map__35519__$1 = ((((!((map__35519 == null)))?((((map__35519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35519):map__35519);
var request_url = cljs.core.get.call(null,map__35519__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35376,inst_35384,inst_35379,inst_35382,inst_35380,inst_35387,state_val_35464,c__29844__auto__,map__35308,map__35308__$1,opts,before_jsload,on_jsload,reload_dependents,map__35309,map__35309__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35390 = cljs.core.reverse.call(null,inst_35384);
var inst_35391 = cljs.core.map.call(null,inst_35389,inst_35390);
var inst_35392 = cljs.core.pr_str.call(null,inst_35391);
var inst_35393 = figwheel.client.utils.log.call(null,inst_35392);
var state_35463__$1 = (function (){var statearr_35521 = state_35463;
(statearr_35521[(31)] = inst_35387);

return statearr_35521;
})();
var statearr_35522_35592 = state_35463__$1;
(statearr_35522_35592[(2)] = inst_35393);

(statearr_35522_35592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (35))){
var state_35463__$1 = state_35463;
var statearr_35523_35593 = state_35463__$1;
(statearr_35523_35593[(2)] = true);

(statearr_35523_35593[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (19))){
var inst_35366 = (state_35463[(12)]);
var inst_35372 = figwheel.client.file_reloading.expand_files.call(null,inst_35366);
var state_35463__$1 = state_35463;
var statearr_35524_35594 = state_35463__$1;
(statearr_35524_35594[(2)] = inst_35372);

(statearr_35524_35594[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (11))){
var state_35463__$1 = state_35463;
var statearr_35525_35595 = state_35463__$1;
(statearr_35525_35595[(2)] = null);

(statearr_35525_35595[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (9))){
var inst_35355 = (state_35463[(2)]);
var state_35463__$1 = state_35463;
var statearr_35526_35596 = state_35463__$1;
(statearr_35526_35596[(2)] = inst_35355);

(statearr_35526_35596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (5))){
var inst_35325 = (state_35463[(7)]);
var inst_35326 = (state_35463[(9)]);
var inst_35328 = (inst_35326 < inst_35325);
var inst_35329 = inst_35328;
var state_35463__$1 = state_35463;
if(cljs.core.truth_(inst_35329)){
var statearr_35527_35597 = state_35463__$1;
(statearr_35527_35597[(1)] = (7));

} else {
var statearr_35528_35598 = state_35463__$1;
(statearr_35528_35598[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (14))){
var inst_35336 = (state_35463[(22)]);
var inst_35345 = cljs.core.first.call(null,inst_35336);
var inst_35346 = figwheel.client.file_reloading.eval_body.call(null,inst_35345,opts);
var inst_35347 = cljs.core.next.call(null,inst_35336);
var inst_35323 = inst_35347;
var inst_35324 = null;
var inst_35325 = (0);
var inst_35326 = (0);
var state_35463__$1 = (function (){var statearr_35529 = state_35463;
(statearr_35529[(32)] = inst_35346);

(statearr_35529[(7)] = inst_35325);

(statearr_35529[(8)] = inst_35324);

(statearr_35529[(9)] = inst_35326);

(statearr_35529[(10)] = inst_35323);

return statearr_35529;
})();
var statearr_35530_35599 = state_35463__$1;
(statearr_35530_35599[(2)] = null);

(statearr_35530_35599[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (45))){
var state_35463__$1 = state_35463;
var statearr_35531_35600 = state_35463__$1;
(statearr_35531_35600[(2)] = null);

(statearr_35531_35600[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (26))){
var inst_35376 = (state_35463[(19)]);
var inst_35384 = (state_35463[(23)]);
var inst_35379 = (state_35463[(24)]);
var inst_35382 = (state_35463[(26)]);
var inst_35380 = (state_35463[(25)]);
var inst_35399 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35401 = (function (){var all_files = inst_35376;
var res_SINGLEQUOTE_ = inst_35379;
var res = inst_35380;
var files_not_loaded = inst_35382;
var dependencies_that_loaded = inst_35384;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35376,inst_35384,inst_35379,inst_35382,inst_35380,inst_35399,state_val_35464,c__29844__auto__,map__35308,map__35308__$1,opts,before_jsload,on_jsload,reload_dependents,map__35309,map__35309__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35400){
var map__35532 = p__35400;
var map__35532__$1 = ((((!((map__35532 == null)))?((((map__35532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35532.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35532):map__35532);
var namespace = cljs.core.get.call(null,map__35532__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35532__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35376,inst_35384,inst_35379,inst_35382,inst_35380,inst_35399,state_val_35464,c__29844__auto__,map__35308,map__35308__$1,opts,before_jsload,on_jsload,reload_dependents,map__35309,map__35309__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35402 = cljs.core.map.call(null,inst_35401,inst_35380);
var inst_35403 = cljs.core.pr_str.call(null,inst_35402);
var inst_35404 = figwheel.client.utils.log.call(null,inst_35403);
var inst_35405 = (function (){var all_files = inst_35376;
var res_SINGLEQUOTE_ = inst_35379;
var res = inst_35380;
var files_not_loaded = inst_35382;
var dependencies_that_loaded = inst_35384;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35376,inst_35384,inst_35379,inst_35382,inst_35380,inst_35399,inst_35401,inst_35402,inst_35403,inst_35404,state_val_35464,c__29844__auto__,map__35308,map__35308__$1,opts,before_jsload,on_jsload,reload_dependents,map__35309,map__35309__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35376,inst_35384,inst_35379,inst_35382,inst_35380,inst_35399,inst_35401,inst_35402,inst_35403,inst_35404,state_val_35464,c__29844__auto__,map__35308,map__35308__$1,opts,before_jsload,on_jsload,reload_dependents,map__35309,map__35309__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35406 = setTimeout(inst_35405,(10));
var state_35463__$1 = (function (){var statearr_35534 = state_35463;
(statearr_35534[(33)] = inst_35399);

(statearr_35534[(34)] = inst_35404);

return statearr_35534;
})();
var statearr_35535_35601 = state_35463__$1;
(statearr_35535_35601[(2)] = inst_35406);

(statearr_35535_35601[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (16))){
var state_35463__$1 = state_35463;
var statearr_35536_35602 = state_35463__$1;
(statearr_35536_35602[(2)] = reload_dependents);

(statearr_35536_35602[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (38))){
var inst_35416 = (state_35463[(16)]);
var inst_35434 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35416);
var state_35463__$1 = state_35463;
var statearr_35537_35603 = state_35463__$1;
(statearr_35537_35603[(2)] = inst_35434);

(statearr_35537_35603[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (30))){
var state_35463__$1 = state_35463;
var statearr_35538_35604 = state_35463__$1;
(statearr_35538_35604[(2)] = null);

(statearr_35538_35604[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (10))){
var inst_35336 = (state_35463[(22)]);
var inst_35338 = cljs.core.chunked_seq_QMARK_.call(null,inst_35336);
var state_35463__$1 = state_35463;
if(inst_35338){
var statearr_35539_35605 = state_35463__$1;
(statearr_35539_35605[(1)] = (13));

} else {
var statearr_35540_35606 = state_35463__$1;
(statearr_35540_35606[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (18))){
var inst_35370 = (state_35463[(2)]);
var state_35463__$1 = state_35463;
if(cljs.core.truth_(inst_35370)){
var statearr_35541_35607 = state_35463__$1;
(statearr_35541_35607[(1)] = (19));

} else {
var statearr_35542_35608 = state_35463__$1;
(statearr_35542_35608[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (42))){
var state_35463__$1 = state_35463;
var statearr_35543_35609 = state_35463__$1;
(statearr_35543_35609[(2)] = null);

(statearr_35543_35609[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (37))){
var inst_35429 = (state_35463[(2)]);
var state_35463__$1 = state_35463;
var statearr_35544_35610 = state_35463__$1;
(statearr_35544_35610[(2)] = inst_35429);

(statearr_35544_35610[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35464 === (8))){
var inst_35336 = (state_35463[(22)]);
var inst_35323 = (state_35463[(10)]);
var inst_35336__$1 = cljs.core.seq.call(null,inst_35323);
var state_35463__$1 = (function (){var statearr_35545 = state_35463;
(statearr_35545[(22)] = inst_35336__$1);

return statearr_35545;
})();
if(inst_35336__$1){
var statearr_35546_35611 = state_35463__$1;
(statearr_35546_35611[(1)] = (10));

} else {
var statearr_35547_35612 = state_35463__$1;
(statearr_35547_35612[(1)] = (11));

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
});})(c__29844__auto__,map__35308,map__35308__$1,opts,before_jsload,on_jsload,reload_dependents,map__35309,map__35309__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29829__auto__,c__29844__auto__,map__35308,map__35308__$1,opts,before_jsload,on_jsload,reload_dependents,map__35309,map__35309__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29830__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29830__auto____0 = (function (){
var statearr_35551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35551[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29830__auto__);

(statearr_35551[(1)] = (1));

return statearr_35551;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29830__auto____1 = (function (state_35463){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_35463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e35552){if((e35552 instanceof Object)){
var ex__29833__auto__ = e35552;
var statearr_35553_35613 = state_35463;
(statearr_35553_35613[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35614 = state_35463;
state_35463 = G__35614;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29830__auto__ = function(state_35463){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29830__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29830__auto____1.call(this,state_35463);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29830__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29830__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto__,map__35308,map__35308__$1,opts,before_jsload,on_jsload,reload_dependents,map__35309,map__35309__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29846__auto__ = (function (){var statearr_35554 = f__29845__auto__.call(null);
(statearr_35554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto__);

return statearr_35554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto__,map__35308,map__35308__$1,opts,before_jsload,on_jsload,reload_dependents,map__35309,map__35309__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29844__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35617,link){
var map__35620 = p__35617;
var map__35620__$1 = ((((!((map__35620 == null)))?((((map__35620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35620):map__35620);
var file = cljs.core.get.call(null,map__35620__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35620,map__35620__$1,file){
return (function (p1__35615_SHARP_,p2__35616_SHARP_){
if(cljs.core._EQ_.call(null,p1__35615_SHARP_,p2__35616_SHARP_)){
return p1__35615_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35620,map__35620__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35626){
var map__35627 = p__35626;
var map__35627__$1 = ((((!((map__35627 == null)))?((((map__35627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35627.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35627):map__35627);
var match_length = cljs.core.get.call(null,map__35627__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35627__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35622_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35622_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35629_SHARP_,p2__35630_SHARP_){
return cljs.core.assoc.call(null,p1__35629_SHARP_,cljs.core.get.call(null,p2__35630_SHARP_,key),p2__35630_SHARP_);
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
var loaded_f_datas_35631 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35631);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35631);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35632,p__35633){
var map__35638 = p__35632;
var map__35638__$1 = ((((!((map__35638 == null)))?((((map__35638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35638.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35638):map__35638);
var on_cssload = cljs.core.get.call(null,map__35638__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35639 = p__35633;
var map__35639__$1 = ((((!((map__35639 == null)))?((((map__35639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35639):map__35639);
var files_msg = map__35639__$1;
var files = cljs.core.get.call(null,map__35639__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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