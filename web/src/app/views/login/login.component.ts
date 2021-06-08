import { SubjectService } from 'src/app/services/subject.service';
import { UserService } from 'src/app/services/user.service';

import { Compiler, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public mode = 'login';

  public interest_list: any[] = [];
  public subjectList: any[] = [];

  public selectedSubjectList: any[] = [];
  public customInterestList: any[] = [];

  loginForm = this.fb.group({
    username: [''],
    password: [''],
  });

  registerForm = this.fb.group({
    name: ['', Validators.required],
    last_name: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirm_password: ['', Validators.required],
    discord_id: [''],
    github_id: [''],
    interest_list: [[], Validators.required],
    level: ['-1'],
    subjectForm: [''],
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private subjectService: SubjectService,
    private router: Router,
    private _compiler: Compiler
  ) {}

  ngOnInit() {
    localStorage.clear();
    this.subjectService.getAllSubjects().then((data) => {
      data.map((subject) => {
        this.subjectList.push({ id: subject._id, label: subject.label });
      });
    });
  }

  handleLoginMode = (mode) => (this.mode = mode);

  onSubmitLogin() {
    this.userService.login(this.loginForm.value).then((data) => {
      localStorage.setItem('id', data._id);
      localStorage.setItem('token', data.token);
      this.router.navigate([`/`]);
    });
  }

  onSubmitRegister() {
    this.registerForm.patchValue({
      interest_list: this.interest_list,
    });

    if (
      this.registerForm.value.password ==
      this.registerForm.value.confirm_password
    ) {
      this.userService
        .createUser(this.registerForm.value)
        .then(() => this.handleLoginMode("login"));
    } else {
      // TODO - por boas práticas para mostrar pro usuário que as senhas estão divergentes
      console.warn('senha divergente');
    }
    this.registerForm.removeControl('level');
    this.registerForm.removeControl('subjectForm');
  }

  handleChangeSelect(event, type, index) {
    this.interest_list[index][type] = event.target.value;
  }

  validateFirstSelect(): boolean {
    return (
      this.registerForm.value.subjectForm !== '' &&
      this.registerForm.value.level !== '-1'
    );
  }

  addInterest() {
    if (this.validateFirstSelect()) {
      const subjectId = this.registerForm.value.subjectForm;
      const levelName = this.registerForm.value.level.split(' ')[1];
      const level = this.registerForm.value.level.split(' ')[0];

      const subjectIndex = this.subjectList.findIndex((i) => i.id == subjectId);

      this.interest_list.push({
        _id_subject: subjectId,
        level: Number(level),
      });

      this.customInterestList.push({
        _id_subject: subjectId,
        label: this.subjectList[subjectIndex].label,
        level: levelName,
      });

      this.selectedSubjectList.push(this.subjectList[subjectIndex]);
      this.subjectList.splice(subjectIndex, 1);
      this.registerForm.controls.level.setValue('-1');
      this.registerForm.controls.subjectForm.setValue('');
    }
  }

  deleteInterest(index) {
    const subjectIndex = this.selectedSubjectList.findIndex(
      (item) => item.id == this.interest_list[index]._id_subject,
    );

    this.subjectList.push(this.selectedSubjectList[subjectIndex]);
    this.selectedSubjectList.splice(subjectIndex, 1);

    this.interest_list.splice(index, 1);
    this.customInterestList.splice(index, 1);
  }
}
