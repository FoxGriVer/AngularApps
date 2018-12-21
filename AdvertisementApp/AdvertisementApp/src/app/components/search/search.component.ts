import { Component } from '@angular/core';

@Component({
    selector: 'search-component',
    templateUrl: './search.component.html',
    styleUrls: [
        './search.component.css'
    ]
})
export class SearchComponent {

    title: string = "search";
    input: string;

    constructor(){

    }

    search(_input: string){
        this.input = _input;
        console.log("You have intered: {0} ", this.input);
    }


}