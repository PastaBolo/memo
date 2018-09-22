import { Component, Input, Output, EventEmitter } from '@angular/core'

import { Memo } from '@app/shared'

@Component({
  selector: 'memo-memo-card',
  templateUrl: './memo-card.component.html',
  styleUrls: ['./memo-card.component.scss']
})
export class MemoCardComponent {
  @Input()
  memo: Memo

  @Output()
  edit = new EventEmitter<Memo>()

  @Output()
  delete = new EventEmitter<Memo>()

  editMemo(memo: Memo): void {
    this.edit.emit(memo)
  }

  deleteMemo(memo: Memo): void {
    this.delete.emit(memo)
  }
}
