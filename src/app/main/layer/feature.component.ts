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
    selector: 'app-feature',
    templateUrl: './feature.component.html',
    styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

    option = {
        visible: true,
        strokeStyle: "#ff0000",
        fillStyle: "#ff0000",
        minZoom: 5,
        maxZoom: 20
    };

    map: any;

    renderer: any;
    featureLayer: any;

    constructor(private router: Router, public configService: ConfigService, private http: HttpClient) {
    }

    ngOnInit(): void {

    }

    /////////////////以下界面交互/////////////////////
    async mapInit(event) {
        this.map = event.map;
        this.http.get("assets/geojson/chongqing.json")
            .subscribe((data :any) => {
                const featureClass = new FeatureClass(GeometryType.Polygon);
                featureClass.loadGeoJSON(data);
                this.featureLayer = new FeatureLayer();
                this.featureLayer.featureClass = featureClass;
                this.renderer = new SimpleRenderer();
                this.renderer.symbol = new SimpleFillSymbol();
                this.featureLayer.renderer = this.renderer;
                this.featureLayer.zoom = [5, 20];
                this.map.addLayer(this.featureLayer);
                this.map.setView([107.777, 29.809], 7);
            });
    }

    change() {
        if (this.featureLayer && this.renderer) {
            this.featureLayer.visible = this.option.visible;
            this.featureLayer.zoom = [this.option.minZoom, this.option.maxZoom];
            this.renderer.symbol.strokeStyle = this.option.strokeStyle;
            this.renderer.symbol.fillStyle = this.option.fillStyle;
            this.map.redraw();
        }
    }

}
