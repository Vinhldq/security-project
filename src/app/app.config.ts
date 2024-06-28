import { provideAnimations } from "@angular/platform-browser/animations";
import { TuiRootModule } from "@taiga-ui/core";
import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
const firebaseConfig = {
  apiKey: "AIzaSyC9Jdkfo6jeFF4jEDmR6sHz9i8wX7zQzwM",
  authDomain: "phonestore-a6476.firebaseapp.com",
  projectId: "phonestore-a6476",
  storageBucket: "phonestore-a6476.appspot.com",
  messagingSenderId: "370030222122",
  appId: "1:370030222122:web:dd76167770d600f9fd9c53",
  measurementId: "G-WTNSV32CCJ"
};
export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(),
     provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes), importProvidersFrom(TuiRootModule),
       provideFirebaseApp(() => initializeApp(firebaseConfig)),
         provideAuth(() => getAuth()),
          provideFirestore(() => getFirestore()),
           provideStorage(() => getStorage()),
  ],
};
