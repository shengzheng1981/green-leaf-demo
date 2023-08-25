import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../../core/config.service";
import {Router} from "@angular/router";
import {
    CategoryRenderer,
    Feature,
    FeatureClass,
    FeatureLayer, Field, FieldType,
    GeometryType, Graphic,
    Label,
    Point, SimpleFillSymbol, SimpleMarkerSymbol,
    SimplePointSymbol, SimpleRenderer,
    SimpleTextSymbol
} from "green-gis";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

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
                const field = new Field();
                field.name = "TYPE";
                field.type = FieldType.String;
                this.renderer  = new CategoryRenderer();
                this.renderer.generate(featureClass, field);
                this.renderer.items.forEach(item => {
                    item.symbol.strokeStyle = this.colorRgb2Hex(item.symbol.strokeStyle);
                    item.symbol.fillStyle = this.colorRgb2Hex(item.symbol.fillStyle);
                });
                this.featureLayer.renderer = this.renderer;
                this.featureLayer.zoom = [7, 20];
                this.map.addLayer(this.featureLayer);
                this.map.setView([109.519, 18.271], 13);
            });
    }

    colorRgb2Hex(rgb) {
        if (!rgb) {
            return null;
        } else {
            if (rgb.startsWith('rgb')) {
                rgb = rgb.split(',');
                let r = parseInt(rgb[0].split('(')[1]);
                let g = parseInt(rgb[1]);
                let b = parseInt(rgb[2].split(')')[0]);
                let hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
                return hex;
            } else {
                return rgb;
            }
        }
    }

    change() {
        if (this.featureLayer && this.renderer) {
            this.featureLayer.visible = this.option.visible;
            //this.renderer.symbol.strokeStyle = this.option.strokeStyle;
            //this.renderer.symbol.fillStyle = this.option.fillStyle;
            this.map.redraw();
        }
    }

}
