import {Injectable} from '@angular/core';
import {BrandModel} from "./laptop-info/brand.model";
import {catchError, tap, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  employeeInfo: any = localStorage.getItem('employeeInfo');
  showFlag: boolean = true;
  success: boolean = false;

  constructor(private http: HttpClient) {
  }

  createRecord(bodyParams: any) {
    this.showFlag = false;
    this.success = true
    return this.http.post<BrandModel>('https://pcfy.redberryinternship.ge/api/laptop/create',
      bodyParams
    ).pipe(
      catchError(err => throwError(err)),
      tap(resp => resp)
    )
  }

}
