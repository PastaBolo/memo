import { Component } from '@angular/core'
import { MemosService } from '@app/core'
import { Memo } from '@app/shared'

@Component({
  selector: 'memo-last-memos',
  templateUrl: './last-memos.component.html',
  styleUrls: ['./last-memos.component.scss']
})
export class LastMemosComponent {
  tab: string = 'added'

  constructor(private memosService: MemosService) {}

  get memos(): Memo[] {
    return this.memosService.memos.slice(0, 3)
  }
}
