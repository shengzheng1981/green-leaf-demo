import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CoreModule} from "../../core/core.module";
import {SharedModule as MainSharedModule} from "../shared/shared.module";

import {PointComponent} from "./point.component";
import {MarkerComponent} from "./marker.component";
import {LetterComponent} from "./letter.component";
import {ArrowComponent} from "./arrow.component";
import {CustomComponent} from "./custom.component";

const routes: Routes = [
    {
        path: 'point',
        component: PointComponent
    },
    {
        path: 'marker',
        component: MarkerComponent
    },
    {
        path: 'letter',
        component: LetterComponent
    },
    {
        path: 'arrow',
        component: ArrowComponent
    },
    {
        path: 'custom',
        component: CustomComponent
    }
];

@NgModule({
    imports: [
        CoreModule.forChild(),
        MainSharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        PointComponent, MarkerComponent, LetterComponent, ArrowComponent, CustomComponent
    ]
})
export class SymbolModule {
}
