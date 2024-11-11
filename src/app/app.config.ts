import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { CashierService } from './components/services/cashier.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideCharts(withDefaultRegisterables()),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyA2uYjAbKj9DULZYS3yNeuItVLXQFtjepo',
        authDomain: 'saint-michael-bc7a2.firebaseapp.com',
        projectId: 'saint-michael-bc7a2',
        storageBucket: 'saint-michael-bc7a2.firebasestorage.app',
        messagingSenderId: '540160178830',
        appId: '1:540160178830:web:64b1fbd3694f83f15e27df',
      })
    ),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'saint-michael-bc7a2',
        appId: '1:540160178830:web:64b1fbd3694f83f15e27df',
        storageBucket: 'saint-michael-bc7a2.firebasestorage.app',
        apiKey: 'AIzaSyA2uYjAbKj9DULZYS3yNeuItVLXQFtjepo',
        authDomain: 'saint-michael-bc7a2.firebaseapp.com',
        messagingSenderId: '540160178830',
      })
    ),
    provideFirestore(() => getFirestore()),
    CashierService,
  ],
};
