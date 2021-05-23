import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyimgComponent } from './myimg.component';

describe('MyimgComponent', () => {
  let component: MyimgComponent;
  let fixture: ComponentFixture<MyimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyimgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
