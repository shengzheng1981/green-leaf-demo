import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ConfigService} from "../../core/config.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

declare var marked;

@Component({
    selector: 'app-document',
    templateUrl: './document.component.html',
    styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
    @ViewChild('markdown', {static:true}) markdown: ElementRef;
    docs: any = [];
    article: any;
    constructor(public configService: ConfigService, public router: Router, private http: HttpClient) {
    }

    ngOnInit(): void {
        this.http.get("assets/json/docs.json").subscribe( data => this.docs = data);

    }

    change(doc) {
        this.article = doc;
        const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
        this.http.get("assets/docs/" + doc.article, { headers, responseType: 'text'}).subscribe( data => {
            this.markdown.nativeElement.innerHTML = marked(data);
        });
    }
}
