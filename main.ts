// Importing necessary modules from Angular and third-party libraries
import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { NotesListComponent } from './app/notes-list/notes-list.component';
import { AddNoteComponent } from './app/add-note/add-note.component';
import { NoteDetailComponent } from './app/note-detail/note-detail.component';

// Defining routes for the application
const routes: Routes = [
  { path: '', component: NotesListComponent }, // Default route to the NotesListComponent
  { path: 'new', component: AddNoteComponent }, // Route for adding a new note
  { path: 'note/:id', component: NoteDetailComponent }, // Route for displaying note details based on ID
];

// Bootstrapping the Angular application with the AppComponent and defined routes
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)], // Providing the application routes
});
