import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Card } from "../../shared/entities/card.type";

@Component({
    selector: 'card-summary-component',
    templateUrl: './card-summary.component.html',
    styleUrls: [
        './card-summary.component.css'
    ]
})
export class CardSummaryComponent {

    @Input() card: Card;

    title: string = "Header";
    date = new Date().toLocaleString();
    text = "The text of the advertisement";

    constructor(private router: Router){

    }

    goToDetail(_id: number){
        this.router.navigate(["card", this.card.id]);
    }

}