import { Component, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar-component',
  standalone: false,
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css',
})
export class TablaMultiplicarComponent {

  public numeros:Array<number>
  public numeros2:Array<number>
  public numero: number;
  public tabla:any;
  public multiplicador:number;
  @ViewChild("cajanumero2") cajaNumero2Ref : ElementRef;

  constructor(){
    this.numero=0;
    this.numeros=[];
    this.numeros2=[]
    this.multiplicador=0

    this.cajaNumero2Ref= new ElementRef(0)

  }
  generarTabla():void{
    let num=this.numero;
    this.numeros=[];
    
    let resultado=0;

    for (let i=0;i<=10;i++){
      resultado= num*i;
      this.numeros.push(resultado)
      
    }
    
  }
  generarTabla2():void{
    let num=parseInt(this.cajaNumero2Ref.nativeElement.value);
    this.multiplicador=num
    this.numeros2=[]
    let resultado=0;

    for (let i=0;i<=10;i++){
      resultado= num*i;
      this.numeros2.push(resultado)
      
    }
    
  }

  // mostrarTabla():void{
  //   this.numero=parseInt(this.cajaNumero2Ref.nativeElement.value);
  //   let aux= new Array <number>();
  //   for(var i=1;i<=10;i++){
  //     var operacion= this.numero*i;
  //     aux.push(operacion)
  //   }
  //   this.numeros=aux
  // }
}
