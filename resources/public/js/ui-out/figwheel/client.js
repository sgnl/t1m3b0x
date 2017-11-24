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
var args30085 = [];
var len__27568__auto___30088 = arguments.length;
var i__27569__auto___30089 = (0);
while(true){
if((i__27569__auto___30089 < len__27568__auto___30088)){
args30085.push((arguments[i__27569__auto___30089]));

var G__30090 = (i__27569__auto___30089 + (1));
i__27569__auto___30089 = G__30090;
continue;
} else {
}
break;
}

var G__30087 = args30085.length;
switch (G__30087) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30085.length)].join('')));

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
var args__27575__auto__ = [];
var len__27568__auto___30093 = arguments.length;
var i__27569__auto___30094 = (0);
while(true){
if((i__27569__auto___30094 < len__27568__auto___30093)){
args__27575__auto__.push((arguments[i__27569__auto___30094]));

var G__30095 = (i__27569__auto___30094 + (1));
i__27569__auto___30094 = G__30095;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30092){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30092));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27575__auto__ = [];
var len__27568__auto___30097 = arguments.length;
var i__27569__auto___30098 = (0);
while(true){
if((i__27569__auto___30098 < len__27568__auto___30097)){
args__27575__auto__.push((arguments[i__27569__auto___30098]));

var G__30099 = (i__27569__auto___30098 + (1));
i__27569__auto___30098 = G__30099;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30096){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30096));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30100){
var map__30103 = p__30100;
var map__30103__$1 = ((((!((map__30103 == null)))?((((map__30103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30103):map__30103);
var message = cljs.core.get.call(null,map__30103__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30103__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__26455__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__26455__auto__)){
return or__26455__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__26443__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__26443__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__26443__auto__;
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
var c__28544__auto___30265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto___30265,ch){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto___30265,ch){
return (function (state_30234){
var state_val_30235 = (state_30234[(1)]);
if((state_val_30235 === (7))){
var inst_30230 = (state_30234[(2)]);
var state_30234__$1 = state_30234;
var statearr_30236_30266 = state_30234__$1;
(statearr_30236_30266[(2)] = inst_30230);

(statearr_30236_30266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (1))){
var state_30234__$1 = state_30234;
var statearr_30237_30267 = state_30234__$1;
(statearr_30237_30267[(2)] = null);

(statearr_30237_30267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (4))){
var inst_30187 = (state_30234[(7)]);
var inst_30187__$1 = (state_30234[(2)]);
var state_30234__$1 = (function (){var statearr_30238 = state_30234;
(statearr_30238[(7)] = inst_30187__$1);

return statearr_30238;
})();
if(cljs.core.truth_(inst_30187__$1)){
var statearr_30239_30268 = state_30234__$1;
(statearr_30239_30268[(1)] = (5));

} else {
var statearr_30240_30269 = state_30234__$1;
(statearr_30240_30269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (15))){
var inst_30194 = (state_30234[(8)]);
var inst_30209 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30194);
var inst_30210 = cljs.core.first.call(null,inst_30209);
var inst_30211 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30210);
var inst_30212 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30211)].join('');
var inst_30213 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30212);
var state_30234__$1 = state_30234;
var statearr_30241_30270 = state_30234__$1;
(statearr_30241_30270[(2)] = inst_30213);

(statearr_30241_30270[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (13))){
var inst_30218 = (state_30234[(2)]);
var state_30234__$1 = state_30234;
var statearr_30242_30271 = state_30234__$1;
(statearr_30242_30271[(2)] = inst_30218);

(statearr_30242_30271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (6))){
var state_30234__$1 = state_30234;
var statearr_30243_30272 = state_30234__$1;
(statearr_30243_30272[(2)] = null);

(statearr_30243_30272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (17))){
var inst_30216 = (state_30234[(2)]);
var state_30234__$1 = state_30234;
var statearr_30244_30273 = state_30234__$1;
(statearr_30244_30273[(2)] = inst_30216);

(statearr_30244_30273[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (3))){
var inst_30232 = (state_30234[(2)]);
var state_30234__$1 = state_30234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30234__$1,inst_30232);
} else {
if((state_val_30235 === (12))){
var inst_30193 = (state_30234[(9)]);
var inst_30207 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30193,opts);
var state_30234__$1 = state_30234;
if(cljs.core.truth_(inst_30207)){
var statearr_30245_30274 = state_30234__$1;
(statearr_30245_30274[(1)] = (15));

} else {
var statearr_30246_30275 = state_30234__$1;
(statearr_30246_30275[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (2))){
var state_30234__$1 = state_30234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30234__$1,(4),ch);
} else {
if((state_val_30235 === (11))){
var inst_30194 = (state_30234[(8)]);
var inst_30199 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30200 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30194);
var inst_30201 = cljs.core.async.timeout.call(null,(1000));
var inst_30202 = [inst_30200,inst_30201];
var inst_30203 = (new cljs.core.PersistentVector(null,2,(5),inst_30199,inst_30202,null));
var state_30234__$1 = state_30234;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30234__$1,(14),inst_30203);
} else {
if((state_val_30235 === (9))){
var inst_30194 = (state_30234[(8)]);
var inst_30220 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30221 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30194);
var inst_30222 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30221);
var inst_30223 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30222)].join('');
var inst_30224 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30223);
var state_30234__$1 = (function (){var statearr_30247 = state_30234;
(statearr_30247[(10)] = inst_30220);

return statearr_30247;
})();
var statearr_30248_30276 = state_30234__$1;
(statearr_30248_30276[(2)] = inst_30224);

(statearr_30248_30276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (5))){
var inst_30187 = (state_30234[(7)]);
var inst_30189 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30190 = (new cljs.core.PersistentArrayMap(null,2,inst_30189,null));
var inst_30191 = (new cljs.core.PersistentHashSet(null,inst_30190,null));
var inst_30192 = figwheel.client.focus_msgs.call(null,inst_30191,inst_30187);
var inst_30193 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30192);
var inst_30194 = cljs.core.first.call(null,inst_30192);
var inst_30195 = figwheel.client.autoload_QMARK_.call(null);
var state_30234__$1 = (function (){var statearr_30249 = state_30234;
(statearr_30249[(9)] = inst_30193);

(statearr_30249[(8)] = inst_30194);

return statearr_30249;
})();
if(cljs.core.truth_(inst_30195)){
var statearr_30250_30277 = state_30234__$1;
(statearr_30250_30277[(1)] = (8));

} else {
var statearr_30251_30278 = state_30234__$1;
(statearr_30251_30278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (14))){
var inst_30205 = (state_30234[(2)]);
var state_30234__$1 = state_30234;
var statearr_30252_30279 = state_30234__$1;
(statearr_30252_30279[(2)] = inst_30205);

(statearr_30252_30279[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (16))){
var state_30234__$1 = state_30234;
var statearr_30253_30280 = state_30234__$1;
(statearr_30253_30280[(2)] = null);

(statearr_30253_30280[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (10))){
var inst_30226 = (state_30234[(2)]);
var state_30234__$1 = (function (){var statearr_30254 = state_30234;
(statearr_30254[(11)] = inst_30226);

return statearr_30254;
})();
var statearr_30255_30281 = state_30234__$1;
(statearr_30255_30281[(2)] = null);

(statearr_30255_30281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (8))){
var inst_30193 = (state_30234[(9)]);
var inst_30197 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30193,opts);
var state_30234__$1 = state_30234;
if(cljs.core.truth_(inst_30197)){
var statearr_30256_30282 = state_30234__$1;
(statearr_30256_30282[(1)] = (11));

} else {
var statearr_30257_30283 = state_30234__$1;
(statearr_30257_30283[(1)] = (12));

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
});})(c__28544__auto___30265,ch))
;
return ((function (switch__28523__auto__,c__28544__auto___30265,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28524__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28524__auto____0 = (function (){
var statearr_30261 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30261[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28524__auto__);

(statearr_30261[(1)] = (1));

return statearr_30261;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28524__auto____1 = (function (state_30234){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_30234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e30262){if((e30262 instanceof Object)){
var ex__28527__auto__ = e30262;
var statearr_30263_30284 = state_30234;
(statearr_30263_30284[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30285 = state_30234;
state_30234 = G__30285;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28524__auto__ = function(state_30234){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28524__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28524__auto____1.call(this,state_30234);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28524__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28524__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto___30265,ch))
})();
var state__28546__auto__ = (function (){var statearr_30264 = f__28545__auto__.call(null);
(statearr_30264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto___30265);

return statearr_30264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto___30265,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30286_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30286_SHARP_));
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
var base_path_30289 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30289){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e30288){if((e30288 instanceof Error)){
var e = e30288;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30289], null));
} else {
var e = e30288;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_30289))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30290){
var map__30299 = p__30290;
var map__30299__$1 = ((((!((map__30299 == null)))?((((map__30299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30299):map__30299);
var opts = map__30299__$1;
var build_id = cljs.core.get.call(null,map__30299__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30299,map__30299__$1,opts,build_id){
return (function (p__30301){
var vec__30302 = p__30301;
var seq__30303 = cljs.core.seq.call(null,vec__30302);
var first__30304 = cljs.core.first.call(null,seq__30303);
var seq__30303__$1 = cljs.core.next.call(null,seq__30303);
var map__30305 = first__30304;
var map__30305__$1 = ((((!((map__30305 == null)))?((((map__30305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30305.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30305):map__30305);
var msg = map__30305__$1;
var msg_name = cljs.core.get.call(null,map__30305__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30303__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30302,seq__30303,first__30304,seq__30303__$1,map__30305,map__30305__$1,msg,msg_name,_,map__30299,map__30299__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30302,seq__30303,first__30304,seq__30303__$1,map__30305,map__30305__$1,msg,msg_name,_,map__30299,map__30299__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30299,map__30299__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30313){
var vec__30314 = p__30313;
var seq__30315 = cljs.core.seq.call(null,vec__30314);
var first__30316 = cljs.core.first.call(null,seq__30315);
var seq__30315__$1 = cljs.core.next.call(null,seq__30315);
var map__30317 = first__30316;
var map__30317__$1 = ((((!((map__30317 == null)))?((((map__30317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30317):map__30317);
var msg = map__30317__$1;
var msg_name = cljs.core.get.call(null,map__30317__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30315__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30319){
var map__30331 = p__30319;
var map__30331__$1 = ((((!((map__30331 == null)))?((((map__30331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30331.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30331):map__30331);
var on_compile_warning = cljs.core.get.call(null,map__30331__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30331__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30331,map__30331__$1,on_compile_warning,on_compile_fail){
return (function (p__30333){
var vec__30334 = p__30333;
var seq__30335 = cljs.core.seq.call(null,vec__30334);
var first__30336 = cljs.core.first.call(null,seq__30335);
var seq__30335__$1 = cljs.core.next.call(null,seq__30335);
var map__30337 = first__30336;
var map__30337__$1 = ((((!((map__30337 == null)))?((((map__30337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30337.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30337):map__30337);
var msg = map__30337__$1;
var msg_name = cljs.core.get.call(null,map__30337__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30335__$1;
var pred__30339 = cljs.core._EQ_;
var expr__30340 = msg_name;
if(cljs.core.truth_(pred__30339.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30340))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30339.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30340))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30331,map__30331__$1,on_compile_warning,on_compile_fail))
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
var c__28544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto__,msg_hist,msg_names,msg){
return (function (state_30568){
var state_val_30569 = (state_30568[(1)]);
if((state_val_30569 === (7))){
var inst_30488 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
if(cljs.core.truth_(inst_30488)){
var statearr_30570_30620 = state_30568__$1;
(statearr_30570_30620[(1)] = (8));

} else {
var statearr_30571_30621 = state_30568__$1;
(statearr_30571_30621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (20))){
var inst_30562 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30572_30622 = state_30568__$1;
(statearr_30572_30622[(2)] = inst_30562);

(statearr_30572_30622[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (27))){
var inst_30558 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30573_30623 = state_30568__$1;
(statearr_30573_30623[(2)] = inst_30558);

(statearr_30573_30623[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (1))){
var inst_30481 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30568__$1 = state_30568;
if(cljs.core.truth_(inst_30481)){
var statearr_30574_30624 = state_30568__$1;
(statearr_30574_30624[(1)] = (2));

} else {
var statearr_30575_30625 = state_30568__$1;
(statearr_30575_30625[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (24))){
var inst_30560 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30576_30626 = state_30568__$1;
(statearr_30576_30626[(2)] = inst_30560);

(statearr_30576_30626[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (4))){
var inst_30566 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30568__$1,inst_30566);
} else {
if((state_val_30569 === (15))){
var inst_30564 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30577_30627 = state_30568__$1;
(statearr_30577_30627[(2)] = inst_30564);

(statearr_30577_30627[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (21))){
var inst_30517 = (state_30568[(2)]);
var inst_30518 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30519 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30518);
var state_30568__$1 = (function (){var statearr_30578 = state_30568;
(statearr_30578[(7)] = inst_30517);

return statearr_30578;
})();
var statearr_30579_30628 = state_30568__$1;
(statearr_30579_30628[(2)] = inst_30519);

(statearr_30579_30628[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (31))){
var inst_30547 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30568__$1 = state_30568;
if(cljs.core.truth_(inst_30547)){
var statearr_30580_30629 = state_30568__$1;
(statearr_30580_30629[(1)] = (34));

} else {
var statearr_30581_30630 = state_30568__$1;
(statearr_30581_30630[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (32))){
var inst_30556 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30582_30631 = state_30568__$1;
(statearr_30582_30631[(2)] = inst_30556);

(statearr_30582_30631[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (33))){
var inst_30543 = (state_30568[(2)]);
var inst_30544 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30545 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30544);
var state_30568__$1 = (function (){var statearr_30583 = state_30568;
(statearr_30583[(8)] = inst_30543);

return statearr_30583;
})();
var statearr_30584_30632 = state_30568__$1;
(statearr_30584_30632[(2)] = inst_30545);

(statearr_30584_30632[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (13))){
var inst_30502 = figwheel.client.heads_up.clear.call(null);
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30568__$1,(16),inst_30502);
} else {
if((state_val_30569 === (22))){
var inst_30523 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30524 = figwheel.client.heads_up.append_warning_message.call(null,inst_30523);
var state_30568__$1 = state_30568;
var statearr_30585_30633 = state_30568__$1;
(statearr_30585_30633[(2)] = inst_30524);

(statearr_30585_30633[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (36))){
var inst_30554 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30586_30634 = state_30568__$1;
(statearr_30586_30634[(2)] = inst_30554);

(statearr_30586_30634[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (29))){
var inst_30534 = (state_30568[(2)]);
var inst_30535 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30536 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30535);
var state_30568__$1 = (function (){var statearr_30587 = state_30568;
(statearr_30587[(9)] = inst_30534);

return statearr_30587;
})();
var statearr_30588_30635 = state_30568__$1;
(statearr_30588_30635[(2)] = inst_30536);

(statearr_30588_30635[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (6))){
var inst_30483 = (state_30568[(10)]);
var state_30568__$1 = state_30568;
var statearr_30589_30636 = state_30568__$1;
(statearr_30589_30636[(2)] = inst_30483);

(statearr_30589_30636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (28))){
var inst_30530 = (state_30568[(2)]);
var inst_30531 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30532 = figwheel.client.heads_up.display_warning.call(null,inst_30531);
var state_30568__$1 = (function (){var statearr_30590 = state_30568;
(statearr_30590[(11)] = inst_30530);

return statearr_30590;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30568__$1,(29),inst_30532);
} else {
if((state_val_30569 === (25))){
var inst_30528 = figwheel.client.heads_up.clear.call(null);
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30568__$1,(28),inst_30528);
} else {
if((state_val_30569 === (34))){
var inst_30549 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30568__$1,(37),inst_30549);
} else {
if((state_val_30569 === (17))){
var inst_30508 = (state_30568[(2)]);
var inst_30509 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30510 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30509);
var state_30568__$1 = (function (){var statearr_30591 = state_30568;
(statearr_30591[(12)] = inst_30508);

return statearr_30591;
})();
var statearr_30592_30637 = state_30568__$1;
(statearr_30592_30637[(2)] = inst_30510);

(statearr_30592_30637[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (3))){
var inst_30500 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30568__$1 = state_30568;
if(cljs.core.truth_(inst_30500)){
var statearr_30593_30638 = state_30568__$1;
(statearr_30593_30638[(1)] = (13));

} else {
var statearr_30594_30639 = state_30568__$1;
(statearr_30594_30639[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (12))){
var inst_30496 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30595_30640 = state_30568__$1;
(statearr_30595_30640[(2)] = inst_30496);

(statearr_30595_30640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (2))){
var inst_30483 = (state_30568[(10)]);
var inst_30483__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30568__$1 = (function (){var statearr_30596 = state_30568;
(statearr_30596[(10)] = inst_30483__$1);

return statearr_30596;
})();
if(cljs.core.truth_(inst_30483__$1)){
var statearr_30597_30641 = state_30568__$1;
(statearr_30597_30641[(1)] = (5));

} else {
var statearr_30598_30642 = state_30568__$1;
(statearr_30598_30642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (23))){
var inst_30526 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30568__$1 = state_30568;
if(cljs.core.truth_(inst_30526)){
var statearr_30599_30643 = state_30568__$1;
(statearr_30599_30643[(1)] = (25));

} else {
var statearr_30600_30644 = state_30568__$1;
(statearr_30600_30644[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (35))){
var state_30568__$1 = state_30568;
var statearr_30601_30645 = state_30568__$1;
(statearr_30601_30645[(2)] = null);

(statearr_30601_30645[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (19))){
var inst_30521 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30568__$1 = state_30568;
if(cljs.core.truth_(inst_30521)){
var statearr_30602_30646 = state_30568__$1;
(statearr_30602_30646[(1)] = (22));

} else {
var statearr_30603_30647 = state_30568__$1;
(statearr_30603_30647[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (11))){
var inst_30492 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30604_30648 = state_30568__$1;
(statearr_30604_30648[(2)] = inst_30492);

(statearr_30604_30648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (9))){
var inst_30494 = figwheel.client.heads_up.clear.call(null);
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30568__$1,(12),inst_30494);
} else {
if((state_val_30569 === (5))){
var inst_30485 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30568__$1 = state_30568;
var statearr_30605_30649 = state_30568__$1;
(statearr_30605_30649[(2)] = inst_30485);

(statearr_30605_30649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (14))){
var inst_30512 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30568__$1 = state_30568;
if(cljs.core.truth_(inst_30512)){
var statearr_30606_30650 = state_30568__$1;
(statearr_30606_30650[(1)] = (18));

} else {
var statearr_30607_30651 = state_30568__$1;
(statearr_30607_30651[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (26))){
var inst_30538 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30568__$1 = state_30568;
if(cljs.core.truth_(inst_30538)){
var statearr_30608_30652 = state_30568__$1;
(statearr_30608_30652[(1)] = (30));

} else {
var statearr_30609_30653 = state_30568__$1;
(statearr_30609_30653[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (16))){
var inst_30504 = (state_30568[(2)]);
var inst_30505 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30506 = figwheel.client.heads_up.display_exception.call(null,inst_30505);
var state_30568__$1 = (function (){var statearr_30610 = state_30568;
(statearr_30610[(13)] = inst_30504);

return statearr_30610;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30568__$1,(17),inst_30506);
} else {
if((state_val_30569 === (30))){
var inst_30540 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30541 = figwheel.client.heads_up.display_warning.call(null,inst_30540);
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30568__$1,(33),inst_30541);
} else {
if((state_val_30569 === (10))){
var inst_30498 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30611_30654 = state_30568__$1;
(statearr_30611_30654[(2)] = inst_30498);

(statearr_30611_30654[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (18))){
var inst_30514 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30515 = figwheel.client.heads_up.display_exception.call(null,inst_30514);
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30568__$1,(21),inst_30515);
} else {
if((state_val_30569 === (37))){
var inst_30551 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30612_30655 = state_30568__$1;
(statearr_30612_30655[(2)] = inst_30551);

(statearr_30612_30655[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (8))){
var inst_30490 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30568__$1,(11),inst_30490);
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
});})(c__28544__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28523__auto__,c__28544__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28524__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28524__auto____0 = (function (){
var statearr_30616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30616[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28524__auto__);

(statearr_30616[(1)] = (1));

return statearr_30616;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28524__auto____1 = (function (state_30568){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_30568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e30617){if((e30617 instanceof Object)){
var ex__28527__auto__ = e30617;
var statearr_30618_30656 = state_30568;
(statearr_30618_30656[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30657 = state_30568;
state_30568 = G__30657;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28524__auto__ = function(state_30568){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28524__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28524__auto____1.call(this,state_30568);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28524__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28524__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto__,msg_hist,msg_names,msg))
})();
var state__28546__auto__ = (function (){var statearr_30619 = f__28545__auto__.call(null);
(statearr_30619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto__);

return statearr_30619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto__,msg_hist,msg_names,msg))
);

return c__28544__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28544__auto___30720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto___30720,ch){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto___30720,ch){
return (function (state_30703){
var state_val_30704 = (state_30703[(1)]);
if((state_val_30704 === (1))){
var state_30703__$1 = state_30703;
var statearr_30705_30721 = state_30703__$1;
(statearr_30705_30721[(2)] = null);

(statearr_30705_30721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (2))){
var state_30703__$1 = state_30703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30703__$1,(4),ch);
} else {
if((state_val_30704 === (3))){
var inst_30701 = (state_30703[(2)]);
var state_30703__$1 = state_30703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30703__$1,inst_30701);
} else {
if((state_val_30704 === (4))){
var inst_30691 = (state_30703[(7)]);
var inst_30691__$1 = (state_30703[(2)]);
var state_30703__$1 = (function (){var statearr_30706 = state_30703;
(statearr_30706[(7)] = inst_30691__$1);

return statearr_30706;
})();
if(cljs.core.truth_(inst_30691__$1)){
var statearr_30707_30722 = state_30703__$1;
(statearr_30707_30722[(1)] = (5));

} else {
var statearr_30708_30723 = state_30703__$1;
(statearr_30708_30723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (5))){
var inst_30691 = (state_30703[(7)]);
var inst_30693 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30691);
var state_30703__$1 = state_30703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30703__$1,(8),inst_30693);
} else {
if((state_val_30704 === (6))){
var state_30703__$1 = state_30703;
var statearr_30709_30724 = state_30703__$1;
(statearr_30709_30724[(2)] = null);

(statearr_30709_30724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (7))){
var inst_30699 = (state_30703[(2)]);
var state_30703__$1 = state_30703;
var statearr_30710_30725 = state_30703__$1;
(statearr_30710_30725[(2)] = inst_30699);

(statearr_30710_30725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (8))){
var inst_30695 = (state_30703[(2)]);
var state_30703__$1 = (function (){var statearr_30711 = state_30703;
(statearr_30711[(8)] = inst_30695);

return statearr_30711;
})();
var statearr_30712_30726 = state_30703__$1;
(statearr_30712_30726[(2)] = null);

(statearr_30712_30726[(1)] = (2));


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
});})(c__28544__auto___30720,ch))
;
return ((function (switch__28523__auto__,c__28544__auto___30720,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28524__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28524__auto____0 = (function (){
var statearr_30716 = [null,null,null,null,null,null,null,null,null];
(statearr_30716[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28524__auto__);

(statearr_30716[(1)] = (1));

return statearr_30716;
});
var figwheel$client$heads_up_plugin_$_state_machine__28524__auto____1 = (function (state_30703){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_30703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e30717){if((e30717 instanceof Object)){
var ex__28527__auto__ = e30717;
var statearr_30718_30727 = state_30703;
(statearr_30718_30727[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30728 = state_30703;
state_30703 = G__30728;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28524__auto__ = function(state_30703){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28524__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28524__auto____1.call(this,state_30703);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28524__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28524__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto___30720,ch))
})();
var state__28546__auto__ = (function (){var statearr_30719 = f__28545__auto__.call(null);
(statearr_30719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto___30720);

return statearr_30719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto___30720,ch))
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
var c__28544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto__){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto__){
return (function (state_30749){
var state_val_30750 = (state_30749[(1)]);
if((state_val_30750 === (1))){
var inst_30744 = cljs.core.async.timeout.call(null,(3000));
var state_30749__$1 = state_30749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30749__$1,(2),inst_30744);
} else {
if((state_val_30750 === (2))){
var inst_30746 = (state_30749[(2)]);
var inst_30747 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30749__$1 = (function (){var statearr_30751 = state_30749;
(statearr_30751[(7)] = inst_30746);

return statearr_30751;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30749__$1,inst_30747);
} else {
return null;
}
}
});})(c__28544__auto__))
;
return ((function (switch__28523__auto__,c__28544__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28524__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28524__auto____0 = (function (){
var statearr_30755 = [null,null,null,null,null,null,null,null];
(statearr_30755[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28524__auto__);

(statearr_30755[(1)] = (1));

return statearr_30755;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28524__auto____1 = (function (state_30749){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_30749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e30756){if((e30756 instanceof Object)){
var ex__28527__auto__ = e30756;
var statearr_30757_30759 = state_30749;
(statearr_30757_30759[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30760 = state_30749;
state_30749 = G__30760;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28524__auto__ = function(state_30749){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28524__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28524__auto____1.call(this,state_30749);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28524__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28524__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto__))
})();
var state__28546__auto__ = (function (){var statearr_30758 = f__28545__auto__.call(null);
(statearr_30758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto__);

return statearr_30758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto__))
);

return c__28544__auto__;
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
var c__28544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto__,figwheel_version,temp__4657__auto__){
return (function (state_30783){
var state_val_30784 = (state_30783[(1)]);
if((state_val_30784 === (1))){
var inst_30777 = cljs.core.async.timeout.call(null,(2000));
var state_30783__$1 = state_30783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30783__$1,(2),inst_30777);
} else {
if((state_val_30784 === (2))){
var inst_30779 = (state_30783[(2)]);
var inst_30780 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_30781 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30780);
var state_30783__$1 = (function (){var statearr_30785 = state_30783;
(statearr_30785[(7)] = inst_30779);

return statearr_30785;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30783__$1,inst_30781);
} else {
return null;
}
}
});})(c__28544__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28523__auto__,c__28544__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28524__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28524__auto____0 = (function (){
var statearr_30789 = [null,null,null,null,null,null,null,null];
(statearr_30789[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28524__auto__);

(statearr_30789[(1)] = (1));

return statearr_30789;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28524__auto____1 = (function (state_30783){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_30783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e30790){if((e30790 instanceof Object)){
var ex__28527__auto__ = e30790;
var statearr_30791_30793 = state_30783;
(statearr_30791_30793[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30794 = state_30783;
state_30783 = G__30794;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28524__auto__ = function(state_30783){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28524__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28524__auto____1.call(this,state_30783);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28524__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28524__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28546__auto__ = (function (){var statearr_30792 = f__28545__auto__.call(null);
(statearr_30792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto__);

return statearr_30792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto__,figwheel_version,temp__4657__auto__))
);

return c__28544__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30795){
var map__30799 = p__30795;
var map__30799__$1 = ((((!((map__30799 == null)))?((((map__30799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30799):map__30799);
var file = cljs.core.get.call(null,map__30799__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30799__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30799__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30801 = "";
var G__30801__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30801),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30801);
var G__30801__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30801__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30801__$1);
if(cljs.core.truth_((function (){var and__26443__auto__ = line;
if(cljs.core.truth_(and__26443__auto__)){
return column;
} else {
return and__26443__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30801__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30801__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30802){
var map__30809 = p__30802;
var map__30809__$1 = ((((!((map__30809 == null)))?((((map__30809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30809):map__30809);
var ed = map__30809__$1;
var formatted_exception = cljs.core.get.call(null,map__30809__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30809__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30809__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30811_30815 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30812_30816 = null;
var count__30813_30817 = (0);
var i__30814_30818 = (0);
while(true){
if((i__30814_30818 < count__30813_30817)){
var msg_30819 = cljs.core._nth.call(null,chunk__30812_30816,i__30814_30818);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30819);

var G__30820 = seq__30811_30815;
var G__30821 = chunk__30812_30816;
var G__30822 = count__30813_30817;
var G__30823 = (i__30814_30818 + (1));
seq__30811_30815 = G__30820;
chunk__30812_30816 = G__30821;
count__30813_30817 = G__30822;
i__30814_30818 = G__30823;
continue;
} else {
var temp__4657__auto___30824 = cljs.core.seq.call(null,seq__30811_30815);
if(temp__4657__auto___30824){
var seq__30811_30825__$1 = temp__4657__auto___30824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30811_30825__$1)){
var c__27274__auto___30826 = cljs.core.chunk_first.call(null,seq__30811_30825__$1);
var G__30827 = cljs.core.chunk_rest.call(null,seq__30811_30825__$1);
var G__30828 = c__27274__auto___30826;
var G__30829 = cljs.core.count.call(null,c__27274__auto___30826);
var G__30830 = (0);
seq__30811_30815 = G__30827;
chunk__30812_30816 = G__30828;
count__30813_30817 = G__30829;
i__30814_30818 = G__30830;
continue;
} else {
var msg_30831 = cljs.core.first.call(null,seq__30811_30825__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30831);

var G__30832 = cljs.core.next.call(null,seq__30811_30825__$1);
var G__30833 = null;
var G__30834 = (0);
var G__30835 = (0);
seq__30811_30815 = G__30832;
chunk__30812_30816 = G__30833;
count__30813_30817 = G__30834;
i__30814_30818 = G__30835;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30836){
var map__30839 = p__30836;
var map__30839__$1 = ((((!((map__30839 == null)))?((((map__30839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30839):map__30839);
var w = map__30839__$1;
var message = cljs.core.get.call(null,map__30839__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__26443__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__26443__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__26443__auto__;
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
var seq__30851 = cljs.core.seq.call(null,plugins);
var chunk__30852 = null;
var count__30853 = (0);
var i__30854 = (0);
while(true){
if((i__30854 < count__30853)){
var vec__30855 = cljs.core._nth.call(null,chunk__30852,i__30854);
var k = cljs.core.nth.call(null,vec__30855,(0),null);
var plugin = cljs.core.nth.call(null,vec__30855,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30861 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30851,chunk__30852,count__30853,i__30854,pl_30861,vec__30855,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30861.call(null,msg_hist);
});})(seq__30851,chunk__30852,count__30853,i__30854,pl_30861,vec__30855,k,plugin))
);
} else {
}

var G__30862 = seq__30851;
var G__30863 = chunk__30852;
var G__30864 = count__30853;
var G__30865 = (i__30854 + (1));
seq__30851 = G__30862;
chunk__30852 = G__30863;
count__30853 = G__30864;
i__30854 = G__30865;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30851);
if(temp__4657__auto__){
var seq__30851__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30851__$1)){
var c__27274__auto__ = cljs.core.chunk_first.call(null,seq__30851__$1);
var G__30866 = cljs.core.chunk_rest.call(null,seq__30851__$1);
var G__30867 = c__27274__auto__;
var G__30868 = cljs.core.count.call(null,c__27274__auto__);
var G__30869 = (0);
seq__30851 = G__30866;
chunk__30852 = G__30867;
count__30853 = G__30868;
i__30854 = G__30869;
continue;
} else {
var vec__30858 = cljs.core.first.call(null,seq__30851__$1);
var k = cljs.core.nth.call(null,vec__30858,(0),null);
var plugin = cljs.core.nth.call(null,vec__30858,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30870 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30851,chunk__30852,count__30853,i__30854,pl_30870,vec__30858,k,plugin,seq__30851__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30870.call(null,msg_hist);
});})(seq__30851,chunk__30852,count__30853,i__30854,pl_30870,vec__30858,k,plugin,seq__30851__$1,temp__4657__auto__))
);
} else {
}

var G__30871 = cljs.core.next.call(null,seq__30851__$1);
var G__30872 = null;
var G__30873 = (0);
var G__30874 = (0);
seq__30851 = G__30871;
chunk__30852 = G__30872;
count__30853 = G__30873;
i__30854 = G__30874;
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
var args30875 = [];
var len__27568__auto___30882 = arguments.length;
var i__27569__auto___30883 = (0);
while(true){
if((i__27569__auto___30883 < len__27568__auto___30882)){
args30875.push((arguments[i__27569__auto___30883]));

var G__30884 = (i__27569__auto___30883 + (1));
i__27569__auto___30883 = G__30884;
continue;
} else {
}
break;
}

var G__30877 = args30875.length;
switch (G__30877) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30875.length)].join('')));

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

var seq__30878_30886 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30879_30887 = null;
var count__30880_30888 = (0);
var i__30881_30889 = (0);
while(true){
if((i__30881_30889 < count__30880_30888)){
var msg_30890 = cljs.core._nth.call(null,chunk__30879_30887,i__30881_30889);
figwheel.client.socket.handle_incoming_message.call(null,msg_30890);

var G__30891 = seq__30878_30886;
var G__30892 = chunk__30879_30887;
var G__30893 = count__30880_30888;
var G__30894 = (i__30881_30889 + (1));
seq__30878_30886 = G__30891;
chunk__30879_30887 = G__30892;
count__30880_30888 = G__30893;
i__30881_30889 = G__30894;
continue;
} else {
var temp__4657__auto___30895 = cljs.core.seq.call(null,seq__30878_30886);
if(temp__4657__auto___30895){
var seq__30878_30896__$1 = temp__4657__auto___30895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30878_30896__$1)){
var c__27274__auto___30897 = cljs.core.chunk_first.call(null,seq__30878_30896__$1);
var G__30898 = cljs.core.chunk_rest.call(null,seq__30878_30896__$1);
var G__30899 = c__27274__auto___30897;
var G__30900 = cljs.core.count.call(null,c__27274__auto___30897);
var G__30901 = (0);
seq__30878_30886 = G__30898;
chunk__30879_30887 = G__30899;
count__30880_30888 = G__30900;
i__30881_30889 = G__30901;
continue;
} else {
var msg_30902 = cljs.core.first.call(null,seq__30878_30896__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30902);

var G__30903 = cljs.core.next.call(null,seq__30878_30896__$1);
var G__30904 = null;
var G__30905 = (0);
var G__30906 = (0);
seq__30878_30886 = G__30903;
chunk__30879_30887 = G__30904;
count__30880_30888 = G__30905;
i__30881_30889 = G__30906;
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
var args__27575__auto__ = [];
var len__27568__auto___30911 = arguments.length;
var i__27569__auto___30912 = (0);
while(true){
if((i__27569__auto___30912 < len__27568__auto___30911)){
args__27575__auto__.push((arguments[i__27569__auto___30912]));

var G__30913 = (i__27569__auto___30912 + (1));
i__27569__auto___30912 = G__30913;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30908){
var map__30909 = p__30908;
var map__30909__$1 = ((((!((map__30909 == null)))?((((map__30909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30909):map__30909);
var opts = map__30909__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30907){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30907));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30915){if((e30915 instanceof Error)){
var e = e30915;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30915;

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
return (function (p__30919){
var map__30920 = p__30919;
var map__30920__$1 = ((((!((map__30920 == null)))?((((map__30920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30920):map__30920);
var msg_name = cljs.core.get.call(null,map__30920__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map