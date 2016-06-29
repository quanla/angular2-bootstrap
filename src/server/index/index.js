var q = require("q");

module.exports = function(injector) {
    injector
        .run(function(httpApp) {
            httpApp.get("/", (req, res)=>{
                q.all([loadIndexTemplate(), loadModules()]).then(function(results) {
                    var template = results[0];
                    var modules = results[1];

                    res.end(template.render({
                        modules
                    }));
                });

                function loadIndexTemplate() {
                    var defer = q.defer();

                    var fs = require("fs");
                    fs.readFile(__dirname + "/index.html", "utf8", (err, content)=>{
                        var template = require("fast-template").compile(content);
                        defer.resolve(template);
                    });
                    return defer.promise;
                }

                function loadModules() {

                    return q.all([loadModule("modal")]).then((modules)=>{
                        return modules.join("\n");
                    });
                }

                function loadModule(moduleName) {
                    var defer = q.defer();
                    var fs = require("fs");
                    fs.readFile(__dirname + `/../modules/${moduleName}/${moduleName}.html`, "utf8", (err, content)=>{
                        defer.resolve(content);
                    });
                    return defer.promise;
                }
            });
        })
    ;
};