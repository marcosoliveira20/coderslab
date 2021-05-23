import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  public showBody:boolean = false;
  /**
   * Accepted values: "complete", "late", "challenge" and "default"
   * Will be applied "default" if anyone value is passed,
   */
  @Input() status:string = "complete";
  @Input() isChallenge:boolean = true;
  @Input() index:number = 7;
  @Input() data = {
    link: null
  };

  constructor() { }

  ngOnInit() {

  }

  openReferenceLink() {
    window.open(this.data.link, "_blank")
  }

  handleDisplay() {
    this.showBody = !this.showBody;
  }

}
