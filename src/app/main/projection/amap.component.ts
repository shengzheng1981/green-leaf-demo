import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../../core/config.service";
import {Router} from "@angular/router";
import {
    Feature,
    FeatureClass,
    FeatureLayer, Field,
    GeometryType, Graphic,
    Label,
    Point, SimpleMarkerSymbol,
    SimplePointSymbol,
    SimpleTextSymbol
} from "green-gis";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-amap',
    templateUrl: './amap.component.html',
    styleUrls: ['./amap.component.scss']
})
export class AmapComponent implements OnInit {

    option = {
        lng: 116.397411,
        lat: 39.909186
    };

    map: any;

    constructor(private router: Router, public configService: ConfigService, private http: HttpClient) {
    }

    ngOnInit(): void {

    }

    /////////////////以下界面交互/////////////////////
    async mapInit(event) {
        this.map = event.map;
        this.create();
    }

    async create() {
        const marker = new SimpleMarkerSymbol();
        marker.width = 32;
        marker.height = 32;
        marker.offsetX = -16;
        marker.offsetY = -32;
        marker.url = "assets/img/marker.svg";
        await marker.load();
        const point = new Point(this.option.lng, this.option.lat);
        const graphic = new Graphic(point, marker);
        this.map.addGraphic(graphic);
        this.map.setView([this.option.lng, this.option.lat], 12);
    }

    change() {
        this.map.clearGraphics();
        this.create();
    }


}
