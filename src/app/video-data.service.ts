import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://api.angularbootcamp.com/videos';

export interface Video {
  title: string;
  author: string;
}

@Injectable()
export class VideoDataService {

  constructor(private http: HttpClient) {  }

  loadVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(API_URL);
  }

}
