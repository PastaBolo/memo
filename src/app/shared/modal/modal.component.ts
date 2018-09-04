import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'memo-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(private router: Router) {}

  closeModal(): void {
    this.router.navigate([{ outlets: { modal: null } }])
  }
}
