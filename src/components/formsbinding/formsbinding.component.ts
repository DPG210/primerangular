import { Component } from "@angular/core";

@Component({
    selector:"app-forms-binding",
    templateUrl:"./formsbinding.component.html",
    standalone:false
})

export class FormsBinding{
    public user:any;
    public mensaje: string;

    constructor(){
        this.mensaje="";
        this.user={
            nombre:"",
            apellidos:"",
            edad:0
        }
    }

    recibirDatos():void{
        this.mensaje="Datos recibidos"
    }

}