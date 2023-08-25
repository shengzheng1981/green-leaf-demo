import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ConfigService} from "../../core/config.service";
import {Router} from "@angular/router";
import {
    Feature,
    FeatureClass,
    FeatureLayer, Field,
    GeometryType, Graphic,
    Label, NullCollision,
    Point, SimpleMarkerSymbol,
    SimplePointSymbol,
    SimpleTextSymbol
} from "green-gis";
import {HttpClient} from "@angular/common/http";
declare var CodeMirror;
@Component({
    selector: 'app-sandbox',
    templateUrl: './sandbox.component.html',
    styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {
    @ViewChild('sandbox', {static:true}) sandbox: ElementRef;
    @ViewChild('textarea', {static:true}) textarea: ElementRef;
    editor: any;
    source: string;

    scripts: any = [];

    constructor(private router: Router, public configService: ConfigService, private http: HttpClient) {
    }

    ngOnInit(): void {
        this.editor = CodeMirror.fromTextArea(this.textarea.nativeElement, {
            lineNumbers: true,
            styleActiveLine: true,
            mode: "htmlmixed"
        });
        this.http.get("assets/json/scripts.json").subscribe( data => {
            this.scripts = data;
            this.source = this.scripts[0].items[0].script;
            this.editor.setValue(this.source);
            this.run();
        });
        this.source = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <script type="text/javascript" src="https://unpkg.com/green-leaf@0.0.7/green-leaf.js"></script>
  <link rel="stylesheet" href="https://unpkg.com/green-leaf@0.0.7/leaflet.css">
</head>
<body style="margin: 0px; overflow: hidden;">
  <div id="foo" style="width: 100%; height: 100%; overflow: hidden;"></div>
  <script>
    const map = new Green.Map("foo");
    //加载OSM切片
    const tile = new Green.Tile('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
    tile.addTo(map);
    
    map.setView(new Green.LatLng(39.909186, 116.397411), 12);
    //设置渲染符号
    const symbol = new Green.SimplePointSymbol();
    const point = new Green.Point(new Green.LatLng(39.909186, 116.397411));
    const graphic = new Green.Graphic(point, symbol);
    //添加单个图形
    map.addGraphic(graphic);
  </script>
</body>
</html>`;
    }

    change(script) {
        this.source = script;
        this.editor.setValue(this.source);
        this.run();
    }

    run() {
        this.source = this.editor.getValue();
        setTimeout(() => {
          const iframe = document.createElement('iframe');
          iframe.style.height = "100%";
          iframe.style.width = "100%";
          iframe.style["border"] = "1px solid #ededed";
          iframe.style["box-shadow"] = "3px 3px 8px rgba(0,0,0,0.2)";
          const parent = this.sandbox.nativeElement;
          while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
          }
          parent.appendChild(iframe);

          const frameDocument = iframe.contentDocument || iframe.contentWindow.document;
          frameDocument.open();
          frameDocument.write(this.source);
          frameDocument.close();
            // this.sandbox.nativeElement.contentWindow.document.body.innerHTML = "";
            // this.sandbox.nativeElement.contentDocument.open();
            // this.sandbox.nativeElement.contentDocument.write(this.source);
            // this.sandbox.nativeElement.contentDocument.close();
        });
    }

}
