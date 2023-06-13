import "./index.css";

const Todo = ({ data }) => {
    return (
        <div className="Todo">
            <p className="Todo__todo">{ data.todo }</p>
        </div>
    );
}

export default Todo;