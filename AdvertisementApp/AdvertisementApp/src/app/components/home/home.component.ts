import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/entities/card.type';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    ngOnInit(): void { }

    cards: Card[];

    constructor(){
        this.cards = [
            {
                id: 1,
                title: "Заголовок из кода Ильи",
                date: new Date(),
                email: "adm.shwan@gmail.com",
                longText: "Очень подробное описание объявления",
                name: "Илья",
                phone: "+7 (920) 737-1024",
                price: 0,
                site: "https://shwanoff.ru",
                tags: ["объявление, тест"],
                text: "Описание объявления",
                type: { id: 1, name: "Категория 1" },
                city: { id: 1, name: "Курск" }
            },
            {
                id: 2,
                title: "Заголовок из кода Павла",
                date: new Date(),
                email: "adm.shwan@gmail.com",
                longText: "Очень подробное описание объявления",
                name: "Павел",
                phone: "+7 (920) 737-1024",
                price: 0,
                site: "https://shwanoff.ru",
                tags: ["объявление, тест"],
                text: "Описание объявления",
                type: { id: 1, name: "Категория 1" },
                city: { id: 1, name: "Курск" }
            }
        ]
    }

}
