import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CropperModule } from './cropper/cropper.component.module';
import { uploadModule } from './upload/upload.component.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CropperModule,
    uploadModule,
  ],
  exports: [
    CropperModule,
    uploadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
