import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {LaptopService} from "../laptop.service";
import {UploadService} from "../upload.service";

@Component({
  selector: 'app-laptop-info',
  templateUrl: './laptop-info.component.html',
  styleUrls: ['./laptop-info.component.css']
})
export class LaptopInfoComponent implements OnInit {

  laptopForm: FormGroup;
  brandArr: any;
  cpuArr: any;
  employeeInfo: any = '';
  token = 'c80c0f3ea57233f8a3d78e811a8fc3d2';
  brand_id: any;

  file: any;

  constructor(private router: Router,
              private http: HttpClient,
              private laptopService: LaptopService,
              private upload: UploadService) {
  }

  ngOnInit(): void {
    this.initForm();

    this.employeeInfo = localStorage.getItem('employeeInfo');
    this.employeeInfo = JSON.parse(this.employeeInfo)
    // console.log('aaaaaa', this.employeeInfo);

    this.laptopService.getBrands().subscribe(
      resp => {
        // console.log(resp);
        this.brandArr = resp;
        this.brandArr = this.brandArr.data;
        // console.log(this.brandArr)
      }
    )

    this.laptopService.getCpus().subscribe(
      resp => {
        // console.log(resp);
        this.cpuArr = resp;
        this.cpuArr = this.cpuArr.data;
      }
    )
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  moveBack() {
    this.router.navigate(['add/employee']);
  }

  showSuccess() {
    if (this.laptopForm.invalid) {
      return;
    }
    const name = this.get('name')?.value;
    const cpus = this.get('cpus')?.value;
    const cpuCore = this.get('cpuCore')?.value;
    const cpuStream = this.get('cpuStream')?.value;
    const ramCapacity = this.get('ramCapacity')?.value;
    const price = this.get('price')?.value;
    const drive = this.get('drive')?.value;
    const date = this.get('buyDate')?.value;
    const oldNew = this.get('oldNew')?.value;


    this.brandArr.map((item: any) => {
      if (item.name === this.get('brand')?.value) {
        this.brand_id = item.id;
      }
    })

    // Create form data
    const formData = new FormData();
    formData.append('name', this.employeeInfo.firstName);
    formData.append('surname', this.employeeInfo.lastName);
    formData.append('team_id', this.employeeInfo.team_id);
    formData.append('position_id', this.employeeInfo.position_id);
    formData.append('phone_number', this.employeeInfo.phone);
    formData.append('email', this.employeeInfo.email);
    formData.append('token', this.token);
    formData.append('laptop_name', name);
    formData.append('laptop_image', this.file, this.file.name);
    formData.append('laptop_brand_id', this.brand_id);
    formData.append('laptop_cpu', cpus);
    formData.append('laptop_cpu_cores', cpuCore);
    formData.append('laptop_cpu_threads', cpuStream);
    formData.append('laptop_ram', ramCapacity)
    formData.append('laptop_hard_drive_type', drive);
    formData.append('laptop_state', oldNew);
    formData.append('laptop_purchase_date', date)
    formData.append('laptop_price', price);

    this.upload.createRecord(
      formData
    ).subscribe(
      // resp => console.log(resp, 'okay :)')
    );
  }

  get(controlName: string) {
    return this.laptopForm.get(controlName);
  }

  initForm() {
    this.laptopForm = new FormGroup({
      file: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      brand: new FormControl('', [Validators.required]),
      cpus: new FormControl('', [Validators.required]),
      cpuCore: new FormControl('', [Validators.required]),
      cpuStream: new FormControl('', [Validators.required]),
      ramCapacity: new FormControl('', [Validators.required]),
      drive: new FormControl('', [Validators.required]),
      buyDate: new FormControl('', []),
      price: new FormControl('', [Validators.required]),
      oldNew: new FormControl('', [Validators.required]),
    })
  }

}

