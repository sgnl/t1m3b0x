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
var args37465 = [];
var len__27787__auto___37468 = arguments.length;
var i__27788__auto___37469 = (0);
while(true){
if((i__27788__auto___37469 < len__27787__auto___37468)){
args37465.push((arguments[i__27788__auto___37469]));

var G__37470 = (i__27788__auto___37469 + (1));
i__27788__auto___37469 = G__37470;
continue;
} else {
}
break;
}

var G__37467 = args37465.length;
switch (G__37467) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37465.length)].join('')));

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
var len__27787__auto___37473 = arguments.length;
var i__27788__auto___37474 = (0);
while(true){
if((i__27788__auto___37474 < len__27787__auto___37473)){
args__27794__auto__.push((arguments[i__27788__auto___37474]));

var G__37475 = (i__27788__auto___37474 + (1));
i__27788__auto___37474 = G__37475;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37472){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37472));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27794__auto__ = [];
var len__27787__auto___37477 = arguments.length;
var i__27788__auto___37478 = (0);
while(true){
if((i__27788__auto___37478 < len__27787__auto___37477)){
args__27794__auto__.push((arguments[i__27788__auto___37478]));

var G__37479 = (i__27788__auto___37478 + (1));
i__27788__auto___37478 = G__37479;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37476){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37476));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37480){
var map__37483 = p__37480;
var map__37483__$1 = ((((!((map__37483 == null)))?((((map__37483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37483):map__37483);
var message = cljs.core.get.call(null,map__37483__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37483__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__29845__auto___37645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto___37645,ch){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto___37645,ch){
return (function (state_37614){
var state_val_37615 = (state_37614[(1)]);
if((state_val_37615 === (7))){
var inst_37610 = (state_37614[(2)]);
var state_37614__$1 = state_37614;
var statearr_37616_37646 = state_37614__$1;
(statearr_37616_37646[(2)] = inst_37610);

(statearr_37616_37646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (1))){
var state_37614__$1 = state_37614;
var statearr_37617_37647 = state_37614__$1;
(statearr_37617_37647[(2)] = null);

(statearr_37617_37647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (4))){
var inst_37567 = (state_37614[(7)]);
var inst_37567__$1 = (state_37614[(2)]);
var state_37614__$1 = (function (){var statearr_37618 = state_37614;
(statearr_37618[(7)] = inst_37567__$1);

return statearr_37618;
})();
if(cljs.core.truth_(inst_37567__$1)){
var statearr_37619_37648 = state_37614__$1;
(statearr_37619_37648[(1)] = (5));

} else {
var statearr_37620_37649 = state_37614__$1;
(statearr_37620_37649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (15))){
var inst_37574 = (state_37614[(8)]);
var inst_37589 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37574);
var inst_37590 = cljs.core.first.call(null,inst_37589);
var inst_37591 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37590);
var inst_37592 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37591)].join('');
var inst_37593 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37592);
var state_37614__$1 = state_37614;
var statearr_37621_37650 = state_37614__$1;
(statearr_37621_37650[(2)] = inst_37593);

(statearr_37621_37650[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (13))){
var inst_37598 = (state_37614[(2)]);
var state_37614__$1 = state_37614;
var statearr_37622_37651 = state_37614__$1;
(statearr_37622_37651[(2)] = inst_37598);

(statearr_37622_37651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (6))){
var state_37614__$1 = state_37614;
var statearr_37623_37652 = state_37614__$1;
(statearr_37623_37652[(2)] = null);

(statearr_37623_37652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (17))){
var inst_37596 = (state_37614[(2)]);
var state_37614__$1 = state_37614;
var statearr_37624_37653 = state_37614__$1;
(statearr_37624_37653[(2)] = inst_37596);

(statearr_37624_37653[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (3))){
var inst_37612 = (state_37614[(2)]);
var state_37614__$1 = state_37614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37614__$1,inst_37612);
} else {
if((state_val_37615 === (12))){
var inst_37573 = (state_37614[(9)]);
var inst_37587 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37573,opts);
var state_37614__$1 = state_37614;
if(cljs.core.truth_(inst_37587)){
var statearr_37625_37654 = state_37614__$1;
(statearr_37625_37654[(1)] = (15));

} else {
var statearr_37626_37655 = state_37614__$1;
(statearr_37626_37655[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (2))){
var state_37614__$1 = state_37614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37614__$1,(4),ch);
} else {
if((state_val_37615 === (11))){
var inst_37574 = (state_37614[(8)]);
var inst_37579 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37580 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37574);
var inst_37581 = cljs.core.async.timeout.call(null,(1000));
var inst_37582 = [inst_37580,inst_37581];
var inst_37583 = (new cljs.core.PersistentVector(null,2,(5),inst_37579,inst_37582,null));
var state_37614__$1 = state_37614;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37614__$1,(14),inst_37583);
} else {
if((state_val_37615 === (9))){
var inst_37574 = (state_37614[(8)]);
var inst_37600 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37601 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37574);
var inst_37602 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37601);
var inst_37603 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37602)].join('');
var inst_37604 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37603);
var state_37614__$1 = (function (){var statearr_37627 = state_37614;
(statearr_37627[(10)] = inst_37600);

return statearr_37627;
})();
var statearr_37628_37656 = state_37614__$1;
(statearr_37628_37656[(2)] = inst_37604);

(statearr_37628_37656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (5))){
var inst_37567 = (state_37614[(7)]);
var inst_37569 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37570 = (new cljs.core.PersistentArrayMap(null,2,inst_37569,null));
var inst_37571 = (new cljs.core.PersistentHashSet(null,inst_37570,null));
var inst_37572 = figwheel.client.focus_msgs.call(null,inst_37571,inst_37567);
var inst_37573 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37572);
var inst_37574 = cljs.core.first.call(null,inst_37572);
var inst_37575 = figwheel.client.autoload_QMARK_.call(null);
var state_37614__$1 = (function (){var statearr_37629 = state_37614;
(statearr_37629[(8)] = inst_37574);

(statearr_37629[(9)] = inst_37573);

return statearr_37629;
})();
if(cljs.core.truth_(inst_37575)){
var statearr_37630_37657 = state_37614__$1;
(statearr_37630_37657[(1)] = (8));

} else {
var statearr_37631_37658 = state_37614__$1;
(statearr_37631_37658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (14))){
var inst_37585 = (state_37614[(2)]);
var state_37614__$1 = state_37614;
var statearr_37632_37659 = state_37614__$1;
(statearr_37632_37659[(2)] = inst_37585);

(statearr_37632_37659[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (16))){
var state_37614__$1 = state_37614;
var statearr_37633_37660 = state_37614__$1;
(statearr_37633_37660[(2)] = null);

(statearr_37633_37660[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (10))){
var inst_37606 = (state_37614[(2)]);
var state_37614__$1 = (function (){var statearr_37634 = state_37614;
(statearr_37634[(11)] = inst_37606);

return statearr_37634;
})();
var statearr_37635_37661 = state_37614__$1;
(statearr_37635_37661[(2)] = null);

(statearr_37635_37661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (8))){
var inst_37573 = (state_37614[(9)]);
var inst_37577 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37573,opts);
var state_37614__$1 = state_37614;
if(cljs.core.truth_(inst_37577)){
var statearr_37636_37662 = state_37614__$1;
(statearr_37636_37662[(1)] = (11));

} else {
var statearr_37637_37663 = state_37614__$1;
(statearr_37637_37663[(1)] = (12));

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
});})(c__29845__auto___37645,ch))
;
return ((function (switch__29830__auto__,c__29845__auto___37645,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29831__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29831__auto____0 = (function (){
var statearr_37641 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37641[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29831__auto__);

(statearr_37641[(1)] = (1));

return statearr_37641;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29831__auto____1 = (function (state_37614){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_37614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e37642){if((e37642 instanceof Object)){
var ex__29834__auto__ = e37642;
var statearr_37643_37664 = state_37614;
(statearr_37643_37664[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37665 = state_37614;
state_37614 = G__37665;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29831__auto__ = function(state_37614){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29831__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29831__auto____1.call(this,state_37614);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29831__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29831__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto___37645,ch))
})();
var state__29847__auto__ = (function (){var statearr_37644 = f__29846__auto__.call(null);
(statearr_37644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto___37645);

return statearr_37644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto___37645,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37666_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37666_SHARP_));
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
var base_path_37669 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37669){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37668){if((e37668 instanceof Error)){
var e = e37668;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37669], null));
} else {
var e = e37668;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37669))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37670){
var map__37679 = p__37670;
var map__37679__$1 = ((((!((map__37679 == null)))?((((map__37679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37679.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37679):map__37679);
var opts = map__37679__$1;
var build_id = cljs.core.get.call(null,map__37679__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37679,map__37679__$1,opts,build_id){
return (function (p__37681){
var vec__37682 = p__37681;
var seq__37683 = cljs.core.seq.call(null,vec__37682);
var first__37684 = cljs.core.first.call(null,seq__37683);
var seq__37683__$1 = cljs.core.next.call(null,seq__37683);
var map__37685 = first__37684;
var map__37685__$1 = ((((!((map__37685 == null)))?((((map__37685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37685):map__37685);
var msg = map__37685__$1;
var msg_name = cljs.core.get.call(null,map__37685__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37683__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37682,seq__37683,first__37684,seq__37683__$1,map__37685,map__37685__$1,msg,msg_name,_,map__37679,map__37679__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37682,seq__37683,first__37684,seq__37683__$1,map__37685,map__37685__$1,msg,msg_name,_,map__37679,map__37679__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37679,map__37679__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37693){
var vec__37694 = p__37693;
var seq__37695 = cljs.core.seq.call(null,vec__37694);
var first__37696 = cljs.core.first.call(null,seq__37695);
var seq__37695__$1 = cljs.core.next.call(null,seq__37695);
var map__37697 = first__37696;
var map__37697__$1 = ((((!((map__37697 == null)))?((((map__37697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37697.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37697):map__37697);
var msg = map__37697__$1;
var msg_name = cljs.core.get.call(null,map__37697__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37695__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37699){
var map__37711 = p__37699;
var map__37711__$1 = ((((!((map__37711 == null)))?((((map__37711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37711.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37711):map__37711);
var on_compile_warning = cljs.core.get.call(null,map__37711__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37711__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37711,map__37711__$1,on_compile_warning,on_compile_fail){
return (function (p__37713){
var vec__37714 = p__37713;
var seq__37715 = cljs.core.seq.call(null,vec__37714);
var first__37716 = cljs.core.first.call(null,seq__37715);
var seq__37715__$1 = cljs.core.next.call(null,seq__37715);
var map__37717 = first__37716;
var map__37717__$1 = ((((!((map__37717 == null)))?((((map__37717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37717.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37717):map__37717);
var msg = map__37717__$1;
var msg_name = cljs.core.get.call(null,map__37717__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37715__$1;
var pred__37719 = cljs.core._EQ_;
var expr__37720 = msg_name;
if(cljs.core.truth_(pred__37719.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37720))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37719.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37720))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37711,map__37711__$1,on_compile_warning,on_compile_fail))
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
var c__29845__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto__,msg_hist,msg_names,msg){
return (function (state_37948){
var state_val_37949 = (state_37948[(1)]);
if((state_val_37949 === (7))){
var inst_37868 = (state_37948[(2)]);
var state_37948__$1 = state_37948;
if(cljs.core.truth_(inst_37868)){
var statearr_37950_38000 = state_37948__$1;
(statearr_37950_38000[(1)] = (8));

} else {
var statearr_37951_38001 = state_37948__$1;
(statearr_37951_38001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (20))){
var inst_37942 = (state_37948[(2)]);
var state_37948__$1 = state_37948;
var statearr_37952_38002 = state_37948__$1;
(statearr_37952_38002[(2)] = inst_37942);

(statearr_37952_38002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (27))){
var inst_37938 = (state_37948[(2)]);
var state_37948__$1 = state_37948;
var statearr_37953_38003 = state_37948__$1;
(statearr_37953_38003[(2)] = inst_37938);

(statearr_37953_38003[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (1))){
var inst_37861 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37948__$1 = state_37948;
if(cljs.core.truth_(inst_37861)){
var statearr_37954_38004 = state_37948__$1;
(statearr_37954_38004[(1)] = (2));

} else {
var statearr_37955_38005 = state_37948__$1;
(statearr_37955_38005[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (24))){
var inst_37940 = (state_37948[(2)]);
var state_37948__$1 = state_37948;
var statearr_37956_38006 = state_37948__$1;
(statearr_37956_38006[(2)] = inst_37940);

(statearr_37956_38006[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (4))){
var inst_37946 = (state_37948[(2)]);
var state_37948__$1 = state_37948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37948__$1,inst_37946);
} else {
if((state_val_37949 === (15))){
var inst_37944 = (state_37948[(2)]);
var state_37948__$1 = state_37948;
var statearr_37957_38007 = state_37948__$1;
(statearr_37957_38007[(2)] = inst_37944);

(statearr_37957_38007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (21))){
var inst_37897 = (state_37948[(2)]);
var inst_37898 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37899 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37898);
var state_37948__$1 = (function (){var statearr_37958 = state_37948;
(statearr_37958[(7)] = inst_37897);

return statearr_37958;
})();
var statearr_37959_38008 = state_37948__$1;
(statearr_37959_38008[(2)] = inst_37899);

(statearr_37959_38008[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (31))){
var inst_37927 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37948__$1 = state_37948;
if(cljs.core.truth_(inst_37927)){
var statearr_37960_38009 = state_37948__$1;
(statearr_37960_38009[(1)] = (34));

} else {
var statearr_37961_38010 = state_37948__$1;
(statearr_37961_38010[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (32))){
var inst_37936 = (state_37948[(2)]);
var state_37948__$1 = state_37948;
var statearr_37962_38011 = state_37948__$1;
(statearr_37962_38011[(2)] = inst_37936);

(statearr_37962_38011[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (33))){
var inst_37923 = (state_37948[(2)]);
var inst_37924 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37925 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37924);
var state_37948__$1 = (function (){var statearr_37963 = state_37948;
(statearr_37963[(8)] = inst_37923);

return statearr_37963;
})();
var statearr_37964_38012 = state_37948__$1;
(statearr_37964_38012[(2)] = inst_37925);

(statearr_37964_38012[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (13))){
var inst_37882 = figwheel.client.heads_up.clear.call(null);
var state_37948__$1 = state_37948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37948__$1,(16),inst_37882);
} else {
if((state_val_37949 === (22))){
var inst_37903 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37904 = figwheel.client.heads_up.append_warning_message.call(null,inst_37903);
var state_37948__$1 = state_37948;
var statearr_37965_38013 = state_37948__$1;
(statearr_37965_38013[(2)] = inst_37904);

(statearr_37965_38013[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (36))){
var inst_37934 = (state_37948[(2)]);
var state_37948__$1 = state_37948;
var statearr_37966_38014 = state_37948__$1;
(statearr_37966_38014[(2)] = inst_37934);

(statearr_37966_38014[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (29))){
var inst_37914 = (state_37948[(2)]);
var inst_37915 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37916 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37915);
var state_37948__$1 = (function (){var statearr_37967 = state_37948;
(statearr_37967[(9)] = inst_37914);

return statearr_37967;
})();
var statearr_37968_38015 = state_37948__$1;
(statearr_37968_38015[(2)] = inst_37916);

(statearr_37968_38015[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (6))){
var inst_37863 = (state_37948[(10)]);
var state_37948__$1 = state_37948;
var statearr_37969_38016 = state_37948__$1;
(statearr_37969_38016[(2)] = inst_37863);

(statearr_37969_38016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (28))){
var inst_37910 = (state_37948[(2)]);
var inst_37911 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37912 = figwheel.client.heads_up.display_warning.call(null,inst_37911);
var state_37948__$1 = (function (){var statearr_37970 = state_37948;
(statearr_37970[(11)] = inst_37910);

return statearr_37970;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37948__$1,(29),inst_37912);
} else {
if((state_val_37949 === (25))){
var inst_37908 = figwheel.client.heads_up.clear.call(null);
var state_37948__$1 = state_37948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37948__$1,(28),inst_37908);
} else {
if((state_val_37949 === (34))){
var inst_37929 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37948__$1 = state_37948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37948__$1,(37),inst_37929);
} else {
if((state_val_37949 === (17))){
var inst_37888 = (state_37948[(2)]);
var inst_37889 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37890 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37889);
var state_37948__$1 = (function (){var statearr_37971 = state_37948;
(statearr_37971[(12)] = inst_37888);

return statearr_37971;
})();
var statearr_37972_38017 = state_37948__$1;
(statearr_37972_38017[(2)] = inst_37890);

(statearr_37972_38017[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (3))){
var inst_37880 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37948__$1 = state_37948;
if(cljs.core.truth_(inst_37880)){
var statearr_37973_38018 = state_37948__$1;
(statearr_37973_38018[(1)] = (13));

} else {
var statearr_37974_38019 = state_37948__$1;
(statearr_37974_38019[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (12))){
var inst_37876 = (state_37948[(2)]);
var state_37948__$1 = state_37948;
var statearr_37975_38020 = state_37948__$1;
(statearr_37975_38020[(2)] = inst_37876);

(statearr_37975_38020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (2))){
var inst_37863 = (state_37948[(10)]);
var inst_37863__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37948__$1 = (function (){var statearr_37976 = state_37948;
(statearr_37976[(10)] = inst_37863__$1);

return statearr_37976;
})();
if(cljs.core.truth_(inst_37863__$1)){
var statearr_37977_38021 = state_37948__$1;
(statearr_37977_38021[(1)] = (5));

} else {
var statearr_37978_38022 = state_37948__$1;
(statearr_37978_38022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (23))){
var inst_37906 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37948__$1 = state_37948;
if(cljs.core.truth_(inst_37906)){
var statearr_37979_38023 = state_37948__$1;
(statearr_37979_38023[(1)] = (25));

} else {
var statearr_37980_38024 = state_37948__$1;
(statearr_37980_38024[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (35))){
var state_37948__$1 = state_37948;
var statearr_37981_38025 = state_37948__$1;
(statearr_37981_38025[(2)] = null);

(statearr_37981_38025[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (19))){
var inst_37901 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37948__$1 = state_37948;
if(cljs.core.truth_(inst_37901)){
var statearr_37982_38026 = state_37948__$1;
(statearr_37982_38026[(1)] = (22));

} else {
var statearr_37983_38027 = state_37948__$1;
(statearr_37983_38027[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (11))){
var inst_37872 = (state_37948[(2)]);
var state_37948__$1 = state_37948;
var statearr_37984_38028 = state_37948__$1;
(statearr_37984_38028[(2)] = inst_37872);

(statearr_37984_38028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (9))){
var inst_37874 = figwheel.client.heads_up.clear.call(null);
var state_37948__$1 = state_37948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37948__$1,(12),inst_37874);
} else {
if((state_val_37949 === (5))){
var inst_37865 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37948__$1 = state_37948;
var statearr_37985_38029 = state_37948__$1;
(statearr_37985_38029[(2)] = inst_37865);

(statearr_37985_38029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (14))){
var inst_37892 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37948__$1 = state_37948;
if(cljs.core.truth_(inst_37892)){
var statearr_37986_38030 = state_37948__$1;
(statearr_37986_38030[(1)] = (18));

} else {
var statearr_37987_38031 = state_37948__$1;
(statearr_37987_38031[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (26))){
var inst_37918 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37948__$1 = state_37948;
if(cljs.core.truth_(inst_37918)){
var statearr_37988_38032 = state_37948__$1;
(statearr_37988_38032[(1)] = (30));

} else {
var statearr_37989_38033 = state_37948__$1;
(statearr_37989_38033[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (16))){
var inst_37884 = (state_37948[(2)]);
var inst_37885 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37886 = figwheel.client.heads_up.display_exception.call(null,inst_37885);
var state_37948__$1 = (function (){var statearr_37990 = state_37948;
(statearr_37990[(13)] = inst_37884);

return statearr_37990;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37948__$1,(17),inst_37886);
} else {
if((state_val_37949 === (30))){
var inst_37920 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37921 = figwheel.client.heads_up.display_warning.call(null,inst_37920);
var state_37948__$1 = state_37948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37948__$1,(33),inst_37921);
} else {
if((state_val_37949 === (10))){
var inst_37878 = (state_37948[(2)]);
var state_37948__$1 = state_37948;
var statearr_37991_38034 = state_37948__$1;
(statearr_37991_38034[(2)] = inst_37878);

(statearr_37991_38034[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (18))){
var inst_37894 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37895 = figwheel.client.heads_up.display_exception.call(null,inst_37894);
var state_37948__$1 = state_37948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37948__$1,(21),inst_37895);
} else {
if((state_val_37949 === (37))){
var inst_37931 = (state_37948[(2)]);
var state_37948__$1 = state_37948;
var statearr_37992_38035 = state_37948__$1;
(statearr_37992_38035[(2)] = inst_37931);

(statearr_37992_38035[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37949 === (8))){
var inst_37870 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37948__$1 = state_37948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37948__$1,(11),inst_37870);
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
});})(c__29845__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29830__auto__,c__29845__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29831__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29831__auto____0 = (function (){
var statearr_37996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37996[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29831__auto__);

(statearr_37996[(1)] = (1));

return statearr_37996;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29831__auto____1 = (function (state_37948){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_37948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e37997){if((e37997 instanceof Object)){
var ex__29834__auto__ = e37997;
var statearr_37998_38036 = state_37948;
(statearr_37998_38036[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38037 = state_37948;
state_37948 = G__38037;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29831__auto__ = function(state_37948){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29831__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29831__auto____1.call(this,state_37948);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29831__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29831__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto__,msg_hist,msg_names,msg))
})();
var state__29847__auto__ = (function (){var statearr_37999 = f__29846__auto__.call(null);
(statearr_37999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto__);

return statearr_37999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto__,msg_hist,msg_names,msg))
);

return c__29845__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29845__auto___38100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto___38100,ch){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto___38100,ch){
return (function (state_38083){
var state_val_38084 = (state_38083[(1)]);
if((state_val_38084 === (1))){
var state_38083__$1 = state_38083;
var statearr_38085_38101 = state_38083__$1;
(statearr_38085_38101[(2)] = null);

(statearr_38085_38101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38084 === (2))){
var state_38083__$1 = state_38083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38083__$1,(4),ch);
} else {
if((state_val_38084 === (3))){
var inst_38081 = (state_38083[(2)]);
var state_38083__$1 = state_38083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38083__$1,inst_38081);
} else {
if((state_val_38084 === (4))){
var inst_38071 = (state_38083[(7)]);
var inst_38071__$1 = (state_38083[(2)]);
var state_38083__$1 = (function (){var statearr_38086 = state_38083;
(statearr_38086[(7)] = inst_38071__$1);

return statearr_38086;
})();
if(cljs.core.truth_(inst_38071__$1)){
var statearr_38087_38102 = state_38083__$1;
(statearr_38087_38102[(1)] = (5));

} else {
var statearr_38088_38103 = state_38083__$1;
(statearr_38088_38103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38084 === (5))){
var inst_38071 = (state_38083[(7)]);
var inst_38073 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38071);
var state_38083__$1 = state_38083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38083__$1,(8),inst_38073);
} else {
if((state_val_38084 === (6))){
var state_38083__$1 = state_38083;
var statearr_38089_38104 = state_38083__$1;
(statearr_38089_38104[(2)] = null);

(statearr_38089_38104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38084 === (7))){
var inst_38079 = (state_38083[(2)]);
var state_38083__$1 = state_38083;
var statearr_38090_38105 = state_38083__$1;
(statearr_38090_38105[(2)] = inst_38079);

(statearr_38090_38105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38084 === (8))){
var inst_38075 = (state_38083[(2)]);
var state_38083__$1 = (function (){var statearr_38091 = state_38083;
(statearr_38091[(8)] = inst_38075);

return statearr_38091;
})();
var statearr_38092_38106 = state_38083__$1;
(statearr_38092_38106[(2)] = null);

(statearr_38092_38106[(1)] = (2));


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
});})(c__29845__auto___38100,ch))
;
return ((function (switch__29830__auto__,c__29845__auto___38100,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29831__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29831__auto____0 = (function (){
var statearr_38096 = [null,null,null,null,null,null,null,null,null];
(statearr_38096[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29831__auto__);

(statearr_38096[(1)] = (1));

return statearr_38096;
});
var figwheel$client$heads_up_plugin_$_state_machine__29831__auto____1 = (function (state_38083){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_38083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e38097){if((e38097 instanceof Object)){
var ex__29834__auto__ = e38097;
var statearr_38098_38107 = state_38083;
(statearr_38098_38107[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38108 = state_38083;
state_38083 = G__38108;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29831__auto__ = function(state_38083){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29831__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29831__auto____1.call(this,state_38083);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29831__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29831__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto___38100,ch))
})();
var state__29847__auto__ = (function (){var statearr_38099 = f__29846__auto__.call(null);
(statearr_38099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto___38100);

return statearr_38099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto___38100,ch))
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
var c__29845__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto__){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto__){
return (function (state_38129){
var state_val_38130 = (state_38129[(1)]);
if((state_val_38130 === (1))){
var inst_38124 = cljs.core.async.timeout.call(null,(3000));
var state_38129__$1 = state_38129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38129__$1,(2),inst_38124);
} else {
if((state_val_38130 === (2))){
var inst_38126 = (state_38129[(2)]);
var inst_38127 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38129__$1 = (function (){var statearr_38131 = state_38129;
(statearr_38131[(7)] = inst_38126);

return statearr_38131;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38129__$1,inst_38127);
} else {
return null;
}
}
});})(c__29845__auto__))
;
return ((function (switch__29830__auto__,c__29845__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29831__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29831__auto____0 = (function (){
var statearr_38135 = [null,null,null,null,null,null,null,null];
(statearr_38135[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29831__auto__);

(statearr_38135[(1)] = (1));

return statearr_38135;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29831__auto____1 = (function (state_38129){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_38129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e38136){if((e38136 instanceof Object)){
var ex__29834__auto__ = e38136;
var statearr_38137_38139 = state_38129;
(statearr_38137_38139[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38140 = state_38129;
state_38129 = G__38140;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29831__auto__ = function(state_38129){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29831__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29831__auto____1.call(this,state_38129);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29831__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29831__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto__))
})();
var state__29847__auto__ = (function (){var statearr_38138 = f__29846__auto__.call(null);
(statearr_38138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto__);

return statearr_38138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto__))
);

return c__29845__auto__;
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
var c__29845__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38163){
var state_val_38164 = (state_38163[(1)]);
if((state_val_38164 === (1))){
var inst_38157 = cljs.core.async.timeout.call(null,(2000));
var state_38163__$1 = state_38163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38163__$1,(2),inst_38157);
} else {
if((state_val_38164 === (2))){
var inst_38159 = (state_38163[(2)]);
var inst_38160 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_38161 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38160);
var state_38163__$1 = (function (){var statearr_38165 = state_38163;
(statearr_38165[(7)] = inst_38159);

return statearr_38165;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38163__$1,inst_38161);
} else {
return null;
}
}
});})(c__29845__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__29830__auto__,c__29845__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29831__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29831__auto____0 = (function (){
var statearr_38169 = [null,null,null,null,null,null,null,null];
(statearr_38169[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29831__auto__);

(statearr_38169[(1)] = (1));

return statearr_38169;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29831__auto____1 = (function (state_38163){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_38163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e38170){if((e38170 instanceof Object)){
var ex__29834__auto__ = e38170;
var statearr_38171_38173 = state_38163;
(statearr_38171_38173[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38174 = state_38163;
state_38163 = G__38174;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29831__auto__ = function(state_38163){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29831__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29831__auto____1.call(this,state_38163);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29831__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29831__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto__,figwheel_version,temp__4657__auto__))
})();
var state__29847__auto__ = (function (){var statearr_38172 = f__29846__auto__.call(null);
(statearr_38172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto__);

return statearr_38172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto__,figwheel_version,temp__4657__auto__))
);

return c__29845__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38175){
var map__38179 = p__38175;
var map__38179__$1 = ((((!((map__38179 == null)))?((((map__38179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38179):map__38179);
var file = cljs.core.get.call(null,map__38179__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38179__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38179__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38181 = "";
var G__38181__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38181),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38181);
var G__38181__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38181__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38181__$1);
if(cljs.core.truth_((function (){var and__26662__auto__ = line;
if(cljs.core.truth_(and__26662__auto__)){
return column;
} else {
return and__26662__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38181__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38181__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38182){
var map__38189 = p__38182;
var map__38189__$1 = ((((!((map__38189 == null)))?((((map__38189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38189):map__38189);
var ed = map__38189__$1;
var formatted_exception = cljs.core.get.call(null,map__38189__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38189__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38189__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38191_38195 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38192_38196 = null;
var count__38193_38197 = (0);
var i__38194_38198 = (0);
while(true){
if((i__38194_38198 < count__38193_38197)){
var msg_38199 = cljs.core._nth.call(null,chunk__38192_38196,i__38194_38198);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38199);

var G__38200 = seq__38191_38195;
var G__38201 = chunk__38192_38196;
var G__38202 = count__38193_38197;
var G__38203 = (i__38194_38198 + (1));
seq__38191_38195 = G__38200;
chunk__38192_38196 = G__38201;
count__38193_38197 = G__38202;
i__38194_38198 = G__38203;
continue;
} else {
var temp__4657__auto___38204 = cljs.core.seq.call(null,seq__38191_38195);
if(temp__4657__auto___38204){
var seq__38191_38205__$1 = temp__4657__auto___38204;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38191_38205__$1)){
var c__27493__auto___38206 = cljs.core.chunk_first.call(null,seq__38191_38205__$1);
var G__38207 = cljs.core.chunk_rest.call(null,seq__38191_38205__$1);
var G__38208 = c__27493__auto___38206;
var G__38209 = cljs.core.count.call(null,c__27493__auto___38206);
var G__38210 = (0);
seq__38191_38195 = G__38207;
chunk__38192_38196 = G__38208;
count__38193_38197 = G__38209;
i__38194_38198 = G__38210;
continue;
} else {
var msg_38211 = cljs.core.first.call(null,seq__38191_38205__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38211);

var G__38212 = cljs.core.next.call(null,seq__38191_38205__$1);
var G__38213 = null;
var G__38214 = (0);
var G__38215 = (0);
seq__38191_38195 = G__38212;
chunk__38192_38196 = G__38213;
count__38193_38197 = G__38214;
i__38194_38198 = G__38215;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38216){
var map__38219 = p__38216;
var map__38219__$1 = ((((!((map__38219 == null)))?((((map__38219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38219.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38219):map__38219);
var w = map__38219__$1;
var message = cljs.core.get.call(null,map__38219__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__38231 = cljs.core.seq.call(null,plugins);
var chunk__38232 = null;
var count__38233 = (0);
var i__38234 = (0);
while(true){
if((i__38234 < count__38233)){
var vec__38235 = cljs.core._nth.call(null,chunk__38232,i__38234);
var k = cljs.core.nth.call(null,vec__38235,(0),null);
var plugin = cljs.core.nth.call(null,vec__38235,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38241 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38231,chunk__38232,count__38233,i__38234,pl_38241,vec__38235,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38241.call(null,msg_hist);
});})(seq__38231,chunk__38232,count__38233,i__38234,pl_38241,vec__38235,k,plugin))
);
} else {
}

var G__38242 = seq__38231;
var G__38243 = chunk__38232;
var G__38244 = count__38233;
var G__38245 = (i__38234 + (1));
seq__38231 = G__38242;
chunk__38232 = G__38243;
count__38233 = G__38244;
i__38234 = G__38245;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38231);
if(temp__4657__auto__){
var seq__38231__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38231__$1)){
var c__27493__auto__ = cljs.core.chunk_first.call(null,seq__38231__$1);
var G__38246 = cljs.core.chunk_rest.call(null,seq__38231__$1);
var G__38247 = c__27493__auto__;
var G__38248 = cljs.core.count.call(null,c__27493__auto__);
var G__38249 = (0);
seq__38231 = G__38246;
chunk__38232 = G__38247;
count__38233 = G__38248;
i__38234 = G__38249;
continue;
} else {
var vec__38238 = cljs.core.first.call(null,seq__38231__$1);
var k = cljs.core.nth.call(null,vec__38238,(0),null);
var plugin = cljs.core.nth.call(null,vec__38238,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38250 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38231,chunk__38232,count__38233,i__38234,pl_38250,vec__38238,k,plugin,seq__38231__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38250.call(null,msg_hist);
});})(seq__38231,chunk__38232,count__38233,i__38234,pl_38250,vec__38238,k,plugin,seq__38231__$1,temp__4657__auto__))
);
} else {
}

var G__38251 = cljs.core.next.call(null,seq__38231__$1);
var G__38252 = null;
var G__38253 = (0);
var G__38254 = (0);
seq__38231 = G__38251;
chunk__38232 = G__38252;
count__38233 = G__38253;
i__38234 = G__38254;
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
var args38255 = [];
var len__27787__auto___38262 = arguments.length;
var i__27788__auto___38263 = (0);
while(true){
if((i__27788__auto___38263 < len__27787__auto___38262)){
args38255.push((arguments[i__27788__auto___38263]));

var G__38264 = (i__27788__auto___38263 + (1));
i__27788__auto___38263 = G__38264;
continue;
} else {
}
break;
}

var G__38257 = args38255.length;
switch (G__38257) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38255.length)].join('')));

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

var seq__38258_38266 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38259_38267 = null;
var count__38260_38268 = (0);
var i__38261_38269 = (0);
while(true){
if((i__38261_38269 < count__38260_38268)){
var msg_38270 = cljs.core._nth.call(null,chunk__38259_38267,i__38261_38269);
figwheel.client.socket.handle_incoming_message.call(null,msg_38270);

var G__38271 = seq__38258_38266;
var G__38272 = chunk__38259_38267;
var G__38273 = count__38260_38268;
var G__38274 = (i__38261_38269 + (1));
seq__38258_38266 = G__38271;
chunk__38259_38267 = G__38272;
count__38260_38268 = G__38273;
i__38261_38269 = G__38274;
continue;
} else {
var temp__4657__auto___38275 = cljs.core.seq.call(null,seq__38258_38266);
if(temp__4657__auto___38275){
var seq__38258_38276__$1 = temp__4657__auto___38275;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38258_38276__$1)){
var c__27493__auto___38277 = cljs.core.chunk_first.call(null,seq__38258_38276__$1);
var G__38278 = cljs.core.chunk_rest.call(null,seq__38258_38276__$1);
var G__38279 = c__27493__auto___38277;
var G__38280 = cljs.core.count.call(null,c__27493__auto___38277);
var G__38281 = (0);
seq__38258_38266 = G__38278;
chunk__38259_38267 = G__38279;
count__38260_38268 = G__38280;
i__38261_38269 = G__38281;
continue;
} else {
var msg_38282 = cljs.core.first.call(null,seq__38258_38276__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38282);

var G__38283 = cljs.core.next.call(null,seq__38258_38276__$1);
var G__38284 = null;
var G__38285 = (0);
var G__38286 = (0);
seq__38258_38266 = G__38283;
chunk__38259_38267 = G__38284;
count__38260_38268 = G__38285;
i__38261_38269 = G__38286;
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
var len__27787__auto___38291 = arguments.length;
var i__27788__auto___38292 = (0);
while(true){
if((i__27788__auto___38292 < len__27787__auto___38291)){
args__27794__auto__.push((arguments[i__27788__auto___38292]));

var G__38293 = (i__27788__auto___38292 + (1));
i__27788__auto___38292 = G__38293;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38288){
var map__38289 = p__38288;
var map__38289__$1 = ((((!((map__38289 == null)))?((((map__38289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38289):map__38289);
var opts = map__38289__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38287){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38287));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38295){if((e38295 instanceof Error)){
var e = e38295;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38295;

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
return (function (p__38299){
var map__38300 = p__38299;
var map__38300__$1 = ((((!((map__38300 == null)))?((((map__38300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38300):map__38300);
var msg_name = cljs.core.get.call(null,map__38300__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map