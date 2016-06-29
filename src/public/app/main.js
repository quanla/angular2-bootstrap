"use strict";
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const navbar_1 = require("./layout/navbar");
const simple_modal_sample_1 = require("./samples/simple-modal-sample");
const custom_modal_footer_sample_1 = require("./samples/custom-modal-footer-sample");
var logError = err => console.log(err);
platform_browser_dynamic_1.bootstrap(navbar_1.NavbarComponent, []).catch(logError);
platform_browser_dynamic_1.bootstrap(simple_modal_sample_1.SimpleModalSampleComponent, []).catch(logError);
platform_browser_dynamic_1.bootstrap(custom_modal_footer_sample_1.CustomModalFooterComponent, []).catch(logError);
//# sourceMappingURL=main.js.map