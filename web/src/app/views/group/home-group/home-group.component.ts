import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { userMock } from "src/app/app.component";
import { GroupService } from "src/app/services/group.service";

@Component({
  selector: "app-home-group",
  templateUrl: "./home-group.component.html",
  styleUrls: ["./home-group.component.scss"],
})
export class HomeGroupComponent implements OnInit {

  constructor(private groupService: GroupService, private router: Router) {}

  public user = userMock;
  // groupList = userMock.group_list;
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
    this.groupService.getAllGroupsByUser().then(data => {
      this.groupListBd = this.groupService.listGroup(data);
      this.filter("all");
    })
  }

  redirectToGroup(token) {
    this.router.navigate([`/groups`, token]);
  }
}
