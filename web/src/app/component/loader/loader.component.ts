import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() minHeight: string;
  @Input() background: string;
  @Input() borderRadius: string;

  constructor() { }

  ngOnInit() {
  }

}
