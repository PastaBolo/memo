import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, Subscription } from 'rxjs'
import { MemoService } from '@app/core'
import { Memo } from '@app/shared'

@Component({
  selector: 'memo-memo-list',
  templateUrl: './memo-list.component.html',
  styleUrls: ['./memo-list.component.css']
})
export class MemoListComponent implements OnInit, OnDestroy {
  memos$: Observable<Memo[]>
  private memosSubscription: Subscription
  constructor(private router: Router, private memoService: MemoService) {}

  ngOnInit() {
    this.memos$ = this.memoService.memos$
    this.memosSubscription = this.memoService.getMemos().subscribe()
  }

  ngOnDestroy(): void {
    // In case the getMemos Observable is not returned by the HttpClient, there is no automatic unsubscription
    if (!this.memosSubscription.closed) this.memosSubscription.unsubscribe()
  }

  deleteMemo(memo: Memo): void {
    this.memoService.deleteMemo(memo.id).subscribe()
  }

  editMemo(memo: Memo): void {
    this.router.navigate([{ outlets: { modal: ['update', memo.id] } }], { skipLocationChange: true })
  }
}
