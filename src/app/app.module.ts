import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ModalComponent } from '@app/shared'
import { MemoFormComponent } from './memo-form/memo-form.component'
import { MemosComponent } from './memos/memos.component'
import { MemoListComponent } from './shared/memo-list/memo-list.component'

library.add(faEdit, faTimes)

@NgModule({
  declarations: [AppComponent, ModalComponent, MemoFormComponent, MemosComponent, MemoListComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, FontAwesomeModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
