import { NgModel } from "@angular/forms";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Card } from "../components/shared/entities/card.type";
import 'rxjs/Rx';

@Injectable()
export class CardService {

    constructor(private http: Http){

    }
}