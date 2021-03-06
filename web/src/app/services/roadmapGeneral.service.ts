import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RoadmapGeneralService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:7000";
  }

  public readItems(roadmap_id: string, user_id: string) {
    return this.http
      .get<any>(`${this.url}/roadmap/read/${roadmap_id}?user_id=${user_id}`)
      .toPromise();
  }

  public getAllRoadmapDefault() {
    return this.http
      .get<any>(`${this.url}/roadmap/read/all/default`)
      .toPromise();
  }

  public createRoadmapDefault(body, user_id) {
    body["user_id"] = user_id;

    const httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json"}) };
    return this.http
      .post<any>(`${this.url}/roadmap/create/default?user_id=${user_id}`, body, httpOptions)
      .toPromise();
  }
}
