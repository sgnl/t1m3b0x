// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants true}
goog.provide('electron.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
electron.core.electron = require("electron");
electron.core.app = electron.core.electron.app;
electron.core.browser_window = electron.core.electron.BrowserWindow;
electron.core.crash_reporter = electron.core.electron.crashReporter;
electron.core.main_window = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
electron.core.init_browser = (function electron$core$init_browser(){
var G__8064_8066 = electron.core.main_window;
var G__8065_8067 = (new electron.core.browser_window(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$minWidth,(220),cljs.core.cst$kw$minHeight,(220),cljs.core.cst$kw$width,(220),cljs.core.cst$kw$height,(220),cljs.core.cst$kw$frame,false,cljs.core.cst$kw$alwaysOnTop,false,cljs.core.cst$kw$resizable,true], null))));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8064_8066,G__8065_8067) : cljs.core.reset_BANG_.call(null,G__8064_8066,G__8065_8067));

(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(electron.core.main_window) : cljs.core.deref.call(null,electron.core.main_window)).loadURL([cljs.core.str.cljs$core$IFn$_invoke$arity$1("file://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(__dirname),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/public/index.html")].join(''));

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(electron.core.main_window) : cljs.core.deref.call(null,electron.core.main_window)).on("closed",(function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(electron.core.main_window,null) : cljs.core.reset_BANG_.call(null,electron.core.main_window,null));
}));
});
electron.core.crash_reporter.start(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$companyName,"MyAwesomeCompany",cljs.core.cst$kw$productName,"MyAwesomeApp",cljs.core.cst$kw$submitURL,"https://example.com/submit-url",cljs.core.cst$kw$autoSubmit,false], null)));
electron.core.app.on("window-all-closed",(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(process.platform,"darwin")){
return null;
} else {
return electron.core.app.quit();
}
}));
electron.core.app.on("ready",electron.core.init_browser);
