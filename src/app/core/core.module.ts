import { firebaseCredential } from './../../environments/firebase-credential';
import { AuthGuard } from './auth.guard';
import { LoginProviderService } from './services/login-provider.service';
import { HeroProviderService } from './services/hero-provider.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './headers/navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const providers = [
  HeroProviderService,
  LoginProviderService,
  AuthGuard
]

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(firebaseCredential),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence()
  ],
  exports: [NavbarComponent, RouterModule, AngularFireModule, AngularFireAuthModule, AngularFirestoreModule],
  providers: providers
})
export class CoreModule { 
  static forRoot(): ModuleWithProviders {
    return{
      ngModule: CoreModule,
      providers: providers,
    }
  }
}
