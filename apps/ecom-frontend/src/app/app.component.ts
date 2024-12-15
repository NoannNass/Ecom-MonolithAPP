import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';


@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  private faIconLibrary = inject(FaIconLibrary)
}
