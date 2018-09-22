import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ModalComponent, MemoCardComponent, TagCardComponent, ShakeScaleHoverDirective } from '@app/shared'
import { MemoFormComponent } from './memo-form/memo-form.component'
import { MemosComponent } from './memos/memos.component'
import { MemoListComponent } from './memos/memo-list/memo-list.component'
import { ManageMemoDirective } from '@app/core'

library.add(faPencilAlt, faTrashAlt)

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
    ShakeScaleHoverDirective
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
