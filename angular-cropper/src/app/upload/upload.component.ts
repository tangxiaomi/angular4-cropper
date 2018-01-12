import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uploadComponent',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class uploadComponent implements OnInit {

  public reader;
  public reader2;
  public imageData;

  ngOnInit() { }


  public readFile(input) {
    if (input.files && input.files[0]) {
      this.reader = new FileReader();
      this.reader.onload = (e) => {
           this.imageData = e.target.result
      }
      this.reader.readAsDataURL(input.files[0]);
    } else {
      alert('NO FileReader API');
    }
  }

    public upload() {
    this.readFile(document.getElementById('upload'));
  }

  public read(input) {
    if (input.files && input.files[0]) {
      this.reader2 = new FileReader();
      this.reader2.onload = (e) => {
           this.imageData = e.target.result
      }
      this.reader2.readAsDataURL(input.files[0]);
    } else {
      alert('NO FileReader API');
    }
  }

    public up() {
    this.read(document.getElementById('up'));
  }

}
