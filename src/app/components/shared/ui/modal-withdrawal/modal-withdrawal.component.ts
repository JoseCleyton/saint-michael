import { Component, inject } from '@angular/core';
import { CashierService } from '../../../services/cashier.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { Historic } from '../../models/Historic';

@Component({
  selector: 'app-modal-withdrawal',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './modal-withdrawal.component.html',
  styleUrl: './modal-withdrawal.component.scss',
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
})
export class ModalWithdrawalComponent {
  cashierService = inject(CashierService);

  withdrawalForm: FormGroup = new FormGroup({
    value: new FormControl(null, [Validators.required, Validators.min(1)]),
    origin: new FormControl(null, [Validators.required]),
    description: new FormControl(null),
  });

  withdrawal(): void {
    const withdrawal: Historic = this.withdrawalForm.value;
    const today = new Date();
    const formattedDate = today.toLocaleDateString('pt-BR'); 
    withdrawal.date = formattedDate;
    withdrawal.type = 'OUTPUT'
    this.cashierService.withdrawal(withdrawal);
  }
}
