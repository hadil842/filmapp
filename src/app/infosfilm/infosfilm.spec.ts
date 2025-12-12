import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infosfilm } from './infosfilm';

describe('Infosfilm', () => {
  let component: Infosfilm;
  let fixture: ComponentFixture<Infosfilm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infosfilm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Infosfilm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
