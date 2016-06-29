import {Component, Directive, Inject, ViewContainerRef, Input, ViewChild, ContentChild, TemplateRef} from "@angular/core";

declare var document;

@Directive({
    selector: "dropdownContentPh"
})
export class DropdownContentPhComponent {
    constructor(@Inject(ViewContainerRef) public viewContainer: ViewContainerRef) {}
}

@Component({
    selector: "[miDropdown]",
    templateUrl: "app/common/dropdown.html",
    directives: [DropdownContentPhComponent],
    host: {
        "class": "dropdown",
        "[class.open]": "opened"
    }
})
export class MiDropdownComponent {

    @Input()
    text : string;

    @ViewChild(DropdownContentPhComponent)
    contentPh : DropdownContentPhComponent;

    @ContentChild("dropdownContent")
    contentTmpl : TemplateRef<any>;

    opened = false;

    constructor() {}

    ngOnInit() {
        //this.viewContainer.
    }

    toggleDropdown(e) {
        if (!this.opened) {
            this.contentPh.viewContainer.createEmbeddedView(this.contentTmpl);
            this.opened = true;

            var remove = ()=>{
                this.contentPh.viewContainer.clear();
                this.opened = false;
                document.body.removeEventListener("click", remove);
            };
            document.body.addEventListener("click", remove);

            e.preventDefault();
            e.stopPropagation();
        }
    }
}

