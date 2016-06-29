import { Provider } from '@angular/core';
import {bootstrap} from "@angular/platform-browser-dynamic";
import {NavbarComponent} from "./layout/navbar";
import {CustomModalFooterComponent} from "./samples/custom-modal-footer-sample";
import {ModalSampleComponent} from "./samples/modal/modal-sample";

var logError = err => console.log(err);

bootstrap(NavbarComponent, []).catch(logError );
bootstrap(ModalSampleComponent, []).catch(logError );
//bootstrap(CustomModalFooterComponent, []).catch(logError );