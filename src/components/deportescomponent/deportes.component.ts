import { Component } from "@angular/core";

@Component({
    selector:"app-deportes",
    templateUrl:"./deportes.component.html",
    standalone:false,
    styleUrls:["./deportes.component.css"]
})

export class DeportesComponent {
    public sports: Array<string>;
    public numeros:Array<number>
    constructor(){
        this.sports= ["padel","futbol","tenis","basket","petanca"];
        this.numeros=[1,5,6,8,10,13];
    }
}