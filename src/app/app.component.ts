import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActorComponent } from "./actor/actor.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ActorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'theater';
}
