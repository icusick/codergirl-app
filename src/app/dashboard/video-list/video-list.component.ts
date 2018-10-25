import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Video, VideoDataService } from '../../video-data.service';

const API_URL = 'https://api.angularbootcamp.com/videos';

// shareReplay => share data from an observable so the http request only gets called once;

@Component({
  selector: 'cg-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  videos: Video[];
  // constructor(http: HttpClient) {
  //   http
  //   .get(API_URL)
  //   .subscribe(videos => {console.log(videos); this.videos = videos;});
  // }
  constructor(svc: VideoDataService) {
    svc.loadVideos()
    .subscribe(videos => this.videos = videos);
  }

  ngOnInit() {
  }

}
