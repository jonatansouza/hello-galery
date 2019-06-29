import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './headers/navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    AngularFontAwesomeModule
  ],
  exports: [NavbarComponent] 
})
export class CoreModule { 
  static forRoot(): ModuleWithProviders {
    return{
      ngModule: CoreModule,
      providers: [ ],
    }
  }
}
