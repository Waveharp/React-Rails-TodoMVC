var TodoItem = React.createClass({
  render: function() {
    return (<li>{this.props.todo}</li>);
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
          <TodoItem todos={this.props.todos} />
        </ul>
      </div>
    );
  }
});

var TODOS = [
  {status: 'active', name: 'Finish todo list'},
  {status: 'active', name: "Don't mess this up"},
  {status: 'complete', name: 'Configure Vagrant box'}
];

ReactDOM.render(
  <TodoList todos={TODOS} />,
  document.getElementById('container')
);
