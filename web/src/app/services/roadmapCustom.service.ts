import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

// TODO refatorar tudo para RoadmapCustomService
export class RoadmapService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:7000/roadmap';
  }

  public createCustomRoadmap(body: object, user_id: string) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http
      .post<any>(
        `${this.url}/create/custom?user_id=${user_id}`,
        body,
        httpOptions,
      )
      .toPromise();
  }

  public getRoadmapListByUser(user_id: string) {
    return this.http
      .get<any>(`${this.url}/read/all?user_id=${user_id}`)
      .toPromise();
  }

  public getRoadmapById(_id: string) {
    return this.http.get<any>(`${this.url}/read/${_id}`).toPromise();
  }
}
