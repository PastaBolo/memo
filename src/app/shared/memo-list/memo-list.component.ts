import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { MemoService } from '@app/core'
import { Memo } from '@app/shared'

@Component({
  selector: 'memo-memo-list',
  templateUrl: './memo-list.component.html',
  styleUrls: ['./memo-list.component.css']
})
export class MemoListComponent {
  constructor(private router: Router, private memoService: MemoService) {}

  get memos(): Memo[] {
    return this.memoService.memos
  }

  deleteMemo(memo: Memo): void {
    this.memoService.deleteMemo(memo.id).subscribe()
  }

  editMemo(memo: Memo): void {
    this.router.navigate([{ outlets: { modal: ['update', memo.id] } }], { skipLocationChange: true })
  }
}
