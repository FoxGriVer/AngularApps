import { CardCity } from "./card-city.type";
import { CardType } from "./card-type.type";

export class Card {
    id: number;
    date: Date;
    title: string;
    phone: string;
    city: CardCity;
    type: CardType;
    price: number;
    name: string;
    tags: string[];
    site: string;
    text: string;
    longText: string;
    email: string;
}