import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "events";

@Component({
  selector: "app-input-auto-complete",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class BasicAutoCompleterComponent {
  @Input() theme: string;

  keyword = "name";
  private interestList = [];
  private interestListFilter = [];
  public interestListMock = [
    {
      token: 1,
      name: "Java",
    },
    {
      token: 2,
      name: "Angular",
    },
    {
      token: 3,
      name: "Python",
    },
    {
      token: 4,
      name: "CSS",
    },
    {
      token: 5,
      name: "HTML",
    },
    {
      token: 6,
      name: "JS",
    },
    {
      token: 7,
      name: "C#",
    },
  ];

  selectEvent(item) {
    this.interestList.push(item);
    const interestIndex = this.interestListMock.findIndex(
      (interest) => interest.name == item.name
    );
    this.interestListMock.splice(interestIndex, 1);
  }

  removeInterest(interest) {
    console.log(interest)
    var interestRemove = interest.path[0].className;
    const interestIndex = this.interestList.findIndex(
      (interest) => interest.name == interestRemove
    );
    this.interestListMock.push(this.interestList[interestIndex]);
    this.interestListMock = [...this.interestListMock.splice(interestIndex)];

    this.interestList.splice(interestIndex, 1);
  }

  addInterest(interest) {
    if (this.interestListFilter.length > 0) {
      var interestAdd = interest.path[0].className;
      const interestIndex = this.interestListMock.findIndex(
        (i) => i.name == interestAdd
      );
      this.interestList.push(this.interestListMock[interestIndex]);
      this.interestListMock.splice(interestIndex, 1);

      this.interestListFilter.splice(
        this.interestListFilter.findIndex((i) => i.name == interestAdd),
        1
      );
    }
  }

  filterList(event) {
    if (event.target.value.length > 0) {
      this.interestListFilter = this.interestListMock.filter((interest) =>
        interest.name.toLowerCase().includes(event.target.value)
      );
    } else {
      this.interestListFilter.splice(0);
    }
  }
  public getInterestList() {
    return this.interestList;
  }
}