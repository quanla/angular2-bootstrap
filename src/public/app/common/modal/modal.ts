import {Inject, Input, Component, Directive, OnInit, OnDestroy, ElementRef,
    Host, ViewContainerRef, ViewChild, ContentChild, TemplateRef} from "@angular/core";
import {ModalPhDirective} from "./modal-ph";

declare var document;

@Component({
    selector: "modal",
    templateUrl: "app/common/modal/modal.html",
    directives: [ModalPhDirective],
    host: {
        "tabindex": "999"
    }
})
export class ModalComponent implements OnInit {

    @Input()
    titleText : string;

    @Input()
    closeText : string = "Save changes";

    @Input()
    dismissText : string = "Cancel";

    @Input()
    modalSize : "lg" | "sm";

    @Input()
    modalType : "warning";

    @ViewChild("content")
    contentPh : ModalPhDirective;
    @ContentChild("modalContent")
    contentC : TemplateRef<any>;

    @ViewChild("header")
    headerPh : ModalPhDirective;
    @ContentChild("modalHeader")
    headerC : TemplateRef<any>;

    @ViewChild("footer")
    footerPh : ModalPhDirective;
    @ContentChild("modalFooter")
    footerC : TemplateRef<any>;

    _visible = false;
    set visible(visible) {
        // Take care of the animation, as angular 2 has not supported it yet
        if (visible) {
            this._visible = visible;
            setTimeout(() => {
                let modalElem = this.el.nativeElement.querySelector(".modal");
                let modalBackdropElem = this.el.nativeElement.querySelector(".modal-backdrop");
                modalElem.style.display = "block";
                setTimeout(() => {
                    modalElem.className += " in";
                    modalBackdropElem.className += " in";
                }, 0);
                this.el.nativeElement.querySelector("input,textarea,select,button:not(.close):not(.cancel),[tabindex]").focus();
            }, 0);
        } else {
            let modalElem = this.el.nativeElement.querySelector(".modal");
            let modalBackdropElem = this.el.nativeElement.querySelector(".modal-backdrop");
            modalElem.className = modalElem.className.replace(" in", " out");
            modalBackdropElem.className = modalBackdropElem.className.replace(" in", " out");
            setTimeout(() => {
                this._visible = visible;
            }, 300);
            document.querySelector("body").focus();
        }
    }
    get visible() {
        return this._visible;
    }

    waitingPromise : {resolve : (value?: boolean)=>void, reject : (reason? :any)=>void};

    constructor(@Inject(ElementRef) private el : ElementRef) {}

    ngOnInit() {
        this.el.nativeElement.addEventListener("keydown", (e) => {
            if (!this.visible) {
                return;
            }

            if (e.keyCode == 27) {
                this.dismiss();

                e.stopPropagation();
                e.preventDefault();
                return;
            }
        });
    }

    show() {
        setTimeout(() => {
            this.contentPh.display(this.contentC);
            if (this.headerC) {
                this.headerPh.display(this.headerC);
            }
            if (this.footerC) {
                this.footerPh.display(this.footerC);
            }
        }, 0);

        this.visible = true;
        this.el.nativeElement.focus();

        return new Promise<boolean>((resolve, reject)=>{
            this.waitingPromise = {resolve, reject};
        });
    }

    outsideModalDialog(e) : boolean {
        let modalDialog = this.el.nativeElement.querySelector(".modal-dialog");

        return modalDialog != e.target && !modalDialog.contains(e.target);
    }

    dismiss() {
        this.visible = false;
        setTimeout(() => {
            this.waitingPromise.resolve && this.waitingPromise.resolve(false);
        }, 300);
    }
    close() {
        this.visible = false;
        setTimeout(() => {
            this.waitingPromise.resolve && this.waitingPromise.resolve(true);
        }, 300);
    }

}

