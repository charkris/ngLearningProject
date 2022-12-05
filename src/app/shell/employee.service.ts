import {Injectable} from '@angular/core';
import {TeamResponseModel} from "./employee-info/team-response.model";
import {BehaviorSubject, catchError, tap, throwError} from "rxjs";
import {PositionResponseModel} from "./employee-info/position-response.model";
import {EmployeeResponseModel} from "./employee-info/employee-response.model";
import {Employee} from "./employee-info/employee.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee = new BehaviorSubject<Employee>('');

  constructor(private http: HttpClient) {
  }

  getTeam() {
    return this.http.get<TeamResponseModel>(
      'https://pcfy.redberryinternship.ge/api/teams'
    ).pipe(
      catchError(err => throwError(err)),
      tap(resp => resp),
    )
  }

  getPosition() {
    return this.http.get<PositionResponseModel>(
      'https://pcfy.redberryinternship.ge/api/positions'
    ).pipe(
      catchError(err => throwError(err)),
      tap(resp => resp)
    )
  }

  handleEmployee(data: EmployeeResponseModel) {
    const employee = new Employee(
      data.firstName,
      data.lastName,
      data.team,
      data.position,
      data.email,
      data.phone
    );
    this.employee.next(employee);
    localStorage.setItem('employeeInfo', JSON.stringify(employee));
  }

}
