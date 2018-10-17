import { Component } from '@angular/core'
import { MemosService } from '@app/core'
import { Memo } from '@app/shared'

@Component({
  selector: 'memo-memo-list',
  templateUrl: './memo-list.component.html',
  styleUrls: ['./memo-list.component.css']
})
export class MemoListComponent {
  constructor(private memosService: MemosService) {}

  get memos(): Memo[] {
    return this.memosService.memos
  }
}
