//Modulos
import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';

//Componentes
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const routes:Routes=[
//path: '/dashboard' PagesRouting
//path: '/auth' AuthRouting
//path: '/medicos' MedicosRouting
//path: '/compras' ComprasComponent
{path: '', redirectTo:'/dashboard',pathMatch: 'full'},
{path: '**',component:NopagefoundComponent},

];

@NgModule({
    declarations:[],
    imports:[RouterModule.forRoot(routes),
    PagesRoutingModule
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{}
