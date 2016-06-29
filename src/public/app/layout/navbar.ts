import {Component, Inject} from "@angular/core";
import {MiDropdownComponent} from "../common/dropdown";

@Component({
    selector: "p1-io-navbar",
    templateUrl: "app/layout/navbar.html",
    directives: [MiDropdownComponent]
})
export class NavbarComponent {
    constructor() {}

}