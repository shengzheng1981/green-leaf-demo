import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    public config : any;

    public app: any;
    public city: any;
    public map: any;
    public menus: any;

    public systems: any = [];
    public system: any;
    //use
    public api: any; //this.city_list[this.city_name].web_api;
    //public web_api: string = "http://localhost:3000"; //this.city_list[this.city_name].web_api;

    constructor(private http: HttpClient) {
    }

    load(url) : any {
        return new Promise((resolve) => {
            this.http.get((url || "assets/json/config.json") + '?v=' + (new Date()).getTime())
                .subscribe((data :any) => {
                    this.config = data;
                    //this.systems = data.systems;
                    //this.system = this.systems.find(item => item.default);
                    //if (!this.system) throw new Error("No Default System!");
                    this.city = data.city;
                    this.app = data.app;
                    this.api = data.api;
                    this.menus = data.menus;
                    this.map = data.map;
                    //this.changeSystem(this.system.code);
                    resolve();
                });
        });
    }


}
