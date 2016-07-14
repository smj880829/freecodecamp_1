angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [];

    todoList.addTodo = function() {
      todoList.todos.push({text:"nbsp"});
      todoList.todoText = '';
    };

    todoList.delTodo = function() {
      todoList.todos.pop();
      todoList.todoText = '';
    };

    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.test = function()
    {
      var str = ""
      angular.forEach(todoList.todos, function(todo) {
        str += todo.text;
      });
        alert(str);
    }

  });
