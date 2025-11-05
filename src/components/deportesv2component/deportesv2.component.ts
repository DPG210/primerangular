import { Component } from "@angular/core";

@Component({
    selector:"app-deportesv2",
    templateUrl:"./deportesv2.component.html",
    standalone:false,
    styleUrls:["./deportesv2.component.css"]
})

export class DeportesComponent2 {
    public sports: Array<string>;
    public numeros:Array<number>
    constructor(){
        this.sports= ["padel","futbol","tenis","basket","petanca"];
        this.numeros=[1,5,6,8,10,13];
    }
}