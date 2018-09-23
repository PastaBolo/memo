import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus as fasFaPlus, faPencilAlt as fasFaPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt as farFaTrashAlt } from '@fortawesome/free-regular-svg-icons'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ModalComponent, MemoCardComponent, TagCardComponent, ShakeScaleHoverDirective } from '@app/shared'
import { MemoFormComponent } from './memo-form/memo-form.component'
import { MemosComponent } from './memos/memos.component'
import { MemoListComponent } from './memos/memo-list/memo-list.component'
import { ManageMemoDirective } from '@app/core'
import { HeaderComponent } from './header/header.component'

library.add(fasFaPlus, fasFaPencilAlt, farFaTrashAlt)

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    MemoFormComponent,
    MemosComponent,
    MemoListComponent,
    MemoCardComponent,
    TagCardComponent,
    ManageMemoDirective,
    ShakeScaleHoverDirective,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
