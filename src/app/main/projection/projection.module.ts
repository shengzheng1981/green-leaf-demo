import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CoreModule} from "../../core/core.module";
import {SharedModule as MainSharedModule} from "../shared/shared.module";
import {AmapComponent} from "./amap.component";
import {BmapComponent} from "./bmap.component";

const routes: Routes = [
    {
        path: 'amap',
        component: AmapComponent
    },
    {
        path: 'bmap',
        component: BmapComponent
    }
];

@NgModule({
    imports: [
        CoreModule.forChild(),
        MainSharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        AmapComponent, BmapComponent
    ]
})
export class ProjectionModule {
}
