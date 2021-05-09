import { Component, OnInit } from "@angular/core";
import {userMock} from "../../../app.component"
@Component({
  selector: "app-explore-group",
  templateUrl: "./explore-group.component.html",
  styleUrls: ["./explore-group.component.scss"],
})
export class ExploreGroupComponent implements OnInit {

  showInput:boolean;

  public user = userMock;

  public objective_list = [
    { id: 1, name: "Java" },
    { id: 2, name: "CSS" },
    { id: 3, name: "HTML" },
  ];

  public category_listMok = [
    { id: 1, name: "Backend" },
    { id: 2, name: "Frontend" },
    { id: 3, name: "Desing" },
  ];

  setShowInput(){
    this.showInput = !this.showInput;
  }

  constructor() {}

  ngOnInit() {}
}
