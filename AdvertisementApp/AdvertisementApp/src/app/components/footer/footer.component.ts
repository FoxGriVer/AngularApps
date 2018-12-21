import { Component } from '@angular/core';

@Component({
    selector: 'footer-component',
    templateUrl: 'footer.component.html'
})
export class FooterComponent {

    title: string = "footer";
    author: string = "Smirnov Pavel";
    year: number = 2018;
    link: string = "https://github.com/FoxGriVer";

    constructor(){

    }
}
