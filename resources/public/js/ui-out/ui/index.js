// Compiled by ClojureScript 1.9.542 {}
goog.provide('ui.index');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ui.document_ready');
goog.require('secretary.core');
goog.require('alandipert.storage_atom');
ui.index.local_state = alandipert.storage_atom.local_storage.call(null,reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"interval_duration","interval_duration",2137812507),(1500),new cljs.core.Keyword(null,"break_duration","break_duration",1716090360),(1500),new cljs.core.Keyword(null,"active_theme_name","active_theme_name",-871500020),"neon-sky",new cljs.core.Keyword(null,"random_background","random_background",1650571047),false,new cljs.core.Keyword(null,"sound_alert_path","sound_alert_path",887070191),"audio/lick_my_balls.wav",new cljs.core.Keyword(null,"sound_alert_volume","sound_alert_volume",1070366738),0.5], null)),new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068));
ui.index.interval_duration = reagent.core.cursor.call(null,ui.index.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interval_duration","interval_duration",2137812507)], null));
ui.index.break_duration = reagent.core.cursor.call(null,ui.index.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"break_duration","break_duration",1716090360)], null));
ui.index.active_theme_name = reagent.core.cursor.call(null,ui.index.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active_theme_name","active_theme_name",-871500020)], null));
ui.index.random_background = reagent.core.cursor.call(null,ui.index.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"random_background","random_background",1650571047)], null));
ui.index.sound_alert_path = reagent.core.cursor.call(null,ui.index.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sound_alert_path","sound_alert_path",887070191)], null));
ui.index.sound_alert_volume = reagent.core.cursor.call(null,ui.index.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sound_alert_volume","sound_alert_volume",1070366738)], null));
ui.index.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"interface_is_locked","interface_is_locked",834729398),false,new cljs.core.Keyword(null,"duration","duration",1444101068),(0),new cljs.core.Keyword(null,"break_time_lasped","break_time_lasped",-1656638004),(0),new cljs.core.Keyword(null,"interval_process","interval_process",1212041319),null,new cljs.core.Keyword(null,"break_process","break_process",1856556339),null,new cljs.core.Keyword(null,"timer_is_active","timer_is_active",-883692270),false,new cljs.core.Keyword(null,"timer_is_paused","timer_is_paused",-1559119412),false,new cljs.core.Keyword(null,"available_themes","available_themes",1891473851),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["neon-sky","only-dreams","pacific-high","twitch","michiko","monte-carlo"], null)], null));
ui.index.duration = reagent.core.cursor.call(null,ui.index.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"duration","duration",1444101068)], null));
ui.index.break_time_lasped = reagent.core.cursor.call(null,ui.index.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"break_time_lasped","break_time_lasped",-1656638004)], null));
ui.index.interval_process = reagent.core.cursor.call(null,ui.index.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interval_process","interval_process",1212041319)], null));
ui.index.break_process = reagent.core.cursor.call(null,ui.index.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"break_process","break_process",1856556339)], null));
ui.index.timer_is_active = reagent.core.cursor.call(null,ui.index.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer_is_active","timer_is_active",-883692270)], null));
ui.index.timer_is_paused = reagent.core.cursor.call(null,ui.index.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer_is_paused","timer_is_paused",-1559119412)], null));
ui.index.available_themes = reagent.core.cursor.call(null,ui.index.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"available_themes","available_themes",1891473851)], null));
ui.index.interface_is_locked = reagent.core.cursor.call(null,ui.index.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interface_is_locked","interface_is_locked",834729398)], null));
document.addEventListener("keyup",(function (e){
if(cljs.core._EQ_.call(null,e.code,"Space")){
return cljs.core.swap_BANG_.call(null,ui.index.timer_is_paused,cljs.core.not);
} else {
return null;
}
}));
ui.index.str__GT_int = (function ui$index$str__GT_int(s){
return (function (){
return parseInt(s);
});
});
ui.index.calculate_percentage = (function ui$index$calculate_percentage(duration,interval_duration){
return Math.floor(((duration / interval_duration) * (100)));
});
ui.index.get_seconds = (function ui$index$get_seconds(duration){
return cljs.core.mod.call(null,duration,(60));
});
ui.index.get_minutes = (function ui$index$get_minutes(duration){
return Math.floor((duration / (60)));
});
ui.index.play_sound = (function ui$index$play_sound(type){
if(cljs.core._EQ_.call(null,type,"complete")){
var audio_file = (new Audio(cljs.core.deref.call(null,ui.index.sound_alert_path)));
audio_file.volume = cljs.core.deref.call(null,ui.index.sound_alert_volume);

return audio_file.play();
} else {
return alert("SOMETHING!");

}
});
ui.index.show_notification = (function ui$index$show_notification(title,message_body){
(new Notification(title,(function (){var obj29892 = {"body":message_body};
return obj29892;
})()));

return window.setTimeout((function (e){
return ui.index.play_sound.call(null,"complete");
}),(500));
});
ui.index.stop_timer = (function ui$index$stop_timer(){
window.clearInterval(cljs.core.deref.call(null,ui.index.interval_process));

return cljs.core.reset_BANG_.call(null,ui.index.duration,(0));
});
ui.index.stop_break_timer = (function ui$index$stop_break_timer(){
window.clearInterval(cljs.core.deref.call(null,ui.index.break_process));

return cljs.core.reset_BANG_.call(null,ui.index.break_time_lasped,(0));
});
ui.index.start_timer = (function ui$index$start_timer(){
return cljs.core.swap_BANG_.call(null,ui.index.interval_process,(function (){
return window.setInterval((function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,ui.index.timer_is_paused),false)){
cljs.core.swap_BANG_.call(null,ui.index.duration,cljs.core.inc);
} else {
}

if((cljs.core.deref.call(null,ui.index.duration) > cljs.core.deref.call(null,ui.index.interval_duration))){
ui.index.stop_timer.call(null);

cljs.core.swap_BANG_.call(null,ui.index.timer_is_active,cljs.core.not);

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,ui.index.interface_is_locked),true)){
cljs.core.swap_BANG_.call(null,ui.index.interface_is_locked,cljs.core.not);
} else {
}

ui.index.show_notification.call(null,"t1m3b0x","interval complete");

return secretary.core.dispatch_BANG_.call(null,"/break");
} else {
return null;
}
}),(1000));
}));
});
ui.index.start_break_timer = (function ui$index$start_break_timer(){
return cljs.core.swap_BANG_.call(null,ui.index.break_process,(function (){
return window.setInterval((function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,ui.index.timer_is_paused),false)){
cljs.core.swap_BANG_.call(null,ui.index.break_time_lasped,cljs.core.inc);
} else {
}

if((cljs.core.deref.call(null,ui.index.break_time_lasped) > cljs.core.deref.call(null,ui.index.break_duration))){
ui.index.stop_break_timer.call(null);

ui.index.show_notification.call(null,"t1m3b0x","break complete");

return secretary.core.dispatch_BANG_.call(null,"/");
} else {
return null;
}
}),(1000));
}));
});
ui.index.toggle_interface_interaction = (function ui$index$toggle_interface_interaction(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icn-unlocked","div.icn-unlocked",-1871726208),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-toggle-icon-lock","data-toggle-icon-lock",255411586),true,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,ui.index.interface_is_locked),false))?"icn-unlocked":"icn-locked"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

e.stopPropagation();

return cljs.core.swap_BANG_.call(null,ui.index.interface_is_locked,cljs.core.not);
})], null)], null);
});
ui.index.toggle_timer = (function ui$index$toggle_timer(e){
e.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,ui.index.timer_is_active),false)){
ui.index.start_timer.call(null);

cljs.core.reset_BANG_.call(null,ui.index.timer_is_paused,false);
} else {
ui.index.stop_timer.call(null);
}

return cljs.core.swap_BANG_.call(null,ui.index.timer_is_active,cljs.core.not);
});
ui.index.toggle_break_timer = (function ui$index$toggle_break_timer(e){
e.preventDefault();

console.log("wut");

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,ui.index.timer_is_active),false)){
ui.index.start_break_timer.call(null);
} else {
ui.index.stop_break_timer.call(null);
}

return cljs.core.swap_BANG_.call(null,ui.index.timer_is_active,cljs.core.not);
});
ui.index.visor = (function ui$index$visor(duration,interval_duration){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.visor","div.visor",-2052156174),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,ui.index.timer_is_active),true))?(function (){
if((cljs.core._EQ_.call(null,cljs.core.deref.call(null,ui.index.active_theme_name),"")) || (cljs.core._EQ_.call(null,cljs.core.deref.call(null,ui.index.random_background),true))){
cljs.core.swap_BANG_.call(null,ui.index.active_theme_name,(function (){
return cljs.core.rand_nth.call(null,cljs.core.remove.call(null,(function (name){
return cljs.core._EQ_.call(null,name,cljs.core.deref.call(null,ui.index.active_theme_name));
}),cljs.core.deref.call(null,ui.index.available_themes)));
}));
} else {
}

cljs.core.reset_BANG_.call(null,ui.index.random_background,false);

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("active"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("visor--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.index.active_theme_name))].join(''))].join('');
})()
:null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ui.index.calculate_percentage.call(null,duration,interval_duration)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('')], null)], null)], null);
});
ui.index.draggable_area = (function ui$index$draggable_area(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draggable-area","div.draggable-area",1327745194),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,ui.index.interface_is_locked),true))?"draggable-area-full":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

return e.stopPropagation();
})], null)], null);
});
ui.index.decrease_interval_duration = (function ui$index$decrease_interval_duration(){
if((cljs.core.deref.call(null,ui.index.interval_duration) > (60))){
return cljs.core.swap_BANG_.call(null,ui.index.interval_duration,(function (){
return (cljs.core.deref.call(null,ui.index.interval_duration) - (60));
}));
} else {
return null;
}
});
ui.index.increase_interval_duration = (function ui$index$increase_interval_duration(){
if((cljs.core.deref.call(null,ui.index.interval_duration) < (3600))){
return cljs.core.swap_BANG_.call(null,ui.index.interval_duration,(function (){
return (cljs.core.deref.call(null,ui.index.interval_duration) + (60));
}));
} else {
return null;
}
});
ui.index.decrease_break_duration = (function ui$index$decrease_break_duration(){
if((cljs.core.deref.call(null,ui.index.break_duration) > (60))){
return cljs.core.swap_BANG_.call(null,ui.index.break_duration,(function (){
return (cljs.core.deref.call(null,ui.index.break_duration) - (60));
}));
} else {
return null;
}
});
ui.index.increase_break_duration = (function ui$index$increase_break_duration(){
if((cljs.core.deref.call(null,ui.index.break_duration) < (3600))){
return cljs.core.swap_BANG_.call(null,ui.index.break_duration,(function (){
return (cljs.core.deref.call(null,ui.index.break_duration) + (60));
}));
} else {
return null;
}
});
ui.index.click_event_partial = (function ui$index$click_event_partial(className,handler,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),className,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

e.stopPropagation();

return handler.call(null);
})], null),(cljs.core.truth_(cljs.core.not_empty.call(null,text))?text:null)], null);
});
ui.index.interval_panel = (function ui$index$interval_panel(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.ui","section.ui",999865874),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.draggable_area], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.time","h2.time",984763093),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),ui.index.get_minutes.call(null,cljs.core.deref.call(null,ui.index.duration))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.smaller-text","span.smaller-text",-646213571),"m "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),ui.index.get_seconds.call(null,cljs.core.deref.call(null,ui.index.duration))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.smaller-text","span.smaller-text",-646213571),"s"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.percentage","h2.percentage",2064989508),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),ui.index.calculate_percentage.call(null,cljs.core.deref.call(null,ui.index.duration),cljs.core.deref.call(null,ui.index.interval_duration))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.smaller-text","span.smaller-text",-646213571),"%"], null)], null)], null);
});
ui.index.config_panel = (function ui$index$config_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.config-panel","div.config-panel",823929593),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.interval-settings","div.interval-settings",1791596006),ui.index.click_event_partial.call(null,"button symbol",(function (){
return ui.index.decrease_interval_duration.call(null);
}),"-"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.label-and-value-group","div.label-and-value-group",945545600),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.label","p.label",1110047840),"INTERVAL"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.label-value","p.label-value",1365467148),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ui.index.get_minutes.call(null,cljs.core.deref.call(null,ui.index.interval_duration))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("mins")].join('')], null)], null),ui.index.click_event_partial.call(null,"button symbol",(function (){
return ui.index.increase_interval_duration.call(null);
}),"+")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.break-settings","div.break-settings",-1338426951),ui.index.click_event_partial.call(null,"button symbol",(function (){
return ui.index.decrease_break_duration.call(null);
}),"-"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.label-and-value-group","div.label-and-value-group",945545600),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.label","p.label",1110047840),"BREAK"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.label-value","p.label-value",1365467148),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ui.index.get_minutes.call(null,cljs.core.deref.call(null,ui.index.break_duration))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("mins")].join('')], null)], null),ui.index.click_event_partial.call(null,"button symbol",(function (){
return ui.index.increase_break_duration.call(null);
}),"+")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button.rng-bg","div.button.rng-bg",-24839225),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

e.stopPropagation();

return cljs.core.swap_BANG_.call(null,ui.index.random_background,cljs.core.not);
}),new cljs.core.Keyword(null,"on-mouseOver","on-mouseOver",1289442552),(function (e){
e.preventDefault();

return e.stopPropagation();
})], null),"random bg"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.volume","div.volume",-91733416),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.button.icn-bullhorn","label.button.icn-bullhorn",1143648891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input-alert-file","input.input-alert-file",223392720),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"accept","accept",1874130431),"audio/*",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

e.stopPropagation();

return cljs.core.reset_BANG_.call(null,ui.index.sound_alert_path,(e.target.files["0"]).path);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.bullhorn-slider","input.bullhorn-slider",-789878677),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.deref.call(null,ui.index.sound_alert_volume) * (100)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

e.stopPropagation();

return cljs.core.reset_BANG_.call(null,ui.index.sound_alert_volume,(e.target.value / (100)));
})], null)], null)], null)], null);
});
ui.index.break_panel = (function ui$index$break_panel(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.ui.break-panel","section.ui.break-panel",431865506),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.draggable_area], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"break"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.time","h2.time",984763093),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),ui.index.get_minutes.call(null,cljs.core.deref.call(null,ui.index.break_time_lasped))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.smaller-text","span.smaller-text",-646213571),"m "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),ui.index.get_seconds.call(null,cljs.core.deref.call(null,ui.index.break_time_lasped))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.smaller-text","span.smaller-text",-646213571),"s"], null)], null)], null);
});
ui.index.config_button = (function ui$index$config_button(){
return ui.index.click_event_partial.call(null,"icn-cog",(function (){
return secretary.core.dispatch_BANG_.call(null,"/config");
}),null);
});
ui.index.back_button = (function ui$index$back_button(){
return ui.index.click_event_partial.call(null,"icn-chevron-left",(function (){
return secretary.core.dispatch_BANG_.call(null,"/");
}),null);
});
ui.index.break_button = (function ui$index$break_button(){
return ui.index.click_event_partial.call(null,"icn-electric",(function (){
return secretary.core.dispatch_BANG_.call(null,"/break");
}),null);
});
ui.index.interval_button = (function ui$index$interval_button(){
return ui.index.click_event_partial.call(null,"icn-timer",(function (){
return secretary.core.dispatch_BANG_.call(null,"/");
}),null);
});
ui.index.footer_timer = (function ui$index$footer_timer(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.config_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.break_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.interval_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.toggle_interface_interaction], null)], null);
});
ui.index.footer_config = (function ui$index$footer_config(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.back_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.toggle_interface_interaction], null)], null);
});
goog.exportSymbol('ui.index.footer_config', ui.index.footer_config);
ui.index.timer = (function ui$index$timer(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.root","div.root",2120930743),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),ui.index.toggle_timer], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.visor,cljs.core.deref.call(null,ui.index.duration),cljs.core.deref.call(null,ui.index.interval_duration)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.interval_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.footer_timer], null)], null);
});
goog.exportSymbol('ui.index.timer', ui.index.timer);
ui.index.config = (function ui$index$config(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.root","div.root",2120930743),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.visor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.config_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.footer_timer], null)], null);
});
goog.exportSymbol('ui.index.config', ui.index.config);
ui.index.break$ = (function ui$index$break(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.root","div.root",2120930743),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),ui.index.toggle_break_timer], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.visor,cljs.core.deref.call(null,ui.index.break_time_lasped),cljs.core.deref.call(null,ui.index.break_duration)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.break_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.footer_timer], null)], null);
});
goog.exportSymbol('ui.index.break$', ui.index.break$);

//# sourceMappingURL=index.js.map