import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordManagmentComponent } from './components/record-managment/record-managment.component';
import { ReportComponent } from './components/report/report.component';
import { RecordsComponent } from './components/records/records.component';
import { CreateRecordComponent } from './components/create-record/create-record.component';
import { FormPeriodComponent } from './components/form-period/form-period.component';

const routes: Routes = [
    {
        path: '',
        component: RecordsComponent
    },
    {
        path: 'report',
        component: ReportComponent        
    },
    {
        path: 'createRecord',
        component: CreateRecordComponent,             
    },
    {
        path: 'createRecordDone',
        redirectTo: ''
    },
    {
        path: 'formPeriod',
        component: FormPeriodComponent
    },
    {
        path: 'formPeriodDone',
        redirectTo: ''
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecordManagmentRoutingModule {}