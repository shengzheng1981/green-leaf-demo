import {NgModule} from '@angular/core';
import {CoreModule} from '../core/core.module';
import {FormsModule} from '@angular/forms';

import {EmptyComponent} from './component/common/empty/empty.component';
import {TreeComponent} from "./component/common/tree/tree.component";
import {CheckboxComponent} from "./component/common/checkbox/checkbox.component";
import {InputComponent} from "./component/common/input/input.component";
import {Tab2Component} from "./component/common/tabset2/tab2/tab2.component";
import {Tabset2Component} from "./component/common/tabset2/tabset2.component";
import {RadioComponent} from "./component/common/radio/radio.component";

import {GreenMapControl} from "./map/green-map-control/green-map-control.component";
import {BaiduMapControl} from "./map/baidu-map-control/baidu-map-control.component";
import {SafePipe} from "./safe-pipe";

@NgModule({
    imports: [
        CoreModule.forChild(),
        FormsModule
    ],
    declarations: [
        SafePipe,
        GreenMapControl, BaiduMapControl, EmptyComponent, CheckboxComponent, Tab2Component, Tabset2Component, RadioComponent, InputComponent, TreeComponent
    ],
    providers: [
    ],
    exports: [
        SafePipe,
        GreenMapControl, BaiduMapControl, EmptyComponent, CheckboxComponent, Tab2Component, Tabset2Component, RadioComponent, InputComponent, TreeComponent
    ]
})
export class SharedModule {
}
