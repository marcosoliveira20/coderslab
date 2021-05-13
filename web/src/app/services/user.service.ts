import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})

export class UserService {
    private url: string;

    constructor(private http: HttpClient) {
        this.url = "http://localhost:1000"
    }

    public createUser(body: object) {
        const httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json"}) };
        return this.http.post<any>(`${this.url}/user/create`, body, httpOptions).toPromise();
    }

    public getUser() {
        return this.http.get<any>(`${this.url}/user/read/byId/609da03cd9926e45e1019337`).toPromise();
    }

}