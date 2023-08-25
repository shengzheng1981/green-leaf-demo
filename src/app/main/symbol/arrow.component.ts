import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../../core/config.service";
import {Router} from "@angular/router";
import {
    ArrowSymbol,
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
    selector: 'app-arrow',
    templateUrl: './arrow.component.html',
    styleUrls: ['./arrow.component.scss']
})
export class ArrowComponent implements OnInit {

    option = {
        visible: true,
        strokeStyle: "#ff0000",
        lineWidth: 3,
        minLength: 50,
        arrowLength: 10,
        arrowAngle: Math.PI / 6
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
        this.http.get("assets/geojson/pipe.json")
            .subscribe((data :any) => {
                const featureClass = new FeatureClass(GeometryType.Polyline);
                featureClass.loadGeoJSON(data);
                this.featureLayer = new FeatureLayer();
                this.featureLayer.featureClass = featureClass;
                this.renderer = new SimpleRenderer();
                const symbol = new ArrowSymbol();
                symbol.lineWidth = this.option.lineWidth;
                symbol.strokeStyle = this.option.strokeStyle;
                symbol.minLength = this.option.minLength;
                symbol.arrowLength = this.option.arrowLength;
                this.renderer.symbol = symbol;
                this.featureLayer.renderer = this.renderer;
                this.featureLayer.zoom = [7, 20];
                this.map.addLayer(this.featureLayer);
                this.map.setView([109.519, 18.271], 13);
            });
    }

    change() {
        if (this.featureLayer && this.renderer) {
            this.featureLayer.visible = this.option.visible;
            this.renderer.symbol.lineWidth = this.option.lineWidth;
            this.renderer.symbol.strokeStyle = this.option.strokeStyle;
            this.renderer.symbol.minLength = this.option.minLength;
            this.renderer.symbol.arrowLength = this.option.arrowLength;
            this.map.redraw();
        }
    }

}
