import {
    AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, QueryList, SimpleChanges,
    ViewChild, ViewChildren
} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'ngg-tree',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit, OnChanges {

    @Input() root: any = [];
    @Input() isRoot: boolean = true;
    @Input() tree: any = [];
    @Input() key: string = "children";
    @Input() collapse: boolean;
    @Output() onSelect = new EventEmitter<any>();

    @ViewChildren('childTree') childTree: QueryList<TreeComponent>;

    constructor() {

    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes && changes.tree) {
            if (this.isRoot) {
                this.root = changes.tree.currentValue;
            }
        }
    }

    ngOnInit() {
    }

    select(node) {
        node.expand = !node.expand;
        this.root.forEach(item => {
            this.setChildrenActive(item);
        });
        node.active = true;
        this.onSelect.emit(node);
    }

    setChildrenActive(node) {
        node.active = false;
        if (Array.isArray(node[this.key])) {
            node[this.key].forEach(item => {
                this.setChildrenActive(item);
            });
        }
    }

}
