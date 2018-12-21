import { Injectable, EventEmitter } from '@angular/core';

import { Dates } from 'src/app/entities/dates.type';


@Injectable()
export class ShareDatesService {

    onSubmit: EventEmitter<string> = new EventEmitter();

    constructor() {}    

    clickSubmitPeriod(dates: Dates){
        this.onSubmit.emit("test");
    }
    
}