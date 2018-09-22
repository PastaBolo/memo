import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'sg-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.css']
})
export class ModalExampleComponent {
  constructor(private router: Router) {}

  closeModal(): void {
    this.router.navigate([{ outlets: { modal: null } }])
  }
}
