import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ConfigService} from "../../core/config.service";
import {Router} from "@angular/router";
import {
    Feature,
    FeatureClass,
    FeatureLayer, Field,
    GeometryType, Graphic,
    Label, Map,
    Point, SimpleMarkerSymbol,
    SimplePointSymbol,
    SimpleTextSymbol
} from "green-gis";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
    @ViewChild('gMapDiv', {static:true}) gMapDiv: ElementRef;
    option = {
        lng: 116.397411,
        lat: 39.909186,
        url: "http://wprd01.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=7"
    };

    map: any;

    constructor(private router: Router, public configService: ConfigService, private http: HttpClient) {
    }

    ngOnInit(): void {
        this.map = new Map(this.gMapDiv.nativeElement);
        this.map.setTileUrl(this.option.url);
        this.create();
    }

    /////////////////以下界面交互/////////////////////

    async create() {
        const marker = new SimpleMarkerSymbol();
        marker.width = 32;
        marker.height = 32;
        marker.offsetX = -16;
        marker.offsetY = -32;
        marker.url = "assets/img/marker.svg";
        await marker.load();
        const point = new Point(this.option.lng, this.option.lat);
        const graphic = new Graphic(point, marker);
        this.map.addGraphic(graphic);
        this.map.setView([this.option.lng, this.option.lat], 12);
    }

    change() {
        this.map.setTileUrl(this.option.url);
        this.map.redraw();
    }

}
