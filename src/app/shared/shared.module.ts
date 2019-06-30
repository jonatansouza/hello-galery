import { CardDeckComponent } from './card-deck/card-deck.component';
import { CardComponent } from './card/card.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';

const declarations = [
  DropdownComponent,
  CardComponent,
  CardDeckComponent,
]

@NgModule({
  declarations: declarations,
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
   ],
  exports: [...declarations, AngularFontAwesomeModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return{
      ngModule: SharedModule,
    }
  }
}
