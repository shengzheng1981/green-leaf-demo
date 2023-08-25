import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {CoreModule} from "../../core/core.module";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule as MainSharedModule} from "../shared/shared.module";

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    }
];

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CoreModule.forChild(),
        MainSharedModule,
        RouterModule.forChild(routes)
    ]
})
export class DashboardModule {
}
