import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { DataService } from '../../services/data.service';

import { Record } from 'src/app/entities/record.type';

@Component({
    selector: 'create-record-component',
    templateUrl: './create-record.component.html',
    styleUrls: ['./create-record.component.css'],
    providers: [DataService]
})
export class CreateRecordComponent implements OnInit {

    record: Record = new Record();

    constructor( private dataService: DataService, private router: Router) { 

    }

    ngOnInit(): void { }

    async save() {
        await this.dataService.createRecord(this.record);
        this.router.navigateByUrl("records/createRecordDone");
    }
}
