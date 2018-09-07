import { Component, Input } from '@angular/core'
import { Observable } from 'rxjs'
import { Memo } from '@app/shared'

@Component({
  selector: 'memo-memo-list',
  templateUrl: './memo-list.component.html',
  styleUrls: ['./memo-list.component.css']
})
export class MemoListComponent {
  @Input()
  memos: Observable<Memo[]>
}
