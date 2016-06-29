import { Provider } from '@angular/core';
import {bootstrap} from "@angular/platform-browser-dynamic";
import {NavbarComponent} from "./layout/navbar";
import {SimpleModalSampleComponent} from "./samples/simple-modal-sample";
import {CustomModalFooterComponent} from "./samples/custom-modal-footer-sample";

var logError = err => console.log(err);

bootstrap(NavbarComponent, []).catch(logError );
bootstrap(SimpleModalSampleComponent, []).catch(logError );
bootstrap(CustomModalFooterComponent, []).catch(logError );