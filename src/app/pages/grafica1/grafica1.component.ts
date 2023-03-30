import { Component } from '@angular/core';
import { ChartData} from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1:string[]=['Download Sales1', 'In-Store Sales1', 'Mail-Order Sales1'];
  public labels2:string[]=['Download Sales2', 'In-Store Sales2', 'Mail-Order Sales2'];
  public labels3:string[]=['Download Sales3', 'In-Store Sales3', 'Mail-Order Sales3'];
  public labels4:string[]=['Download Sales4', 'In-Store Sales4', 'Mail-Order Sales4'];
   
  public data1=[310,450,100];
  public data2=[150,430,100];
  public data3=[350,680,100];
  public data4=[300,100,100];


  public doughnutChartData1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
   { data: this.data1,  
     backgroundColor: ['#6857E6', '#009FEE', '#F02059'] 
   },  
   ]};

   public doughnutChartData2: ChartData<'doughnut'> = {
    labels: this.labels2,
    datasets: [
   { data: this.data2,  
     backgroundColor: ['#6857E6', '#009FEE', '#F02059'] 
   },  
   ]};

   public doughnutChartData3: ChartData<'doughnut'> = {
    labels: this.labels3,
    datasets: [
   { data: this.data3,  
     backgroundColor: ['#6857E6', '#009FEE', '#F02059'] 
   },  
   ]};

   public doughnutChartData4: ChartData<'doughnut'> = {
    labels: this.labels4,
    datasets: [
   { data: this.data4,  
     backgroundColor: ['#6857E6', '#009FEE', '#F02059'] 
   },  
   ]};







  titulo1='Ventas1';
  titulo2='Ventas2';
  titulo3='Ventas3';
  titulo4='Ventas4';





 public doughnutChartData: ChartData<'doughnut'> = {

    
  labels: this.labels1,

  datasets: [
    { data: [ 350, 450, 100 ],  
      backgroundColor: ['#6857E6', '#009FEE', '#F02059'] 
    },  
  ]
 
};

  //  public colors:Color[]=[
  //   {backgroundColor:['#9E120E', '#FF5800', '#FFB414']}
  // ];


}
