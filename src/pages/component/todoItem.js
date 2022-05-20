const TodoItem = ({ todo, setRefresh }) => {

  const updateTodo = () => {

    const update = { title: 'tambah', done: false }

    fetch("http://localhost:8000/data/" + todo.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(update)
    }).then(() => {
      console.log('todo updated.')
      // setRefresh(true)
    })
  }

  const deleteTodo = () => {
    fetch("http://localhost:8000/data/" + todo.id, {
      method: "DELETE",
    }).then(() => {
      console.log('todo deleted.')
      // setRefresh(true);
    });
  };

  return (
    <li className={`${todo.done ? "checked" : ""}`}>
      <div onClick={updateTodo}>{todo.title}</div> 
      <span className="close" onClick={deleteTodo}>x</span>
    </li>
  );
};

export default TodoItem;