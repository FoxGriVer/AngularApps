import { Component, OnInit, RootRenderer } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Card } from '../../shared/entities/card.type';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'card-detail-component',
    templateUrl: './card-detail.component.html',
    styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

    card: Card;

    constructor(private route: ActivatedRoute) {
        this.card = new Card();
     }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.card.id = params["id"];
            this.card.title = "Заголовок из кода 1";
            this.card.date = new Date();
            this.card.email = "meb@mail.com";
            this.card.longText = "Очень подробное описание объявления";
            this.card.name = "Павел";
            this.card.phone = "+7 (920) 737-1024";
            this.card.price = 0;
            this.card.site = "https://wowoowwo.ru";
            this.card.text = "Описание объявления из кода 1";
            this.card.type = { id: 1, name: "Категория 1" };
            this.card.city = { id: 1, name: "Томск" };
            this.card.tags = ["Объявление", "Тест", "Тег"];
            console.log(this.card);
        });
     }
}
