import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})

export class GroupService {
    private groupUrl: string;
    private unionGroupUrl: string;
    private user_id: string = "60ac594c68ec2ca3d561db6f";

    constructor(private http: HttpClient) {
        this.groupUrl = "http://localhost:3000";
        this.unionGroupUrl = "http://localhost:2000"
    }

    public getAllGroupsByUser() {
        return this.http.get<any>(`${this.unionGroupUrl}/unionUserGroup/read/allGroupsByUser/${this.user_id}`).toPromise()
    }

    public getAllGroups() {
        return this.http.get<any>(`${this.unionGroupUrl}/unionUserGroup/read/allGroups`).toPromise()
    }

    public getAllGroupsBySearch(body: object) {
        const httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json"}) };
        return this.http.post<any>(`${this.unionGroupUrl}/unionUserGroup/read/search`, body, httpOptions).toPromise()
    }

    public createGroup() {

    }
}