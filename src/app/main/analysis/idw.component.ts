import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../../core/config.service";
import {Router} from "@angular/router";
import {
    Feature,
    FeatureClass,
    FeatureLayer, Field,
    GeometryType, Graphic, InverseDistanceWeight,
    Label,
    Point, SimpleMarkerSymbol,
    SimplePointSymbol, SimpleRenderer,
    SimpleTextSymbol, RasterLayer
} from "green-gis";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-idw',
    templateUrl: './idw.component.html',
    styleUrls: ['./idw.component.scss']
})
export class IDWComponent implements OnInit {

    option = {
        honey: false,
        honeySide: 10
    };

    map: any;
    idw: any;

    constructor(private router: Router, public configService: ConfigService, private http: HttpClient) {
    }

    ngOnInit(): void {

    }

    /////////////////以下界面交互/////////////////////
    async mapInit(event) {
        this.map = event.map;
        this.http.get("assets/geojson/sensor.json")
            .subscribe((data :any) => {
                const featureClass = new FeatureClass(GeometryType.Point);
                featureClass.loadGeoJSON(data);
                const field = new Field();
                field.name = "DEPTH";
                this.idw = new InverseDistanceWeight();
                this.idw.honey = false;
                this.idw.generate(featureClass, field);
                const rasterLayer = new RasterLayer();
                rasterLayer.raster = this.idw;
                this.map.addLayer(rasterLayer);
                const featureLayer = new FeatureLayer();
                featureLayer.featureClass = featureClass;
                const renderer = new SimpleRenderer();
                featureLayer.renderer = renderer;
                featureLayer.zoom = [13, 20];
                this.map.addLayer(featureLayer);
                this.map.setView([109.519, 18.271], 13);
            });
    }

    change() {
        if (this.idw) {
            this.idw.honey = this.option.honey;
            this.idw.honeySide = this.option.honeySide;
            this.map.redraw();
        }
    }

}
