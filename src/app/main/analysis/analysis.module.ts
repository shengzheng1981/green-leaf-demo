import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CoreModule} from "../../core/core.module";
import {SharedModule as MainSharedModule} from "../shared/shared.module";
import {LetterComponent} from "../symbol/letter.component";
import {MarkerComponent} from "../symbol/marker.component";
import {PointComponent} from "../symbol/point.component";
import {ArrowComponent} from "../symbol/arrow.component";
import {CustomComponent} from "../symbol/custom.component";
import {IDWComponent} from "./idw.component";


const routes: Routes = [
    {
        path: 'idw',
        component: IDWComponent
    }
];

@NgModule({
    imports: [
        CoreModule.forChild(),
        MainSharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        IDWComponent
    ]
})
export class AnalysisModule {
}
