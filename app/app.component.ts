import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'; // Importing HeaderComponent
import { NotesListComponent } from './notes-list/notes-list.component'; // Importing NotesListComponent
import { AddNoteComponent } from './add-note/add-note.component'; // Importing AddNoteComponent
import { RouterModule } from '@angular/router'; // Importing RouterModule for routing

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html', // Template URL for the component
  imports: [
    HeaderComponent, // Importing HeaderComponent
    NotesListComponent, // Importing NotesListComponent
    AddNoteComponent, // Importing AddNoteComponent
    RouterModule, // Importing RouterModule for routing
  ],
})
export class AppComponent {}
