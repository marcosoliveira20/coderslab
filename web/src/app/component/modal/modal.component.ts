import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() showController:boolean;
  @Output() close = new EventEmitter();

  handleShowController = () => this.close.emit(null);

  constructor() { }

  ngOnInit() {
  }
}
