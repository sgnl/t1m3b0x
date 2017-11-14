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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34621_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34621_SHARP_));
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
var seq__34626 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34627 = null;
var count__34628 = (0);
var i__34629 = (0);
while(true){
if((i__34629 < count__34628)){
var n = cljs.core._nth.call(null,chunk__34627,i__34629);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34630 = seq__34626;
var G__34631 = chunk__34627;
var G__34632 = count__34628;
var G__34633 = (i__34629 + (1));
seq__34626 = G__34630;
chunk__34627 = G__34631;
count__34628 = G__34632;
i__34629 = G__34633;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34626);
if(temp__4657__auto__){
var seq__34626__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34626__$1)){
var c__27493__auto__ = cljs.core.chunk_first.call(null,seq__34626__$1);
var G__34634 = cljs.core.chunk_rest.call(null,seq__34626__$1);
var G__34635 = c__27493__auto__;
var G__34636 = cljs.core.count.call(null,c__27493__auto__);
var G__34637 = (0);
seq__34626 = G__34634;
chunk__34627 = G__34635;
count__34628 = G__34636;
i__34629 = G__34637;
continue;
} else {
var n = cljs.core.first.call(null,seq__34626__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34638 = cljs.core.next.call(null,seq__34626__$1);
var G__34639 = null;
var G__34640 = (0);
var G__34641 = (0);
seq__34626 = G__34638;
chunk__34627 = G__34639;
count__34628 = G__34640;
i__34629 = G__34641;
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

var seq__34692_34703 = cljs.core.seq.call(null,deps);
var chunk__34693_34704 = null;
var count__34694_34705 = (0);
var i__34695_34706 = (0);
while(true){
if((i__34695_34706 < count__34694_34705)){
var dep_34707 = cljs.core._nth.call(null,chunk__34693_34704,i__34695_34706);
topo_sort_helper_STAR_.call(null,dep_34707,(depth + (1)),state);

var G__34708 = seq__34692_34703;
var G__34709 = chunk__34693_34704;
var G__34710 = count__34694_34705;
var G__34711 = (i__34695_34706 + (1));
seq__34692_34703 = G__34708;
chunk__34693_34704 = G__34709;
count__34694_34705 = G__34710;
i__34695_34706 = G__34711;
continue;
} else {
var temp__4657__auto___34712 = cljs.core.seq.call(null,seq__34692_34703);
if(temp__4657__auto___34712){
var seq__34692_34713__$1 = temp__4657__auto___34712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34692_34713__$1)){
var c__27493__auto___34714 = cljs.core.chunk_first.call(null,seq__34692_34713__$1);
var G__34715 = cljs.core.chunk_rest.call(null,seq__34692_34713__$1);
var G__34716 = c__27493__auto___34714;
var G__34717 = cljs.core.count.call(null,c__27493__auto___34714);
var G__34718 = (0);
seq__34692_34703 = G__34715;
chunk__34693_34704 = G__34716;
count__34694_34705 = G__34717;
i__34695_34706 = G__34718;
continue;
} else {
var dep_34719 = cljs.core.first.call(null,seq__34692_34713__$1);
topo_sort_helper_STAR_.call(null,dep_34719,(depth + (1)),state);

var G__34720 = cljs.core.next.call(null,seq__34692_34713__$1);
var G__34721 = null;
var G__34722 = (0);
var G__34723 = (0);
seq__34692_34703 = G__34720;
chunk__34693_34704 = G__34721;
count__34694_34705 = G__34722;
i__34695_34706 = G__34723;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34696){
var vec__34700 = p__34696;
var seq__34701 = cljs.core.seq.call(null,vec__34700);
var first__34702 = cljs.core.first.call(null,seq__34701);
var seq__34701__$1 = cljs.core.next.call(null,seq__34701);
var x = first__34702;
var xs = seq__34701__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34700,seq__34701,first__34702,seq__34701__$1,x,xs,get_deps__$1){
return (function (p1__34642_SHARP_){
return clojure.set.difference.call(null,p1__34642_SHARP_,x);
});})(vec__34700,seq__34701,first__34702,seq__34701__$1,x,xs,get_deps__$1))
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
var seq__34736 = cljs.core.seq.call(null,provides);
var chunk__34737 = null;
var count__34738 = (0);
var i__34739 = (0);
while(true){
if((i__34739 < count__34738)){
var prov = cljs.core._nth.call(null,chunk__34737,i__34739);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34740_34748 = cljs.core.seq.call(null,requires);
var chunk__34741_34749 = null;
var count__34742_34750 = (0);
var i__34743_34751 = (0);
while(true){
if((i__34743_34751 < count__34742_34750)){
var req_34752 = cljs.core._nth.call(null,chunk__34741_34749,i__34743_34751);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34752,prov);

var G__34753 = seq__34740_34748;
var G__34754 = chunk__34741_34749;
var G__34755 = count__34742_34750;
var G__34756 = (i__34743_34751 + (1));
seq__34740_34748 = G__34753;
chunk__34741_34749 = G__34754;
count__34742_34750 = G__34755;
i__34743_34751 = G__34756;
continue;
} else {
var temp__4657__auto___34757 = cljs.core.seq.call(null,seq__34740_34748);
if(temp__4657__auto___34757){
var seq__34740_34758__$1 = temp__4657__auto___34757;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34740_34758__$1)){
var c__27493__auto___34759 = cljs.core.chunk_first.call(null,seq__34740_34758__$1);
var G__34760 = cljs.core.chunk_rest.call(null,seq__34740_34758__$1);
var G__34761 = c__27493__auto___34759;
var G__34762 = cljs.core.count.call(null,c__27493__auto___34759);
var G__34763 = (0);
seq__34740_34748 = G__34760;
chunk__34741_34749 = G__34761;
count__34742_34750 = G__34762;
i__34743_34751 = G__34763;
continue;
} else {
var req_34764 = cljs.core.first.call(null,seq__34740_34758__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34764,prov);

var G__34765 = cljs.core.next.call(null,seq__34740_34758__$1);
var G__34766 = null;
var G__34767 = (0);
var G__34768 = (0);
seq__34740_34748 = G__34765;
chunk__34741_34749 = G__34766;
count__34742_34750 = G__34767;
i__34743_34751 = G__34768;
continue;
}
} else {
}
}
break;
}

var G__34769 = seq__34736;
var G__34770 = chunk__34737;
var G__34771 = count__34738;
var G__34772 = (i__34739 + (1));
seq__34736 = G__34769;
chunk__34737 = G__34770;
count__34738 = G__34771;
i__34739 = G__34772;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34736);
if(temp__4657__auto__){
var seq__34736__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34736__$1)){
var c__27493__auto__ = cljs.core.chunk_first.call(null,seq__34736__$1);
var G__34773 = cljs.core.chunk_rest.call(null,seq__34736__$1);
var G__34774 = c__27493__auto__;
var G__34775 = cljs.core.count.call(null,c__27493__auto__);
var G__34776 = (0);
seq__34736 = G__34773;
chunk__34737 = G__34774;
count__34738 = G__34775;
i__34739 = G__34776;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34736__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34744_34777 = cljs.core.seq.call(null,requires);
var chunk__34745_34778 = null;
var count__34746_34779 = (0);
var i__34747_34780 = (0);
while(true){
if((i__34747_34780 < count__34746_34779)){
var req_34781 = cljs.core._nth.call(null,chunk__34745_34778,i__34747_34780);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34781,prov);

var G__34782 = seq__34744_34777;
var G__34783 = chunk__34745_34778;
var G__34784 = count__34746_34779;
var G__34785 = (i__34747_34780 + (1));
seq__34744_34777 = G__34782;
chunk__34745_34778 = G__34783;
count__34746_34779 = G__34784;
i__34747_34780 = G__34785;
continue;
} else {
var temp__4657__auto___34786__$1 = cljs.core.seq.call(null,seq__34744_34777);
if(temp__4657__auto___34786__$1){
var seq__34744_34787__$1 = temp__4657__auto___34786__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34744_34787__$1)){
var c__27493__auto___34788 = cljs.core.chunk_first.call(null,seq__34744_34787__$1);
var G__34789 = cljs.core.chunk_rest.call(null,seq__34744_34787__$1);
var G__34790 = c__27493__auto___34788;
var G__34791 = cljs.core.count.call(null,c__27493__auto___34788);
var G__34792 = (0);
seq__34744_34777 = G__34789;
chunk__34745_34778 = G__34790;
count__34746_34779 = G__34791;
i__34747_34780 = G__34792;
continue;
} else {
var req_34793 = cljs.core.first.call(null,seq__34744_34787__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34793,prov);

var G__34794 = cljs.core.next.call(null,seq__34744_34787__$1);
var G__34795 = null;
var G__34796 = (0);
var G__34797 = (0);
seq__34744_34777 = G__34794;
chunk__34745_34778 = G__34795;
count__34746_34779 = G__34796;
i__34747_34780 = G__34797;
continue;
}
} else {
}
}
break;
}

var G__34798 = cljs.core.next.call(null,seq__34736__$1);
var G__34799 = null;
var G__34800 = (0);
var G__34801 = (0);
seq__34736 = G__34798;
chunk__34737 = G__34799;
count__34738 = G__34800;
i__34739 = G__34801;
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
var seq__34806_34810 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34807_34811 = null;
var count__34808_34812 = (0);
var i__34809_34813 = (0);
while(true){
if((i__34809_34813 < count__34808_34812)){
var ns_34814 = cljs.core._nth.call(null,chunk__34807_34811,i__34809_34813);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34814);

var G__34815 = seq__34806_34810;
var G__34816 = chunk__34807_34811;
var G__34817 = count__34808_34812;
var G__34818 = (i__34809_34813 + (1));
seq__34806_34810 = G__34815;
chunk__34807_34811 = G__34816;
count__34808_34812 = G__34817;
i__34809_34813 = G__34818;
continue;
} else {
var temp__4657__auto___34819 = cljs.core.seq.call(null,seq__34806_34810);
if(temp__4657__auto___34819){
var seq__34806_34820__$1 = temp__4657__auto___34819;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34806_34820__$1)){
var c__27493__auto___34821 = cljs.core.chunk_first.call(null,seq__34806_34820__$1);
var G__34822 = cljs.core.chunk_rest.call(null,seq__34806_34820__$1);
var G__34823 = c__27493__auto___34821;
var G__34824 = cljs.core.count.call(null,c__27493__auto___34821);
var G__34825 = (0);
seq__34806_34810 = G__34822;
chunk__34807_34811 = G__34823;
count__34808_34812 = G__34824;
i__34809_34813 = G__34825;
continue;
} else {
var ns_34826 = cljs.core.first.call(null,seq__34806_34820__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34826);

var G__34827 = cljs.core.next.call(null,seq__34806_34820__$1);
var G__34828 = null;
var G__34829 = (0);
var G__34830 = (0);
seq__34806_34810 = G__34827;
chunk__34807_34811 = G__34828;
count__34808_34812 = G__34829;
i__34809_34813 = G__34830;
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
var G__34831__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34832__i = 0, G__34832__a = new Array(arguments.length -  0);
while (G__34832__i < G__34832__a.length) {G__34832__a[G__34832__i] = arguments[G__34832__i + 0]; ++G__34832__i;}
  args = new cljs.core.IndexedSeq(G__34832__a,0,null);
} 
return G__34831__delegate.call(this,args);};
G__34831.cljs$lang$maxFixedArity = 0;
G__34831.cljs$lang$applyTo = (function (arglist__34833){
var args = cljs.core.seq(arglist__34833);
return G__34831__delegate(args);
});
G__34831.cljs$core$IFn$_invoke$arity$variadic = G__34831__delegate;
return G__34831;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34834 = cljs.core._EQ_;
var expr__34835 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34834.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34835))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34834,expr__34835){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34834,expr__34835))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34834,expr__34835){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34837){if((e34837 instanceof Error)){
var e = e34837;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34837;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34834,expr__34835))
} else {
if(cljs.core.truth_(pred__34834.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34835))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34834.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__34835))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34834.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34835))){
return ((function (pred__34834,expr__34835){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34838){if((e34838 instanceof Error)){
var e = e34838;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34838;

}
}})());
});
;})(pred__34834,expr__34835))
} else {
return ((function (pred__34834,expr__34835){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34834,expr__34835))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34839,callback){
var map__34842 = p__34839;
var map__34842__$1 = ((((!((map__34842 == null)))?((((map__34842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34842):map__34842);
var file_msg = map__34842__$1;
var request_url = cljs.core.get.call(null,map__34842__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34842,map__34842__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34842,map__34842__$1,file_msg,request_url))
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
return (function (state_34866){
var state_val_34867 = (state_34866[(1)]);
if((state_val_34867 === (7))){
var inst_34862 = (state_34866[(2)]);
var state_34866__$1 = state_34866;
var statearr_34868_34888 = state_34866__$1;
(statearr_34868_34888[(2)] = inst_34862);

(statearr_34868_34888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34867 === (1))){
var state_34866__$1 = state_34866;
var statearr_34869_34889 = state_34866__$1;
(statearr_34869_34889[(2)] = null);

(statearr_34869_34889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34867 === (4))){
var inst_34846 = (state_34866[(7)]);
var inst_34846__$1 = (state_34866[(2)]);
var state_34866__$1 = (function (){var statearr_34870 = state_34866;
(statearr_34870[(7)] = inst_34846__$1);

return statearr_34870;
})();
if(cljs.core.truth_(inst_34846__$1)){
var statearr_34871_34890 = state_34866__$1;
(statearr_34871_34890[(1)] = (5));

} else {
var statearr_34872_34891 = state_34866__$1;
(statearr_34872_34891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34867 === (6))){
var state_34866__$1 = state_34866;
var statearr_34873_34892 = state_34866__$1;
(statearr_34873_34892[(2)] = null);

(statearr_34873_34892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34867 === (3))){
var inst_34864 = (state_34866[(2)]);
var state_34866__$1 = state_34866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34866__$1,inst_34864);
} else {
if((state_val_34867 === (2))){
var state_34866__$1 = state_34866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34866__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34867 === (11))){
var inst_34858 = (state_34866[(2)]);
var state_34866__$1 = (function (){var statearr_34874 = state_34866;
(statearr_34874[(8)] = inst_34858);

return statearr_34874;
})();
var statearr_34875_34893 = state_34866__$1;
(statearr_34875_34893[(2)] = null);

(statearr_34875_34893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34867 === (9))){
var inst_34852 = (state_34866[(9)]);
var inst_34850 = (state_34866[(10)]);
var inst_34854 = inst_34852.call(null,inst_34850);
var state_34866__$1 = state_34866;
var statearr_34876_34894 = state_34866__$1;
(statearr_34876_34894[(2)] = inst_34854);

(statearr_34876_34894[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34867 === (5))){
var inst_34846 = (state_34866[(7)]);
var inst_34848 = figwheel.client.file_reloading.blocking_load.call(null,inst_34846);
var state_34866__$1 = state_34866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34866__$1,(8),inst_34848);
} else {
if((state_val_34867 === (10))){
var inst_34850 = (state_34866[(10)]);
var inst_34856 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34850);
var state_34866__$1 = state_34866;
var statearr_34877_34895 = state_34866__$1;
(statearr_34877_34895[(2)] = inst_34856);

(statearr_34877_34895[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34867 === (8))){
var inst_34846 = (state_34866[(7)]);
var inst_34852 = (state_34866[(9)]);
var inst_34850 = (state_34866[(2)]);
var inst_34851 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34852__$1 = cljs.core.get.call(null,inst_34851,inst_34846);
var state_34866__$1 = (function (){var statearr_34878 = state_34866;
(statearr_34878[(9)] = inst_34852__$1);

(statearr_34878[(10)] = inst_34850);

return statearr_34878;
})();
if(cljs.core.truth_(inst_34852__$1)){
var statearr_34879_34896 = state_34866__$1;
(statearr_34879_34896[(1)] = (9));

} else {
var statearr_34880_34897 = state_34866__$1;
(statearr_34880_34897[(1)] = (10));

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
var statearr_34884 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34884[(0)] = figwheel$client$file_reloading$state_machine__29830__auto__);

(statearr_34884[(1)] = (1));

return statearr_34884;
});
var figwheel$client$file_reloading$state_machine__29830__auto____1 = (function (state_34866){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_34866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e34885){if((e34885 instanceof Object)){
var ex__29833__auto__ = e34885;
var statearr_34886_34898 = state_34866;
(statearr_34886_34898[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34899 = state_34866;
state_34866 = G__34899;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29830__auto__ = function(state_34866){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29830__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29830__auto____1.call(this,state_34866);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29830__auto____0;
figwheel$client$file_reloading$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29830__auto____1;
return figwheel$client$file_reloading$state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto__))
})();
var state__29846__auto__ = (function (){var statearr_34887 = f__29845__auto__.call(null);
(statearr_34887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto__);

return statearr_34887;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34900,callback){
var map__34903 = p__34900;
var map__34903__$1 = ((((!((map__34903 == null)))?((((map__34903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34903):map__34903);
var file_msg = map__34903__$1;
var namespace = cljs.core.get.call(null,map__34903__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34903,map__34903__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34903,map__34903__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34905){
var map__34908 = p__34905;
var map__34908__$1 = ((((!((map__34908 == null)))?((((map__34908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34908.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34908):map__34908);
var file_msg = map__34908__$1;
var namespace = cljs.core.get.call(null,map__34908__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34910){
var map__34913 = p__34910;
var map__34913__$1 = ((((!((map__34913 == null)))?((((map__34913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34913):map__34913);
var file_msg = map__34913__$1;
var namespace = cljs.core.get.call(null,map__34913__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34915,callback){
var map__34918 = p__34915;
var map__34918__$1 = ((((!((map__34918 == null)))?((((map__34918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34918):map__34918);
var file_msg = map__34918__$1;
var request_url = cljs.core.get.call(null,map__34918__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34918__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29844__auto___35022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto___35022,out){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto___35022,out){
return (function (state_35004){
var state_val_35005 = (state_35004[(1)]);
if((state_val_35005 === (1))){
var inst_34978 = cljs.core.seq.call(null,files);
var inst_34979 = cljs.core.first.call(null,inst_34978);
var inst_34980 = cljs.core.next.call(null,inst_34978);
var inst_34981 = files;
var state_35004__$1 = (function (){var statearr_35006 = state_35004;
(statearr_35006[(7)] = inst_34980);

(statearr_35006[(8)] = inst_34979);

(statearr_35006[(9)] = inst_34981);

return statearr_35006;
})();
var statearr_35007_35023 = state_35004__$1;
(statearr_35007_35023[(2)] = null);

(statearr_35007_35023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (2))){
var inst_34981 = (state_35004[(9)]);
var inst_34987 = (state_35004[(10)]);
var inst_34986 = cljs.core.seq.call(null,inst_34981);
var inst_34987__$1 = cljs.core.first.call(null,inst_34986);
var inst_34988 = cljs.core.next.call(null,inst_34986);
var inst_34989 = (inst_34987__$1 == null);
var inst_34990 = cljs.core.not.call(null,inst_34989);
var state_35004__$1 = (function (){var statearr_35008 = state_35004;
(statearr_35008[(11)] = inst_34988);

(statearr_35008[(10)] = inst_34987__$1);

return statearr_35008;
})();
if(inst_34990){
var statearr_35009_35024 = state_35004__$1;
(statearr_35009_35024[(1)] = (4));

} else {
var statearr_35010_35025 = state_35004__$1;
(statearr_35010_35025[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (3))){
var inst_35002 = (state_35004[(2)]);
var state_35004__$1 = state_35004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35004__$1,inst_35002);
} else {
if((state_val_35005 === (4))){
var inst_34987 = (state_35004[(10)]);
var inst_34992 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34987);
var state_35004__$1 = state_35004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35004__$1,(7),inst_34992);
} else {
if((state_val_35005 === (5))){
var inst_34998 = cljs.core.async.close_BANG_.call(null,out);
var state_35004__$1 = state_35004;
var statearr_35011_35026 = state_35004__$1;
(statearr_35011_35026[(2)] = inst_34998);

(statearr_35011_35026[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (6))){
var inst_35000 = (state_35004[(2)]);
var state_35004__$1 = state_35004;
var statearr_35012_35027 = state_35004__$1;
(statearr_35012_35027[(2)] = inst_35000);

(statearr_35012_35027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (7))){
var inst_34988 = (state_35004[(11)]);
var inst_34994 = (state_35004[(2)]);
var inst_34995 = cljs.core.async.put_BANG_.call(null,out,inst_34994);
var inst_34981 = inst_34988;
var state_35004__$1 = (function (){var statearr_35013 = state_35004;
(statearr_35013[(12)] = inst_34995);

(statearr_35013[(9)] = inst_34981);

return statearr_35013;
})();
var statearr_35014_35028 = state_35004__$1;
(statearr_35014_35028[(2)] = null);

(statearr_35014_35028[(1)] = (2));


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
});})(c__29844__auto___35022,out))
;
return ((function (switch__29829__auto__,c__29844__auto___35022,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29830__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29830__auto____0 = (function (){
var statearr_35018 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35018[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29830__auto__);

(statearr_35018[(1)] = (1));

return statearr_35018;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29830__auto____1 = (function (state_35004){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_35004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e35019){if((e35019 instanceof Object)){
var ex__29833__auto__ = e35019;
var statearr_35020_35029 = state_35004;
(statearr_35020_35029[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35030 = state_35004;
state_35004 = G__35030;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29830__auto__ = function(state_35004){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29830__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29830__auto____1.call(this,state_35004);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29830__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29830__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto___35022,out))
})();
var state__29846__auto__ = (function (){var statearr_35021 = f__29845__auto__.call(null);
(statearr_35021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto___35022);

return statearr_35021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto___35022,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35031,opts){
var map__35035 = p__35031;
var map__35035__$1 = ((((!((map__35035 == null)))?((((map__35035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35035):map__35035);
var eval_body = cljs.core.get.call(null,map__35035__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35035__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e35037){var e = e35037;
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
return (function (p1__35038_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35038_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__35047){
var vec__35048 = p__35047;
var k = cljs.core.nth.call(null,vec__35048,(0),null);
var v = cljs.core.nth.call(null,vec__35048,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35051){
var vec__35052 = p__35051;
var k = cljs.core.nth.call(null,vec__35052,(0),null);
var v = cljs.core.nth.call(null,vec__35052,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35058,p__35059){
var map__35307 = p__35058;
var map__35307__$1 = ((((!((map__35307 == null)))?((((map__35307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35307.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35307):map__35307);
var opts = map__35307__$1;
var before_jsload = cljs.core.get.call(null,map__35307__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35307__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35307__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35308 = p__35059;
var map__35308__$1 = ((((!((map__35308 == null)))?((((map__35308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35308):map__35308);
var msg = map__35308__$1;
var files = cljs.core.get.call(null,map__35308__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35308__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35308__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto__,map__35307,map__35307__$1,opts,before_jsload,on_jsload,reload_dependents,map__35308,map__35308__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto__,map__35307,map__35307__$1,opts,before_jsload,on_jsload,reload_dependents,map__35308,map__35308__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35462){
var state_val_35463 = (state_35462[(1)]);
if((state_val_35463 === (7))){
var inst_35325 = (state_35462[(7)]);
var inst_35324 = (state_35462[(8)]);
var inst_35323 = (state_35462[(9)]);
var inst_35322 = (state_35462[(10)]);
var inst_35330 = cljs.core._nth.call(null,inst_35323,inst_35325);
var inst_35331 = figwheel.client.file_reloading.eval_body.call(null,inst_35330,opts);
var inst_35332 = (inst_35325 + (1));
var tmp35464 = inst_35324;
var tmp35465 = inst_35323;
var tmp35466 = inst_35322;
var inst_35322__$1 = tmp35466;
var inst_35323__$1 = tmp35465;
var inst_35324__$1 = tmp35464;
var inst_35325__$1 = inst_35332;
var state_35462__$1 = (function (){var statearr_35467 = state_35462;
(statearr_35467[(7)] = inst_35325__$1);

(statearr_35467[(8)] = inst_35324__$1);

(statearr_35467[(11)] = inst_35331);

(statearr_35467[(9)] = inst_35323__$1);

(statearr_35467[(10)] = inst_35322__$1);

return statearr_35467;
})();
var statearr_35468_35554 = state_35462__$1;
(statearr_35468_35554[(2)] = null);

(statearr_35468_35554[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (20))){
var inst_35365 = (state_35462[(12)]);
var inst_35373 = figwheel.client.file_reloading.sort_files.call(null,inst_35365);
var state_35462__$1 = state_35462;
var statearr_35469_35555 = state_35462__$1;
(statearr_35469_35555[(2)] = inst_35373);

(statearr_35469_35555[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (27))){
var state_35462__$1 = state_35462;
var statearr_35470_35556 = state_35462__$1;
(statearr_35470_35556[(2)] = null);

(statearr_35470_35556[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (1))){
var inst_35314 = (state_35462[(13)]);
var inst_35311 = before_jsload.call(null,files);
var inst_35312 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35313 = (function (){return ((function (inst_35314,inst_35311,inst_35312,state_val_35463,c__29844__auto__,map__35307,map__35307__$1,opts,before_jsload,on_jsload,reload_dependents,map__35308,map__35308__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35055_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35055_SHARP_);
});
;})(inst_35314,inst_35311,inst_35312,state_val_35463,c__29844__auto__,map__35307,map__35307__$1,opts,before_jsload,on_jsload,reload_dependents,map__35308,map__35308__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35314__$1 = cljs.core.filter.call(null,inst_35313,files);
var inst_35315 = cljs.core.not_empty.call(null,inst_35314__$1);
var state_35462__$1 = (function (){var statearr_35471 = state_35462;
(statearr_35471[(14)] = inst_35311);

(statearr_35471[(15)] = inst_35312);

(statearr_35471[(13)] = inst_35314__$1);

return statearr_35471;
})();
if(cljs.core.truth_(inst_35315)){
var statearr_35472_35557 = state_35462__$1;
(statearr_35472_35557[(1)] = (2));

} else {
var statearr_35473_35558 = state_35462__$1;
(statearr_35473_35558[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (24))){
var state_35462__$1 = state_35462;
var statearr_35474_35559 = state_35462__$1;
(statearr_35474_35559[(2)] = null);

(statearr_35474_35559[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (39))){
var inst_35415 = (state_35462[(16)]);
var state_35462__$1 = state_35462;
var statearr_35475_35560 = state_35462__$1;
(statearr_35475_35560[(2)] = inst_35415);

(statearr_35475_35560[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (46))){
var inst_35457 = (state_35462[(2)]);
var state_35462__$1 = state_35462;
var statearr_35476_35561 = state_35462__$1;
(statearr_35476_35561[(2)] = inst_35457);

(statearr_35476_35561[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (4))){
var inst_35359 = (state_35462[(2)]);
var inst_35360 = cljs.core.List.EMPTY;
var inst_35361 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35360);
var inst_35362 = (function (){return ((function (inst_35359,inst_35360,inst_35361,state_val_35463,c__29844__auto__,map__35307,map__35307__$1,opts,before_jsload,on_jsload,reload_dependents,map__35308,map__35308__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35056_SHARP_){
var and__26662__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35056_SHARP_);
if(cljs.core.truth_(and__26662__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35056_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35056_SHARP_)));
} else {
return and__26662__auto__;
}
});
;})(inst_35359,inst_35360,inst_35361,state_val_35463,c__29844__auto__,map__35307,map__35307__$1,opts,before_jsload,on_jsload,reload_dependents,map__35308,map__35308__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35363 = cljs.core.filter.call(null,inst_35362,files);
var inst_35364 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35365 = cljs.core.concat.call(null,inst_35363,inst_35364);
var state_35462__$1 = (function (){var statearr_35477 = state_35462;
(statearr_35477[(12)] = inst_35365);

(statearr_35477[(17)] = inst_35359);

(statearr_35477[(18)] = inst_35361);

return statearr_35477;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35478_35562 = state_35462__$1;
(statearr_35478_35562[(1)] = (16));

} else {
var statearr_35479_35563 = state_35462__$1;
(statearr_35479_35563[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (15))){
var inst_35349 = (state_35462[(2)]);
var state_35462__$1 = state_35462;
var statearr_35480_35564 = state_35462__$1;
(statearr_35480_35564[(2)] = inst_35349);

(statearr_35480_35564[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (21))){
var inst_35375 = (state_35462[(19)]);
var inst_35375__$1 = (state_35462[(2)]);
var inst_35376 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35375__$1);
var state_35462__$1 = (function (){var statearr_35481 = state_35462;
(statearr_35481[(19)] = inst_35375__$1);

return statearr_35481;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35462__$1,(22),inst_35376);
} else {
if((state_val_35463 === (31))){
var inst_35460 = (state_35462[(2)]);
var state_35462__$1 = state_35462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35462__$1,inst_35460);
} else {
if((state_val_35463 === (32))){
var inst_35415 = (state_35462[(16)]);
var inst_35420 = inst_35415.cljs$lang$protocol_mask$partition0$;
var inst_35421 = (inst_35420 & (64));
var inst_35422 = inst_35415.cljs$core$ISeq$;
var inst_35423 = (cljs.core.PROTOCOL_SENTINEL === inst_35422);
var inst_35424 = (inst_35421) || (inst_35423);
var state_35462__$1 = state_35462;
if(cljs.core.truth_(inst_35424)){
var statearr_35482_35565 = state_35462__$1;
(statearr_35482_35565[(1)] = (35));

} else {
var statearr_35483_35566 = state_35462__$1;
(statearr_35483_35566[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (40))){
var inst_35437 = (state_35462[(20)]);
var inst_35436 = (state_35462[(2)]);
var inst_35437__$1 = cljs.core.get.call(null,inst_35436,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35438 = cljs.core.get.call(null,inst_35436,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35439 = cljs.core.not_empty.call(null,inst_35437__$1);
var state_35462__$1 = (function (){var statearr_35484 = state_35462;
(statearr_35484[(20)] = inst_35437__$1);

(statearr_35484[(21)] = inst_35438);

return statearr_35484;
})();
if(cljs.core.truth_(inst_35439)){
var statearr_35485_35567 = state_35462__$1;
(statearr_35485_35567[(1)] = (41));

} else {
var statearr_35486_35568 = state_35462__$1;
(statearr_35486_35568[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (33))){
var state_35462__$1 = state_35462;
var statearr_35487_35569 = state_35462__$1;
(statearr_35487_35569[(2)] = false);

(statearr_35487_35569[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (13))){
var inst_35335 = (state_35462[(22)]);
var inst_35339 = cljs.core.chunk_first.call(null,inst_35335);
var inst_35340 = cljs.core.chunk_rest.call(null,inst_35335);
var inst_35341 = cljs.core.count.call(null,inst_35339);
var inst_35322 = inst_35340;
var inst_35323 = inst_35339;
var inst_35324 = inst_35341;
var inst_35325 = (0);
var state_35462__$1 = (function (){var statearr_35488 = state_35462;
(statearr_35488[(7)] = inst_35325);

(statearr_35488[(8)] = inst_35324);

(statearr_35488[(9)] = inst_35323);

(statearr_35488[(10)] = inst_35322);

return statearr_35488;
})();
var statearr_35489_35570 = state_35462__$1;
(statearr_35489_35570[(2)] = null);

(statearr_35489_35570[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (22))){
var inst_35375 = (state_35462[(19)]);
var inst_35383 = (state_35462[(23)]);
var inst_35379 = (state_35462[(24)]);
var inst_35378 = (state_35462[(25)]);
var inst_35378__$1 = (state_35462[(2)]);
var inst_35379__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35378__$1);
var inst_35380 = (function (){var all_files = inst_35375;
var res_SINGLEQUOTE_ = inst_35378__$1;
var res = inst_35379__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35375,inst_35383,inst_35379,inst_35378,inst_35378__$1,inst_35379__$1,state_val_35463,c__29844__auto__,map__35307,map__35307__$1,opts,before_jsload,on_jsload,reload_dependents,map__35308,map__35308__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35057_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35057_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35375,inst_35383,inst_35379,inst_35378,inst_35378__$1,inst_35379__$1,state_val_35463,c__29844__auto__,map__35307,map__35307__$1,opts,before_jsload,on_jsload,reload_dependents,map__35308,map__35308__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35381 = cljs.core.filter.call(null,inst_35380,inst_35378__$1);
var inst_35382 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35383__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35382);
var inst_35384 = cljs.core.not_empty.call(null,inst_35383__$1);
var state_35462__$1 = (function (){var statearr_35490 = state_35462;
(statearr_35490[(23)] = inst_35383__$1);

(statearr_35490[(24)] = inst_35379__$1);

(statearr_35490[(25)] = inst_35378__$1);

(statearr_35490[(26)] = inst_35381);

return statearr_35490;
})();
if(cljs.core.truth_(inst_35384)){
var statearr_35491_35571 = state_35462__$1;
(statearr_35491_35571[(1)] = (23));

} else {
var statearr_35492_35572 = state_35462__$1;
(statearr_35492_35572[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (36))){
var state_35462__$1 = state_35462;
var statearr_35493_35573 = state_35462__$1;
(statearr_35493_35573[(2)] = false);

(statearr_35493_35573[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (41))){
var inst_35437 = (state_35462[(20)]);
var inst_35441 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35442 = cljs.core.map.call(null,inst_35441,inst_35437);
var inst_35443 = cljs.core.pr_str.call(null,inst_35442);
var inst_35444 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35443)].join('');
var inst_35445 = figwheel.client.utils.log.call(null,inst_35444);
var state_35462__$1 = state_35462;
var statearr_35494_35574 = state_35462__$1;
(statearr_35494_35574[(2)] = inst_35445);

(statearr_35494_35574[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (43))){
var inst_35438 = (state_35462[(21)]);
var inst_35448 = (state_35462[(2)]);
var inst_35449 = cljs.core.not_empty.call(null,inst_35438);
var state_35462__$1 = (function (){var statearr_35495 = state_35462;
(statearr_35495[(27)] = inst_35448);

return statearr_35495;
})();
if(cljs.core.truth_(inst_35449)){
var statearr_35496_35575 = state_35462__$1;
(statearr_35496_35575[(1)] = (44));

} else {
var statearr_35497_35576 = state_35462__$1;
(statearr_35497_35576[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (29))){
var inst_35375 = (state_35462[(19)]);
var inst_35383 = (state_35462[(23)]);
var inst_35415 = (state_35462[(16)]);
var inst_35379 = (state_35462[(24)]);
var inst_35378 = (state_35462[(25)]);
var inst_35381 = (state_35462[(26)]);
var inst_35411 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35414 = (function (){var all_files = inst_35375;
var res_SINGLEQUOTE_ = inst_35378;
var res = inst_35379;
var files_not_loaded = inst_35381;
var dependencies_that_loaded = inst_35383;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35375,inst_35383,inst_35415,inst_35379,inst_35378,inst_35381,inst_35411,state_val_35463,c__29844__auto__,map__35307,map__35307__$1,opts,before_jsload,on_jsload,reload_dependents,map__35308,map__35308__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35413){
var map__35498 = p__35413;
var map__35498__$1 = ((((!((map__35498 == null)))?((((map__35498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35498.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35498):map__35498);
var namespace = cljs.core.get.call(null,map__35498__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35375,inst_35383,inst_35415,inst_35379,inst_35378,inst_35381,inst_35411,state_val_35463,c__29844__auto__,map__35307,map__35307__$1,opts,before_jsload,on_jsload,reload_dependents,map__35308,map__35308__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35415__$1 = cljs.core.group_by.call(null,inst_35414,inst_35381);
var inst_35417 = (inst_35415__$1 == null);
var inst_35418 = cljs.core.not.call(null,inst_35417);
var state_35462__$1 = (function (){var statearr_35500 = state_35462;
(statearr_35500[(28)] = inst_35411);

(statearr_35500[(16)] = inst_35415__$1);

return statearr_35500;
})();
if(inst_35418){
var statearr_35501_35577 = state_35462__$1;
(statearr_35501_35577[(1)] = (32));

} else {
var statearr_35502_35578 = state_35462__$1;
(statearr_35502_35578[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (44))){
var inst_35438 = (state_35462[(21)]);
var inst_35451 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35438);
var inst_35452 = cljs.core.pr_str.call(null,inst_35451);
var inst_35453 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35452)].join('');
var inst_35454 = figwheel.client.utils.log.call(null,inst_35453);
var state_35462__$1 = state_35462;
var statearr_35503_35579 = state_35462__$1;
(statearr_35503_35579[(2)] = inst_35454);

(statearr_35503_35579[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (6))){
var inst_35356 = (state_35462[(2)]);
var state_35462__$1 = state_35462;
var statearr_35504_35580 = state_35462__$1;
(statearr_35504_35580[(2)] = inst_35356);

(statearr_35504_35580[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (28))){
var inst_35381 = (state_35462[(26)]);
var inst_35408 = (state_35462[(2)]);
var inst_35409 = cljs.core.not_empty.call(null,inst_35381);
var state_35462__$1 = (function (){var statearr_35505 = state_35462;
(statearr_35505[(29)] = inst_35408);

return statearr_35505;
})();
if(cljs.core.truth_(inst_35409)){
var statearr_35506_35581 = state_35462__$1;
(statearr_35506_35581[(1)] = (29));

} else {
var statearr_35507_35582 = state_35462__$1;
(statearr_35507_35582[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (25))){
var inst_35379 = (state_35462[(24)]);
var inst_35395 = (state_35462[(2)]);
var inst_35396 = cljs.core.not_empty.call(null,inst_35379);
var state_35462__$1 = (function (){var statearr_35508 = state_35462;
(statearr_35508[(30)] = inst_35395);

return statearr_35508;
})();
if(cljs.core.truth_(inst_35396)){
var statearr_35509_35583 = state_35462__$1;
(statearr_35509_35583[(1)] = (26));

} else {
var statearr_35510_35584 = state_35462__$1;
(statearr_35510_35584[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (34))){
var inst_35431 = (state_35462[(2)]);
var state_35462__$1 = state_35462;
if(cljs.core.truth_(inst_35431)){
var statearr_35511_35585 = state_35462__$1;
(statearr_35511_35585[(1)] = (38));

} else {
var statearr_35512_35586 = state_35462__$1;
(statearr_35512_35586[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (17))){
var state_35462__$1 = state_35462;
var statearr_35513_35587 = state_35462__$1;
(statearr_35513_35587[(2)] = recompile_dependents);

(statearr_35513_35587[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (3))){
var state_35462__$1 = state_35462;
var statearr_35514_35588 = state_35462__$1;
(statearr_35514_35588[(2)] = null);

(statearr_35514_35588[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (12))){
var inst_35352 = (state_35462[(2)]);
var state_35462__$1 = state_35462;
var statearr_35515_35589 = state_35462__$1;
(statearr_35515_35589[(2)] = inst_35352);

(statearr_35515_35589[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (2))){
var inst_35314 = (state_35462[(13)]);
var inst_35321 = cljs.core.seq.call(null,inst_35314);
var inst_35322 = inst_35321;
var inst_35323 = null;
var inst_35324 = (0);
var inst_35325 = (0);
var state_35462__$1 = (function (){var statearr_35516 = state_35462;
(statearr_35516[(7)] = inst_35325);

(statearr_35516[(8)] = inst_35324);

(statearr_35516[(9)] = inst_35323);

(statearr_35516[(10)] = inst_35322);

return statearr_35516;
})();
var statearr_35517_35590 = state_35462__$1;
(statearr_35517_35590[(2)] = null);

(statearr_35517_35590[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (23))){
var inst_35375 = (state_35462[(19)]);
var inst_35383 = (state_35462[(23)]);
var inst_35379 = (state_35462[(24)]);
var inst_35378 = (state_35462[(25)]);
var inst_35381 = (state_35462[(26)]);
var inst_35386 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35388 = (function (){var all_files = inst_35375;
var res_SINGLEQUOTE_ = inst_35378;
var res = inst_35379;
var files_not_loaded = inst_35381;
var dependencies_that_loaded = inst_35383;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35375,inst_35383,inst_35379,inst_35378,inst_35381,inst_35386,state_val_35463,c__29844__auto__,map__35307,map__35307__$1,opts,before_jsload,on_jsload,reload_dependents,map__35308,map__35308__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35387){
var map__35518 = p__35387;
var map__35518__$1 = ((((!((map__35518 == null)))?((((map__35518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35518):map__35518);
var request_url = cljs.core.get.call(null,map__35518__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35375,inst_35383,inst_35379,inst_35378,inst_35381,inst_35386,state_val_35463,c__29844__auto__,map__35307,map__35307__$1,opts,before_jsload,on_jsload,reload_dependents,map__35308,map__35308__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35389 = cljs.core.reverse.call(null,inst_35383);
var inst_35390 = cljs.core.map.call(null,inst_35388,inst_35389);
var inst_35391 = cljs.core.pr_str.call(null,inst_35390);
var inst_35392 = figwheel.client.utils.log.call(null,inst_35391);
var state_35462__$1 = (function (){var statearr_35520 = state_35462;
(statearr_35520[(31)] = inst_35386);

return statearr_35520;
})();
var statearr_35521_35591 = state_35462__$1;
(statearr_35521_35591[(2)] = inst_35392);

(statearr_35521_35591[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (35))){
var state_35462__$1 = state_35462;
var statearr_35522_35592 = state_35462__$1;
(statearr_35522_35592[(2)] = true);

(statearr_35522_35592[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (19))){
var inst_35365 = (state_35462[(12)]);
var inst_35371 = figwheel.client.file_reloading.expand_files.call(null,inst_35365);
var state_35462__$1 = state_35462;
var statearr_35523_35593 = state_35462__$1;
(statearr_35523_35593[(2)] = inst_35371);

(statearr_35523_35593[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (11))){
var state_35462__$1 = state_35462;
var statearr_35524_35594 = state_35462__$1;
(statearr_35524_35594[(2)] = null);

(statearr_35524_35594[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (9))){
var inst_35354 = (state_35462[(2)]);
var state_35462__$1 = state_35462;
var statearr_35525_35595 = state_35462__$1;
(statearr_35525_35595[(2)] = inst_35354);

(statearr_35525_35595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (5))){
var inst_35325 = (state_35462[(7)]);
var inst_35324 = (state_35462[(8)]);
var inst_35327 = (inst_35325 < inst_35324);
var inst_35328 = inst_35327;
var state_35462__$1 = state_35462;
if(cljs.core.truth_(inst_35328)){
var statearr_35526_35596 = state_35462__$1;
(statearr_35526_35596[(1)] = (7));

} else {
var statearr_35527_35597 = state_35462__$1;
(statearr_35527_35597[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (14))){
var inst_35335 = (state_35462[(22)]);
var inst_35344 = cljs.core.first.call(null,inst_35335);
var inst_35345 = figwheel.client.file_reloading.eval_body.call(null,inst_35344,opts);
var inst_35346 = cljs.core.next.call(null,inst_35335);
var inst_35322 = inst_35346;
var inst_35323 = null;
var inst_35324 = (0);
var inst_35325 = (0);
var state_35462__$1 = (function (){var statearr_35528 = state_35462;
(statearr_35528[(7)] = inst_35325);

(statearr_35528[(8)] = inst_35324);

(statearr_35528[(32)] = inst_35345);

(statearr_35528[(9)] = inst_35323);

(statearr_35528[(10)] = inst_35322);

return statearr_35528;
})();
var statearr_35529_35598 = state_35462__$1;
(statearr_35529_35598[(2)] = null);

(statearr_35529_35598[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (45))){
var state_35462__$1 = state_35462;
var statearr_35530_35599 = state_35462__$1;
(statearr_35530_35599[(2)] = null);

(statearr_35530_35599[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (26))){
var inst_35375 = (state_35462[(19)]);
var inst_35383 = (state_35462[(23)]);
var inst_35379 = (state_35462[(24)]);
var inst_35378 = (state_35462[(25)]);
var inst_35381 = (state_35462[(26)]);
var inst_35398 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35400 = (function (){var all_files = inst_35375;
var res_SINGLEQUOTE_ = inst_35378;
var res = inst_35379;
var files_not_loaded = inst_35381;
var dependencies_that_loaded = inst_35383;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35375,inst_35383,inst_35379,inst_35378,inst_35381,inst_35398,state_val_35463,c__29844__auto__,map__35307,map__35307__$1,opts,before_jsload,on_jsload,reload_dependents,map__35308,map__35308__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35399){
var map__35531 = p__35399;
var map__35531__$1 = ((((!((map__35531 == null)))?((((map__35531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35531):map__35531);
var namespace = cljs.core.get.call(null,map__35531__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35531__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35375,inst_35383,inst_35379,inst_35378,inst_35381,inst_35398,state_val_35463,c__29844__auto__,map__35307,map__35307__$1,opts,before_jsload,on_jsload,reload_dependents,map__35308,map__35308__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35401 = cljs.core.map.call(null,inst_35400,inst_35379);
var inst_35402 = cljs.core.pr_str.call(null,inst_35401);
var inst_35403 = figwheel.client.utils.log.call(null,inst_35402);
var inst_35404 = (function (){var all_files = inst_35375;
var res_SINGLEQUOTE_ = inst_35378;
var res = inst_35379;
var files_not_loaded = inst_35381;
var dependencies_that_loaded = inst_35383;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35375,inst_35383,inst_35379,inst_35378,inst_35381,inst_35398,inst_35400,inst_35401,inst_35402,inst_35403,state_val_35463,c__29844__auto__,map__35307,map__35307__$1,opts,before_jsload,on_jsload,reload_dependents,map__35308,map__35308__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35375,inst_35383,inst_35379,inst_35378,inst_35381,inst_35398,inst_35400,inst_35401,inst_35402,inst_35403,state_val_35463,c__29844__auto__,map__35307,map__35307__$1,opts,before_jsload,on_jsload,reload_dependents,map__35308,map__35308__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35405 = setTimeout(inst_35404,(10));
var state_35462__$1 = (function (){var statearr_35533 = state_35462;
(statearr_35533[(33)] = inst_35403);

(statearr_35533[(34)] = inst_35398);

return statearr_35533;
})();
var statearr_35534_35600 = state_35462__$1;
(statearr_35534_35600[(2)] = inst_35405);

(statearr_35534_35600[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (16))){
var state_35462__$1 = state_35462;
var statearr_35535_35601 = state_35462__$1;
(statearr_35535_35601[(2)] = reload_dependents);

(statearr_35535_35601[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (38))){
var inst_35415 = (state_35462[(16)]);
var inst_35433 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35415);
var state_35462__$1 = state_35462;
var statearr_35536_35602 = state_35462__$1;
(statearr_35536_35602[(2)] = inst_35433);

(statearr_35536_35602[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (30))){
var state_35462__$1 = state_35462;
var statearr_35537_35603 = state_35462__$1;
(statearr_35537_35603[(2)] = null);

(statearr_35537_35603[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (10))){
var inst_35335 = (state_35462[(22)]);
var inst_35337 = cljs.core.chunked_seq_QMARK_.call(null,inst_35335);
var state_35462__$1 = state_35462;
if(inst_35337){
var statearr_35538_35604 = state_35462__$1;
(statearr_35538_35604[(1)] = (13));

} else {
var statearr_35539_35605 = state_35462__$1;
(statearr_35539_35605[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (18))){
var inst_35369 = (state_35462[(2)]);
var state_35462__$1 = state_35462;
if(cljs.core.truth_(inst_35369)){
var statearr_35540_35606 = state_35462__$1;
(statearr_35540_35606[(1)] = (19));

} else {
var statearr_35541_35607 = state_35462__$1;
(statearr_35541_35607[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (42))){
var state_35462__$1 = state_35462;
var statearr_35542_35608 = state_35462__$1;
(statearr_35542_35608[(2)] = null);

(statearr_35542_35608[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (37))){
var inst_35428 = (state_35462[(2)]);
var state_35462__$1 = state_35462;
var statearr_35543_35609 = state_35462__$1;
(statearr_35543_35609[(2)] = inst_35428);

(statearr_35543_35609[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (8))){
var inst_35335 = (state_35462[(22)]);
var inst_35322 = (state_35462[(10)]);
var inst_35335__$1 = cljs.core.seq.call(null,inst_35322);
var state_35462__$1 = (function (){var statearr_35544 = state_35462;
(statearr_35544[(22)] = inst_35335__$1);

return statearr_35544;
})();
if(inst_35335__$1){
var statearr_35545_35610 = state_35462__$1;
(statearr_35545_35610[(1)] = (10));

} else {
var statearr_35546_35611 = state_35462__$1;
(statearr_35546_35611[(1)] = (11));

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
});})(c__29844__auto__,map__35307,map__35307__$1,opts,before_jsload,on_jsload,reload_dependents,map__35308,map__35308__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29829__auto__,c__29844__auto__,map__35307,map__35307__$1,opts,before_jsload,on_jsload,reload_dependents,map__35308,map__35308__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29830__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29830__auto____0 = (function (){
var statearr_35550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35550[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29830__auto__);

(statearr_35550[(1)] = (1));

return statearr_35550;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29830__auto____1 = (function (state_35462){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_35462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e35551){if((e35551 instanceof Object)){
var ex__29833__auto__ = e35551;
var statearr_35552_35612 = state_35462;
(statearr_35552_35612[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35613 = state_35462;
state_35462 = G__35613;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29830__auto__ = function(state_35462){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29830__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29830__auto____1.call(this,state_35462);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29830__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29830__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto__,map__35307,map__35307__$1,opts,before_jsload,on_jsload,reload_dependents,map__35308,map__35308__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29846__auto__ = (function (){var statearr_35553 = f__29845__auto__.call(null);
(statearr_35553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto__);

return statearr_35553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto__,map__35307,map__35307__$1,opts,before_jsload,on_jsload,reload_dependents,map__35308,map__35308__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29844__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35616,link){
var map__35619 = p__35616;
var map__35619__$1 = ((((!((map__35619 == null)))?((((map__35619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35619.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35619):map__35619);
var file = cljs.core.get.call(null,map__35619__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35619,map__35619__$1,file){
return (function (p1__35614_SHARP_,p2__35615_SHARP_){
if(cljs.core._EQ_.call(null,p1__35614_SHARP_,p2__35615_SHARP_)){
return p1__35614_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35619,map__35619__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35625){
var map__35626 = p__35625;
var map__35626__$1 = ((((!((map__35626 == null)))?((((map__35626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35626.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35626):map__35626);
var match_length = cljs.core.get.call(null,map__35626__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35626__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35621_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35621_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35628_SHARP_,p2__35629_SHARP_){
return cljs.core.assoc.call(null,p1__35628_SHARP_,cljs.core.get.call(null,p2__35629_SHARP_,key),p2__35629_SHARP_);
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
var loaded_f_datas_35630 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35630);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35630);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35631,p__35632){
var map__35637 = p__35631;
var map__35637__$1 = ((((!((map__35637 == null)))?((((map__35637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35637):map__35637);
var on_cssload = cljs.core.get.call(null,map__35637__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35638 = p__35632;
var map__35638__$1 = ((((!((map__35638 == null)))?((((map__35638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35638.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35638):map__35638);
var files_msg = map__35638__$1;
var files = cljs.core.get.call(null,map__35638__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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