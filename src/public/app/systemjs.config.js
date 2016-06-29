/**
 * System configuration for Angular 2 apps
 * Adjust as necessary for your application needs.
 */
(function(global) {


  function umd(pkgName) {
    return { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }


  System.config({
    // map tells the System loader where to look for things
    map: {
      'app'                        : 'app',
      '@angular'                   : 'node_modules/@angular',
      'jquery'                     : 'node_modules/jquery',
      'angular2-in-memory-web-api' : 'node_modules/angular2-in-memory-web-api',
      'rxjs'                       : 'node_modules/rxjs'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      "app"                               : { main: "main.js"        , defaultExtension: "js" },
      "jquery"                            : { main: "dist/jquery.js" , defaultExtension: "js" },
      "rxjs"                              : {                          defaultExtension: "js" },
      "angular2-in-memory-web-api"        : { main: "index.js"       , defaultExtension: "js" },
      "@angular/common"                   : umd("common"),
      "@angular/compiler"                 : umd("compiler"),
      "@angular/core"                     : umd("core"),
      "@angular/http"                     : umd("http"),
      "@angular/platform-browser"         : umd("platform-browser"),
      "@angular/platform-browser-dynamic" : umd("platform-browser-dynamic"),
      "@angular/upgrade"                  : umd("upgrade"),
      "@angular/router"                   : { main: "index.js", defaultExtension: "js" },
      "@angular/forms"                    : { main: "index.js", defaultExtension: "js" }
    }
  });

})(this);
