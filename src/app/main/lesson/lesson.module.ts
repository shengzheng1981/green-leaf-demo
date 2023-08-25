import {NgModule} from '@angular/core';
import {CoreModule} from "../../core/core.module";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule as MainSharedModule} from "../shared/shared.module";
import {LessonComponent} from "./lesson.component";

const routes: Routes = [
    {
        path: '',
        component: LessonComponent
    }
];

@NgModule({
    declarations: [LessonComponent],
    imports: [
        CoreModule.forChild(),
        MainSharedModule,
        RouterModule.forChild(routes)
    ]
})
export class LessonModule {
}
