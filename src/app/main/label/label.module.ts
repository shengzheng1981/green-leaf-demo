import {NgModule} from '@angular/core';
import {SimpleComponent} from './simple.component';
import {RouterModule, Routes} from "@angular/router";
import {CoreModule} from "../../core/core.module";
import {SharedModule as MainSharedModule} from "../shared/shared.module";
import {DistanceComponent} from "./distance.component";
import {CoverComponent} from "./cover.component";

const routes: Routes = [
    {
        path: 'simple',
        component: SimpleComponent
    },
    {
        path: 'distance',
        component: DistanceComponent
    },
    {
        path: 'cover',
        component: CoverComponent
    }
];

@NgModule({
    imports: [
        CoreModule.forChild(),
        MainSharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        SimpleComponent, DistanceComponent, CoverComponent
    ]
})
export class LabelModule {
}
