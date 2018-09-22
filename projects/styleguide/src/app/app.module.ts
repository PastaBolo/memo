import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { SharedModule } from '@app/shared'
import { AppComponent } from './app.component'
import { ModalExampleComponent } from './modal-example/modal-example.component'
import { StyleguideElementComponent } from './styleguide-element/styleguide-element.component'

@NgModule({
  declarations: [AppComponent, ModalExampleComponent, StyleguideElementComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
