import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscovermutualfundsComponent } from './discovermutualfunds.component';

describe('DiscovermutualfundsComponent', () => {
  let component: DiscovermutualfundsComponent;
  let fixture: ComponentFixture<DiscovermutualfundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscovermutualfundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscovermutualfundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
