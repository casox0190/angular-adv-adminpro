import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ExamplengmodelComponent } from './examplengmodel/examplengmodel.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ExamplengmodelComponent,
    

  ],

  exports:[
    LoginComponent,
    RegisterComponent,
    ExamplengmodelComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
    
  ]
})

export class AuthModule { }
