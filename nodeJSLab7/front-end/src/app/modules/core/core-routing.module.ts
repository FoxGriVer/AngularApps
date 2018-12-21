import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/notFound/not-found.component';

const routes: Routes = [    
    {
        path: 'records',
        loadChildren: '../record-managment/record-managment.module#RecordManagmentModule'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
})
export class CoreRoutingModule {}