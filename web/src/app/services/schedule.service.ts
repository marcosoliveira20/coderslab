import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})

export class GroupService {
    private scheduleUrl: string;
    private group_id: string = "60a709af962a5edf506298eb";

    constructor(private http: HttpClient) {
        this.scheduleUrl = "http://localhost:4000";
    }

    public listSchedule(data) {

    }

    public getAllSchedulesByGroup(group_id) {
        return this.http.get<any>(`${this.scheduleUrl}/schedule/read/byIdGroup/${group_id}`).toPromise()
    }
}