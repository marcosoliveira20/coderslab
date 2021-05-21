import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RoadmapService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:7000";
  }

  public createCustomRoadmap(body: object) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.http
      .post<any>(`${this.url}/roadmap/create/custom`, body, httpOptions)
      .toPromise();
  }
}
