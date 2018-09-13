import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { Memo } from '@app/shared'
import { MemoService } from './memo.service'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MemosResolver implements Resolve<Memo[]> {
  constructor(private memoService: MemoService) {}

  resolve(): Observable<Memo[]> {
    return this.memoService.fetchMemos()
  }
}
