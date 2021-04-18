import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastPopUpComponent } from './cast-pop-up.component';

describe('CastPopUpComponent', () => {
  let component: CastPopUpComponent;
  let fixture: ComponentFixture<CastPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CastPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
