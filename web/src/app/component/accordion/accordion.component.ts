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
   * Accepted values: "done", "late", "challenge" and "default"
   * Will be applied "default" if anyone value is passed,
   */
  public status:string;
  @Input() isChallenge:boolean = false;
  @Input() index:number;
  @Input() data;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.checkTaskStatus()
    console.log("data: ", this.data)
    console.log("isChallenge: ", this.isChallenge)
    console.log("status: ", this.status)
    console.log("deadline: ", this.data.deadline > new Date())
  }

  checkTaskStatus() {
    if (this.data.deadline) {
      if (this.data.is_done)
        this.status = "done"

      else if (this.data.deadline >= new Date())
        this.status = "default"

      else if (this.data.deadline < new Date())
        this.status = "late"

    } else if (this.isChallenge && this.data.is_done) {
      this.status = "done"
    }
  }

  verifyUrlParam() {
    if (this.activatedRoute.snapshot.url[2])
     console.log(this.activatedRoute.snapshot.url[2])
  }

  openReferenceLink() {
    window.open(this.data.reference, "_blank")
  }

  handleDisplay() {
    this.showBody = !this.showBody;
  }

}
