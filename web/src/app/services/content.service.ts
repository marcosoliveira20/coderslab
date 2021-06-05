import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8000/content';
  }
  public getDashboard(roadmap_id: string) {
    return this.http
      .get<any>(`${this.url}/dashboard?_roadmap_id=${roadmap_id}`)
      .toPromise();
  }
}
