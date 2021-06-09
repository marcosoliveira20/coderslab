import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { fadeIn } from "src/app/animation/fade.animation";
import { GroupService } from "src/app/services/group.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-home-group",
  templateUrl: "./home-group.component.html",
  styleUrls: ["./home-group.component.scss"],
  animations: [fadeIn]
})
export class HomeGroupComponent implements OnInit {
  public user: any;
  groupList = [];
  groupListBd = [];
  typeFilter: string="all";
  private user_id: string = localStorage.getItem("id");

  constructor(
    private groupService: GroupService,
    private router: Router,
    private userService: UserService,
  ) {}

  filter(type:string){
    this.typeFilter = type;
    if(type === "all") {
      this.groupList = this.groupListBd;
    } else{
      this.groupList = this.groupListBd.filter( group => group.owner === this.user_id)
    }

  }

  ngOnInit() {
    this.userService.getUserById(this.user_id).then((data) => {
      this.user = data;
    });

    this.groupService.getAllGroupsByUser(this.user_id).then(data => {
      this.groupListBd = this.groupService.listGroup(data);
      this.filter("all");
    })
    .catch(err => console.log(err))
  }

  redirectToGroup(token) {
    this.router.navigate([`/groups`, token]);
  }
}
