import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RitesComponent } from './rites.component';

describe('RitesComponent', () => {
  let component: RitesComponent;
  let fixture: ComponentFixture<RitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
