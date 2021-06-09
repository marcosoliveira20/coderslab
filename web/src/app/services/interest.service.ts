import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class InterstService {
    private url: string;

    constructor(private http: HttpClient) {
        this.url = "http://localhost:5000";
    }

    public getAllInterestList() {
        return this.http.get<any>(`${this.url}/interest/read/all`).toPromise()
    }

    public getInterestListByUser(user_id) {
        return this.http.get<any>(`${this.url}/interest/read/byUserId/${user_id}`).toPromise();
    }

    public createInterest(body, user_id) {
        const res = {
            _id_user: user_id,
            _id_subject: body._id,
            level: body.level
        }
        const httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json"}) };
        return this.http.post<any>(`${this.url}/interest/create`, res, httpOptions).toPromise()
    }

    public updateInterest(body, user_id) {
        const res = {
            _id_user: user_id,
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
