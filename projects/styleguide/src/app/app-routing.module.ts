import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ModalExampleComponent } from './modal-example/modal-example.component'

const routes: Routes = [
  {
    path: '',
    outlet: 'modal',
    children: [{ path: 'modal-example', component: ModalExampleComponent }]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
