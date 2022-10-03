import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule

  ]
})
export class MaterialModule { }
