import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideHttpClient(),
    provideRouter(routes), provideClientHydration(), provideAnimationsAsync(),
     provideFirebaseApp(() => initializeApp({"projectId":"espacio-kawaii","appId":
      "1:150357537716:web:0f91f25bd76dd9338278e1","storageBucket":"espacio-kawaii.appspot.com",
      "apiKey":"AIzaSyD8JsoSh-8falJppoVN3ij1wKfYyjrFU9U","authDomain":"espacio-kawaii.firebaseapp.com",
      "messagingSenderId":"150357537716","measurementId":"G-EQEHJM04RY"})), provideAuth(() => getAuth()), 
      provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(()=> getFirestore()), provideStorage(() => getStorage())]
};
