import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})

export class GroupService {
    private groupUrl: string;
    private unionGroupUrl: string;
    public user_id: string = "60ac594c68ec2ca3d561db6f";
    public group_list = [];

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

    public listGroup(data) {
        this.group_list = [];
        
        data.map(group => {
        let obj = {
            token: group.token,
            name: group.name,
            subject_label: group.subject_label,
            level: group.level,
            next_schedule: group.next_schedule,
            number_members: group.number_members,
            is_default: group.is_default,
            owner: group._owner,
            category: group.category,
        }
            this.group_list.push(obj);
        });

        return this.group_list;
    }
}