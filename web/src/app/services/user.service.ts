import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class UserService {
    private url: string;
    private user_id = "60ac594c68ec2ca3d561db6f";
    public userList;

    constructor(private http: HttpClient) {
        this.url = "http://localhost:1000";
    }

    public createUser(body: object) {
        const httpOptions = {
            headers: new HttpHeaders({ "Content-Type": "application/json" }),
        };
        return this.http
            .post<any>(`${this.url}/user/create`, body, httpOptions)
            .toPromise();
    }

    public getUserById() {
        return this.http
            .get<any>(`${this.url}/user/read/byId/${this.user_id}`)
            .toPromise();
    }

    public getUserList() {
        return this.http.get<any>(`${this.url}/user/read/all`).toPromise();
    }

    public updateUser(body: object) {
        body["_id"] = this.user_id;

        const httpOptions = {
            headers: new HttpHeaders({ "Content-Type": "application/json" }),
        };
        return this.http
            .put<any>(`${this.url}/user/update/${this.user_id}`, body, httpOptions)
            .toPromise();
    }

    public deleteUser() {
        return this.http
            .delete<any>(`${this.url}/user/delete/${this.user_id}`)
            .toPromise();
    }

    public listUsers(data) {
        this.userList = [];

        data.map(user => {
            let obj = {
                id: user._id,
                username: user.username,
                name: user.name,
                last_name: user.last_name,
                email: user.email,
                discord_id: user.discord_id,
                github_id: user.github_id,
                password: user.password
            }
            this.userList.push(obj);
        });

        return this.userList;
    }
}
