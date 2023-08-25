import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CoreModule} from "../../core/core.module";
import {SharedModule as MainSharedModule} from "../shared/shared.module";
import {FeatureComponent} from "./feature.component";
import {GraphicComponent} from "./graphic.component";

const routes: Routes = [
    {
        path: 'feature',
        component: FeatureComponent
    },
    {
        path: 'graphic',
        component: GraphicComponent
    }
];

@NgModule({
    imports: [
        CoreModule.forChild(),
        MainSharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        FeatureComponent, GraphicComponent
    ]
})
export class LayerModule {
}
