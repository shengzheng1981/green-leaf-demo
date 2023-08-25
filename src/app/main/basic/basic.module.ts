import {NgModule} from '@angular/core';
import {BasicComponent} from './basic.component';
import {RouterModule, Routes} from "@angular/router";
import {CoreModule} from "../../core/core.module";
import {SharedModule as MainSharedModule} from "../shared/shared.module";

const routes: Routes = [
    {
        path: '',
        component: BasicComponent
    }
];

@NgModule({
    imports: [
        CoreModule.forChild(),
        MainSharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        BasicComponent
    ]
})
export class BasicModule {
}
