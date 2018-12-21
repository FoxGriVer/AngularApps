import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { ShareDatesService } from '../../services/share-dates.service';

import { Record } from 'src/app/entities/record.type';
import { Dates } from 'src/app/entities/dates.type';

@Component({
    selector: 'records-component',
    templateUrl: './records.component.html',
    styleUrls: ['./records.component.css'],
    providers: [DataService, ShareDatesService]
})
export class RecordsComponent implements OnInit {

    record: Record = new Record();
    records: Record[];
    balanceForPeriod: number = 0;
    dates: Dates = new Dates();

    reportMode: boolean = false;
    formPeriodMode: boolean = false;

    constructor(private dataService: DataService, 
        private shareDatesServices: ShareDatesService) {
    }

    ngOnInit(): void {
        this.loadRecords(); 
     }

    async loadRecords() {
        this.records = await this.dataService.getRecords();
        console.log(this.dates);
    }

    public editRecord(_record: Record) {
        this.record = _record;
    }

    public getReport() {        
        this.formPeriodMode = true;
    }

    public save() {
        if (this.record.id == null) {

        } else {
            this.dataService.updateRecord(this.record)
                .subscribe(data => this.loadRecords());
        }
        this.cancel();
    }

    public cancelReport() {
        this.cancel();
        this.loadRecords();
    }

    public cancel() {
        this.record = new Record();
        this.formPeriodMode = false;
        this.reportMode = false;
    }

    public delete(_record: Record) {
        this.dataService.deleteRecord(_record.id)
            .subscribe(data => this.loadRecords());
    }

    public formReport() {
        this.formPeriodMode = true;
    }

    async getFiltredRecordsAndBalance(){
        this.formPeriodMode = false;
        this.reportMode = true;
        let sum: number = 0;
        this.records = await this.dataService.getFiltredRecords(this.dates);
        this.records.forEach(element => {
            sum += Number(element.ammount);
            console.log(sum);
        });
        this.balanceForPeriod = sum;
    }

    add(){
        this.cancel();        
    }
}
