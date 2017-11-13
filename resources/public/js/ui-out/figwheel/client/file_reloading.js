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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34611_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34611_SHARP_));
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
var seq__34616 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34617 = null;
var count__34618 = (0);
var i__34619 = (0);
while(true){
if((i__34619 < count__34618)){
var n = cljs.core._nth.call(null,chunk__34617,i__34619);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34620 = seq__34616;
var G__34621 = chunk__34617;
var G__34622 = count__34618;
var G__34623 = (i__34619 + (1));
seq__34616 = G__34620;
chunk__34617 = G__34621;
count__34618 = G__34622;
i__34619 = G__34623;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34616);
if(temp__4657__auto__){
var seq__34616__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34616__$1)){
var c__27493__auto__ = cljs.core.chunk_first.call(null,seq__34616__$1);
var G__34624 = cljs.core.chunk_rest.call(null,seq__34616__$1);
var G__34625 = c__27493__auto__;
var G__34626 = cljs.core.count.call(null,c__27493__auto__);
var G__34627 = (0);
seq__34616 = G__34624;
chunk__34617 = G__34625;
count__34618 = G__34626;
i__34619 = G__34627;
continue;
} else {
var n = cljs.core.first.call(null,seq__34616__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34628 = cljs.core.next.call(null,seq__34616__$1);
var G__34629 = null;
var G__34630 = (0);
var G__34631 = (0);
seq__34616 = G__34628;
chunk__34617 = G__34629;
count__34618 = G__34630;
i__34619 = G__34631;
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

var seq__34682_34693 = cljs.core.seq.call(null,deps);
var chunk__34683_34694 = null;
var count__34684_34695 = (0);
var i__34685_34696 = (0);
while(true){
if((i__34685_34696 < count__34684_34695)){
var dep_34697 = cljs.core._nth.call(null,chunk__34683_34694,i__34685_34696);
topo_sort_helper_STAR_.call(null,dep_34697,(depth + (1)),state);

var G__34698 = seq__34682_34693;
var G__34699 = chunk__34683_34694;
var G__34700 = count__34684_34695;
var G__34701 = (i__34685_34696 + (1));
seq__34682_34693 = G__34698;
chunk__34683_34694 = G__34699;
count__34684_34695 = G__34700;
i__34685_34696 = G__34701;
continue;
} else {
var temp__4657__auto___34702 = cljs.core.seq.call(null,seq__34682_34693);
if(temp__4657__auto___34702){
var seq__34682_34703__$1 = temp__4657__auto___34702;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34682_34703__$1)){
var c__27493__auto___34704 = cljs.core.chunk_first.call(null,seq__34682_34703__$1);
var G__34705 = cljs.core.chunk_rest.call(null,seq__34682_34703__$1);
var G__34706 = c__27493__auto___34704;
var G__34707 = cljs.core.count.call(null,c__27493__auto___34704);
var G__34708 = (0);
seq__34682_34693 = G__34705;
chunk__34683_34694 = G__34706;
count__34684_34695 = G__34707;
i__34685_34696 = G__34708;
continue;
} else {
var dep_34709 = cljs.core.first.call(null,seq__34682_34703__$1);
topo_sort_helper_STAR_.call(null,dep_34709,(depth + (1)),state);

var G__34710 = cljs.core.next.call(null,seq__34682_34703__$1);
var G__34711 = null;
var G__34712 = (0);
var G__34713 = (0);
seq__34682_34693 = G__34710;
chunk__34683_34694 = G__34711;
count__34684_34695 = G__34712;
i__34685_34696 = G__34713;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34686){
var vec__34690 = p__34686;
var seq__34691 = cljs.core.seq.call(null,vec__34690);
var first__34692 = cljs.core.first.call(null,seq__34691);
var seq__34691__$1 = cljs.core.next.call(null,seq__34691);
var x = first__34692;
var xs = seq__34691__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34690,seq__34691,first__34692,seq__34691__$1,x,xs,get_deps__$1){
return (function (p1__34632_SHARP_){
return clojure.set.difference.call(null,p1__34632_SHARP_,x);
});})(vec__34690,seq__34691,first__34692,seq__34691__$1,x,xs,get_deps__$1))
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
var seq__34726 = cljs.core.seq.call(null,provides);
var chunk__34727 = null;
var count__34728 = (0);
var i__34729 = (0);
while(true){
if((i__34729 < count__34728)){
var prov = cljs.core._nth.call(null,chunk__34727,i__34729);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34730_34738 = cljs.core.seq.call(null,requires);
var chunk__34731_34739 = null;
var count__34732_34740 = (0);
var i__34733_34741 = (0);
while(true){
if((i__34733_34741 < count__34732_34740)){
var req_34742 = cljs.core._nth.call(null,chunk__34731_34739,i__34733_34741);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34742,prov);

var G__34743 = seq__34730_34738;
var G__34744 = chunk__34731_34739;
var G__34745 = count__34732_34740;
var G__34746 = (i__34733_34741 + (1));
seq__34730_34738 = G__34743;
chunk__34731_34739 = G__34744;
count__34732_34740 = G__34745;
i__34733_34741 = G__34746;
continue;
} else {
var temp__4657__auto___34747 = cljs.core.seq.call(null,seq__34730_34738);
if(temp__4657__auto___34747){
var seq__34730_34748__$1 = temp__4657__auto___34747;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34730_34748__$1)){
var c__27493__auto___34749 = cljs.core.chunk_first.call(null,seq__34730_34748__$1);
var G__34750 = cljs.core.chunk_rest.call(null,seq__34730_34748__$1);
var G__34751 = c__27493__auto___34749;
var G__34752 = cljs.core.count.call(null,c__27493__auto___34749);
var G__34753 = (0);
seq__34730_34738 = G__34750;
chunk__34731_34739 = G__34751;
count__34732_34740 = G__34752;
i__34733_34741 = G__34753;
continue;
} else {
var req_34754 = cljs.core.first.call(null,seq__34730_34748__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34754,prov);

var G__34755 = cljs.core.next.call(null,seq__34730_34748__$1);
var G__34756 = null;
var G__34757 = (0);
var G__34758 = (0);
seq__34730_34738 = G__34755;
chunk__34731_34739 = G__34756;
count__34732_34740 = G__34757;
i__34733_34741 = G__34758;
continue;
}
} else {
}
}
break;
}

var G__34759 = seq__34726;
var G__34760 = chunk__34727;
var G__34761 = count__34728;
var G__34762 = (i__34729 + (1));
seq__34726 = G__34759;
chunk__34727 = G__34760;
count__34728 = G__34761;
i__34729 = G__34762;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34726);
if(temp__4657__auto__){
var seq__34726__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34726__$1)){
var c__27493__auto__ = cljs.core.chunk_first.call(null,seq__34726__$1);
var G__34763 = cljs.core.chunk_rest.call(null,seq__34726__$1);
var G__34764 = c__27493__auto__;
var G__34765 = cljs.core.count.call(null,c__27493__auto__);
var G__34766 = (0);
seq__34726 = G__34763;
chunk__34727 = G__34764;
count__34728 = G__34765;
i__34729 = G__34766;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34726__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34734_34767 = cljs.core.seq.call(null,requires);
var chunk__34735_34768 = null;
var count__34736_34769 = (0);
var i__34737_34770 = (0);
while(true){
if((i__34737_34770 < count__34736_34769)){
var req_34771 = cljs.core._nth.call(null,chunk__34735_34768,i__34737_34770);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34771,prov);

var G__34772 = seq__34734_34767;
var G__34773 = chunk__34735_34768;
var G__34774 = count__34736_34769;
var G__34775 = (i__34737_34770 + (1));
seq__34734_34767 = G__34772;
chunk__34735_34768 = G__34773;
count__34736_34769 = G__34774;
i__34737_34770 = G__34775;
continue;
} else {
var temp__4657__auto___34776__$1 = cljs.core.seq.call(null,seq__34734_34767);
if(temp__4657__auto___34776__$1){
var seq__34734_34777__$1 = temp__4657__auto___34776__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34734_34777__$1)){
var c__27493__auto___34778 = cljs.core.chunk_first.call(null,seq__34734_34777__$1);
var G__34779 = cljs.core.chunk_rest.call(null,seq__34734_34777__$1);
var G__34780 = c__27493__auto___34778;
var G__34781 = cljs.core.count.call(null,c__27493__auto___34778);
var G__34782 = (0);
seq__34734_34767 = G__34779;
chunk__34735_34768 = G__34780;
count__34736_34769 = G__34781;
i__34737_34770 = G__34782;
continue;
} else {
var req_34783 = cljs.core.first.call(null,seq__34734_34777__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34783,prov);

var G__34784 = cljs.core.next.call(null,seq__34734_34777__$1);
var G__34785 = null;
var G__34786 = (0);
var G__34787 = (0);
seq__34734_34767 = G__34784;
chunk__34735_34768 = G__34785;
count__34736_34769 = G__34786;
i__34737_34770 = G__34787;
continue;
}
} else {
}
}
break;
}

var G__34788 = cljs.core.next.call(null,seq__34726__$1);
var G__34789 = null;
var G__34790 = (0);
var G__34791 = (0);
seq__34726 = G__34788;
chunk__34727 = G__34789;
count__34728 = G__34790;
i__34729 = G__34791;
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
var seq__34796_34800 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34797_34801 = null;
var count__34798_34802 = (0);
var i__34799_34803 = (0);
while(true){
if((i__34799_34803 < count__34798_34802)){
var ns_34804 = cljs.core._nth.call(null,chunk__34797_34801,i__34799_34803);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34804);

var G__34805 = seq__34796_34800;
var G__34806 = chunk__34797_34801;
var G__34807 = count__34798_34802;
var G__34808 = (i__34799_34803 + (1));
seq__34796_34800 = G__34805;
chunk__34797_34801 = G__34806;
count__34798_34802 = G__34807;
i__34799_34803 = G__34808;
continue;
} else {
var temp__4657__auto___34809 = cljs.core.seq.call(null,seq__34796_34800);
if(temp__4657__auto___34809){
var seq__34796_34810__$1 = temp__4657__auto___34809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34796_34810__$1)){
var c__27493__auto___34811 = cljs.core.chunk_first.call(null,seq__34796_34810__$1);
var G__34812 = cljs.core.chunk_rest.call(null,seq__34796_34810__$1);
var G__34813 = c__27493__auto___34811;
var G__34814 = cljs.core.count.call(null,c__27493__auto___34811);
var G__34815 = (0);
seq__34796_34800 = G__34812;
chunk__34797_34801 = G__34813;
count__34798_34802 = G__34814;
i__34799_34803 = G__34815;
continue;
} else {
var ns_34816 = cljs.core.first.call(null,seq__34796_34810__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34816);

var G__34817 = cljs.core.next.call(null,seq__34796_34810__$1);
var G__34818 = null;
var G__34819 = (0);
var G__34820 = (0);
seq__34796_34800 = G__34817;
chunk__34797_34801 = G__34818;
count__34798_34802 = G__34819;
i__34799_34803 = G__34820;
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
var G__34821__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34821 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34822__i = 0, G__34822__a = new Array(arguments.length -  0);
while (G__34822__i < G__34822__a.length) {G__34822__a[G__34822__i] = arguments[G__34822__i + 0]; ++G__34822__i;}
  args = new cljs.core.IndexedSeq(G__34822__a,0,null);
} 
return G__34821__delegate.call(this,args);};
G__34821.cljs$lang$maxFixedArity = 0;
G__34821.cljs$lang$applyTo = (function (arglist__34823){
var args = cljs.core.seq(arglist__34823);
return G__34821__delegate(args);
});
G__34821.cljs$core$IFn$_invoke$arity$variadic = G__34821__delegate;
return G__34821;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34824 = cljs.core._EQ_;
var expr__34825 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34824.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34825))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34824,expr__34825){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34824,expr__34825))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34824,expr__34825){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34827){if((e34827 instanceof Error)){
var e = e34827;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34827;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34824,expr__34825))
} else {
if(cljs.core.truth_(pred__34824.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34825))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34824.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__34825))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34824.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34825))){
return ((function (pred__34824,expr__34825){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34828){if((e34828 instanceof Error)){
var e = e34828;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34828;

}
}})());
});
;})(pred__34824,expr__34825))
} else {
return ((function (pred__34824,expr__34825){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34824,expr__34825))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34829,callback){
var map__34832 = p__34829;
var map__34832__$1 = ((((!((map__34832 == null)))?((((map__34832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34832):map__34832);
var file_msg = map__34832__$1;
var request_url = cljs.core.get.call(null,map__34832__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34832,map__34832__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34832,map__34832__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__29845__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto__){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto__){
return (function (state_34856){
var state_val_34857 = (state_34856[(1)]);
if((state_val_34857 === (7))){
var inst_34852 = (state_34856[(2)]);
var state_34856__$1 = state_34856;
var statearr_34858_34878 = state_34856__$1;
(statearr_34858_34878[(2)] = inst_34852);

(statearr_34858_34878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34857 === (1))){
var state_34856__$1 = state_34856;
var statearr_34859_34879 = state_34856__$1;
(statearr_34859_34879[(2)] = null);

(statearr_34859_34879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34857 === (4))){
var inst_34836 = (state_34856[(7)]);
var inst_34836__$1 = (state_34856[(2)]);
var state_34856__$1 = (function (){var statearr_34860 = state_34856;
(statearr_34860[(7)] = inst_34836__$1);

return statearr_34860;
})();
if(cljs.core.truth_(inst_34836__$1)){
var statearr_34861_34880 = state_34856__$1;
(statearr_34861_34880[(1)] = (5));

} else {
var statearr_34862_34881 = state_34856__$1;
(statearr_34862_34881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34857 === (6))){
var state_34856__$1 = state_34856;
var statearr_34863_34882 = state_34856__$1;
(statearr_34863_34882[(2)] = null);

(statearr_34863_34882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34857 === (3))){
var inst_34854 = (state_34856[(2)]);
var state_34856__$1 = state_34856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34856__$1,inst_34854);
} else {
if((state_val_34857 === (2))){
var state_34856__$1 = state_34856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34856__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34857 === (11))){
var inst_34848 = (state_34856[(2)]);
var state_34856__$1 = (function (){var statearr_34864 = state_34856;
(statearr_34864[(8)] = inst_34848);

return statearr_34864;
})();
var statearr_34865_34883 = state_34856__$1;
(statearr_34865_34883[(2)] = null);

(statearr_34865_34883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34857 === (9))){
var inst_34840 = (state_34856[(9)]);
var inst_34842 = (state_34856[(10)]);
var inst_34844 = inst_34842.call(null,inst_34840);
var state_34856__$1 = state_34856;
var statearr_34866_34884 = state_34856__$1;
(statearr_34866_34884[(2)] = inst_34844);

(statearr_34866_34884[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34857 === (5))){
var inst_34836 = (state_34856[(7)]);
var inst_34838 = figwheel.client.file_reloading.blocking_load.call(null,inst_34836);
var state_34856__$1 = state_34856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34856__$1,(8),inst_34838);
} else {
if((state_val_34857 === (10))){
var inst_34840 = (state_34856[(9)]);
var inst_34846 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34840);
var state_34856__$1 = state_34856;
var statearr_34867_34885 = state_34856__$1;
(statearr_34867_34885[(2)] = inst_34846);

(statearr_34867_34885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34857 === (8))){
var inst_34836 = (state_34856[(7)]);
var inst_34842 = (state_34856[(10)]);
var inst_34840 = (state_34856[(2)]);
var inst_34841 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34842__$1 = cljs.core.get.call(null,inst_34841,inst_34836);
var state_34856__$1 = (function (){var statearr_34868 = state_34856;
(statearr_34868[(9)] = inst_34840);

(statearr_34868[(10)] = inst_34842__$1);

return statearr_34868;
})();
if(cljs.core.truth_(inst_34842__$1)){
var statearr_34869_34886 = state_34856__$1;
(statearr_34869_34886[(1)] = (9));

} else {
var statearr_34870_34887 = state_34856__$1;
(statearr_34870_34887[(1)] = (10));

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
});})(c__29845__auto__))
;
return ((function (switch__29830__auto__,c__29845__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29831__auto__ = null;
var figwheel$client$file_reloading$state_machine__29831__auto____0 = (function (){
var statearr_34874 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34874[(0)] = figwheel$client$file_reloading$state_machine__29831__auto__);

(statearr_34874[(1)] = (1));

return statearr_34874;
});
var figwheel$client$file_reloading$state_machine__29831__auto____1 = (function (state_34856){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_34856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e34875){if((e34875 instanceof Object)){
var ex__29834__auto__ = e34875;
var statearr_34876_34888 = state_34856;
(statearr_34876_34888[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34889 = state_34856;
state_34856 = G__34889;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29831__auto__ = function(state_34856){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29831__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29831__auto____1.call(this,state_34856);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29831__auto____0;
figwheel$client$file_reloading$state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29831__auto____1;
return figwheel$client$file_reloading$state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto__))
})();
var state__29847__auto__ = (function (){var statearr_34877 = f__29846__auto__.call(null);
(statearr_34877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto__);

return statearr_34877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto__))
);

return c__29845__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34890,callback){
var map__34893 = p__34890;
var map__34893__$1 = ((((!((map__34893 == null)))?((((map__34893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34893):map__34893);
var file_msg = map__34893__$1;
var namespace = cljs.core.get.call(null,map__34893__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34893,map__34893__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34893,map__34893__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34895){
var map__34898 = p__34895;
var map__34898__$1 = ((((!((map__34898 == null)))?((((map__34898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34898):map__34898);
var file_msg = map__34898__$1;
var namespace = cljs.core.get.call(null,map__34898__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34900){
var map__34903 = p__34900;
var map__34903__$1 = ((((!((map__34903 == null)))?((((map__34903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34903):map__34903);
var file_msg = map__34903__$1;
var namespace = cljs.core.get.call(null,map__34903__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34905,callback){
var map__34908 = p__34905;
var map__34908__$1 = ((((!((map__34908 == null)))?((((map__34908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34908.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34908):map__34908);
var file_msg = map__34908__$1;
var request_url = cljs.core.get.call(null,map__34908__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34908__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29845__auto___35012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto___35012,out){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto___35012,out){
return (function (state_34994){
var state_val_34995 = (state_34994[(1)]);
if((state_val_34995 === (1))){
var inst_34968 = cljs.core.seq.call(null,files);
var inst_34969 = cljs.core.first.call(null,inst_34968);
var inst_34970 = cljs.core.next.call(null,inst_34968);
var inst_34971 = files;
var state_34994__$1 = (function (){var statearr_34996 = state_34994;
(statearr_34996[(7)] = inst_34971);

(statearr_34996[(8)] = inst_34969);

(statearr_34996[(9)] = inst_34970);

return statearr_34996;
})();
var statearr_34997_35013 = state_34994__$1;
(statearr_34997_35013[(2)] = null);

(statearr_34997_35013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (2))){
var inst_34971 = (state_34994[(7)]);
var inst_34977 = (state_34994[(10)]);
var inst_34976 = cljs.core.seq.call(null,inst_34971);
var inst_34977__$1 = cljs.core.first.call(null,inst_34976);
var inst_34978 = cljs.core.next.call(null,inst_34976);
var inst_34979 = (inst_34977__$1 == null);
var inst_34980 = cljs.core.not.call(null,inst_34979);
var state_34994__$1 = (function (){var statearr_34998 = state_34994;
(statearr_34998[(10)] = inst_34977__$1);

(statearr_34998[(11)] = inst_34978);

return statearr_34998;
})();
if(inst_34980){
var statearr_34999_35014 = state_34994__$1;
(statearr_34999_35014[(1)] = (4));

} else {
var statearr_35000_35015 = state_34994__$1;
(statearr_35000_35015[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (3))){
var inst_34992 = (state_34994[(2)]);
var state_34994__$1 = state_34994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34994__$1,inst_34992);
} else {
if((state_val_34995 === (4))){
var inst_34977 = (state_34994[(10)]);
var inst_34982 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34977);
var state_34994__$1 = state_34994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34994__$1,(7),inst_34982);
} else {
if((state_val_34995 === (5))){
var inst_34988 = cljs.core.async.close_BANG_.call(null,out);
var state_34994__$1 = state_34994;
var statearr_35001_35016 = state_34994__$1;
(statearr_35001_35016[(2)] = inst_34988);

(statearr_35001_35016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (6))){
var inst_34990 = (state_34994[(2)]);
var state_34994__$1 = state_34994;
var statearr_35002_35017 = state_34994__$1;
(statearr_35002_35017[(2)] = inst_34990);

(statearr_35002_35017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (7))){
var inst_34978 = (state_34994[(11)]);
var inst_34984 = (state_34994[(2)]);
var inst_34985 = cljs.core.async.put_BANG_.call(null,out,inst_34984);
var inst_34971 = inst_34978;
var state_34994__$1 = (function (){var statearr_35003 = state_34994;
(statearr_35003[(7)] = inst_34971);

(statearr_35003[(12)] = inst_34985);

return statearr_35003;
})();
var statearr_35004_35018 = state_34994__$1;
(statearr_35004_35018[(2)] = null);

(statearr_35004_35018[(1)] = (2));


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
});})(c__29845__auto___35012,out))
;
return ((function (switch__29830__auto__,c__29845__auto___35012,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29831__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29831__auto____0 = (function (){
var statearr_35008 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35008[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29831__auto__);

(statearr_35008[(1)] = (1));

return statearr_35008;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29831__auto____1 = (function (state_34994){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_34994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e35009){if((e35009 instanceof Object)){
var ex__29834__auto__ = e35009;
var statearr_35010_35019 = state_34994;
(statearr_35010_35019[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35020 = state_34994;
state_34994 = G__35020;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29831__auto__ = function(state_34994){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29831__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29831__auto____1.call(this,state_34994);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29831__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29831__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto___35012,out))
})();
var state__29847__auto__ = (function (){var statearr_35011 = f__29846__auto__.call(null);
(statearr_35011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto___35012);

return statearr_35011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto___35012,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35021,opts){
var map__35025 = p__35021;
var map__35025__$1 = ((((!((map__35025 == null)))?((((map__35025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35025.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35025):map__35025);
var eval_body = cljs.core.get.call(null,map__35025__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35025__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e35027){var e = e35027;
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
return (function (p1__35028_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35028_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__35037){
var vec__35038 = p__35037;
var k = cljs.core.nth.call(null,vec__35038,(0),null);
var v = cljs.core.nth.call(null,vec__35038,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35041){
var vec__35042 = p__35041;
var k = cljs.core.nth.call(null,vec__35042,(0),null);
var v = cljs.core.nth.call(null,vec__35042,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35048,p__35049){
var map__35297 = p__35048;
var map__35297__$1 = ((((!((map__35297 == null)))?((((map__35297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35297):map__35297);
var opts = map__35297__$1;
var before_jsload = cljs.core.get.call(null,map__35297__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35297__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35297__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35298 = p__35049;
var map__35298__$1 = ((((!((map__35298 == null)))?((((map__35298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35298.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35298):map__35298);
var msg = map__35298__$1;
var files = cljs.core.get.call(null,map__35298__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35298__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35298__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29845__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto__,map__35297,map__35297__$1,opts,before_jsload,on_jsload,reload_dependents,map__35298,map__35298__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto__,map__35297,map__35297__$1,opts,before_jsload,on_jsload,reload_dependents,map__35298,map__35298__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35452){
var state_val_35453 = (state_35452[(1)]);
if((state_val_35453 === (7))){
var inst_35313 = (state_35452[(7)]);
var inst_35312 = (state_35452[(8)]);
var inst_35314 = (state_35452[(9)]);
var inst_35315 = (state_35452[(10)]);
var inst_35320 = cljs.core._nth.call(null,inst_35313,inst_35315);
var inst_35321 = figwheel.client.file_reloading.eval_body.call(null,inst_35320,opts);
var inst_35322 = (inst_35315 + (1));
var tmp35454 = inst_35313;
var tmp35455 = inst_35312;
var tmp35456 = inst_35314;
var inst_35312__$1 = tmp35455;
var inst_35313__$1 = tmp35454;
var inst_35314__$1 = tmp35456;
var inst_35315__$1 = inst_35322;
var state_35452__$1 = (function (){var statearr_35457 = state_35452;
(statearr_35457[(7)] = inst_35313__$1);

(statearr_35457[(8)] = inst_35312__$1);

(statearr_35457[(11)] = inst_35321);

(statearr_35457[(9)] = inst_35314__$1);

(statearr_35457[(10)] = inst_35315__$1);

return statearr_35457;
})();
var statearr_35458_35544 = state_35452__$1;
(statearr_35458_35544[(2)] = null);

(statearr_35458_35544[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (20))){
var inst_35355 = (state_35452[(12)]);
var inst_35363 = figwheel.client.file_reloading.sort_files.call(null,inst_35355);
var state_35452__$1 = state_35452;
var statearr_35459_35545 = state_35452__$1;
(statearr_35459_35545[(2)] = inst_35363);

(statearr_35459_35545[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (27))){
var state_35452__$1 = state_35452;
var statearr_35460_35546 = state_35452__$1;
(statearr_35460_35546[(2)] = null);

(statearr_35460_35546[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (1))){
var inst_35304 = (state_35452[(13)]);
var inst_35301 = before_jsload.call(null,files);
var inst_35302 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35303 = (function (){return ((function (inst_35304,inst_35301,inst_35302,state_val_35453,c__29845__auto__,map__35297,map__35297__$1,opts,before_jsload,on_jsload,reload_dependents,map__35298,map__35298__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35045_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35045_SHARP_);
});
;})(inst_35304,inst_35301,inst_35302,state_val_35453,c__29845__auto__,map__35297,map__35297__$1,opts,before_jsload,on_jsload,reload_dependents,map__35298,map__35298__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35304__$1 = cljs.core.filter.call(null,inst_35303,files);
var inst_35305 = cljs.core.not_empty.call(null,inst_35304__$1);
var state_35452__$1 = (function (){var statearr_35461 = state_35452;
(statearr_35461[(14)] = inst_35301);

(statearr_35461[(15)] = inst_35302);

(statearr_35461[(13)] = inst_35304__$1);

return statearr_35461;
})();
if(cljs.core.truth_(inst_35305)){
var statearr_35462_35547 = state_35452__$1;
(statearr_35462_35547[(1)] = (2));

} else {
var statearr_35463_35548 = state_35452__$1;
(statearr_35463_35548[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (24))){
var state_35452__$1 = state_35452;
var statearr_35464_35549 = state_35452__$1;
(statearr_35464_35549[(2)] = null);

(statearr_35464_35549[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (39))){
var inst_35405 = (state_35452[(16)]);
var state_35452__$1 = state_35452;
var statearr_35465_35550 = state_35452__$1;
(statearr_35465_35550[(2)] = inst_35405);

(statearr_35465_35550[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (46))){
var inst_35447 = (state_35452[(2)]);
var state_35452__$1 = state_35452;
var statearr_35466_35551 = state_35452__$1;
(statearr_35466_35551[(2)] = inst_35447);

(statearr_35466_35551[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (4))){
var inst_35349 = (state_35452[(2)]);
var inst_35350 = cljs.core.List.EMPTY;
var inst_35351 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35350);
var inst_35352 = (function (){return ((function (inst_35349,inst_35350,inst_35351,state_val_35453,c__29845__auto__,map__35297,map__35297__$1,opts,before_jsload,on_jsload,reload_dependents,map__35298,map__35298__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35046_SHARP_){
var and__26662__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35046_SHARP_);
if(cljs.core.truth_(and__26662__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35046_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35046_SHARP_)));
} else {
return and__26662__auto__;
}
});
;})(inst_35349,inst_35350,inst_35351,state_val_35453,c__29845__auto__,map__35297,map__35297__$1,opts,before_jsload,on_jsload,reload_dependents,map__35298,map__35298__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35353 = cljs.core.filter.call(null,inst_35352,files);
var inst_35354 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35355 = cljs.core.concat.call(null,inst_35353,inst_35354);
var state_35452__$1 = (function (){var statearr_35467 = state_35452;
(statearr_35467[(17)] = inst_35349);

(statearr_35467[(12)] = inst_35355);

(statearr_35467[(18)] = inst_35351);

return statearr_35467;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35468_35552 = state_35452__$1;
(statearr_35468_35552[(1)] = (16));

} else {
var statearr_35469_35553 = state_35452__$1;
(statearr_35469_35553[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (15))){
var inst_35339 = (state_35452[(2)]);
var state_35452__$1 = state_35452;
var statearr_35470_35554 = state_35452__$1;
(statearr_35470_35554[(2)] = inst_35339);

(statearr_35470_35554[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (21))){
var inst_35365 = (state_35452[(19)]);
var inst_35365__$1 = (state_35452[(2)]);
var inst_35366 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35365__$1);
var state_35452__$1 = (function (){var statearr_35471 = state_35452;
(statearr_35471[(19)] = inst_35365__$1);

return statearr_35471;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35452__$1,(22),inst_35366);
} else {
if((state_val_35453 === (31))){
var inst_35450 = (state_35452[(2)]);
var state_35452__$1 = state_35452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35452__$1,inst_35450);
} else {
if((state_val_35453 === (32))){
var inst_35405 = (state_35452[(16)]);
var inst_35410 = inst_35405.cljs$lang$protocol_mask$partition0$;
var inst_35411 = (inst_35410 & (64));
var inst_35412 = inst_35405.cljs$core$ISeq$;
var inst_35413 = (cljs.core.PROTOCOL_SENTINEL === inst_35412);
var inst_35414 = (inst_35411) || (inst_35413);
var state_35452__$1 = state_35452;
if(cljs.core.truth_(inst_35414)){
var statearr_35472_35555 = state_35452__$1;
(statearr_35472_35555[(1)] = (35));

} else {
var statearr_35473_35556 = state_35452__$1;
(statearr_35473_35556[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (40))){
var inst_35427 = (state_35452[(20)]);
var inst_35426 = (state_35452[(2)]);
var inst_35427__$1 = cljs.core.get.call(null,inst_35426,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35428 = cljs.core.get.call(null,inst_35426,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35429 = cljs.core.not_empty.call(null,inst_35427__$1);
var state_35452__$1 = (function (){var statearr_35474 = state_35452;
(statearr_35474[(21)] = inst_35428);

(statearr_35474[(20)] = inst_35427__$1);

return statearr_35474;
})();
if(cljs.core.truth_(inst_35429)){
var statearr_35475_35557 = state_35452__$1;
(statearr_35475_35557[(1)] = (41));

} else {
var statearr_35476_35558 = state_35452__$1;
(statearr_35476_35558[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (33))){
var state_35452__$1 = state_35452;
var statearr_35477_35559 = state_35452__$1;
(statearr_35477_35559[(2)] = false);

(statearr_35477_35559[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (13))){
var inst_35325 = (state_35452[(22)]);
var inst_35329 = cljs.core.chunk_first.call(null,inst_35325);
var inst_35330 = cljs.core.chunk_rest.call(null,inst_35325);
var inst_35331 = cljs.core.count.call(null,inst_35329);
var inst_35312 = inst_35330;
var inst_35313 = inst_35329;
var inst_35314 = inst_35331;
var inst_35315 = (0);
var state_35452__$1 = (function (){var statearr_35478 = state_35452;
(statearr_35478[(7)] = inst_35313);

(statearr_35478[(8)] = inst_35312);

(statearr_35478[(9)] = inst_35314);

(statearr_35478[(10)] = inst_35315);

return statearr_35478;
})();
var statearr_35479_35560 = state_35452__$1;
(statearr_35479_35560[(2)] = null);

(statearr_35479_35560[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (22))){
var inst_35369 = (state_35452[(23)]);
var inst_35365 = (state_35452[(19)]);
var inst_35368 = (state_35452[(24)]);
var inst_35373 = (state_35452[(25)]);
var inst_35368__$1 = (state_35452[(2)]);
var inst_35369__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35368__$1);
var inst_35370 = (function (){var all_files = inst_35365;
var res_SINGLEQUOTE_ = inst_35368__$1;
var res = inst_35369__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35369,inst_35365,inst_35368,inst_35373,inst_35368__$1,inst_35369__$1,state_val_35453,c__29845__auto__,map__35297,map__35297__$1,opts,before_jsload,on_jsload,reload_dependents,map__35298,map__35298__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35047_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35047_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35369,inst_35365,inst_35368,inst_35373,inst_35368__$1,inst_35369__$1,state_val_35453,c__29845__auto__,map__35297,map__35297__$1,opts,before_jsload,on_jsload,reload_dependents,map__35298,map__35298__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35371 = cljs.core.filter.call(null,inst_35370,inst_35368__$1);
var inst_35372 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35373__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35372);
var inst_35374 = cljs.core.not_empty.call(null,inst_35373__$1);
var state_35452__$1 = (function (){var statearr_35480 = state_35452;
(statearr_35480[(23)] = inst_35369__$1);

(statearr_35480[(24)] = inst_35368__$1);

(statearr_35480[(26)] = inst_35371);

(statearr_35480[(25)] = inst_35373__$1);

return statearr_35480;
})();
if(cljs.core.truth_(inst_35374)){
var statearr_35481_35561 = state_35452__$1;
(statearr_35481_35561[(1)] = (23));

} else {
var statearr_35482_35562 = state_35452__$1;
(statearr_35482_35562[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (36))){
var state_35452__$1 = state_35452;
var statearr_35483_35563 = state_35452__$1;
(statearr_35483_35563[(2)] = false);

(statearr_35483_35563[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (41))){
var inst_35427 = (state_35452[(20)]);
var inst_35431 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35432 = cljs.core.map.call(null,inst_35431,inst_35427);
var inst_35433 = cljs.core.pr_str.call(null,inst_35432);
var inst_35434 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35433)].join('');
var inst_35435 = figwheel.client.utils.log.call(null,inst_35434);
var state_35452__$1 = state_35452;
var statearr_35484_35564 = state_35452__$1;
(statearr_35484_35564[(2)] = inst_35435);

(statearr_35484_35564[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (43))){
var inst_35428 = (state_35452[(21)]);
var inst_35438 = (state_35452[(2)]);
var inst_35439 = cljs.core.not_empty.call(null,inst_35428);
var state_35452__$1 = (function (){var statearr_35485 = state_35452;
(statearr_35485[(27)] = inst_35438);

return statearr_35485;
})();
if(cljs.core.truth_(inst_35439)){
var statearr_35486_35565 = state_35452__$1;
(statearr_35486_35565[(1)] = (44));

} else {
var statearr_35487_35566 = state_35452__$1;
(statearr_35487_35566[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (29))){
var inst_35369 = (state_35452[(23)]);
var inst_35365 = (state_35452[(19)]);
var inst_35368 = (state_35452[(24)]);
var inst_35371 = (state_35452[(26)]);
var inst_35373 = (state_35452[(25)]);
var inst_35405 = (state_35452[(16)]);
var inst_35401 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35404 = (function (){var all_files = inst_35365;
var res_SINGLEQUOTE_ = inst_35368;
var res = inst_35369;
var files_not_loaded = inst_35371;
var dependencies_that_loaded = inst_35373;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35369,inst_35365,inst_35368,inst_35371,inst_35373,inst_35405,inst_35401,state_val_35453,c__29845__auto__,map__35297,map__35297__$1,opts,before_jsload,on_jsload,reload_dependents,map__35298,map__35298__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35403){
var map__35488 = p__35403;
var map__35488__$1 = ((((!((map__35488 == null)))?((((map__35488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35488):map__35488);
var namespace = cljs.core.get.call(null,map__35488__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35369,inst_35365,inst_35368,inst_35371,inst_35373,inst_35405,inst_35401,state_val_35453,c__29845__auto__,map__35297,map__35297__$1,opts,before_jsload,on_jsload,reload_dependents,map__35298,map__35298__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35405__$1 = cljs.core.group_by.call(null,inst_35404,inst_35371);
var inst_35407 = (inst_35405__$1 == null);
var inst_35408 = cljs.core.not.call(null,inst_35407);
var state_35452__$1 = (function (){var statearr_35490 = state_35452;
(statearr_35490[(28)] = inst_35401);

(statearr_35490[(16)] = inst_35405__$1);

return statearr_35490;
})();
if(inst_35408){
var statearr_35491_35567 = state_35452__$1;
(statearr_35491_35567[(1)] = (32));

} else {
var statearr_35492_35568 = state_35452__$1;
(statearr_35492_35568[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (44))){
var inst_35428 = (state_35452[(21)]);
var inst_35441 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35428);
var inst_35442 = cljs.core.pr_str.call(null,inst_35441);
var inst_35443 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35442)].join('');
var inst_35444 = figwheel.client.utils.log.call(null,inst_35443);
var state_35452__$1 = state_35452;
var statearr_35493_35569 = state_35452__$1;
(statearr_35493_35569[(2)] = inst_35444);

(statearr_35493_35569[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (6))){
var inst_35346 = (state_35452[(2)]);
var state_35452__$1 = state_35452;
var statearr_35494_35570 = state_35452__$1;
(statearr_35494_35570[(2)] = inst_35346);

(statearr_35494_35570[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (28))){
var inst_35371 = (state_35452[(26)]);
var inst_35398 = (state_35452[(2)]);
var inst_35399 = cljs.core.not_empty.call(null,inst_35371);
var state_35452__$1 = (function (){var statearr_35495 = state_35452;
(statearr_35495[(29)] = inst_35398);

return statearr_35495;
})();
if(cljs.core.truth_(inst_35399)){
var statearr_35496_35571 = state_35452__$1;
(statearr_35496_35571[(1)] = (29));

} else {
var statearr_35497_35572 = state_35452__$1;
(statearr_35497_35572[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (25))){
var inst_35369 = (state_35452[(23)]);
var inst_35385 = (state_35452[(2)]);
var inst_35386 = cljs.core.not_empty.call(null,inst_35369);
var state_35452__$1 = (function (){var statearr_35498 = state_35452;
(statearr_35498[(30)] = inst_35385);

return statearr_35498;
})();
if(cljs.core.truth_(inst_35386)){
var statearr_35499_35573 = state_35452__$1;
(statearr_35499_35573[(1)] = (26));

} else {
var statearr_35500_35574 = state_35452__$1;
(statearr_35500_35574[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (34))){
var inst_35421 = (state_35452[(2)]);
var state_35452__$1 = state_35452;
if(cljs.core.truth_(inst_35421)){
var statearr_35501_35575 = state_35452__$1;
(statearr_35501_35575[(1)] = (38));

} else {
var statearr_35502_35576 = state_35452__$1;
(statearr_35502_35576[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (17))){
var state_35452__$1 = state_35452;
var statearr_35503_35577 = state_35452__$1;
(statearr_35503_35577[(2)] = recompile_dependents);

(statearr_35503_35577[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (3))){
var state_35452__$1 = state_35452;
var statearr_35504_35578 = state_35452__$1;
(statearr_35504_35578[(2)] = null);

(statearr_35504_35578[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (12))){
var inst_35342 = (state_35452[(2)]);
var state_35452__$1 = state_35452;
var statearr_35505_35579 = state_35452__$1;
(statearr_35505_35579[(2)] = inst_35342);

(statearr_35505_35579[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (2))){
var inst_35304 = (state_35452[(13)]);
var inst_35311 = cljs.core.seq.call(null,inst_35304);
var inst_35312 = inst_35311;
var inst_35313 = null;
var inst_35314 = (0);
var inst_35315 = (0);
var state_35452__$1 = (function (){var statearr_35506 = state_35452;
(statearr_35506[(7)] = inst_35313);

(statearr_35506[(8)] = inst_35312);

(statearr_35506[(9)] = inst_35314);

(statearr_35506[(10)] = inst_35315);

return statearr_35506;
})();
var statearr_35507_35580 = state_35452__$1;
(statearr_35507_35580[(2)] = null);

(statearr_35507_35580[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (23))){
var inst_35369 = (state_35452[(23)]);
var inst_35365 = (state_35452[(19)]);
var inst_35368 = (state_35452[(24)]);
var inst_35371 = (state_35452[(26)]);
var inst_35373 = (state_35452[(25)]);
var inst_35376 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35378 = (function (){var all_files = inst_35365;
var res_SINGLEQUOTE_ = inst_35368;
var res = inst_35369;
var files_not_loaded = inst_35371;
var dependencies_that_loaded = inst_35373;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35369,inst_35365,inst_35368,inst_35371,inst_35373,inst_35376,state_val_35453,c__29845__auto__,map__35297,map__35297__$1,opts,before_jsload,on_jsload,reload_dependents,map__35298,map__35298__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35377){
var map__35508 = p__35377;
var map__35508__$1 = ((((!((map__35508 == null)))?((((map__35508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35508):map__35508);
var request_url = cljs.core.get.call(null,map__35508__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35369,inst_35365,inst_35368,inst_35371,inst_35373,inst_35376,state_val_35453,c__29845__auto__,map__35297,map__35297__$1,opts,before_jsload,on_jsload,reload_dependents,map__35298,map__35298__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35379 = cljs.core.reverse.call(null,inst_35373);
var inst_35380 = cljs.core.map.call(null,inst_35378,inst_35379);
var inst_35381 = cljs.core.pr_str.call(null,inst_35380);
var inst_35382 = figwheel.client.utils.log.call(null,inst_35381);
var state_35452__$1 = (function (){var statearr_35510 = state_35452;
(statearr_35510[(31)] = inst_35376);

return statearr_35510;
})();
var statearr_35511_35581 = state_35452__$1;
(statearr_35511_35581[(2)] = inst_35382);

(statearr_35511_35581[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (35))){
var state_35452__$1 = state_35452;
var statearr_35512_35582 = state_35452__$1;
(statearr_35512_35582[(2)] = true);

(statearr_35512_35582[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (19))){
var inst_35355 = (state_35452[(12)]);
var inst_35361 = figwheel.client.file_reloading.expand_files.call(null,inst_35355);
var state_35452__$1 = state_35452;
var statearr_35513_35583 = state_35452__$1;
(statearr_35513_35583[(2)] = inst_35361);

(statearr_35513_35583[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (11))){
var state_35452__$1 = state_35452;
var statearr_35514_35584 = state_35452__$1;
(statearr_35514_35584[(2)] = null);

(statearr_35514_35584[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (9))){
var inst_35344 = (state_35452[(2)]);
var state_35452__$1 = state_35452;
var statearr_35515_35585 = state_35452__$1;
(statearr_35515_35585[(2)] = inst_35344);

(statearr_35515_35585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (5))){
var inst_35314 = (state_35452[(9)]);
var inst_35315 = (state_35452[(10)]);
var inst_35317 = (inst_35315 < inst_35314);
var inst_35318 = inst_35317;
var state_35452__$1 = state_35452;
if(cljs.core.truth_(inst_35318)){
var statearr_35516_35586 = state_35452__$1;
(statearr_35516_35586[(1)] = (7));

} else {
var statearr_35517_35587 = state_35452__$1;
(statearr_35517_35587[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (14))){
var inst_35325 = (state_35452[(22)]);
var inst_35334 = cljs.core.first.call(null,inst_35325);
var inst_35335 = figwheel.client.file_reloading.eval_body.call(null,inst_35334,opts);
var inst_35336 = cljs.core.next.call(null,inst_35325);
var inst_35312 = inst_35336;
var inst_35313 = null;
var inst_35314 = (0);
var inst_35315 = (0);
var state_35452__$1 = (function (){var statearr_35518 = state_35452;
(statearr_35518[(7)] = inst_35313);

(statearr_35518[(32)] = inst_35335);

(statearr_35518[(8)] = inst_35312);

(statearr_35518[(9)] = inst_35314);

(statearr_35518[(10)] = inst_35315);

return statearr_35518;
})();
var statearr_35519_35588 = state_35452__$1;
(statearr_35519_35588[(2)] = null);

(statearr_35519_35588[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (45))){
var state_35452__$1 = state_35452;
var statearr_35520_35589 = state_35452__$1;
(statearr_35520_35589[(2)] = null);

(statearr_35520_35589[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (26))){
var inst_35369 = (state_35452[(23)]);
var inst_35365 = (state_35452[(19)]);
var inst_35368 = (state_35452[(24)]);
var inst_35371 = (state_35452[(26)]);
var inst_35373 = (state_35452[(25)]);
var inst_35388 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35390 = (function (){var all_files = inst_35365;
var res_SINGLEQUOTE_ = inst_35368;
var res = inst_35369;
var files_not_loaded = inst_35371;
var dependencies_that_loaded = inst_35373;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35369,inst_35365,inst_35368,inst_35371,inst_35373,inst_35388,state_val_35453,c__29845__auto__,map__35297,map__35297__$1,opts,before_jsload,on_jsload,reload_dependents,map__35298,map__35298__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35389){
var map__35521 = p__35389;
var map__35521__$1 = ((((!((map__35521 == null)))?((((map__35521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35521):map__35521);
var namespace = cljs.core.get.call(null,map__35521__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35521__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35369,inst_35365,inst_35368,inst_35371,inst_35373,inst_35388,state_val_35453,c__29845__auto__,map__35297,map__35297__$1,opts,before_jsload,on_jsload,reload_dependents,map__35298,map__35298__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35391 = cljs.core.map.call(null,inst_35390,inst_35369);
var inst_35392 = cljs.core.pr_str.call(null,inst_35391);
var inst_35393 = figwheel.client.utils.log.call(null,inst_35392);
var inst_35394 = (function (){var all_files = inst_35365;
var res_SINGLEQUOTE_ = inst_35368;
var res = inst_35369;
var files_not_loaded = inst_35371;
var dependencies_that_loaded = inst_35373;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35369,inst_35365,inst_35368,inst_35371,inst_35373,inst_35388,inst_35390,inst_35391,inst_35392,inst_35393,state_val_35453,c__29845__auto__,map__35297,map__35297__$1,opts,before_jsload,on_jsload,reload_dependents,map__35298,map__35298__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35369,inst_35365,inst_35368,inst_35371,inst_35373,inst_35388,inst_35390,inst_35391,inst_35392,inst_35393,state_val_35453,c__29845__auto__,map__35297,map__35297__$1,opts,before_jsload,on_jsload,reload_dependents,map__35298,map__35298__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35395 = setTimeout(inst_35394,(10));
var state_35452__$1 = (function (){var statearr_35523 = state_35452;
(statearr_35523[(33)] = inst_35388);

(statearr_35523[(34)] = inst_35393);

return statearr_35523;
})();
var statearr_35524_35590 = state_35452__$1;
(statearr_35524_35590[(2)] = inst_35395);

(statearr_35524_35590[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (16))){
var state_35452__$1 = state_35452;
var statearr_35525_35591 = state_35452__$1;
(statearr_35525_35591[(2)] = reload_dependents);

(statearr_35525_35591[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (38))){
var inst_35405 = (state_35452[(16)]);
var inst_35423 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35405);
var state_35452__$1 = state_35452;
var statearr_35526_35592 = state_35452__$1;
(statearr_35526_35592[(2)] = inst_35423);

(statearr_35526_35592[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (30))){
var state_35452__$1 = state_35452;
var statearr_35527_35593 = state_35452__$1;
(statearr_35527_35593[(2)] = null);

(statearr_35527_35593[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (10))){
var inst_35325 = (state_35452[(22)]);
var inst_35327 = cljs.core.chunked_seq_QMARK_.call(null,inst_35325);
var state_35452__$1 = state_35452;
if(inst_35327){
var statearr_35528_35594 = state_35452__$1;
(statearr_35528_35594[(1)] = (13));

} else {
var statearr_35529_35595 = state_35452__$1;
(statearr_35529_35595[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (18))){
var inst_35359 = (state_35452[(2)]);
var state_35452__$1 = state_35452;
if(cljs.core.truth_(inst_35359)){
var statearr_35530_35596 = state_35452__$1;
(statearr_35530_35596[(1)] = (19));

} else {
var statearr_35531_35597 = state_35452__$1;
(statearr_35531_35597[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (42))){
var state_35452__$1 = state_35452;
var statearr_35532_35598 = state_35452__$1;
(statearr_35532_35598[(2)] = null);

(statearr_35532_35598[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (37))){
var inst_35418 = (state_35452[(2)]);
var state_35452__$1 = state_35452;
var statearr_35533_35599 = state_35452__$1;
(statearr_35533_35599[(2)] = inst_35418);

(statearr_35533_35599[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (8))){
var inst_35325 = (state_35452[(22)]);
var inst_35312 = (state_35452[(8)]);
var inst_35325__$1 = cljs.core.seq.call(null,inst_35312);
var state_35452__$1 = (function (){var statearr_35534 = state_35452;
(statearr_35534[(22)] = inst_35325__$1);

return statearr_35534;
})();
if(inst_35325__$1){
var statearr_35535_35600 = state_35452__$1;
(statearr_35535_35600[(1)] = (10));

} else {
var statearr_35536_35601 = state_35452__$1;
(statearr_35536_35601[(1)] = (11));

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
});})(c__29845__auto__,map__35297,map__35297__$1,opts,before_jsload,on_jsload,reload_dependents,map__35298,map__35298__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29830__auto__,c__29845__auto__,map__35297,map__35297__$1,opts,before_jsload,on_jsload,reload_dependents,map__35298,map__35298__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29831__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29831__auto____0 = (function (){
var statearr_35540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35540[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29831__auto__);

(statearr_35540[(1)] = (1));

return statearr_35540;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29831__auto____1 = (function (state_35452){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_35452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e35541){if((e35541 instanceof Object)){
var ex__29834__auto__ = e35541;
var statearr_35542_35602 = state_35452;
(statearr_35542_35602[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35603 = state_35452;
state_35452 = G__35603;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29831__auto__ = function(state_35452){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29831__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29831__auto____1.call(this,state_35452);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29831__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29831__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto__,map__35297,map__35297__$1,opts,before_jsload,on_jsload,reload_dependents,map__35298,map__35298__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29847__auto__ = (function (){var statearr_35543 = f__29846__auto__.call(null);
(statearr_35543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto__);

return statearr_35543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto__,map__35297,map__35297__$1,opts,before_jsload,on_jsload,reload_dependents,map__35298,map__35298__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29845__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35606,link){
var map__35609 = p__35606;
var map__35609__$1 = ((((!((map__35609 == null)))?((((map__35609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35609.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35609):map__35609);
var file = cljs.core.get.call(null,map__35609__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35609,map__35609__$1,file){
return (function (p1__35604_SHARP_,p2__35605_SHARP_){
if(cljs.core._EQ_.call(null,p1__35604_SHARP_,p2__35605_SHARP_)){
return p1__35604_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35609,map__35609__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35615){
var map__35616 = p__35615;
var map__35616__$1 = ((((!((map__35616 == null)))?((((map__35616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35616.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35616):map__35616);
var match_length = cljs.core.get.call(null,map__35616__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35616__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35611_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35611_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35618_SHARP_,p2__35619_SHARP_){
return cljs.core.assoc.call(null,p1__35618_SHARP_,cljs.core.get.call(null,p2__35619_SHARP_,key),p2__35619_SHARP_);
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
var loaded_f_datas_35620 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35620);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35620);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35621,p__35622){
var map__35627 = p__35621;
var map__35627__$1 = ((((!((map__35627 == null)))?((((map__35627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35627.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35627):map__35627);
var on_cssload = cljs.core.get.call(null,map__35627__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35628 = p__35622;
var map__35628__$1 = ((((!((map__35628 == null)))?((((map__35628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35628.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35628):map__35628);
var files_msg = map__35628__$1;
var files = cljs.core.get.call(null,map__35628__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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