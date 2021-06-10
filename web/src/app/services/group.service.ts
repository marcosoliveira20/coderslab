import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})

export class GroupService {
    private unionGroupUrl: string;
    private groupUrl: string;
    public groupList = [];

    constructor(private http: HttpClient) {
        this.unionGroupUrl = "http://localhost:2000"
        this.groupUrl = "http://localhost:3000";
    }

    public insertUserInGroup(body: object) {
        const httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json"}) };
        return this.http.post<any>(`${this.unionGroupUrl}/unionUserGroup/create`, body, httpOptions).toPromise()
    }

    public removeUserFromGroup(idUser: string, idGroup: string) {
        return this.http.delete<any>(`${this.unionGroupUrl}/unionUserGroup/delete/one/${idUser}/${idGroup}`).toPromise()
    }

    public getGroupByToken(groupToken: string) {
        return this.http.get<any>(`${this.groupUrl}/group/read/byToken/${groupToken}`).toPromise()
    }

    public getAllGroupsByUser(user_id) {
        return this.http.get<any>(`${this.unionGroupUrl}/unionUserGroup/read/allGroupsByUser/${user_id}`).toPromise()
    }

    public getAllGroups() {
        return this.http.get<any>(`${this.unionGroupUrl}/unionUserGroup/read/allGroups`).toPromise()
    }

    public getAllGroupsBySearch(body: object) {
        const httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json"}) };
        return this.http.post<any>(`${this.unionGroupUrl}/unionUserGroup/read/search`, body, httpOptions).toPromise()
    }

    public createGroup(body: object) {
        const httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json"}) };
        return this.http.post<any>(`${this.groupUrl}/group/create`, body, httpOptions).toPromise()
    }

    public editGroup(group: any, user_id: string) {
        const httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json"}) };
        return this.http.put<any>(`${this.groupUrl}/group/update/${group.id}/${user_id}`, group, httpOptions).toPromise()
    }

    public deleteteGroup(group: any, user_id: string) {
        return this.http.delete<any>(`${this.groupUrl}/group/delete/${group.id}/${user_id}`).toPromise()
    }

    public getAllUserByGroup(groupId: string) {
        return this.http.get<any>(`${this.unionGroupUrl}/unionUserGroup/read/allUsersByGroup/${groupId}`).toPromise()
    }

    public listGroup(data: any) {
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
