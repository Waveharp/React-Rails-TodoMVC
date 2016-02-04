var TodoItem = React.createClass({
  render: function() {
    return (
      <li>
        todo item 1
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
          <TodoItem />
        </ul>
      </div>
    );
  }
});

var TODOS = [
  {name: 'Finish todo list'},
  {name: "Don't mess this up"},
  {name: 'Configure Vagrant box'}
];

// ReactDOM.render(
//   <TodoList todos={TODOS} />,
//   document.getElementById('container')
// );
