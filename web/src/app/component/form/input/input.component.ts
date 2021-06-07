import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: "app-input-auto-complete",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class BasicAutoCompleterComponent implements OnInit {
  @Output() itemEvent = new EventEmitter<any[]>();
  
  @Input() theme: string;
  @Input() placeholder: string;
  @Input() categoryListSelect: any[];

  private categoryListFilter = [];
  private categoryListSelected = [];
  public inputValue = "";

  ngOnInit(): void {}

  filterList(event) { 
    this.inputValue = event.target.value;
    event.target.value.length > 0
      ? this.categoryListFilter = this.categoryListSelect.filter(category =>
        category.toLowerCase().includes(event.target.value)
      )
      : this.categoryListFilter.splice(0);
  }

  handleCategoryList(category: string, action: string) {
    if(action === "add") {
      this.categoryListSelected.push(category);
      let interestIndex = this.categoryListSelect.findIndex(i => i === category);
      this.categoryListSelect.splice(interestIndex, 1);
      this.categoryListFilter.splice(0);
    } else {
      this.categoryListSelect.push(category);
      let interestIndex = this.categoryListSelected.findIndex(i => i === category);
      this.categoryListSelected.splice(interestIndex, 1);
    }
    this.itemEvent.emit(this.categoryListSelected);
  }

  setCategoryListSelected(list: any) {
    this.categoryListSelected = list;
  }
}