import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GroupService } from "src/app/services/group.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-home-group",
  templateUrl: "./home-group.component.html",
  styleUrls: ["./home-group.component.scss"],
})
export class HomeGroupComponent implements OnInit {

  constructor(
    private groupService: GroupService,
    private router: Router,
    private userService: UserService,
  ) {}

  public user: any;
  groupList = [];
  groupListBd = [];
  typeFilter: string="all";
  user_id = this.groupService.user_id;

  filter(type:string){
    this.typeFilter = type;
    if(type === "all"){
      this.groupList = this.groupListBd;
    }else{
      this.groupList = this.groupListBd.filter( group => group.owner === this.user_id)
    }

  }

  ngOnInit() {
    this.userService.getUserById().then((data) => {
      this.user = data;
    });

    this.groupService.getAllGroupsByUser().then(data => {
      this.groupListBd = this.groupService.listGroup(data);
      this.filter("all");
    })
    .catch(err => console.log(err))
  }

  redirectToGroup(token) {
    this.router.navigate([`/groups`, token]);
  }
}
