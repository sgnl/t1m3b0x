// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants true}
goog.provide('ui.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_();
if(typeof ui.core.interval_process !== 'undefined'){
} else {
ui.core.interval_process = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof ui.core.interval_duration !== 'undefined'){
} else {
ui.core.interval_duration = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((1500));
}
if(typeof ui.core.duration !== 'undefined'){
} else {
ui.core.duration = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if(typeof ui.core.timer_is_active !== 'undefined'){
} else {
ui.core.timer_is_active = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(typeof ui.core.timer_is_paused !== 'undefined'){
} else {
ui.core.timer_is_paused = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
document.addEventListener("keyup",(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.code,"Space")){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.core.timer_is_paused,cljs.core.not);
} else {
return null;
}
}));
ui.core.str__GT_int = (function ui$core$str__GT_int(s){
return (function (){
return parseInt(s);
});
});
ui.core.calculate_percentage = (function ui$core$calculate_percentage(duration,interval_duration){
return Math.floor(((duration / interval_duration) * (100)));
});
ui.core.play_sound = (function ui$core$play_sound(type){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"complete")){
var audio_file = (new Audio("audio/lick_my_balls.wav"));
audio_file.volume = 0.1;

return audio_file.play();
} else {
return alert("SOMETHING!");

}
});
ui.core.stop_timer = (function ui$core$stop_timer(interval){
window.clearInterval(interval);

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ui.core.duration,(0)) : cljs.core.reset_BANG_.call(null,ui.core.duration,(0)));
});
ui.core.start_timer = (function ui$core$start_timer(interval_duration){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.core.interval_process,(function (){
return window.setInterval((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.core.timer_is_paused) : cljs.core.deref.call(null,ui.core.timer_is_paused)),false)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.core.duration,cljs.core.inc);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.core.duration) : cljs.core.deref.call(null,ui.core.duration)),interval_duration)){
ui.core.stop_timer((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.core.interval_process) : cljs.core.deref.call(null,ui.core.interval_process)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.core.timer_is_active,cljs.core.not);

return ui.core.play_sound("complete");
} else {
return null;
}
}),(1000));
}));
});
ui.core.visor = (function ui$core$visor(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$visor,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.core.timer_is_active) : cljs.core.deref.call(null,ui.core.timer_is_active)) >= true))?"active":null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$top,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ui.core.calculate_percentage((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.core.duration) : cljs.core.deref.call(null,ui.core.duration)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.core.interval_duration) : cljs.core.deref.call(null,ui.core.interval_duration)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('')], null)], null)], null);
});
ui.core.pomodoro = (function ui$core$pomodoro(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$pomodoro$ui,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$time,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,Math.floor(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.core.duration) : cljs.core.deref.call(null,ui.core.duration)) / (60)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$smaller_DASH_text,"m "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.mod((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.core.duration) : cljs.core.deref.call(null,ui.core.duration)),(60))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$smaller_DASH_text,"s"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$percentage,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,ui.core.calculate_percentage((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.core.duration) : cljs.core.deref.call(null,ui.core.duration)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.core.interval_duration) : cljs.core.deref.call(null,ui.core.interval_duration)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$smaller_DASH_text,"%"], null)], null)], null);
});
ui.core.footer = (function ui$core$footer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$icn_DASH_cog], null)], null);
});
ui.core.root_component = (function ui$core$root_component(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$root,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.core.timer_is_active) : cljs.core.deref.call(null,ui.core.timer_is_active)),false)){
ui.core.start_timer((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.core.interval_duration) : cljs.core.deref.call(null,ui.core.interval_duration)));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ui.core.timer_is_paused,false) : cljs.core.reset_BANG_.call(null,ui.core.timer_is_paused,false));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.core.timer_is_active,cljs.core.not);
} else {
ui.core.stop_timer((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.core.interval_process) : cljs.core.deref.call(null,ui.core.interval_process)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.core.timer_is_active,cljs.core.not);
}
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.core.visor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.core.pomodoro], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.core.footer], null)], null);
});
reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.core.root_component], null),document.querySelector(".app-container"));
