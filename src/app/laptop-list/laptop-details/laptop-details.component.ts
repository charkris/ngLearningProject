import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LaptopService} from "../../shell/laptop.service";
import {EmployeeService} from "../../shell/employee.service";

@Component({
  selector: 'app-laptop-details',
  templateUrl: './laptop-details.component.html',
  styleUrls: ['./laptop-details.component.css']
})
export class LaptopDetailsComponent implements OnInit {

  laptopInfo: any;
  teamArr: any;
  posArr: any;
  brandArr: any;
  position: string;
  team: string;
  brand: string;

  constructor(private router: Router,
              private laptopService: LaptopService,
              private empService: EmployeeService) {
  }

  ngOnInit(): void {

    this.laptopService.getSelectedLaptop(this.laptopService.laptop_id).subscribe(
      resp => {
        this.laptopInfo = resp;
        this.laptopInfo = this.laptopInfo.data;
        // team
        this.empService.getTeam().subscribe(
          (pos) => {
            this.teamArr = pos;
            this.teamArr.data.map((item: any) => {
              if (this.laptopInfo.user.team_id === item.id) {
                this.team = item.name;
              }
            })
          }
        );
        // position
        this.empService.getPosition().subscribe(
          (pos) => {
            this.posArr = pos;
            this.posArr.data.map((item: any) => {
              if (this.laptopInfo.user.position_id === item.id) {
                this.position = item.name;
              }
            })
          }
        );
        // brand
        this.laptopService.getBrands().subscribe(
          (brand) => {
            this.brandArr = brand;
            this.brandArr.data.map((item: any) => {
              if (this.laptopInfo.laptop.brand_id === item.id) {
                this.brand = item.name;
              }
            })
          }
        )

      }
    )
  }

  moveBack() {
    this.router.navigate(['/list']).then();
  }
}
