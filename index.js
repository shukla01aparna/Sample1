function App(){
    const [todos, setTodos] = React.useState([
      {
        text: 'learn react',
        isCompleted: false,
      },
      {
        text: 'finished Project by weekend',
        isCompleted: false,
      },
      {
        text: 'build todo app',
        isCompleted: false,
      },
         
            
    ]);
  
    const addTodo = text => {
      const newTodos = [...todos, {text:text,isCompleted:false}];
      setTodos(newTodos);
    }

    return(
      <>
        {todos.map((todo, i) => <div className="todo" key={i}>{todo.text}</div>)}
      </>
    );
  }
  
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
  