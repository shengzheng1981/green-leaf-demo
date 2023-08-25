import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {ConfigService} from "../core/config.service";
import {NavigationEnd, Router} from "@angular/router";
import {interval} from "rxjs/index";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

    visible: boolean = false;
    menus: any;

    private _subscriptions: any = [];

    constructor(private router: Router, public configService: ConfigService) {
        document.title = this.configService.app.title;
        this.menus = this.configService.menus;
        this.router.events.subscribe((event) => {
            if(event instanceof NavigationEnd) {
                this._getMenuByRouter(event.url == "/" ? "/dashboard" : event.url );
            }
        });
    }

    ngOnInit(): void {

    }

    ngOnDestroy() {
        this._subscriptions.forEach( sub => {
            sub.unsubscribe();
        });
    }

    /////////////////以下私有函数/////////////////////

    _getMenuByRouter(router){
        const _recursive = (menu) => {
            if(menu.router && router.indexOf(menu.router) != -1){
                menu.active = true;
            }else {
                menu.active = false;
            }
            if(menu.children && menu.children.length > 0){
                menu.children.forEach( item => {
                    if (_recursive(item)) menu.active = true;
                })
            }
            return menu.active;
        };
        this.menus.forEach(item => {
            _recursive(item);
        });
    }


}
