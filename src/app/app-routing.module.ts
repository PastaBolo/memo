import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MemosComponent } from './memos/memos.component'
import { MemoFormComponent } from './memo-form/memo-form.component'

const routes: Routes = [
  {
    path: 'memos',
    component: MemosComponent
  },
  {
    path: 'create',
    component: MemoFormComponent,
    outlet: 'modal'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
