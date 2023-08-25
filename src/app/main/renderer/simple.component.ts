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
    selector: 'app-simple',
    templateUrl: './simple.component.html',
    styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {

    option = {
        visible: true,
        strokeStyle: "#ff0000",
        fillStyle: "#ff0000"
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
        this.http.get("assets/geojson/junction.json")
            .subscribe((data :any) => {
                const featureClass = new FeatureClass(GeometryType.Point);
                featureClass.loadGeoJSON(data);
                this.featureLayer = new FeatureLayer();
                this.featureLayer.featureClass = featureClass;
                this.renderer = new SimpleRenderer();
                this.renderer.symbol = new SimplePointSymbol();
                this.featureLayer.renderer = this.renderer;
                this.featureLayer.zoom = [7, 20];
                this.map.addLayer(this.featureLayer);
                this.map.setView([109.519, 18.271], 13);
            });
    }

    change() {
        if (this.featureLayer && this.renderer) {
            this.featureLayer.visible = this.option.visible;
            this.renderer.symbol.strokeStyle = this.option.strokeStyle;
            this.renderer.symbol.fillStyle = this.option.fillStyle;
            this.map.redraw();
        }
    }

}
