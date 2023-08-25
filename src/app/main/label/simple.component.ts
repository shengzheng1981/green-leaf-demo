import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../../core/config.service";
import {Router} from "@angular/router";
import {
    CategoryRenderer,
    Feature,
    FeatureClass,
    FeatureLayer, Field, FieldType,
    GeometryType, Graphic,
    Label, NullCollision,
    Point, SimpleMarkerSymbol,
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
        labeled: true,
        label: {
            strokeStyle: "#ff0000",
            fillStyle: "#ffffff",
            offsetX: 0,
            offsetY: 0,
            fontColor: "#ff0000",
            fontSize: 12,
            placement:  "BOTTOM",   //BOTTOM TOP LEFT RIGHT
            padding: 5
        }
    };

    map: any;

    featureLayer: any;
    label: any;

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
                const field2 = new Field();
                field2.name = "NAME";
                field2.type = FieldType.String;
                const renderer = new CategoryRenderer();
                renderer.generate(featureClass, field2);
                this.featureLayer.renderer = renderer;
                this.label = new Label();
                const symbol = new SimpleTextSymbol();
                symbol.pointSymbolWidth = 12;     //diameter
                symbol.pointSymbolHeight = 12;   //diameter
                this.label.field = field2;
                this.label.symbol = symbol;
                this.label.collision = new NullCollision();
                this.featureLayer.label = this.label;
                this.featureLayer.labeled = this.option.labeled;
                this.featureLayer.zoom = [12, 20];
                this.map.addLayer(this.featureLayer);
                this.map.setView([109.519, 18.271], 13);
            });
    }

    switch() {
        this.featureLayer.labeled = this.option.labeled;
        this.map.redraw();
    }

    change() {
        if (this.label && this.label.symbol) {
            this.label.symbol.strokeStyle = this.option.label.strokeStyle;
            this.label.symbol.fillStyle = this.option.label.fillStyle;
            this.label.symbol.fontColor = this.option.label.fontColor;
            this.label.symbol.fontSize = this.option.label.fontSize;
            this.label.symbol.placement = this.option.label.placement;
            this.label.symbol.padding = this.option.label.padding;
            this.label.symbol.offsetX = this.option.label.offsetX;
            this.label.symbol.offsetY = this.option.label.offsetY;
            this.map.redraw();
        }
    }
}
