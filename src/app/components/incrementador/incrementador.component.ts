import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{

  ngOnInit(): void {
    this.btnClass=`btn ${this.btnClass}`; 
  }
  @Input ('valor') progreso:number=30;
  @Input () btnClass:string='btn-primary';

  @Output () valorSalida: EventEmitter<number>=new EventEmitter();

  // get getPorcentaje(){
  //   return `${this.progreso}%`;
  // }

  cambiarValor(valor: number){

    if(this.progreso>=100 && valor>=0){
      valor=0;
      this.progreso=100;
      this.valorSalida.emit(this.progreso);
    }

    else if(this.progreso<=0 && valor <0){
      valor=0;
      this.progreso=0;
      this.valorSalida.emit(this.progreso);
    }

      this.progreso=this.progreso+valor;
      this.valorSalida.emit(this.progreso);
  }

  onChange(valor:number){

    if(valor>=100){
      this.progreso=100;
    }
    else if(valor<=0){
      this.progreso=0;
    }

    if(!valor){

     valor=0;
     
    }
      this.valorSalida.emit(valor);
         
  }
}
