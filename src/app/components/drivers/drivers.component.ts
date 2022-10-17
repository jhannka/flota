import { Component, OnInit } from '@angular/core';
import { Drivers } from '../../models/Drivers';
import { NgForm } from '@angular/forms';
import { DriversService } from 'src/services/drivers.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css'],
  providers: [DriversService],
})
export class DriversComponent implements OnInit {
  public drivers: Drivers;
  public status: string;

  constructor(private _driversService: DriversService) {
    this.drivers = new Drivers(1, '', '', '', '', '', '', 1, false);
    this.status = '';
  }

  ngOnInit(): void {
    console.log(this.drivers);
  }

  onSubmit(f: NgForm) {
    this._driversService.newDriver(this.drivers).subscribe(
      (response) => {
        if (response.status == 'success') {
          this.status = 'success';
          f.reset();
        } else {
          this.status = 'error';
        }
      },
      (error) => {
        this.status = 'error';
        console.log(error);
      }
    );
  }
}
