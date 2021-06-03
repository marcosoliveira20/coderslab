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

    public getInterestListByUser() {
        return this.http.get<any>(`${this.url}/interest/read/byUserId/${this.user_id}`).toPromise();
    }

    public createInterest(body) {
        const res = {
            _id_user: this.user_id,
            _id_subject: body._id,
            level: body.level
        }
        const httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json"}) };
        return this.http.post<any>(`${this.url}/interest/create`, res, httpOptions).toPromise()
    }

    public updateInterest(body) {
        const res = {
            _id_user: this.user_id,
            _id_subject: body._id,
            level: body.level
        }

        const httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json"}) };
        return this.http.put<any>(`${this.url}/interest/create/${body._id}`, res, httpOptions).toPromise()
    }

    public deleteInterest(id) {
        return this.http.delete<any>(`${this.url}/interest/delete/${id}`).toPromise()
    }
}