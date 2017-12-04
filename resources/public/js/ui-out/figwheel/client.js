// Compiled by ClojureScript 1.9.542 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args37476 = [];
var len__27787__auto___37479 = arguments.length;
var i__27788__auto___37480 = (0);
while(true){
if((i__27788__auto___37480 < len__27787__auto___37479)){
args37476.push((arguments[i__27788__auto___37480]));

var G__37481 = (i__27788__auto___37480 + (1));
i__27788__auto___37480 = G__37481;
continue;
} else {
}
break;
}

var G__37478 = args37476.length;
switch (G__37478) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37476.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27794__auto__ = [];
var len__27787__auto___37484 = arguments.length;
var i__27788__auto___37485 = (0);
while(true){
if((i__27788__auto___37485 < len__27787__auto___37484)){
args__27794__auto__.push((arguments[i__27788__auto___37485]));

var G__37486 = (i__27788__auto___37485 + (1));
i__27788__auto___37485 = G__37486;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37483){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37483));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27794__auto__ = [];
var len__27787__auto___37488 = arguments.length;
var i__27788__auto___37489 = (0);
while(true){
if((i__27788__auto___37489 < len__27787__auto___37488)){
args__27794__auto__.push((arguments[i__27788__auto___37489]));

var G__37490 = (i__27788__auto___37489 + (1));
i__27788__auto___37489 = G__37490;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37487){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37487));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37491){
var map__37494 = p__37491;
var map__37494__$1 = ((((!((map__37494 == null)))?((((map__37494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37494.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37494):map__37494);
var message = cljs.core.get.call(null,map__37494__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37494__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__26674__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__26674__auto__)){
return or__26674__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__26662__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__26662__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__26662__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29844__auto___37656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto___37656,ch){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto___37656,ch){
return (function (state_37625){
var state_val_37626 = (state_37625[(1)]);
if((state_val_37626 === (7))){
var inst_37621 = (state_37625[(2)]);
var state_37625__$1 = state_37625;
var statearr_37627_37657 = state_37625__$1;
(statearr_37627_37657[(2)] = inst_37621);

(statearr_37627_37657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37626 === (1))){
var state_37625__$1 = state_37625;
var statearr_37628_37658 = state_37625__$1;
(statearr_37628_37658[(2)] = null);

(statearr_37628_37658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37626 === (4))){
var inst_37578 = (state_37625[(7)]);
var inst_37578__$1 = (state_37625[(2)]);
var state_37625__$1 = (function (){var statearr_37629 = state_37625;
(statearr_37629[(7)] = inst_37578__$1);

return statearr_37629;
})();
if(cljs.core.truth_(inst_37578__$1)){
var statearr_37630_37659 = state_37625__$1;
(statearr_37630_37659[(1)] = (5));

} else {
var statearr_37631_37660 = state_37625__$1;
(statearr_37631_37660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37626 === (15))){
var inst_37585 = (state_37625[(8)]);
var inst_37600 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37585);
var inst_37601 = cljs.core.first.call(null,inst_37600);
var inst_37602 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37601);
var inst_37603 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37602)].join('');
var inst_37604 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37603);
var state_37625__$1 = state_37625;
var statearr_37632_37661 = state_37625__$1;
(statearr_37632_37661[(2)] = inst_37604);

(statearr_37632_37661[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37626 === (13))){
var inst_37609 = (state_37625[(2)]);
var state_37625__$1 = state_37625;
var statearr_37633_37662 = state_37625__$1;
(statearr_37633_37662[(2)] = inst_37609);

(statearr_37633_37662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37626 === (6))){
var state_37625__$1 = state_37625;
var statearr_37634_37663 = state_37625__$1;
(statearr_37634_37663[(2)] = null);

(statearr_37634_37663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37626 === (17))){
var inst_37607 = (state_37625[(2)]);
var state_37625__$1 = state_37625;
var statearr_37635_37664 = state_37625__$1;
(statearr_37635_37664[(2)] = inst_37607);

(statearr_37635_37664[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37626 === (3))){
var inst_37623 = (state_37625[(2)]);
var state_37625__$1 = state_37625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37625__$1,inst_37623);
} else {
if((state_val_37626 === (12))){
var inst_37584 = (state_37625[(9)]);
var inst_37598 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37584,opts);
var state_37625__$1 = state_37625;
if(cljs.core.truth_(inst_37598)){
var statearr_37636_37665 = state_37625__$1;
(statearr_37636_37665[(1)] = (15));

} else {
var statearr_37637_37666 = state_37625__$1;
(statearr_37637_37666[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37626 === (2))){
var state_37625__$1 = state_37625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37625__$1,(4),ch);
} else {
if((state_val_37626 === (11))){
var inst_37585 = (state_37625[(8)]);
var inst_37590 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37591 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37585);
var inst_37592 = cljs.core.async.timeout.call(null,(1000));
var inst_37593 = [inst_37591,inst_37592];
var inst_37594 = (new cljs.core.PersistentVector(null,2,(5),inst_37590,inst_37593,null));
var state_37625__$1 = state_37625;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37625__$1,(14),inst_37594);
} else {
if((state_val_37626 === (9))){
var inst_37585 = (state_37625[(8)]);
var inst_37611 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37612 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37585);
var inst_37613 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37612);
var inst_37614 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37613)].join('');
var inst_37615 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37614);
var state_37625__$1 = (function (){var statearr_37638 = state_37625;
(statearr_37638[(10)] = inst_37611);

return statearr_37638;
})();
var statearr_37639_37667 = state_37625__$1;
(statearr_37639_37667[(2)] = inst_37615);

(statearr_37639_37667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37626 === (5))){
var inst_37578 = (state_37625[(7)]);
var inst_37580 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37581 = (new cljs.core.PersistentArrayMap(null,2,inst_37580,null));
var inst_37582 = (new cljs.core.PersistentHashSet(null,inst_37581,null));
var inst_37583 = figwheel.client.focus_msgs.call(null,inst_37582,inst_37578);
var inst_37584 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37583);
var inst_37585 = cljs.core.first.call(null,inst_37583);
var inst_37586 = figwheel.client.autoload_QMARK_.call(null);
var state_37625__$1 = (function (){var statearr_37640 = state_37625;
(statearr_37640[(8)] = inst_37585);

(statearr_37640[(9)] = inst_37584);

return statearr_37640;
})();
if(cljs.core.truth_(inst_37586)){
var statearr_37641_37668 = state_37625__$1;
(statearr_37641_37668[(1)] = (8));

} else {
var statearr_37642_37669 = state_37625__$1;
(statearr_37642_37669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37626 === (14))){
var inst_37596 = (state_37625[(2)]);
var state_37625__$1 = state_37625;
var statearr_37643_37670 = state_37625__$1;
(statearr_37643_37670[(2)] = inst_37596);

(statearr_37643_37670[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37626 === (16))){
var state_37625__$1 = state_37625;
var statearr_37644_37671 = state_37625__$1;
(statearr_37644_37671[(2)] = null);

(statearr_37644_37671[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37626 === (10))){
var inst_37617 = (state_37625[(2)]);
var state_37625__$1 = (function (){var statearr_37645 = state_37625;
(statearr_37645[(11)] = inst_37617);

return statearr_37645;
})();
var statearr_37646_37672 = state_37625__$1;
(statearr_37646_37672[(2)] = null);

(statearr_37646_37672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37626 === (8))){
var inst_37584 = (state_37625[(9)]);
var inst_37588 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37584,opts);
var state_37625__$1 = state_37625;
if(cljs.core.truth_(inst_37588)){
var statearr_37647_37673 = state_37625__$1;
(statearr_37647_37673[(1)] = (11));

} else {
var statearr_37648_37674 = state_37625__$1;
(statearr_37648_37674[(1)] = (12));

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
});})(c__29844__auto___37656,ch))
;
return ((function (switch__29829__auto__,c__29844__auto___37656,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29830__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29830__auto____0 = (function (){
var statearr_37652 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37652[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29830__auto__);

(statearr_37652[(1)] = (1));

return statearr_37652;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29830__auto____1 = (function (state_37625){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_37625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e37653){if((e37653 instanceof Object)){
var ex__29833__auto__ = e37653;
var statearr_37654_37675 = state_37625;
(statearr_37654_37675[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37676 = state_37625;
state_37625 = G__37676;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29830__auto__ = function(state_37625){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29830__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29830__auto____1.call(this,state_37625);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29830__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29830__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto___37656,ch))
})();
var state__29846__auto__ = (function (){var statearr_37655 = f__29845__auto__.call(null);
(statearr_37655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto___37656);

return statearr_37655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto___37656,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37677_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37677_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37680 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37680){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37679){if((e37679 instanceof Error)){
var e = e37679;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37680], null));
} else {
var e = e37679;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37680))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37681){
var map__37690 = p__37681;
var map__37690__$1 = ((((!((map__37690 == null)))?((((map__37690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37690.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37690):map__37690);
var opts = map__37690__$1;
var build_id = cljs.core.get.call(null,map__37690__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37690,map__37690__$1,opts,build_id){
return (function (p__37692){
var vec__37693 = p__37692;
var seq__37694 = cljs.core.seq.call(null,vec__37693);
var first__37695 = cljs.core.first.call(null,seq__37694);
var seq__37694__$1 = cljs.core.next.call(null,seq__37694);
var map__37696 = first__37695;
var map__37696__$1 = ((((!((map__37696 == null)))?((((map__37696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37696.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37696):map__37696);
var msg = map__37696__$1;
var msg_name = cljs.core.get.call(null,map__37696__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37694__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37693,seq__37694,first__37695,seq__37694__$1,map__37696,map__37696__$1,msg,msg_name,_,map__37690,map__37690__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37693,seq__37694,first__37695,seq__37694__$1,map__37696,map__37696__$1,msg,msg_name,_,map__37690,map__37690__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37690,map__37690__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37704){
var vec__37705 = p__37704;
var seq__37706 = cljs.core.seq.call(null,vec__37705);
var first__37707 = cljs.core.first.call(null,seq__37706);
var seq__37706__$1 = cljs.core.next.call(null,seq__37706);
var map__37708 = first__37707;
var map__37708__$1 = ((((!((map__37708 == null)))?((((map__37708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37708):map__37708);
var msg = map__37708__$1;
var msg_name = cljs.core.get.call(null,map__37708__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37706__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37710){
var map__37722 = p__37710;
var map__37722__$1 = ((((!((map__37722 == null)))?((((map__37722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37722.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37722):map__37722);
var on_compile_warning = cljs.core.get.call(null,map__37722__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37722__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37722,map__37722__$1,on_compile_warning,on_compile_fail){
return (function (p__37724){
var vec__37725 = p__37724;
var seq__37726 = cljs.core.seq.call(null,vec__37725);
var first__37727 = cljs.core.first.call(null,seq__37726);
var seq__37726__$1 = cljs.core.next.call(null,seq__37726);
var map__37728 = first__37727;
var map__37728__$1 = ((((!((map__37728 == null)))?((((map__37728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37728.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37728):map__37728);
var msg = map__37728__$1;
var msg_name = cljs.core.get.call(null,map__37728__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37726__$1;
var pred__37730 = cljs.core._EQ_;
var expr__37731 = msg_name;
if(cljs.core.truth_(pred__37730.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37731))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37730.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37731))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37722,map__37722__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto__,msg_hist,msg_names,msg){
return (function (state_37959){
var state_val_37960 = (state_37959[(1)]);
if((state_val_37960 === (7))){
var inst_37879 = (state_37959[(2)]);
var state_37959__$1 = state_37959;
if(cljs.core.truth_(inst_37879)){
var statearr_37961_38011 = state_37959__$1;
(statearr_37961_38011[(1)] = (8));

} else {
var statearr_37962_38012 = state_37959__$1;
(statearr_37962_38012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (20))){
var inst_37953 = (state_37959[(2)]);
var state_37959__$1 = state_37959;
var statearr_37963_38013 = state_37959__$1;
(statearr_37963_38013[(2)] = inst_37953);

(statearr_37963_38013[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (27))){
var inst_37949 = (state_37959[(2)]);
var state_37959__$1 = state_37959;
var statearr_37964_38014 = state_37959__$1;
(statearr_37964_38014[(2)] = inst_37949);

(statearr_37964_38014[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (1))){
var inst_37872 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37959__$1 = state_37959;
if(cljs.core.truth_(inst_37872)){
var statearr_37965_38015 = state_37959__$1;
(statearr_37965_38015[(1)] = (2));

} else {
var statearr_37966_38016 = state_37959__$1;
(statearr_37966_38016[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (24))){
var inst_37951 = (state_37959[(2)]);
var state_37959__$1 = state_37959;
var statearr_37967_38017 = state_37959__$1;
(statearr_37967_38017[(2)] = inst_37951);

(statearr_37967_38017[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (4))){
var inst_37957 = (state_37959[(2)]);
var state_37959__$1 = state_37959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37959__$1,inst_37957);
} else {
if((state_val_37960 === (15))){
var inst_37955 = (state_37959[(2)]);
var state_37959__$1 = state_37959;
var statearr_37968_38018 = state_37959__$1;
(statearr_37968_38018[(2)] = inst_37955);

(statearr_37968_38018[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (21))){
var inst_37908 = (state_37959[(2)]);
var inst_37909 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37910 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37909);
var state_37959__$1 = (function (){var statearr_37969 = state_37959;
(statearr_37969[(7)] = inst_37908);

return statearr_37969;
})();
var statearr_37970_38019 = state_37959__$1;
(statearr_37970_38019[(2)] = inst_37910);

(statearr_37970_38019[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (31))){
var inst_37938 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37959__$1 = state_37959;
if(cljs.core.truth_(inst_37938)){
var statearr_37971_38020 = state_37959__$1;
(statearr_37971_38020[(1)] = (34));

} else {
var statearr_37972_38021 = state_37959__$1;
(statearr_37972_38021[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (32))){
var inst_37947 = (state_37959[(2)]);
var state_37959__$1 = state_37959;
var statearr_37973_38022 = state_37959__$1;
(statearr_37973_38022[(2)] = inst_37947);

(statearr_37973_38022[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (33))){
var inst_37934 = (state_37959[(2)]);
var inst_37935 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37936 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37935);
var state_37959__$1 = (function (){var statearr_37974 = state_37959;
(statearr_37974[(8)] = inst_37934);

return statearr_37974;
})();
var statearr_37975_38023 = state_37959__$1;
(statearr_37975_38023[(2)] = inst_37936);

(statearr_37975_38023[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (13))){
var inst_37893 = figwheel.client.heads_up.clear.call(null);
var state_37959__$1 = state_37959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37959__$1,(16),inst_37893);
} else {
if((state_val_37960 === (22))){
var inst_37914 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37915 = figwheel.client.heads_up.append_warning_message.call(null,inst_37914);
var state_37959__$1 = state_37959;
var statearr_37976_38024 = state_37959__$1;
(statearr_37976_38024[(2)] = inst_37915);

(statearr_37976_38024[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (36))){
var inst_37945 = (state_37959[(2)]);
var state_37959__$1 = state_37959;
var statearr_37977_38025 = state_37959__$1;
(statearr_37977_38025[(2)] = inst_37945);

(statearr_37977_38025[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (29))){
var inst_37925 = (state_37959[(2)]);
var inst_37926 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37927 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37926);
var state_37959__$1 = (function (){var statearr_37978 = state_37959;
(statearr_37978[(9)] = inst_37925);

return statearr_37978;
})();
var statearr_37979_38026 = state_37959__$1;
(statearr_37979_38026[(2)] = inst_37927);

(statearr_37979_38026[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (6))){
var inst_37874 = (state_37959[(10)]);
var state_37959__$1 = state_37959;
var statearr_37980_38027 = state_37959__$1;
(statearr_37980_38027[(2)] = inst_37874);

(statearr_37980_38027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (28))){
var inst_37921 = (state_37959[(2)]);
var inst_37922 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37923 = figwheel.client.heads_up.display_warning.call(null,inst_37922);
var state_37959__$1 = (function (){var statearr_37981 = state_37959;
(statearr_37981[(11)] = inst_37921);

return statearr_37981;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37959__$1,(29),inst_37923);
} else {
if((state_val_37960 === (25))){
var inst_37919 = figwheel.client.heads_up.clear.call(null);
var state_37959__$1 = state_37959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37959__$1,(28),inst_37919);
} else {
if((state_val_37960 === (34))){
var inst_37940 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37959__$1 = state_37959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37959__$1,(37),inst_37940);
} else {
if((state_val_37960 === (17))){
var inst_37899 = (state_37959[(2)]);
var inst_37900 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37901 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37900);
var state_37959__$1 = (function (){var statearr_37982 = state_37959;
(statearr_37982[(12)] = inst_37899);

return statearr_37982;
})();
var statearr_37983_38028 = state_37959__$1;
(statearr_37983_38028[(2)] = inst_37901);

(statearr_37983_38028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (3))){
var inst_37891 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37959__$1 = state_37959;
if(cljs.core.truth_(inst_37891)){
var statearr_37984_38029 = state_37959__$1;
(statearr_37984_38029[(1)] = (13));

} else {
var statearr_37985_38030 = state_37959__$1;
(statearr_37985_38030[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (12))){
var inst_37887 = (state_37959[(2)]);
var state_37959__$1 = state_37959;
var statearr_37986_38031 = state_37959__$1;
(statearr_37986_38031[(2)] = inst_37887);

(statearr_37986_38031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (2))){
var inst_37874 = (state_37959[(10)]);
var inst_37874__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37959__$1 = (function (){var statearr_37987 = state_37959;
(statearr_37987[(10)] = inst_37874__$1);

return statearr_37987;
})();
if(cljs.core.truth_(inst_37874__$1)){
var statearr_37988_38032 = state_37959__$1;
(statearr_37988_38032[(1)] = (5));

} else {
var statearr_37989_38033 = state_37959__$1;
(statearr_37989_38033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (23))){
var inst_37917 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37959__$1 = state_37959;
if(cljs.core.truth_(inst_37917)){
var statearr_37990_38034 = state_37959__$1;
(statearr_37990_38034[(1)] = (25));

} else {
var statearr_37991_38035 = state_37959__$1;
(statearr_37991_38035[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (35))){
var state_37959__$1 = state_37959;
var statearr_37992_38036 = state_37959__$1;
(statearr_37992_38036[(2)] = null);

(statearr_37992_38036[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (19))){
var inst_37912 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37959__$1 = state_37959;
if(cljs.core.truth_(inst_37912)){
var statearr_37993_38037 = state_37959__$1;
(statearr_37993_38037[(1)] = (22));

} else {
var statearr_37994_38038 = state_37959__$1;
(statearr_37994_38038[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (11))){
var inst_37883 = (state_37959[(2)]);
var state_37959__$1 = state_37959;
var statearr_37995_38039 = state_37959__$1;
(statearr_37995_38039[(2)] = inst_37883);

(statearr_37995_38039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (9))){
var inst_37885 = figwheel.client.heads_up.clear.call(null);
var state_37959__$1 = state_37959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37959__$1,(12),inst_37885);
} else {
if((state_val_37960 === (5))){
var inst_37876 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37959__$1 = state_37959;
var statearr_37996_38040 = state_37959__$1;
(statearr_37996_38040[(2)] = inst_37876);

(statearr_37996_38040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (14))){
var inst_37903 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37959__$1 = state_37959;
if(cljs.core.truth_(inst_37903)){
var statearr_37997_38041 = state_37959__$1;
(statearr_37997_38041[(1)] = (18));

} else {
var statearr_37998_38042 = state_37959__$1;
(statearr_37998_38042[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (26))){
var inst_37929 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37959__$1 = state_37959;
if(cljs.core.truth_(inst_37929)){
var statearr_37999_38043 = state_37959__$1;
(statearr_37999_38043[(1)] = (30));

} else {
var statearr_38000_38044 = state_37959__$1;
(statearr_38000_38044[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (16))){
var inst_37895 = (state_37959[(2)]);
var inst_37896 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37897 = figwheel.client.heads_up.display_exception.call(null,inst_37896);
var state_37959__$1 = (function (){var statearr_38001 = state_37959;
(statearr_38001[(13)] = inst_37895);

return statearr_38001;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37959__$1,(17),inst_37897);
} else {
if((state_val_37960 === (30))){
var inst_37931 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37932 = figwheel.client.heads_up.display_warning.call(null,inst_37931);
var state_37959__$1 = state_37959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37959__$1,(33),inst_37932);
} else {
if((state_val_37960 === (10))){
var inst_37889 = (state_37959[(2)]);
var state_37959__$1 = state_37959;
var statearr_38002_38045 = state_37959__$1;
(statearr_38002_38045[(2)] = inst_37889);

(statearr_38002_38045[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (18))){
var inst_37905 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37906 = figwheel.client.heads_up.display_exception.call(null,inst_37905);
var state_37959__$1 = state_37959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37959__$1,(21),inst_37906);
} else {
if((state_val_37960 === (37))){
var inst_37942 = (state_37959[(2)]);
var state_37959__$1 = state_37959;
var statearr_38003_38046 = state_37959__$1;
(statearr_38003_38046[(2)] = inst_37942);

(statearr_38003_38046[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (8))){
var inst_37881 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37959__$1 = state_37959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37959__$1,(11),inst_37881);
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
});})(c__29844__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29829__auto__,c__29844__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29830__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29830__auto____0 = (function (){
var statearr_38007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38007[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29830__auto__);

(statearr_38007[(1)] = (1));

return statearr_38007;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29830__auto____1 = (function (state_37959){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_37959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e38008){if((e38008 instanceof Object)){
var ex__29833__auto__ = e38008;
var statearr_38009_38047 = state_37959;
(statearr_38009_38047[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38048 = state_37959;
state_37959 = G__38048;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29830__auto__ = function(state_37959){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29830__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29830__auto____1.call(this,state_37959);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29830__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29830__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto__,msg_hist,msg_names,msg))
})();
var state__29846__auto__ = (function (){var statearr_38010 = f__29845__auto__.call(null);
(statearr_38010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto__);

return statearr_38010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto__,msg_hist,msg_names,msg))
);

return c__29844__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29844__auto___38111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto___38111,ch){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto___38111,ch){
return (function (state_38094){
var state_val_38095 = (state_38094[(1)]);
if((state_val_38095 === (1))){
var state_38094__$1 = state_38094;
var statearr_38096_38112 = state_38094__$1;
(statearr_38096_38112[(2)] = null);

(statearr_38096_38112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38095 === (2))){
var state_38094__$1 = state_38094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38094__$1,(4),ch);
} else {
if((state_val_38095 === (3))){
var inst_38092 = (state_38094[(2)]);
var state_38094__$1 = state_38094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38094__$1,inst_38092);
} else {
if((state_val_38095 === (4))){
var inst_38082 = (state_38094[(7)]);
var inst_38082__$1 = (state_38094[(2)]);
var state_38094__$1 = (function (){var statearr_38097 = state_38094;
(statearr_38097[(7)] = inst_38082__$1);

return statearr_38097;
})();
if(cljs.core.truth_(inst_38082__$1)){
var statearr_38098_38113 = state_38094__$1;
(statearr_38098_38113[(1)] = (5));

} else {
var statearr_38099_38114 = state_38094__$1;
(statearr_38099_38114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38095 === (5))){
var inst_38082 = (state_38094[(7)]);
var inst_38084 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38082);
var state_38094__$1 = state_38094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38094__$1,(8),inst_38084);
} else {
if((state_val_38095 === (6))){
var state_38094__$1 = state_38094;
var statearr_38100_38115 = state_38094__$1;
(statearr_38100_38115[(2)] = null);

(statearr_38100_38115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38095 === (7))){
var inst_38090 = (state_38094[(2)]);
var state_38094__$1 = state_38094;
var statearr_38101_38116 = state_38094__$1;
(statearr_38101_38116[(2)] = inst_38090);

(statearr_38101_38116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38095 === (8))){
var inst_38086 = (state_38094[(2)]);
var state_38094__$1 = (function (){var statearr_38102 = state_38094;
(statearr_38102[(8)] = inst_38086);

return statearr_38102;
})();
var statearr_38103_38117 = state_38094__$1;
(statearr_38103_38117[(2)] = null);

(statearr_38103_38117[(1)] = (2));


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
});})(c__29844__auto___38111,ch))
;
return ((function (switch__29829__auto__,c__29844__auto___38111,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29830__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29830__auto____0 = (function (){
var statearr_38107 = [null,null,null,null,null,null,null,null,null];
(statearr_38107[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29830__auto__);

(statearr_38107[(1)] = (1));

return statearr_38107;
});
var figwheel$client$heads_up_plugin_$_state_machine__29830__auto____1 = (function (state_38094){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_38094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e38108){if((e38108 instanceof Object)){
var ex__29833__auto__ = e38108;
var statearr_38109_38118 = state_38094;
(statearr_38109_38118[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38119 = state_38094;
state_38094 = G__38119;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29830__auto__ = function(state_38094){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29830__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29830__auto____1.call(this,state_38094);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29830__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29830__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto___38111,ch))
})();
var state__29846__auto__ = (function (){var statearr_38110 = f__29845__auto__.call(null);
(statearr_38110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto___38111);

return statearr_38110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto___38111,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto__){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto__){
return (function (state_38140){
var state_val_38141 = (state_38140[(1)]);
if((state_val_38141 === (1))){
var inst_38135 = cljs.core.async.timeout.call(null,(3000));
var state_38140__$1 = state_38140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38140__$1,(2),inst_38135);
} else {
if((state_val_38141 === (2))){
var inst_38137 = (state_38140[(2)]);
var inst_38138 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38140__$1 = (function (){var statearr_38142 = state_38140;
(statearr_38142[(7)] = inst_38137);

return statearr_38142;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38140__$1,inst_38138);
} else {
return null;
}
}
});})(c__29844__auto__))
;
return ((function (switch__29829__auto__,c__29844__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29830__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29830__auto____0 = (function (){
var statearr_38146 = [null,null,null,null,null,null,null,null];
(statearr_38146[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29830__auto__);

(statearr_38146[(1)] = (1));

return statearr_38146;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29830__auto____1 = (function (state_38140){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_38140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e38147){if((e38147 instanceof Object)){
var ex__29833__auto__ = e38147;
var statearr_38148_38150 = state_38140;
(statearr_38148_38150[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38151 = state_38140;
state_38140 = G__38151;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29830__auto__ = function(state_38140){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29830__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29830__auto____1.call(this,state_38140);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29830__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29830__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto__))
})();
var state__29846__auto__ = (function (){var statearr_38149 = f__29845__auto__.call(null);
(statearr_38149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto__);

return statearr_38149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto__))
);

return c__29844__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38174){
var state_val_38175 = (state_38174[(1)]);
if((state_val_38175 === (1))){
var inst_38168 = cljs.core.async.timeout.call(null,(2000));
var state_38174__$1 = state_38174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38174__$1,(2),inst_38168);
} else {
if((state_val_38175 === (2))){
var inst_38170 = (state_38174[(2)]);
var inst_38171 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_38172 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38171);
var state_38174__$1 = (function (){var statearr_38176 = state_38174;
(statearr_38176[(7)] = inst_38170);

return statearr_38176;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38174__$1,inst_38172);
} else {
return null;
}
}
});})(c__29844__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__29829__auto__,c__29844__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29830__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29830__auto____0 = (function (){
var statearr_38180 = [null,null,null,null,null,null,null,null];
(statearr_38180[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29830__auto__);

(statearr_38180[(1)] = (1));

return statearr_38180;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29830__auto____1 = (function (state_38174){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_38174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e38181){if((e38181 instanceof Object)){
var ex__29833__auto__ = e38181;
var statearr_38182_38184 = state_38174;
(statearr_38182_38184[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38185 = state_38174;
state_38174 = G__38185;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29830__auto__ = function(state_38174){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29830__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29830__auto____1.call(this,state_38174);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29830__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29830__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto__,figwheel_version,temp__4657__auto__))
})();
var state__29846__auto__ = (function (){var statearr_38183 = f__29845__auto__.call(null);
(statearr_38183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto__);

return statearr_38183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto__,figwheel_version,temp__4657__auto__))
);

return c__29844__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38186){
var map__38190 = p__38186;
var map__38190__$1 = ((((!((map__38190 == null)))?((((map__38190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38190.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38190):map__38190);
var file = cljs.core.get.call(null,map__38190__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38190__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38190__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38192 = "";
var G__38192__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38192),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38192);
var G__38192__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38192__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38192__$1);
if(cljs.core.truth_((function (){var and__26662__auto__ = line;
if(cljs.core.truth_(and__26662__auto__)){
return column;
} else {
return and__26662__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38192__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38192__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38193){
var map__38200 = p__38193;
var map__38200__$1 = ((((!((map__38200 == null)))?((((map__38200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38200.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38200):map__38200);
var ed = map__38200__$1;
var formatted_exception = cljs.core.get.call(null,map__38200__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38200__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38200__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38202_38206 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38203_38207 = null;
var count__38204_38208 = (0);
var i__38205_38209 = (0);
while(true){
if((i__38205_38209 < count__38204_38208)){
var msg_38210 = cljs.core._nth.call(null,chunk__38203_38207,i__38205_38209);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38210);

var G__38211 = seq__38202_38206;
var G__38212 = chunk__38203_38207;
var G__38213 = count__38204_38208;
var G__38214 = (i__38205_38209 + (1));
seq__38202_38206 = G__38211;
chunk__38203_38207 = G__38212;
count__38204_38208 = G__38213;
i__38205_38209 = G__38214;
continue;
} else {
var temp__4657__auto___38215 = cljs.core.seq.call(null,seq__38202_38206);
if(temp__4657__auto___38215){
var seq__38202_38216__$1 = temp__4657__auto___38215;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38202_38216__$1)){
var c__27493__auto___38217 = cljs.core.chunk_first.call(null,seq__38202_38216__$1);
var G__38218 = cljs.core.chunk_rest.call(null,seq__38202_38216__$1);
var G__38219 = c__27493__auto___38217;
var G__38220 = cljs.core.count.call(null,c__27493__auto___38217);
var G__38221 = (0);
seq__38202_38206 = G__38218;
chunk__38203_38207 = G__38219;
count__38204_38208 = G__38220;
i__38205_38209 = G__38221;
continue;
} else {
var msg_38222 = cljs.core.first.call(null,seq__38202_38216__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38222);

var G__38223 = cljs.core.next.call(null,seq__38202_38216__$1);
var G__38224 = null;
var G__38225 = (0);
var G__38226 = (0);
seq__38202_38206 = G__38223;
chunk__38203_38207 = G__38224;
count__38204_38208 = G__38225;
i__38205_38209 = G__38226;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38227){
var map__38230 = p__38227;
var map__38230__$1 = ((((!((map__38230 == null)))?((((map__38230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38230.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38230):map__38230);
var w = map__38230__$1;
var message = cljs.core.get.call(null,map__38230__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/ui-out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/ui-out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__26662__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__26662__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__26662__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38242 = cljs.core.seq.call(null,plugins);
var chunk__38243 = null;
var count__38244 = (0);
var i__38245 = (0);
while(true){
if((i__38245 < count__38244)){
var vec__38246 = cljs.core._nth.call(null,chunk__38243,i__38245);
var k = cljs.core.nth.call(null,vec__38246,(0),null);
var plugin = cljs.core.nth.call(null,vec__38246,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38252 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38242,chunk__38243,count__38244,i__38245,pl_38252,vec__38246,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38252.call(null,msg_hist);
});})(seq__38242,chunk__38243,count__38244,i__38245,pl_38252,vec__38246,k,plugin))
);
} else {
}

var G__38253 = seq__38242;
var G__38254 = chunk__38243;
var G__38255 = count__38244;
var G__38256 = (i__38245 + (1));
seq__38242 = G__38253;
chunk__38243 = G__38254;
count__38244 = G__38255;
i__38245 = G__38256;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38242);
if(temp__4657__auto__){
var seq__38242__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38242__$1)){
var c__27493__auto__ = cljs.core.chunk_first.call(null,seq__38242__$1);
var G__38257 = cljs.core.chunk_rest.call(null,seq__38242__$1);
var G__38258 = c__27493__auto__;
var G__38259 = cljs.core.count.call(null,c__27493__auto__);
var G__38260 = (0);
seq__38242 = G__38257;
chunk__38243 = G__38258;
count__38244 = G__38259;
i__38245 = G__38260;
continue;
} else {
var vec__38249 = cljs.core.first.call(null,seq__38242__$1);
var k = cljs.core.nth.call(null,vec__38249,(0),null);
var plugin = cljs.core.nth.call(null,vec__38249,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38261 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38242,chunk__38243,count__38244,i__38245,pl_38261,vec__38249,k,plugin,seq__38242__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38261.call(null,msg_hist);
});})(seq__38242,chunk__38243,count__38244,i__38245,pl_38261,vec__38249,k,plugin,seq__38242__$1,temp__4657__auto__))
);
} else {
}

var G__38262 = cljs.core.next.call(null,seq__38242__$1);
var G__38263 = null;
var G__38264 = (0);
var G__38265 = (0);
seq__38242 = G__38262;
chunk__38243 = G__38263;
count__38244 = G__38264;
i__38245 = G__38265;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args38266 = [];
var len__27787__auto___38273 = arguments.length;
var i__27788__auto___38274 = (0);
while(true){
if((i__27788__auto___38274 < len__27787__auto___38273)){
args38266.push((arguments[i__27788__auto___38274]));

var G__38275 = (i__27788__auto___38274 + (1));
i__27788__auto___38274 = G__38275;
continue;
} else {
}
break;
}

var G__38268 = args38266.length;
switch (G__38268) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38266.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38269_38277 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38270_38278 = null;
var count__38271_38279 = (0);
var i__38272_38280 = (0);
while(true){
if((i__38272_38280 < count__38271_38279)){
var msg_38281 = cljs.core._nth.call(null,chunk__38270_38278,i__38272_38280);
figwheel.client.socket.handle_incoming_message.call(null,msg_38281);

var G__38282 = seq__38269_38277;
var G__38283 = chunk__38270_38278;
var G__38284 = count__38271_38279;
var G__38285 = (i__38272_38280 + (1));
seq__38269_38277 = G__38282;
chunk__38270_38278 = G__38283;
count__38271_38279 = G__38284;
i__38272_38280 = G__38285;
continue;
} else {
var temp__4657__auto___38286 = cljs.core.seq.call(null,seq__38269_38277);
if(temp__4657__auto___38286){
var seq__38269_38287__$1 = temp__4657__auto___38286;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38269_38287__$1)){
var c__27493__auto___38288 = cljs.core.chunk_first.call(null,seq__38269_38287__$1);
var G__38289 = cljs.core.chunk_rest.call(null,seq__38269_38287__$1);
var G__38290 = c__27493__auto___38288;
var G__38291 = cljs.core.count.call(null,c__27493__auto___38288);
var G__38292 = (0);
seq__38269_38277 = G__38289;
chunk__38270_38278 = G__38290;
count__38271_38279 = G__38291;
i__38272_38280 = G__38292;
continue;
} else {
var msg_38293 = cljs.core.first.call(null,seq__38269_38287__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38293);

var G__38294 = cljs.core.next.call(null,seq__38269_38287__$1);
var G__38295 = null;
var G__38296 = (0);
var G__38297 = (0);
seq__38269_38277 = G__38294;
chunk__38270_38278 = G__38295;
count__38271_38279 = G__38296;
i__38272_38280 = G__38297;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27794__auto__ = [];
var len__27787__auto___38302 = arguments.length;
var i__27788__auto___38303 = (0);
while(true){
if((i__27788__auto___38303 < len__27787__auto___38302)){
args__27794__auto__.push((arguments[i__27788__auto___38303]));

var G__38304 = (i__27788__auto___38303 + (1));
i__27788__auto___38303 = G__38304;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38299){
var map__38300 = p__38299;
var map__38300__$1 = ((((!((map__38300 == null)))?((((map__38300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38300):map__38300);
var opts = map__38300__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38298){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38298));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38306){if((e38306 instanceof Error)){
var e = e38306;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38306;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__38310){
var map__38311 = p__38310;
var map__38311__$1 = ((((!((map__38311 == null)))?((((map__38311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38311.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38311):map__38311);
var msg_name = cljs.core.get.call(null,map__38311__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map