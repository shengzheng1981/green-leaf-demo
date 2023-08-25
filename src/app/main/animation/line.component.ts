import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../../core/config.service";
import {Router} from "@angular/router";
import {
    Feature,
    FeatureClass,
    FeatureLayer, Field,
    GeometryType, Graphic,
    Label, LineAnimation,
    Point, PointAnimation, Polyline, SimpleFillSymbol, SimpleMarkerSymbol,
    SimplePointSymbol, SimpleRenderer,
    SimpleTextSymbol
} from "green-gis";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-line',
    templateUrl: './line.component.html',
    styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

    map: any;

    animation: any;

    constructor(private router: Router, public configService: ConfigService, private http: HttpClient) {
    }

    ngOnInit(): void {

    }

    /////////////////以下界面交互/////////////////////
    async mapInit(event) {
        this.map = event.map;
        this.map.setView([116.397411,39.909186], 4);

        const polyline = new Polyline([[116.397411,39.909186],[109.519, 18.271]]);
        this.animation = new LineAnimation(polyline);

        this.map.addAnimation(this.animation);

    }

    change() {
        if (this.animation) {
            this.map.redraw();
        }
    }

}
