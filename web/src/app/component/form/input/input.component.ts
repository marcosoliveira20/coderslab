import { Component} from '@angular/core';

@Component({
  selector: 'app-input-auto-complete',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class BasicAutoCompleterComponent  {
  keyword = 'name';
  private interestList = [];

  public interesses = [
    {
      id: 1,
      name: 'Java',
    },
    {
      id: 2,
      name: 'Angular',
    },
    {
      id: 3,
      name: 'Python',
    },
    {
      id: 4,
      name: 'CSS',
    },
    {
      id: 5,
      name: 'HTML',
    },
    {
      id: 6,
      name: 'JS',
    },
    {
      id: 7,
      name: 'C#',
    }
   ];

    selectEvent(item) {
      this.interestList.push(item);
      const interestIndex = this.interesses.findIndex(interest => interest.name == item.name);
      this.interesses.splice(interestIndex,1);
  }

  removeInterest(interest){
     var interestRemove =interest.path[0].className;
     const interestIndex = this.interestList.findIndex(interest => interest.name == interestRemove);
     this.interesses.push(this.interestList[interestIndex]);
     this.interestList.splice(interestIndex,1);
     console.log(this.interestList);
  }
}