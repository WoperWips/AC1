import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogComponent } from './blog-component/blog-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BlogComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AC1');
}
