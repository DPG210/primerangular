import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primercomponent';
import { HooksAngular } from '../components/hooksangular/hooksangular.component';
import { DeportesComponent } from '../components/deportescomponent/deportes.component';
import { DeportesComponent2 } from '../components/deportesv2component/deportesv2.component';
import { FormsBinding } from '../components/formsbinding/formsbinding.component';
import { SumarNumerosComponent } from '../components/sumarnumeroscomponent/sumarnumeros.component';

@NgModule({
  declarations: [
    App,
    PrimerComponent,
    HooksAngular,
    DeportesComponent,
    DeportesComponent2,
    FormsBinding,
    SumarNumerosComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
