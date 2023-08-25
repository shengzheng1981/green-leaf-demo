import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CoreModule} from "../../core/core.module";
import {SharedModule as MainSharedModule} from "../shared/shared.module";
import {PointComponent} from "./point.component";
import {ParticleComponent} from "./particle.component";
import {LineComponent} from "./line.component";

const routes: Routes = [
    {
        path: 'point',
        component: PointComponent
    },
    {
        path: 'line',
        component: LineComponent
    },
    {
        path: 'particle',
        component: ParticleComponent
    }
];

@NgModule({
    imports: [
        CoreModule.forChild(),
        MainSharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        PointComponent, LineComponent, ParticleComponent
    ]
})
export class AnimationModule {
}
