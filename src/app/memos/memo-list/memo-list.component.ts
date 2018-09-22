import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { MemosService } from '@app/core'
import { Memo } from '@app/shared'

@Component({
  selector: 'memo-memo-list',
  templateUrl: './memo-list.component.html',
  styleUrls: ['./memo-list.component.css']
})
export class MemoListComponent {
  constructor(private router: Router, private memosService: MemosService) {}

  get memos(): Memo[] {
    return this.memosService.memos
  }
}
