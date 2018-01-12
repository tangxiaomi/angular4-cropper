import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { uploadComponent } from './upload.component';

describe('uploadComponent', () => {
  let component: uploadComponent;
  let fixture: ComponentFixture<uploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [uploadComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(uploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
