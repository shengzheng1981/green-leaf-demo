import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../../core/config.service";
import {Router} from "@angular/router";
import {
    Feature,
    FeatureClass,
    FeatureLayer, Field,
    GeometryType, Graphic,
    Label, LetterSymbol,
    Point, SimpleFillSymbol, SimpleMarkerSymbol,
    SimplePointSymbol, SimpleRenderer,
    SimpleTextSymbol
} from "green-gis";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-letter',
    templateUrl: './letter.component.html',
    styleUrls: ['./letter.component.scss']
})
export class LetterComponent implements OnInit {

    option = {
        lng: 116.397411,
        lat: 39.909186,
        strokeStyle: "#ffffff",
        fillStyle: "#ff0000",
        fontColor: "#ffffff",
        fontSize: 12,
        radius: 10,
        letter: "A"
    };

    map: any;

    symbol: any;

    constructor(private router: Router, public configService: ConfigService, private http: HttpClient) {
    }

    ngOnInit(): void {

    }

    /////////////////以下界面交互/////////////////////
    async mapInit(event) {
        this.map = event.map;
        this.symbol = new LetterSymbol();
        this.symbol.strokeStyle = this.option.strokeStyle;
        this.symbol.fillStyle = this.option.fillStyle;
        this.symbol.fontColor = this.option.fontColor;
        this.symbol.fontSize = this.option.fontSize;
        this.symbol.radius = this.option.radius;
        this.symbol.letter = this.option.letter;
        const point = new Point(this.option.lng, this.option.lat);
        const graphic = new Graphic(point, this.symbol);
        this.map.addGraphic(graphic);
        this.map.setView([this.option.lng, this.option.lat], 12);
    }

    change() {
        if (this.symbol) {
            this.symbol.strokeStyle = this.option.strokeStyle;
            this.symbol.fillStyle = this.option.fillStyle;
            this.symbol.fontColor = this.option.fontColor;
            this.symbol.fontSize = this.option.fontSize;
            this.symbol.radius = this.option.radius;
            this.symbol.letter = this.option.letter;
            this.map.redraw();
        }
    }

}
