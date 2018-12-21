import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { Card } from '../../shared/entities/card.type';

@Component({
    selector: 'card-add-component',
    templateUrl: './card-add.component.html',
    styleUrls: ['./card-add.component.css']
})
export class CardAddComponent implements OnInit {

    card: Card;
    types = ["Категория 1", "Категория 2", "Категория 3"];
    
    constructor() {
        this.card = new Card();
     }

    ngOnInit(): void { }

    add(){
        console.log(JSON.stringify(this));
    }
}
