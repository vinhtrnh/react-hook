const Todos = (props) => {
    const { todos, title, deleteTodo } = props
    // props = property 
    // parent > child, data type top > bottom
    const handleDeleteEvent = (id) => {
        deleteTodo(id)
    }
    return (
        <div className="todo-container">
            <h3> {title} </h3>
            {todos.map((todo) => {
                return (
                    <div key={todo.id}>
                        <li className="todo-child" > {todo.title}
                            &nbsp; &nbsp;     <span onClick={() => handleDeleteEvent(todo.id)}>X</span>
                        </li>
                    </div>
                )
            })}
            <hr />
        </div>
    )
}
export default Todos