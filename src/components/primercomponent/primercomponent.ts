import { Component } from "@angular/core";

//UN COMPONENT DEBE TENER SIEMPRE LA DECLARACION DE SU CONTENIDO

@Component ({
    //DEBEMOS DECLARAR EL NOMBRE DEL COMPONENT
    //MEDINATE SU SELECTOR EN html
    //EN ANGULAR, LOS SELECTORES LLEVAN GUION
    selector: "primer-component",
    standalone:false,
    //POR AHORA, NO VOY A TENER HTML SEPARADO, PODEMOS INCLUIRLO
    //DENTRO DEL PROPIO COMPONENT
    templateUrl:"./primer.component.html",
    styleUrls:["./primer.component.css"]
})

//CADA COMPONENT SIEMPRE DEBE TENER UNA CLASE ASOCIADA EN SU TS
//DICHO NOMBRE DE LCASE SI LLEVA MAYUSCULAS Y SE DECLARA DENTRO DE app-module.ts
export class PrimerComponent{
    //AQUI ES DONDE SE DECLARAN LAS VARIABLES
    //DICHAS VARIABLES DEBEN TENER UN TIPADO SIEMPRE (typescript)
    public titulo:string;
    public descripcion:string;
    public year:number;

    //EN ANGULAR, AL IGUAL QUE EN REACT, TENEMOS UN CONSTRUCTOR
    //EN DICHO CONSTRUCTOR SERA DONDE INICIALIZAREMOS/INSTANCIAREMOS
    //LOS ELEMENTOS DE MI CLASE
        constructor(){
            //PARA ACCEDER A LOS OBJETOS DE LA CLASE, UTILIZAMOS LA PALABRA this
            this.titulo="Hoy es martes";
            this.descripcion="Hoy gana el MADRID";
            this.year=2025;
        }
}