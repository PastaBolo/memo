import { Component, OnInit, OnDestroy } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'
import { Memo } from '@app/shared'
import { MemosService } from '@app/core'

@Component({
  selector: 'memo-memo-form',
  templateUrl: './memo-form.component.html',
  styleUrls: ['./memo-form.component.css']
})
export class MemoFormComponent implements OnInit, OnDestroy {
  form = this.fb.group({
    name: [null, Validators.required],
    description: [null],
    tags: [[]]
  })
  memoToUpdate: Memo
  private tagsValueSubscription: Subscription

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private memosService: MemosService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.id) this.setFormForUpdate(+params.id)
    })
    this.tagsValueSubscription = this.form.get('tags').valueChanges.subscribe(() => this.form.markAsDirty())
  }

  ngOnDestroy(): void {
    this.tagsValueSubscription.unsubscribe()
  }

  addTag(tagInput: HTMLInputElement): void {
    if (tagInput.value.trim()) {
      const tagsControl = this.form.get('tags')
      const tagList: string[] = tagsControl.value
      tagList.push(tagInput.value)
      tagsControl.setValue(tagList)
      tagInput.value = ''
    }
    tagInput.focus()
  }

  addMemo(): void {
    this.memosService.addMemo(this.form.value).subscribe(() => this.closeModal())
  }

  updateMemo(): void {
    Object.assign(this.memoToUpdate, this.form.value)
    this.memosService.updateMemo(this.memoToUpdate).subscribe(() => this.closeModal())
  }

  closeModal(): void {
    this.router.navigate([{ outlets: { modal: null } }])
  }

  private setFormForUpdate(id: number) {
    this.memoToUpdate = this.memosService.getMemo(id)
    const { name, description, tags } = this.memoToUpdate || {
      name: null,
      description: null,
      tags: []
    }
    this.form.setValue({ name, description, tags: tags.slice() })
  }
}
