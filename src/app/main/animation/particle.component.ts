import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../../core/config.service";
import {Router} from "@angular/router";
import {
    Feature,
    FeatureClass,
    FeatureLayer, Field,
    GeometryType, Graphic,
    Label, ParticleAnimation,
    Point, PointAnimation, SimpleFillSymbol, SimpleMarkerSymbol,
    SimplePointSymbol, SimpleRenderer,
    SimpleTextSymbol
} from "green-gis";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-particle',
    templateUrl: './particle.component.html',
    styleUrls: ['./particle.component.scss']
})
export class ParticleComponent implements OnInit {

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

        const point = new Point(116.397411,39.909186);
        this.animation = new ParticleAnimation(point);
        this.map.addAnimation(this.animation);
    }

    change() {
        if (this.animation) {
            this.map.redraw();
        }
    }

}
