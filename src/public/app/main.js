"use strict";
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const navbar_1 = require("./layout/navbar");
const modal_sample_1 = require("./samples/modal/modal-sample");
var logError = err => console.log(err);
platform_browser_dynamic_1.bootstrap(navbar_1.NavbarComponent, []).catch(logError);
platform_browser_dynamic_1.bootstrap(modal_sample_1.ModalSampleComponent, []).catch(logError);
//bootstrap(CustomModalFooterComponent, []).catch(logError ); 
//# sourceMappingURL=main.js.map