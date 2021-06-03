import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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

  constructor(private router: Router) {
    if (!this.acceptedTypes.find((type) => type === this.type))
      this.type = "group";
  }

  ngOnInit() { }

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
}
