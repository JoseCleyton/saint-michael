import { Component, inject, Input, OnInit } from '@angular/core';
import {
  collection,
  collectionData,
  Firestore,
  getDocs,
  or,
  query,
  where,
} from '@angular/fire/firestore';
import { MatTableModule } from '@angular/material/table';
import { Historic } from '../models/Historic';
import { from, Observable, of } from 'rxjs';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-historic',
  standalone: true,
  imports: [MatTableModule, CurrencyPipe, MatIconModule, DatePipe],
  templateUrl: './historic.component.html',
  styleUrl: './historic.component.scss',
})
export class HistoricComponent implements OnInit {

  @Input('historicType') historicType: string = 'INPUT';

  private firestore: Firestore = inject(Firestore);

  historics: Historic[] = [];
  historics$: Observable<Historic[]> = of()

  displayedColumns: string[] = ['Valor', 'Origem', 'Descrição', 'Data', 'Tipo'];

  ngOnInit(): void {
    let q;
    if(this.historicType === 'ALL'){
      q = query(collection(this.firestore, "historic"));
    }else{
      q = query(collection(this.firestore, "historic"), where("type", "==", this.historicType));
    }
   
    getDocs(q).then((querySnapshot) => {  
      querySnapshot.forEach((doc) => {
        const data = doc.data() as Historic;
        this.historics.push(data);
        this.historics$ = of(this.historics);
      });
    }).catch((error) => {
      console.error("Error getting documents: ", error);
    });
  }

  getOrigin(origin: string): string {
    switch (origin) {
      case 'BUY_MATERIAL':
        return 'Comprar Material';
        break;
      case 'DONATION':
        return 'Doação';
      default:
        return '';
        break;
    }
  }
}
