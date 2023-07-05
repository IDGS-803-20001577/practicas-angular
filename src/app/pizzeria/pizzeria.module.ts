import {NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { PizzeriaComponent } from "./calculo-pizza-p/pizzeria.component";

@NgModule({
    declarations:[
        PizzeriaComponent
    ],
    imports:[
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    MatSelectModule
    ],
    exports:[
        PizzeriaComponent
    ]
    

})
export class PizzeriaModule{}