import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDepositComponent } from './modal-deposit.component';

describe('ModalDepositComponent', () => {
  let component: ModalDepositComponent;
  let fixture: ComponentFixture<ModalDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDepositComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
