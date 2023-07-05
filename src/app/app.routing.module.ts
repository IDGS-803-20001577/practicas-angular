import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CinepolisCComponent } from "./cinepolis/cinepolis-c/cinepolis-c.component";
import { CalculoD2PComponent } from "./distancia2p/calculo-d2-p/calculo-d2-p.component";
import { CalculosRComponent } from "./resistencia/calculos-r/calculos-r.component";
import { PizzeriaComponent } from "./pizzeria/calculo-pizza-p/pizzeria.component";


const routes: Routes = [
    {path: 'Cinepolis', component:CinepolisCComponent},
    {path: 'Distancia', component:CalculoD2PComponent},
    {path: 'Resistencia', component:CalculosRComponent},
    {path: 'Pizzeria', component:PizzeriaComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}