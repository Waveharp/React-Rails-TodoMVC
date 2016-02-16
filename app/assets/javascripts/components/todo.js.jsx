/*
  App
  <App />
*/

var App = React.createClass({
  getInitialState : function () {
    return {
      todos : {}
    }
  },
  addTodo : function(todo) {
    // cotd line 68
    var timestamp = (new Date()).getTime();
    // update state object
    this.state.todos['todo-' + timestamp] = todo;
    // set the state
    this.setState({todos : this.state.todos});
  },
  renderTodoItem : function (key) {
    return <TodoItem key={key} index={key} details={this.state.todos[key]} />
  },
  render : function() {
    return (
      <div className="TodoMVC">
        <AddTaskForm addTodo={this.addTodo} />
        <h4>Todo Items</h4>
        <ul className="todo-list">
          {Object.keys(this.state.todos).map(this.renderTodoItem)}
        </ul>
      </div>
    )
  }
});



/* 
  Add task form
  <AddTaskForm />
*/

var AddTaskForm = React.createClass({
  createTodo : function(event) {
    // prevent form from submitting
    event.preventDefault();
    // take data from form and create an object
    var todo = {desc : this.refs.desc.value}

    // add todo to app state
    this.props.addTodo(todo);
    // clear form
    this.refs.taskForm.reset();

  }, 
  
  render : function() {
    return (
      <form className="add-todo" ref="taskForm" onSubmit={this.createTodo}>
        <h4>What needs to be done?</h4>
        <input type="text" ref="desc" />
      </form>
    )
  }
});



/*
  TodoItem
  <TodoItem />
*/

  var TodoItem = React.createClass({
    render : function() {
      var details = this.props.details;
      return (
        <li className="todo-item">{details.desc}</li>
      )
    }
  });



/*
  TodoList
  <TodoList />
*/

var TodoList = React.createClass({

  renderTodoList : function(key) {
    var todo = this.props.todos[key];
  },

  render : function() {
    return (
      <div className="todo-list">
        <h4>Todo List</h4>
        <ul>
          <TodoItem />
        </ul>
      </div>
    )
  }
});


