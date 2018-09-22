import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'

import { ModalComponent } from './modal/modal.component'
import { MemoCardComponent } from './memo-card/memo-card.component'
import { TagCardComponent } from './tag-card/tag-card.component'
import { ShakeScaleHoverDirective } from './shake-scale-hover.directive'

library.add(faPencilAlt, faTrashAlt)

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  exports: [ModalComponent, MemoCardComponent, TagCardComponent],
  declarations: [ModalComponent, MemoCardComponent, TagCardComponent, ShakeScaleHoverDirective]
})
export class SharedModule {}
