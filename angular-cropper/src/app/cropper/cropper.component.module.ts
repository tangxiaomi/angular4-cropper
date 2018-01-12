import { NgModule } from '@angular/core';
import { CropperComponent } from './cropper.component';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CropperComponent,
  ],
  exports: [
    CropperComponent
  ],
})
export class CropperModule {
}
