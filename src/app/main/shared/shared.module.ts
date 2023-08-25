import {NgModule} from '@angular/core';
import {CoreModule} from '../../core/core.module';
import {SharedModule as GlobalSharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        CoreModule.forChild(),
        GlobalSharedModule
    ],
    declarations: [

    ],
    exports: [
        GlobalSharedModule
    ]
})
export class SharedModule {
}
