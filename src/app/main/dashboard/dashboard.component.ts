import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import * as moment from 'moment';
import {ConfigService} from "../../core/config.service";
import {Router} from "@angular/router";
import {Graphic, Point, PointSymbol} from "green-gis";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

    option = {
        lng: 116.397411,
        lat: 39.909186,
        strokeStyle: "#ffffff",
        fillStyle: "#ff0000",
        radius: 20,
        sides: 4,
        flag: true,
    };

    map: any;

    symbol: any;

    interval: any;

    constructor(public configService: ConfigService, public router: Router) {
    }

    ngOnInit() {

    }

    ngOnDestroy(): void {
        this.interval && clearInterval(this.interval);
    }

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

        this.interval = setInterval(() => {
            if (this.symbol.sides == 12 && this.option.flag) {
                this.option.flag = false;
            } else if (this.symbol.sides == 3 && !this.option.flag) {
                this.option.flag = true;
            }
            if (this.option.flag) {
                this.symbol.sides += 1;
            }
            if (!this.option.flag) {
                this.symbol.sides -= 1;
            }
            this.map.redraw();
        }, 1000)
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
