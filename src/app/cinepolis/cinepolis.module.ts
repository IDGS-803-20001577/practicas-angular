import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CinepolisCComponent } from "./cinepolis-c/cinepolis-c.component";
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations:[
        CinepolisCComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatRadioModule,
        MatButtonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatListModule,
        MatSelectModule
    ],
    exports:[
        CinepolisCComponent
    ]
})
export class CinepolisModule {}