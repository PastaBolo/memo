import { Component, OnInit } from '@angular/core'
import { MemoService } from '@app/core'
import { Memo } from '@app/shared'

@Component({
  selector: 'memo-memos',
  templateUrl: './memos.component.html',
  styleUrls: ['./memos.component.css']
})
export class MemosComponent implements OnInit {
  memos: Memo[]
  constructor(private memoService: MemoService) {}

  ngOnInit() {
    this.memoService.getMemos().subscribe((memos: Memo[]) => (this.memos = memos))
  }
}
