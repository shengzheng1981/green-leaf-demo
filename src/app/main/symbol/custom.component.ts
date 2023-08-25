import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../../core/config.service";
import {Router} from "@angular/router";
import {
    Feature,
    FeatureClass,
    FeatureLayer, Field,
    GeometryType, Graphic,
    Label, LetterSymbol,
    Point, PointSymbol, SimpleFillSymbol, SimpleMarkerSymbol,
    SimplePointSymbol, SimpleRenderer,
    SimpleTextSymbol
} from "green-gis";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-custom',
    templateUrl: './custom.component.html',
    styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

    option = {
        lng: 116.397411,
        lat: 39.909186,
        strokeStyle: "#ffffff",
        fillStyle: "#ff0000",
        radius: 10,
        sides: 4
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
        this.symbol = new ShapeSymbol();
        this.symbol.strokeStyle = this.option.strokeStyle;
        this.symbol.fillStyle = this.option.fillStyle;
        this.symbol.radius = this.option.radius;
        this.symbol.sides = this.option.sides;
        const point = new Point(this.option.lng, this.option.lat);
        const graphic = new Graphic(point, this.symbol);
        this.map.addGraphic(graphic);
        this.map.setView([this.option.lng, this.option.lat], 12);
    }

    change() {
        if (this.symbol) {
            this.symbol.strokeStyle = this.option.strokeStyle;
            this.symbol.fillStyle = this.option.fillStyle;
            this.symbol.radius = this.option.radius;
            this.symbol.sides = this.option.sides;
            this.map.redraw();
        }
    }

}

export class ShapeSymbol extends PointSymbol{
    public radius: number = 6;
    public sides: number = 4;

    draw(ctx: CanvasRenderingContext2D, screenX, screenY) {
        ctx.save();
        //keep size
        //地理坐标 转回 屏幕坐标
        ctx.setTransform(1,0,0,1,0,0);
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.strokeStyle;
        ctx.fillStyle = this.fillStyle;
        ctx.lineWidth = this.lineWidth;
        ctx.beginPath(); //Start path
        //ctx.arc(screenX, screenY, this.radius, 0, Math.PI * 2, true);
        ctx.moveTo(screenX, screenY - this.radius);
        for (let i = 1; i < this.sides; i++) {
            let rad = 2 * Math.PI / this.sides * i;
            ctx.lineTo(screenX + this.radius * Math.sin(rad), screenY - this.radius * Math.cos(rad));
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }

    contain(anchorX, anchorY, screenX, screenY) {
        return Math.sqrt((anchorX - screenX) *  (anchorX - screenX) +  (anchorY - screenY) *  (anchorY - screenY)) <= this.radius;
    }
}
