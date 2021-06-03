import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})

export class ScheduleService {
    private scheduleUrl: string;
    public scheduleList = [];


    constructor(private http: HttpClient) {
        this.scheduleUrl = "http://localhost:4000";
    }

    public createSchedule(body) {
        const httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };
        return this.http.post<any>(`${this.scheduleUrl}/schedule/create`, body, httpOptions).toPromise();
    }

    public getAllSchedulesByGroup(group_id) {
        return this.http.get<any>(`${this.scheduleUrl}/schedule/read/byIdGroup/${group_id}`).toPromise()
    }

    public listSchedule(data) {
        this.scheduleList = [];

        data.map(schedule => {
            let obj = {
                id: schedule._id,
                datetime: schedule.datetime,
                link: schedule.link,
                description: schedule.description,
                owner: schedule.owner,
            }

            this.scheduleList.push(obj);
        });
        return this.scheduleList;
    }
}