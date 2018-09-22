import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ModalComponent } from './modal/modal.component'
import { MemoCardComponent } from './memo-card/memo-card.component'
import { TagCardComponent } from './tag-card/tag-card.component'

@NgModule({
  imports: [CommonModule],
  exports: [ModalComponent, MemoCardComponent, TagCardComponent],
  declarations: [ModalComponent, MemoCardComponent, TagCardComponent]
})
export class SharedModule {}
