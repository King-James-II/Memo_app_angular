import { Component, inject } from '@angular/core'; // Importing Component and inject from Angular core
import { ReactiveFormsModule } from '@angular/forms'; // Importing ReactiveFormsModule for working with reactive forms
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Importing FormGroup, FormControl, and Validators from Angular forms
import { NOTES } from '../../notes'; // Importing NOTES constant from notes file
import { Router } from '@angular/router'; // Importing Router from Angular router

@Component({
  selector: 'app-add-note', // Selector for the component
  standalone: true, // Standalone flag
  templateUrl: './add-note.component.html', // Template URL for the component
  styleUrl: './add-note.component.css', // Style URL for the component
  imports: [ReactiveFormsModule], // Importing ReactiveFormsModule for the component
})
export class AddNoteComponent {
    router = inject(Router); // Injecting Router

  addNoteForm = new FormGroup({ // Creating a FormGroup for the add note form
    title: new FormControl('', Validators.required), // Creating a FormControl for the title with required validation
    text: new FormControl(''), // Creating a FormControl for the text
  });

  addNote() { // Method to add a new note
    let title = this.addNoteForm.value.title ?? ''; // Getting the title from the form
    let text = this.addNoteForm.value.text ?? ''; // Getting the text from the form

    if (this.addNoteForm.valid) { // Checking if the form is valid
      let ids = NOTES.map((a) => a.id); // Getting an array of note ids
      let maxId = 0; // Initializing maxId variable

      if (ids.length > 0) { // Checking if there are existing notes
        maxId = Math.max(...ids); // Getting the maximum id from existing notes
      }

      let newNote = { // Creating a new note object
        id: maxId + 1, // Generating a new id
        title: title, // Assigning the title
        text: text, // Assigning the text
      };

      NOTES.unshift(newNote); // Adding the new note to the beginning of the NOTES array
      this.addNoteForm.reset(); // Resetting the form

      this.router.navigateByUrl('/'); // Navigating to the home page
    }
  }
}
