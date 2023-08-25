import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CoreModule} from "../../core/core.module";
import {SharedModule as MainSharedModule} from "../shared/shared.module";
import {SandboxComponent} from "./sandbox.component";

const routes: Routes = [
    {
        path: '',
        component: SandboxComponent
    }
];

@NgModule({
    imports: [
        CoreModule.forChild(),
        MainSharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        SandboxComponent
    ]
})
export class SandboxModule {
}
