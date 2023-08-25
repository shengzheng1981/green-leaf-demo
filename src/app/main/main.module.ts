import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {RouterModule} from "@angular/router";
import {SharedModule as GlobalSharedModule} from '../shared/shared.module';
import {CoreModule} from "../core/core.module";


@NgModule({
    imports: [
        CoreModule.forChild(),
        GlobalSharedModule,
        RouterModule
    ],
    declarations: [
        MainComponent
    ]
})
export class MainModule {
}
