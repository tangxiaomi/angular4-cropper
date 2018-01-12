import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import * as Cropper from 'cropperjs';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.scss']
})
export class CropperComponent implements OnChanges {
  @Input() croppieBase;
  public previewSrc;
  public cropper;
  public data;
  public cropEndData;
  public cropperMoveData
  constructor(private sanitizer: DomSanitizer) {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.croppieBase.currentValue) {
      if (this.cropper) {
        this.destroyCropper();
      }
      this.previewSrc = this.croppieBase;
      this.createHtml(this.previewSrc);
      this.newCropper();
    }
  }


  public newCropper() {
    console.log(document.getElementById('preview'));
    this.cropper = new Cropper(document.getElementById('preview'), {
      // aspectRatio: 4 / 1,
      autoCrop: false,
      preview: '.img-preview',
      dragMode: 'none',
      viewMode: 2,
      zoomable: false,
      scalable: false,
      rotatable: false,
      center: false,
      highlight: false,
      guides: false,
      background: false,
      toggleDragModeOnDblclick: false,
      ready: function () {
        this.cropper.crop();
        this.cropper.setData({
          height: 300,
          width: 1200
        })
      },
      cropend: function () {
       this.cropEndData = this.cropper.getData();
       console.log(this.cropEndData);
        if (this.cropEndData.width >= 1200 || this.cropEndData.height >= 300) {
            this.cropper.setData({
                width: 1200,
                height: 300
            })
        }
    }
    });
  }

  public clickCrop() {
    const result = this.cropper.getCroppedCanvas();
    const dataurl = result.toDataURL('image/png');

    document.getElementById('test').setAttribute('src', dataurl);
  }

  public destroyCropper() {
    this.cropper.destroy();
  }

  public createHtml(result) {
    const html = '<img id="preview" src="' + result + '">'
    document.querySelector('#localImag').innerHTML = html;
  }
}
