import { Component, OnInit } from "@angular/core";
import { userMock } from "src/app/app.component";
import { GroupService } from "src/app/services/group.service";

@Component({
  selector: "app-home-group",
  templateUrl: "./home-group.component.html",
  styleUrls: ["./home-group.component.scss"],
})
export class HomeGroupComponent implements OnInit {

  public user = userMock;
  // groupList = userMock.group_list;
  groupList = [];
  groupListBd = [];
  typeFilter: string="all";

  filter(type:string){
    this.typeFilter = type;
    if(type === "all"){
      this.groupList = this.groupListBd;
    }else{
      this.groupList = this.groupListBd.filter( group => group.owner === this.user.id)
    }

  }

  constructor(private groupService: GroupService) {}

  ngOnInit() {
    this.groupService.getAllGroupsByUser().then(data => {
      data.map(x => {
        let obj = {
          token: x.token,
          name: x.name,
          subject_label: x.subject_label,
          level: x.level
        }
        this.groupListBd.push(obj);
        console.log(x)
      })

      this.filter("all");
    })
  }
}
