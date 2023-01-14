import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  exports: [
    MatDialogModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
})
export class MaterialModule { }
