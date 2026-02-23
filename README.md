# TODO App - Week 1 Assignment

## Overview
A fully functional TODO application built with HTML, CSS, JavaScript/jQuery that allows users to create, complete, and delete tasks. All tasks are persisted using the browser's LocalStorage.

## Technologies Used
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with gradients, animations, and transitions
- **JavaScript/jQuery** - Event handling and DOM manipulation
- **Bootstrap 5** - Toast notifications and responsive design
- **LocalStorage** - Browser data persistence

## Features Implemented

### 1. **Create List Item** ✓
- Users enter a task in the input field
- Click "Add" button or press Enter to add task
- Toast notification prevents adding empty tasks

### 2. **Complete Item** ✓
- Click "✓ Complete" button to mark task as done
- Completed tasks show with strikethrough text and green background
- Click again to uncomplete the task
- Status is saved to LocalStorage

### 3. **Delete Item** ✓
- Click "✕ Delete" button to remove task
- Toast confirmation dialog appears asking for confirmation
- User must click "Yes, Delete" to permanently remove task
- Deleted tasks are removed from LocalStorage

### 4. **LocalStorage Implementation** ✓
- All tasks are saved automatically to browser's LocalStorage
- Tasks persist across page refreshes and browser sessions
- Stores both task text and completion status
- Data structure: `todos: [{text: "...", completed: true/false}]`

## Assignment Requirements Met

✅ **Create TODO app using HTML, CSS and Javascript/jQuery**
- HTML provides semantic structure
- CSS provides modern, world-class styling
- JavaScript/jQuery handles all interactivity

✅ **Actions - Create list item, complete item, delete item**
- Add: Input field + Add button
- Complete: Toggle button with visual feedback
- Delete: Delete button with confirmation toast

✅ **Implement browser's LocalStorage to save list**
- Tasks saved automatically on any change
- Tasks loaded on page load from LocalStorage
- Preserves completion status

✅ **Create a repository using your GitHub account**
- Repository: `Dhairyasoniiiii/TODOLIST`

✅ **Push it on Github in branch name "assignment/firstweek"**
- All code pushed to branch `main` in TODOLIST repository

## File Structure
```
.
├── index.html      (HTML structure)
├── styles.css      (CSS styling)
├── script.js       (JavaScript/jQuery functionality)
└── README.md       (This file)
```

## How to Use
1. Open `index.html` in a web browser
2. Enter a task in the input field
3. Click "Add" or press Enter to add the task
4. Click "✓ Complete" to mark task as done
5. Click "✕ Delete" to remove a task (confirm in toast dialog)
6. Tasks are automatically saved and will persist on page reload

## UI Features
- Modern gradient background (purple to pink)
- Smooth animations and transitions
- Toast notifications for validation and confirmation
- Responsive design for all screen sizes
- Hover effects on buttons and task items
- Empty state message when no tasks exist
- Visual feedback for completed tasks

## Author
Created by: Dhairyasoniiiii
