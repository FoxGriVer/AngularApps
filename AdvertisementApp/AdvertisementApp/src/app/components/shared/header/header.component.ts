import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

    title: string = "header";
    logoPath: string = "https://www.freelogodesign.org/Content/img/logo-ex-7.png";

    constructor() { }

    ngOnInit(): void{

    }
}
