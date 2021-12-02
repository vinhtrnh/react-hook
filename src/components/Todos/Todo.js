const Todos = (props) => {
    const todos = props.todos
    // props = property 
    // parent > child, data type top > bottom
    return (
        <div className="todo-container">
            <h3> {props.title} </h3>
            {todos.map((todo) => {
                return (
                    <li className="todo-child" key={todo.id}> {todo.title} </li>
                )
            })}
            <hr />
        </div>
    )
}
export default Todos