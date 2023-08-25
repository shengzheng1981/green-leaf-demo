import {NgModule} from '@angular/core';
import {ClusterComponent} from './cluster.component';
import {RouterModule, Routes} from "@angular/router";
import {CoreModule} from "../../core/core.module";
import {SharedModule as MainSharedModule} from "../shared/shared.module";

const routes: Routes = [
    {
        path: '',
        component: ClusterComponent
    }
];

@NgModule({
    imports: [
        CoreModule.forChild(),
        MainSharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ClusterComponent
    ]
})
export class ClusterModule {
}
