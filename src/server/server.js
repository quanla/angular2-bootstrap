var express = require("express");

var app = express();


let cachePublic = function(req, res, next) {
    res.set("Cache-Control", "public; max-age=3600");
    next();
};
app.use("/node_modules", cachePublic);
app.use("/assets/vendor", cachePublic);

app.use(express.static(__dirname + "/../../src/public"));
app.use("/node_modules", express.static(__dirname + "/../../node_modules"));


var injector = require("node-common/injector").createInjector();

injector.value("httpApp", app);

require("./index/index")(injector);
injector.runAll();


app.listen(8080, ()=>{
    console.log(8080);
});