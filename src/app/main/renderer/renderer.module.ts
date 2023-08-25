import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CoreModule} from "../../core/core.module";
import {SharedModule as MainSharedModule} from "../shared/shared.module";
import {SimpleComponent} from "./simple.component";
import {CategoryComponent} from "./category.component";
import {ClassComponent} from "./class.component";


const routes: Routes = [
    {
        path: 'simple',
        component: SimpleComponent
    },
    {
        path: 'category',
        component: CategoryComponent
    },
    {
        path: 'class',
        component: ClassComponent
    }
];

@NgModule({
    imports: [
        CoreModule.forChild(),
        MainSharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        SimpleComponent, CategoryComponent, ClassComponent
    ]
})
export class RendererModule {
}
