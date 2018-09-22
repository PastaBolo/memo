import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Memo } from '@app/shared'

@Component({
  selector: 'sg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  memo: Memo = {
    name: 'My memo',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam quia quisquam, ad necessitatibus est quas iure culpa eos iste! Veritatis nisi non necessitatibus tempore aliquam voluptate exercitationem! Quae numquam molestiae possimus illo, obcaecati laboriosam eaque est magnam soluta nulla, molestias maxime inventore earum dolore nostrum commodi quod iusto recusandae. Quos!',
    tags: ['Angular', 'Ngrx', 'Components'],
    creationDate: 1536561346856,
    id: 1
  }

  constructor(private router: Router) {}

  openModal(): void {
    this.router.navigate([{ outlets: { modal: 'modal-example' } }], { skipLocationChange: true })
  }
}
