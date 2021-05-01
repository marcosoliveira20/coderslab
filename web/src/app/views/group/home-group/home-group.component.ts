import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-group',
  templateUrl: './home-group.component.html',
  styleUrls: ['./home-group.component.scss']
})
export class HomeGroupComponent implements OnInit {
  public a:string = "socorro";
  public queryParams;

  constructor(private route: ActivatedRoute) {
    this.queryParams = route.queryParams;
    this.queryParams = this.queryParams.value;
}

  ngOnInit() {
  }

}
