import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'sg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  openModal(): void {
    this.router.navigate([{ outlets: { modal: 'modal-example' } }], { skipLocationChange: true })
  }
}