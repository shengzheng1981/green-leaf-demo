import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import * as moment from 'moment';
import {ConfigService} from "../../core/config.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-lesson',
    templateUrl: './lesson.component.html',
    styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit, OnDestroy {

    videos: any = [];

    constructor(public configService: ConfigService, public router: Router, private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get("assets/json/videos.json").subscribe( data => this.videos = data);
    }

    ngOnDestroy(): void {
    }



}

