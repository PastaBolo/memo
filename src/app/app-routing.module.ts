import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MemosResolver } from '@app/core'
import { HomeComponent } from './home/home.component'
import { MemosComponent } from './memos/memos.component'
import { MemoFormComponent } from './memo-form/memo-form.component'

const routes: Routes = [
  {
    path: '',
    resolve: { memos: MemosResolver },
    children: [
      { path: '', pathMatch: 'full', component: HomeComponent },
      {
        path: 'memos',
        component: MemosComponent
      }
    ]
  },
  {
    path: '',
    outlet: 'modal',
    children: [
      {
        path: 'create',
        component: MemoFormComponent
      },
      {
        path: 'update/:id',
        component: MemoFormComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
