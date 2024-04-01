# Angular Memo Program

This Angular application manages memos with features for adding, viewing, and deleting memos.

## Components

### Header

- **Selector:** `app-header`
- **Functionality:** Displays the application title.

### Notes List

- **Selector:** `app-notes-list`
- **Functionality:** Lists all memos.

### Add Note

- **Selector:** `app-add-note`
- **Functionality:** Provides a form for adding a new memo.

### Note Detail

- **Selector:** `app-note-detail`
- **Functionality:** Displays details of a memo and allows deletion.

## Routing

- **Routes:**
  - `/`: List memos
  - `/new`: Add new memo
  - `/note/:id`: View memo details
