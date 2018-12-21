import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { DescriptionComponent } from './components/description/description.component';
import { TypeComponent } from './components/type/type.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardSummaryComponent } from './components/card/card-summary/card-summary.component';
import { CardDetailComponent } from './components/card/card-detail/card-detail.component';
import { CardAddComponent } from './components/card/card-add/card-add.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DescriptionComponent,
    TypeComponent,
    SearchComponent,
    FooterComponent,
    CardSummaryComponent,
    CardDetailComponent,
    CardAddComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },        
        // { path: 'card', component: CardSummaryComponent },
        { path: 'card/:id', component: CardDetailComponent },   
        { path: 'add', component: CardAddComponent },      	
        { path: '**', redirectTo: 'home' }, 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
