import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RecordManagmentRoutingModule } from './record-managment-routing.module';

import { RecordManagmentComponent } from './components/record-managment/record-managment.component';
import { ReportComponent } from './components/report/report.component';
import { RecordsComponent } from './components/records/records.component';
import { CreateRecordComponent } from './components/create-record/create-record.component';
import { FormPeriodComponent } from './components/form-period/form-period.component';

import { DataService } from './services/data.service';
import { ShareDatesService } from './services/share-dates.service';

@NgModule({
    declarations: [
        RecordManagmentComponent,
        ReportComponent,
        RecordsComponent,
        CreateRecordComponent,
        FormPeriodComponent
    ],
    imports: [ 
        CommonModule,
        RecordManagmentRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    exports: [],
    providers: [
        DataService,
        ShareDatesService
    ],
})
export class RecordManagmentModule {}