import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ExamplengmodelComponent } from './examplengmodel/examplengmodel.component';


const routes: Routes = [
   
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'ngmodel', component: ExamplengmodelComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
