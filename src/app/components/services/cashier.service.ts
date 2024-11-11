import { Inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  CollectionReference,
  DocumentReference,
  Firestore,
} from '@angular/fire/firestore';
import { Historic } from '../shared/models/Historic';

@Injectable({
  providedIn: 'root',
})
export class CashierService {
  private historicCollection: CollectionReference;

  constructor(@Inject(Firestore) firestore: Firestore) {
    this.historicCollection = collection(firestore, 'historic');
  }

  saveDeposit(deposit: Historic): void {
    addDoc(this.historicCollection, <Historic>deposit).then(
      (documentReference: DocumentReference) => {
        console.log(documentReference);
      }
    );
  }

  withdrawal(withdrawal: Historic): void {
    addDoc(this.historicCollection, <Historic>withdrawal).then(
      (documentReference: DocumentReference) => {
        console.log(documentReference);
      }
    );
  }
}
