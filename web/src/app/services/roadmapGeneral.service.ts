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
}
