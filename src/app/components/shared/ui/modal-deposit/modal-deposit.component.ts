import { Component, inject } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Historic } from '../../models/Historic';
import { CashierService } from '../../../services/cashier.service';

@Component({
  selector: 'app-modal-deposit',
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
  templateUrl: './modal-deposit.component.html',
  styleUrl: './modal-deposit.component.scss',
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
})
export class ModalDepositComponent {
  cashierService = inject(CashierService);

  depositForm: FormGroup = new FormGroup({
    value: new FormControl(null, [Validators.required, Validators.min(1)]),
    origin: new FormControl(null, [Validators.required]),
    description: new FormControl(null),
  });

  saveDeposit(): void {
    const deposit: Historic = this.depositForm.value;
    const today = new Date();
    const formattedDate = today.toLocaleDateString('pt-BR'); 
    deposit.date = formattedDate;
    deposit.type = 'INPUT'
    this.cashierService.saveDeposit(deposit);
  }
}
