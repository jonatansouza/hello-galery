import { HeroProviderService } from './services/hero-provider.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './headers/navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

const providers = [
  HeroProviderService
]

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    AngularFontAwesomeModule
  ],
  exports: [NavbarComponent, RouterModule],
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
