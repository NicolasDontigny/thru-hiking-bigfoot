import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatDialogModule,
    MatToolbarModule,
  ],
})
export class MaterialModule { }
