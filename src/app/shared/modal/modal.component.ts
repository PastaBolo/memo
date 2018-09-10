import { Component, HostListener } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'memo-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(private router: Router) {}

  @HostListener('click')
  onClick() {
    this.closeModal()
  }

  private closeModal(): void {
    this.router.navigate([{ outlets: { modal: null } }])
  }
}
