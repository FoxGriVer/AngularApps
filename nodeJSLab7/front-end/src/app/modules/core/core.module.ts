import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';

import { NotFoundComponent } from './components/notFound/not-found.component';


@NgModule({
    declarations: [
        NotFoundComponent
    ],
    imports: [ 
        CommonModule,
        CoreRoutingModule
    ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class CoreModule {}