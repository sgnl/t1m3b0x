// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants true}
goog.provide('ui.index');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('ui.document_ready');
goog.require('secretary.core');
goog.require('alandipert.storage_atom');
ui.index.local_state = alandipert.storage_atom.local_storage(reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$interval_duration,(1500),cljs.core.cst$kw$active_theme_name,"neon-sky",cljs.core.cst$kw$config,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$random_background,false], null)], null)),cljs.core.cst$kw$local_DASH_storage);
ui.index.interval_duration = reagent.core.cursor(ui.index.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$interval_duration], null));
ui.index.active_theme_name = reagent.core.cursor(ui.index.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_theme_name], null));
ui.index.random_background = reagent.core.cursor(ui.index.local_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$random_background], null));
ui.index.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$interface_is_locked,false,cljs.core.cst$kw$duration,(1499),cljs.core.cst$kw$interval_process,null,cljs.core.cst$kw$timer_is_active,false,cljs.core.cst$kw$timer_is_paused,false,cljs.core.cst$kw$available_themes,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["neon-sky","only-dreams","pacific-high","twitch","michiko","monte-carlo"], null)], null));
ui.index.duration = reagent.core.cursor(ui.index.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$duration], null));
ui.index.interval_process = reagent.core.cursor(ui.index.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$interval_process], null));
ui.index.timer_is_active = reagent.core.cursor(ui.index.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$timer_is_active], null));
ui.index.timer_is_paused = reagent.core.cursor(ui.index.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$timer_is_paused], null));
ui.index.available_themes = reagent.core.cursor(ui.index.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$available_themes], null));
ui.index.interface_is_locked = reagent.core.cursor(ui.index.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$interface_is_locked], null));
document.addEventListener("keyup",(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.code,"Space")){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.index.timer_is_paused,cljs.core.not);
} else {
return null;
}
}));
ui.index.str__GT_int = (function ui$index$str__GT_int(s){
return (function (){
return parseInt(s);
});
});
ui.index.calculate_percentage = (function ui$index$calculate_percentage(){
return Math.floor((((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.index.duration) : cljs.core.deref.call(null,ui.index.duration)) / (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.index.interval_duration) : cljs.core.deref.call(null,ui.index.interval_duration))) * (100)));
});
ui.index.get_seconds = (function ui$index$get_seconds(duration){
return cljs.core.mod(duration,(60));
});
ui.index.get_minutes = (function ui$index$get_minutes(duration){
return Math.floor((duration / (60)));
});
ui.index.play_sound = (function ui$index$play_sound(type){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"complete")){
var audio_file = (new Audio("audio/lick_my_balls.wav"));
audio_file.volume = 0.1;

return audio_file.play();
} else {
return alert("SOMETHING!");

}
});
ui.index.show_notification = (function ui$index$show_notification(title,message_body){
return (new Notification(title,(function (){var obj13704 = {"body":message_body};
return obj13704;
})()));
});
ui.index.stop_timer = (function ui$index$stop_timer(){
window.clearInterval((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.index.interval_process) : cljs.core.deref.call(null,ui.index.interval_process)));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ui.index.duration,(0)) : cljs.core.reset_BANG_.call(null,ui.index.duration,(0)));
});
ui.index.start_timer = (function ui$index$start_timer(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.index.interval_process,(function (){
return window.setInterval((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.index.timer_is_paused) : cljs.core.deref.call(null,ui.index.timer_is_paused)),false)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.index.duration,cljs.core.inc);
} else {
}

if(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.index.duration) : cljs.core.deref.call(null,ui.index.duration)) > (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.index.interval_duration) : cljs.core.deref.call(null,ui.index.interval_duration)))){
ui.index.stop_timer();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.index.timer_is_active,cljs.core.not);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.index.interface_is_locked) : cljs.core.deref.call(null,ui.index.interface_is_locked)),true)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.index.interface_is_locked,cljs.core.not);
} else {
}

return ui.index.show_notification("t1m3b0x","interval complete");
} else {
return null;
}
}),(1000));
}));
});
ui.index.toggle_interface_interaction = (function ui$index$toggle_interface_interaction(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$icn_DASH_unlocked,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data_DASH_toggle_DASH_icon_DASH_lock,true,cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.index.interface_is_locked) : cljs.core.deref.call(null,ui.index.interface_is_locked)),false))?"icn-unlocked":"icn-locked"),cljs.core.cst$kw$on_DASH_click,(function (e){
e.preventDefault();

e.stopPropagation();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.index.interface_is_locked,cljs.core.not);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.index.interface_is_locked) : cljs.core.deref.call(null,ui.index.interface_is_locked)),true)){
return secretary.core.dispatch_BANG_("/locked");
} else {
return secretary.core.dispatch_BANG_("/");
}
})], null)], null);
});
ui.index.toggle_timer = (function ui$index$toggle_timer(e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.index.timer_is_active) : cljs.core.deref.call(null,ui.index.timer_is_active)),false)){
ui.index.start_timer();

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ui.index.timer_is_paused,false) : cljs.core.reset_BANG_.call(null,ui.index.timer_is_paused,false));
} else {
ui.index.stop_timer();
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.index.timer_is_active,cljs.core.not);
});
ui.index.visor = (function ui$index$visor(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$visor,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.index.timer_is_active) : cljs.core.deref.call(null,ui.index.timer_is_active)),true))?(function (){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.index.active_theme_name) : cljs.core.deref.call(null,ui.index.active_theme_name)),"")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.index.random_background) : cljs.core.deref.call(null,ui.index.random_background)),true))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.index.active_theme_name,(function (){
return cljs.core.rand_nth(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (name){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.index.active_theme_name) : cljs.core.deref.call(null,ui.index.active_theme_name)));
}),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.index.available_themes) : cljs.core.deref.call(null,ui.index.available_themes))));
}));
} else {
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ui.index.random_background,false) : cljs.core.reset_BANG_.call(null,ui.index.random_background,false));

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("active"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("visor--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.index.active_theme_name) : cljs.core.deref.call(null,ui.index.active_theme_name)))].join(''))].join('');
})()
:null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$top,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ui.index.calculate_percentage()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('')], null)], null)], null);
});
ui.index.draggable_area = (function ui$index$draggable_area(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$draggable_DASH_area,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.index.interface_is_locked) : cljs.core.deref.call(null,ui.index.interface_is_locked)),true))?"draggable-area-full":null),cljs.core.cst$kw$on_DASH_click,(function (e){
e.preventDefault();

return e.stopPropagation();
})], null)], null);
});
ui.index.decrease_interval_duration = (function ui$index$decrease_interval_duration(){
if(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.index.interval_duration) : cljs.core.deref.call(null,ui.index.interval_duration)) > (60))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.index.interval_duration,(function (){
return ((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.index.interval_duration) : cljs.core.deref.call(null,ui.index.interval_duration)) - (60));
}));
} else {
return null;
}
});
ui.index.increase_interval_duration = (function ui$index$increase_interval_duration(){
if(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.index.interval_duration) : cljs.core.deref.call(null,ui.index.interval_duration)) < (3600))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.index.interval_duration,(function (){
return ((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.index.interval_duration) : cljs.core.deref.call(null,ui.index.interval_duration)) + (60));
}));
} else {
return null;
}
});
ui.index.interval_panel = (function ui$index$interval_panel(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$ui,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.draggable_area], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$time,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,ui.index.get_minutes((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.index.duration) : cljs.core.deref.call(null,ui.index.duration)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$smaller_DASH_text,"m "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,ui.index.get_seconds((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.index.duration) : cljs.core.deref.call(null,ui.index.duration)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$smaller_DASH_text,"s"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$percentage,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,ui.index.calculate_percentage()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$smaller_DASH_text,"%"], null)], null)], null);
});
ui.index.config_panel = (function ui$index$config_panel(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$config_DASH_panel,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$interval_DASH_settings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$button$symbol,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
e.preventDefault();

e.stopPropagation();

return ui.index.decrease_interval_duration();
})], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$label_DASH_and_DASH_value_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$label,"INTERVAL"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$label_DASH_value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ui.index.get_minutes((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.index.interval_duration) : cljs.core.deref.call(null,ui.index.interval_duration)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("mins")].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$button$symbol,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
e.preventDefault();

e.stopPropagation();

return ui.index.increase_interval_duration();
})], null),"+"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$button$rng_DASH_bg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (e){
e.preventDefault();

e.stopPropagation();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.index.random_background,cljs.core.not);
}),cljs.core.cst$kw$on_DASH_mouseOver,(function (e){
e.preventDefault();

return e.stopPropagation();
})], null),"random bg"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$volume,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$button$icn_DASH_bullhorn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$bullhorn_DASH_slider,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$min,(0),cljs.core.cst$kw$max,(100),cljs.core.cst$kw$value,(50)], null)], null)], null)], null);
});
ui.index.footer_timer = (function ui$index$footer_timer(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$icn_DASH_cog,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
e.preventDefault();

e.stopPropagation();

return secretary.core.dispatch_BANG_("/config");
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.toggle_interface_interaction], null)], null);
});
ui.index.footer_locked = (function ui$index$footer_locked(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$icn_DASH_cog,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
e.preventDefault();

e.stopPropagation();

return secretary.core.dispatch_BANG_("/config");
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.toggle_interface_interaction], null)], null);
});
ui.index.footer_config = (function ui$index$footer_config(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$icn_DASH_chevron_DASH_left,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
e.preventDefault();

e.stopPropagation();

return secretary.core.dispatch_BANG_("/");
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.toggle_interface_interaction], null)], null);
});
ui.index.timer = (function ui$index$timer(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$root,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,ui.index.toggle_timer], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.visor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.interval_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.footer_timer], null)], null);
});
goog.exportSymbol('ui.index.timer', ui.index.timer);
ui.index.locked = (function ui$index$locked(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.visor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.interval_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.footer_locked], null)], null);
});
goog.exportSymbol('ui.index.locked', ui.index.locked);
ui.index.config = (function ui$index$config(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.visor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.config_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.footer_config], null)], null);
});
goog.exportSymbol('ui.index.config', ui.index.config);
