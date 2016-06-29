import {Component, Inject} from "@angular/core";
import {ModalComponent} from "../../common/modal/modal";

@Component({
    selector: "modal-sample",
    templateUrl: "app/samples/modal/modal-sample.html",
    directives: [ModalComponent]
})
export class ModalSampleComponent {
    items = ['item1', 'item2', 'item3'];

    selectedItem: string;
    modalSize: string;

    constructor() {}

}