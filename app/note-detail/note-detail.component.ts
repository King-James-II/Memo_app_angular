import { Component, inject } from '@angular/core'; // Importing Component and inject from Angular core
import { NOTES } from '../../notes'; // Importing NOTES from the notes file
import { Router, RouterModule, ActivatedRoute } from '@angular/router'; // Importing Router, RouterModule, and ActivatedRoute from Angular router

@Component({
  selector: 'app-note-detail', // Selector for the component
  standalone: true, // Standalone flag
  templateUrl: './note-detail.component.html', // Template URL for the component
  styleUrl: './note-detail.component.css', // Style URL for the component
  imports: [RouterModule], // Importing RouterModule
})
export class NoteDetailComponent {
  activeRoute = inject(ActivatedRoute); // Injecting ActivatedRoute
  id = Number(this.activeRoute.snapshot.paramMap.get('id')); // Getting the ID from the active route
  note = NOTES.find((i) => i.id === this.id); // Finding the note based on ID

  constructor(private route: ActivatedRoute, private router: Router) { // Constructor with ActivatedRoute and Router injection
    this.id = Number(this.route.snapshot.paramMap.get('id')); // Getting ID from the route snapshot
    this.note = NOTES.find(note => note.id === this.id); // Finding the note based on ID
  }

  deleteNote() {
    if (confirm('Are you sure you want to delete this note?')) { // Confirmation dialog for deleting note
      const index = NOTES.findIndex(note => note.id === this.id); // Finding the index of the note
        if (index !== -1) {
          NOTES.splice(index, 1); // Removing the note from the NOTES array
      }
  this.router.navigate(['/']); // Navigating back to the home page after deletion
    }
  }
}
