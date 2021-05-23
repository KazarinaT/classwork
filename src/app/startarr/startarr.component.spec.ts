import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartarrComponent } from './startarr.component';

describe('StartarrComponent', () => {
  let component: StartarrComponent;
  let fixture: ComponentFixture<StartarrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartarrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
