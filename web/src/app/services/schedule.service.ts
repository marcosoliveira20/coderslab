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

    public getAllSchedulesByGroup(group_id) {
        return this.http.get<any>(`${this.scheduleUrl}/schedule/read/byIdGroup/${group_id}`).toPromise()
    }
}