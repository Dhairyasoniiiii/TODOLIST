// Declare the bootstrap property on the window object
/** @type {any} */
window.bootstrap = window.bootstrap || {};

function showToast(message) {
    const toastElement = document.getElementById('emptyToast');
    if (toastElement) {
        toastElement.querySelector('.toast-body').textContent = message;
        const toast = new bootstrap.Toast(toastElement);
        toast.show();
    }
}

$(document).ready(function() {
    loadTodos();

    $('#addBtn').click(function() {
        const todoText = $('#todoInput').val().trim();
        if (!todoText) {
            showToast('Please enter a task before adding!');
            return;
        }
        addTodo(todoText);
        $('#todoInput').val('');
        saveTodos();
    });

    $('#todoInput').keypress(function(e) {
        if (e.which == 13) {
            $('#addBtn').click();
        }
    });

    $(document).on('click', '.complete-btn', function(e) {
        const li = $(this).closest('.list-group-item');
        const btn = $(this);
        if (li.hasClass('completed')) {
            li.removeClass('completed');
            btn.text('✓ Complete');
        } else {
            li.addClass('completed');
            btn.text('✓ Completed');
        }
        saveTodos();
    });

    let itemToDelete = null;
    let deleteToastInstance = null;

    $(document).on('click', '.delete-btn', function(e) {
        itemToDelete = $(this).closest('.list-group-item');
        const todoText = itemToDelete.find('span').text();
        
        $('#deleteConfirmToast .toast-body p').html(`Are you sure you want to delete "<strong>${todoText}</strong>"?`);
        
        const toastElement = document.getElementById('deleteConfirmToast');
        deleteToastInstance = new bootstrap.Toast(toastElement);
        deleteToastInstance.show();
    });
    
    $(document).on('click', '#confirmDeleteYes', function() {
        if (itemToDelete) {
            itemToDelete.fadeOut(300, function() {
                itemToDelete.remove();
                saveTodos();
            });
            itemToDelete = null;
            
            if (deleteToastInstance) {
                deleteToastInstance.hide();
            }
        }
    });
    
    $(document).on('click', '#confirmDeleteNo', function() {
        itemToDelete = null;
    });

    function addTodo(text) {
        const li = $('<li class="list-group-item"></li>');
        li.html(`
            <span>${text}</span>
            <div class="btn-group">
                <button class="complete-btn">✓ Complete</button>
                <button class="delete-btn">✕ Delete</button>
            </div>
        `);
        $('#todo-list').append(li);
    }

    function saveTodos() {
        const todos = [];
        $('#todo-list li').each(function(index, element) {
            const text = $(this).find('span').text();
            const completed = $(this).hasClass('completed');
            todos.push({ text, completed });
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function loadTodos() {
        const stored = localStorage.getItem('todos');
        const todos = stored ? JSON.parse(stored) : [];
        todos.forEach(function(todo) {
            addTodo(todo.text);
            if (todo.completed) {
                $('#todo-list li:last').addClass('completed');
                $('#todo-list li:last .complete-btn').text('✓ Completed');
            }
        });
    }
});