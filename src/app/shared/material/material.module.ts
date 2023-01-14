import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  exports: [
    MatDialogModule,
    MatRadioModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
})
export class MaterialModule { }
