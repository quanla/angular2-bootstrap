"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const core_1 = require("@angular/core");
const modal_ph_1 = require("./modal-ph");
let ModalComponent = class ModalComponent {
    constructor(el) {
        this.el = el;
        this.closeText = "Save changes";
        this.dismissText = "Cancel";
        this._visible = false;
    }
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
        }
        else {
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
        return new Promise((resolve, reject) => {
            this.waitingPromise = { resolve: resolve, reject: reject };
        });
    }
    outsideModalDialog(e) {
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
};
__decorate([
    core_1.Input()
], ModalComponent.prototype, "titleText", void 0);
__decorate([
    core_1.Input()
], ModalComponent.prototype, "closeText", void 0);
__decorate([
    core_1.Input()
], ModalComponent.prototype, "dismissText", void 0);
__decorate([
    core_1.Input()
], ModalComponent.prototype, "modalSize", void 0);
__decorate([
    core_1.Input()
], ModalComponent.prototype, "modalType", void 0);
__decorate([
    core_1.ViewChild("content")
], ModalComponent.prototype, "contentPh", void 0);
__decorate([
    core_1.ContentChild("modalContent")
], ModalComponent.prototype, "contentC", void 0);
__decorate([
    core_1.ViewChild("header")
], ModalComponent.prototype, "headerPh", void 0);
__decorate([
    core_1.ContentChild("modalHeader")
], ModalComponent.prototype, "headerC", void 0);
__decorate([
    core_1.ViewChild("footer")
], ModalComponent.prototype, "footerPh", void 0);
__decorate([
    core_1.ContentChild("modalFooter")
], ModalComponent.prototype, "footerC", void 0);
ModalComponent = __decorate([
    core_1.Component({
        selector: "modal",
        templateUrl: "app/common/modal/modal.html",
        directives: [modal_ph_1.ModalPhDirective],
        host: {
            "tabindex": "999"
        }
    }),
    __param(0, core_1.Inject(core_1.ElementRef))
], ModalComponent);
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.js.map