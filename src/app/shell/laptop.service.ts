import {Injectable} from '@angular/core';
import {BrandModel} from "./laptop-info/brand.model";
import {catchError, tap, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  laptop_id: number;

  constructor(private http: HttpClient,
  ) {
  }

  getBrands() {
    return this.http.get<BrandModel>(
      'brands'
    ).pipe(
      catchError(err => throwError(err)),
      tap(resp => resp)
    )
  }

  getCpus() {
    return this.http.get<BrandModel>(
      'cpus'
    ).pipe(
      catchError(err => throwError(err)),
      tap(resp => resp)
    )
  }

  getAllLaptop() {
    return this.http.get<any>(
      'laptops?token=c80c0f3ea57233f8a3d78e811a8fc3d2'
    ).pipe(
      catchError(err => throwError(err)),
      tap(resp => resp)
    )
  }

  getSelectedLaptop(id: number) {
    return this.http.get(
      `laptop/${id}?token=c80c0f3ea57233f8a3d78e811a8fc3d2`
    ).pipe(
      catchError(err => throwError(err)),
      tap(resp => resp)
    )
  }


}
