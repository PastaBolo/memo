import { Directive, Input, HostListener } from '@angular/core'
import { Router } from '@angular/router'
import { MemosService } from './memos.service'
import { Memo } from '@app/shared'

@Directive({
  selector: '[manageMemo]'
})
export class ManageMemoDirective {
  @Input()
  memo: Memo

  @Input('manageMemo')
  action: string

  constructor(private router: Router, private memosService: MemosService) {}

  @HostListener('click')
  onClick() {
    switch (this.action) {
      case 'add':
        this.add()
        break
      case 'edit':
        this.edit(this.memo.id)
        break
      case 'delete':
        this.delete(this.memo.id)
        break
      default:
        break
    }
  }

  private add(): void {
    this.router.navigate([{ outlets: { modal: 'create' } }], { skipLocationChange: true })
  }

  private edit(id: number): void {
    this.router.navigate([{ outlets: { modal: ['update', id] } }], { skipLocationChange: true })
  }

  private delete(id: number): void {
    this.memosService.deleteMemo(id).subscribe()
  }
}
