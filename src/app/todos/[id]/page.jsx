import axios from 'axios'
import Buttons from './Buttons';

async function loadTodo(todoId) {
    const response = await axios.get(
        'http://localhost:3000/api/todos/' + todoId
    );
    return response.data
}

async function TodoPage({ params }) {

    const todo = await loadTodo(params.id);
    console.log(todo);

    return (
        <section className='flex justify-center items-center'>
            <div className='p-6 bg-white text-slate-700'>
                <p>Name: {todo.name}</p>
                <p>Description: {todo.description}</p>
                <p>Date: {todo.createdAt}</p>
                <Buttons todoId={todo.id} />
            </div>
        </section>
    )
}

export default TodoPage