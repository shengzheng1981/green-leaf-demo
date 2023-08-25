import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../../core/config.service";
import {Router} from "@angular/router";
import {
    Feature,
    FeatureClass,
    FeatureLayer, Field,
    GeometryType, Graphic,
    Label,
    Point, SimpleMarkerSymbol,
    SimplePointSymbol, SimpleRenderer,
    SimpleTextSymbol
} from "green-gis";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-cluster',
    templateUrl: './cluster.component.html',
    styleUrls: ['./cluster.component.scss']
})
export class ClusterComponent implements OnInit {

    option = {
        cluster: true
    };

    map: any;
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
                const renderer = new SimpleRenderer();
                this.featureLayer.cluster = this.option.cluster;
                this.featureLayer.renderer = renderer;
                this.featureLayer.zoom = [13, 20];
                this.map.addLayer(this.featureLayer);
                this.map.setView([109.519, 18.271], 13);
            });
    }

    switch() {
        if (this.featureLayer) {
            this.featureLayer.cluster = this.option.cluster;
            this.map.redraw();
        }
    }

}
