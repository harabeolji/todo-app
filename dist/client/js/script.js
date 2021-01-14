$(() => {
    $.getJSON('/api/todos')
        .then(addTodos)
        .catch((error) => {
        console.log(error);
    });
    $('#todoInput').on('keypress', (event) => {
        if (event.which == 13) {
            createTodo();
        }
    });
    $('.list').on('click', 'span', function (event) {
        event.stopPropagation();
        removeTodo($(this).parent());
    });
    $('.list').on('click', 'li', function () {
        updateTodo($(this));
    });
});
const addTodos = (todos) => {
    todos.forEach(addTodo);
};
const addTodo = (todo) => {
    const newTodo = $(`<li class="task">${todo.name}<span>X</span></li>`);
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);
    if (todo.completed) {
        newTodo.addClass("done");
    }
    $('.list').append(newTodo);
};
const createTodo = () => {
    const userInput = $('#todoInput').val();
    $.post('/api/todos', { name: userInput })
        .then((newTodo) => {
        addTodo(newTodo);
        $('#todoInput').val('');
    })
        .catch((error) => {
        console.log(error);
    });
};
const removeTodo = (todo) => {
    const clickedId = todo.data('id');
    $.ajax({
        method: 'DELETE',
        url: '/api/todos/' + clickedId
    })
        .then(() => {
        todo.remove();
    })
        .catch((error) => {
        console.log(error);
    });
};
const updateTodo = (todo) => {
    const isDone = !todo.data('completed');
    const updateData = { completed: isDone };
    $.ajax({
        method: 'PUT',
        url: '/api/todos/' + todo.data('id'),
        data: updateData
    })
        .then((updatedTodo) => {
        todo.toggleClass("done");
        todo.data('completed', isDone);
    })
        .catch((error) => {
        console.log(error);
    });
};
