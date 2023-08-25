import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSelectModule } from 'ng-zorro-antd/select';
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {NzAnchorModule} from "ng-zorro-antd/anchor";
import {NzMenuModule} from "ng-zorro-antd/menu";
import { NzAffixModule } from 'ng-zorro-antd/affix';
registerLocaleData(zh);

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        FormsModule, ReactiveFormsModule,
        NzButtonModule,
        NzInputModule, NzDatePickerModule,
        NzRadioModule,
        NzCheckboxModule, NzSelectModule,
        NzFormModule,
        NzModalModule, NzMessageModule,
        NzGridModule, NzTabsModule,
        NzAnchorModule, NzMenuModule, NzAffixModule,
        NzSpinModule, NzBadgeModule, NzTagModule,
        NzDropDownModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        FormsModule, ReactiveFormsModule,
        NzButtonModule,
        NzInputModule, NzDatePickerModule,
        NzRadioModule,
        NzCheckboxModule, NzSelectModule,
        NzFormModule,
        NzModalModule, NzMessageModule,
        NzGridModule, NzTabsModule,
        NzAnchorModule, NzMenuModule, NzAffixModule,
        NzSpinModule, NzBadgeModule, NzTagModule,
        NzDropDownModule
    ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                {provide: NZ_I18N, useValue: zh_CN}
            ]
        };
    }

    static forChild(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }
}
