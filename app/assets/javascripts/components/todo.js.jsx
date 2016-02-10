/*
  App
*/

var App = React.createClass({
  render : function() {
    return (
      <div className="TodoMVC">
        <AddTodo />
        <TodoList />
      </div>
    )
  }
});

/* 
  AddTodo
*/

var AddTodo = React.createClass({
  render : function() {
    return (
      <form>
        <h4>What needs to be done?</h4>
        <input type="text" ref="todoItem" />
      </form>
    )
  }
});

/*
  TodoList
*/

var TodoList = React.createClass({
  render : function() {
    return (
      <p>Todo List</p>
    )
  }
});