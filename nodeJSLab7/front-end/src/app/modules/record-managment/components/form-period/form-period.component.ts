import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Dates } from 'src/app/entities/dates.type';

import { DataService } from '../../services/data.service';
import { ShareDatesService } from '../../services/share-dates.service';


@Component({
    selector: 'form-period-component',
    templateUrl: './form-period.component.html',
    styleUrls: ['./form-period.component.css'],
    providers: [DataService, ShareDatesService]
})
export class FormPeriodComponent implements OnInit {

    dates: Dates = new Dates();

    constructor(private shareDatesServices: ShareDatesService, private router: Router) {

    }

    ngOnInit(): void { }

    getFiltredRecordsAndBalance(){
        this.shareDatesServices.clickSubmitPeriod(this.dates);
        // this.dates = undefined;
        this.router.navigateByUrl("records/formPeriodDone");
    }
    
}
