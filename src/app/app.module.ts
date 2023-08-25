import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from "./core/core.module";
import * as moment from 'moment';
import {ConfigService} from "./core/config.service";
import {MainModule} from "./main/main.module";

moment.locale('zh-cn');

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MainModule,
        LoadingBarHttpClientModule,
        AppRoutingModule,
        SharedModule,
        CoreModule.forRoot(),
        HttpClientModule
    ],
    providers: [{
        provide: APP_INITIALIZER,
        useFactory: (config: ConfigService) => async () => {
            return config.load('assets/json/config.json');
        },
        deps: [ConfigService],
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
