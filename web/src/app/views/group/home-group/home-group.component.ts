import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { userMock } from "src/app/app.component";

@Component({
  selector: "app-home-group",
  templateUrl: "./home-group.component.html",
  styleUrls: ["./home-group.component.scss"],
})
export class HomeGroupComponent implements OnInit {
  public a: string = "socorro";

  public user = userMock;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {}
}
