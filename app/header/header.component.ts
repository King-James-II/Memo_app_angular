import { Component } from '@angular/core'; // Importing Component from Angular core

@Component({
  selector: 'app-header', // Selector for the component
  standalone: true, // Standalone flag
  template: '<h1>{{ title }}</h1>', // Template for the component
  styleUrl: './header.component.css', // Style URL for the component
})
export class HeaderComponent {
  title = 'Memo Magic'; // Title property for the header
}
