import { Component, Input, Output, EventEmitter, OnInit} from "@angular/core";

@Component({
  selector: "app-input-auto-complete",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class BasicAutoCompleterComponent implements OnInit {
  @Input() theme: string;
  @Input() placeholder: string;
  @Input() interestLisInput: any[];
  @Input() interestListInputEdit: any[];
  @Output() itemEvent = new EventEmitter<any[]>();

  private interestList = [];
  private interestListFilter = [];
  private interestListBD = [];
  private interestListIntermediary =[];
  
  ngOnInit(): void {
    // this.getInterestListFromParent();
  }

  getInterestListFromParent() {
    if(this.interestLisInput[0]
      && !this.interestLisInput[0].name 
      && (this.interestListBD.length === 0 || this.interestListIntermediary !==  this.interestLisInput)) {

        this.interestListBD = [];
        this.interestLisInput.map( i =>{
        this.interestListBD.push({
            id: 0,
            name: i 
        })
      })
      this.interestListIntermediary =  this.interestLisInput;
    }
  }
  
  selectEvent(item) {
    this.interestList.push(item);
    const interestIndex = this.interestListBD.findIndex(
      (interest) => interest.name == item.name
    );
    this.interestListBD.splice(interestIndex, 1);
    this.getInterestList()
  }

  removeInterest(interest) {
    var interestRemove = interest.path[0].className;
    const interestIndex = this.interestList.findIndex(
      (interest) => interest.name == interestRemove
    );
    this.interestListBD.push(this.interestList[interestIndex]);
    this.interestListBD = [...this.interestListBD.splice(interestIndex)];
    this.interestList.splice(interestIndex, 1);
    this.getInterestList()
  }

  addInterest(interest) {
    if (this.interestListFilter.length > 0) {
      var interestAdd = interest.path[0].className;
      const interestIndex = this.interestListBD.findIndex(
        (i) => i.name == interestAdd
      );
      this.interestList.push(this.interestListBD[interestIndex]);
      this.interestListBD.splice(interestIndex, 1);

      this.interestListFilter.splice(
        this.interestListFilter.findIndex((i) => i.name == interestAdd),
        1
      );
    }
    this.getInterestList()
  }

  filterList(event) {
    this.getInterestListFromParent();
    if (event.target.value.length > 0) {
      this.interestListFilter = this.interestListBD.filter((interest) =>
        interest.name.toLowerCase().includes(event.target.value)
      );
    } else {
      this.interestListFilter.splice(0);
    }
  }

  public getInterestList() {
    this.itemEvent.emit([this.interestList]);
  }
}