import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'memo-memo-form',
  templateUrl: './memo-form.component.html',
  styleUrls: ['./memo-form.component.css']
})
export class MemoFormComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    tags: [[]]
  })

  constructor(private fb: FormBuilder, private router: Router) {}

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

  submit(): void {
    console.log('submitted')
  }

  closeModal(): void {
    this.router.navigate([{ outlets: { modal: null } }])
  }
}
