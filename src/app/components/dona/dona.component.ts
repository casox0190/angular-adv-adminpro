import { Component, Input } from '@angular/core';
import { LabelItem } from 'chart.js';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: []
})
export class DonaComponent {
  @Input () title:string='';

 
 @Input () doughnutChartLabels: string[]=['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
 
 @Input () doughnutChartData: ChartData<'doughnut'> = {
        labels: this.doughnutChartLabels,
       datasets: [
      { data: [450,150,320],  
       
        backgroundColor: ['#6857E6', '#009FEE', '#F02059'] 
      },  
    ]
   
  };


   public chartType: ChartType="doughnut";


   getTitulo(titulo:string){

    if(titulo.length===0){
      return this.title='Sin titulo';
    }
    else{
     return this.title=titulo;
    }
   }

}
