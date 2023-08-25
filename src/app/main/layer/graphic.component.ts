import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../../core/config.service";
import {Router} from "@angular/router";
import {
    Feature,
    FeatureClass,
    FeatureLayer, Field,
    GeometryType, Graphic, GraphicLayer,
    Label,
    Point, Polyline, SimpleFillSymbol, SimpleLineSymbol, SimpleMarkerSymbol,
    SimplePointSymbol, SimpleRenderer,
    SimpleTextSymbol
} from "green-gis";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-graphic',
    templateUrl: './graphic.component.html',
    styleUrls: ['./graphic.component.scss']
})
export class GraphicComponent implements OnInit {

    option = {
        latVisible: true,
        lngVisible: true,
        pointVisible: true
    };

    map: any;

    latLayer: any;
    lngLayer: any;
    pointLayer: any;

    constructor(private router: Router, public configService: ConfigService, private http: HttpClient) {
    }

    ngOnInit(): void {

    }

    /////////////////以下界面交互/////////////////////
    async mapInit(event) {
        this.map = event.map;

        //画经线
        const lngSymbol = new SimpleLineSymbol();
        lngSymbol.strokeStyle = "#0000ff";
        this.lngLayer = new GraphicLayer();
        this.map.addLayer(this.lngLayer);
        for (let i = -180; i <= 180; i = i + 10){
            const line = new Polyline([[i, -80], [i, 80]]);
            const graphic = new Graphic(line, lngSymbol);
            this.lngLayer.add(graphic);
        }
        //画纬线
        const latSymbol = new SimpleLineSymbol();
        latSymbol.strokeStyle = "#4d9221";
        this.latLayer = new GraphicLayer();
        this.map.addLayer(this.latLayer);
        for (let j = -80; j <= 80; j = j + 10){
            const line = new Polyline([[-180, j], [180, j]]);
            const graphic = new Graphic(line, latSymbol);
            this.latLayer.add(graphic);
        }
        //画经纬线交点
        const pointSymbol = new SimplePointSymbol();
        pointSymbol.radius = 5;
        pointSymbol.fillStyle = "#de77ae";
        pointSymbol.strokeStyle = "#c51b7d";
        this.pointLayer = new GraphicLayer();
        this.map.addLayer(this.pointLayer);
        for (let i = -180; i <= 180; i = i + 10){
            for (let j = -90; j <= 90; j = j + 10){
                const point = new Point(i, j);
                const graphic = new Graphic(point, pointSymbol);
                this.pointLayer.add(graphic);
            }
        }
        this.map.setView([0, 0], 3);
    }

    change() {
        if (this.lngLayer && this.latLayer && this.pointLayer) {
            this.lngLayer.visible = this.option.lngVisible;
            this.latLayer.visible = this.option.latVisible;
            this.pointLayer.visible = this.option.pointVisible;
            this.map.redraw();
        }
    }

}
