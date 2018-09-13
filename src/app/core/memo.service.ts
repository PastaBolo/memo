import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { Memo } from '@app/shared'

@Injectable({
  providedIn: 'root'
})
export class MemoService {
  private _memos: Memo[]
  private memosUrl = 'http://localhost:3000/memos'
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) {}

  get memos(): Memo[] {
    return this._memos
  }

  fetchMemos(): Observable<Memo[]> {
    return this.http.get<Memo[]>(this.memosUrl).pipe(tap(memos => (this._memos = memos)))
  }

  getMemo(id: number): Memo {
    return this._memos.find(m => m.id === id)
  }

  addMemo(memo: Memo): Observable<Memo> {
    return this.http
      .post<Memo>(this.memosUrl, memo, this.httpOptions)
      .pipe(tap(memo => (this._memos = [...this._memos, memo])))
  }

  updateMemo(memo: Memo): Observable<Memo> {
    return this.http
      .put<Memo>(`${this.memosUrl}/${memo.id}`, memo, this.httpOptions)
      .pipe(tap(memoRes => this.memos.map(memo => (memo.id === memoRes.id ? memoRes : memo))))
  }

  deleteMemo(id: number): Observable<{}> {
    return this.http
      .delete(`${this.memosUrl}/${id}`, this.httpOptions)
      .pipe(tap(() => (this._memos = this._memos.filter(m => m.id !== id))))
  }
}
