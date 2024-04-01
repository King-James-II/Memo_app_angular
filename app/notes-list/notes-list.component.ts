import { Component } from '@angular/core'; // Importing Component from Angular core
import { NOTES } from '../../notes'; // Importing NOTES from the notes file
import { RouterModule } from '@angular/router'; // Importing RouterModule from Angular router

@Component({
  selector: 'app-notes-list', // Selector for the component
  standalone: true, // Standalone flag
  templateUrl: './notes-list.component.html', // Template URL for the component
  styleUrl: './notes-list.component.css', // Style URL for the component
  imports: [RouterModule], // Importing RouterModule
})
export class NotesListComponent {
  notes = NOTES; // Assigning NOTES to the notes array

  show(title: string) {
    alert(title); // Alert function to show the title
  }
}
