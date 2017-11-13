// Compiled by ClojureScript 1.9.542 {}
goog.provide('electron.core');
goog.require('cljs.core');
electron.core.electron = require("electron");
electron.core.app = electron.core.electron.app;
electron.core.browser_window = electron.core.electron.BrowserWindow;
electron.core.crash_reporter = electron.core.electron.crashReporter;
electron.core.main_window = cljs.core.atom.call(null,null);
electron.core.init_browser = (function electron$core$init_browser(){
cljs.core.reset_BANG_.call(null,electron.core.main_window,(new electron.core.browser_window(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"minWidth","minWidth",-204293526),(220),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),(220),new cljs.core.Keyword(null,"width","width",-384071477),(220),new cljs.core.Keyword(null,"height","height",1025178622),(220),new cljs.core.Keyword(null,"frame","frame",-1711082588),false,new cljs.core.Keyword(null,"alwaysOnTop","alwaysOnTop",-796802727),true,new cljs.core.Keyword(null,"resizable","resizable",-2107060206),true], null)))));

cljs.core.deref.call(null,electron.core.main_window).loadURL([cljs.core.str.cljs$core$IFn$_invoke$arity$1("file://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(__dirname),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/public/index.html")].join(''));

return cljs.core.deref.call(null,electron.core.main_window).on("closed",(function (){
return cljs.core.reset_BANG_.call(null,electron.core.main_window,null);
}));
});
electron.core.crash_reporter.start(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"companyName","companyName",2030952346),"MyAwesomeCompany",new cljs.core.Keyword(null,"productName","productName",979802189),"MyAwesomeApp",new cljs.core.Keyword(null,"submitURL","submitURL",-169159433),"https://example.com/submit-url",new cljs.core.Keyword(null,"autoSubmit","autoSubmit",389197954),false], null)));
electron.core.app.on("window-all-closed",(function (){
if(cljs.core._EQ_.call(null,process.platform,"darwin")){
return null;
} else {
return electron.core.app.quit();
}
}));
electron.core.app.on("ready",electron.core.init_browser);
