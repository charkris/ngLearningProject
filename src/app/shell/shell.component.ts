import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UploadService} from "./upload.service";

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              public upload: UploadService) { }

  ngOnInit(): void {
  }

  moveBack(){
    // console.log(this.route.snapshot);
    // if(this.route.snapshot.routeConfig?.path === '')
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
