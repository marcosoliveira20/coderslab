import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  @Input() status:string;
  @Input() isChallenge:boolean;
  @Input() index:number;
  @Input() data;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.status)
    if (this.status !== undefined)
      this.status = this.data.status

    console.log(this.data)
  }

  verifyUrlParam() {
    if (this.activatedRoute.snapshot.url[2])
     console.log(this.activatedRoute.snapshot.url[2])
  }

  openReferenceLink() {
    window.open(this.data.link, "_blank")
  }

  handleDisplay() {
    this.showBody = !this.showBody;
  }

}
