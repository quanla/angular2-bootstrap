import {Inject, Directive, OnInit, OnDestroy, ViewContainerRef, TemplateRef, Injectable} from "@angular/core";
import {ModalComponent} from "./modal";


@Directive({
    selector: "modalPh",
    exportAs: "modalPh"
})
@Injectable()
export class ModalPhDirective {
    constructor( @Inject(ViewContainerRef) public viewContainerRef : ViewContainerRef) {}

    display(templateRef : TemplateRef<any>) {
        this.viewContainerRef.createEmbeddedView(templateRef);
    }
}
