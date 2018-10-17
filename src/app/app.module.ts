import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus as fasFaPlus, faPencilAlt as fasFaPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt as farFaTrashAlt } from '@fortawesome/free-regular-svg-icons'

import { ManageMemoDirective } from '@app/core'
import { ModalComponent, MemoCardComponent, TagCardComponent, ShakeScaleHoverDirective } from '@app/shared'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { MemoFormComponent } from './memo-form/memo-form.component'
import { MemosComponent } from './memos/memos.component'
import { MemoListComponent } from './memos/memo-list/memo-list.component'
import { HeaderComponent } from './header/header.component';
import { LastMemosComponent } from './home/last-memos/last-memos.component';
import { FooterComponent } from './footer/footer.component'

library.add(fasFaPlus, fasFaPencilAlt, farFaTrashAlt)

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    MemoFormComponent,
    MemosComponent,
    MemoListComponent,
    MemoCardComponent,
    TagCardComponent,
    ManageMemoDirective,
    ShakeScaleHoverDirective,
    HeaderComponent,
    LastMemosComponent,
    FooterComponent
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
