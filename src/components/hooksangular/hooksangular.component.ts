import { Component, OnInit } from "@angular/core";

@Component({
    selector:"hooks-angular",
    standalone:false,
    templateUrl:"./hooksangular.component.html"
})
export class HooksAngular implements OnInit{
    constructor(){
        console.log("Contructor: Primer metodo de inicio de component")
    }

    ngOnInit(): void {
        console.log("Soy OnInit, despues del constructor");
    }

    ngDoCheck():void{
        console.log(("NgCheck cambiando algo del render"));
    }
}