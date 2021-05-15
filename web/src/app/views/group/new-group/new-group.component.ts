import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasicAutoCompleterComponent } from 'src/app/component/form/input/input.component';
import { FormBuilder, Validators } from "@angular/forms";
import {interestListMock, userMock} from "../../../app.component";

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.scss']
})
export class NewGroupComponent implements OnInit {
  public group;
  private interestList:any[] =  interestListMock;

  @ViewChild(BasicAutoCompleterComponent, { static: false })
  autoCompleteComponent: BasicAutoCompleterComponent;

  formGroup = this.fb.group({
    name: ["", Validators.required],
    level: ["", Validators.required],
    objctive_list: ["", Validators.required],
    assunto_list: [, Validators.required],
  });

  onSubmit(){
    this.formGroup.patchValue({
      objective: this.autoCompleteComponent.getInterestList(),
    });
    console.log("registerForm", this.formGroup.value);
  }

  listenInput(interestListEvent) {
    this.interestList = interestListEvent;
  }

  public user = userMock;

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder) {
  }

  ngOnInit() {
    const urlToken = this.activatedRoute.snapshot.paramMap.get("token");
    this.group = this.user.group_list.find(g => String(g.token) === urlToken)
    console.log(this.group)
  }

}
