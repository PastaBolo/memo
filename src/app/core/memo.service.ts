import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, Subject, of, throwError } from 'rxjs'
import { tap, catchError } from 'rxjs/operators'
import { Memo } from '@app/shared'

@Injectable({
  providedIn: 'root'
})
export class MemoService {
  private memosFetched = false
  private memos: Memo[]
  private memosSource = new Subject<Memo[]>()
  memos$ = this.memosSource.asObservable()
  private memosUrl = 'http://localhost:3000/memos'
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) {}

  getMemos(): Observable<Memo[]> {
    if (!this.memosFetched) {
      return this.http.get<Memo[]>(this.memosUrl).pipe(
        tap(memos => {
          this.memos = memos
          this.memosSource.next(this.memos)
        })
      )
    }
    // In this case, the subscription has to be unsubscribe handly
    this.memosSource.next(this.memos)
    return of(this.memos)
  }

  getMemo(id: number): Memo {
    return this.memos.find(m => m.id === id)
  }

  addMemo(memo: Memo): Observable<Memo> {
    return this.http.post<Memo>(this.memosUrl, memo, this.httpOptions).pipe(
      tap(memo => {
        this.memos.push(memo)
        this.memosSource.next(this.memos)
      })
    )
  }

  updateMemo(memo: Memo): Observable<Memo> {
    return this.http
      .put<Memo>(`${this.memosUrl}/${memo.id}`, memo, this.httpOptions)
      .pipe(tap(memoRes => (memo = memoRes)))
  }

  deleteMemo(id: number): Observable<{}> {
    return this.http.delete(`${this.memosUrl}/${id}`, this.httpOptions).pipe(
      tap(() => {
        this.memos = this.memos.filter(m => m.id !== id)
        this.memosSource.next(this.memos)
      })
    )
  }
}
