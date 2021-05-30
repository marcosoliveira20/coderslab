import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SubjectService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:6000";
  }

  public getAllSubjects() {
    return this.http.get<any>(`${this.url}/subject/read/all`).toPromise();
  }
}
