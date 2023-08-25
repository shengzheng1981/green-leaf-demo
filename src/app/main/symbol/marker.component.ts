import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../../core/config.service";
import {Router} from "@angular/router";
import {
    Feature,
    FeatureClass,
    FeatureLayer, Field,
    GeometryType, Graphic,
    Label,
    Point, SimpleFillSymbol, SimpleMarkerSymbol,
    SimplePointSymbol, SimpleRenderer,
    SimpleTextSymbol
} from "green-gis";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-marker',
    templateUrl: './marker.component.html',
    styleUrls: ['./marker.component.scss']
})
export class MarkerComponent implements OnInit {

    option = {
        lng: 116.397411,
        lat: 39.909186,
        width: 32,
        height: 32,
        offsetX: -16,
        offsetY: -32,
        url: "assets/img/marker.svg"
    };

    map: any;

    marker: any;

    constructor(private router: Router, public configService: ConfigService, private http: HttpClient) {
    }

    ngOnInit(): void {

    }

    /////////////////以下界面交互/////////////////////
    async mapInit(event) {
        this.map = event.map;
        this.marker = new SimpleMarkerSymbol();
        this.marker.width = 32;
        this.marker.height = 32;
        this.marker.offsetX = -16;
        this.marker.offsetY = -32;
        this.marker.url = "assets/img/marker.svg";
        await this.marker.load();
        const point = new Point(this.option.lng, this.option.lat);
        const graphic = new Graphic(point, this.marker);
        this.map.addGraphic(graphic);
        this.map.setView([this.option.lng, this.option.lat], 12);
    }

    change() {
        if (this.marker) {
            this.marker.width = this.option.width;
            this.marker.height = this.option.height;
            this.marker.offsetX = this.option.offsetX;
            this.marker.offsetY = this.option.offsetY;
            this.marker.url = this.option.url;
            this.map.redraw();
        }
    }

}
