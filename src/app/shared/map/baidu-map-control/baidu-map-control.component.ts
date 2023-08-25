import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
import {BD09, LatLngType, Map} from 'green-gis';
import {ConfigService} from "../../../core/config.service";

declare var BMap: any;

@Component({
  selector: 'baidu-map-control',
  templateUrl: './baidu-map-control.component.html',
  styleUrls: ['./baidu-map-control.component.scss']
})
export class BaiduMapControl implements OnInit, OnDestroy {

    @ViewChild('bMapDiv', {static:true}) bMapDiv: ElementRef;
    @ViewChild('gMapDiv', {static:true}) gMapDiv: ElementRef;
    @Input() option;
    @Output() mapInit = new EventEmitter<any>();
    map: Map;
    bmap: any;

    constructor(private elRef: ElementRef, private configService: ConfigService) {

    }

    ngOnInit() {
        this.option = this.option || {};

        this.bmap = new BMap.Map(this.bMapDiv.nativeElement, {
            enableMapClick: false
        });

        this.map = new Map(this.gMapDiv.nativeElement);

        this.map.on("extent", (event) => {
            this.bmap.centerAndZoom(new BMap.Point(event.center[0], event.center[1]), event.zoom);
        });
        this.map.setProjection(new BD09(LatLngType.GCJ02));
        this.map.setView([this.configService.map.center.lng, this.configService.map.center.lat], this.configService.map.zoom);
        this.mapInit.emit({
            map: this.map,
            bmap: this.bmap
        });
    }

    ngOnDestroy() {
        this.map && this.map.destroy();
    }
}
