import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LaptopService} from "../shell/laptop.service";

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {

  infoArr: any;

  constructor(private router: Router,
              private laptopService: LaptopService) {
  }

  ngOnInit(): void {
    this.laptopService.getAllLaptop().subscribe(
      resp => {
        this.infoArr = resp.data;
        // this.infoArr = this.infoArr[0]
       // console.log(this.infoArr)
      }
    )
  }

  onSelect(laptop_id: number) {
   // console.log(laptop_id);
    this.laptopService.laptop_id = laptop_id;
  }

  moveBack() {
    this.router.navigate(['../']);
  }

}
