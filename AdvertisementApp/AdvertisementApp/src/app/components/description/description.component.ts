import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'description-component',
    templateUrl: './description.component.html',
    styleUrls: [
        './description.component.css'
    ]
})
export class DescriptionComponent implements OnInit {

    content: string;

    constructor(private router: Router) { 
        this.content = "There is a discription of the application."
    }

    ngOnInit(): void { }

    goToAdd(){
        this.router.navigate(["add"]);
    }
}
