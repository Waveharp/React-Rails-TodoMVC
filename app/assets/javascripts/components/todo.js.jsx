var TodoItem = React.createClass({
  render: function() {
    return (
      <li>
        {this.props.todos}
      </li>
    );
  }
});

var TodoInput = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" placeholder="What needs to be done?" />
      </form>
    );
  }
});

var TodoList = React.createClass({
  render: function() {
    return (
      <div>
        <TodoInput />
        <ul>
          <TodoItem todos={TODOS}/>
        </ul>
      </div>
    );
  }
});

var TestItem = React.createClass({
  render: function() {
    return (
      <ul>
        <li>{this.props.todoitem}</li>
      </ul>
    );
  }
});

var TODOS = [
  'Finish todo list',
  'Don\'t mess this up',
  'Configure Vagrant box'
];
