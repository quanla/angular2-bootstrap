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
let DropdownContentPhComponent = class DropdownContentPhComponent {
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
};
DropdownContentPhComponent = __decorate([
    core_1.Directive({
        selector: "dropdownContentPh"
    }),
    __param(0, core_1.Inject(core_1.ViewContainerRef))
], DropdownContentPhComponent);
exports.DropdownContentPhComponent = DropdownContentPhComponent;
let MiDropdownComponent = class MiDropdownComponent {
    constructor() {
        this.opened = false;
    }
    ngOnInit() {
        //this.viewContainer.
    }
    toggleDropdown(e) {
        if (!this.opened) {
            this.contentPh.viewContainer.createEmbeddedView(this.contentTmpl);
            this.opened = true;
            var remove = () => {
                this.contentPh.viewContainer.clear();
                this.opened = false;
                document.body.removeEventListener("click", remove);
            };
            document.body.addEventListener("click", remove);
            e.preventDefault();
            e.stopPropagation();
        }
    }
};
__decorate([
    core_1.Input()
], MiDropdownComponent.prototype, "text", void 0);
__decorate([
    core_1.ViewChild(DropdownContentPhComponent)
], MiDropdownComponent.prototype, "contentPh", void 0);
__decorate([
    core_1.ContentChild("dropdownContent")
], MiDropdownComponent.prototype, "contentTmpl", void 0);
MiDropdownComponent = __decorate([
    core_1.Component({
        selector: "[miDropdown]",
        templateUrl: "app/common/dropdown.html",
        directives: [DropdownContentPhComponent],
        host: {
            "class": "dropdown",
            "[class.open]": "opened"
        }
    })
], MiDropdownComponent);
exports.MiDropdownComponent = MiDropdownComponent;
//# sourceMappingURL=dropdown.js.map