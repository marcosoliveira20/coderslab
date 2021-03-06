import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RoadmapGeneralService } from "src/app/services/roadmapGeneral.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  private acceptedTypes: string[] = ["schedule", "member", "roadmap", "group"];

  @Input() data: any;
  @Input() type: string;
  @Input() buttonLabel: string = "ver mais";
  @Input() disableButton: boolean;
  @Input() disableDefaultRedirect: boolean = false;

  private user_id: string = localStorage.getItem("id");

  constructor(
    private router: Router,
    private roadmapGeneralService: RoadmapGeneralService,
    private userService: UserService
  ) {
    if (!this.acceptedTypes.find((type) => type === this.type))
      this.type = "group";
  }

  ngOnInit() {
    // console.log("roadmap: ", this.data)
  }

  redirectToRoadmap(roadmapId) {
    this.router.navigate([`/roadmap`, roadmapId]);
  }

  themeName() {
    return this.data.is_default ? 'dark' : 'light'
  }

  levelLabel() {
    return this.data.level === 0 ? "Iniciante"
      : this.data.level === 1 ? "Intermediário" : "Avançado"
  }

  redirectToGroup() {
    this.router.navigate([`/groups`, this.data.token]);
  }
}
