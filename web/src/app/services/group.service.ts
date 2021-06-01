import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})

export class GroupService {
    private unionGroupUrl: string;
    private groupUrl: string;
    public user_id: string = "60ac594c68ec2ca3d561db6f";
    public groupList = [];

    constructor(private http: HttpClient) {
        this.unionGroupUrl = "http://localhost:2000"
        this.groupUrl = "http://localhost:3000";
    }

    public insertUserInGroup(body) {
        const httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json"}) };
        return this.http.post<any>(`${this.unionGroupUrl}/unionUserGroup/create`, body, httpOptions).toPromise()
    }

    public getGroupByToken(groupToken) {
        return this.http.get<any>(`${this.groupUrl}/group/read/byToken/${groupToken}`).toPromise()
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

    public createGroup(body) {
        const httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json"}) };
        return this.http.post<any>(`${this.groupUrl}/group/create`, body, httpOptions).toPromise()
    }
    
    public getAllUserByGroup(groupId) {
        return this.http.get<any>(`${this.unionGroupUrl}/unionUserGroup/read/allUsersByGroup/${groupId}`).toPromise()
    }

    public listGroup(data) {
        this.groupList = [];

        data.map(group => {
        let obj = {
            id: group._id,
            token: group.token,
            name: group.name,
            subject_label: group.subject_label,
            level: group.level,
            next_schedule: group.next_schedule,
            number_members: group.number_members,
            is_default: group.is_default,
            is_public: group.is_public,
            owner: group._owner,
            category: group.category,
        }
            this.groupList.push(obj);
        });

        return this.groupList;
    }
}