import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acteur } from './acteur';

describe('Acteur', () => {
  let component: Acteur;
  let fixture: ComponentFixture<Acteur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Acteur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acteur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
