import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cartefilm } from './cartefilm';

describe('Cartefilm', () => {
  let component: Cartefilm;
  let fixture: ComponentFixture<Cartefilm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cartefilm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cartefilm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
