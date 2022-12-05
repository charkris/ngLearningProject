import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UploadService} from "../shell/upload.service";

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  constructor(private router: Router,
              private upload: UploadService) { }

  ngOnInit(): void {
  }

  showLaptopList(){
    this.upload.success = false;
    this.upload.showFlag = true;
    this.router.navigate(['/list']);
  }

  toMain() {
    this.upload.success = false;
    this.upload.showFlag = true;
    this.router.navigate(['/']);
  }
}
