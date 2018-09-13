import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { Memo } from '@app/shared'
import { MemosService } from './memos.service'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MemosResolver implements Resolve<Memo[]> {
  constructor(private memosService: MemosService) {}

  resolve(): Observable<Memo[]> {
    return this.memosService.fetchMemos()
  }
}
