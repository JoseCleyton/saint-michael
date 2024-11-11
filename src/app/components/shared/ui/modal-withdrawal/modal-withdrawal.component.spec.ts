import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWithdrawalComponent } from './modal-withdrawal.component';

describe('ModalWithdrawalComponent', () => {
  let component: ModalWithdrawalComponent;
  let fixture: ComponentFixture<ModalWithdrawalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalWithdrawalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
