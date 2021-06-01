import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class InterstService {
    private url: string;
    private user_id = "60ac594c68ec2ca3d561db6f";

    constructor(private http: HttpClient) {
        this.url = "http://localhost:5000";
    }

    public getAllInterestList() {
        return this.http.get<any>(`${this.url}/interest/read/all`).toPromise()
    }
}