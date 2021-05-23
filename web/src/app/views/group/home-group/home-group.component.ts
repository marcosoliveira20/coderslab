import { Component, OnInit } from "@angular/core";
import { userMock } from "src/app/app.component";

@Component({
  selector: "app-home-group",
  templateUrl: "./home-group.component.html",
  styleUrls: ["./home-group.component.scss"],
})
export class HomeGroupComponent implements OnInit {

  public user = userMock;
  groupList = userMock.group_list;
  typeFilter: string="all";

  filter(type:string){
    this.typeFilter = type;
    console.log(type);
    if(type === "all"){
      this.groupList = this.user.group_list;
    }else{
      this.groupList = this.groupList.filter( group => group.owner === this.user.id)
    }

  }


  constructor() {
  }

  ngOnInit() {}
}
