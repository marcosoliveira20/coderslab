import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  public showBody = false;
  public status: string;
  @Input() disableDetails = false;
  @Input() isChallenge = false;
  @Input() index: number;
  @Input() data;
  @Input() roadmapToken: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkTaskStatus();
  }

  checkTaskStatus() {
    const deadline = new Date(this.data.deadline);

    if (deadline) {
      if (this.data.is_done) this.status = 'done';
      else if (deadline >= new Date()) this.status = 'default';
      else if (deadline < new Date()) this.status = 'late';
    } else if (this.isChallenge && this.data.is_done) {
      this.status = 'done';
    }
  }

  openReferenceLink() {
    window.open(this.data.reference, '_blank');
  }

  handleDisplay() {
    this.showBody = !this.showBody;
  }

  /**
   * @todo bug fix
   */
  redirectToRoadmapDetail() {
    // TODO fix: The requested path contains undefined segment at index 1
    // this.router.navigate(['/roadmap', this.roadmapToken]);
  }
}
