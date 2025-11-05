import { Component, OnInit } from "@angular/core";

@Component({
    selector:"hooks-angular",
    standalone:false,
    templateUrl:"./hooksangular.component.html"
})
export class HooksAngular implements OnInit{
    public mensaje:string;

    constructor(){
        console.log("Contructor: Primer metodo de inicio de component");
        this.mensaje= "Hoy es miercoles";
    }

    cambiarMensaje(){
        this.mensaje="y mañana jueves!!"
    }
    retornarMensaje(){
        this.mensaje= "Hoy es miercoles";
    }

    ngOnInit(): void {
        console.log("Soy OnInit, despues del constructor");
    }

    ngDoCheck():void{
        console.log(("NgCheck cambiando algo del render"));
    }
}