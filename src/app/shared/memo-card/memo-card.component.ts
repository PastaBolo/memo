import { Component, Input } from '@angular/core'
import { Memo } from '../models'

@Component({
  selector: 'memo-memo-card',
  templateUrl: './memo-card.component.html',
  styleUrls: ['./memo-card.component.scss']
})
export class MemoCardComponent {
  @Input()
  memo: Memo
}
