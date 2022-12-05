import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {EmployeeResponseModel} from "./employee-response.model";
import {EmployeeService} from "../employee.service";
import {LaptopService} from "../laptop.service";

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  employeeForm: FormGroup;
  teamArr: any;
  positionArr: any;
  employeeInfo = {
    firstName: '',
    lastName: '',
    team: '',
    team_id: '',
    position: '',
    position_id: '',
    email: '',
    phone: '',
  };

  constructor(private router: Router,
              private http: HttpClient,
              private employeeService: EmployeeService,
              private laptopService: LaptopService) {
  }

  ngOnInit(): void {

    this.initForm();

    this.employeeService.getTeam().subscribe(
      (resp) => {
        // console.log(resp, 'resp');
        this.teamArr = resp;
        this.teamArr = this.teamArr.data
      }
    )

    this.employeeService.getPosition().subscribe(
      (resp) => {
        this.positionArr = resp;
        this.positionArr = this.positionArr.data;
        // console.log('resp', resp);
        // console.log('posArr', this.positionArr);
        // console.log(this.positionArr, 'pos')
      }
    )
  }

  get(controlName: string) {
    return this.employeeForm.get(controlName);
  }

  moveToNext() {
    if (this.employeeForm.invalid) {
      // console.log('aaaaaaaa')
      return;
    }

    this.positionArr.map((item: any) => {
      if (item.name === this.get('position')?.value) {
        this.employeeInfo.position_id = item.id;
        this.employeeInfo.team_id = item.team_id;
      }
    })

    this.employeeInfo.firstName = this.get('firstName')?.value;
    this.employeeInfo.lastName = this.get('lastName')?.value;
    this.employeeInfo.team = this.get('team')?.value;
    this.employeeInfo.position = this.get('position')?.value;
    this.employeeInfo.email = this.get('email')?.value;
    this.employeeInfo.phone = this.get('phoneNumber')?.value;
    // console.log(JSON.stringify(this.employeeInfo), 'json emp info')

    localStorage.setItem('employeeInfo', JSON.stringify(this.employeeInfo));
     this.router.navigate(['/add/laptop']);
  }


  initForm() {
    this.employeeForm = new FormGroup({
      firstName: new FormControl('',
        [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('',
        [Validators.required, Validators.minLength(2)]),
      team: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required])
    })
  }

}
